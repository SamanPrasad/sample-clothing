import MobileHeaderSection from "./Mobile/HeaderSection";
import DesktopHeaderSection from "./Desktop/HeaderSection";

function HeaderSection() {
  return (
    <div className="w-full bg-white z-[98] top-0">
      <MobileHeaderSection />
      <DesktopHeaderSection />
    </div>
  );
}

export default HeaderSection;
