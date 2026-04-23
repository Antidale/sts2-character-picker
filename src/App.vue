<script setup lang="ts">
import { ref } from 'vue'
import CharacterWeight from './components/CharacterWeight.vue'
const ironCladModel = ref(0)
const silentModel = ref(0)
const regentModel = ref(0)
const necrobinderModel = ref(0)
const defectModel = ref(0)
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">STS 2 Character Selector</div>
  </header>

  <main>
    <CharacterWeight v-model.number="ironCladModel" character="Ironclad"></CharacterWeight>
    <p>{{ ironCladModel }}</p>
    <CharacterWeight v-model.number="silentModel" character="Silent"></CharacterWeight>
    <p>{{ silentModel }}</p>
    <CharacterWeight v-model.number="regentModel" character="Regent"></CharacterWeight>
    <p>{{ regentModel }}</p>
    <CharacterWeight v-model.number="necrobinderModel" character="Necrobinder"></CharacterWeight>
    <p>{{ necrobinderModel }}</p>
    <CharacterWeight v-model.number="defectModel" character="Defect"></CharacterWeight>
    <p>{{ defectModel }}</p>
  </main>
</template>

<style scoped>

</style>
