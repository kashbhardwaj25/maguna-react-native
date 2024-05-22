if (!process.env.NODE_ENV) {
  require('dotenv').config();
}

const envConfig = {
  SERVER_URL: process.env.REACT_NATIVE_SERVER_URL,
};

export default envConfig;
