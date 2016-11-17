<template>
  <div id="app">
    <mu-appbar title="干货集中营"></mu-appbar>
    <mu-divider/>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab v-for="title in titles" :value='title' :title='title' :style="'font-size:' + tabSize +'px'"/>
    </mu-tabs>

    <div v-for="title in titles" v-if="activeTab === title">
      <template v-if="title === '福利'">
        <container-img :column="imageColumn" :title="title"></container-img>
      </template>
      <template v-else>
        <container-comm :column="commonColumn" :title="title"></container-comm>
      </template>
    </div>
    <img-modal v-if="showModal">
      <div slot="body" :class="'modal-' + browserPlatform" @click="closeModal">
        <img :src="modalUrl"/>
      </div>
    </img-modal>
  </div>
</template>

<script>
  import appbar from 'muse-components/appbar';
  import {tabs, tab} from 'muse-components/tabs';
  import divider from 'muse-components/divider';
  import paper from 'muse-components/paper';
  import {titles} from './config';
  import ContainerImg from 'components/ContainerImg';
  import ContainerComm from 'components/ContainerComm';
  import ImgModal from 'components/ImgModal';
  //判断浏览器类型
  import {getBrowserPlatform} from './util/MyUtil';

  export default {
    components: {
      'MuAppbar': appbar,
      'MuTabs': tabs,
      'MuTab': tab,
      'MuPaper': paper,
      'MuDivider': divider,
      'ContainerImg': ContainerImg,
      'ContainerComm': ContainerComm,
      'ImgModal': ImgModal
    },
    name: 'app',
    data(){
      return {
        titles: titles,
        activeTab: titles[0],
      }
    },
    computed: {
      browserPlatform(){
        return getBrowserPlatform();
      },
      tabSize(){
        if (getBrowserPlatform() === 'pc') {
          return 16;
        } else {
          return 10;
        }
      },
      imageColumn(){
        if (getBrowserPlatform() === 'pc') {
          return 5;
        } else {
          return 2;
        }
      },
      commonColumn(){
        if (getBrowserPlatform() === 'pc') {
          return 3;
        } else {
          return 1;
        }
      },
      modalUrl () {
        return this.$store.state.modal.modalUrl;
      },
      showModal(){
        return this.$store.state.modal.status;
      }
    },
    methods: {
      handleTabChange(val){
        this.activeTab = val;
      },
      closeModal(){
        this.$store.dispatch({
          type: 'showModal',
          message: {
            status: false,
            modalUrl: ''
          }
        });
      },

    },
    created(){
    },
  }
</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .modal-pc {
    height: 500px;
    margin: auto 0;
  }

  .modal-phone {
    width: 100%;
    margin: auto 0;
  }

  .modal-pc img {
    height: 100%;
  }

  .modal-phone img {
    width: 100%;
  }
</style>
