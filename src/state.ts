import { reactive, ref } from 'vue';

const ironclad = "Ironclad"
const silent = "Silent"
const regent = "Regent"
const necrobinder = "Necrobinder"
const defect = "Defect"

const Store = reactive({
    IroncladModel: ref(20),
    SilentModel: ref(20),
    RegentModel: ref(20),
    NecrobinderModel: ref(20),
    DefectModel: ref(20),
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
