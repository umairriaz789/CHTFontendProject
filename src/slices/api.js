export const url = "http://api.secondarydao.com";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};


// http://localhost:5000