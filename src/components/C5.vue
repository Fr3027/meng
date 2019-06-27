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
          title: "1、如何认识邓小平理论形成的社会历史条件？p87",
          content: `\n① 和平与发展成为时代主题是邓小平理论形成的时代背景
\n② 社会主义建设的经验教训是邓小平理论形成的历史依据
\n③ 改革开放和现代化建设的实践是邓小平理论形成的现实依据

`
        },
        {
          title: "∮2、如何把握邓小平理论的主要内容？",
          content: `\n① 解放思想、实事求是的思想路线
\n② 社会主义初级阶段理论
\n③ 党的基本路线
\n④ 社会主义根本任务的理论
\n⑤ “三步走”战略
\n⑥ 改革开放理论
\n⑦ 社会主义市场经济理论
\n⑧ “两手抓，两手都要硬”
\n⑨ “一国两制”
\n⑩ 中国问题的关键在于党

`
        },
        {
          title: "3、如何认识邓小平理论的历史地位？p114",
          content: `\n① 马克思列宁主义，毛泽东思想的继承和发展
\n② 中国特色社会主义理论体系的开篇之作
\n③ 改革开放和社会主义现代化建设的科学指南

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