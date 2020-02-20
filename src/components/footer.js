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
                  <p>MONDAY, WEDNESDAY, THURSDAY: 7:00AM - 3:00PM</p>
                  <p>TUESDAY: CLOSED</p>
                  <p>FRIDAY: 7:00AM - 9:00PM</p>
                  <p>SATURDAY, SUNDAY: 8:00AM - 3:00PM</p>
            </li>
          </ul>
        </div>
        )
    }
}

export default Footer