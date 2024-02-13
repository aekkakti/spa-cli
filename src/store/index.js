import {createStore} from 'vuex';
import {loginRequest, registerRequest, logoutRequest, productRequest} from '@/utils/api.js';

export default createStore({
    state: {
        token: localStorage.getItem('myAppToken') || '',
        products: []
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getProducts: state => state.products
    },
    mutations: {
        AUTH_SUCCESS: (state, token) => {
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.token = ''
        },
        REGISTER_SUCCESS: (state, token) => {
            state.token = token
        },
        REGISTER_ERROR: (state) => {
            state.token = ''
        },
        LOGOUT_SUCCESS: (state) => {
            state.token = ''
        },
        LOGOUT_ERROR: (state, token) => {
            state.token = token
        },
        GET_PRODUCTS: (state, products) => {
            state.products = products
        }
    },
    actions: {
        AUTH_REQUEST: ({commit}, user) => {
            return new Promise((resolve, reject) => {
                loginRequest(user)
                    .then((token) => {
                        commit('AUTH_SUCCESS', token);
                        localStorage.setItem('myAppToken', token);
                        resolve();
                    })
                    .catch((error) => {
                        commit('AUTH_ERROR');
                        localStorage.removeItem('myAppToken');
                        reject(error);
                    });
            });
        },
        REGISTER_REQUEST: ({commit}, user) => {
            return new Promise((resolve, reject) => {
                registerRequest(user)
                    .then((token) => {
                        commit('REGISTER_SUCCESS', token);
                        localStorage.setItem('myAppToken', token);
                        resolve();
                    })
                    .catch((error) => {
                        commit('REGISTER_ERROR');
                        localStorage.removeItem('myAppToken');
                        reject(error);
                    });
            })
        },
        LOGOUT_REQUEST: ({commit}, user) => {
            return new Promise((resolve, reject) => {
                logoutRequest(user)
                    .then((token) => {
                        commit('LOGOUT_SUCCESS', token);
                        localStorage.removeItem('myAppToken');
                        resolve();
                    })
                    .catch(() => {
                        commit('LOGOUT_ERROR')
                        reject()
                    })
            })
        },
        PRODUCTS_REQUEST: ({commit}) => {
            return new Promise((resolve) => {
                productRequest()
                    .then((result) => {
                        commit('GET_PRODUCTS', result.data)
                        resolve()
                    })
            })
        },
    },
    modules: {
        }
})
