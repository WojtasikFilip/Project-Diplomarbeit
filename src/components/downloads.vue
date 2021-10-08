<template>
  <div id="downloads">
    <v-container>
      <h1 class="font-weight-medium">Downloads</h1>
      <v-divider class="mb-10"></v-divider>
      <v-container class="d-flex flex-wrap">
        <v-row>
          <v-col cols="12" md="6">
            <v-btn
              color="red darken-2"
              class="ma-2 white--text"
              x-large
              style="width:100%"
              href="Handbuch.pdf"
              download
            >
              Diplomarbeits Projekthandbuch
              <v-icon right dark>
                mdi-cloud-download
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn
              color="red darken-2"
              class="ma-2 white--text"
              x-large
              style="width:100%"
              href="Antrag.pdf"
              download
            >
              Diplomarbeits Antrag
              <v-icon right dark>
                mdi-cloud-download
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
