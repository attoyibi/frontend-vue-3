<template>
  <div class="product-detail-page">
    <h1>Fetch Vue Query</h1>
    <p>Halaman ini menampilkan detail produk berdasarkan ID yang diberikan di URL.</p>
    <div v-if="!productId" class="no-product-id">
          
        <p>Silakan berikan ID produk di URL (misalnya: /products/1).</p>
      <router-link to="/products/1">Lihat Produk ID 1</router-link> |
      <router-link to="/products/2">Lihat Produk ID 2</router-link> |
      <router-link to="/products/3">Lihat Produk ID 3</router-link>
    </div>
    <div v-else>
      <h1>Detail Produk</h1>
    
      <router-link to="/fetch-vue-query" class="back-button">
        ← Kembali ke Semua Produk
    </router-link>

      <div v-if="isLoading" class="loading-state">
        <p>Memuat detail produk...</p>
      </div>

      <div v-else-if="isError" class="error-state">
        <p>Gagal memuat produk: {{ error?.message || 'Terjadi kesalahan' }}</p>
        <button @click="refetch" class="retry-button">Coba Lagi</button>
      </div>

      <div v-else-if="product" class="product-card">
        <img :src="product.thumbnail" :alt="product.title" class="product-thumbnail" />
        <div class="product-info">
          <h2>{{ product.title }}</h2>
          <p class="category">Kategori: {{ product.category }}</p>
          <p class="brand">Brand: {{ product.brand }}</p>
          <p class="price">Harga: Rp {{ product.price.toLocaleString('id-ID') }}</p>
          <p class="rating">Rating: {{ product.rating }} ⭐</p>
          <p class="description">{{ product.description }}</p>

          <button class="add-to-cart-button">Tambahkan ke Keranjang</button>
        </div>
      </div>

      <div v-else class="empty-state">
        <p>Produk tidak ditemukan.</p>
      </div>

      <div class="recently-viewed">
        <h3>Baru Dilihat:</h3>
        <ul v-if="productStore.recentlyViewedProductIds.length > 0">
          <li v-for="id in productStore.recentlyViewedProductIds" :key="id">
            <router-link :to="`/products/${id}`">Produk ID {{ id }}</router-link>
          </li>
        </ul>
        <p v-else>Belum ada produk yang baru dilihat.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router'; // Untuk mendapatkan parameter dari URL
import { useProduct } from '@/composables/useProduct'; // Import composable
import { useProductStore } from '@/stores/productStore'; // Import Pinia store

const route = useRoute();
const productStore = useProductStore();

// Dapatkan productId dari parameter URL
const productId = computed(() => route.params.id);

// Gunakan composable useProduct (Vue Query)
// Kita meneruskan productId sebagai ref agar useProduct bisa bereaksi jika productId berubah
const { product, isLoading, isError, error, refetch } = useProduct(productId);

// Pantau perubahan produk yang berhasil diambil dan tambahkan ke "recently viewed" di Pinia
watch(product, (newProduct) => {
  if (newProduct && newProduct.id) {
    productStore.addRecentlyViewed(newProduct.id);
  }
}, { immediate: true }); // Jalankan segera saat pertama kali product memiliki nilai
</script>

<style scoped>
.product-detail-page {
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 30px auto;
  padding: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.2em;
}

.no-product-id {
  text-align: center;
  padding: 50px;
  font-size: 1.1em;
  color: #7f8c8d;
  border: 1px dashed #ccc;
  border-radius: 8px;
}

.no-product-id a {
  margin: 0 5px;
  color: #3498db;
  text-decoration: none;
}
.no-product-id a:hover {
  text-decoration: underline;
}

.loading-state, .empty-state {
  text-align: center;
  padding: 50px;
  font-size: 1.2em;
  color: #7f8c8d;
}

.error-state {
  text-align: center;
  padding: 40px;
  background-color: #fcebeb;
  border: 1px solid #e74c3c;
  border-radius: 8px;
  color: #e74c3c;
  font-size: 1.1em;
}

.error-state .retry-button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.error-state .retry-button:hover {
  background-color: #2980b9;
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

@media (min-width: 768px) {
  .product-card {
    flex-direction: row;
    align-items: flex-start;
  }
}

.product-thumbnail {
  width: 250px;
  height: 250px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: white;
}

.product-info {
  flex-grow: 1;
  text-align: center;
}

@media (min-width: 768px) {
  .product-info {
    text-align: left;
  }
}

.product-info h2 {
  color: #333;
  font-size: 2em;
  margin-top: 0;
  margin-bottom: 10px;
}

.product-info p {
  margin-bottom: 8px;
  color: #555;
  line-height: 1.5;
}

.product-info .price {
  font-size: 1.5em;
  font-weight: bold;
  color: #28a745;
  margin-top: 15px;
  margin-bottom: 15px;
}

.product-info .description {
  font-style: italic;
  color: #777;
}

.add-to-cart-button {
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}

.recently-viewed {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.recently-viewed h3 {
  color: #34495e;
  margin-bottom: 15px;
}

.recently-viewed ul {
  list-style: disc;
  padding-left: 20px;
}

.recently-viewed li {
  margin-bottom: 5px;
  color: #555;
}

.recently-viewed a {
  color: #3498db;
  text-decoration: none;
}
.recently-viewed a:hover {
  text-decoration: underline;
}
</style>