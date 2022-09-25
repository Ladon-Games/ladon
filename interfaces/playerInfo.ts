export interface IPlayerProfileInfo {
  userName: string,
  profileUrl: string,
  userProfilePic: string,
  profileCreated: number,
  countryCode: string
}

interface IGames {

}

export interface IPlayerGamesData {
  gameList: IGames,
  totalGames: number,
  totalGamesPlayed: number,
  gamesPlatined: number,
  totalHoursPlayed: number,
  accountValue: number,
  lowestAccountValue: number,
}