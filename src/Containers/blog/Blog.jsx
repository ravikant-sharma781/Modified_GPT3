import React from "react";
import "./Blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot happing, We are blogging about it.
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Apr 21, 2023"
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Apr 21, 2023"
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <Article
            imgUrl={blog03}
            date="Apr 21, 2023"
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <Article
            imgUrl={blog04}
            date="Apr 21, 2023"
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <Article
            imgUrl={blog05}
            date="Apr 21, 2023"
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
