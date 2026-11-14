<script setup lang="ts">
import { ref } from 'vue'
import CharacterWeight from './components/CharacterWeight.vue'
import FancyButton from './components/FancyButton.vue'
import type { CharacterSelection } from './types/CharacterSelection'
import SelectionHistory from './components/SelectionHistory.vue'
import Header from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import { Store, CharacterModels } from './state.ts'

const selectionHistory = ref<CharacterSelection[]>([])
const selectedCharacter = ref('')
let digCount = 0;

function selectCharacter() {
  const luckyNumber = randomInt();

  for(let i = 0; i < CharacterModels.value.length; i++)
  {
    const slicedCharacters = CharacterModels.value.slice(0, i+1)
    const reducedSum = slicedCharacters.reduce(sumOdds, 0)

    if(luckyNumber <= reducedSum)
    {
      selectedCharacter.value =CharacterModels.value[i]?.name || "";
      break;
    }
  }

  digCount++;
  selectionHistory.value.push({ id: digCount, name: selectedCharacter.value})
  
  updateChances(selectedCharacter.value);
}

function updateChances(characterName: string) {
      CharacterModels.value.forEach(character => {
      if(character.name == characterName) {
        const newValue = Math.max(character.model - Store.SelectedAdjustmentValue.model, 0)
        character.model = newValue;
      } else {
        character.model += Store.NotSelectedAdjustmentValue.model
      } 
   });
}

const sumOdds = (acc: number, curr: { model: number }) => acc + curr.model;

function randomInt() {
  const overallChance = CharacterModels.value.reduce(sumOdds, 0);
  return Math.floor(Math.random() * overallChance) + 1
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
        You dug up: <strong>{{ selectedCharacter }}</strong>
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
