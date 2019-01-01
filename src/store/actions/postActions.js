export const createPost = (item) => {


    return (dispatch, getState) => {

        dispatch({ type: 'CREATE_POST', item})

    }
}