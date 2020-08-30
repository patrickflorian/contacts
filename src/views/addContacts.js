import React, { useState, useEffect } from 'react';
import {
    Button,
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,

} from 'react-native';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';


import * as actionTypes from '../actions'
import { ajouter } from '../actions'

var uuid = require('react-native-uuid');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
        justifyContent: 'center',
    },

});



const addContact = (props) => {
    const [contact, setContact] = useState({
        key: uuid.v4(),
        firstname: "",
        lastname: "",
        email: "",
        tel: "",
        origin: "",
    });
    const [submited, setSubmited] = useState(false)
    const [formValidation] = useState({
        email: {
            error: false,
            regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        phonenumber: {
            error: false,
            regex: /^(237|0)(6)\d{8}$/
        },
    });
    const updateUser = () => {
        return () => Alert.alert('start'); /*  */
    }


    const onInputChange = (key, value) => {
        const state = contact;
        const newState = { ...state };
        newState[key] = value;
        setContact(newState);
    }

    const handleValidate = () => {
        const newValidation = { ...formValidation };
        let isInValid = false;
        Object.keys(formValidation).forEach((key, index) => {
            newValidation[key].error = !newValidation[key].regex.test(formState[key]);
            isInValid |= newValidation[key].error;
        });
        setValidation(newValidation);
        setFormValid(isInValid);
        return !isInValid;
    };

    const dispatch = useDispatch();
    const onsubmit = (e) => {
        dispatch(ajouter(contact));
        setContact({
            key: uuid.v4(),
            firstname: "",
            lastname: "",
            email: "",
            tel: "",
            origin: "",
        })
        
    }

    return <View style={styles.container} >
        <Text>Nom</Text>
        <TextInput
            defaultValue={contact.firstname}
            onChangeText={(e) => onInputChange('firstname', e)} />

        <Text>Prenom</Text>
        <TextInput
            defaultValue={contact.lastname}
            onChangeText={(e) => onInputChange('lastname', e)} />

        <Text>email</Text>
        <TextInput
            defaultValue={contact.email}
            onChangeText={(e) => onInputChange('email', e)} />

        <Text>telephone</Text>
        <TextInput
            defaultValue={contact.tel}
            onChangeText={(e) => onInputChange('tel', e)} />

        <Text>origine</Text>
        <TextInput
            defaultValue={contact.origin}
            onChangeText={(e) => onInputChange('origin', e)} />
        <Button title="Ajouter" onPress={onsubmit} />
    </View>

}

export default addContact;