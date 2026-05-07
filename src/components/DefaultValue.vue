<script setup lang="ts">
const props = defineProps<{
    label: string
}>()

const model = defineModel();

function update(e: Event) {
    const eventValue = (e.target as HTMLInputElement).value
    model.value = eventValue
    localStorage.setItem(props.label, eventValue)
}
</script>

<template>
    <section>
        <div>{{props.label}}</div>
        <input type="number" min="0" v-on:change="update" :value="model">
    </section>
    
</template>

<style lang="css" scoped>
    section {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr;
        margin-left: auto;
        margin-right: auto;
    }
</style>