import { ThemTypes } from "./enums";

const { Light, Dark } = ThemTypes;

const themConfig = {
    them: 'light',
    token: {
        colorPrimary: '#00b96b',
        borderRadius: 2,
        colorBgContainer: '#f6ffed',
    },
}

export const themMap = {
    [Light]:{
        token:{
            colorPrimary: '#00b96b',
            borderRadius: 2,
            colorBgContainer: '#f6ffed',
        }
    },

    [Dark]: {
        token:{

        }
    }
}
