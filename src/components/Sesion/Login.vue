<script>
import { ref } from "@vue/runtime-core";
import getOptions from "../../api/dataBase";
import router from "src/router";
import useStore from "src/stores/store";

export default {
  name: "Login",
  setup(props) {
    const use = useStore();
    const result_email = ref(null);
    const result_emailRef = ref(null);
    const result_password = ref(null);
    const result_passwordRef = ref(null);
    const initLogin = ref(false);

    const sendData = async () => {
      initLogin.value = true
      result_emailRef.value.validate();
      result_passwordRef.value.validate();
      const userCompare = await getOptions.post("/login", {
        email: result_email.value,
        password: result_password.value,
      });
      if (userCompare.user) {
        localStorage.setItem("token", userCompare.data.token);
        use.token = userCompare.data.token;
        initLogin.value = false;
        return router.push("/");
      }
    };

    const redirectRegister = () => {
      return router.push("/register");
    };

    return {
      result_email,
      result_emailRef,
      result_emailRules: [
        (val) => (val && val.length > 0) || "Please type something",
      ],
      result_password,
      result_passwordRef,
      result_passwordRules: [
        (val) => (val && val.length > 0) || "Please type something",
      ],
      sendData,
      redirectRegister,
      initLogin,
      router,
    };
  },
};
</script>

<template>
  <q-card class="bodyLogin">
    <div class="descriptionLogin">
      <h1>Log In</h1>
      <p>Login here using your email and password</p>
    </div>
    <q-card-section class="bodyForm">
      <form @submit.prevent.stop="sendData" class="inputContent">
        <div v-if="initLogin" class="animationContent">
          <q-card-actions>
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </q-card-actions>
        </div>
        <q-input
        ref="result_emailRef"
          style="margin: 10px 0"
          bg-color="white"
          outlined
          label="Email"
          v-model="result_email"
          :rules="result_emailRules"
        />

        <q-input
        ref="result_passwordRef"
          style="margin: 10px 0"
          type="password"
          bg-color="white"
          outlined
          label="Password"
          v-model="result_password"
          :rules="result_passwordRules"
        />
      </form>

      <q-card-section class="buttonContent">
        <q-btn @click="redirectRegister">Register</q-btn>
        <q-btn type="submit" color="primary">
          <span v-if="!initLogin">Login</span>
          <span v-if="initLogin">Loading...</span>
        </q-btn>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style scope>
.bodyLogin {
  background: rgb(255, 255, 255);
  width: 31rem;
  height: 32rem;
  padding: 1.5rem;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}

.descriptionLogin {
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.descriptionLogin h1,
.descriptionLogin p {
  margin: 1rem;
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
  color: #000;
  margin: 1rem auto;
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
