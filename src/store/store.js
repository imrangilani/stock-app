import Vue from 'vue';
import Vuex from 'vuex';

import porfolio from './modules/portfolio';
import stocks from './modules/stocks';

import actions from './actions';

Vue.use(Vuex);

export default new Vuex.store({
    actions,
    modules:{
        porfolio,
        stocks
    }
})