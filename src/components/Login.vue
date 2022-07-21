<script>
import { ref } from "@vue/runtime-core";
import getOptions from "../api/dataBase";
import router from "../router/index";
export default {
  name: "Login",
  setup(props) {
    const result_email = ref("");
    const result_password = ref("");
    const initLogin = ref(false);

    const sendData = async () => {
      if (!result_email.value || !result_password.value) {
        alert("Por favor introduzca su credenciales bien");
      } else {
        initLogin.value = true;
        const userCompare = await getOptions.post("/login", {
          email: result_email.value,
          password: result_password.value,
        });
        if (!userCompare.data.token) {
          alert(`Error al iniciar la sesion, ${userCompare.data.msg}`);
          initLogin.value = false;
          result_password.value = "";
        } else {
          localStorage.setItem("token", userCompare.data.token);
          initLogin.value = false;
          router.replace({ path: "/home" });
        }
      }
    };

    const redirectRegister = () => {
      router.replace({ path: "/register" });
    };

    return {
      result_email,
      result_password,
      sendData,
      redirectRegister,
      initLogin,
      router,
    };
  },
  methods: {
    redirectRouter() {},
  },
};
</script>

<template>
  <div class="bodyLogin">
    <div class="descriptionLogin">
      <h1>Log In</h1>
      <p>Login here using your email and password</p>
    </div>
    <div class="bodyForm">
      <div class="inputContent">
        <div v-if="initLogin" class="animationContent">
          <div>
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Email" v-model="result_email" />
        <input
          type="password"
          placeholder="Password"
          v-model="result_password"
        />
      </div>
      <div class="buttonContent">
        <button @click="redirectRegister">Register</button>
        <button @click="sendData">
          <span v-if="!initLogin">Login</span>
          <span v-if="initLogin">Loading...</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scope>
.bodyLogin {
  background: #000;
  width: 28rem;
  height: 28rem;
  padding: 1.5rem;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}

.descriptionLogin {
  height: 30%;
  color: #fff;
}

.descriptionLogin h1,
.descriptionLogin p {
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
  margin: 1rem auto;
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
  color: #000;
  border-radius: 0.5rem;
  margin: 1rem auto;
}

.buttonContent button:hover {
  background-color: #ffffffd6;
  border-style: solid 3px #8ae6f6;
}

/* spinner */
.animationContent {
  margin: 0 40%;
}
.animationContent div {
  display: block;
  position: absolute;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #002fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>