<template>
  <div>
    <router-link :to="{ name: 'ShowPost', params: { id: post.id } }">

    </router-link>


  </div>
  <router-link :to="{ name: 'ShowPost', params: { id: post.id } }">
    <h2 class="post-title">
      <h3>{{ post.title }}</h3>
    </h2>
    <h3 class="post-subtitle">
      <p>{{ snippet }}</p>
    </h3>
  </router-link>
  <span v-for="tag in post.tags" :key="tag" class="post-meta">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }">#{{ tag }}</router-link>
  </span>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...';
    })
    return {
      snippet,
    }
  }
}
</script>

<style></style>