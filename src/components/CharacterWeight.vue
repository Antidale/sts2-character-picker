<script setup lang="ts">

const props = defineProps<{
   character: string,
   chosenCharacter: string
}>()

const model = defineModel();

const imgUrl = `/img/StS2_${props.character}.webp`;

function update(e: Event) {
   model.value = (e.target as HTMLInputElement).value
}
</script>

<template>
   <div :class="chosenCharacter === character ? 'active' : ''">
      <img :src="imgUrl" />
      <input type="number" min="0" v-on:change="update" :value="model" />
   </div>
</template>

<style scoped>
   div {
      display: grid;
      border: 1px outset black;
      margin: 1rem;
      padding: .5rem;
      border-radius: 5%;
   }

   img {
      max-width: 170px;
      display: inline;
   }

   input {
      margin-top: .5rem;
      max-width: 4rem;
      margin-left: auto;
      margin-right: auto;
      text-align: right;
   }

   .active {
      background-color: pink;
   }
   
</style>
