<template style="height: 100%">
  <div id="cards">
    <section id="newcard">
      <div class="display-card">
        <b-container class="mt-5">
          <h1 class="newcard-h mx-auto">DISPLAY ALL CARDS</h1>
          <h4 class="newcard-p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            mollitia nostrum exercitationem fuga delectus similique nemo eius
            sunt.
          </h4>
          <b-row class="mt-5">
            <b-card-group class="mx-auto">
              <b-col
                v-for="card in list"
                :key="card.card_number"
              >
                <router-link to="/onecard">
                  <b-card
                    border-variant="secondary"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    align="center"
                  >
                    <h6 class="card-txt-h">{{card.card_number}}</h6>
                    <h6 class="card-text-style">{{ card.first_name }}</h6>
                    <h6 class="card-text-style">{{ card.last_name }}</h6>
                    <h6 class="card-text-style">{{ card.membership_tier }}</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus eveniet minus necessitatibus, fugit distinctio
                      ducimus,
                    </p>
                  </b-card></router-link
                >
              </b-col>
            </b-card-group>
          </b-row>
        </b-container>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)
import { EventBus } from "../eventbus";
export default {
  data() {
    return {

      list:undefined,
      cardVal: [],
    };
  },
  mounted() {
    EventBus.$on("cardVals", (data) => {
      this.cardVal = data;
      console.log(this.cardVal);
    });
    Vue.axios.get('https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772').then((resp) =>{
      this.list=resp.data;
      console.log(this.list)
    })
  },
};
</script>

<style>
.col {
  padding-right: 5px;
  padding-left: 5px;
}
.display-card {
  margin-top: 74px;
  margin-bottom: 74px;
}
.card-txt-h {
  background: #000;
  color: #fff;
  padding: 10px;
  padding-left: 8vh;
  padding-right: 8vh;
  border-radius: 5px;
  margin: 5px;
  font-size: 24px;
  font-weight: 600;
}
.card-body {
  padding: 5px;
  color: black;
}
.card-body:hover {
  background: rgb(0, 39, 51);
  color: white;
}
a:hover {
  text-decoration: none;
}
.card-text-style {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
