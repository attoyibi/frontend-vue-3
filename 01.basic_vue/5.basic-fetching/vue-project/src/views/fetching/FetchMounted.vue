<template>
  <div class="post-dashboard">
    <h1>Analisis Postingan Blog</h1>

    <div v-if="isLoading" class="loading-state">
      <p>Memuat data postingan dari API...</p>
    </div>
    <div v-else-if="error" class="error-state">
      <p>Error: {{ error }}</p>
      <button @click="fetchPosts">Coba Lagi</button>
    </div>
    <div v-else>
      <div v-if="posts.length > 0">
        <div class="summary-cards">
          <div class="card">
            <h3>Total Postingan</h3>
            <p>{{ totalPosts }}</p>
          </div>
          <div class="card">
            <h3>Penulis Paling Aktif</h3>
            <p>{{ mostActiveAuthor }}</p>
          </div>
          <div class="card">
            <h3>Panjang Judul Terpanjang</h3>
            <p>{{ longestTitleLength }} karakter</p>
          </div>
        </div>

        <h2>Postingan Berdasarkan Penulis:</h2>
        <ul class="author-list">
          <li v-for="(count, userId) in postsByAuthor" :key="userId">
            User ID {{ userId }}: {{ count }} postingan
          </li>
        </ul>

        <h2>Postingan dengan Kata Kunci "sunt":</h2>
        <p v-if="postsWithKeyword.length === 0">Tidak ada postingan dengan kata kunci "sunt".</p>
        <ul class="keyword-list" v-else>
          <li v-for="post in postsWithKeyword" :key="post.id">
            <strong>{{ post.title }}</strong> - Oleh User ID {{ post.userId }}
          </li>
        </ul>

        <h2>Daftar Semua Postingan:</h2>
        <ul class="all-posts-list">
          <li v-for="post in posts" :key="post.id">
            <strong>{{ post.title }}</strong> - Oleh User ID {{ post.userId }}
          </li>
        </ul>
      </div>
      <div v-else class="empty-state">
        <p>Tidak ada postingan yang ditemukan.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// --- State Reaktif ---
const posts = ref([]); // Akan menyimpan data postingan dari API
const isLoading = ref(true); // Indikator loading
const error = ref(null); // Menyimpan pesan error jika ada

// --- Fungsi Pengambilan Data (Asinkron) ---
const fetchPosts = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    posts.value = data;
  } catch (err) {
    console.error('Terjadi kesalahan saat mengambil postingan:', err);
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

// --- Computed Properties (Menggunakan data dari 'posts' ref) ---

// 1. Total Jumlah Postingan
const totalPosts = computed(() => {
  return posts.value.length;
});

// 2. Jumlah Postingan Berdasarkan Penulis (User ID)
const postsByAuthor = computed(() => {
  const authorCounts = {};
  if (posts.value.length > 0) {
    posts.value.forEach(post => {
      authorCounts[post.userId] = (authorCounts[post.userId] || 0) + 1;
    });
  }
  return authorCounts; // Contoh: { 1: 10, 2: 10, ... }
});

// 3. Menentukan Penulis Paling Aktif
const mostActiveAuthor = computed(() => {
  if (Object.keys(postsByAuthor.value).length === 0) {
    return 'N/A';
  }
  let maxCount = 0;
  let activeAuthorId = '';
  for (const userId in postsByAuthor.value) {
    if (postsByAuthor.value[userId] > maxCount) {
      maxCount = postsByAuthor.value[userId];
      activeAuthorId = userId;
    }
  }
  return `User ID ${activeAuthorId} (${maxCount} postingan)`;
});

// 4. Panjang Judul Terpanjang
const longestTitleLength = computed(() => {
  if (posts.value.length === 0) {
    return 0;
  }
  let maxLength = 0;
  posts.value.forEach(post => {
    if (post.title && post.title.length > maxLength) {
      maxLength = post.title.length;
    }
  });
  return maxLength;
});

// 5. Postingan dengan Kata Kunci Tertentu di Judul
const postsWithKeyword = computed(() => {
  const keyword = 'sunt'; // Kata kunci yang dicari
  if (posts.value.length === 0) {
    return [];
  }
  return posts.value.filter(post =>
    post.title && post.title.toLowerCase().includes(keyword.toLowerCase())
  );
});

// --- Lifecycle Hook untuk Memulai Pengambilan Data ---
onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.post-dashboard {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 900px;
  margin: 30px auto;
  padding: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.2em;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

.loading-state, .error-state, .empty-state {
  text-align: center;
  padding: 40px;
  font-size: 1.1em;
  color: #7f8c8d;
}

.error-state p {
  color: #e74c3c;
  font-weight: bold;
}

.error-state button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.error-state button:hover {
  background-color: #2980b9;
}

.summary-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  flex: 1;
  min-width: 250px;
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.3em;
}

.card p {
  font-size: 2.5em;
  font-weight: bold;
  color: #2980b9;
  margin-bottom: 0;
  line-height: 1;
}

ul {
  list-style: none;
  padding: 0;
}

.author-list li,
.keyword-list li,
.all-posts-list li {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  padding: 12px 15px;
  margin-bottom: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
}

.keyword-list li strong,
.all-posts-list li strong {
  margin-right: 5px;
  color: #34495e;
}
</style>