import got from 'got';
const express = require('express');

const app = express()
app.use(express.json())

const steamKey = process.env.STEAM_KEY;

async function getDataGame(game) {
  var price = await got(`https://partner.steam-api.com/ISteamUser/GetAppPriceInfo/v1/?key=${steamKey}&steamid=${userId}&appids=${game.appid}`).json();
  console.log('a');
  console.log(price);

  try {
    var achievements = await got(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${steamKey}&steamid=${userId}&appid=${game.appid}`).json()
    achievements = achievements.playerstats.achievements;

    const numberAchievements = achievements.length;

    const totalAchieved = achievements.reduce(
      (pVal, achievement) => pVal + achievement.achieved, 0
    )

    return {
      appid: game.appid,
      name: game.name,
      playtime_forever: game.playtime_forever,
      totalAchievements: numberAchievements,
      locked: numberAchievements - totalAchieved,
      unlocked: totalAchieved,
      platined: numberAchievements == totalAchieved
    }
  } catch (e) {
    return {
      appid: game.appid,
      name: game.name,
      playtime_forever: game.playtime_forever,
      totalAchievements: 0,
      locked: 0,
      unlocked: 0,
      platined: false
    }
  }
}

app.get("/", async (req, res) => {
  //const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${steamKey}&steamid=${userId}&include_appinfo=true&include_free_sub=true`;
  //let playerGames = await got(url).json();
  //playerGames = playerGames.response;

  //const allGames = await Promise.all(playerGames.games.map(async game => {
  //  return getDataGame(game);
  //}));

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
})

export default { path: '/api/getPlayerGames', handler: app }