import axios from "axios";

const baseURL = process.env.BASE_URL;
const clientID = process.env.CLIENT_ID;
const client_secret = process.env.SECRET_ID;

const clientApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=credentials&client=${clientID}&client_secret${client_secret}`,
});

export const getAuthentication = async () => {
  const data = await clientApi.get("https://accounts.spotify.com/api/token");
  return data;
};
