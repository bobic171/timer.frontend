import { Client } from '@/models/Client';
import { Landman } from '@/models/Landman';
import { User } from '@/models/User';
import { createStore } from 'vuex';
import Actions from './actions';
import Mutations from './mutations';
import StateContainer from './StateContainer';
import StubData from './StubData';

const store = createStore({
  state: new StateContainer(),
  mutations: {
    [Mutations.SET_ACTIVE_CLIENT](state, c: Client) {
      state.activeClient = c;
    },
    [Mutations.LOGIN](state, u: User) {
      state.user.LoggedIn = true;
    },
    [Mutations.ADD_CLIENT](state, c: Client) {
      state.clients.push(c);
    },
    [Mutations.ADD_LANDMAN](state, l: Landman) {
      state.landPeople.push(l);
    },
  },
  actions: {
    [Actions.SET_ACTIVE_CLIENT]({ commit, state }, id: number) {
      const client = state.clients.find((c) => c.Id === id);
      if (client) {
        client.Data = StubData.CreateClientData();
        commit(Mutations.SET_ACTIVE_CLIENT, client);
      }
    },
    [Actions.LOGIN]({ commit }, details: { username: string, password: string }) {
      commit(Mutations.LOGIN, {});
    },
    [Actions.ADD_CLIENT]({ commit, state }, details: { name: string }) {
      const c = {
        Id: state.clients[state.clients.length - 1].Id + 1,
        Name: details.name,
      };
      commit(Mutations.ADD_CLIENT, c);
      return c;
    },
    [Actions.ADD_LANDMAN]({ commit }, l: Landman) {
      commit(Mutations.ADD_LANDMAN, l);
    },
  },
  modules: {
  },
});

StubData.AddProjects(store);
StubData.AddClients(store);
StubData.AddWorkType(store);
StubData.AddProspects(store);
StubData.AddLandPeople(store);

export default store;
