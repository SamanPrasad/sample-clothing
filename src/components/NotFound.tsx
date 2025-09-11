interface Props {
  message: string;
}

function NotFound({ message }: Props) {
  return (
    <div className="w-full h-full">
      <h1 className="text-9xl text-center">{message}</h1>
    </div>
  );
}

export default NotFound;
