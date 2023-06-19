<template>
    <div class="clock-hands absolute">
        <div
            class="clock-hands-point bg-black w-[16px] h-[16px] rounded-full relative z-[10]"
        ></div>
        <ClockHandsHour />
        <ClockHandsMinute />
        <ClockHandsSecond />
    </div>
</template>

<script setup></script>

<style lang="scss">
.clock-hands {
    > div {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);

        &:not(.clock-hands-point) {
            position: absolute;
            left: 50%;
            top: 50%;
            border-radius: 100px;
        }
    }

    &-point {
        border: 2px solid #fff;
    }
}
</style>
