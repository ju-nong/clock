<template>
    <div class="clock flex flex-col gap-[24px]">
        <Menu :nowClock="nowClock" @changeClock="changeClock" />
        <Analog v-if="nowClock === 'Analog'" />
        <Digital v-else-if="nowClock === 'Digital'" />
    </div>
</template>

<script setup>
const nowClock = ref("Analog");

const changeClock = (clock) => (nowClock.value = clock);
</script>

<style lang="scss"></style>
