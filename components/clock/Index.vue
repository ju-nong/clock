<template>
    <div
        class="clock bg-white rounded-full w-[250px] h-[250px] flex items-center justify-center relative"
    >
        <ClockDial />
        <ClockHands />
    </div>
</template>

<script setup></script>

<style lang="scss">
.clock {
    box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.2),
        0px 5px 10px rgba(0, 0, 0, 0.5); /* 안쪽 그림자 */
    border: 3px solid #fff;
}
</style>
