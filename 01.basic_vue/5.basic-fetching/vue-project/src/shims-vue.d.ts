// src/shims-vue.d.ts
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, L, A>
    // Kita bisa menggunakan `any` untuk menyederhanakan jika kita tidak ingin terlalu spesifik.
    const component: DefineComponent<{}, {}, any>
    export default component
}