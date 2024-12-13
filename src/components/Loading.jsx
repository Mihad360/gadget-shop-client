import { RiseLoader } from "react-spinners";

const Loading = () => {
  return (
      <RiseLoader className="w-52 mx-auto pt-52" color="#f66325"  loading={true} size={25} />
  );
};

export default Loading;
