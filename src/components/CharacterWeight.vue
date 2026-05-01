<script setup lang="ts">

const props = defineProps<{
   character: string,
   chosenCharacter: string
}>()

const model = defineModel();

const imgUrl = new URL(`../assets/StS2_${props.character}.png`, import.meta.url).href;

function update(e: Event) {
   model.value = (e.target as HTMLInputElement).value
}
</script>

<template>
   <div :class="chosenCharacter === character ? 'active' : ''" :alt="character" :title="character">
      <img :src="imgUrl" />
      <!-- Firefox, why do you not prevent non alpha keys on a numeric input? -->
      <input type="number" min="0" v-on:change="update" :value="model" />
   </div>
</template>

<style scoped>
   div {
      display: grid;
      border: 1px outset var(--color);
      margin: 1rem;
      padding: .5rem;
      border-radius: var(--border-radius);
      box-shadow: .2rem .2rem .6rem .1rem oklch(from var(--color) l c h / calc(alpha - .2));
      background-color: oklch(from var(--background) calc(l + .2) c h / calc(alpha - .1));
   }

   img {
      /* override the base style here to make sure the cards fit into a row on most reasonable viewport widths on desktop */
      max-inline-size: 170px;
      margin: 5px;
   }

   input {
      margin-top: .5rem;
      max-width: 4rem;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
   }

   .active {
      background-color: oklch(from var(--accent) l c h / calc(alpha - .2));
      box-shadow:
         inset 0 0 .2rem .2rem oklch(from var(--accent) l c h / calc(alpha - 0.1)),
         .2rem .2rem .6rem .1rem oklch(from var(--color) l c h / calc(alpha - .2));
   }

</style>
