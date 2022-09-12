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
import BoxData from '~/components/boxData.vue';
import { playerInfo } from '~/interfaces/playerInfo';

const playerInfos: playerInfo = {
  totalGames: 1958,
  singlePlayer: 1467,
  multiPlayer: 491,
  currentlyValue: 7580,
  lowestValue: 3500,
  currency: "US$",
  gamesPlayed: 491,
  gamesNotPlayed: 1467,
  platinum: 15,
  totalHours: 3580,
  averageHour: 50
}
</script>