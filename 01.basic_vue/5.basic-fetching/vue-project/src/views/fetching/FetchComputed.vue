<template>
  <div class="shopping-cart">
    <h2>Keranjang Belanja</h2>
<p>
      <a href="https://github.com/attoyibi/frontend-vue-3/blob/main/01.basic_vue/5.basic-fetching/vue-project/src/views/fetching/FetchComputed.vue" 
       target="_blank">
      Lihat kode sumber di GitHub
      </a>
    </p>
    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Keranjang Anda kosong.</p>
      <button @click="addSampleItems">Tambahkan Beberapa Produk Contoh</button>
    </div>

    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Produk</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Total per Item</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>Rp {{ item.price.toLocaleString('id-ID') }}</td>
            <td>
              <button @click="decreaseQuantity(item.id)">-</button>
              {{ item.quantity }}
              <button @click="increaseQuantity(item.id)">+</button>
            </td>
            <td>Rp {{ (item.price * item.quantity).toLocaleString('id-ID') }}</td>
          </tr>
        </tbody>
      </table>

      <div class="cart-summary">
        <p>Total Item: <strong>{{ totalItems }}</strong></p>
        <p>Subtotal: <strong>Rp {{ subtotal.toLocaleString('id-ID') }}</strong></p>
        <p v-if="discountPercentage > 0">Diskon ({{ discountPercentage }}%): <strong>- Rp {{ discountAmount.toLocaleString('id-ID') }}</strong></p>
        <h3>Total yang Harus Dibayar: <strong>Rp {{ finalTotal.toLocaleString('id-ID') }}</strong></h3>
      </div>

      <button class="checkout-button">Lanjutkan ke Pembayaran</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Data Reaktif untuk Keranjang Belanja
const cartItems = ref([]);

// Diskon statis untuk contoh ini (bisa juga dari data reaktif lain)
const discountPercentage = ref(10); // Misalnya 10% diskon

// Fungsi untuk menambahkan item contoh
const addSampleItems = () => {
  cartItems.value = [
    { id: 1, name: 'Laptop Gaming', price: 15000000, quantity: 1 },
    { id: 2, name: 'Mouse Wireless', price: 350000, quantity: 2 },
    { id: 3, name: 'Keyboard Mekanik', price: 1200000, quantity: 1 }
  ];
};

// Fungsi untuk mengubah jumlah item
const increaseQuantity = (id) => {
  const item = cartItems.value.find(item => item.id === id);
  if (item) {
    item.quantity++;
  }
};

const decreaseQuantity = (id) => {
  const item = cartItems.value.find(item => item.id === id);
  if (item && item.quantity > 1) {
    item.quantity--;
  } else if (item && item.quantity === 1) {
    // Hapus item jika jumlahnya menjadi 0
    cartItems.value = cartItems.value.filter(item => item.id !== id);
  }
};

// --- Computed Properties ---

// 1. Menghitung Total Jumlah Item di Keranjang
const totalItems = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
});

// 2. Menghitung Subtotal Harga Semua Item Sebelum Diskon
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

// 3. Menghitung Jumlah Diskon
const discountAmount = computed(() => {
  if (discountPercentage.value > 0) {
    return subtotal.value * (discountPercentage.value / 100);
  }
  return 0;
});

// 4. Menghitung Total Harga Akhir Setelah Diskon
const finalTotal = computed(() => {
  return subtotal.value - discountAmount.value;
});

// Tambahkan item contoh saat komponen dimuat (opsional)
// Anda bisa juga menggunakan mounted hook untuk ini
addSampleItems();

</script>

<style scoped>
.shopping-cart {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
.empty-cart {
  text-align: center;
  padding: 40px;
  color: #666;
}
.empty-cart button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
td button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 2px 8px;
  cursor: pointer;
  border-radius: 3px;
  margin: 0 5px;
}
.cart-summary {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}
.cart-summary p, .cart-summary h3 {
  margin: 5px 0;
}
.checkout-button {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 20px;
}
</style>