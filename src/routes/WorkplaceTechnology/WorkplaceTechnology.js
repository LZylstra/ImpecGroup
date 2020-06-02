import React from "react";
import hero from "../../img/HeroImage.png";
import mask from "../../img/mask-group-1.png";
import mask2 from "../../img/mask-group-1@2x.png";
import officeimg from "../../img/office-Image.png";
import fiftyimg from "../../img/50.png";
import eightyimg from "../../img/80.png";
import fourfifty from "../../img/450.png";
import { Button, Input, Textarea } from "../../utils/utils";
import ContactForm from "../../components/ContactForm/ContactForm";
import ModuleList from "../../components/ModuleList/ModuleList";
import OfferingList from "../../components/OfferingList/OfferingList";
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
        <div className="right contact-wpt">
          <h3 className="blue bold large">Connect With Us</h3>
          <p id="carly-contact">
            Carly Tortorelli | Senior VP of Workplace Technology
            ctortorelli@impecgroup.com | 916.813.1547
          </p>
          <ContactForm id="contact-form"></ContactForm>
        </div>
      </section>
      <section id="wpt-offerings">
        <div className="left offerings-outer-left">
          <h2>What We Offer</h2>
          <div id="offerings-text-left">
            <p>
              With expertise in over 50 different workplace tools, Impec is your
              one-stop-shop for CAD/CAFM technology in the workpace. We offer a
              holistic approach across many different technology areas,
              including:
            </p>
            <ul>
              <li>Real estate and facility management</li>
              <li>Space management and drawings</li>
              <li>Wayfinding</li>
              <li>Asset tracking</li>
              <li>Move and project management</li>
            </ul>
          </div>
        </div>
        <div className="right offerings-outer-right">
          <OfferingList></OfferingList>
        </div>
      </section>
      <section id="modules-section">
        <div id="modules-section-inner">
          <h2 className="blue">Available Modules</h2>
          <ModuleList id="modules-section-list"></ModuleList>
        </div>
      </section>
      <section className="impec-difference-section">
        <div className="left impec-diff-inner-l">
          <h2 className="blue">The Impec Difference</h2>
          <p>
            Our Technology Discovery Process is wholly agostic, designed to help
            you find the exact technologies you need. Our strategic experts will
            help you implement and continue to support you through launch and
            beyond to ensure success for you and your company. We can help you
            replace existing technologies, supplement current tools, or
            implement point solutions that will help you create the perfect
            system for you and your workplace.
          </p>
        </div>
        <div className="right impec-diff-inner-r">
          <img src={officeimg} alt="office"></img>
        </div>
      </section>
      <section className="why-invest-section">
        <h2 className="blue">Why Invest in Workplace Technology?</h2>
        <div className="why-invest-inner">
          <div className="left invest-left">
            <p id="simple">It’s simple.</p>
            <p>
              At Impec, we believe that technology in the workplace directly
              affects the culture and efficiency of your company. It’s the glue
              that helps keep your staff collaborative, effective, and
              strategic. Modern, state-of-the-art workplaces lead to better
              employee experiences and company culture, which in turn leads to
              retaining your staff and attracting the best talent.
            </p>
            <p>
              In short, your workplace technology equals your workplace culture,
              which equals your workplace efficiency.
            </p>
          </div>
          <div className="right invest-right">
            <p>
              Think about it this way. What does a fax machine say about a
              company?{" "}
            </p>
            <p>
              Sure, there may be practical reasons for having one. But does it
              help employees work more efficiently? Make them excited to come to
              work? Better yet, does it help save money?{" "}
            </p>
            <p>
              {" "}
              To help you remain competitive, we’ll help you select
              state-of-the-art technologies that either make you money, or save
              you money.
            </p>
          </div>
        </div>
      </section>
      <section id="numbers-section">
        <h2>The Numbers Back Us Up</h2>
        <div id="inner-charts">
          <div class="inner-one">
            <img src={fiftyimg} alt="50% chart"></img>
            <p>
              Within the next few years, 50% of the U.S. workforce will be made
              up of millennials. That number will rise to 75% by 2030.
            </p>
          </div>
          <div id="inner-two">
            <img src={eightyimg} alt="80% chart"></img>
            <p>
              80% of those millennials believe that workplace technology has a
              direct influence on job decisions.
            </p>
          </div>
          <div id="inner-three">
            <img src={fourfifty} alt="450% chart" id="third-img"></img>
            <p>
              Employees at companies lacking workplace technology are 450% more
              likely to want to leave and work elsewhere.
            </p>
          </div>
        </div>
      </section>
      <section id="partners">
        <div className="partners-inner">
          <h2>Our Partners</h2>
          <p>
            The Impec Workplace Technology team has built alliances and
            connections with leading manufacturers and consultants:
          </p>
        </div>
      </section>
    </div>
  );
}

export default WorkplaceTechnology;
