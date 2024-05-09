const fs=require('fs');
const express=require('express');
const app=express();

app.get('/', (req, res) => {
  res.send('Go to /product to see the JSON data');
});
app.get('/product', (req, res) => {
  // Read the JSON file
  fs.readFile('product.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error parsing JSON data');
    }
  });
});
app.listen(4000, () => {
  console.log(`you enabled the port 4000 you can use now`);
});
