import React from "react";
import Img from "gatsby-image";

export default ({ resolutions }) => {
  return (
    <div className="member">
      <div className="flipper">
        <div className="front">
          <Img resolutions={resolutions} />
          {/* <div className="name">{{name}}</div>
            <div className="position">{{#if founder}}
              <span className="founder">Founder</span>{{/if}}{{title}}</div>
          </div> */}
        </div>
        <div className="back">hello</div>
      </div>
    </div>
  );
};

{
  /* <div class="card">
      <div class="flipper">
        <div class="front" style="background-image: url('/img/company/team/{{ picture }}')">
          <div class="overlay">
            <div class="name">{{name}}</div>
            <div class="position">{{#if founder}}
              <span class="founder">Founder</span>{{/if}}{{title}}</div>
          </div>
        </div>
        <div class="back">
          {{#if twitter}}
          <a target="_blank" href="https://twitter.com/{{ twitter }}" class="social twitter">
            <span class="icon icon-twitter"></span>
            <span>@{{twitter}}</span>
          </a>{{/if}} {{#if github}}
          <a target="_blank" href="https://github.com/{{ github }}" class="social github">
            <span class="icon icon-github"></span>
            <span>{{github}}</span>
          </a>{{/if}}
          <div class="bio">{{ bio }}</div>
        </div>
      </div>
    </div> */
}
