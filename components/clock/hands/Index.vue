<template>
    <div class="clock-hands absolute">
        <ClockHandsPin />
        <ClockHandsHour :hour="formatted.slice(0, 1)" />
        <ClockHandsMinute :minute="formatted.slice(1, 2)" />
        <ClockHandsSecond :second="formatted.slice(2, 3)" />
    </div>
</template>

<script setup>
import { useNow, useDateFormat } from "@vueuse/core";

const formatted = useDateFormat(useNow(), "hms");
</script>

<style lang="scss">
.clock-hands {
    > div {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);

        &:not(.clock-hands-pin) {
            position: absolute;
            left: 50%;
            top: 50%;
            border-radius: 100px;
        }
    }
}
</style>
