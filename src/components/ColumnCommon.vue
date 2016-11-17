<template>
  <div :class="'column-'+ column">
    <card-common v-for="commonInfo in commonColumn" :key="commonInfo._id" :dataInfo="commonInfo"></card-common>
  </div>
</template>

<script>
  import CardCommon from 'components/CardCommon';
  export default {
    components: {
      'CardCommon': CardCommon,
    },
    name: 'columnImg',
    props: ['column', 'commonColumn'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="sass">


</style>
