<script setup lang="ts">
import { ref, computed } from 'vue'
import CharacterWeight from './components/CharacterWeight.vue'
import FancyButton from './components/FancyButton.vue'
import type { CharacterSelection } from './types/CharacterSelection'
import SelectionHistory from './components/SelectionHistory.vue'
import Header from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import { Store } from './state.ts'

const selectionHistory = ref<CharacterSelection[]>([])
const selectedCharacter = ref('')
let digCount = 0;

function selectCharacter() {
  const luckyNumber = randomInt();
  //TODO: see how this can be cleaned up a bit
  switch (true) {
    
    case luckyNumber <= Store.Ironclad.model:
      selectedCharacter.value =  Store.Ironclad.name
      break;

    case luckyNumber <= Store.Ironclad.model + Store.Silent.model:
      selectedCharacter.value = Store.Silent.name
      break;

    case luckyNumber <= Store.Ironclad.model + Store.Silent.model + Store.Regent.model:
      selectedCharacter.value = Store.Regent.name
      break;
    
    case luckyNumber <= Store.Ironclad.model + Store.Silent.model + Store.Regent.model + Store.Necrobinder.model:
      selectedCharacter.value = Store.Necrobinder.name
      break;
    
    default:
      selectedCharacter.value = Store.Defect.name
      break;
  }

  digCount++;
  selectionHistory.value.push({ id: digCount, name: selectedCharacter.value})
  
  updateChances(selectedCharacter.value);
}

function updateChances(characterName: string) {
   const characterArray = [Store.Ironclad, Store.Silent, Store.Regent, Store.Necrobinder, Store.Defect]

   characterArray.forEach(character => {
      if(character.name == characterName) {
        const newValue = Math.max(character.model - Store.SelectedAdjustmentValue, 0)
        character.model = newValue;
      } else {
        character.model += Store.NotSelectedAdjustmentValue
      } 
   });
}

//TODO: look and see if you can figure out how to only have one way of making this array, possibly in the Store, since doing it here and above on updateChances is a little bonkers
const CharacterModels = computed(() => {
  return [Store.Ironclad, Store.Silent, Store.Regent, Store.Necrobinder, Store.Defect]
})

function randomInt() {
  return Math.floor(Math.random() * (Store.Ironclad.model + Store.Silent.model + Store.Regent.model + Store.Necrobinder.model + Store.Defect.model)) + 1
}

</script>

<template>
    <Header></Header>
    <main>
      <p class="center">Give each character chances of being selected. Setting a value to zero means that character won't be chosen</p>
      <section class="weight-group">
        <CharacterWeight v-for="character in CharacterModels" :key="character.name" v-model.number="character.model" :character="character.name" :chosen-character="selectedCharacter"></CharacterWeight>
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
