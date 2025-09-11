interface Props {
  currentPage: number;
  perPage: number;
  total: number;
}

function ShowingRange({ currentPage, perPage, total }: Props) {
  const from = (currentPage - 1) * perPage + 1;
  const to = Math.min(currentPage * perPage, total);

  return (
    <p className="text-center text-xs text-[#707070] font-[Poppins]">
      {`Showing ${from == to ? from : from + " - " + to} of ${total} total`}
    </p>
  );
}

export default ShowingRange;
