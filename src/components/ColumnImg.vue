<template>
  <div :class="'column-'+ column">
    <card-img v-for="imgInfo in imgColumn" :key="imgInfo._id" :dataInfo="imgInfo"></card-img>
  </div>
</template>

<script>
  import CardImg from 'components/CardImg';
  export default {
    components: {
      'CardImg': CardImg,
    },
    name: 'columnImg',
    props: ['column', 'imgColumn'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="sass">


</style>
