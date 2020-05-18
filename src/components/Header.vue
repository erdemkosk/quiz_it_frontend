<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/"><b-img src="../../public/quiz-it.png"  alt="Quiz-It" style="width: 160px;"></b-img></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/#/top10">Top 10</b-nav-item>
          <b-nav-item href="/#/hakkinda">Hakkında</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!isLoggedIn" href="/#/giris">Giriş Yap</b-nav-item>
          <b-nav-item v-if="!isLoggedIn" href="/#/uye-ol">Üye Ol</b-nav-item>
          <b-nav-item-dropdown v-if="isLoggedIn" right>
            <!-- Using 'button-content' slot -->

            <template v-slot:button-content>
              <em v-if="nameSurname" :key="nameSurname">{{nameSurname}}</em>
            </template>
            <b-dropdown-item @click="goProfile" href="#">Profil</b-dropdown-item>
            <b-dropdown-item @click="logout" href="#">Çıkış Yap</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data: function() {
    return {
     
    };
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "nameSurname",
      "getAppName"
      // ...
    ])
  },
  methods: {
    goProfile() {
      this.$router.push("/profil")
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push("/"))
        .catch(err => {
          console.log(err);
        })
        .catch(err => console.log(err));
    },
  }
};
</script>