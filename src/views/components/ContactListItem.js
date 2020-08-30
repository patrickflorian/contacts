import React, { Component } from 'react';
import { View, Text, Alert,Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton, Colors} from 'react-native-paper'
/* import { PrimaryCheckBox } from 'src/components'; */
import { s } from '../../styles';
const ContactsListItem =(props)=>  {
    const onDeletePress = (e)=> {
        props.handleDelete(props.contact.key)
    }
    const onUpdatePress = (e)=> {
        props.handleUpdate()
    }

    const contact /* ,handleToggleSelec */ = props.contact;
        return (
            <View
                style={[
                    s.flx_row,
                    s.pv3,
                    s.ph4,
                    s.bb,
                    s.b__light_silver,
                    contact.isSelected ? s.bg_tertiary : s.bg_white,
                ]}
                
            >
                <View style={[s.flx_i]} >
                    <Text style={[s.near_black, s.f4]} >
                        {contact.firstname} {contact.lastname}
                    </Text>

                    <Text key={contact.key} style={[s.light_silver, s.f5]} >
                        {contact.tel}
                    </Text>

                </View>
                <View style={[s.aic, s.jcc]} >
                   <IconButton onPress={onUpdatePress} icon ="briefcase-edit" color={Colors.blue500}  size={22} />
                </View> 
                 <View
                    style={[s.aic, s.jcc]}
                >
                    <IconButton onPress={onDeletePress} icon ="delete" color={Colors.red500}  size={22}> 
                    </IconButton>
                </View> 
            </View>
        );
    }
export default ContactsListItem;