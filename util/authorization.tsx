export const getAccessToken = () => {
  return {
    headers: {
      "BSM-DOORLOCK-TOKEN": localStorage.accessToken,
    },
  };
};

export const getRefreshToken = () => {
  return {
    headers: { "BSM-DOORLOCK-REFRESH-TOKEN": localStorage.refreshToken },
  };
};
