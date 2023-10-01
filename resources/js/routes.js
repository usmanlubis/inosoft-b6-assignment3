import Product from './components/ProductComponent.vue';
import Cart from './components/CartComponent.vue';

export const routes = [
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/',
        redirect: '/product'
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    }
]
