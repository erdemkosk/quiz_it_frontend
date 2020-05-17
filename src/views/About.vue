<template>
  <div>
    <Header />
    <div class="container-fluid home-main">
      <header class="py-5">
            <h1 class="display-2"><b-img src="../../public/quiz-it-var1.png"  alt="Quiz-It" style="width: 400px;"></b-img></h1>
            <br>
              <p class=" font mb-1">İngilizce kelime öğrenmenin en kolay yolu 🤙. Boş zamanlarında senin için oluşturulan rastgele ingilizce kelime testlerini cevapla 🙏 Kendini geliştir!</p>
        </header>
        <button type="button" class="btn btn-default">Github</button>
      <div class="row" style="margin-top:80px">
        <div class="col-md-3">
          <div class="single_counter p-y-2 m-t-1">
            <i class="fa fa-heart m-b-1"></i>
            <h2 class="statistic-counter"><countTo :startVal='startVal' :endVal='wordCount' :duration='3000'></countTo></h2>
            <p>Farklı Kelime</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="single_counter p-y-2 m-t-1">
            <i class="fa fa-heart m-b-1"></i>
            <h2 class="statistic-counter"><countTo :startVal='startVal' :endVal='userCount' :duration='3000'></countTo></h2>
            <p>Kullanıcı</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="single_counter p-y-2 m-t-1">
            <i class="fa fa-heart m-b-1"></i>
            <h2 class="statistic-counter"><countTo :startVal='startVal' :endVal='positiveCommentCount' :duration='3000'></countTo></h2>
            <p>Olumlu Yorum</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="single_counter p-y-2 m-t-1">
            <i class="fa fa-heart m-b-1"></i>
            <h2 class="statistic-counter"><countTo :startVal='startVal' :endVal='createdUser' :duration='3000'></countTo></h2>
            <p>kişi</p>
          </div>
        </div>
      </div>
    
    </div>

    <div class="container-fluid home-content1">
      <div class="row">
        <div class="col-md-6 content1-left">
          <h3>
            Neden 
            <span class="blinker">?</span>
          </h3>
          <p>Boş zamanlarında ingilizce kelimeler öğrenmen için harika bir yol. Mobil uyumluluğu sayesinde ister telefondan ister bilgisayarından hemen çalışmaya başla üstelik <b>bedava!</b></p>
          <!-- <div class="content1-left"></div> -->
        </div>
        <div class="col-md-6 content1-right">
          <p>Hem kendinle hem başkalarıyla yarışmak harika değil mi? <b>Quiz-It</b> ile beraber kelimeleri kağıda yazarak çalışma devri kapandı. Kolayca antreman yap geliş! Biz sana güveniyoruz.</p>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import countTo from 'vue-count-to';
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
    countTo
  },
  data () {
      return {
        startVal: 0,
        wordCount: 3000,
        userCount : 100,
        positiveCommentCount : 50,
        createdUser: 1,
      }
    },
     computed: {
    ...mapGetters([
      "getAppName"
      // ...
    ])
  },
};
</script>

<style scoped>
.home-main {
  background: #0062cc;
  color: #fff;
  padding: 13%;
  text-align: center;
}
.blinker {
  animation: blinker 1.5s linear infinite;
}

.home-main button {
  background: #fff;
  color: #0062cc;
  border-radius: 0;
  font-weight: 700;
  width: 16%;
  height: 50px;
  top: 4%;
  margin-top: 3%;
}
.home-main button:hover {
  transition: 1s ease;
  color: #0062cc;
  width: 19%;
}
.content1-left {
  padding: 9%;
}
.content1-right {
  padding: 9%;
  background: #e4e4e4;
}
.home-content2 {
  background: #adb5bd;
  padding: 1.4%;
  text-align: center;
}
.home-content2 p {
  font-size: 18px;
  line-height: 50px;
}
.home-content2 p span {
  font-weight: 500;
}
body {
  font-size: 18px;
  font-weight: 400;
}
.p-y-2 {
  padding-top: 28px;
  padding-bottom: 28px;
}
.p-y-3 {
  padding-top: 45px;
  padding-bottom: 45px;
}
.m-b-1 {
  margin-bottom: 18px;
}
.m-t-1 {
  margin-top: 18px;
}
.main_counter_area {
  background-size: cover;
  overflow: hidden;
}
.main_counter_area .main_counter_content .single_counter {
  background: rgba(236, 72, 72, 0.5);
  color: #fff;
}
.main_counter_area .main_counter_content .single_counter i {
  font-size: 36px;
}
</style>
