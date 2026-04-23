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
  <h1>{{ character }}</h1>
   <img :src="imgUrl" />
  <input type="number" min="0" v-on:change="update" />
</template>
