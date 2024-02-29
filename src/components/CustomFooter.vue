<template>
  <v-footer
    app
  >
    <div class="pa-6 justify-space-between d-flex align-center w-100">
      <div class="name">
        {{ fullName }}
      </div>
      <div class="git">
        <a
          target="_blank"
          :href="linkGit"
        >
          My GitHub
          <v-icon>
            mdi-github
          </v-icon>
        </a>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const fullName: string = 'Hapachilo Maksym'
const linkGit: string = 'https://github.com/Maksym220066'
</script>

<style scoped lang="scss">
.name {
  font-size: 24px;
}

.git {
  font-size: 20px;
}
</style>