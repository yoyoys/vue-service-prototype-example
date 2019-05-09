<template lang="pug">
  .about
    h1 This is an about page
    h3 about from service: {{ service.about || 'not init' }}
    AboutChild
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Provide,
} from 'vue-property-decorator';
import Vuex from 'vuex';
import { About2Service } from '@/services/about2/About2Service';
import AboutChild from './AboutChild.vue';

@Component({
  components: { AboutChild },
})
export default class About extends Vue {
  @Provide()
  protected service = new About2Service();

  // it's not need because About2Service is already instance data
  // protected service = Vue.observable(new About2Service());
}
</script>
<style lang="scss" scoped>
.about {
  background-color: lightblue;
}
</style>
