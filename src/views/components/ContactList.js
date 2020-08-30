import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { ContactsListItem } from './ContactListItem';
import { render } from 'react-dom';

export default class ContactsList extends Component  {
    constructor(props){
        super(props)
        
    }
    render(){
        const{contacts,
            onContactSelect,
            refreshing,
            onRefresh,} = props;
        return (
            <FlatList
                data={contacts}
                keyExtractor={item => item.recordID}
                renderItem={({ item }) => (
                    <ContactsListItem
                        contact={item}
                        handleToggleSelect={onContactSelect}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        );
    }
} 