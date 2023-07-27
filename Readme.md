# CountryInfo Web App

CountryInfo Web is an interactive web application that allows users to explore information about various countries. With this app, you can access detailed information about a country, including its official name, capital, currency, currency symbol, population, region, area, language, and the start of the week. Additionally, you can view the location of the country on Google Maps or OpenStreetMap by simply clicking on the provided link, which opens the maps directly.

## Features

- Search: The app provides a search box where you can type the name of a country, and the corresponding details will be displayed instantly.
- Filters: You have the option to filter countries alphabetically from A to Z or from Z to A. Additionally, you can filter countries based on regions or languages. Moreover, you can apply a filter to show only countries with a population greater than 100,000.
- Responsive Design: The app is designed to be responsive and will adapt to different screen sizes and devices, providing a seamless user experience.

## Folder Structure

The project's folder structure follows the conventions of a React Vite app, with the following components located in the `src` directory:

1. **Grid Box Component**: This component creates a grid layout to display country boxes with relevant information.
2. **Heading Component**: The Heading component consists of an input box for searching countries and options for applying filters.
3. **Data Component**: The Data component fetches data from the RestCountry API, stores it in boxes, and displays it in the Grid Box component.

## Technologies Used

The app is built using the following technologies:

- React Vite App: A fast development environment for React.
- Tailwind CSS: A utility-first CSS framework for building responsive and stylish interfaces.
- RestCountry API: An API that provides country-related data, which is used to fetch details for this app.

## Installation and Usage

If you want to run the app on your local system, follow these steps:

1. Clone the repository: `git clone https://github.com/Rishabh6306/Countries-Info-ReactWebApp`
2. Navigate to the app directory: `cd app_name`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Feedback and Contributions

If you encounter any issues or have suggestions for improvements, feel free to open a pull request or reach out to me on LinkedIn at [Rishabh Srivastava](https://www.linkedin.com/in/rishabh-srivastava-b68684262/). Your feedback and contributions are highly appreciated!

Enjoy exploring countries with CountryInfo Web App!