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
            "1、什么是新民主主义革命的总路线？如何理解新民主主义革命的领导权问题？p24，p27",
          content: `\n总路线：1948年，他在《在晋绥干部会议上的讲话》中完整的表述了，总路线的内容，即无产阶级领导的，人民大众的，反对帝国主义、封建主义和官僚资本主义的革命。
  \n ×领导权问题：
\n①无产阶级的领导权是中国革命的中心问题，也是新民主主义革命理论的核心问题。区别新旧两种不同范畴的民主主义革命的根本标志是，革命的领导权掌握在无产阶级手中还是掌握在资产阶级手中。
\n②无产阶级及其政党―中国共产党的领导，是中国革命取得胜利的根本保证。
的
\n③无产阶级及其政党对中国革命的领导权不是自然而然得来的，而是在与资产阶级争夺领导权的斗争中实现的。

`
        },
        {
          title: "2、新民主主义基本纲领的主要内容是什么？p31",
          content: `\n①新民主主义的政治纲领是：推翻帝国主义和封建主义的统治，建立一个无产阶级领导的、以工农联盟为基础的、各革命阶级联合专政的新民主主义的共和国。
\n②新民主主义的经济纲领是：没收封建地主阶级的土地归农民所有，没收官僚资产阶级的垄断资本归新民主主义的国家所有，保护民族工商业。
\n③新民主主义文化，就是无产阶级领导的人民大众的反帝反封建的文化，即民族的科学的大众的文化。

`
        },
        {
          title:
            "3、如何认识中国革命走农村包围城市，武装夺取政权道路的必要性及重大意义？p34/36",
          content: `\n①中国革命必须走农村包围城市、武装夺取政权的道路，是由中国所处的时代特点和具体国情决定的。一方面，在半殖民地半封建的中国社会，内无民主制度而受封建主义的压迫，外无民族独立而受帝国主义的压迫。
\n②另一方面，近代中国是一个农业大国，农民占全国人口的绝大多数，是无产阶级可靠的同盟军和革命的主力军。
\n意义:③中国革命道路的理论，反映了中国半殖民地半封建社会民主革命发展的客观规律。中国革命道路理论是党运用马克思主义的立场、观点和方法，分析、研究和解决中国革命具体问题的光辉典范，对于推进马克思主义中国化具有重要的方法论意义。

`
        },
        {
          title: "如何理解新民主主义革命的三大法宝及其相互关系？p36，p41",
          content: `\n①把统一战线、武装斗争、党的建设比作党在中国革命中战胜敌人的三个主要的法宝。
\n②毛泽东指出，统一战线和武装斗争是中国革命的两个基本特点，是战胜敌人的两个基本武器。统一战线是实行武装斗争的统一战线，武装斗争是统一战线的中心支柱，党的组织则是掌握统一战线和武装斗争这两个武器以实行对敌冲锋陷阵的英勇战士。
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