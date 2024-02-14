import {createStore} from 'vuex';
import {loginRequest, registerRequest, logoutRequest, productRequest, addProductRequest, showProductsRequest} from '@/utils/api.js';

export default createStore({
    state: {
        token: localStorage.getItem('myAppToken') || '',
        cartToken: localStorage.getItem('userCart') || '',
        products: [],
        userCart: []
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getProducts: state => state.products,
        getCartUser: state => state.cartToken
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
        },
        ADD_SUCCESS: (state, userCart) => {
            state.userCart = userCart
        },
        ADD_ERROR: (state) => {
            state.userCart = ''
        },
        SHOW_SUCCESS: (state, userCart) => {
            state.userCart = userCart
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
                        commit('GET_PRODUCTS', result)
                        resolve()
                    })
            })
        },
        ADD_REQUEST: ({ commit}) => {
            return new Promise((resolve, reject) => {
                addProductRequest()
                    .then((userCart) => {
                        commit('ADD_SUCCESS', userCart)
                        localStorage.setItem('userCart', userCart)
                        resolve()
                    })
                    .catch((error) => {
                        commit('ADD_ERROR')
                        reject(error)
                    })
            })
        },
        SHOW_REQUEST: ({ commit }) => {
            return new Promise ((resolve) => {
                showProductsRequest()
                    .then((userCart) => {
                        commit('SHOW_SUCCESS', userCart)
                        localStorage.setItem('userCart', JSON.stringify(userCart))
                        resolve()
                    })
            })
        }
    },
    modules: {
        }
})
