import React from "react";
import { AiFillInstagram, AiOutlineTikTok } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

function SocialMedia() {
  return (
    <>
      <div className="social-media-icon-wrapper me-2">
        <GrFacebookOption className="text-[#232323]" />
      </div>
      <div className="social-media-icon-wrapper mx-2">
        <AiFillInstagram className="text-[#232323]" />
      </div>
      <div className="social-media-icon-wrapper ms-2">
        <AiOutlineTikTok className="text-[#232323]" />
      </div>
    </>
  );
}

export default SocialMedia;
