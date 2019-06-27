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
          title: "×1、为什么说新民主主义社会是一个过渡性社会？p44",
          content: `\n从中华人民共和国成立到社会主义改造基本完成，是我国从新民主主义到社会主义的过渡时期
新民主主义社会不是一个独立的社会形态，而是由新民主主义向社会主义转变的过渡     社会形态。
\n①在新民主主义社会中，存在着五种经济成分，即社会主义性质国营经济，半社会主义性质的合作社经济，农民和手工业者的个人经济，私人资本主义经济和国家资本主义经济。
\n②在新民主主义社会中，社会主义的因素不论在经济上还是在政治上都已经居于领导地位，但非社会主义因素仍有很大比重。
\n③新民主主义社会是属于社会主义体系的，是逐步过渡到社会主义社会的过渡性质的社会。

`
        },
        {
          title: "2、怎样理解党在过渡时期的总路线？p47",
          content: `\n从中华人民共和国成立，到社会主义改造基本完成，这是一个过渡时期。党在这个过渡时期的总路线和总任务，是要在相当长的时期内逐步实现国家的社会主义工业化，并逐步实现国家对农业，对手工业和资本主义工商业的社会主义改造。
`
        },
        {
          title: "3、如何认识我国社会主义改造的基本经验？p56",
          content: `\n第一，坚持社会主义工业化建设与社会主义改造同时并举。
\n第二，采取积极引导，逐步过渡的方式。
\n第三，用和平方法进行改造。

`
        },
        {
          title: "×4、如何理解中国确定社会主义基本制度的重大意义？p61",
          content: `\n社会主义基本制度的确立是中国历史上最深刻，最伟大的社会变革。为当代中国发展进步奠定了制度基础，也为中国特色社会主义制度的创新和发展提供了重要前提。
《或者》中华人民共和国的成立和社会主义制度基本制度的确立，是20世纪中国一次划时代的历史巨变，也是世界社会主义发展史上又一个历史性的伟大胜利，为当代中国一切发展进步奠定了根本的政治前提和制度基础，实现了中华民族由近代不断衰落到根本扭转命运，持续走向繁荣富强的伟大飞跃。
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