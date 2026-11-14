import { computed, reactive, ref } from 'vue';

const ironclad = "Ironclad"
const silent = "Silent"
const regent = "Regent"
const necrobinder = "Necrobinder"
const defect = "Defect"
const fool = "Fool"

const Store = reactive({
    Ironclad: { name: ironclad, model: ref(20) },
    Silent: { name: silent, model: ref(20) },
    Regent: { name: regent, model: ref(20) },
    Necrobinder: { name: necrobinder, model: ref(20) },
    Defect: { name: defect, model: ref(20) },
    Fool: { name: fool, model: ref(20) },
    SelectedAdjustmentValue: ref(0),
    NotSelectedAdjustmentValue: ref(0)
})

const CharacterModels = computed(() => {
    return [Store.Ironclad, Store.Silent, Store.Regent, Store.Necrobinder, Store.Defect, Store.Fool]
})

const Characters = {
    ironclad: ironclad,
    silent: silent,
    regent: regent,
    necrobinder: necrobinder,
    defect: defect,
    fool: fool,
    characterNames: [ironclad, silent, regent, necrobinder, defect, fool]
}

export { Store, Characters, CharacterModels };
