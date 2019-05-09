
<script lang="tsx">
/* eslint-disable class-methods-use-this */
import {
  Component,
  Vue,
  Inject,
} from 'vue-property-decorator';
import { StateType } from '@/services/about/AboutService';
import { Store } from 'vuex';

@Component
export default class AboutChild extends Vue {
  @Inject('service')
  readonly service!: Store<StateType>;

  protected fetch() {
    this.service.dispatch('init');
  }

  protected render() {
    return (
      <div class="about-child">
        <h4>Hello</h4>
        <h5>About is: { this.service.state.about || 'not inited'}</h5>
        <button onClick={this.fetch}>fetch</button>
      </div>
    );
  }
}

</script>
<style lang="scss" scoped>
.about-child {
  background-color: lightyellow;
}
</style>
