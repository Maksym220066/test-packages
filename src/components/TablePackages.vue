<template>
  <v-data-table
    v-model:page="page"
    theme="dark"
    :headers="headers"
    :items="store.packages"
    :items-per-page="itemsPerPage"
    hover
    :search="store.search"
    class="table"
    show-current-page
    :loading="isLoading"
    @click:row="openDialogInfoPackage"
  >
    <!--    <template #item="{item}">-->
    <!--      <tr @click="openItem(item)">-->
    <!--        <td>{{ item.type }}</td>-->
    <!--        <td>{{ item.name }}</td>-->
    <!--        <td>{{ item.hits }}</td>-->
    <!--      </tr>-->
    <!--    </template>-->
    <template #bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        />
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { Package, useStore } from "../store";
import { computed, markRaw, ref } from "vue";

const store = useStore()
store.getStatsPackages()
const itemsPerPage: number = 10
const headers = markRaw<Array<object>>([
  { title: 'Type', value: 'type', align: 'center' },
  { title: 'Name', value: 'name', align: 'center' },
  { title: 'Hits', value: 'hits', align: 'center' },
])

const page = ref<number>(1)

const pageCount = computed<number>(() => Math.ceil(store.packages.length / itemsPerPage))

const isLoading = ref<boolean>(false)

const openDialogInfoPackage = async (_: Event, { item }: { item: Package }) => {
  isLoading.value = true
  await store.openDialogInfoPackage(item)
  isLoading.value = false
}
</script>
<style scoped lang="scss">
.table {
  width: 100%;
}
</style>