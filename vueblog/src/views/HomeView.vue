<template>
  <div class="home">
    <h2>Ref</h2>
    <p>Hi, saya {{ contactOne.name }}. Ini adalah nomor saya {{ contactOne.number }}</p>
    <button @click="handleClick">Click</button>
    <h2>Reactive</h2>
    <p>Hi, saya {{ contactTwo.name }}. Ini adalah nomor saya {{ contactTwo.number }}</p>
    <button @click="handleClickTwo">Click</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  name: 'Home',
  setup() {

    const contactOne = ref({
      name: 'Azka',
      number: '12345',
    });
    const contactTwo = reactive({
      name: 'Hakim',
      number: '09879',
    })
    

    const handleClick = () => {
      contactOne.value.name = 'Luna';
      contactOne.value.number = '13579';
    };
    const handleClickTwo = () => {
      contactTwo.name = 'Luna';
      contactTwo.number = '13579';
    };

    return {
      contactOne,
      contactTwo,
      handleClick,
      handleClickTwo,
    };
  },
}
</script>
