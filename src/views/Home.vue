<template>
  <div class="images">
    <img
      v-for="(img, index) in imagesList"
      :key="index"
      :src="img"
      class="image"
    />
  </div>
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
.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}

.image {
  width: 20%;
  border: solid 2px;
  margin: 20px;
}
</style>
