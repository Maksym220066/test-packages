<template>
  <v-text-field
    v-model="store.modelSearch"
    theme="dark"
    label="Search packages"
    variant="solo"
    class="pa-2"
    bg-color="gray"
  />
</template>
<script setup lang="ts">
import { useStore } from "../store";

const store = useStore()
</script>

<style scoped lang="scss">


</style>