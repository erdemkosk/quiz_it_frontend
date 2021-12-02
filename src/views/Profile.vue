<template>
  <div>
    <Header />
    <div class="container">
      <div class="row flex-lg-nowrap">
        <div class="col-12 col-lg-auto mb-3" style="width: 200px;">
          <div class="card p-3">
            <div class="e-navlist e-navlist--active-bg">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link px-2 active" href="#" id="UserInfo">
                    <span id="1" v-on:click="handleClick">
                      <b-icon icon="caret-right-fill" variant="primary"></b-icon>Bilgiler
                    </span>
                  </a>
                </li>
                <li v-show="admin" class="nav-item">
                  <a class="nav-link px-2" href="#">
                    <span id="2" v-on:click="handleClick">
                      <b-icon icon="caret-right-fill" variant="primary"></b-icon>Kelimeler
                    </span>
                  </a>
                </li>
            
         
              </ul>
            </div>
          </div>
        </div>

        <UserInfo v-if="clicked == 1" />
        <Words  v-if="clicked == 2 && admin==true" />
      </div>
    </div>
  
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import UserInfo from "../components/UserInfo.vue";
import Words from "../components/Words.vue";
import { getUser } from "../services/api.service";

export default {
  components: {
    Header,
    UserInfo,
    Words
  },
  data: function() {
    return {
      clicked : 1,
      userId: this.$cookie.get("id"),
      admin : false,
    };
  },
  methods: {
    handleClick(event) {
      this.clicked = event.target.id;
    },
    getUserInfo() {
      getUser(this.userId).then(data => {
        console.log(data.data);
        this.admin = data.data.results.user.admin
      });
    },
  },
   mounted() {
    this.getUserInfo();
  }
};
</script>