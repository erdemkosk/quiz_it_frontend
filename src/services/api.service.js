import Vue from 'vue'
import axios from 'axios';
import cookie from 'vue-cookie';
const API_URL = 'https://quiz-it-api.herokuapp.com';
Vue.prototype.$http = axios;

const token = cookie.get('token');
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

export function getQuestion(difficulty) {
    const url = `${API_URL}/api/question/`;
    return axios.get(url,{ params: {
        difficulty
    } }).then(response => response.data);
}

export function addReport(reportMessage , questionWordId, userId ) {
    const url = `${API_URL}/api/question/report/`;
    return axios.post(url, {reportMessage, questionWordId, userId  });
}

export async function login(user) {
    const url = `${API_URL}/api/member/login/`;
    const data = {
       email : user.email,
       password : user.password
    }
    return axios.post(url, data);
}

export async function register(user) {
    const url = `${API_URL}/api/member/register/`;
    return axios.post(url, user);
}

export async function getUser(id) {
    const url = `${API_URL}/api/member/`;
    return axios.get(url,{ params: {
        id
    } });
}

export async function getWords(page, limit, filter) {
    const url = `${API_URL}/api/word/`;
    return axios.get(url,{ params: {
        page: page - 1,
        limit,
        filter
    } });
}

export async function updateWords(id, word, translated, difficulty) {
    const url = `${API_URL}/api/word/` + id;
    return axios.put(url, {word,translated,difficulty});
}

export async function deleteWords(id) {
     const url = `${API_URL}/api/word/` + id;
     return axios.delete(url);
 }

 export async function updateStatistic( id, isRightAnswer, difficulty) {
    const url = `${API_URL}/api/member/update-statistic/` + id;
    const data = {
        isRightAnswer,
        difficulty
     }
    return axios.put(url,data);
}

export function changePassword(token, password) {
    const url = `${API_URL}/api/member/change-password/` + token;
    return axios.put(url, {password}).then(response => response.data);
}

export function forgetPassword(email) {
    const url = `${API_URL}/api/member/forget-password/`;
    return axios.post(url, {email}).then(response => response.data);
}

export function getTopTen() {
    const url = `${API_URL}/api/member/top-ten`;
    return axios.get(url,).then(response => response.data);
}


