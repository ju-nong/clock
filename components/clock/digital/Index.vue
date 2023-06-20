<template>
    <div class="clock-digital w-[250px] h-[250px] flex flex-col justify-center">
        <div
            class="clock-digital-container w-full h-[150px] rounded-3xl bg-white"
        ></div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.clock-digital {
    &-container {
        box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.2),
            0px 5px 10px rgba(0, 0, 0, 0.5);
        border: 3px solid #fff;
    }
}
</style>
