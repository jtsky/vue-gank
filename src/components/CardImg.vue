<template>
  <div class="column-img" @click="showModal(dataInfo.url)">
    <mu-card style="overflow: hidden; marginTop: 5px; marginRight: 1.5px; margin-left: 1.5px; padding: 2px">
      <mu-card-media :title="dataInfo.who" :subTitle="dataInfo.desc" v-if="browserPlatform === 'pc'">
        <img :src="dataInfo.url"/>
      </mu-card-media>
      <img :src="dataInfo.url" v-if="browserPlatform === 'phone'" style="width: 100%"/>

    </mu-card>
  </div>
</template>

<script>
  import {card, cardTitle, cardText, cardMedia} from 'muse-components/card';

  //判断浏览器类型
  import {getBrowserPlatform} from '../util/MyUtil';
  export default {
    components: {
      'MuCard': card,
      'MuCardTitle': cardTitle,
      'MuCardText': cardText,
      'MuCardMedia': cardMedia,
    },
    name: 'cardImg',
    props: ['dataInfo'],
    computed: {
      browserPlatform(){
        return getBrowserPlatform();
      }
    },
    methods: {
      showModal(url){
        this.$store.dispatch({
          type: 'showModal',
          message: {
            status: true,
            modalUrl: url
          }
        });
      }
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="sass">
  @import "../../stylesheets/scss/Gallery.scss";

</style>
