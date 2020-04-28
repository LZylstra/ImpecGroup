import React, { Component } from "react";
import { Button, Input, Textarea } from "../../utils/utils";
import "./ContactForm.css";

export default class ContactForm extends Component {
  state = { error: null };

  handleSubmitContact = () => {
    console.log("submit");
  };

  render() {
    const { error } = this.state;
    return (
      <form className="ContactForm" onSubmit={this.handleSubmitContact}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>

        {/* <label htmlFor="ContactForm_Contact_name">NAME</label> */}
        <Input
          name="Contact_name"
          id="ContactForm_Contact_name"
          placeholder="NAME"
        ></Input>

        {/* <label htmlFor="ContactForm_email" >EMAIL</label> */}
        <Input
          required
          name="email"
          id="ContactForm_email"
          placeholder="EMAIL"
        ></Input>

        {/* <label htmlFor="ContactForm_message">MESSAGE</label> */}
        <Textarea
          required
          name="phone"
          id="ContactForm_phone"
          placeholder="MESSAGE"
        ></Textarea>

        <Button id="submit-contact" type="submit">
          SUBMIT
        </Button>
      </form>
    );
  }
}
