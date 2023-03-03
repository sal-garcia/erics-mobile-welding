import { useState } from "react";
import logo from "./images/welding-logos.jpeg";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="container outline m-5 margin-30 flex flex-col align-center gap-5">
      <div className="logo outline">
        <img src={logo} className="logo-img" />
      </div>

      <form
        className="contact col-form outline gap-5 w-100 m-3"
        action="https://formsubmit.co/6ccb7fa23abe1f3aae2c3ba1dc2a69f9"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New Customer!"></input>
        <input type="email" name="email" placeholder="email address" required />
        {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"> */}
        <textarea
          type="text"
          name="name"
          required
          placeholder="your request here"
          className="text outline w-100"
          style={{height: '100px'}}
        >
          {" "}
        </textarea>
        <button type="submit" className="contact-btn w-100">
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
