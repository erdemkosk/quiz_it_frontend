<template>
  <div class="col">
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <div class="e-profile">
              <div class="row">
                <div class="col-12 col-sm-auto mb-3">
                  <div class="mx-auto" style="width: 140px;">
                    <div
                      class="d-flex justify-content-center align-items-center rounded"
                      style="height: 140px; background-color: rgb(233, 236, 239);"
                    >
                      <b-avatar
                        button
                        @click="onClick"
                        variant="primary"
                        :text="nameSurname.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ').match(/[A-Z]/g).join('')"
                        rounded="lg"
                        size="140px"
                      ></b-avatar>
                    </div>
                  </div>
                </div>
                <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div class="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{nameSurname}}</h4>
                    <p class="mb-0">{{email}}</p>

                    <div class="text-muted">
                      <small>
                        {{level}}. Seviye 
                        <b-progress  :max="levelExperience"  class="mb-3" striped :animated="true">
                          <b-progress-bar :value="currentExperience">
        <strong>{{currentExperience}} / {{levelExperience}}</strong>
      </b-progress-bar>
                        </b-progress>
                      </small>
                    
                    </div>
                  </div>
                  <div class="text-center text-sm-right">
                    <span v-if="admin" class="badge badge-secondary">admin</span>
                    <span v-if="!admin" class="badge badge-secondary">kullanıcı</span>
                    <div class="text-muted">
                      <small>{{createdAt}}</small>
                    </div>
                  </div>
                </div>
              </div>
              <b-tabs content-class="mt-3">
                <b-tab title="Ayarlar" active>
                  <div class="tab-content pt-3">
                    <div class="tab-pane active">
                      <form class="form" novalidate>
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>Adı Soyadı</label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="name"
                                    v-model="nameSurname"
                                  />
                                </div>
                              </div>
                              <div class="col">
                                <div class="form-group">
                                  <label>E-mail</label>
                                  <input
                                    class="form-control"
                                    type="email"
                                    name="username"
                                    placeholder="user@example.com"
                                    v-model="email"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 mb-3">
                            <div class="mb-2">
                              <b>Şifreyi Değiştir</b>
                            </div>
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>Yeni Şifreniz</label>
                                  <input class="form-control" type="password" placeholder="••••••" />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>
                                    Yeni
                                    <span class="d-none d-xl-inline">Şifreniz</span>
                                  </label>
                                  <input class="form-control" type="password" placeholder="••••••" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-sm-5 offset-sm-1 mb-3">
                            <div class="mb-2">
                              <b>İletişim Tercihleri</b>
                            </div>
                            <div class="row">
                              <div class="col">
                                <div class="custom-controls-stacked px-2">
                                  <div class="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="notifications-offers"
                                      checked
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="notifications-offers"
                                    >E-mail Al</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col d-flex justify-content-end">
                            <button class="btn btn-primary" type="submit">Kaydet</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </b-tab>
                <b-tab title="Başarım">
                  <div class="row">
                    <div class="col mb-3">
                      <div class="form-group">
                        <label> Toplam:{{this.statistic.totalQuestion}}  Doğru:{{this.statistic.totalRightAnswers}}  Yanlış:{{this.statistic.totalWrongAnswers}}</label>
                        <vc-donut
                          :total=" this.statistic.totalQuestion + this.statistic.totalRightAnswers + this.statistic.totalWrongAnswers"
                          hasLegend
                          legendPlacement="bottom"
                          :sections="sections"
                        >{{'Başarı  %' + parseFloat((this.statistic.totalRightAnswers * 100) / this.statistic.totalQuestion).toFixed(2)  }}</vc-donut>
                      </div>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-3 mb-3">
        
        <div class="card">
          <div class="card-body">
            <h6 class="card-title font-weight-bold">Öneri&Şikayet</h6>
            <p class="card-text">İletişime geçmekten çekinmeyin.</p>
            <button type="button" class="btn btn-primary">
              <a href="mailto:admin@erdemkosk.com" target="_blank" class="btn btn-primary">Bize Ulaş</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from "../services/api.service";

export default {
  components: {},
  data: function() {
    return {
      userId: this.$cookie.get("id"),
      createdAt: "",
      email: "",
      password: "",
      nameSurname: "",
      level: 0,
      levelExperience: 0,
      currentExperience: 0,
      statistic: {},
      admin: false,
      sections: [
       
      ]
    };
  },
  methods: {
    getUserInfo() {
      getUser(this.userId).then(data => {
        this.assignValuesFromApı(data);
      });
    },
    assignValuesFromApı(data) {
      console.log(JSON.stringify(data.data));
      this.createdAt = new Date(data.data.results.member.createdAt);
      this.createdAt =
        this.createdAt.getDate() +
        "/" +
        (this.createdAt.getMonth() + 1) +
        "/" +
        this.createdAt.getFullYear();
      this.email = data.data.results.member.email;
      this.password = data.data.results.member.password;
      this.nameSurname = data.data.results.member.nameSurname;
      this.admin = data.data.results.member.admin;
      this.level = data.data.results.member.level;
      this.levelExperience = data.data.results.member.levelExperience;
      this.currentExperience = data.data.results.member.currentExperience;
      this.statistic = data.data.results.member.statistic;
      this.sections.push( { label: "Toplam Soru", value: data.data.results.member.statistic.totalQuestion });
      this.sections.push( { label: "Doğru", value: data.data.results.member.statistic.totalRightAnswers });
      this.sections.push( { label: "Yanlış", value: data.data.results.member.statistic.totalWrongAnswers });

    }
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>