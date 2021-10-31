<template>
  <div class="d-flex mb-10">
    <v-app-bar color="white" fixed height="70">
      <v-img src="https://upload.wikimedia.org/wikipedia/de/thumb/1/1c/HTL_Wien_West_Logo.png/1200px-HTL_Wien_West_Logo.png" max-width="90" max-height="80"></v-img>

      <v-toolbar-title class="ml-10"
        ><h2 class="display-1 font-weight-light hidden-sm-and-down">Karrieretag</h2></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <v-btn icon href="#project" class="mr-10">Projekt</v-btn>
        <v-btn icon href="#team" class="mr-13">Team</v-btn>
        <v-btn icon href="#downloads" class="mr-14">Downloads</v-btn>
        <v-btn icon href="#contact" class="mr-14">Kontakt</v-btn>
      </div>

      <v-btn icon href="https://www.htlwienwest.at/ueberuns/impressum.html" target="_blank" link class="mr-10"
        >Impressum</v-btn
      >
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click="drawer = !drawer"
        class=" hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" hide-overlay disable-resize-watcher statless app right>
      <v-icon text @click="drawer = false" class="ma-4">mdi-close</v-icon>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-grey--text text--accent-4">
          <v-list-item href="#project">
            <v-list-item-icon>
              <v-icon>mdi-text-box</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Project</v-list-item-title>
          </v-list-item>

          <v-list-item href="#team">
            <v-list-item-icon>
              <v-icon>mdi-account-supervisor</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Team</v-list-item-title>
          </v-list-item>

          <v-list-item href="#downloads">
            <v-list-item-icon>
              <v-icon>mdi-download-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Downloads</v-list-item-title>
          </v-list-item>

          <v-list-item href="#contact">
            <v-list-item-icon>
              <v-icon>mdi-at</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
