import chatslice from "./chatslice";
import searchSlice from "./searchSlice";
import sidebarSlice from "./sidebarSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer : {
        sidebar : sidebarSlice,
        search : searchSlice,
        chat : chatslice,
    }
})


export default store