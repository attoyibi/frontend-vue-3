// src/stores/productStore.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        recentlyViewedProductIds: [],
        // Misalnya, untuk state keranjang belanja
        // cartItems: [],
    }),
    actions: {
        addRecentlyViewed(productId) {
            // Pastikan ID tidak duplikat dan batasi jumlahnya
            if (!this.recentlyViewedProductIds.includes(productId)) {
                this.recentlyViewedProductIds.unshift(productId); // Tambahkan ke depan
                if (this.recentlyViewedProductIds.length > 5) { // Batasi 5 item
                    this.recentlyViewedProductIds.pop();
                }
            }
        },
        // Contoh untuk keranjang belanja
        // addToCart(item) {
        //   this.cartItems.push(item);
        // }
    },
    getters: {
        // getCartTotal: (state) => state.cartItems.reduce(...)
    }
});