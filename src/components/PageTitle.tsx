interface Props {
  title: string;
}

function PageTitle({ title }: Props) {
  return (
    <div className="flex flex-col justify-center items-center h-[20vw] w-full relative">
      <h1 className="text-3xl md:text-5xl font-[Poppins] text-black uppercase font-bold tracking-widest">
        {title}
      </h1>
      <hr className="h-1 w-1/5 border-2 border-black mt-2.5" />
    </div>
  );
}

export default PageTitle;
