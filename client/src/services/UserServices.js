import api from "./api";

export const uploadImage = (userImage) => {
    return api.put('api/user/profile/image', userImage,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}

export const addAddress = (addressDetail) => {
    return api.post('api/user/profile/address', addressDetail);
}

export const removeAddress = (addressId) => {
    return api.delete(`api/user/profile/address/${addressId}`)
}

export const getUser = ()=>{
    return api.get('api/user/profile');
}