<template>
  <v-app>
    <AppBar />
    <v-main>
      <Infos />
      <Team />
      <downloads />
      <Kontakt />
    </v-main>
    <bottomBar />
  </v-app>
</template>

<script>
import AppBar from '@/components/dOD.vue';
import Infos from '@/components/Infos.vue';
import Team from '@/components/Team.vue';
import Kontakt from '@/components/Kontakt.vue';
import bottomBar from '@/components/bottomBar.vue';
import downloads from '@/components/downloads.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    Infos,
    Team,
    Kontakt,
    bottomBar,
    downloads,
  },

  data: () => ({
    //
  }),
};
</script>
