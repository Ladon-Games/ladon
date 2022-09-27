import express from 'express';

const app = express();
app.use(express.json());

app.get('/getPlayerGames', async (req, res) => {
  res.send({
    gameList: [
      {
        "appid": 92,
        "name": "Codename Gordon",
        "playtime_forever": 0,
        "achievements": { "total": 20, "achieved": 8 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 211,
        "name": "Source SDK",
        "playtime_forever": 0,
        "achievements": { "total": 20, "achieved": 8 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 440,
        "name": "Team Fortress 2",
        "playtime_forever": 0,
        "achievements": { "total": 20, "achieved": 8 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 570,
        "name": "Dota 2",
        "playtime_forever": 0,
        "achievements": { "total": 7, "achieved": 7 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 630,
        "name": "Alien Swarm",
        "playtime_forever": 0,
        "achievements": { "total": 20, "achieved": 8 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 1840,
        "name": "Source Filmmaker",
        "playtime_forever": 0,
        "achievements": { "total": 20, "achieved": 8 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 8230,
        "name": "Sam & Max 104: Abe Lincoln Must Die!",
        "playtime_forever": 0,
        "achievements": { "total": 20, "achieved": 8 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 17510,
        "name": "Age of Chivalry",
        "playtime_forever": 0,
        "achievements": { "total": 10, "achieved": 10 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 17520,
        "name": "Synergy",
        "playtime_forever": 101,
        "achievements": { "total": 20, "achieved": 8 },
        "price": { "actual": 80, "lowest": 13 }
      },
      {
        "appid": 17530,
        "name": "D.I.P.R.I.P. Warm Up",
        "playtime_forever": 0,
        "achievements": { "total": 20, "achieved": 20 },
        "price": { "actual": 80, "lowest": 13 }
      }
    ],
    totalGames: 20,
    totalGamesPlayed: 10,
    gamesPlatined: 10,
    totalHoursPlayed: 10,
    accountValue: 10,
    lowestAccountValue: 10
  });
});

module.exports = app
