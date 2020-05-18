<template>
  <div class="d-flex align-items-center min-vh-100">
    <div class="container text-center">
      <div class="quiz" style="min-vh-100">
        <b-card
          :header-bg-variant="headerClass"
          header-text-variant="white"
          header-tag="header"
          footer-tag="footer"
        >
          <template v-slot:header>
            <div class="d-flex justify-content-end">
              <div class="mr-auto p-2">
                <h4 class="text-left mb-0">
                  {{question + " ?"}}
                  <b-icon-volume-up v-if="!speechStatus" @click="speechText()"></b-icon-volume-up>
                  <b-icon-volume-up-fill v-if="speechStatus"></b-icon-volume-up-fill>
                </h4>
              </div>
              <div class="p-2">
                <div class="text-center">
                  <b-button pill :variant="questionButtonClass">
                    Soru
                    <b-badge variant="light">{{totalQuestionCount}}</b-badge>
                    D
                      <b-badge variant="light">{{totalSuccesfullCount}}</b-badge>
                        Y
                      <b-badge variant="light">{{totalWrongCount}}</b-badge>
                  </b-button>
                </div>
              </div>
            </div>
          </template>

          <div class="cardHeight">
            <b-overlay :show="WaitingForGettingQuestion" rounded="sm">
              <div v-if="!WaitingForGettingQuestion" class="btn-group-toggle" data-toggle="buttons">
                <label
                  v-for="(answer, answerIndex) in answers"
                  v-bind:key="answerIndex"
                  :class="changeClass(answerIndex + 1)"
                >
                  <svg
                    class="bi bi-chevron-right"
                    width="32"
                    height="32"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    type="radio"
                    name="q_answer"
                    autocomplete="off"
                    :value="answerIndex + 1"
                    @click="selectedAnswerOnChange($event)"
                  />
                  {{answer}}
                </label>
              </div>
            </b-overlay>
          </div>

          <template v-slot:footer>
            <em></em>
            <div class="d-flex justify-content-end">
              <div class="p-2">Zorluk:</div>
              <div class="mr-auto">
                <b-form-select v-model="selected" :options="options"></b-form-select>
              </div>
              <div>
                <b-dropdown class="mx-1" right text="☝️">
                  <b-dropdown-item
                    v-if="isLoggedIn"
                    v-show="!isQuestionReported"
                    @click="openReportModel()"
                  >Soru hatalıysa😵, bildir 🤙</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </template>
        </b-card>
        <Report ref="report" @ReportAddedEvent="reportQuestion"></Report>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuestion, addReport, updateStatistic } from "../services/api.service";
