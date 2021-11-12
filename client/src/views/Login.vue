<template>
  <div class="container">
    <h1>Login</h1>
    <button @click="authenticate">Sign in with github</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated();
    },
  },
  methods: {
    authenticate() {
      this.$store.dispatch('authenticate', { provider: 'github' });
    },
  },
};
</script>

<style scoped>

</style>
