<template>
  <div class="pizza" :style="{ '--percentage': percentage }"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  firstNumber: { type: Number, required: true },
  secondNumber: { type: Number, required: true }
})

const percentage = ref<string>('0');

watch(
  () => props.firstNumber,
  () => { 
    percentage.value = calcPercentage(props.firstNumber, props.secondNumber)
  }
)

function calcPercentage(firstNumber: number, secondNumber: number) {
  const totalValue = firstNumber + secondNumber;
  const minorPercentage = totalValue / secondNumber * 10
  return minorPercentage + '%';
}

</script>

<style scoped>
.pizza {
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-image: conic-gradient(var(--pink) var(--percentage), var(--green) 1%);
}
</style>