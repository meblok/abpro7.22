<template>
  <div id="login">
    <!-- <h3 class="text-center text-white pt-5">Login form</h3> -->
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" action="" method="post">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="current-email" class="text-info">Usuario:</label
                ><br />
                <input
                  type="text"
                  name="current-email"
                  autocomplete="current-email"
                  id="current-email"
                  class="form-control"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="current-password" class="text-info">Password:</label
                ><br />
                <input
                  type="password"
                  name="current-password"
                  autocomplete="current-password"
                  id="current-password"
                  class="form-control"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <br />
                <input
                  type="submit"
                  name="submit"
                  class="btn btn-info btn-md"
                  value="Aceptar"
                  @click.prevent="validar()"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      claves: [],
      email: "",
      password: "",
    };
  },

  methods: {
    validar() {
      if (
        this.claves[0].pass === this.password &&
        this.claves[0].user === this.email
      ) {
        this.$router.push("/home");
      } else {
        alert("Tu contraseña/ email están incorrectos");
      }
    },
  },

  async created() {
    try {
      const response = await fetch("/claves.json");
      const datosclave = await response.json();
      this.claves = datosclave.keys;
    } catch (error) {
      console.log(error.message);
    }
  },
};
</script>

<style scoped>
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
</style>
