<template>
  <div class="_o-layout__item _tac _mvxxs">
    <span :class="props.graphContent ? '_df' : ''" class="_bgwhite _p _bdrs4 _elevation2">
      <span :class="props.graphContent ? '_4/12' : ''">
        {{ props.simpleContent.topText }}
        <strong class="_db _fz24 _pvxs"
          :class="props.simpleContent.specialColor ? `_${props.simpleContent.specialColor}` : ''">
          {{ props.simpleContent.currency ?
              formatCurrency(props.simpleContent.mainValue, props.simpleContent.currency)
              : props.simpleContent.mainValue
          }}
        </strong>
        {{ props.simpleContent.bottomText }}
      </span>

      <PizzaGraph v-if="props.graphContent" :first-number="props.simpleContent.mainValue"
        :second-number="props.graphContent.mainValue" />

      <span v-if="props.graphContent" class="_4/12">
        {{ props.graphContent.topText }}
        <strong class="_db _fz24 _pvxs"
          :class="props.graphContent.specialColor ? `_${props.graphContent.specialColor}` : ''">
          {{ props.graphContent.currency ?
              formatCurrency(props.graphContent.mainValue, props.graphContent.currency)
              : props.graphContent.mainValue
          }}
        </strong>
        {{ props.graphContent.bottomText }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import PizzaGraph from './pizzaGraph.vue';

interface IContent {
  topText: string,
  bottomText: string,
  mainValue: string | number,
  specialColor?: string,
  currency?: string,
}

const props = defineProps({
  type: {
    type: String as () => 'simple' | 'graph',
    required: true,
  },
  simpleContent: {
    type: Object as PropType<IContent>,
    required: true,
  },
  graphContent: {
    type: Object as PropType<IContent>,
  },
})

function formatCurrency(value: number | string, currency: string) {
  if (typeof value === 'string') value = parseFloat(value);
  return value.toLocaleString(undefined, { style: 'currency', currency: currency })
}

</script>

<style>
</style>