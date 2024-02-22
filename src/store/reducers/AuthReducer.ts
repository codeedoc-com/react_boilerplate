import { AUTH } from "store/constants";

type initialStateType = {
  loading: boolean;
};
const initialState: initialStateType = {
  loading: false,
};

const AuthReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case AUTH.LOADING:
      return {
        ...state,
        loading: payload ?? !state.loading,
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
