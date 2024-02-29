// Styles
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                colors: {
                    primary: '#3f3ff5',
                    bgBlock: '#363649',
                    lightDark: "#434344",
                    gray: '#636367',
                }
            },
        },
    },
});