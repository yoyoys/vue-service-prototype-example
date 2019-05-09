<template lang="pug">
  .about
    h1 This is an about page
    h3 about from service: {{ service.state.about || 'not init' }}
    h4 power: {{ power }}
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
import { AboutServiceOptions } from '@/services/about/AboutService';
import AboutChild from './AboutChild.vue';

@Component({
  components: { AboutChild },
})
export default class About extends Vue {
  @Provide()
  protected service = new Vuex.Store(AboutServiceOptions);

  protected power = 'no power';

  protected created() {
    this.service.subscribeAction((action, state) => {
      if (action.type === 'init') {
        this.power = 'I got power';
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.about {
  background-color: lightblue;
}
</style>
