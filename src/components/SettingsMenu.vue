<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import DefaultValue from './DefaultValue.vue';
import { Store, Characters } from '@/state'

const IroncladSetting = ref(20);
const SilentSetting = ref(20);
const RegentSetting = ref(20);
const NecrobinderSetting = ref(20);
const DefectSetting = ref(20);
const SelectedAdjustmentSetting = ref(0);
const NotSelectedAdjustmentSetting = ref(0);

function applyDefaults() {
    Store.IroncladModel = IroncladSetting.value;
    Store.SilentModel = SilentSetting.value;
    Store.RegentModel = RegentSetting.value;
    Store.NecrobinderModel = NecrobinderSetting.value;
    Store.DefectModel = DefectSetting.value;
	Store.SelectedAdjustmentValue = SelectedAdjustmentSetting.value;
	Store.NotSelectedAdjustmentValue = NotSelectedAdjustmentSetting.value;
}

function getSettingDefault(defaultSetting: Ref<number, number>, settingName: string)
{
    const savedValue = parseInt(localStorage.getItem(settingName) || '', 10)
    if(!isNaN(savedValue))
    {
        defaultSetting.value = savedValue;
    }
}

onMounted(() => {
    getSettingDefault(IroncladSetting, Characters.ironclad);
    getSettingDefault(SilentSetting, Characters.silent);
    getSettingDefault(RegentSetting, Characters.regent);
    getSettingDefault(NecrobinderSetting, Characters.necrobinder);
    getSettingDefault(DefectSetting, Characters.defect);
    getSettingDefault(SelectedAdjustmentSetting, "Selection Decrement");
    getSettingDefault(NotSelectedAdjustmentSetting, "Unselected Increment");

    applyDefaults();
})

function closePopover()
{
    const popover = document.getElementById('settings-popover');
    popover?.hidePopover();
}

</script>

<template>
    <section id="settings-menu">
        <button popovertarget="settings-popover" class="settings-button"></button>
        <dialog popover id="settings-popover">
            <div>
				<div class="text-header">
                	<h2>Settings</h2>
					<p>
						Adjust the values to set defaults for each character on page load/refresh. You can also click Apply to make the setting values apply without a refresh.
					</p>
				</div>
                <section class="input-grid">
                    <DefaultValue v-model.number="IroncladSetting" :label="Characters.ironclad"></DefaultValue>
                    <DefaultValue v-model.number="SilentSetting" :label="Characters.silent"></DefaultValue>
                    <DefaultValue v-model.number="RegentSetting" :label="Characters.regent"></DefaultValue>
                    <DefaultValue v-model.number="NecrobinderSetting" :label="Characters.necrobinder"></DefaultValue>
                    <DefaultValue v-model.number="DefectSetting" :label="Characters.defect"></DefaultValue>
                    <DefaultValue v-model.number="SelectedAdjustmentSetting" label="Selection Decrement"></DefaultValue>
                    <DefaultValue v-model.number="NotSelectedAdjustmentSetting" label="Unselected Increment"></DefaultValue>
                </section>
            </div>
            
            <div class="button-row">
                <button @click="[applyDefaults(), closePopover()]">Apply</button>
            </div>
            
        </dialog>
    </section>
</template>

<style lang="css" scoped>
    #settings-menu {
        position: fixed;
        top: 10px;
        right: 10px;
    }

    dialog {
        color: var(--color);
        background-color: var(--background);
    }

    .input-grid {
        display: grid;
		gap: 1rem;
		border: 1px solid var(--color);
		margin: 2rem auto;
		background-color: var(--background-alt);

		padding: 20px;
    }

    .settings-button {
        background-color: var(--background);
        margin-top: .5px;
        font-size: 2.5rem;
        font-weight: bold;
        width: 5rem;
        line-height: 1.1;
        color: var(--color);
        border-radius: var(--border-radius);
        border: 1px solid;
    }
    
    dialog::backdrop {
        backdrop-filter: blur(5px);
    }

    #settings-popover > div {
        width: 60vw;
        display: flex;
        flex-direction: column;
    }

    .button-row {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        button {
            width: 5rem;
			height: 2rem;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 2rem;
        }
    }

	h2, p{
		text-align: center;
	}

	p {
		padding-left: 2rem;
		padding-right: 2rem;
	}
</style>
