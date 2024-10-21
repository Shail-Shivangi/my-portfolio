/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Todo List",
    description:
      "This project addresses a fundamental need for many users by incorporating local storage implementation, ensuring data persistence across sessions. Built using React.js, it offers a modern and efficient approach to managing state and user interactions, making it an essential tool for developers and users alike..",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Event Management",
    description:
      "I developed a foundational Event Management project that leverages blockchain technology, featuring a smart contract built with Solidity. By applying core blockchain principles, this project ensures secure, transparent, and decentralized event management solutions.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Gradient Colour",
    description:
      "Through this project, I gained practical experience in creating gradient color effects and deepened my understanding of commonly used color codes in CSS. The project was built using HTML, CSS, and JavaScript, allowing me to integrate these technologies effectively to enhance visual design and user interface stylings.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Ecommerce website",
    description:
      "This project is a collaborative effort to build an e-commerce website. In the future, we plan to enhance the platform by integrating a decentralized database and leveraging blockchain technology to ensure data security and transparency, positioning the project for cutting-edge advancements in the field of e-commerce.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
