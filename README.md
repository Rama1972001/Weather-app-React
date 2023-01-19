# Weather App
### This is a simple weather app that allows users to search for weather information by location. The app utilizes the OpenWeatherMap API to retrieve current weather and forecast data for a given location. The app is built using React and makes use of functional components and hooks.

##  Getting Started
### To run the app locally, you will need to have Node.js and npm (or yarn) installed on your machine.

1. Clone the repository to your local machine
2. In the root of the project, run npm install or yarn install to install all necessary dependencies
3. Replace API_KEY in api.js with your own OpenWeatherMap API key
4. Run the app using npm start or yarn start
* The app should now be running on http://localhost:3000/

## API
#### The app uses the OpenWeatherMap API to retrieve weather data. You need to sign up for an API key in order to use the app. You can sign up for a free API key on the OpenWeatherMap website: https://openweathermap.org/api

## Dependencies
* React
* OpenWeatherMap API
* react-select library for search functionality
## File Structure
#### The project is structured as follows:

* src directory contains the main code for the app
* api.js file contains the API url and key
* App.js file contains the main component for the app
* component directory contains the different components used in the app, such as the search bar, weather and forecast sections.
## Functionality
* The app allows users to search for weather information by location.
* The user can type in a location, and the app will display the current weather for the location and a forecast for the next five days.
* The app makes use of the OpenWeatherMap API to retrieve the weather data.
## Future Work
* Improve the UI design
* Add more features such as displaying the temperature in different units
* Add more data such as humidity and wind speed
* Add ability to save favorite location and display their weather.
