import React, { useState } from "react";
import { BsLightningFill, BsClockHistory } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import { IoMdCalendar } from "react-icons/io";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { MdPersonPinCircle } from "react-icons/md";
import "../../assets/styles/pages/style.css";

function Welcome() {
  return (
    <div>
      <Hero />
      <NextToHero />
      <ThirdOfHero />
    </div>
  );
}

export default Welcome;

function Hero() {
  return (
    <div className="hero_page">
      <div className="left_flank_welcome">
        <h3>READY WHEN YOU ARE</h3>
        <h1>Hop in. Crack a window. Let’s get back out there.</h1>
        <div className="welcome_buttons">
          <button>Apply to drive</button>
          <button>Sign up to ride</button>
        </div>
      </div>
      <div className="right_flank_welcome">
        <img
          className="waiting_lady"
          src="https://images.ctfassets.net/q8mvene1wzq4/7tbzt327zCvFYIEDZH2WMF/f0f973a6559734ef14c713f041b4134a/home_hero_1_tile.jpg?w=1000&q=60&fm=webp"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/q8mvene1wzq4/4AG5Z6ucAgN07j4WnPenfP/53532edcadcb2086955c2a8338dceeac/Driver_wearing_a_mask_in_the_car.jpg?w=800&q=60&fm=webp"
          alt=""
          className="the_man"
        />
      </div>
    </div>
  );
}

function NextToHero() {
  const [importDetails, setImportDetails] = useState([
    {
      icon: <FaMoneyCheckAlt />,
      title: "Reliable earnings",
      body: "Make money, keep your tips, and use in-app tools to help maximize your earnings.",
    },
    {
      icon: <BsClockHistory />,
      title: "A flexible schedule",
      body: "Be your own boss and drive whenever it works for you.",
    },
    {
      icon: <BsLightningFill />,
      title: "Get paid promptly",
      body: "Cash out your earnings whenever you want with Express Pay and Lyft Direct.",
    },
  ]);
  return (
    <div className="next_to_hero">
      <div className="next_to_hero_left">
        <img
          src="https://images.ctfassets.net/q8mvene1wzq4/3onG3zYDb9ZQ2fi0ID4xKG/4ea1b75f22ed7c57d70490e4b6cf3730/driver_section_2x.jpg?w=1500&q=60&fm=webp"
          alt=""
        />
      </div>
      <div className="next_to_hero_right">
        <h3>READY WHEN YOU ARE</h3>
        <h2>Set your own hours.</h2>
        <h2 className="last_header">Earn on your own terms.</h2>
        <p className="__text">
          Maybe you’re saving up for school. Or keeping flexible hours to spend
          more time with your family. It’s a great time to get in the driver’s
          seat, connect with your community, and earn a little extra cash. Plus,
          you can tell people you’ve got the best boss in town: you.
        </p>
        <div className="next_to_her-_import_details">
          {importDetails.map((importDetail) => (
            <div className="each_important_detail">
              <div className="header_component">
                <div className="icon">{importDetail.icon}</div>
                <p className="header_text">{importDetail.title}</p>
              </div>
              <p className="other_component">{importDetail.body}</p>
            </div>
          ))}
        </div>
        <div className="next_buttons">
          <button>Apply to drive</button>
          <a className="learn_more_next">
            <small>How drivers pay work</small>
            <span>
              <TiArrowRightThick />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ThirdOfHero() {
  return (
    <div className="third_of_hero">
      <div className="third_item_class">
        <div className="third_item_left_flank">
          <h3>READY WITH LYFT</h3>
          <h2>Ready, set, go</h2>
          <h2 className="last_header">in just a few quick taps.</h2>
          <p className="__text">
            Whether you’re following your heart or your busy schedule, we’ll get
            you where you need to go.
          </p>
          <button className="get_ride trip_nugggets">
            <small>
              <MdPersonPinCircle />
            </small>
            <span>Get a reliable ride in minutes</span>
          </button>
          <div className="trip_nugggets other_trip_nuggets">
            <span>
              <RiSurgicalMaskFill />
            </span>
            <span>Know that your driver is wearing a mask</span>
          </div>
          <div className="trip_nugggets other_trip_nuggets">
            <span>
              <IoMdCalendar />
            </span>
            <span>Schedule your ride in advance</span>
          </div>
          <button className="get_ride_button">Get a ride</button>
        </div>
        <div className="third_item_right_flank">
          <img src="https://images.ctfassets.net/q8mvene1wzq4/7s9Tzc2URFLjPDktFhvVdu/65be23d7dd1038fd2c012d470cb5841a/reliable_eng.png?w=1500&q=60&fm=webp" alt="" />
        </div>
      </div>
    </div>
  );
}
