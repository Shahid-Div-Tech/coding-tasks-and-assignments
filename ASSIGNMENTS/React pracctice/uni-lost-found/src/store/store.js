import { configureStore } from "@reduxjs/toolkit";

import darktheme from "./slices/darktheme";

export const store=configureStore({
    reducer:{
        theme:darktheme
    }
})