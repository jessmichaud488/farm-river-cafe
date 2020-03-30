import React from 'react'

class Footer extends React.Component {
    render () {
        return (
        <div>
          <ul className="footer-div">
            <li>
              <h2 id="follow">FOLLOW US</h2>
              <img src={require("../images/facebook.png")} href="https://www.facebook.com/FarmRiverCafe/" id="facebook-logo" target="_blank" rel="noopener noreferrer" alt="facebook logo"></img>FACEBOOK
              <img src={require("../images/instagram.png")} href="https://www.instagram.com/farmrivercafect/" id="instagram-logo" target="_blank" rel="noopener noreferrer" alt="instagram logo"></img>@farmrivercafect
            </li>
            <li>
              <h2>ADDRESS</h2>
              <p>526 Main St</p>
              <p>New Hartford, CT 06057</p>
              <br></br>
              <br></br>
              <br></br>
            </li>
            <li>
              <h2 id="hours">HOURS</h2>
                  <p>Monday-Thursday: 7:30AM-3:30PM</p>
                  <p>Friday: 7:30AM-3:30PM
                    <br></br>
                    (Open Mic 6:30PM-9:30PM)</p>
                  <p>Saturday: 8:30AM-5:00PM</p>
                  <p>Sunday: CLOSED</p>
            </li>
          </ul>
        </div>
        )
    }
}

export default Footer