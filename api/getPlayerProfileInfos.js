import express from 'express';

const app = express();
app.use(express.json());

app.get('/getPlayerProfileInfos', async (req, res) => {
  res.send({
    userName: 'Steam_User',
    profileUrl: 'https://store.steampowered.com/',
    userProfilePic: 'https://avatars.akamai.steamstatic.com/9c6f71e9344dbe81e7f14968e7d31bbce26f8a85_medium.jpg',
    profileCreated: 1234567890,
    countryCode: 'BR'
  });
});

module.exports = app
