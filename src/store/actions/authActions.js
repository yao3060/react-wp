export const userLogin = (credentials) => {


    return (dispatch, getState) => {
        
        // make async call to database

        var formData = new FormData();
        formData.append('username', credentials.email);
        formData.append('password', credentials.password);
        fetch( 'https://src.yaoin.net/wp-json/jwt-auth/v1/token', {
            body: formData,
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        })
        .then(response => {
            console.log(response.status !== 200)
            
            if (response.status !== 200 ){
                dispatch({ type: 'LOGIN_ERROR' })
            } else {
                return response.json().then(function(json) {
                    // process your JSON further
                    dispatch({ type: 'LOGIN_SUCCESS', json})
                });
            }
            
            
        }) // parses response to JSON
        .catch(error => {
            console.error('Error:', error)
            dispatch({ type: 'LOGIN_ERROR', error})
        })

        

        

    }
}