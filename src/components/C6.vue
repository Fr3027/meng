<template>
  <div class="HelloWorld">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <v-card class="ma-3" v-for="item in maogai" :key="item.title">
            <v-card-text>
              <div class="subheading">{{item.title}}</div>
              <div class="grey--text text-wrapper">{{item.content}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey" class="lighten-2">
                <v-icon small left>message</v-icon>
                <span>hi</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-btn fab bottom right color="pink" fixed @click="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">Create contact</v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs10 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt>
                </v-avatar>
                <v-text-field placeholder="Name"></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field prepend-icon="business" placeholder="Company"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field placeholder="Job title"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field prepend-icon="mail" placeholder="Email"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field prepend-icon="notes" placeholder="Notes"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  created() {},
  data() {
    return {
      dialog: false,
      maogai: [
        {
          title: "1.如何把握“三个代表”重要思想形成的社会历史条件？p119",
          content: `\n①“三个代表”重要思想是在对冷战结束后国际局势科学判断的基础上形成的。
\n②“三个代表”重要思想是在科学判断党的历史方位和总结历史经验的基础上提出来的。
\n③“三个代表”重要思想是在建设中国特色社会主义伟大实践的基础上形成的。

`
        },
        {
          title: "2.怎样准确把握“三个代表”重要思想的核心观点？p126",
          content: `\n中国共产党必须\n①始终代表中国先进生产力的发展要求，\n②代表中国先进文化的前进方向，\n③始代表中国最广大人民的根本利益。
`
        },
        {
          title: "3.如何认识建设社会主义市场经济体制的重要性？p132",
          content: `\n在社会主义条件下发展市场经济，实现了改革开放新的历史性突破，打开了我国经济、政治和文化发展的崭新局面，是前无古人的伟大创举，是中国共产党人对马克思主义发展作出的历史性贡献，具有特殊重要的意义。
`
        },
        {
          title: "4.如何理解“三个代表”重要思想的历史地位？p140",
          content: `\n①中国特色社会主义理论体系的接续发展。
\n②加强和改进党的建设，推进中国特色社会主义事业的强大理论武器。
`
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.text-wrapper {
  white-space: pre-wrap;
}
</style>