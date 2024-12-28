<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Loading />
    </div>
    <button class="btn btn-primary">Button</button>
    <p class="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nihil recusandae veniam inventore iusto doloremque nulla illo voluptatibus vero eum nobis iure non, quod explicabo error perspiciatis asperiores! Qui, iste.</p>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import Loading from '../components/Loading.vue';
import getPosts from '../composable/getPosts.js';

export default {
  name: 'Home',
  components: {
    PostList,
    Loading,
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
  mounted() {
    console.log($('.para').text());
  },
}
</script>
