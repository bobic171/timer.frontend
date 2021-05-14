import StateContainer from '@/store/StateContainer';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<StateContainer>;
  }
}
