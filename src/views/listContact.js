import React, { useEffect, useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ContactsListItem from './components/ContactListItem';
import { deleteContact,listContacts } from '../actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    TouchableOpacityStyle: {
        //Here is the trick
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});

const listContact = (props) => {
    const [contacts, setContacts] = useState([])
    const [keyword, setKeyword] = useState('')
    const [loading, setloading] = useState(false)
    const clickHandler = () => {

    }

    const session = useSelector(state => state.all);
    const dispatch = useDispatch();

    const handleDelete = (key) => {
        dispatch(deleteContact(key))
    }

    const onInputChange = (value) => {
       setKeyword(value);
       dispatch(listContacts(value))
    }

    useEffect(() => {
        if (!keyword) setContacts(session.items);
        else setContacts(session.result);
        if (!loading) { setloading(false) }
        else setloading(true)
    }, [loading, session]);
    return <View style={{ flex: 1, }}>
        <View >
            <TextInput style={{paddingVertical:10, borderColor: 'black',  borderRadius:5}} placeholder={'cliquez ici pour rechercher'}
                onChangeText={(e) => onInputChange( e)} 
                defaultValue={keyword}/>
        </View>
        <FlatList
            data={contacts}
            renderItem={({ item }) => (
                <ContactsListItem
                    contact={item}
                    handleToggleSelect={null}
                    handleUpdate={() => props.navigation.navigate('update', { ...item })}
                    handleDelete={handleDelete}
                />
            )}
        />
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={(e) => props.navigation.push('add')}
            style={styles.TouchableOpacityStyle}>
            <Image
                source={{ uri: 'https://img.icons8.com/pastel-glyph/2x/plus.png', }}
                style={styles.FloatingButtonStyle} />
        </TouchableOpacity>
    </View>
}

export default listContact