import * as motion from "motion/react-client";

interface Props {
  data: {
    id: number;
    title: string;
    img: string;
    src: string;
  };
}

function Category({ data }: Props) {
  return (
    <div className="w-full lg:max-w-sm h-auto">
      <img src={data.img} className="image w-full aspect-square" />
      <div className="title w-full mt-5">
        <h1 className="text-3xl font-bold uppercase text-center">
          {data.title}
        </h1>
      </div>
    </div>
  );
}

export default Category;
