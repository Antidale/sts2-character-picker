<script setup lang="ts">
import { ref } from 'vue'
import CharacterWeight from './components/CharacterWeight.vue'
import FancyButton from './components/FancyButton.vue'
import type { CharacterSelection } from './types/CharacterSelection'
import SelectionHistory from './components/SelectionHistory.vue'
import Header from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

const ironCladModel = ref(20)
const silentModel = ref(20)
const regentModel = ref(20)
const necrobinderModel = ref(20)
const defectModel = ref(20)
const selectionHistory = ref<CharacterSelection[]>([])
const selectedCharacter = ref('')
let digCount = 0;
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

  selectionHistory.value.push({ id: digCount, name: selectedCharacter.value})
  digCount++;
}

function randomInt() {
  return Math.floor(Math.random() * (ironCladModel.value + silentModel.value + regentModel.value + necrobinderModel.value + defectModel.value)) + 1
}
</script>

<template>
    <Header></Header>
    <main>
      <p class="center">Give each character chances of being selected. Setting their chances to zero means that character won't be picked</p>
      <section class="weight-group">
        <CharacterWeight v-model.number="ironCladModel" :character="ironclad" :chosen-character="selectedCharacter"></CharacterWeight>
        <CharacterWeight v-model.number="silentModel" :character="silent" :chosen-character="selectedCharacter"></CharacterWeight>
        <CharacterWeight v-model.number="regentModel" :character="regent" :chosen-character="selectedCharacter"></CharacterWeight>
        <CharacterWeight v-model.number="necrobinderModel" :character="necrobinder" :chosen-character="selectedCharacter"></CharacterWeight>
        <CharacterWeight v-model.number="defectModel" :character="defect" :chosen-character="selectedCharacter"></CharacterWeight>
      </section>
      <p class="center">
        <FancyButton button-label="Dig!" @clickMe="selectCharacter" ></FancyButton>
      </p>
      <h3 v-if="selectedCharacter" class="center">
        You dug up: <strong>{{  selectedCharacter }}</strong>
      </h3>
      <SelectionHistory :selection-history="selectionHistory" ></SelectionHistory>
    </main>
    <PageFooter></PageFooter>
</template>

<style scoped>
  .weight-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  main {
    margin-left: auto;
    margin-right: auto;
    max-width: 75rem;
  }

  section {
    margin: 0 auto;
  }

  
</style>
