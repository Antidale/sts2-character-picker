<script setup lang="ts">

const props = defineProps<{
    buttonLabel: string
}>()

</script>

<template>
    <button v-on:click="$emit('clickMe')">
        <span class="btn-content">
            {{ props.buttonLabel }}
        </span>
        <div class="btn-cells">
            <span v-for="number in Array.from( {length: 20}, (_, i) => i)" :key="number"></span>
        </div>
    </button>
</template>

<style lang="css" scoped>
/* Concept from: 
    https://codepen.io/kevinpowell/pen/VYvWKBV
    (youtube video: https://www.youtube.com/watch?v=bjw0ka0raMA)
*/
button {
  --transition-duration: 400ms;

  font-size: 1.2rem;
  font-weight: bold;
  appearance: none;
  background: forestgreen;
  padding: 1em 2em;
  border-radius: var(--border-radius);
  border: 1px solid;
  color: white;
  position: relative;
  overflow: hidden;
  transition: color var(--transition-duration) ease;
  
  &:hover {
    color: black;
  }
}

.btn-content {
  pointer-events: none;
  position: relative;
  z-index: 3;
}

.btn-cells {
  position: absolute;
  z-index: 2;
  inset: 0;
  
  display: grid;
  grid-template-columns: repeat(10, 1fr); /* Make 5 columns for the spans */

  /* anchor positioning plays a big role here.
       right now, I'm just telling our element what
       anchor to, the real trick is lower down where
       we create the named anchor */
  &::before {
    content: "";
    position: absolute;
    position-anchor: --hovered-cell;
    left: calc(anchor(left) - 20px);
    right: calc(anchor(right) - 20px);
    top: calc(anchor(top) - 20px);
    bottom: calc(anchor(bottom) - 20px);
    /* pushes the element to the top */
    margin: 0 auto auto;

    width: 10px;
    aspect-ratio: 1;
    background: purple;
    background-image: linear-gradient(
      to right,
      purple,
      color-mix(in srgb, purple, var(--background) 50%)
    );
    border-radius: 100vw;

    /* The margin changes depending on whether we
           hover on the top or bottom row, and I want to
           delay that when we aren't hovering */
    transition: all var(--transition-duration) ease,
      margin 0ms var(--transition-duration);
    transition-behavior: allow-discrete;
    transform: scale(0);
  }

  /* if we're hovering on the 2nd row,
       we push it to the bottom, instead of the top */
  &:has(> :nth-child(n + 11):hover)::before {
    margin: auto auto 0;
  }

  /* when we do hover, I want the margin to instantly
       change, so I've removed the delay */
  &:hover::before {
    transform: scale(55);
    transition: transform var(--transition-duration) ease, margin 0ms 0ms;
  }

  & span {
/*     width: 100%;
    height: 100%;
    display: block; */
    position: relative;
  }

  &:not(:hover) span {
    /* we need the  allow-discrete here because
         we're going to be transitioning anchor-name
      
         I don't actually want to transition it, but when we
         aren't hovering, I want to delay the name from changing */
    transition: anchor-name 0ms var(--transition-duration);
    transition-behavior: allow-discrete;
  }
  /* when we hover, we need to the anchor-name to switch instantly */
  & span:hover {
    anchor-name: --hovered-cell;
    transition: anchor-name 0ms;
  }
}
</style>
