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
          title: "1、如何理解科学发展观形成发展的社会历史条件？p145",
          content: `\n① 科学发展观是在深刻把握我国基本国情和新的阶段性特征的基础上形成和发展的
\n② 科学发展观是在深入总结改革开放以来，特别是党的十六大以来实践经验的基础上形成和发展的
\n③ 科学发展观是在深刻分析国际形势，顺应世界发展趋势，借鉴国外发展经验的基础上形成和发展的

`
        },
        {
          title: "2、 如何把握科学发展观的科学内涵和精神实质？p168",
          content: `\n科学内涵：
\n① 推动经济社会发展，是科学发展观的第一要义
\n② 以人为本是科学发展观的核心立场
\n③ 全面协调可持续，是科学发展观的基本要求
\n④ 统筹兼顾是科学发展观的根本方法
\n精神实质：解放思想，实事求是，与时俱进，求真务实，是科学发展观最鲜明的精神实质

`
        },
        {
          title: "3、如何理解科学发展观的历史地位和指导意义？p170",
          content: `\n历史地位：
\n① 中国特色社会主义理论体系的接续发展
\n② 发展中国特色社会主义必须长期坚持的指导思想
\n指导意义：科学发展观是马克思主义关于发展的世界观和方法论的集中体现，是中国特色社会主义理论体系的重要组成部分，是发展中国特色社会主义，必须长期坚持的指导思想

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