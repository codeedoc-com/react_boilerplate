import Layout from "components/common/Layout";
import { useAppDispatch } from "hooks/store";
import { useEffect } from "react";
import { AUTH } from "store/constants";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: AUTH.LOADING });
    setTimeout(() => {
      dispatch({ type: AUTH.LOADING });
    }, 3000);
  }, []);

  return (
    <Layout>
      <div className="flex items-center p-2 font-bold">This is Home screen</div>
    </Layout>
  );
};

export default Home;
