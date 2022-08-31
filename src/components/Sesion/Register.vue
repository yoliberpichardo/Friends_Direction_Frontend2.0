<script>
import { ref } from "@vue/runtime-core";
import getOptions from "../../api/dataBase";
import router from "../../router";

export default {
  setup(props) {
    const result_email = ref(null);
    const result_emailRef = ref(null);
    const result_password = ref(null);
    const result_passwordRef = ref(null);
    const result_name = ref(null);
    const result_nameRef = ref(null);

    const sendData = async () => {

      result_emailRef.value.validate()
      result_passwordRef.value.validate()
      result_nameRef.value.validate()

      const userCompare = await getOptions.post("/register", {
        name: result_name.value,
        email: result_email.value,
        password: result_password.value,
      });

      if(userCompare?.user){
        return userCompare, router.replace({ path: "/login" });
      }

    };

    const redirectLogin = () => {
      return router.replace({ path: "/login" });
    };

    return {
      result_email,
      result_emailRef,
      result_emailRules: [
        (val) => (val && val.length > 0) || "Please type something",
      ],
      result_password,
      result_passwordRef,
      result_name,
      result_nameRef,
      result_nameRules: [
        (val) => (val && val.length > 0) || "Please type something",
      ],
      result_passwordRules: [
        (val) => (val && val.length > 0) || "Please type something",
      ],
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
          ref="result_nameRef"
          bg-color="white"
          outlined
          label="Name"
          v-model="result_name"
          :rules="result_nameRules"
        />

        <q-input
          ref="result_emailRef"
          bg-color="white"
          outlined
          label="Email"
          v-model="result_email"
          :rules="result_emailRules"
        />

        <q-input
          ref="result_passwordRef"
          bg-color="white"
          outlined
          type="password"
          label="Password"
          v-model="result_password"
          :rules="result_passwordRules"
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
