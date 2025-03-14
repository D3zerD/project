import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useGetSingleUser = (userId) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.escuelajs.co/api/v1/users/" + userId
                );
                setUser(response.data);
            } catch (error) {
                console.error("There was an error fetching the users!");
            }
        };

        fetchData();
    }, []);

    return [user];
};

export default useGetSingleUser;