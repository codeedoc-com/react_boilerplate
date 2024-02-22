import { AUTH, authLoading } from "store/constants";

const toggleLoader = () => (dispatch: any) => {
  dispatch(authLoading(true));
};
