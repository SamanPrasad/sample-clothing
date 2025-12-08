import whatsappIcon from "../../../assets/icons/whatsapp-icon.svg";

function Whatsapp() {
  return (
    <div className="group p-1.5">
      <a
        href="https://wa.me/00000000000?text=Hi%20there!"
        className="relative z-[200]"
        target="_blank"
      >
        <img src={whatsappIcon} className="w-14 aspect-square" />
      </a>
      <div className="absolute right-[70%] bottom-1/4 w-0 group-hover:w-[200px] duration-500 overflow-hidden z-[100]">
        <p className="inline-block font-medium text-base text-nowrap text-white bg-black rounded-4xl px-3.5 py-1 pb-2">
          Hi! Need any help?
        </p>
      </div>
    </div>
  );
}

export default Whatsapp;
