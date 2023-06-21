<template>
    <div
        class="clock-analog-hands-hour z-[7] w-[6px] h-[70px]"
        :style="`--angle: ${angle}deg;`"
    ></div>
</template>

<script setup>
const props = defineProps({
    hour: {
        default: "00",
        type: String,
    },
});

const angle = computed(() => Number(props.hour) * 30);

console.log("hour", props.hour, angle.value);
</script>

<style lang="scss">
.clock-analog-hands-hour {
    background-color: #ff7f26;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(var(--angle));
}
</style>
