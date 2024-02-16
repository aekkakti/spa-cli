import {createStore} from 'vuex';
import {loginRequest, registerRequest, logoutRequest, productRequest, addProductRequest, showProductsRequest, deleteProductRequest, showOrdersRequest, addOrderRequest} from '@/utils/api.js';

export default createStore({
    state: {
        token: localStorage.getItem('myAppToken') || '',
        products: [],
        userCart: [],
        userOrder: []
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getProducts: state => state.products,
        getCartUser: state => state.userCart,
        getOrderUser: state => state.userOrder
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
        },
        DELETE_SUCCESS: (state, userCart) => {
            const i = state.userCart.map(item => item.id).indexOf(userCart)
            state.userCart.splice(i,1)
        },
        ADD_ORDER_REQUEST: (state, userCart) => {
            state.userOrder.push(...userCart)
        },
        ADD_ORDER_ERROR: (state) => {
            state.userOrder = ''
        },
        SHOW_ORDER_REQUEST: (state, userOrder) => {
            state.userOrder = userOrder
        },
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
                        resolve()
                    })
            })
        },
        DELETE_REQUEST: ({ commit}) => {
            return new Promise((resolve) => {
                deleteProductRequest()
                    .then((userCart) => {
                        commit('DELETE_SUCCESS', userCart)
                        resolve()
                    })
            })
        },
        ADD_ORDER_REQUEST: ({ commit}) => {
            return new Promise((resolve, reject) => {
                addOrderRequest()
                    .then((userOrder) => {
                        commit('ADD_ORDER_REQUEST', userOrder)
                        localStorage.setItem('userOrder', userOrder)
                        resolve()
                    })
                    .catch((error) => {
                        commit('ADD_ORDER_ERROR')
                        reject(error)
                    })
            })
        },
        SHOW_ORDER_REQUEST: ({ commit }) => {
            return new Promise ((resolve, reject) => {
                showOrdersRequest()
                    .then((userOrder) => {
                        commit('SHOW_ORDER_REQUEST', userOrder)
                        resolve()
                    })
                    .catch(error => {
                        reject(error.message)
                    })
            })
        },
    },
    modules: {
        }
})
