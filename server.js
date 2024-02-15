// server.js

// Import required modules
const express = require("express"); // Import Express.js, a web application framework for Node.js
const sql = require("mssql/msnodesqlv8"); // Import mssql/msnodesqlv8 for SQL Server connectivity
const cors = require("cors"); // Import CORS middleware for handling Cross-Origin Resource Sharing

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Configuration for connecting to the SQL Server
const config = {
  server: "TRUELEAF\\SQLEXPRESS", // Server name
  database: "portfolio", // Database name
  driver: "msnodesqlv8", // SQL Server driver
  options: {
    trustedConnection: true, // Use Windows authentication for connection
  },
};

// Define a route for handling GET requests to "/api/personal_info"
app.get("/api/personal_info", (req, res) => {
  // Connect to SQL Server using the provided configuration
  sql.connect(config, function (err) {
    if (err) {
      // Handle connection errors
      console.error("Error connecting to SQL Server:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Create a new SQL request
      var request = new sql.Request();

      // Execute a SQL query to select all records from the "personal_info" table
      request.query("select * from personal_info", function (err, records) {
        if (err) {
          // Handle query execution errors
          console.error("Error executing query:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          // Set the content type to application/json
          res.setHeader("Content-Type", "application/json");

          // Send the JSON response containing the records from the query
          res.send(JSON.stringify(records.recordset));
        }

        // Close the SQL connection
        sql.close();
      });
    }
  });
});

// Define the port for the server to listen on (use the environment variable PORT if available)
const PORT = process.env.PORT || 3000;

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
