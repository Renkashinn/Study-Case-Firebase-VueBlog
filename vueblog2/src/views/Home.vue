<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <div v-for="(name, index) in resultSearch" :key="index">{{ name }}</div>
    <button @click="handleClick">Stop</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';
export default {
  name: 'Home',
  setup() {
    const search = ref('');
    const names = ref(['Katlyn Lehmann', 'Darwin Tremaine', 'Noriko Stgelais', 'Shawna Fairbank', 'Zachery Raap', 'Ahmad Urenda', 'Raymon Lafrance', 'Caroyln Bolander', 'Sharell Satcher', 'Annett Purcell']);

    const stop = watch(search, () => {
      console.log('fungsi wathc berjalan');
    });
    const stopEffect = watchEffect(() => {
      console.log('watcheffect berjalan', search.value)
    })

    const resultSearch = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stop();
      stopEffect();
    };

    return {
      names,
      search,
      resultSearch,
      handleClick,
    };
  },
}
</script>
