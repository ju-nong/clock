<template>
    <div class="clock-digital-number w-[50px] h-[100px] relative">
        <div
            v-for="(segment, index) in segments"
            :key="index"
            :class="segment ? 'on' : ''"
        ></div>
    </div>
</template>

<script setup>
const props = defineProps({
    number: {
        default: "0",
        type: String,
    },
});

const segmentPatterns = reactive([
    [1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
]);

const segments = computed(() => segmentPatterns[Number(props.number)]);
</script>

<style lang="scss">
.clock-digital-number {
    > div {
        position: absolute;
        width: 80%;
        height: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        transform-origin: right top;
        transition: all 0.3s;
        clip-path: polygon(
            0% 50%,
            12.5% 0%,
            87.5% 0%,
            100% 50%,
            87.5% 100%,
            12.5% 100%
        );

        &.on {
            background-color: #ff7f26;
        }

        &:nth-child(1) {
            left: 50%;
            transform: translate(-50%, 0%);
        }

        &:nth-child(2) {
            top: 50%;
            right: 0%;
            transform: translate(0%, -25%) rotate(90deg);
        }

        &:nth-child(3) {
            top: 100%;
            right: 0%;
            transform: translate(0%, -75%) rotate(90deg);
        }

        &:nth-child(4) {
            top: 100%;
            left: 50%;
            transform: translate(-50%, -100%);
        }

        &:nth-child(5) {
            top: 100%;
            left: 0%;
            transform: translate(-75%, -75%) rotate(90deg);
        }

        &:nth-child(6) {
            top: 50%;
            left: 0%;
            transform: translate(-75%, -25%) rotate(90deg);
        }

        &:nth-child(7) {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
