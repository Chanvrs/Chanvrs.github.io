import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1,
    },
    getters: {
        getStateCount: function(state){
            return state.count+1;
        }
    },
    mutations: {
        add(state) {
            state.count++;
        },
        reduce(state) {
            state.count--;
        }
    },
    actions: {
        
    }
})

export default store;