import Vue from 'vue'

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import {
    Input
} from 'element-ui';

export default () => {
    Vue.use(Input);
}