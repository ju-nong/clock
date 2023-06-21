<template>
    <div
        class="clock-digital w-[300px] h-[250px] flex flex-col justify-center relative z-[11]"
    >
        <div
            class="clock-digital-container w-full h-[150px] rounded-3xl bg-white flex items-center justify-center gap-x-[8px]"
        >
            <DigitalNumber :number="formatted.slice(0, 1)" />
            <DigitalNumber :number="formatted.slice(1, 2)" />
            <DigitalColons />
            <DigitalNumber :number="formatted.slice(2, 3)" />
            <DigitalNumber :number="formatted.slice(3, 4)" />
        </div>
    </div>
</template>

<script setup>
import { useNow, useDateFormat } from "@vueuse/core";

const formatted = useDateFormat(useNow(), "HHmm");
</script>

<style lang="scss">
.clock-digital {
    &-container {
        box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.2),
            0px 5px 10px rgba(0, 0, 0, 0.5);
        border: 3px solid #fff;
    }
}
</style>
