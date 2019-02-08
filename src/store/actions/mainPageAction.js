export const addMainPageImg = (mainPage) => {
    return (dispatch, getState) =>{
        // make DB call
        dispatch({
            type: "ADD_MAIN_PAGE_IMG",
            mainPage
        })
    }
}

//more on #14