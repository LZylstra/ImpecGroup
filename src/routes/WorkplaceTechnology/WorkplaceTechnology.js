import React from "react";
import hero from "../../img/HeroImage.png";
import mask from "../../img/mask-group-1.png";
import mask2 from "../../img/mask-group-1@2x.png";
import { Button, Input, Textarea } from "../../utils/utils";
import ContactForm from "../../components/ContactForm/ContactForm";
import ModuleList from "../../components/ModuleList/ModuleList";
import "./WorkplaceTechnology.css";

function WorkplaceTechnology() {
  return (
    <div className="WorkplaceTechnology">
      <div className="heroimg">
        {/* <img
        src={hero}
        class="hero"
        alt="3D floorplan with Rings of Reality"
      ></img> */}
        <section id="hero-txt">
          {" "}
          <h1 id="wpt-title">Workplace Technology</h1>
          <p>
            Impec's Workplace Technology team are experts in the robust and
            mobile tools and software needed to help transform your built
            environment into the ultimate connected workplace.
          </p>
          <Button>CONTACT US</Button>
        </section>
      </div>
      <section id="top">
        <div className="left rightborder">
          <p className="blue bold">
            From start to finish, we'll discuss your needs, guide you through
            our technology offerings, and determine the right solution for you.
          </p>
          <p>
            We're one of the only technology-agnostic teams operating today.
            What does this mean? That our focus is 100% on you, our clients, and
            not on selling a particular technology or package. Our goal is to
            help you to find the best solutions that fit both your needs and
            budget. We value integrity above all, treating your dollars like
            they're ours.
          </p>
          <p>What you pick Impec, you pick a partner.</p>
        </div>
        <div className="right">
          <h3 className="blue bold large">Connect With Us</h3>
          <p>
            Carly Tortorelli | Senior VP of Workplace Technology
            ctortorelli@impecgroup.com | 916.813.1547
          </p>
          <ContactForm id="contact-form"></ContactForm>
        </div>
      </section>
      <section id="wpt-offerings">
        <div className="left">
          <h2>What We Offer</h2>
          <p>
            With expertise in over 50 different workplace tools, Impec is your
            one-stop-shop for CAD/CAFM technology in the workpace. We offer a
            holistic approach across many different technology areas, including:
          </p>
          <ul>
            <li>Real estate and facility management</li>
            <li>Space management and drawings</li>
            <li>Wayfinding</li>
            <li>Asset tracking</li>
            <li>Move and project management</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Enterprise Asset Management (EAM)</li>
            <li>Integrated Workplace Management System (IWMS)</li>
            <li>Computerized Maintenance Management System (CMMS)</li>
            <li>Point Solutions</li>
          </ul>
        </div>
      </section>
      <section id="modules-section">
        <div id="modules-section-inner">
          <h2 className="blue">Available Modules</h2>
          <ModuleList id="modules-section-list"></ModuleList>
        </div>
      </section>
    </div>
  );
}

export default WorkplaceTechnology;
