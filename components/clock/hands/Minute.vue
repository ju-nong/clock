<template>
    <div
        class="clock-hands-minute z-[8] w-[4px] h-[85px]"
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

const angle = computed(() => {
    const minute = Number(props.minute);

    return minute * 6;
});
</script>

<style lang="scss">
.clock-hands-minute {
    background-color: #ff7f26;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(var(--angle));
}
</style>
