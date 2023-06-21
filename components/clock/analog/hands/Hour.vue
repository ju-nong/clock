<template>
    <div
        class="clock-analog-hands-hour z-[7] w-[6px] h-[70px]"
        :style="`--h-angle: ${props.hour * 30}deg;`"
    ></div>
</template>

<script setup>
const props = defineProps({
    hour: {
        default: "00",
        type: String,
    },
});
</script>

<style lang="scss">
.clock-analog-hands-hour {
    background-color: #ff7f26;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(var(--h-angle));
}
</style>
