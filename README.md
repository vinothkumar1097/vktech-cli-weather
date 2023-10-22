## Get Weather Info - CLI Utility

This package uses `Open Weather API` to fetch weather data. So it's mandatory to register and get the API KEY.

### Installation
Install this package as a dev dependency
```cmd
npm i -D vktech-cli-weather
```

### To obtain API Key

- Visit [OpenWeather](https://openweathermap.org/)
- SignIn to your account. Please create account if you don't have one.
- Then visit [API Keys page](https://home.openweathermap.org/api_keys)
- Generate your api key

Once you obtained your api key, goto your application root directory and create `.env` file if not exist. Then add environment variable like below.

```
WEATHER_API=YOUR_API_KEY
```

### How to run

- First, you should have the package installed.
- Then in your `cmd` terminal, type `vktech-cli-weather` and press ENTER
- You will now see below output

```
>vktech-cli-weather
? Enter the location chennai
```

### Sample Success Response

```
{
  "isSuccess": true,
  "msg": {
    "location": "chennai",
    "coord": {
      "lon": 80.2785,
      "lat": 13.0878
    },
    "weather": [
      {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 29.98,
      "feels_like": 36.78,
      "temp_min": 28.99,
      "temp_max": 29.98,
      "pressure": 1015,
      "humidity": 77
    },
    "visibility": 4000,
    "wind": {
      "speed": 2.06,
      "deg": 50
    },
    "clouds": {
      "all": 40
    },
    "dt": 1697983270,
    "sys": {
      "type": 2,
      "id": 2012809,
      "country": "IN",
      "sunrise": 1697934603,
      "sunset": 1697976993
    },
    "timezone": 19800,
    "id": 1264527,
    "name": "Chennai",
    "cod": 200
  }
}
```

### Sample Failure Response

```
{
  "isSuccess": false,
  "msg": "Invalid API key."
}
```
