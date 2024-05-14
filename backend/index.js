const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body; 
  
  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: {"private-key": "1b5fc64c-afa0-4f8f-8bfe-4fbfec25727c" }}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      console.error(e); 
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
