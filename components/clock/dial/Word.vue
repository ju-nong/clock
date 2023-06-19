<template>
    <li
        class="clock-dial-word"
        :style="calculateClockNumberPosition(props.word)"
    >
        {{ props.word }}
    </li>
</template>

<script setup>
const props = defineProps({
    word: Number,
});

const radius = 100;
const startAngle = -90;
const angleIncrement = 360 / 12;

const toRadians = (degrees) => degrees * (Math.PI / 180);

const calculateClockNumberPosition = (number) => {
    const index = (number + 12) % 12;

    const angle = startAngle + index * angleIncrement;
    const left = radius + radius * Math.cos(toRadians(angle));
    const top = radius + radius * Math.sin(toRadians(angle));

    return `--left: ${left}px; --top: ${top}px;`;
};
</script>

<style lang="scss">
.clock-dial-word {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 22px;
    font-weight: 700;
    color: #999;
    text-align: center;
    left: var(--left);
    top: var(--top);
}
</style>
