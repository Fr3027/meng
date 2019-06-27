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
          title: "1.毛泽东思想形成和发展的社会历史条件是什么？p3",
          content: `\n①19世纪末20世纪初，世界进入帝国主义和无产阶级革命时代，毛泽东思想正是在这样的时代条件下形成和发展起来的
\n②中国共产党领导人民进行革命和建设的成功实践是毛泽东思想形成和发展的实践基础
\n③思想条件:十月革命给中国送来了马克思列宁主义，中国革命从此有了科学的指导思想
`
        },
        {
          title: "2.如何把握毛泽东思想的主要内容和活的灵魂？p8",
          content: `\n①新民主主义革命理论、社会主义革命和社会主义建设理论、革命军队建设和军事战略的理论、政策和策略的理论、思想政治工作和文化工作的理论、党的建设理论、这些是毛泽东思想科学体系的主要内容
\n②实事求是、群众路线、独立自主是毛泽东思想的活的灵魂(论述)
\n③贯穿于毛泽东思想各个组成部分的立场、观点和方法，是毛泽东思想的活的灵魂，它们有三个基本方面，即实事求是，群众路线，独立自主
`
        },
        {
          title: "3.如何科学认识毛泽东思想的历史地位？p14",
          content: `\n①马克思主义中国化的第一个重大理论成果
\n②中国革命和建设的科学指南
\n③中国共产党和中国人民宝贵的精神财富
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