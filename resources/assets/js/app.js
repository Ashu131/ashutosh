
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Jquery and jquery-ui installed via npm
 * Include them here
 */
import 'jquery-ui/ui/widgets/autocomplete';
import 'jquery-ui/themes/base/all.css';


import 'jquery-validation/dist/jquery.validate.min';
import 'jquery-validation/dist/additional-methods';
import 'jquery-validation/dist/jquery-validate-tooltip.min';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});
