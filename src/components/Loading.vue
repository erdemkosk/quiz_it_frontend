<template>
<div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
    <div class="container py-5 ">
        <header class="py-5">
            <h1 class="display-2"><b-img src="../../public/quiz-it-blue.png"  alt="Quiz-It" style="width: 400px;"></b-img></h1>
            <br>
           
            <p class=" font mb-1">İngilizce kelime öğrenmenin en kolay yolu 🤙. Boş zamanlarında senin için oluşturulan rastgele ingilizce kelime testlerini cevapla 🙏 Kendini geliştir!</p>
          
             <div class="text-center" style="margin-top: 40px">
        <!-- Animated button -->
        <a  v-on:click="handleClick" class="animated-btn text-white" href="#"><b-icon icon="play-fill" ></b-icon></a>
    </div>
        </header>
    </div>

  </div>
</div>
  
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  methods: {
    handleClick() {
      this.$emit("LoadingClickEvent", this.report);
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
.animated-btn {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    line-height: 80px;
    display: inline-block;
    text-align: center;
    background: #007bff;
    position: relative;
}

.animated-btn::before, .animated-btn::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    background:#007bff;
    animation: ripple-1 2s infinite ease-in-out;
    z-index: -1;
}

.animated-btn::after {
    background: #007bff;
    animation: ripple-2 2s infinite ease-in-out;
    animation-delay: 0.5s;
}

@keyframes ripple-1 {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

@keyframes ripple-2 {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(1.7);
        opacity: 0;
    }
}
</style>