
<template>
  <div>
    <Header />
    <div style=" height: 100vh; " v-if="loading">
      <Loading @LoadingClickEvent="handleClick" />
    </div>
    <div v-if="!loading">
      <Quiz />
    </div>
    <Footer />
  </div>
</template>

<script>
import Quiz from "../components/Quiz.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Loading from "../components/Loading.vue";
export default {
  name: "Main",
  components: {
    Quiz,
    Header,
    Footer,
    Loading
  },
  data: function() {
    return {
      loading: true
    };
  },
  methods: {
    handleClick() {
     this.loading = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 40%;
  min-width: 300px;
}
</style>
