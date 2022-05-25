<template>
  <div>
    <h3 class="main-text">Orders</h3>
    <div class="pang-wrap">
      <paginate
        :page-count="20"
        :click-handler="pangFunc"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pang'"
      >
      </paginate>
    </div>
    <div class="card-grid">
      <div v-for="order in orders" :key="order.name">
        <div>
          <OrderCard
            :id="order.product_id"
            :price="order.price"
            :date="order.date"
            :name="order.product_category"
          />
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-text {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

.pang {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20vw;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
}

.pang-wrap {
  position: sticky;
  top: 0;
  z-index: 10;
}

.card-grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>

<script>
import { mapGetters } from "vuex";
import OrderCard from "../components/OrderCard.vue";
import axios from "axios";

export default {
  name: "HelloWorld",

  data() {
    return {
      value: null,
      options: ["list", "of", "options"],
      orders: [],
      limit: 20,
      skip: 20,
    };
  },
  props: {
    msg: String,
  },
  components: {
    OrderCard,
  },

  mounted() {
    window.scrollTo(0, 0);
    axios.get("http://localhost:3000/order_items").then((response) => {
      this.orders = response.data.data;
    });

    if (this.getAuth === false) {
      this.$router.push("/login");
    }
  },

  methods: {
    pangFunc(pageNum) {
      this.skip = 20 * (pageNum - 1);

      axios
        .get("http://localhost:3000/order_items", {
          params: { limit: 20, skip: this.skip },
        })
        .then((response) => {
          this.orders = response.data.data;
        });
    },
  },

  computed: {
    ...mapGetters(["getAuth"]),
  },
};
</script>
