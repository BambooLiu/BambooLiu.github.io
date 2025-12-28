<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionWorks from '@/components/SectionWorks.vue';
</script>

<template>
  <div id="wrapper">
    <AppHeader />
    <main id="main">
      <SectionAbout />
      <SectionWorks />
    </main>
  </div>
</template>

<style lang="scss">
// App-wide styles logic was migrated to main.scss
// But specific layout tweaks can go here if needed
</style>
