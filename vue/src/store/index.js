import Vue from 'vue'
import Vuex from 'vuex'

import getters from '@/store/getters'
import state from '@/store/state'
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {},
    getters
})
