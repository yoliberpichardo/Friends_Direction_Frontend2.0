<script>
import { ref } from "@vue/runtime-core";
import getOptions from "../api/dataBase";
import router from '../router';

export default {
  setup(props) {
    const result_email = ref("");
    const result_password = ref("");
    const result_name = ref("");

    const sendData = async () => {
      if (!result_name.value || !result_email.value || !result_password.value ) {
        alert("Por favor introduzca su credenciales bien");
      }else if (result_password.value.length < 6){
        alert('Tu contraseña es demasiada corta, debe de ser mayor a 6 caracteres')
      }
       else {
        const userCompare = await getOptions.post("/register", {
          name: result_name.value,
          email: result_email.value,
          password: result_password.value,
        });
        console.log(userCompare);
        return userCompare, router.replace({ path: "/login" });
      }
    };

    const redirectLogin = () => {
      return router.replace({ path: "/login" });
    };

    return {
      result_email,
      result_password,
      result_name,
      sendData,
      redirectLogin,
      router
    };
  },
};
</script>

<template>
  <q-card class="bodyRegister">
    <q-card-section class="descriptionRegister">
      <h1>Register</h1>
    </q-card-section>
    <div class="bodyForm">
      <div class="inputContent">

        <q-input bg-color="white" outlined label="Name" v-model="result_name"/>

        <q-input bg-color="white" outlined label="Email" v-model="result_email"/>

        <q-input bg-color="white" outlined label="Password" v-model="result_password"/>
      </div>

      <div class="buttonContent">
        <q-btn @click="redirectLogin">Log in</q-btn>
        <q-btn @click="sendData">Register</q-btn>
      </div>
    </div>
  </q-card>
</template>

<style scope>
.bodyRegister {
  background: #000;
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
  color: #fff;
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
