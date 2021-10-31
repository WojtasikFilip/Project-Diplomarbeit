<template>
  <v-container class="mt-15">
    <v-row>
      <v-col v-for="(picture, p) in pictures" :key="p" class="d-flex child-flex" cols="4">
        <v-img :src="picture.src" aspect-ratio="1" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pictures: [
        {
          src: 'https://www.htlwienwest.at/img/service/karrieretag2020/KT2020-1.jpg',
        },
        {
          src: 'https://www.htlwienwest.at/img/service/karrieretag2020/KT2020-2.jpg',
        },
        {
          src: 'https://www.htlwienwest.at/img/service/karrieretag2020/KT2020-4.jpg',
        },
        {
          src: 'https://www.htlwienwest.at/img/service/karrieretag2020/KT2020-5.jpg',
        },
        {
          src: 'Bild5.jpeg',
        },
        {
          src: 'Bild6.jpeg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
