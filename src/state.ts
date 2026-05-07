import { reactive, ref } from 'vue';

const ironclad = "Ironclad"
const silent = "Silent"
const regent = "Regent"
const necrobinder = "Necrobinder"
const defect = "Defect"

const Store = reactive({
    ironCladModel: ref(20),
    silentModel: ref(20),
    regentModel: ref(20),
    necrobinderModel: ref(20),
    defectModel: ref(20)
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


