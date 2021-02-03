<template>
  <q-page class="row items-center justify-center">
    <div class="container image q-pa-xl">
      <h5>Acesse o chat</h5>
      <q-input
        rounded
        outlined
        v-model="email"
        label="Informe o seu E-mail"
        bg-color="white"
        class="q-mb-md"
      ></q-input>
      <q-btn
        :ripple="false"
        color="secondary"
        label="Acessar Chat"
        no-caps
        @click="signIn()"
      />
    </div>
    <q-separator vertical></q-separator>
    <div class="container q-pa-xl">
      <h5>Cadastre-se</h5>
      <q-input
        rounded
        outlined
        v-model="name"
        label="Informe o seu nome"
        bg-color="white"
        class="q-mb-md"
      ></q-input>
      <q-input
        rounded
        outlined
        v-model="emailSignUp"
        label="Informe o seu E-mail"
        bg-color="white"
        class="q-mb-md"
      ></q-input>
      <q-btn
        :ripple="false"
        color="secondary"
        label="Cadastrar"
        no-caps
        @click="signUp()"
      />
    </div>
  </q-page>
</template>

<script>
import { notify } from "src/utils";
import api from "src/services/api";
import crypto from "crypto";
export default {
  name: "PageIndex",
  data() {
    return {
      email: "",
      name: "",
      emailSignUp: ""
    };
  },
  watch: {
    email() {
      if (this.email !== "") {
        this.name = "";
        this.emailSignUp = "";
      }
    },
    name() {
      if (this.name !== "") this.email = "";
    },
    emailSignUp() {
      if (this.emailSignUp !== "") this.email = "";
    }
  },
  methods: {
    async signIn() {
      if (this.email === "") {
        this.fail("Preencha o campo de e-mail!");
        return;
      }
      await api
        .get(`/user/${this.email}`)
        .then(response => {
          this.success("Login efetuado com sucesso!", response.data.id);
        })
        .catch(error => {
          notify("negative", error.response.data.message);
        });
    },
    async signUp() {
      if (this.emailSignUp === "" || this.name === "") {
        this.fail("Preencha os campos de e-mail e nome!");
        return;
      }
      await api
        .post("user", { name: this.name, email: this.emailSignUp })
        .then(response => {
          this.success("Cadastro efetuado com sucesso!", response.data.id);
        })
        .catch(error => {
          notify("negative", error.response.data.message);
        });
    },
    success(message, id) {
      this.$router.push({ path: "chat" });
      notify("positive", message);

      const receiver = crypto
        .createHash("md5")
        .update(`${id}`)
        .digest("hex");

      localStorage.setItem("receiver", receiver);
      localStorage.setItem("myId", id);
    },
    fail(message) {
      notify("negative", message);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    color: #444444;
  }

  width: 48%;

  .q-btn,
  .q-input {
    width: 300px;
  }
}
.image {
  background-image: url("../assets/background.png");
  background-position: center;
  height: 100vh;
  width: 48%;
}
</style>
