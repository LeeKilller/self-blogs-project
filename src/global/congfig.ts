import { ThemeTypes } from "./enums";

const { Light, Dark } = ThemeTypes;

const themPublic = {
    token: {
        borderRadius: 5,
    },
}

export const themMap = {
    [Light]:{
        token:{
            colorPrimary: '#0052d9',
            colorBgContainer: '#ffffff',
            ...themPublic.token
        }
    },

    [Dark]: {
        token:{
            colorPrimary: '#b5f5ec',
            colorBgContainer: '#141414',
            ...themPublic.token
        }
    }
}
