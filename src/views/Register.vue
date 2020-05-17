<template>
  <div class="container login-container">
    <div class="row">
      <div class="col-md-6 login-form-2 offset-md-3">
        <h3>Üye Ol</h3>
        <form @submit.prevent="register">
          <div class="form-group">
            <input
              type="text"
              v-model="nameSurname"
              class="form-control"
              placeholder="Adın ve Soyadın *"
              autofocus
              required
            />
            <div
              class="alert alert-light"
              v-if="submitted && !$v.nameSurname.minLength"
            >Ad ve Soyad {{$v.nameSurname.$params.minLength.min}} karanterden uzun olmalıdır !</div>
          </div>
          <div class="form-group">
            <input type="text" v-model="email" class="form-control" placeholder="Email *" required />
          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="Şifren *"
              required
            />
          
           <div class="alert alert-light"
              v-if="submitted && !$v.password.minLength">
              
            Şifre {{$v.password.$params.minLength.min}} karanterden uzun olmalıdır !
          </div>
           </div>
          <div class="form-group">
            <input
              type="password"
              v-model="password_confirmation"
              class="form-control"
              placeholder="Şifren *"
              required
            />
             <div
              class="alert alert-light"
              v-if="submitted && !$v.password_confirmation.sameAsPassword"
            >Şifreler uyuşmamaktadır. Lütfen Kontrol Edin! </div>
             </div>
          <div class="form-group">
            <input type="submit" class="btnSubmit" value="Tamamdır 😉" />
          </div>
          <div class="form-group">
            <a href="/giris" class="ForgetPwd" value="Login">Zaten Üyeyim?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data: function() {
    return {
      submitted: false,
      nameSurname: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  },
  validations: {
    nameSurname: {
      minLength: minLength(3)
    },
    password: {
      minLength: minLength(6)
    },
    password_confirmation: {
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    register: function() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("dsfsdf");
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }

      const user = {
        nameSurname: this.nameSurname,
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("register", user)
        .then(() => this.$router.push("/giris"))
        .catch(error => {
          if (error.response) {
            if (
              error.response.status == 500 &&
              error.response.data.message.includes("E11000")
            ) {
              console.log("Aynı Kullanıcıdan sisteme kayıtlı");
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
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