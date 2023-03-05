import logo from "./images/welding-logos.jpeg";
import Carousel from "./Carousel";
import React, { useState } from "react";

function App() {

   const [active, setActive] = useState(false);
   const handleClick = () => {
     setActive(!active);
   };

  return (
    <div className="container outline m-5 margin-30 flex flex-col align-center gap-5">
      <div className="logo outline">
        <img src={logo} className="logo-img" />
      </div>

      <form
        className="contact col-form outline gap-5 w-100 m-3"
        action="https://formsubmit.co/bcf4112140ce2dae866a6dcebb447a79"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New Customer!"></input>
        <input type="email" name="email" placeholder="email address" required />
        <textarea
          name="description"
          placeholder="provide a description"
          required
          className="text outline w-100"
          style={{ height: "100px" }}
        >
          {"I would like:"}
        </textarea>
        <button type="submit" onClick={handleClick}
        className={active ? "black-btn" : "white-btn"}>
          Contact me
        </button>
      </form>

      <div className="about outline">
        <p>
          Precise Welder with 15+ years of experience using a variety of welding
          techniques to create strong, finished steel, cast iron and aluminum
          structures. Works efficiently in fast-paced construction environments
          without sacrificing superior quality..
        </p>
      </div>

      <Carousel className="carousel-div outline" />
    </div>
  );
}

export default App;
