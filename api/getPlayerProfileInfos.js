import got from 'got';
const express = require('express');

const app = express()
app.use(express.json())

const steamKey = process.env.STEAM_KEY;

app.get("/", async (req, res) => {
  //const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamKey}&steamids=${userId}`;
  //let playerProfileInfos = await got(url).json();
  //playerProfileInfos = playerProfileInfos.response.players[0];

  res.send({
    userName: 'Steam_User',
    profileUrl: 'https://store.steampowered.com/',
    userProfilePic: 'https://avatars.akamai.steamstatic.com/9c6f71e9344dbe81e7f14968e7d31bbce26f8a85_medium.jpg',
    profileCreated: 1234567890,
    countryCode: 'BR'
  });
})

export default { path: '/api/getPlayerProfileInfos', handler: app }