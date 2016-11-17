<template>
  <div class="column-img">
    <mu-card style="overflow: hidden; marginTop: 5px; marginRight: 1.5px; margin-left: 1.5px; padding: 2px">
      <mu-card-title :title="dataInfo.who"></mu-card-title>
      <mu-card-text>
        <strong>描述:</strong> {{dataInfo.desc}}
        <br/>
        <strong>地址:</strong> <a :href="dataInfo.url" target="_blank">{{dataInfo.url}}</a>
      </mu-card-text>
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
    name: 'cardCommon',
    props: ['dataInfo'],
    computed: {},
    methods: {},
    data () {
      return {}
    }
  }
</script>

<style scoped lang="sass">
  @import "../../stylesheets/scss/Gallery.scss";

</style>
