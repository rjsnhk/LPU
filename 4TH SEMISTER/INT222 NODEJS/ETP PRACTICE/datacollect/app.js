const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post("/", (req, res) => {
  const { firstName, lastName, gender, address } = req.body;

  // Create an object with the form data
  const formData = {
    firstName,
    lastName,
    gender,
    address
  };

  // Print the form data object to the console
  console.log("Form Data:", formData);

  // Write the form data to a file
  fs.writeFile("collected_data.txt", JSON.stringify(formData), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).send("Error saving data");
    } else {
      console.log("Data saved to file: collected_data.txt");
      res.send("Data collected and saved successfully!");
    }
  });
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
