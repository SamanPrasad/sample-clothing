import React from "react";

function Newsletter() {
  return (
    <div>
      <h2 className="footer-title">Newsletter Sign Up</h2>
      <p className="mt-2 text-xs text-gray-300">
        Sign up for exclusive updates, new arrivals & insider only discounts
      </p>
      <form action="" className="mt-3 flex justify-start">
        <input
          type="text"
          className="border-1 border-gray-300 min-w-0 flex-auto md:w-72 md:flex-none lg:flex-auto text-xs px-4 py-2.5"
          placeholder="enter your email address"
        />
        <button className="w-32 flex-none uppercase cursor-pointer bg-white text-[#232323] hover:text-white hover:bg-black hover:rotate-1 transition-all duration-200 font-bold ms-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
