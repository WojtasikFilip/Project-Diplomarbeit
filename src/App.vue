<template>
  <v-app>
    <AppBar />
    <v-main>
      <Pictures />
      <Infos />
      <Team />
      <Downloads />
      <Kontakt />
      <Plakat />
    </v-main>
    <BottomBar />
  </v-app>
</template>

<script>
import AppBar from '@/components/topBar.vue';
import Infos from '@/components/Infos.vue';
import Team from '@/components/Team.vue';
import Kontakt from '@/components/Kontakt.vue';
import BottomBar from '@/components/bottomBar.vue';
import Downloads from '@/components/downloads.vue';
import Pictures from '@/components/pictures.vue';
import Plakat from '@/components/plakat.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    Infos,
    Team,
    Kontakt,
    BottomBar,
    Downloads,
    Pictures,
    Plakat,
  },

  data: () => ({
    //
  }),
};
</script>
