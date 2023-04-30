import React from "react";
import "./WhatGPT3.css";
import Feature from "../../components/feature/Feature";



function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore voluptate enim dolorem fugiat ad praesentium molestiae animi cupiditate recusandae et!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Possibilities are beyond your imagination
        </h1>
        <p>Explore The Library </p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.dolorem fugiat ad praesentium molestiae animi"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore voluptate enim dolor praesentium molestiae animi"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Praesentium molestiae animi"
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
