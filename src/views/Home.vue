<template>
  <img v-for="(img, index) in imagesList" :key="index" :src="img" />
</template>

<script>
import db from "../../firebaseConfig.js";
export default {
  data() {
    return {
      imagesList: [],
    };
  },
  async mounted() {
    var images = await db.collection("images").get();
    images.docs.forEach((doc) => {
      this.imagesList.push(doc.data().imageData);
    });
  },
};
</script>

<style>
</style>