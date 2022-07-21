<script>
import { ref } from "@vue/runtime-core";
import getOptions from "../api/dataBase";
import router from "../router";

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
      router.replace({ path: "/Login" });
    };

    return {
      result_email,
      result_password,
      result_name,
      sendData,
      redirectLogin,
    };
  },
};
</script>

<template>
  <div class="bodyRegister">
    <div class="descriptionRegister">
      <h1>Register</h1>
    </div>
    <div class="bodyForm">
      <div class="inputContent">
        <label>Name</label>
        <input type="text" placeholder="Name" v-model="result_name" />
        <label>Email</label>
        <input type="text" placeholder="Email" v-model="result_email" />
        <label>Password</label>
        <input type="text" placeholder="Password" v-model="result_password" />
      </div>

      <div class="buttonContent">
        <button @click="redirectLogin">Log In</button>
        <button @click="sendData">Register</button>
      </div>
    </div>
  </div>
</template>

<style scope>
.bodyRegister {
  background: #000;
  width: 28rem;
  height: 28rem;
  padding: 1.5rem;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}

.descriptionRegister {
  height: 30%;
  color: #fff;
}

.descriptionRegister h1 {
  margin: 1rem;
}

.bodyForm {
  height: 70%;
  display: flex;
  flex-direction: column;
}

.inputContent {
  height: 60%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.inputContent input {
  width: 20rem;
  height: 2rem;
  margin: 0.1rem auto 1rem auto;
  padding: 7px;
  border-radius: 0.5rem;
  border: none;
  text-size-adjust: 1rem;
}

.buttonContent {
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