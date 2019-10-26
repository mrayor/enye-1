import axios from "axios";

export default axios.create({
  baseURL: " https://us-central1-enye-firebase-4d29f.cloudfunctions.net/users"
});
