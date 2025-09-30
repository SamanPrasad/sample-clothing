import clsx from "clsx";

type Props = {
  openStatus: boolean;
  close: () => void;
};

function Overlay({ openStatus, close }: Props) {
  return (
    <div
      className={clsx(
        "fixed inset-0 w-full h-full bg-black z-[99] transition-opacity duration-700",
        openStatus && "opacity-75",
        !openStatus && "pointer-events-none opacity-0 delay-200"
      )}
      onClick={close}
    ></div>
  );
}

export default Overlay;