import Report from "./Report.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Report
  },
  data: function() {
    return {
      WaitingForGettingQuestion: false,
      isQuestionReported: false,
      totalQuestionCount: 0,
      totalSuccesfullCount: 0,
      totalWrongCount: 0,
      rightAnswer: -1,
      selectedAnswer: -1,
      answers: ["test", "test", "test", "test"],
      questionWordId: "",
      question: "",
      userId: this.$cookie.get("id"),
      speechStatus: false,
      headerClass: "dark",
      questionButtonClass: "secondary",
      isSuccesfullAnswer: false,
      isReadyForAnswerQuestion: true,
      options: [
        { value: "1", text: "A1" },
        { value: "2", text: "A2" },
        { value: "3", text: "B1" },
        { value: "4", text: "B2" },
        { value: "5", text: "C1" },
        { value: "6", text: "C2" }
      ],
      selected: 1
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    getQuestion() {
      getQuestion(this.selected).then(data => {
        this.WaitingForGettingQuestion = false;
        this.isQuestionReported = false;
        this.assignValuesFromApı(data);
      });
    },
    reportQuestion(report) {
      this.isQuestionReported = true;
      addReport(report, this.questionWordId, this.userId).then(data => {
        console.log(data);
      });
    },
    assignValuesFromApı(data) {
      this.answers = data.data.answers;
      this.question = data.data.question;
      this.rightAnswer = data.data.answer + 1;
      this.questionWordId = data.data.questionWordId;
    },
    selectedAnswerOnChange(event) {
      if (this.isReadyForAnswerQuestion) {
        this.isReadyForAnswerQuestion = false;
        this.selectedAnswer = event.target.value;

        if (this.selectedAnswer == this.rightAnswer) {
          this.isSuccesfullAnswer = true;
          this.totalSuccesfullCount++;
        } else {
          this.isSuccesfullAnswer = false;
           this.totalWrongCount++;
        }
        this.totalQuestionCount++;
        this.makeActionsForUser(this.isSuccesfullAnswer);

        setTimeout(() => {
          this.WaitingForGettingQuestion = true;
          this.resetActionsForUser();
          this.getQuestion();
          this.isReadyForAnswerQuestion = true;
          this.selectedAnswer = -1;
        }, 1000);
      }
    },
    makeActionsForUser(isSuccessAnswers) {
      if (isSuccessAnswers) {
        (this.headerClass = "success "), (this.questionButtonClass = "dark");
      } else {
        (this.headerClass = "danger"), (this.questionButtonClass = "dark");
      }
      //If user register send statistic
      if(this.userId){
        updateStatistic(this.userId, isSuccessAnswers,this.selected);
      }
    },
    changeClass(index) {
      return {
        "element-animation1 btn btn-lg btn-secondary btn-block":
          index == 1 && this.selectedAnswer != 1,
        "element-animation2 btn btn-lg btn-secondary btn-block":
          index == 2 && this.selectedAnswer != 2,
        "element-animation3 btn btn-lg btn-secondary btn-block":
          index == 3 && this.selectedAnswer != 3,
        "element-animation4 btn btn-lg btn-secondary btn-block":
          index == 4 && this.selectedAnswer != 4,

        "element-animation1 btn btn-lg btn-primary btn-block":
          index == 1 && this.selectedAnswer == 1 && this.rightAnswer != 1,
        "element-animation2 btn btn-lg btn-primary btn-block":
          index == 2 && this.selectedAnswer == 2 && this.rightAnswer != 2,
        "element-animation3 btn btn-lg btn-primary btn-block":
          index == 3 && this.selectedAnswer == 3 && this.rightAnswer != 3,
        "element-animation4 btn btn-lg btn-primary btn-block":
          index == 4 && this.selectedAnswer == 4 && this.rightAnswer != 4,

        "element-animation1 btn btn-lg btn-success btn-block":
          index == 1 && this.selectedAnswer == 1 && this.rightAnswer == 1,
        "element-animation2 btn btn-lg btn-success btn-block":
          index == 2 && this.selectedAnswer == 2 && this.rightAnswer == 2,
        "element-animation3 btn btn-lg btn-success btn-block":
          index == 3 && this.selectedAnswer == 3 && this.rightAnswer == 3,
        "element-animation4 btn btn-lg btn-success btn-block":
          index == 4 && this.selectedAnswer == 4 && this.rightAnswer == 4,

        "element-animation1 btn btn-lg btn-danger btn-block":
          index == 1 &&
          this.rightAnswer == 1 &&
          this.selectedAnswer != 1 &&
          this.isReadyForAnswerQuestion == false,
        "element-animation2 btn btn-lg btn-danger btn-block":
          index == 2 &&
          this.rightAnswer == 2 &&
          this.selectedAnswer != 2 &&
          this.isReadyForAnswerQuestion == false,
        "element-animation3 btn btn-lg btn-danger btn-block":
          index == 3 &&
          this.rightAnswer == 3 &&
          this.selectedAnswer != 3 &&
          this.isReadyForAnswerQuestion == false,
        "element-animation4 btn btn-lg btn-danger btn-block":
          index == 4 &&
          this.rightAnswer == 4 &&
          this.selectedAnswer != 4 &&
          this.isReadyForAnswerQuestion == false
      };
    },
    resetActionsForUser() {
      (this.headerClass = "dark"), (this.questionButtonClass = "secondary");
    },
    openReportModel() {
      this.$refs.report.openReportModelFromParent();
    },
    speechText() {
      this.speechStatus = true;
      var msg = new SpeechSynthesisUtterance(this.question);
      msg.rate = 0.7;
      msg.pitch = 1;
      window.speechSynthesis.speak(msg);
      setTimeout(() => {
        this.speechStatus = false;
      }, 1000);
    }
  },
  mounted() {
    this.getQuestion();
  },
  watch: {
    selected: function() {
      this.getQuestion();
    }
  }
};
</script>

<style scoped>
.container {
  width: 32%;
  min-width: 300px;
}
.cardHeight {
  min-height: 210px;
}

.card-header {
  padding: 1.25rem 1.25rem !important;
}

label.btn:hover {
  text-shadow: 0 3px 2px rgba(0, 0, 0, 0.4);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
}
label.btn-block {
  text-align: left;
  position: relative;
}
.element-animation1 {
  animation: animationFrames ease 0.8s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  -webkit-animation: animationFrames ease 0.8s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -ms-animation: animationFrames ease 0.8s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
}
.element-animation2 {
  animation: animationFrames ease 1s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  -webkit-animation: animationFrames ease 1s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -ms-animation: animationFrames ease 1s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
}
.element-animation3 {
  animation: animationFrames ease 1.2s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  -webkit-animation: animationFrames ease 1.2s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -ms-animation: animationFrames ease 1.2s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
}
.element-animation4 {
  animation: animationFrames ease 1.4s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  -webkit-animation: animationFrames ease 1.4s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -ms-animation: animationFrames ease 1.4s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
}
@keyframes animationFrames {
  0% {
    opacity: 0;
    transform: translate(-1500px, 0px);
  }

  60% {
    opacity: 1;
    transform: translate(30px, 0px);
  }

  80% {
    transform: translate(-10px, 0px);
  }

  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@-webkit-keyframes animationFrames {
  0% {
    opacity: 0;
    -webkit-transform: translate(-1500px, 0px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate(30px, 0px);
  }

  80% {
    -webkit-transform: translate(-10px, 0px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translate(0px, 0px);
  }
}

@-ms-keyframes animationFrames {
  0% {
    opacity: 0;
    -ms-transform: translate(-1500px, 0px);
  }

  60% {
    opacity: 1;
    -ms-transform: translate(30px, 0px);
  }
  80% {
    -ms-transform: translate(-10px, 0px);
  }

  100% {
    opacity: 1;
    -ms-transform: translate(0px, 0px);
  }
}
.btns .btn.shake {
  -webkit-animation: shake 0.3s linear 0s infinite;
  -moz-animation: shake 0.3s linear 0s infinite;
  -ms-animation: shake 0.3s linear 0s infinite;
  -o-animation: shake 0.3s linear 0s infinite;
  animation: shake 0.3s linear 0s infinite;
}
</style>