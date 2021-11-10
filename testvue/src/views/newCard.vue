<template>
  <div>
    <section id="newcard">
      <div class="newcard-container">
        <b-container>
          <h1 class="newcard-h">CREATE CARD</h1>
          <p class="newcard-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            consectetur rerum beatae qui rem nobis eum odit! Modi laborum minus
            libero deleniti nam, error iste rerum! Similique accusamus
            architecto quod?
          </p>
          <b-form @submit="submitForm">
            <b-row class="signup-form mt-5">
              <b-col sm="6" md="6" offset-md="3">
                <b-input-group size="lg" class="mb-2">
                  <b-form-input
                    id="input-none"
                    :state="null"
                    v-model="fname"
                    placeholder="First Name"
                    ref="my_input"
                    required
                  ></b-form-input>
                </b-input-group>
                <b-input-group size="lg" class="mb-2">
                  <b-form-input
                    id="input-none"
                    v-model="lname"
                    :state="null"
                    placeholder="Last Name"
                    required
                  ></b-form-input>
                </b-input-group>
                <b-input-group size="lg" class="mb-2">
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    class="option-txt"
                    required
                  ></b-form-select>
                </b-input-group>
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Description..."
                  rows="3"
                  required
                  max-rows="6"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col style="max-width: fit-content" md="3" offset-md="3">
                <router-link to="/allcards">
                  <b-button
                    type="submit"
                    id="slider-btn2"
                    class="btn-grad"
                    v-on:click="submitForm"
                    >Submit</b-button
                  ></router-link
                >
              </b-col>
            </b-row>
          </b-form>
        </b-container>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {

data() {
      return {
        fname:'',
        lname:'',
        text:'',
        selected: '',
        options: [
          { value: '', text: 'Please select an option' },
          { value: 'a', text: 'Gold' },
           { value: 'b', text: 'Silver' },
             { value: 'c', text: 'Platinum' },
        ]
      }
},

  methods: {
    submitForm(e){
  if(this.fname ==='' || this.lname ==='' || this.text ==='' || this.selected ===''){   alert('All fields are required');

  e.preventDefault();

    }
else{
  alert('Form Submitted successfully')
}
    }
}
}
</script>
<style>
.newcard-p {
  padding-top: 10px;
  font-size: 20px;
}
.newcard-h {
  font-size: 60px;
  line-height: 50px;
  text-transform: capitalize;
  color: #000;
  font-weight: 700;
}
#newcard {
  width: 100%;
  background: #efefef;
  background-size: cover;
  overflow: hidden;
  position: relative;
  text-align: center;
  justify-content: center;
  align-content: center;
  height: 100%;
}
.newcard-container {
  margin-top: 45px;
  margin-bottom: 45px;
}

.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

#slider-btn2 {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;
  color: #fff;
  background: black;
  padding-left: 20px;
  padding-right: 20px;
}

::placeholder {
  color: rgb(168, 168, 168);
  font-size: 15px;
  font-weight: 600;
}
.option-txt {
  color: rgb(168, 168, 168);
  font-size: 17px;
  font-weight: 600;
}
</style>
