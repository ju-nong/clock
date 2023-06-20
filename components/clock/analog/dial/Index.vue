<template>
    <ul class="clock-analog-dial absolute w-[200px] h-[200px]">
        <AnalogDialWord
            v-for="(item, index) in arr"
            :key="index"
            :word="item"
        />
    </ul>
</template>

<script setup>
const arr = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
</script>

<style lang="scss">
.clock-analog-dial {
}
</style>
