<template>
    <div class="main-block">
        <div v-for="(value, key) in testData" :key="key">
            <InputField
                :title="key"
                :text="value"
                @mInput="updateAfterInput"
            ></InputField>
        </div>
        <div class="btn-block">
            <UniversalButton :title="'Generate'" @click="getData" />
            <UniversalButton
                v-if="showButtons"
                :title="'Clear'"
                @click="clearData"
            />
            <UniversalButton
                v-if="showButtons"
                :title="'Check'"
                @click="checkData"
            />
            <div class="result" v-if="result !== -1">
                Результат: {{ result }}$
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import InputField from '@/components/InputField.vue';
import UniversalButton from '@/components/UniversalButton.vue';
import { defineComponent } from 'vue';
import { getRandomData } from '@/utils/getRandomData';
import { getCalcPrice } from '@/utils/getCalcPrice';
import type { TestData, KeyValue } from '@/types';

export default defineComponent({
    components: {
        InputField,
        UniversalButton,
    },
    data() {
        return {
            showButtons: false,
            testData: {} as TestData,
            result: -1,
        };
    },
    methods: {
        async getData() {
            try {
                this.result = -1;
                const data = await getRandomData();
                this.testData = data;
                this.showButtons = true;
            } catch (e) {
                console.error(e);
            }
        },
        clearData() {
            Object.keys(this.testData).forEach(key => {
                this.testData[key] = undefined;
            });
            this.showButtons = false;
            this.result = -1;
        },
        async checkData() {
            try {
                this.result = await getCalcPrice(this.testData);
            } catch (e) {
                console.error(e);
            }
        },
        updateAfterInput(data: KeyValue) {
            this.testData[data.key] = isNaN(Number(data.value))
                ? data.value
                : Number(data.value);
            this.showButtons = data.value !== '';
        },
    },
});
</script>
<style>
.main-block {
    padding: 5px;
}
.btn-block {
    display: flex;
}
.result {
    padding: 12px;
}
</style>
