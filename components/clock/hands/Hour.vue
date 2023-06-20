<template>
    <div
        class="clock-hands-hour z-[7] w-[6px] h-[70px]"
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

const angle = computed(() => {
    const hour = Number(props.hour);

    if (hour === 1 || hour === 12) {
        return 0;
    }

    return hour * 30;
});
</script>

<style lang="scss">
.clock-hands-hour {
    background-color: #ff7f26;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(var(--angle));
}
</style>
