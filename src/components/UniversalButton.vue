<template>
    <div>
        <button class="btn">{{ title }}</button>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
.btn {
    display: inline-block;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 0 15px 15px 0;
    outline: none;
    border: none;
    border-radius: 6px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #385898;
    background-color: #e7f3ff;
    cursor: pointer;
    user-select: none;
    appearance: none;
    touch-action: manipulation;
}
.btn:focus-visible {
    box-shadow: 0 0 0 2px #666;
}
.btn:hover {
    background-color: #dbe7f2;
}
.btn:active {
    transform: scale(0.96);
}
.btn:disabled {
    pointer-events: none;
    opacity: 0.65;
}
</style>
