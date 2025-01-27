

import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://xyz-company-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;