import { config } from 'dotenv';
config();

const ENV = {
  PORT: process.env.PORT || 3000,
  BASE_URL: process.env.BASE_URL,
};

export default ENV;
