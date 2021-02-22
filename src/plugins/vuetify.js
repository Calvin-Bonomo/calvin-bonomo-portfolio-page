import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetifyOpts = {
  rtl: false,
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#212121',
        accent: '#E1F5FE',
        secondary: '#FED256',
        success: '#BDBDBD',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#B71C1C'
      },
      light: {
        primary: '#1976D2',
        accent: '#e91e63',
        secondary: '#30b1dc',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      }
    }
  }
} 

export default new Vuetify(
    vuetifyOpts
);
