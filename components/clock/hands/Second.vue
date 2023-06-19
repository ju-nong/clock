<template>
    <div class="clock-hands-second z-[9] bg-red-700 w-[2px] h-[110px]"></div>
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
.clock-hands-second {
    transform-origin: 50% 80%;
    transform: translate(-50%, -80%) rotate(30deg);
}
</style>
