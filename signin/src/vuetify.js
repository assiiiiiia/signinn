import { createVuetify } from 'vuetify';
import  'vuetify/styles';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


const vuetify = createVuetify({
  components,  // Register all Vuetify components globally
  directives,  // Register Vuetify directives
});
export default vuetify;
