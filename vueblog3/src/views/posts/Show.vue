<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import getPost from '@/composable/getPost.js';
import Loading from '@/components/Loading.vue';
export default {
  props: ['id'],
  components: {
    Loading,
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);
    
    load();

    return { post, error };
  }
}
</script>

<style>

</style>