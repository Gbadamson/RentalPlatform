import React from "react";
import "./card.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import HotelOutlinedIcon from "@material-ui/icons/HotelOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined";
// import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import testImg from "../Cards/img/testh.jpg";
import { Button } from "antd";
import { Link } from "react-router-dom";

function HomeCard() {
  return (
    <div className="HomeCardMain">
      <Link to="/landing">
        <img src={testImg} alt="" className="CardBigImg" />
      </Link>
      <div className="OtherContDiv">
        <div className="SubOthercont">
          <div className="CardLocationDiv">
            <LocationOnOutlinedIcon style={{ color: "#035b96" }} />
            <div className="LocationText">Apapa Road, Apapa Lagos</div>
          </div>
          <hr />
          <div className="CardpriceAndComp">
            <div className="CardPriceDiv">
              <div className="PriceText">Price</div>
              <div className="PriceNo">N2,000,000</div>
            </div>
            <div className="CardCompDiv">
              <div className="Comp1">
                <HotelOutlinedIcon
                  style={{ color: "#035b96", fontSize: "20px" }}
                />
                <div className="CompNoRound">4</div>
              </div>
              <div className="Comp2">
                <BathtubOutlinedIcon
                  style={{ color: "#035b96", fontSize: "20px" }}
                />
                <div className="CompNoRound">3</div>
              </div>
              <div className="Comp3">
                <DirectionsCarOutlinedIcon
                  style={{ color: "#035b96", fontSize: "20px" }}
                />
                <div className="CompNoRound">2</div>
              </div>
            </div>
          </div>
          <div className="ContButon">
            {/* <div className='TheContCtrl'>
              <ContactPhoneOutlinedIcon style={{
                color: '#035b96', fontSize: '20px'
              }} />
              <div className='ContactDiv'>O9021113392</div>
            </div> */}
            <Button
              style={{
                backgroundColor: "#6497b1",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              <Link to="/landing">View Package</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
