<template>

</template>

<script>
  export default {
    created() {
      // Set $route values that are not preset during unit testing
      if (process.env.NODE_ENV === 'testing') {
        this.$route = {
          name: 'landing-page',
          path: '/landing-page',
        };
      }
    },
  };
</script>

<style scoped>

</style>
