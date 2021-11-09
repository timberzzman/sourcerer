<template>
  <div>
    <div class="bg-gray-100 w-full">
      <Header class="mx-auto" style="max-width: 768px" />
    </div>
    <div class="mx-auto" style="max-width: 768px">
      <h1>Overview</h1>
    </div>
    <div class="mx-auto" style="max-width: 768px">
      <h1>Languages</h1>
    </div>
    <div class="mx-auto" style="max-width: 768px">
      <h1>Technologies</h1>
    </div>
    <div class="mx-auto" style="max-width: 768px">
      <h1>Fun facts</h1>
    </div>
    <div class="mx-auto" style="max-width: 768px">
      <h1>Repositories</h1>
    </div>
    <div class="mx-auto" style="max-width: 768px">
      <h1>Coworker Superstars</h1>
    </div>
    <div class="mx-auto" style="max-width: 768px">
      <h1>About</h1>
    </div>
    <div class="mx-auto" style="max-width: 768px">
      <h1>Work experience</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/dashboard/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>
