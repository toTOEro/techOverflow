import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {useMutation} from '@apollo/client';
import {ADD_USER} from '../utils/mutations';


const Signup = () => {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password:'',
    });

    const [addProfile, {error, data}] = useMutation(ADD_USER);

    const changeHandler = (event) => {
        const {userName, value} = event.target;

        setFormState({
            ...formState,
            [userName]: value,
        });
    };

    const signUpHandler = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const {data} = await addProfile({
                variables: {...formState},
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        // need to return something
        console.log("something");
    )


}