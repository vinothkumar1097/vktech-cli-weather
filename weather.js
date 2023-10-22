const logger = require("./responseBuilder.js");
const https = require("node:https");

class WeatherUtils {
  constructor() {
    this.API_KEY = process.env.WEATHER_API ?? null;
  }
  get isValidKey() {
    return this.API_KEY ? true : false;
  }
  /**
   * @param {string} location location name ex: chennai
   * @returns {object}
   * */ 
  getWeather(location) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "GET",
        port: 443,
        host: "api.openweathermap.org",
        path: `/data/2.5/weather?q=${location}&appid=${this.API_KEY}&units=metric`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const request = https.request(options, (res) => {
        res.setEncoding("utf-8");
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", (_) => {
          let jsonObject = chunks.join("");
          try {
            jsonObject = JSON.parse(jsonObject);
            if (jsonObject.cod == 200 && res.statusCode == 200) {
              resolve(logger.success({ location, ...jsonObject }));
            } else {
              reject(logger.failure(jsonObject.message));
            }
          } catch (error) {
            reject(logger.failure(`error parsing response: ${error.message}`));
          }
        });
      });
      request.on("error", (error) => {
        reject(logger.failure(`error sending request: ${error.message}`));
      });
      // request.write();
      request.end();
    });
  }
}
module.exports = WeatherUtils;
