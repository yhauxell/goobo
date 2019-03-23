import React from "react";

let MainPageContext = React.createContext({
    books:[],
    size:0,
    total:0,
    filters: [],
    sortBy: 'YEAR',
    term:'',
    current: null,
    actions: {
        getBooks: ()=>{},
        changeCurrent: ()=>{},
        setLoading: ()=>{}
    }
});

export default MainPageContext;