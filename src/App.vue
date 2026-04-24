<script setup lang="ts">
import { ref } from 'vue'
import CharacterWeight from './components/CharacterWeight.vue'
const ironCladModel = ref(20)
const silentModel = ref(20)
const regentModel = ref(20)
const necrobinderModel = ref(20)
const defectModel = ref(20)
const selectedCharacter = ref('')

function selectCharacter() {
  const luckyNumber = randomInt();
  switch (true) {
    
    case luckyNumber <= ironCladModel.value:
      selectedCharacter.value =  "Ironclad";
      break;

    case luckyNumber <= ironCladModel.value + silentModel.value:
      selectedCharacter.value = "Silent"
      break;

    case luckyNumber <= ironCladModel.value + silentModel.value + regentModel.value:
      selectedCharacter.value = "Regent"
      break;
    
    case luckyNumber <= ironCladModel.value + silentModel.value + regentModel.value + necrobinderModel.value:
      selectedCharacter.value = "Necrobinder"
      break;
    
    default:
      selectedCharacter.value = "Defect"
      break;
  }
}

function randomInt() {
  return Math.floor(Math.random() * (ironCladModel.value + silentModel.value + regentModel.value + necrobinderModel.value + defectModel.value)) + 1
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">STS 2 Character Selector</div>
  </header>

  <main>
    <section class="weight-group">
      <CharacterWeight v-model.number="ironCladModel" character="Ironclad"></CharacterWeight>
      <CharacterWeight v-model.number="silentModel" character="Silent"></CharacterWeight>
      <CharacterWeight v-model.number="regentModel" character="Regent"></CharacterWeight>
      <CharacterWeight v-model.number="necrobinderModel" character="Necrobinder"></CharacterWeight>
      <CharacterWeight v-model.number="defectModel" character="Defect"></CharacterWeight>
    </section>
    <button v-on:click="selectCharacter">Pick one!</button>
    <p> {{  selectedCharacter }}</p>
    
  </main>
</template>

<style scoped>
  .weight-group{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

  }
</style>
