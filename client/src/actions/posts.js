import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api';

const userApi = 'http://localhost:5000/users/';

//Action creators
export const getPosts = () => async (dispatch) => {
try {
    const { data } = await api.fetchPosts();
    
    dispatch({type: FETCH_ALL, payload: data});
} catch (error) {
    console.log(error.message);
}

};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (postId, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(postId, post);

      dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (postId) => async (dispatch) => {
    try {
        await api.deletePost(postId);
        dispatch({ type: DELETE, payload: postId })
    } 
    catch (error) {
        console.log(error);
    }
};

export const likePost = (postId) => async (dispatch) => {
try {
    const { data } = await api.likePost(postId);

    dispatch({ type: UPDATE, payload: data })
} 
catch (error) {
   console.log(error); 
}
};

//=============================================================

export async function addUser(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
     console.log(userApi);

    fetch(`${userApi}saveUser`, requestOptions)
        .then(response => response.json())
        
}

export async function getSpecifiedUser(dataFromUser){
    const userEmailAndPassword = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataFromUser)
        
    };
    
try{
    console.log(userEmailAndPassword , 'service send data to server');
    return await fetch(`${userApi}userAuth`,userEmailAndPassword)
    .then(response =>  response.json())
    
}
catch(err){
    console.log(err);
}

}