<template>
    <div class="clock-analog-hands absolute">
        <AnalogHandsPin />
        <AnalogHandsHour :hour="formatted.slice(0, 2)" />
        <AnalogHandsMinute :minute="formatted.slice(2, 4)" />
        <AnalogHandsSecond :second="formatted.slice(4, 6)" />
    </div>
</template>

<script setup>
import { useNow, useDateFormat } from "@vueuse/core";

const formatted = useDateFormat(useNow(), "hhmmss");

console.log("hands", formatted.value);
</script>

<style lang="scss">
.clock-analog-hands {
    > div {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);

        &:not(.clock-analog-hands-pin) {
            position: absolute;
            left: 50%;
            top: 50%;
            border-radius: 100px;
        }
    }
}
</style>
