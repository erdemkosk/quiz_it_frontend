<template>
  <div class="container login-container">
    <div class="row">
      <div class="col-md-6 login-form-1 offset-md-3">
        <h3>Şifremi Değiştir</h3>
        <form @submit.prevent="resetPassword">
          <div class="form-group">
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Mail Adresin *"
              required
            />
          </div>

          <div class="form-group">
            <input type="submit" class="btnSubmit" value="Maili Gönder" />
          </div>
         
          <div>
  <b-alert :show="showvar" variant="primary" dismissible>
    <b>{{errorMessage}}</b>
  </b-alert>
</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { forgetPassword } from "../services/api.service";
export default {
  data: function() {
    return {
      email: "",
      errorMessage: "",
      showvar:false,
      sec:2000,
    };
  },
  methods: {
    resetPassword() {
      if(!this.email){
        this.errorMessage = "Email girmediniz. Lütfen email girdiğinizden emin olun :)";
         this.showvar=true;
      setTimeout(() => { this.showvar=false; }, this.sec);
        return true;
      }
      forgetPassword(this.email)
       .then(() => {
          this.errorMessage = "Şifre sıfırlama maili adresine gönderildi.";
          this.showvar=true;
          setTimeout(() => { 
            this.showvar=false;
            this.$router.push("/"); 
            }, this.sec);
       })
        .catch(err => {
          if (err.response.status == 422) {
            this.errorMessage = "Data anomally.";
          }
          if (err.response.status == 404) {
            this.errorMessage = "Böyle bir kullanıcı bulamadık :( ";
          }
          if (err.response.status == 400) {
            this.errorMessage = "Şifre değiştirme isteğinizin süresi geçmiş görünüyor. Şifre yenileme isteğini bir kez daha yollayınız :(";
          }
        this.showvar=true;
      setTimeout(() => { this.showvar=false; }, this.sec);
        });
    },
    
  }
};
</script>
<style scoped>
.login-container {
  margin-top: 8%;
  margin-bottom: 5%;
}
.login-form-1 {
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3 {
  text-align: center;
  color: #333;
}
.login-form-2 {
  padding: 5%;
  background: #0062cc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3 {
  text-align: center;
  color: #fff;
}
.login-container form {
  padding: 10%;
}
.btnSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  cursor: pointer;
}
.login-form-1 .btnSubmit {
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
}
.login-form-2 .btnSubmit {
  font-weight: 600;
  color: #0062cc;
  background-color: #fff;
}
.login-form-2 .ForgetPwd {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
.login-form-1 .ForgetPwd {
  color: #0062cc;
  font-weight: 600;
  text-decoration: none;
}
</style>