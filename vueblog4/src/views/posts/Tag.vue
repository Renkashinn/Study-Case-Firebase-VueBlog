<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">Posts by tag</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
          <PostList :posts="postsWithTags" />
        </div>
        <div v-else>
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
import Loading from '@/components/Loading.vue';
import getPosts from '@/composable/getPosts.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Tag',
  components: {
    PostList,
    Loading,
  },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postsWithTags = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { posts, postsWithTags, error };
  },
  mounted() {
    console.log($('.para').text());
  },
}
</script>
