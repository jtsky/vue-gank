<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <div class="image-container">
      <column-common v-for="(commonColumn,index) in commonColumns" :column=column :commonColumn="commonColumn"
                  :key="index"></column-common>

    </div>
    <p v-show="busy">数据加载中....</p>
  </div>

</template>

<script>
  import ColumnCommon from 'components/ColumnCommon';
  import infiniteScroll from 'muse-components/infiniteScroll';
  import json from '../assets/common.json';
  export default {
    components: {
      'ColumnCommon': ColumnCommon,
      'MuInfiniteScroll': infiniteScroll,
    },
    name: 'containerCommon',
    props: ['column','title'],
    data () {
      return {
        data: [],
        commonColumns: [],
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
            instance.data = instance.data.concat(data.results);
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
            instance.commonColumns = columns;
          })
          .catch(ex => {
            console.log('ex===>', ex);
          });
      },

      loadItemsfromLocal() {
          console.log('json===>',json);
        this.data = this.data.concat(json.results);
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

        this.commonColumns = columns;
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
