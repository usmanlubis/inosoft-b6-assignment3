import { createStore } from 'vuex';

export default createStore({
    state: {
        stockItems: [
            {
                id: 1,
                name: 'Indomie Goreng Rendang',
                description: 'Masakan instant terenak di dunia',
                stock: 10,
                price: 3900
            },
            {
                id: 2,
                name: 'Mie Goreng Rendang',
                description: 'Masakan instant khusus anak kostan',
                stock: 5,
                price: 1500
            },
            {
                id: 3,
                name: 'Bakmi Mewah',
                description: 'Kalau anak kostan jangan macam-macam deh',
                stock: 80,
                price: 10000
            }
        ],
        cartItems: [],
    },
    getters: {
        getStockItems(state) {
            return state.stockItems;
        },
        getCartItems(state) {
            return state.cartItems;
        },
        getTotalPrice(state) {
            let sum = 0;
            for (let item of state.cartItems) {
                sum += item.price * item.quantity;
            }
            return sum;
        },
    },
    actions: {
        addToCart(context, {id, name, price}) {
            context.commit('ADD_TO_CART', {id, name, price})
        },
        deleteCartItem(context, id) {
            context.commit('DELETE_CART_ITEMS', id)
        },
    },
    mutations: {
        ADD_TO_CART(state, {id, name, price}) {
            if (state.cartItems.some((item) => item.id === id)) {
                state.cartItems.map((item) => {
                    if (item.id === id) {
                        item.quantity++;
                        state.stockItems.map((item) => {
                            if(item.id === id){
                                item.stock--;
                            }
                        });
                    }
                })
            } else {
                state.stockItems.map((item) => {
                    if(item.id === id){
                        item.stock--;
                    }
                })
                const newItem = {
                    id,
                    name,
                    quantity: 1,
                    price,
                };
                state.cartItems.push(newItem);
            }
        },
        DELETE_CART_ITEMS(state, id) {
            state.cartItems.map((item) => {
                    if (item.id === id) {
                        item.quantity--;
                    }
                })
                state.stockItems.map((item) => {
                    if(item.id === id){
                        item.stock++;
                    }
                })
        },
    }
})
