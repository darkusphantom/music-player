import axios from "axios";

const authURL = process.env.AUTH_URL;
const baseURL = process.env.BASE_URL;
const clientID = process.env.CLIENT_ID;
const client_secret = process.env.SECRET_ID;
const cors = "https://cors-anywhere.herokuapp.com/";

// Para solucionar el problema de CORS:
// Coloca "https://cors-anywhere.herokuapp.com/" + URL
// PD: SI te sigue saliendo el error, debes entrar a https://cors-anywhere.herokuapp.com/ y permitir acceso

const clientApi = axios.create({
  baseURL: cors + baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=credentials&client=${clientID}&client_secret${client_secret}`,
});

const authOptions = axios.create({
  baseURL: authURL,
  mode: "same-origin",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=credentials&client=${clientID}&client_secret${client_secret}`,
});

export const getAuthentication = () => {
  authOptions.post("/api/token").then((data) => {
    console.log(data);
  });
};

export const getArtist = async () => {
  const data = await clientApi.get("");
  return data;
};
