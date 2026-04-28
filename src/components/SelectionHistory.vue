<script setup lang="ts">
import type { CharacterSelection } from '@/types/CharacterSelection';

const props = defineProps<{
    selectionHistory: CharacterSelection[]
}>()
</script>

<template>
    <br />
    <section v-if="props.selectionHistory.length > 0">
      <h4 class="center" >Selection History</h4>
      <ul>
        <li v-for="character in props.selectionHistory" :key="character.id">
          {{ character.name }}
        </li>
      </ul>
    </section>
</template>

<style lang="css" scoped>
    ul,
    ol {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    li {
        margin-left: .5rem;
    }

    section {
        border: 1px solid black;
        border-radius: var(--border-radius);
        padding: 0 1rem
    }

</style>
