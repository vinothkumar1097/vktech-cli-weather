#!/usr/bin/env node

require("dotenv").config();
// const yargs = require("yargs"); // parse argv in object
const inquirer = require("inquirer"); // interactive cli
const logger = require("./responseBuilder.js");
const GetWeather = require("./weather.js");

async function handleWeather(location) {
  if (!location) return logger.failure("Location not valid");
  const weather = new GetWeather();
  if (!weather.isValidKey)
    return logger.failure("WEATHER_API is not found in .env");
  const response = await weather.getWeather(location);
  return response;
}

/* // way 1 - sending options via cli
const { argv } = yargs(process.argv);
handleWeather(argv.location ?? "")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
*/

// way 2 - interactive terminal
const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "location",
    message: "Enter the location",
    validate: function (input, answers) {
      return input?.trim() ? true : "not a valid location";
    },
  },
])
  .then(({ location }) => handleWeather(location ?? ""))
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((err) => console.log(JSON.stringify(err, null, 2)));
