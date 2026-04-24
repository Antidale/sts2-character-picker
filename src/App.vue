<script setup lang="ts">
import { ref } from 'vue'
import CharacterWeight from './components/CharacterWeight.vue'
const ironCladModel = ref(20)
const silentModel = ref(20)
const regentModel = ref(20)
const necrobinderModel = ref(20)
const defectModel = ref(20)
const selectedCharacter = ref('')
const ironclad = "Ironclad"
const silent = "Silent"
const regent = "Regent"
const necrobinder = "Necrobinder"
const defect = "Defect"

function selectCharacter() {
  const luckyNumber = randomInt();
  switch (true) {
    
    case luckyNumber <= ironCladModel.value:
      selectedCharacter.value =  ironclad;
      break;

    case luckyNumber <= ironCladModel.value + silentModel.value:
      selectedCharacter.value = silent
      break;

    case luckyNumber <= ironCladModel.value + silentModel.value + regentModel.value:
      selectedCharacter.value = regent
      break;
    
    case luckyNumber <= ironCladModel.value + silentModel.value + regentModel.value + necrobinderModel.value:
      selectedCharacter.value = necrobinder
      break;
    
    default:
      selectedCharacter.value = defect
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

    
  </header>

  <main>
    <h1>STS 2 Character Selector</h1>
    <p>Give each character chances of being selected. Setting their chances to zero means that character won't be picked</p>
    <section class="weight-group">
      <CharacterWeight v-model.number="ironCladModel" :character="ironclad" :chosen-character="selectedCharacter"></CharacterWeight>
      <CharacterWeight v-model.number="silentModel" :character="silent" :chosen-character="selectedCharacter"></CharacterWeight>
      <CharacterWeight v-model.number="regentModel" :character="regent" :chosen-character="selectedCharacter"></CharacterWeight>
      <CharacterWeight v-model.number="necrobinderModel" :character="necrobinder" :chosen-character="selectedCharacter"></CharacterWeight>
      <CharacterWeight v-model.number="defectModel" :character="defect" :chosen-character="selectedCharacter"></CharacterWeight>
      
    </section>
    <p class="test">
      <button v-on:click="selectCharacter">Dig!</button>

    </p>
    <p v-if="selectedCharacter">
      You dug up: {{  selectedCharacter }}
    </p>
    
    
  </main>
</template>

<style scoped>
  .weight-group{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 80ch;
  }

  h1, p {
    text-align: center;
  }

  main {
    margin-left: auto;
    margin-right: auto;
    max-width: 75rem;
  }

  section {
    margin: 0 auto;
  }

  button {
    
    
    background-color: blue;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 1rem 10rem;
    font-size: large;
    font-weight: bold;
  }
  
  .test {
    margin-left: auto;
    margin-right: auto;
  }

</style>
