<template>
    <div class="text-field">
        <div class="text-field__label">{{ title }}</div>
        <input
            class="text-field__input"
            :value="text"
            @input="manualInput"
            type="text"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: [String, Number],
            required: true,
        },
        text: {
            type: [String, Number],
        },
    },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        manualInput(event: Event) {
            this.value = (event.target as HTMLInputElement).value;
            this.$emit('mInput', { key: this.title, value: this.value });
        },
    },
});
</script>
<style scoped>
.text-field {
    width: 150px;
    margin-bottom: 1rem;
}
.text-field__label {
    display: block;
    margin-bottom: 0.25rem;
}
.text-field__input {
    display: block;
    width: 100%;
    height: 12px;
    padding: 6px;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.text-field__input:focus {
    color: #212529;
    background-color: #fff;
    border-color: #385898;
    outline: 0;
    box-shadow: 0 0 0 0.1rem #e7f3ff;
}
</style>
