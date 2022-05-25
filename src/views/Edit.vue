<template>
  <div class="main">
    <h1>Order {{getOrder.id}}</h1>
    <div>
      <!-- <div class="form-item">
        <input type="text" :value="getOrder.id" />
      </div> -->
            <div class="form-item">
              <label for="">Product</label> <br>
        <input type="text" :value="getOrder.product_category" />
      </div>
      <div class="form-item">
        <label for="">Price</label> <br>
        <input type="text" :value="getOrder.price" />
      </div>
      <div class="form-item">
        <label for="">Date</label> <br>
        <input type="text" :value="getOrder.date" />
      </div>
    </div>

    <div>
      <button class="btn1" @click="edit()">Edit</button>
      <button class="btn1" @click="deleteItem()">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      category: "",
      price: "",
      date: "",
    };
  },

  mounted() {},

  methods: {
    edit() {
      axios.put(`http://localhost:3000/order_items/${this.getOrder._id}`, {
        product_category: this.category,
        price: this.price,
        date: this.date,
      });

      this.$router.push('/')
    },

    deleteItem() {
      axios.delete(`http://localhost:3000/delete/${this.getOrder._id}`);

         this.$router.push('/')
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

.form-item{
    margin: 20px
}

input{
    padding: 10px;
    width: 400px;
    border-radius: 5px;
}

.btn1{
    padding: 10px;
    background-color: blue;
    color: white;
    margin: 10px;
}
</style>
