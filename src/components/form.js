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
      <form
        className="contact-form"
        onSubmit={this.submitForm}
        action="https://formspree.io/xknqnavq"
        method="POST"
      >
    
    <div className="row">
        <div className = "column">
            <label className="input-block" >Your Name:</label>
            <input 
            type="text" 
            name="customer"
            className="input-block" 
            />

            <label className="input-block">Email:</label>
            <input 
            type="email" 
            name="email"
            className="input-block" 
            required
            />
        </div>

        <div className = "column">
            <label>Message:</label>
            <input 
            type="text" 
            name="message"
            id="message-box"
            required
            />
        </div>
    </div>

        {status === "SUCCESS" ? <p>Thanks!</p> : <button id="form-button" type="submit">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(e) {
    e.preventDefault();
    const form = e.target;
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