<template>
  <div class="main">
    <h1>Your Order</h1>

    <div>
      <div>id: {{ this.getOrder.id }}; price: {{ this.getOrder.price }};</div>
    </div>

    <div>
      <button>Edit</button>
      <router-link to="/edit">Edit</router-link>
      <button @click="deleteItem()">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "HelloWorld",

  mounted() {},

  methods: {
    edit() {
      axios.put(`http://localhost:3000/order_items/${this.getOrder._id}`, {
        // title: title,
        // description: description,
        // published: true,
      });
    },

    deleteItem() {
      alert("deleting");
      axios.delete(`http://localhost:3000/delete/${this.getOrder._id}`);
    },
  },

  computed: {
    ...mapGetters(["getOrder"]),
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px;
}
</style>
