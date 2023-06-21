<template>
    <div
        class="clock-analog-hands-second z-[9] bg-red-700 w-[2px] h-[110px]"
        :style="`--s-angle: ${props.second * 6}deg;`"
    ></div>
</template>

<script setup>
const props = defineProps({
    second: {
        default: "00",
        type: String,
    },
});
</script>

<style lang="scss">
.clock-analog-hands-second {
    transform-origin: 50% 80%;
    transform: translate(-50%, -80%) rotate(var(--s-angle));
}
</style>
