import axios from "axios"

export function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}



axios.defaults.baseURL = 'https://medium-clone-api-six.vercel.app/';
