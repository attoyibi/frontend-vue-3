import { ref, reactive } from 'vue'

export function useCounter() {
    const hello = ref("");
    const dataReactive = { count: 0 }
    const contohReactive = reactive(dataReactive);


    // // cara pertama
    function handleClick() {
        // contohReactive.count++;
        // console.log(contohReactive.count);
        console.log(dataReactive === contohReactive); // true 
        //logic untuk menambah di taruh sini
    }
    return {
        hello,
        count: contohReactive,
        handleClick
    }
}