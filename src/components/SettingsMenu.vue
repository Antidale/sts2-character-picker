<script setup lang="ts">
import { onMounted } from 'vue';
import DefaultValue from './DefaultValue.vue';
import { Settings } from '@/state'

const applyDefaultsToModel = () => {
    Settings.value.forEach((setting) => {
        setting.model = setting.default
    })
}

const getSettingDefault = (settingName: string)  => {
    const savedValue = parseInt(localStorage.getItem(settingName) || '', 10)
    return savedValue
}

onMounted(() => {
    Settings.value.forEach((setting) => {
        const defaultValue = getSettingDefault(setting.name)
        if(!isNaN(defaultValue)) {
            setting.default = defaultValue
        }
    });
    applyDefaultsToModel();
})

const closePopover = () => {
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
                    <DefaultValue v-for="setting in Settings" :key="setting.name" v-model.number="setting.default" :label="setting.name"></DefaultValue>
                </section>
            </div>
            
            <div class="button-row">
                <button @click="[applyDefaultsToModel(), closePopover()]">Apply</button>
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
