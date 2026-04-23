<script setup lang="ts">

//I don't really understand why this is needed, since I'm using the prop in the template, but...
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
   character: string
}>()

const model = defineModel();

function update(e: Event) {
   model.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <h1>{{ character }}</h1>
  <img :src="`StS2_${character}.webp`" />
  <input type="number" min="0" v-on:change="update" />
</template>
