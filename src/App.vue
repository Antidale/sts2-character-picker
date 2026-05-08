<script setup lang="ts">
import { ref } from 'vue'
import CharacterWeight from './components/CharacterWeight.vue'
import FancyButton from './components/FancyButton.vue'
import type { CharacterSelection } from './types/CharacterSelection'
import SelectionHistory from './components/SelectionHistory.vue'
import Header from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import { Store, Characters } from './state.ts'

const selectionHistory = ref<CharacterSelection[]>([])
const selectedCharacter = ref('')
let digCount = 0;

function selectCharacter() {
  const luckyNumber = randomInt();
  switch (true) {
    
    case luckyNumber <= Store.IroncladModel:
      selectedCharacter.value =  Characters.ironclad
      break;

    case luckyNumber <= Store.IroncladModel + Store.SilentModel:
      selectedCharacter.value = Characters.silent
      break;

    case luckyNumber <= Store.IroncladModel + Store.SilentModel + Store.RegentModel:
      selectedCharacter.value = Characters.regent
      break;
    
    case luckyNumber <= Store.IroncladModel + Store.SilentModel + Store.RegentModel + Store.NecrobinderModel:
      selectedCharacter.value = Characters.necrobinder
      break;
    
    default:
      selectedCharacter.value = Characters.defect
      break;
  }

  digCount++;
  selectionHistory.value.push({ id: digCount, name: selectedCharacter.value})

}

function randomInt() {
  return Math.floor(Math.random() * (Store.IroncladModel + Store.SilentModel + Store.RegentModel + Store.NecrobinderModel + Store.DefectModel)) + 1
}
</script>

<template>
    <Header></Header>
    <main>
      <p class="center">Give each character chances of being selected. Setting a value to zero means that character won't be chosen</p>
      <section class="weight-group">
        <CharacterWeight v-model.number="Store.IroncladModel" :character="Characters.ironclad" :chosen-character="selectedCharacter"></CharacterWeight>
        <CharacterWeight v-model.number="Store.SilentModel" :character="Characters.silent" :chosen-character="selectedCharacter"></CharacterWeight>
        <CharacterWeight v-model.number="Store.RegentModel" :character="Characters.regent" :chosen-character="selectedCharacter"></CharacterWeight>
        <CharacterWeight v-model.number="Store.NecrobinderModel" :character="Characters.necrobinder" :chosen-character="selectedCharacter"></CharacterWeight>
        <CharacterWeight v-model.number="Store.DefectModel" :character="Characters.defect" :chosen-character="selectedCharacter"></CharacterWeight>
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
