import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "eoinbreen";
const yourPassword = "password";
const yourAPIKey = "bedffcec-c95b-4d67-9714-061a5f9b3e06";
const yourBearerToken = "8536cabb-eb6c-4b7b-96ed-cdaf62e6d4cd";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    var response = await axios.get(API_URL + "random");
    var result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  }catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try{
    var response = await axios.get(API_URL + "all?page=1", {
      auth:{
      username:yourUsername,
      password:yourPassword,
    }});
    var result = JSON.stringify(response.data);
    res.render("index.ejs", { 
      content: result, 
      });
  }catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try{
    var response = await axios.get(API_URL + "filter/", {
      params:{
        score: 5,
        apiKey: yourAPIKey,
    }});
    var result = JSON.stringify(response.data);
    res.render("index.ejs", { 
      content: result, 
      });
  }catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try{
    var response = await axios.get(API_URL + "secrets/42", {
      headers:{
        Authorization: `Bearer ${yourBearerToken}`,
    }});
    var result = JSON.stringify(response.data);
    res.render("index.ejs", { 
      content: result, 
      });
  }catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
