import React from "react";

let MainPageContext = React.createContext({
    books:[],
    total:0,
    filters: [],
    term:'',
    current: null,
    actions: {
        getBooks: ()=>{},
        changeCurrent: ()=>{},
        setLoading: ()=>{}
    }
});

export default MainPageContext;