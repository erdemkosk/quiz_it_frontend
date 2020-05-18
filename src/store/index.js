import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import cookie from 'vue-cookie';
import { login, register } from '../services/api.service';

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        appName : "Test Me" ,
        status: '',
        token: cookie.get('token') || '',
        user: cookie.get('user') || '' ,
        nameSurname : cookie.get('nameSurname') || ''

    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user, nameSurname) {
            state.status = 'success';
            state.token = token;
            state.user = user;
            state.nameSurname = nameSurname;
        },
        auth_username(state, nameSurname) {
         state.nameSurname = nameSurname
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                login(user)
                    .then(resp => {
                        const token = resp.data.data.token;
                        const user = resp.data.data.member;

                        cookie.set('id', user._id,  1);
                        cookie.set('token', token,  1);
                        cookie.set('nameSurname', user.nameSurname,  1);
                        
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = token;

                        commit('auth_success', token, user , user.nameSurname);
                        commit('auth_username', user.nameSurname);

                        resolve(resp);
                    })
                    .catch(err => {
                        commit('auth_error');
                        cookie.delete('id');
                        cookie.delete('nameSurname');
                        cookie.delete('token');
                        reject(err);
                    })
            })
        },
        register({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                register(user)
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout');
                cookie.delete('id');
                cookie.delete('token');
                cookie.delete('nameSurname');
                delete axios.defaults.headers.common['Authorization'];
                commit('auth_username', '');
                resolve();
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        getUser: state => state.user,
        nameSurname: state => state.nameSurname,
        getAppName: state => state.appName,
        
    }
})
