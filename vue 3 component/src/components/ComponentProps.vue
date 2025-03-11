<template>
  <div class="component">
    <h1>{{ message }}</h1>
    <p>Jumlah hitungan: {{ count }}</p>
    <p v-if="isFinished">Selesai</p>
    <p v-else>Belum selesai</p>
    <p>Alamat:</p>
    <ul>
      <li>Jalan: {{ address.street }}</li>
      <li>Kota: {{ address.city }}</li>
      <li>Provinsi: {{ address.province }}</li>
    </ul>
    <p>List:</p>
    <ol>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ComponentProps",
  props: {
    message: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
    address: {
      type: Object,
      default: () => ({
        street: "",
        city: "",
        province: "",
      }),
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>




