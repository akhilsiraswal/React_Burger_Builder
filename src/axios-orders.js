import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-ed80a-default-rtdb.firebaseio.com/",
});

export default instance;
