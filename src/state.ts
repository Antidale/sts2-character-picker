import { reactive, ref } from 'vue';

const ironclad = "Ironclad"
const silent = "Silent"
const regent = "Regent"
const necrobinder = "Necrobinder"
const defect = "Defect"

const Store = reactive({
    Ironclad: { name: ironclad, model: ref(20) },
    Silent: { name: silent, model: ref(20) },
    Regent: { name: regent, model: ref(20) },
    Necrobinder: { name: necrobinder, model: ref(20) },
    Defect: { name: defect, model: ref(20) },
    SelectedAdjustmentValue: ref(0),
    NotSelectedAdjustmentValue: ref(0)
})

const Characters = {
    ironclad: ironclad,
    silent: silent,
    regent: regent,
    necrobinder: necrobinder,
    defect: defect,
    characterNames: [ironclad, silent, regent, necrobinder, defect]
}

export { Store, Characters };
