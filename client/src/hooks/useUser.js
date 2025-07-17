import { useState, useEffect } from "react";
import { uploadImage, getUser, addAddress, removeAddress } from "../services/UserServices";


export const useUser = () => {

    const [user, setUser] = useState('');
    const [refresh, setRefresh] = useState(0);

    const uploadProfilImage = async (userImage) => {
        try {
            let response = await uploadImage(userImage);
            alert(response.data.message);
            setRefresh(refresh + 1);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            let response = await getUser();
            if (response.data.success) {
                setUser(response.data.user);
            }
        }
        fetchUser();
    }, [refresh])

    const addUserAddress = async (addressDetail) => {
        try {
            let response = await addAddress(addressDetail);
            if (response.data.success) {
                alert(response.data.message);
                setRefresh(refresh + 1);
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const removeUserAddress = async () => {
        try {
            let response = await removeAddress(addressId);
            alert(response.data.message);
            setRefresh(refresh + 1);
        } catch (err) {
            console.log(err.message);
        }
    }


    return { uploadProfilImage, user, addUserAddress, removeUserAddress };
}