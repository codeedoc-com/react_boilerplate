export const AUTH = Object.freeze({
  LOADING: "AUTH.LOADING",
});

export const authLoading = (payload: boolean) => ({
  type: AUTH.LOADING,
  payload,
});
