import { ADDING_RESTAURANT, 
         ADD_RESTAURANT_SUCCESS, 
         ADD_RESTAURANT_FAILED,
         GETTING_RESTAURANTS,
         GET_RESTAURANTS_SUCCESS,
         GET_RESTAURANTS_FAILURE
        } from './types';

import NavigationService from '../../NavigationService';
import Api from '../api';
// import App from '../App';

const addingRestaurant = () => {
    return {
        type: ADDING_RESTAURANT,
    }
}

const addingRestaurantSuccess = () => {
    return {
        type: ADD_RESTAURANT_SUCCESS,
        
    }
}

const addingRestaurantFailure = (error) => {
    return {
        type: ADD_RESTAURANT_FAILED,
        error
    }
    
}

export const addRestaurant = restaurantData => {

    return (dispatch) => {
        dispatch(addingRestaurant());
        Api.post.restaurants(restaurantData).then(() => {
            console.log('before dispatch');
            dispatch(addingRestaurantSuccess());
            console.log('after dispatch');
            NavigationService.navigate('Home');
        }).catch(error => {
            dispatch(addingRestaurantFailure(error));
        })
    }
    //alternative way by using async
    // return async (dispatch) => {
    //     dispatch(addingRestaurant());
    
    //     try {
    //         await Api.post.restaurants(restaurantData)
    //     } catch(error) {
    //         dispatch(addingRestaurantFailure(error));
    //     }
    //     dispatch(addingRestaurantSuccess());
    //     NavigationService.navigate('Home');
    // }
    
}

const gettingRestaurants = () => {
    return {
        type: GETTING_RESTAURANTS,
    }
}

const getRestrauntsSucces = data => {
    return {
        type: GET_RESTAURANTS_SUCCESS,
        data
    }
}

const getRestaurantsFailure = error => {
    return {
        type: GET_RESTAURANTS_FAILURE,
        error
    }
}

                
export const getRestaurants = () => {
    return (dispatch) => {
        dispatch(gettingRestaurants());
        Api.get.restaurants()
            .then(resJson => {
                console.log('get response', resJson);
                dispatch(getRestrauntsSucces(resJson));
            }).catch(error => {
                console.log('response error', error)
                dispatch(getRestaurantsFailure(error));
            })
    }
    //alternative ny using async
    // return async (dispatch) => {
    //     dispatch(gettingRestaurants());
    //     let apiCall;

    //     try {
    //         apiCall = await Api.get.restaurants()
    //     } catch(error) {
    //         dispatch(getRestaurantsFailure(error));
    //     }
        
    //     dispatch(getRestrauntsSucces(apiCall));
           
    // }
}