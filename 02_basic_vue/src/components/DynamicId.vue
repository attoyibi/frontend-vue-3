<!-- contoh kode penggunaan v-bind:id untuk sebuah fitur pembuatan form sesuai data yang masuk. jadi jumlah form akan dynamic berdasarkan jumlah datanya -->

<template>
    <div>
      <label :for="'input-' + field.name" v-for="field in fields" :key="field.name">
        {{ field.label }}
        <input :id="'input-' + field.name" :type="field.type" v-model="formData[field.name]" />
      </label>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          username: "",
          email: ""
        },
        fields: [
          { name: "username", label: "Username:", type: "text" },
          { name: "email", label: "Email:", type: "email" },
          { name: "status", label: "Status:", type: "text" }
        ]
      };
    }
  };
  </script>