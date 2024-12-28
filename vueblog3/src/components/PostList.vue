<template>
  <div class="port-list">
    <div v-for="post in posts" :key="post.id">
      <PostSingle :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import PostSingle from './PostSingle.vue';
export default {
  props: ['posts'],
  components: {
    PostSingle,
  },
  setup(props) {
    onMounted(() => console.log('component mounted'));
    onUnmounted(() => console.log('component unmounted'));
    onUpdated(() => console.log('component updated'));
  },
}
</script>

<style>

</style>