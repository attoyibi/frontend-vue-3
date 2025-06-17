// src/composables/useProduct.js
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios'; // Menggunakan axios untuk kemudahan
import { computed } from 'vue';

const fetchProductById = async (productId) => {
    // DummyJSON API: https://dummyjson.com/products/1
    const { data } = await axios.get(`https://dummyjson.com/products/${productId}`);
    return data;
};

export function useProduct(productIdRef) { // productIdRef bisa ref atau computed
    const { data, isLoading, isError, error, refetch } = useQuery({
        // Query Key: Array unik untuk mengidentifikasi query ini.
        // Ketika productId berubah, query akan dianggap berbeda dan data baru akan diambil.
        queryKey: computed(() => ['product', productIdRef.value]),

        // Query Function: Fungsi asinkron yang melakukan fetch data
        queryFn: () => fetchProductById(productIdRef.value),

        // Opsi Vue Query (optional tapi sangat direkomendasikan):
        staleTime: 1000 * 60 * 5, // Data dianggap "stale" setelah 5 menit. Akan diambil ulang di latar belakang.
        cacheTime: 1000 * 60 * 10, // Data akan tetap di cache selama 10 menit (bahkan jika tidak ada komponen yang menggunakan)
        enabled: computed(() => !!productIdRef.value), // Hanya jalankan query jika productId ada
        retry: 3, // Coba lagi 3 kali jika gagal
    });

    return {
        product: data, // data akan menjadi `undefined` saat loading
        isLoading,
        isError,
        error,
        refetch, // Fungsi untuk memaksa refetch data
    };
}