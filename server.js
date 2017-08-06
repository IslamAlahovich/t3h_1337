"use strict";

require("dotenv").config()

const server = new (require("vk-io"));

server.setOptions({
   app: process.env.VKAPP_ID,
   key: process.env.VKAPP_KEY
});

server.auth.server()
.then((token) => {
      server.setToken(token);
})

.catch(error) => {
      console.error(error);
});
