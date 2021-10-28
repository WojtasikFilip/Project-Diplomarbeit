<template>
  <div id="contact">
    <v-container>
      <h1 class="mt-10 font-weight-medium text-center">Kontakt</h1>
      <v-divider class="mb-5"></v-divider>

      <form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name"
              label="Name"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              label="E-mail"
              style="border-radius:12px;"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-textarea name="input-5-1" label="Message"></v-textarea>
        <v-btn class="mr-4 red darken-2 white--text" @click="submit">
          Send message
        </v-btn>
      </form>
      <div class="mt-10">
        <span
          ><b>Zu unserer Projekt Website: </b>
          <a href="http://htlwienwest.at">karrieretag.htlwienwest.at</a></span
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
