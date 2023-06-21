<template>
    <div
        class="clock-analog-hands-minute z-[8] w-[4px] h-[85px]"
        :style="`--angle: ${angle}deg;`"
    ></div>
</template>

<script setup>
const props = defineProps({
    minute: {
        default: "00",
        type: String,
    },
});

const angle = computed(() => Number(props.minute) * 6);
</script>

<style lang="scss">
.clock-analog-hands-minute {
    background-color: #ff7f26;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(var(--angle));
}
</style>
