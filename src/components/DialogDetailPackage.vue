<template>
  <v-dialog
    v-model="store.modelDialogPackage"
    theme="dark"
    max-width="1220px"
  >
    <v-card class="package">
      <v-card-title class="package__title ma-4">
        Info Package
        <v-divider
          color="gray"
          class="my-2"
        />
      </v-card-title>
      <v-card-text class="package__content">
        <v-list v-if="activePackage">
          <v-list-item>
            Name package: {{ activePackage.name }}
          </v-list-item>
          <v-list-item>
            Type: {{ activePackage.type }}
          </v-list-item>
          <v-list-item>
            Links on Stats: <a
              target="_blank"
              :href="activePackage.links.stats"
              class="ml-2"
            >{{ activePackage.links.stats }}</a>
          </v-list-item>
          <v-list-item class="mt-4">
            <v-card
              max-width="678"
              color="gray"
              class="ma-auto"
            >
              <v-card-title class="text-center">
                <span class="my-2"> Tags</span>
              </v-card-title>
              <v-card-text class="package__tags">
                <div
                  v-if="!Object.keys(activePackage.tags).length"
                  class="text-center"
                >
                  Not have tags
                </div>
                <div
                  v-for="(val, key) in activePackage.tags"
                  v-else
                  :key="val"
                  class="package__tags-item"
                >
                  {{ key }}: {{ val }}
                </div>
              </v-card-text>
            </v-card>
          </v-list-item>
          <v-list-item class="mt-4">
            <v-card
              max-width="678"
              color="gray"
              class="ma-auto"
            >
              <v-card-title class="text-center">
                Versions
              </v-card-title>
              <v-card-text class="package__version">
                <div
                  v-for="version in activePackage.versions"
                  :key="version.version"
                  class="package__version-item"
                >
                  {{ version.version }}
                </div>
              </v-card-text>
            </v-card>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn
          variant="flat"
          color="primary"
          text="Close"
          @click="store.modelDialogPackage = false"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">

import { useStore } from "../store";
import { storeToRefs } from "pinia";

const store = useStore()
const { activePackage } = storeToRefs(store)

</script>

<style scoped lang="scss">
.package {
  &__title {
    font-size: 26px;
  }

  &__content {
    font-size: 20px !important;
  }

  &__tags, &__version {
    max-height: 200px;
    overflow: auto;
    font-size: 18px;
  }

  &__tags-item, &__version-item {
    margin: 10px 0;
  }

}

</style>