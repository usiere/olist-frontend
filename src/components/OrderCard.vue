<template>
  <div class="grid-card">
    <!-- <h4>{{ category }}</h4> -->
    <!-- <div class="sub-text2">Order Id: {{ id }}</div> -->
     <div class="sub-text2">Product name: {{ name }}</div>
    <div class="sub-text2">Order price: {{ price }}</div>

    <div>
      <span class="sub-text2">Date: {{ date }}</span>
    </div>

    <!-- <button>see details</button> -->
    <button class="grid-card-btn" to="/info" @click="putOrder()">
      view order
    </button>
  </div>
</template>

<style scoped>
.grid-card {
  width: 270px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 30px auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-bottom: 20px;
  background-color: white;
  padding: 10px;
}

.img1 {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 12px;
}

.grid-card-btn {
  background-color: #2b5de2;
  color: white;
  padding: 10px;
  width: 150px;
  height: 30px;
  margin-top: 10px;
  border: none;
  border-radius: 7px;
  margin-bottom: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
}

.grid-card-btn:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.sub-text1 {
  font-size: 10px;
  font-weight: bold;
  margin-left: 10px;
}

.sub-text2 {
  color: rgba(12, 12, 29, 0.4);
  font-size: 14px;
}

.sub-text3 {
  color: rgba(12, 12, 29, 0.4);
  font-size: 14px;
  margin-left: 10px;
}
@media screen and (max-width: 600px) {
  .grid-card {
    width: 150px;
  }

  .img1 {
    width: 100px;
    height: 100px;
  }

  .grid-card {
    width: 150px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-bottom: 10px;
  }

  .img1 {
    width: 110px;
    height: 110px;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 6px;
  }

  .grid-card-btn {
    background-color: #2b5de2;
    color: white;
    padding: 5px;
    width: 75px;
    height: 15px;
    margin-top: 5px;
    border: none;
    border-radius: 3.5px;
    margin-bottom: 5px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    text-decoration: none;
    font-size: 10px;
  }

  .grid-card-btn:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  .sub-text1 {
    font-size: 13px;
    font-weight: bold;
    margin-left: 5px;
  }

  .sub-text2 {
    color: rgba(12, 12, 29, 0.4);
    font-size: 9px;
  }

  .sub-text3 {
    color: rgba(12, 12, 29, 0.4);
    font-size: 9px;
    margin-left: 5px;
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["id", "price", "date", "category", "name"],
  data() {
    return {
      // counter only uses this.initialCounter as the initial value;
      // it is disconnected from future prop updates.
    };
  },

  methods: {
    ...mapActions(["setOrder"]),

    async putOrder() {
      const order = {
        id: this.id,
        price: this.price,
        date: this.date,
      };
      await this.setOrder(order);

      console.log(this.getOrder);

      this.$router.push("/edit");
    },
  },

  computed: {
    ...mapGetters(["getOrder"]),
  },
};
</script>
