import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
      
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input className="form-control" type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required/>
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
          {message === false && <span>Please, check the input !!!</span>}
          {message && <span>Thanks, I'll reply ASAP :)</span>}
          
        </form>
      </div>
    </div>
  );
}