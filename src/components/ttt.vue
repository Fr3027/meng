<template>
  <div id="app">
    <v-app id="inspire">
      <v-card id="create">
        <v-container fluid grid-list-md>
          <v-layout child-flex wrap>
            <v-flex xs12 sm6 md4>
              <v-subheader>Options</v-subheader>
              <v-checkbox v-model="hover" label="Open on hover" hide-details></v-checkbox>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-subheader>FAB location</v-subheader>
              <v-checkbox v-model="top" label="Top" hide-details></v-checkbox>
              <v-checkbox v-model="right" label="Right" hide-details></v-checkbox>
              <v-checkbox v-model="bottom" label="Bottom" hide-details></v-checkbox>
              <v-checkbox v-model="left" label="Left" hide-details></v-checkbox>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-subheader>Speed dial direction</v-subheader>
              <v-radio-group v-model="direction" hide-details>
                <v-radio value="top" label="Top"></v-radio>
                <v-radio value="right" label="Right"></v-radio>
                <v-radio value="bottom" label="Bottom"></v-radio>
                <v-radio value="left" label="Left"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-subheader>Transition</v-subheader>
              <v-radio-group v-model="transition" hide-details>
                <v-radio value="slide-y-transition" label="Slide y"></v-radio>
                <v-radio value="slide-y-reverse-transition" label="Slide y reverse"></v-radio>
                <v-radio value="slide-x-transition" label="Slide x"></v-radio>
                <v-radio value="slide-x-reverse-transition" label="Slide x reverse"></v-radio>
                <v-radio value="scale-transition" label="Scale"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <v-speed-dial
          right
          bottom
          direction="top"
          open-on-hover="true"
          transition="slide-y-reverse-transition"
        >
          <template v-slot:activator>
            <v-btn v-model="fab" color="blue darken-2" dark fab>
              <v-icon>account_circle</v-icon>
              <v-icon>close</v-icon>
            </v-btn>
          </template>
          <v-btn fab dark small color="green">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn fab dark small color="indigo">
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn fab dark small color="red">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-speed-dial>
      </v-card>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  }
});
</script>

<style scoped>
</style>