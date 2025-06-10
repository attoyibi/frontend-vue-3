<template>
    <div>
        <h1>Transition Basic</h1>
        <v-row>
            <v-col>
                <h2>Slide In</h2>
                <transition name="slide-fade">
                    <div v-if="show" class="box">Slide In</div>
                </transition>
                <v-btn @click="toggle">Toggle</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h2>Expand</h2>
                <v-btn color="ma-2" @click="expand = !expand">Expand Transition</v-btn>
                <v-expand-transition class="ma-2">
                    <v-card height="100" width="100" v-show="expand"></v-card>
                </v-expand-transition>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(false);
const toggle = () => {
    show.value = !show.value;
};
const expand = ref(false);
</script>

<style lang="scss" scoped>

</style>