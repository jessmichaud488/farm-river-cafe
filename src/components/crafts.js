import React from 'react'

class Crafts extends React.Component {
    render () {
        return (
        <div>
            <div className="logo-div">
                    <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
                </div>
        <div id="crafts-collage">
            <img src={require("../images/bracelets.jpg")} alt="Gemstones bracelets" className="one-pic" id="bracelets-pic"></img>
            <img src={require("../images/cloth.jpg")} alt="Cloth crafts" className="two-pic" id="cloth-crafts-pic"></img>
            <img src={require("../images/crafts.jpg")} alt="Various crafts" className="three-pic" id="various-crafts-pic"></img>
            <img src={require("../images/gemstonesandoils.jpg")} alt="Gemstones and oils" className="four-pic" id="gemstones-and-oils-pic"></img>
            <img src={require("../images/headbands.jpg")} alt="Cloth headbands" className="five-pic" id="cloth-headbands-pic"></img>
            <img src={require("../images/knits.jpg")} alt="Knit crafts" className="six-pic" id="knit-crafts-pic"></img>
            <img src={require("../images/mugs.jpg")} alt="Mugs" className="nine-pic" id="mugs-pic"></img>
            <img src={require("../images/pottery.jpg")} alt="Pottery" className="eight-pic" id="pottery-pic"></img>
            <img src={require("../images/lavenderpack.jpg")} alt="Lavender herbal pack" className="seven-pic" id="herbal-pack-pic"></img>
        </div>

        <div id="crafts-text-div">
            <p>Not only do we love to support the local music scene in the Litchfield Hills but we support our artisans too!</p>
            <p>Come and browse our selection of pottery, jewelry, and crafts while waiting for lunch in our sitting room.</p>
        </div>
        </div>
        )
    }
}

export default Crafts