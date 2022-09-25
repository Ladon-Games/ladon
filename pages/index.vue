<template>
  <div class="_o-wrapper">
   <HeaderComp :userName="playerProfileInfos.userName" :userImage="playerProfileInfos.userProfilePic"/>

    <main class="_o-layout _o-layout--xs">
      <BoxData 
        class="_4/12"
        type="simple"
        :simple-content="{
          topText: 'You have',
          mainValue: playerGames.totalGames,
          bottomText: 'Games',
        }"
      />

      <BoxData 
        class="_8/12"
        type="simple"
        :simple-content="{
          topText: 'You have',
          mainValue: playerGames.totalGames,
          bottomText: 'Games',
          specialColor: 'green'
        }"
        :graph-content="{
          topText: 'You have',
          mainValue: playerGames.totalGames,
          bottomText: 'Games',
          specialColor: 'pink'
        }"
      />

      <BoxData
        class="_6/12"
        type="simple"
        :simple-content="{
          topText: 'Your Account Value is',
          mainValue: playerGames.accountValue,
          bottomText: 'At the moment',
          currency: 'USD',
          specialColor: 'green'
        }"
      />

      <BoxData
        class="_6/12"
        type="simple"
        :simple-content="{
          topText: 'But the lowest price was',
          mainValue: playerGames.lowestAccountValue,
          bottomText: 'in some day',
          currency: 'USD',
          specialColor: 'pink'
        }"
      />

      <BoxData 
        class="_8/12"
        type="simple"
        :simple-content="{
          topText: 'You have played',
          mainValue: playerGames.totalGamesPlayed,
          bottomText: 'of your library',
          specialColor: 'green'
        }"
        :graph-content="{
          topText: 'There are more',
          mainValue: playerGames.totalGames - playerGames.totalGamesPlayed,
          bottomText: 'to play',
          specialColor: 'pink'
        }"
      />

      <BoxData
        class="_4/12"
        type="simple"
        :simple-content="{
          topText: 'You have Platined',
          mainValue: playerGames.gamesPlatined,
          bottomText: 'of your games'
        }"
      />

      <BoxData
        class="_6/12"
        type="simple"
        :simple-content="{
          topText: 'You already Spent',
          mainValue: playerGames.totalHoursPlayed,
          bottomText: 'gaming'
        }"
      />

      <BoxData
        class="_6/12"
        type="simple"
        :simple-content="{
          topText: 'You Spend a average of',
          mainValue: playerGames.totalHoursPlayed / playerGames.totalGames,
          bottomText: 'in each game'
        }"
      />
    </main>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BoxData from '~/components/boxData.vue';
import HeaderComp from '~/components/headerComp.vue';
import { IPlayerProfileInfo, IPlayerGamesData } from '~/interfaces/playerInfo';

const playerProfileInfos = ref<IPlayerProfileInfo>({
  userName: '',
  profileUrl: '',
  userProfilePic: '',
  profileCreated: 0,
  countryCode: ''
})

const playerGames = ref<IPlayerGamesData>({
  gameList: {},
  totalGames: 0,
  totalGamesPlayed: 0,
  gamesPlatined: 0,
  totalHoursPlayed: 0,
  accountValue: 0,
  lowestAccountValue: 0,
})

onMounted( async () => {
  try {
    const getPlayerProfileInfos = fetch('/api/getPlayerProfileInfos').then(res => res.json());
    const getPlayerGames = fetch('/api/getPlayerGames').then(res => res.json());

    Promise.all([getPlayerProfileInfos, getPlayerGames]).then(values => {
      const [playerProfileInfosFetched, playerGamesFetched] = values;

      playerProfileInfos.value = playerProfileInfosFetched;
      playerGames.value = playerGamesFetched;
    })

  } catch(e) {
    console.log('error: ', e)
  }
});
</script>