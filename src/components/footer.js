import React from 'react'

class Footer extends React.Component {
    render () {
        return (
        <div>
          <ul className="footer-div">
            <li>
              <h2>FOLLOW US</h2>
              <a href="https://www.facebook.com/FarmRiverCafe/" target="_blank">FACEBOOK</a>
            </li>
            <li>
              <h2>ADDRESS</h2>
              <p>526 Main St</p>
              <p>New Hartford, CT 06057</p>
            </li>
            <li>
              <h2>HOURS</h2>
                <p>MONDAY: 7:00AM - 3:00PM</p>
                <p>TUESDAY: CLOSED</p>
                <p>WEDNESDAY: 7:00AM - 3:00PM</p>
                <p>THURSDAY: 7:00 - 3:00PM</p>
                <p>FRIDAY: 7:00AM - 9:00PM</p>
                <p>SATURDAY: 8:00AM - 3:00PM</p>
                <p>SUNDAY: 8:00AM - 3:00PM</p>
            </li>
          </ul>
        </div>
        )
    }
}

export default Footer