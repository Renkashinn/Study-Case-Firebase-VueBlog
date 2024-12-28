import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const postCollection = doc(projectFirestore, 'posts', id);
      const res = await getDoc(postCollection);
      if (!res.exists()) {
        throw Error('data not available');
      }
      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
