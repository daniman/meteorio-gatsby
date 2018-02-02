import React from "react";
import Link from "gatsby-link";

import Card from "../components/Card";

import "../styles/index.import.less";

import json from "./team/data.js";
const tmap = {};
json.forEach(t => (tmap[t.picture] = t));

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default ({ data }) => {
  const imgs = data.allFile.edges
    .filter(({ node: { name, extension } }) => !!tmap[`${name}.${extension}`])
    .map(({ node: { name, extension, childImageSharp: { resolutions } } }) => ({
      ...tmap[`${name}.${extension}`],
      resolutions
    }))
    .filter(n => !!n.resolutions);

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">Our team</h1>
      </div>
      <div className="row">
        <div className="col-12">
          We're a small, close-knit group of writers, evangelists, event
          organizers, designers, product devs, systems experts, and many other
          things. We accomplish a remarkable amount of work for our size because
          we're passionate about what we do and we have grand aspirations of
          making software development as fast, easy, and accessible as possible.
        </div>
        <div className="col-12">
          We love building tools for developers because we're all nerds at
          heart. Many of us come from a technical background. Our founders
          originally met as undergrads at MIT, and created the Meteor platform
          after inadvertently writing most of it to power their original idea, a
          travel app for iPads.
        </div>
      </div>
      <div className="row">
        {shuffle(imgs).map(({ picture, resolutions }) => (
          <Card key={`${picture}`} resolutions={resolutions} />
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query TeamQuery {
    allFile(filter: { relativePath: { regex: "team/imgs/*.*/i" } }) {
      edges {
        node {
          name
          extension
          childImageSharp {
            resolutions(width: 170, height: 170) {
              ...GatsbyImageSharpResolutions_tracedSVG
            }
          }
        }
      }
    }
  }
`;
