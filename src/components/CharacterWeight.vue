<script setup lang="ts">

const props = defineProps<{
   character: string
}>()

const model = defineModel();

const imgUrl = new URL(`../assets/StS2_${props.character}.webp`, import.meta.url).href;

function update(e: Event) {
   model.value = (e.target as HTMLInputElement).value
}
</script>

<template>
   <section>
      <img :src="imgUrl" />
      <input type="number" min="0" v-on:change="update" :value="model" />
   </section>
</template>

<style scoped>
   section {
      border: 1px solid black;
      margin: 1rem;
      padding: .5rem;
      max-width: 25ch;
   }

   img {
      
      max-width: 100px;
   }
   
</style>
