<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'RepositoriesList',
  created() {
    this.$store.dispatch('getRepositories');
  },
};
</script>

<style scoped>

</style>
