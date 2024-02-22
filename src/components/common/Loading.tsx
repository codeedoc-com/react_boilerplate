import { CircularProgress } from "@mui/material";
import { useAppSelector } from "hooks/store";

const Loading = () => {
  const { loading } = useAppSelector(({ auth }) => auth);

  if (!loading) return <></>;

  return (
    <div className="absolute -inset-0 flex justify-center items-center bg-[rgb(211,211,211,0.5)]">
      <CircularProgress />
    </div>
  );
};

export default Loading;
