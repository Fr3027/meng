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
          title:
            "1.党在中国社会主义建设道路的初步探索中，取得了哪些重要的理论成果？p65",
          content: `\n①调动一切积极因素为社会主义事业服务。论十大关系
\n②正确认识和处理社会主义社会矛盾的思想。正确处理人民民主矛盾
\n③走中国工业化道路的思想。

`
        },
        {
          title: "2.如何认识党对社会主义建设道路初步探索的重大意义？p76",
          content: `\n①第一，巩固和发展了我国的社会主义制度。
\n②第二，为开创中国特色社会主义提供了宝贵经验，理论准备，物质基础。
\n③第三，丰富了科学社会主义的理论和实践。

`
        },
        {
          title: "∮3.党对社会主义建设道路的初步探索有哪些经验教训？p78",
          content: `\n①第一，必须把马克思主义与中国实际相结合，探索符合中国特点的社会主义建设道路。
\n②第二，必须正确认识社会主义社会的主要矛盾和根本任务，集中力量发展生产力。
\n③第三，必须从实际出发进行社会主义建设，建设规模和速度要和国力相适应，不能急于求成。
\n④第四，必须发展社会主义民主，健全社会主义法制。
\n⑤第五，必须坚持党的民主集中制和集体领导制度，加强执政党建设。
\n⑥第六，必须坚持对外开放，借鉴和吸收人类文明成果建设社会主义，不能关起门来搞建设。

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