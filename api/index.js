import got from 'got';
const express = require('express')
const app = express()

const steamKey = process.env.STEAM_KEY;
const userId = '76561198115005022'
/* 

Data to get

userName                GETTED
userProfilePic          GETTED
gameList                GETTED
totalGames              GETTED
singlePlayer
multiPlayer
currentlyValue
lowestValue
currency
gamesPlayed             GETTED
gamesNotPlayed          GETTED
platinum                GETTED
numAchievementsDone
numAchievementsUndone
totalPlaytime           
fortnightPlaytime
totalHours              
averageHour             

*/

app.get("/getPlayerProfileInfos", async (req, res) => {
  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamKey}&steamids=${userId}`;
  let playerProfileInfos = await got(url).json();
  playerProfileInfos = playerProfileInfos.response.players[0];

  res.status(200).json({
    userName: playerProfileInfos.personaname,
    profileUrl: playerProfileInfos.profileurl,
    userProfilePic: playerProfileInfos.avatarmedium,
    profileCreated: playerProfileInfos.timecreated,
    countryCode: playerProfileInfos.loccountrycode
  });
})

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

function getTotalDatas(games) {
  const totalGames = games.game_count;

  games.games.forEach() {
    //totalPlatinums
    //totalAchieved
    //totalHoursPlayed
    //averageHour
  }
}

app.get("/getPlayerGames", async (req, res) => {
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${steamKey}&steamid=${userId}&include_appinfo=true&include_free_sub=true`;
  let playerGames = await got(url).json();
  playerGames = playerGames.response;

  const allGames = await Promise.all(playerGames.games.map(async game => {
    return getDataGame(game);
  }));

  const totalDatas = getTotalDatas(playerGames);

  res.status(200).json({
    totalGames: playerGames.game_count,
    gameList: allGames,
  });
})

module.exports = {
  path: '/api',
  handler: app
}