<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main-box clearfix">
            <div class="table-responsive">
              <table class="table user-list">
                <thead>
                  <tr>
                    <th>
                      <span>Kullanıcı</span>
                    </th>
                    <th>
                      <span>Kayıt Tarihi</span>
                    </th>
                    <th class="text-center">
                      <span>Seviye</span>
                    </th>
                    <th>
                      <span>Deneyim</span>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" v-bind:key="user">
                    <td class="text-center">
                      <div class="img">
                        <b-avatar
                        variant="primary"
                          rounded="lg"
                          :text="user.nameSurname.match(/[A-Z]/g).join('')"
                          size="4em"
                        ></b-avatar>
                      </div>
                      <b>{{user.nameSurname}}</b>
                  
                    </td>
                    <td>
                      {{ 
                      new Date(user.createdAt).getDate() +
                      "/" +
                      (new Date(user.createdAt).getMonth() + 1) +
                      "/" +
                      new Date(user.createdAt).getFullYear()}}
                    </td>
                    <td class="text-center">
                        <span class="user-subhead"><b>{{user.level}}</b>. Seviye </span>
                     
                    </td>
                    <td >
                       <span style="display:block; height: 18px;"></span>
                      <b-progress  :max="user.levelExperience"  class="mb-3" striped :animated="true">
                          <b-progress-bar :value="user.currentExperience">
        <strong>{{user.currentExperience}} / {{user.levelExperience}}</strong>
      </b-progress-bar>
                      </b-progress>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import { getTopTen } from "../services/api.service";

export default {
  components: {
    Header
  },
  data: function() {
    return {
      users: []
    };
  },
  methods: {},
  mounted() {
    getTopTen().then(data => {
      this.users = data.data;
      console.log(data.data);
    });
  }
};
</script>


<style scoped>
body {
  margin-top: 20px;
}

/* USER LIST TABLE */
.img {
  position: relative;

  float: left;
  margin-right: 15px;
}
.user-list tbody td .user-link {
  display: block;

  padding-top: 3px;
  margin-left: 60px;
}
.user-list tbody td .user-subhead {
  font-size: 0.875em;
  font-style: italic;
}

/* TABLES */
.table {
  border-collapse: separate;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #eee;
}
.table thead > tr > th {
  border-bottom: 1px solid #c2c2c2;
  padding-bottom: 0;
}
.table tbody > tr > td {
  font-size: 0.875em;
  background: #f5f5f5;
  border-top: 10px solid #fff;
  vertical-align: middle;
  padding: 12px 8px;
}
.table tbody > tr > td:first-child,
.table thead > tr > th:first-child {
  padding-left: 20px;
}
.table thead > tr > th span {
  border-bottom: 2px solid #c2c2c2;
  display: inline-block;
  padding: 0 5px;
  padding-bottom: 5px;
  font-weight: normal;
}
.table thead > tr > th > a span {
  color: #344644;
}
.table thead > tr > th > a span:after {
  content: "\f0dc";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  margin-left: 5px;
  font-size: 0.75em;
}
.table thead > tr > th > a.asc span:after {
  content: "\f0dd";
}
.table thead > tr > th > a.desc span:after {
  content: "\f0de";
}
.table thead > tr > th > a:hover span {
  text-decoration: none;
  color: #2bb6a3;
  border-color: #2bb6a3;
}
.table.table-hover tbody > tr > td {
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
}
.table tbody tr td .call-type {
  display: block;
  font-size: 0.75em;
  text-align: center;
}
.table tbody tr td .first-line {
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.125em;
}
.table tbody tr td .first-line span {
  font-size: 0.875em;
  color: #969696;
  font-weight: 300;
}
.table tbody tr td .second-line {
  font-size: 0.875em;
  line-height: 1.2;
}
.table a.table-link {
  margin: 0 5px;
  font-size: 1.125em;
}
.table a.table-link:hover {
  text-decoration: none;
  color: #2aa493;
}
.table a.table-link.danger {
  color: #fe635f;
}
.table a.table-link.danger:hover {
  color: #dd504c;
}

.table-products tbody > tr > td {
  background: none;
  border: none;
  border-bottom: 1px solid #ebebeb;
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
  position: relative;
}
.table-products tbody > tr:hover > td {
  text-decoration: none;
  background-color: #f6f6f6;
}
.table-products .name {
  display: block;
  font-weight: 600;
  padding-bottom: 7px;
}
.table-products .price {
  display: block;
  text-decoration: none;
  width: 50%;
  float: left;
  font-size: 0.875em;
}
.table-products .price > i {
  color: #8dc859;
}
.table-products .warranty {
  display: block;
  text-decoration: none;
  width: 50%;
  float: left;
  font-size: 0.875em;
}
.table-products .warranty > i {
  color: #f1c40f;
}
.table tbody > tr.table-line-fb > td {
  background-color: #9daccb;
  color: #262525;
}
.table tbody > tr.table-line-twitter > td {
  background-color: #9fccff;
  color: #262525;
}
.table tbody > tr.table-line-plus > td {
  background-color: #eea59c;
  color: #262525;
}
.table-stats .status-social-icon {
  font-size: 1.9em;
  vertical-align: bottom;
}
.table-stats .table-line-fb .status-social-icon {
  color: #556484;
}
.table-stats .table-line-twitter .status-social-icon {
  color: #5885b8;
}
.table-stats .table-line-plus .status-social-icon {
  color: #a75d54;
}
</style>