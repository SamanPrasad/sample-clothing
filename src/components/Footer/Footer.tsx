import React from "react";
import "./Footer.css";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaTiktok,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram, AiOutlineTikTok } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer bg-[#232323] hidden sm:block px-5 lg:px-[6vw] pt-5 pb-12">
      <div className="footer-naviation font-[Poppins] grid grid-cols-3 lg:grid-cols-5 text-white px-1 pb-32">
        <div className="mt-5">
          <h2 className="footer-title">Shop</h2>
          <div className="flex flex-col mt-6 text-xs font-medium text-gray-300">
            <Link to={"/"} className="uppercase mb-3">
              Home
            </Link>
            <Link to={"/categories"} className="uppercase mb-3">
              Categories
            </Link>
            <Link to={"/collections"} className="uppercase mb-3">
              Collections
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="footer-title">Information</h2>
          <div className="flex flex-col mt-6 text-xs font-medium text-gray-300">
            <Link to={"/about-us"} className="uppercase mb-3">
              About Us
            </Link>
            <Link to={"/contact-us"} className="uppercase mb-3">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-5 ">
          <h2 className="footer-title">Terms of Use</h2>
          <div className="flex flex-col mt-6 text-xs font-medium text-gray-300">
            <Link to={"/terms-and-conditions"} className="uppercase mb-3">
              Terms & Conditions
            </Link>
            <Link to={"/privacy-policy"} className="uppercase mb-3">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mt-5 col-span-3 lg:col-span-2">
          <h2 className="footer-title">Newsletter Sign Up</h2>
          <p className="mt-2 text-xs text-gray-300">
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>
          <form action="" className="mt-3 flex justify-start">
            <input
              type="text"
              className="border-1 border-gray-300 w-72 lg:flex-auto text-xs px-4 py-2.5"
              placeholder="enter your email address"
            />
            <button className="uppercase cursor-pointer bg-white text-[#232323] hover:text-white hover:bg-black hover:rotate-1 transition-all duration-200 font-bold w-36 ms-2">
              Submit
            </button>
          </form>
          <div className="flex mt-10">
            <div className="social-media-icon-wrapper me-2">
              <GrFacebookOption className="text-[#232323]" />
            </div>
            <div className="social-media-icon-wrapper mx-2">
              <AiFillInstagram className="text-[#232323]" />
            </div>
            <div className="social-media-icon-wrapper ms-2">
              <AiOutlineTikTok className="text-[#232323]" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright flex justify-between text-white text-xs">
        <div>
          <span className="uppercase">&copy; Kelly Felder Clone</span>
        </div>
        <div>Payment Methods</div>
      </div>
    </div>
  );
}

export default Footer;
