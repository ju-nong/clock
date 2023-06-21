<template>
    <ul class="clock-menu flex gap-x-[16px] items-center justify-center">
        <li v-for="(clock, index) in clocks" :key="index">
            <button
                type="button"
                :class="props.nowClock === clock ? 'active' : ''"
                @click="emits('changeClock', clock)"
            >
                {{ clock }}
            </button>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    nowClock: {
        default: "Analog",
        type: String,
    },
});

const emits = defineEmits(["changeClock"]);

const clocks = reactive(["Analog", "Digital"]);
</script>

<style lang="scss">
.clock-menu {
    > li {
        > button {
            color: #fff;
            font-weight: 600;
            letter-spacing: 0.1rem;
            padding: 6px 0px;
            text-align: center;
            width: 90px;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);

            &:active {
                box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
            }

            &.active {
                box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);

                /* &:hover {
                    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
                } */

                &:active {
                    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
                }
            }
        }
    }
}
</style>
