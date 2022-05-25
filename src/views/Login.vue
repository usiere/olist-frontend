<template>
  <div class="main">
    <div class="main-left"></div>

    <div class="main-right">
      <div class="main-right-text">Login</div>
      <div class="form-item">
        <label for="Seller_id">City</label>
        <input type="text" placeholder="City" v-model="seller_id" />
      </div>

      <div class="form-item">
        <label for="Code">Zip code prefix</label>
        <input type="text" placeholder="Code" v-model="code" />
      </div>
      <!-- 
            <button class="form-btn">Submit</button> -->

      <button class="form-btn" @click="submit()">Submit</button>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
}

.main-left {
  background-size: 50vw 100vh;
}

.main-right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-right-text {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.form-item {
  margin: 40px;
  display: flex;
  flex-direction: column;
}

input {
  padding: 20px;
  width: 400px;
  border-radius: 20px;
  border: 1px solid grey;
}

.form-btn {
  background-color: blue;
  color: white;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .main {
    display: flex;
    flex-direction: column;
  }

  .main-left {
    display: none;
  }

  .main-right {
    padding: 30px;
    margin: 20px;
  }

  input {
    padding: 20px;
    width: 300px;
    border-radius: 20px;
    border: 1px solid grey;
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",

  data() {
    return {
      seller_id: "",
      code: "",
    };
  },
  props: {
    msg: String,
  },
  components: {},

  mounted() {},

  methods: {
    ...mapActions(["setAuth"]),

    submit() {
      const data = {
        seller_id: this.seller_id,
        code: this.code,
      };

      this.setAuth(data);
    },
  },

     watch: {
    getAuth(newValue) {
      console.log('wactching')
     if(newValue === true ){
         this.$router.push('/')
     }
    },
  },

    computed: {
    ...mapGetters(["getAuth"]),
  },
};
</script>
