import history from '../../history'

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
            
            if (response.status !== 200 ){
                dispatch({ type: 'LOGIN_ERROR' })
            } else {
                return response.json().then(function(json) {
                    // process your JSON further
     
                    for (var key in json) {
                        localStorage.setItem(`auth.${key}`, json[key])
                    }
                    dispatch({ type: 'LOGIN_SUCCESS', json})
                    
                    history.push(`/profile?from=login`)
                });
            }
            
            
        }) // parses response to JSON
        .catch(error => {
            console.error('Error:', error)
            dispatch({ type: 'LOGIN_ERROR', error})
        })
    }
}