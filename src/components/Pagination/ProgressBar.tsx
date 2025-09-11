interface Props {
  currentPage: number;
  pagesCount: number;
}

function ProgressBar({ currentPage, pagesCount }: Props) {
  const progress = (currentPage / pagesCount) * 100;

  return (
    <div className="w-full h-1 bg-[#8b8b8b7c]">
      <div
        className="h-full bg-[#4e4e4e]"
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
