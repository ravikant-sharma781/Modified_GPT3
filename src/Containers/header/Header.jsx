import React from "react";
import "./Header.css";
import people from "../../asserts/people.png";
import ai from "../../asserts/ai.png";

function Header() {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quos
          provident et nemo quod voluptatibus eligendi veritatis minus deleniti?
          Cum?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email " />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
