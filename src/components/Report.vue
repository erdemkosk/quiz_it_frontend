<template>
  <div>
    <b-modal
      v-b-modal="true"
      header-bg-variant="dark"
      header-text-variant="light"
      ref="modal"
      title="Bize Yardımcı Olur Musun? 🥺 "
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      centered
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="reportState"
          label="Hata nedir?"
          label-for="report-input"
          invalid-feedback="Rapor boş yollanamaz 😥"
        >
          <b-form-input id="report-input" v-model="report" :state="reportState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      report: "",
      reportState: null,
     
    };
  },
  mounted() {// creates a render node
  
},
  methods: {
    openReportModelFromParent() { 
      this.$refs["modal"].show();
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.reportState = valid;
      return valid;
    },
    resetModal() {
      this.report = "";
      this.reportState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the report to submitted reports
      this.$emit("ReportAddedEvent", this.report);

      // Hide the modal manually
      this.$nextTick(() => {
       this.$refs["modal"].hide();
      });
    }
  }
};
</script>