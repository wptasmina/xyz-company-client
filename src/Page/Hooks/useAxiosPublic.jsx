

import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "localhost:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;