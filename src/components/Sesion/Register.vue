<script>
import { ref } from "@vue/runtime-core";
import getOptions from "../../api/dataBase";
import router from "../../router";

export default {
  setup(props) {
    const result_email = ref(null);
    const isValidEmail = ref(false);
    const errorEmail = ref(null);
    const result_password = ref(null);
    const isValidPassword = ref(false);
    const errorPassword = ref(null);
    const result_name = ref(null);
    const isValidName = ref(false);
    const errorName = ref(null);

    const sendData = async () => {

      if(!result_name.value || !result_email.value || !result_password.value){
        isValidEmail.value = true
        isValidPassword.value = true
        isValidName.value = true
        errorEmail.value = "Please enter all fields"
        errorPassword.value = "Please enter all fields"
        errorName.value = "Please enter all fields"
      }

      const userCompare = await getOptions.post("/register", {
        name: result_name.value,
        email: result_email.value,
        password: result_password.value,
      });

      if(userCompare?.data?.msg1){
        isValidEmail.value = true
        isValidPassword.value = true
        isValidName.value = true
        errorEmail.value = userCompare.data.msg1
        errorPassword.value = userCompare.data.msg1
        errorName.value = userCompare.data.msg1
      }

      if(userCompare?.data?.msg2){
        isValidPassword.value = true
        errorPassword.value = userCompare.data.msg2
      }

      if (userCompare?.data.user) {
        return userCompare, router.replace({ path: "/login" });
      }
    };

    const redirectLogin = () => {
      return router.replace({ path: "/login" });
    };

    return {
      result_email,
      isValidEmail,
      errorEmail,
      result_password,
      isValidPassword,
      errorPassword,
      result_name,
      isValidName,
      errorName,
      sendData,
      redirectLogin,
      router,
    };
  },
};
</script>

<template>
  <q-card class="bodyRegister">
    <q-card-section class="descriptionRegister">
      <h1>Register</h1>
    </q-card-section>
    <form @submit.prevent.stop="sendData()" class="bodyForm">
      <div class="inputContent">
        <q-input
        bg-color="white"
        outlined label="Name"
        v-model="result_name"
        :error-message="errorName"
        :error="isValidName"
        />

        <q-input
          bg-color="white"
          outlined
          label="Email"
          v-model="result_email"
          :error-message="errorEmail"
          :error="isValidEmail"
        />

        <q-input
          bg-color="white"
          outlined
          type="password"
          label="Password"
          v-model="result_password"
        :error-message="errorPassword"
        :error="isValidPassword"
          />
      </div>

      <div class="buttonContent">
        <q-btn @click="redirectLogin">Log in</q-btn>
        <q-btn type="submit" color="primary">Register</q-btn>
      </div>
    </form>
  </q-card>
</template>

<style scope>
.bodyRegister {
  background: rgb(255, 255, 255);
  width: 31rem;
  height: 32rem;
  padding: 1.5rem;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}

.descriptionRegister {
  height: 30%;
  display: flex;
  justify-content: center;
}

.descriptionRegister h1 {
  margin: 1rem;
  font-size: 5rem;
}

.bodyForm {
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputContent {
  width: 82%;
  height: 80%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.buttonContent {
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: row;
}

.buttonContent button {
  width: 40%;
  height: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: 1rem auto;
  color: #000;
}
</style>
