import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../images/paymentImage/bkash.jpg";
import img3 from "../../../images/paymentImage/PayPal-Logo-2014-present.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary pt-36 pb-12">
      <div className="container mx-auto grid grid-cols-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">TOURBD</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            odio voluptatem at quas eos reprehenderit aut et nesciunt nobis
            voluptas
          </p>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-3">Follow us : </h2>
            <div className="w-2/3 flex justify-between">
              <a className="text-2xl" href="https://www.facebook.com">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="text-2xl" href="https://www.facebook.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-2xl" href="https://www.facebook.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-2xl" href="https://www.facebook.com">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div>
            <h2 className="text-2xl font-semibold">Contact us</h2>
          </div>
          <div className="space-y-5 mt-5">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="flex flex-col ml-3">
                <a className="font-medium" href="tel:01812348901">
                  018 1234 8901
                </a>
                <a className="font-medium" href="tel:01845678910">
                  018 4567 8910
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="flex flex-col ml-3">
                <a className="font-medium" href="mailto:Website1@gmail.com">
                  Website1@gmail.com
                </a>
                <a className="font-medium" href="mailto:Website2@gmail.com">
                  Website2@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="flex flex-col ml-3">
                <h2 className="font-medium">
                  2752 Willison Street Eagan, United State
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <h2 className="text-2xl font-semibold">Support</h2>
          <div className="mt-4">
            <Link to="/home">
              <h2 className="font-medium">Home</h2>
            </Link>
            <Link to="/services">
              <h2 className="font-medium my-2">Packages</h2>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">We Accepts : </h2>
          <div className="grid grid-cols-2 gap-7 mt-4">
            <div>
              <img className="rounded-3xl" width="150" src={img1} alt="" />
            </div>
            <div>
              <img className="rounded-3xl" width="140" src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
