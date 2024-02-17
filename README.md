
Project Title: Portfolio Website with API Integration

Overview
This project is a personal portfolio website that dynamically fetches and displays information from a backend API. The portfolio showcases personal details, work experience, projects, and skills. The backend server is built using Node.js with Express, and it connects to a SQL Server database to retrieve personal information.

Features
Display personal details, including full name, role position, and bio.
Showcase work experience with details such as job title, company, and description.
Highlight projects with images, titles, and descriptions.
Display a list of skills.


Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: SQL Server
External Libraries: Font Awesome for icons


Project Structure
index.html: HTML file for the portfolio website.
style.css: CSS file for styling the website.
client.js: JavaScript file for frontend logic.
mouseScript.js: JavaScript file for mouse effect.
server.js: Backend server file built with Express.js.
script.js: JavaScript file for additional scripting.
PassportImg.jpg, Fix Health.png, DOM.png, READER.png: Images used in the portfolio.


Setup Instructions
Clone the repository: git clone https://github.com/VyankateshMiskin1010

Navigate to the project directory: cd portfolio-website

Install dependencies: npm install

Start the backend server: node server.js

Open the portfolio in a web browser: http://localhost:3000

API Endpoint

GET /api/personal_info: Retrieve personal information from the backend.

Important Notes

Ensure Node.js is installed on your machine before running the project.

Make sure to have a SQL Server instance running with the provided configuration.

Happy coding!
