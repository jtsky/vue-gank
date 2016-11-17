<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <div class="image-container">
      <column-img v-for="(imgColumn,index) in imgColumns" :column=column :imgColumn="imgColumn"
                  :key="index"></column-img>

    </div>
    <p v-show="busy">数据加载中....</p>
  </div>

</template>

<script>
  import ColumnImg from 'components/ColumnImg';
  import infiniteScroll from 'muse-components/infiniteScroll';
  import json from '../assets/image.json';
  export default {
    components: {
      'ColumnImg': ColumnImg,
      'MuInfiniteScroll': infiniteScroll,
    },
    name: 'containerImg',
    props: ['column','title'],
    data () {
      return {
        data: [],
        imgColumns: [],
        busy: false
      }
    },
    mounted () {
    },
    methods: {
      loadItems() {
        let instance = this.$data;
        let page = this.data.length / 10 + 1;
        let title = this.title;
        this.$http.get(`https://gank.io/api/data/${title}/10/${page}`)
          .then((response) => {
            return response.json();
          })
          .then(data => {
            let arrayData = [];
            data.results.forEach((userInfo) => {
              userInfo.url = userInfo.url.replace('http://ww1.sinaimg.cn', 'http://ww3.sinaimg.cn');
              arrayData.push(userInfo);
            });
            instance.data = instance.data.concat(arrayData);
            let columns = [];
            //组合方法
            function dataMix(column, index, array) {
              if (columns[column]) {
                columns[column].push(array[index]);
              } else {
                let column = [];
                column.push(array[index]);
                columns.push(column);
              }
            }

            for (let index in instance.data) {
              //分组
              dataMix(index % this.column, index, instance.data);
            }
            instance.busy= false;
            instance.imgColumns = columns;
          })
          .catch(ex => {
            console.log('ex===>', ex);
          });
      },

      loadItemsfromLocal() {
        let arrayData = [];
        json.results.forEach((userInfo) => {
          userInfo.url = userInfo.url.replace('http://ww1.sinaimg.cn', 'http://ww3.sinaimg.cn');
          arrayData.push(userInfo);
        });
        this.data = this.data.concat(arrayData);
        let columns = [];
        //组合方法
        function dataMix(column, index, array) {
          if (columns[column]) {
            columns[column].push(array[index]);
          } else {
            let column = [];
            column.push(array[index]);
            columns.push(column);
          }
        }

        for (let index in this.data) {
          //分组
          dataMix(index % this.column, index, this.data);
        }

        this.imgColumns = columns;
      },

      loadMore() {
        this.busy = true;
        this.loadItems();
        //this.loadItemsfromLocal();
      }

    },
    created(){
      this.loadItems();
      //this.loadItemsfromLocal();
    }

  }
</script>

<style scoped lang="sass">
  @import "../../stylesheets/scss/Gallery.scss";

</style>
