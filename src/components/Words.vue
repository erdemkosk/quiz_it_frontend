<template>
  <div class="col" style=" height: 100vh">
    <div class="container-fluid">
      <b-input-group size="sm">
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Kelime Ara"></b-form-input>
        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = ''">Temizle</b-button>
        </b-input-group-append>
      </b-input-group>
      <div class="overflow-auto">
        <b-table
          :busy="isBusy"
          show-empty
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="0"
          striped
        >
          <template v-slot:cell(Update)="row">
            <b-button size="sm" @click="clickEditWord(row.item)" class="mr-1">Güncelle</b-button>
          </template>

          <template v-slot:cell(Delete)="row">
            <b-button size="sm" @click="deleteWord(row.item)" class="mr-1">Sil</b-button>
          </template>

          <template v-slot:table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Yükleniyor...</strong>
            </div>
          </template>
        </b-table>
      </div>
      <b-pagination
        size="md"
        pills
        :bordered="true"
        :total-rows="totalItems"
        v-model="currentPage"
        :per-page="perPage"
        align="fill"
      ></b-pagination>
    </div>

    <b-modal
      v-b-modal="true"
      header-bg-variant="dark"
      header-text-variant="light"
      ref="modal"
      title="Güncelle"
      @hidden="reportState = null"
      @ok="updateWord"
      centered
    >
      <form ref="form" @submit.stop.prevent="updateWord">
        <b-form-group
          :state="reportState"
          label="Kelime"
          label-for="report-input"
          invalid-feedback="Kelime boş olamaz 😥"
        >
          <b-form-input id="report-input" v-model="word" :state="reportState" required></b-form-input>
        </b-form-group>

        <b-form-group
          :state="reportState"
          label="Çeviri"
          label-for="report-input"
          invalid-feedback="Çeviri boş olamaz 😥"
        >
          <b-form-input id="report-input" v-model="translated" :state="reportState" required></b-form-input>
        </b-form-group>
        <b-form-group :state="reportState" label="Zorluk" label-for="report-input">
          <b-form-select
            v-model="difficulty"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-select>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
<script>
import { getWords, updateWords, deleteWords } from "../services/api.service";

export default {
  data() {
    return {
      items: [],
      values: "",
      fields: [
        {
          key: "_id",
          label: "Id"
        },
        {
          key: "word",
          label: "Kelime"
        },
        {
          key: "translated",
          label: "Çeviri"
        },
        {
          key: "difficulty",
          label: "Zorluk",
          formatter: (value, key, item) => {
            let difficulty;

            switch (item.difficulty) {
              case 1:
                difficulty = "A1";
                break;
              case 2:
                difficulty = "A2";
                break;
              case 3:
                difficulty = "B1";
                break;
              case 4:
                difficulty = "B2";
                break;
              case 5:
                difficulty = "C1";
                break;
              case 6:
                difficulty = "C2";
                break;
              default:
                break;
            }

            return difficulty;
          }
        },
        {
          key: "createdAt",
          label: "Eklenme",
          formatter: (value, key, item) => {
            let date = new Date(item.createdAt);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()
            );
          }
        },
        {
          key: "updateAt",
          label: "Güncellenme",
          formatter: (value, key, item) => {
            let date = new Date(item.updateAt);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()
            );
          }
        },
        {
          key: "Update",
          label: "Güncelle "
        },
        {
          key: "Delete",
          label: "Sil "
        }
      ],
      currentPage: 1,
      perPage: 20,
      totalItems: 0,
      isBusy: false,
      filter: "",
      word: "",
      translated: "",
      id: "",
      difficulty: 1,
      reportState: null,
      options: [
        { item: 1, name: "A1" },
        { item: 2, name: "A2" },
        { item: 3, name: "B1" },
        { item: 4, name: "B2" },
        { item: 5, name: "C1" },
        { item: 6, name: "C2" }
      ]
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.toggleBusy();
      this.values = await getWords(this.currentPage, this.perPage, this.filter);
      this.items = this.values.data.data.words;
      this.totalItems = this.values.data.data.total;
      this.toggleBusy();
    },
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
    clickEditWord(item) {
      this.word = item.word;
      this.id = item._id;
      this.translated = item.translated;
      this.difficulty = item.difficulty;
      this.$refs["modal"].show();
    },
    updateWord(bvModalEvt) {
      bvModalEvt.preventDefault();

      if (!this.checkFormValidity()) {
        return;
      }

      updateWords(this.id, this.word, this.translated, this.difficulty);
      this.reportState = null;
      this.$nextTick(() => {
        this.$refs["modal"].hide();
      });

      this.fetchData();
    },
    deleteWord(item) {
      this.id = item._id;
      deleteWords(this.id);
      this.fetchData();
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.reportState = valid;
      return valid;
    }
  },
  watch: {
    currentPage: {
      handler: function() {
        this.fetchData();
      }
    },
    filter: {
      handler: function() {
        this.currentPage = 1;
        this.fetchData();
      }
    }
  }
};
</script>

