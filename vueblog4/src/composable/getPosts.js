import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const postsCollection = collection(projectFirestore, 'posts');
      const res = await getDocs(postsCollection);
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
