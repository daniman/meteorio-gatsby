import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import "../styles/index.import.less";

export default ({ data }) => (
  <div className="container">
    <div className="row">
      <h1 className="col-12">Write queries, not code.</h1>
    </div>
    <div className="row">
      <div className="col-7">
        Apollo provides a universal GraphQL API on top of your existing
        services, so you can build new application features fast without waiting
        on backend changes.
      </div>
    </div>
    <div className="row">
      <Link to="/page-2" className="btn btn-primary">
        Go to page 2
      </Link>
      <Link to="/page-2" className="btn btn-primary">
        Go to page 2
      </Link>
    </div>
    <Img resolutions={data.file.childImageSharp.resolutions} />
  </div>
);

export const query = graphql`
  query HomeQuery {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        resolutions(width: 400, height: 400) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }
  }
`;
