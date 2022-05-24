require('dotenv').config();
// get environment variable from .env file
const getEnvironmentVariable = (environmentVariable) => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];

  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

// define the environment variables object
const env = {
  PORT: getEnvironmentVariable('PORT'),
  DB_URL: getEnvironmentVariable('DB_URL'),
};

module.exports = env;
