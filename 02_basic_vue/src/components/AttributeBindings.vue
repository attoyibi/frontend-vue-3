<template>
  <div>
    <!-- 🔹 Atribut Umum -->
    <h2 :id="headingId" :class="headingClass" :style="headingStyle" :title="headingTitle">
      {{ headingText }}
    </h2>

    <!-- 🔹 Atribut Form -->
    <input
      type="text"
      :value="userInput"
      :placeholder="placeholderText"
      :disabled="isDisabled"
      :readonly="isReadonly"
      :required="isRequired"
      :min="minValue"
      :max="maxValue"
    />

    <input type="checkbox" :checked="isChecked" />
    <button :disabled="isDisabled">Submit</button>

    <!-- 🔹 Atribut Media -->
    <img :src="imageSrc" :alt="imageAlt" :width="imageWidth" :height="imageHeight" />

    <video :src="videoSrc" :controls="true" :autoplay="false" :loop="false" :muted="isMuted"></video>

    <!-- 🔹 Atribut Navigasi -->
    <a :href="profileLink" :target="linkTarget" :download="isDownloadable ? 'file.jpg' : false">
      Download Profile Picture
    </a>

    <!-- 🔹 Atribut Interaksi -->
    <button :tabindex="tabIndex" :draggable="isDraggable">Drag Me</button>

    <!-- 🔹 Atribut Data & ARIA -->
    <div :data-user-id="userId" :aria-label="ariaLabel" :role="roleType">
      Accessible Content
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 🔹 Atribut Umum
      headingId: "main-heading",
      headingClass: "text-xl font-bold",
      headingStyle: "color: blue; background-color: yellow;",
      headingTitle: "Ini adalah judul",
      headingText: "Attribute Binding",

      // 🔹 Atribut Form
      userInput: "Vue.js",
      placeholderText: "Ketik di sini...",
      isDisabled: false,
      isReadonly: false,
      isRequired: true,
      isChecked: true,
      minValue: 1,
      maxValue: 100,

      // 🔹 Atribut Media
      imageSrc: "https://via.placeholder.com/150",
      imageAlt: "Placeholder Image",
      imageWidth: 150,
      imageHeight: 150,
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      isMuted: false,

      // 🔹 Atribut Navigasi
      profileLink: "https://github.com/vuejs",
      linkTarget: "_blank",
      isDownloadable: true,

      // 🔹 Atribut Interaksi
      tabIndex: 0,
      isDraggable: true,

      // 🔹 Atribut Data & ARIA
      userId: 12345,
      ariaLabel: "Deskripsi untuk pengguna screen reader",
      roleType: "button"
    };
  }
};
</script>
