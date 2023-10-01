<template>
    <main class="container my-4">
        <h2 class="h2">Keranjang Belanja</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                <template v-if="item.quantity">
                    <td>{{ item.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>Rp. {{ item.price }}</td>
                    <td><button class="btn btn-danger" @click="deleteCartItem(item.id)">Delete</button></td>
                </template>
                </tr>
                <tr>
                    <th scope="row">Total</th>
                    <td></td>
                    <td class="fw-bold">RP. {{ totalPrice }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-success me-3" @click="checkout">Checkout</button>
        <router-link class="btn btn-outline-primary" to="/product">Bact to product</router-link>
    </main>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                cartItems: 'getCartItems',
                totalPrice: 'getTotalPrice'
            }),
        },
        methods: {
            deleteCartItem(id){
                this.$store.dispatch('deleteCartItem', id);
            },
            checkout(){
                return alert(`Pay us Rp. ${this.totalPrice}`);
            }
        }
    }
</script>

<style>

</style>
