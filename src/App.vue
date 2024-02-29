<script setup lang="ts">


import TablePackages from "./components/TablePackages.vue";
import SearchPackages from "./components/SearchPackages.vue";
import DialogDetailPackage from "./components/DialogDetailPackage.vue";
import CustomFooter from "./components/CustomFooter.vue";
</script>

<template>
  <DialogDetailPackage />
  <v-layout full-height>
    <v-main>
      <SearchPackages />
      <TablePackages />
    </v-main>
    <CustomFooter />
  </v-layout>
</template>

<style lang="scss">
body {
  background: rgb(var(--v-theme-lightDark));
}

#app {
  width: 100%;
}


</style>
