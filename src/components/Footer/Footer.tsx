import "./Footer.css";
import footerData from "../../data/footer";
import Menu from "./Menu/Menu";
import Newsletter from "./Newsletter/Newsletter";
import SocialMedia from "./SocialMedia/SocialMedia";
import CopyRight from "./CopyRight/CopyRight";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import Accordion from "./Accordion/Accordion";
import AccordionList from "./Accordion/AccordionsList";

function Footer() {
  return (
    <div className="footer bg-[#232323] pt-5 pb-12">
      <div className="footer-naviation font-[Poppins] grid grid-cols-3 lg:grid-cols-5 text-white px-5 xl:px-[6vw] mb-20">
        <div className="hidden md:grid md:grid-cols-3 col-span-3 mt-5">
          {footerData.map((menu) => (
            <Menu menu={menu} />
          ))}
        </div>
        <div className="md:hidden col-span-3">
          <AccordionList data={footerData} />
        </div>
        <div className="mt-5 col-span-3 lg:col-span-2">
          <Newsletter />
          <div className="flex mt-10">
            <SocialMedia />
          </div>
        </div>
      </div>
      <hr className="h-0.5 bg-white opacity-5" />
      <div className="footer-copyright flex justify-between items-center text-white text-xs mt-10 px-5 xl:px-[6vw]">
        <CopyRight />
        <PaymentMethods />
      </div>
    </div>
  );
}

export default Footer;
