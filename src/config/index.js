import { configDotenv } from "dotenv";

configDotenv.config();

export const configEnvironment = () => {
  const client_id = process.env.CLIENT_ID;
  const secret_id = process.env.SECRET_ID;

  if (!client_id && !secret_id)
    throw new Error(`
        CONFIGURATION INCOMPLETE
    `);

  return { client_id, secret_id };
};
