import React from "react";
import Services from "../../shared/Services/Services";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import WhyUs from "../WhyUs/WhyUs";
import SubscribeNewsportal from "./SubscribeNewsportal/SubscribeNewsportal";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services showAll={false} />
      <WhyUs />
      <ContactUs />
      <SubscribeNewsportal />
    </div>
  );
};

export default Home;
