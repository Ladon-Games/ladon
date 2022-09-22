<template>
  <main class="_o-layout _o-layout--xs">
    <BoxData 
      class="_4/12"
      type="simple"
      :simple-content="{
        topText: 'You have',
        mainValue: playerInfos.totalGames,
        bottomText: 'Games',
      }"
    />

    <BoxData 
      class="_8/12"
      type="simple"
      :simple-content="{
        topText: 'You have',
        mainValue: playerInfos.singlePlayer,
        bottomText: 'Games',
        specialColor: 'green'
      }"
      :graph-content="{
        topText: 'You have',
        mainValue: playerInfos.multiPlayer,
        bottomText: 'Games',
        specialColor: 'pink'
      }"
    />

    <BoxData
      class="_6/12"
      type="simple"
      :simple-content="{
        topText: 'Your Account Value is',
        mainValue: playerInfos.currentlyValue,
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
        mainValue: playerInfos.lowestValue,
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
        mainValue: playerInfos.gamesPlayed,
        bottomText: 'of your library',
        specialColor: 'green'
      }"
      :graph-content="{
        topText: 'There are more',
        mainValue: playerInfos.gamesNotPlayed,
        bottomText: 'to play',
        specialColor: 'pink'
      }"
    />

    <BoxData
      class="_4/12"
      type="simple"
      :simple-content="{
        topText: 'You Platinum',
        mainValue: playerInfos.platinum,
        bottomText: 'of your games'
      }"
    />

    <BoxData
      class="_6/12"
      type="simple"
      :simple-content="{
        topText: 'You already Spent',
        mainValue: playerInfos.totalHours,
        bottomText: 'gaming'
      }"
    />

    <BoxData
      class="_6/12"
      type="simple"
      :simple-content="{
        topText: 'You Spend a average of',
        mainValue: playerInfos.averageHour,
        bottomText: 'in each game'
      }"
    />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BoxData from '~/components/boxData.vue';
import { playerInfo } from '~/interfaces/playerInfo';

const playerInfos = ref<playerInfo>({
  totalGames: 0,
  singlePlayer: 0,
  multiPlayer: 0,
  currentlyValue: 0,
  lowestValue: 0,
  currency: 'USD',
  gamesPlayed: 0,
  gamesNotPlayed: 0,
  platinum: 0,
  totalHours: 0,
  averageHour: 0,
});

onMounted( async () => {
  try {
    const getPlayerProfileInfos = fetch('/api/getPlayerProfileInfos').then(res => res.json());
    const getPlayerGames = fetch('/api/getPlayerGames').then(res => res.json());

    Promise.all([getPlayerProfileInfos, getPlayerGames]).then(values => {
      const [playerProfileInfos, playerGames] = values;
    })

  } catch(e) {
    console.log('error: ', e)
  }
});
</script>