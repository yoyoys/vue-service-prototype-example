/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import { getAbout } from '@/data-access/about';
import Vuex, { StoreOptions } from 'vuex';

const makeState = () => ({
  about: '',
  error: null as null | string,
});

export type StateType = ReturnType<typeof makeState>;

export const AboutServiceOptions: StoreOptions<StateType> = {
  state: makeState,
  getters: {
    isEmpty: state => !state.about.length,
  },
  mutations: {
    updateAbout(state, payload: string) {
      state.about = payload;
    },
    handleEmpty(state) {
      state.about = '';
    },
    handleError(state, payload: string) {
      state.error = payload;
    },
  },
  actions: {
    async init({ dispatch }) {
      dispatch('queryAboutData');
    },
    async queryAboutData({ dispatch, commit }) {
      try {
        const result = await getAbout();
        commit('updateAbout', result);
      } catch (error) {
        commit('handleError', 'some error');
      }
    },
  },
};
