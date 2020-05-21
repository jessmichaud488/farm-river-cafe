import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div class="container">
          <form
            id="contact"
            onSubmit={this.submitForm}
            action="https://formspree.io/xknqnavq"
            method="POST"
          >
            <h3>Have questions? Drop us a line!</h3>
            <h4>We politely decline reservations.</h4>

          <input 
            placeholder="Your name" 
            type="text" 
            tabindex="1" 
            required 
            autofocus
          />

        <input 
          placeholder="Your email address" 
          type="email" 
          tabindex="2" 
          required
        />

        <input 
          placeholder="Your Phone Number (optional)" 
          type="tel" 
          tabindex="3"
        />
        
        <textarea 
          placeholder="Type your message here...." 
          tabindex="5" 
          required
        />

        {status === "SUCCESS" ? <p>Thanks!</p> : <button id="contact-submit" name="submit" type="submit">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}

        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Form