import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView} from 'react-native';

import {Navbar} from './Navbar/Navbar';
import {commonStyles} from 'theme';
import {getAge} from 'utils/contacts';
import {styles} from './Contact.styles';

import {ContactInfos} from './ContactInfos/ContactInfos';

export class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    back: PropTypes.func.isRequired,
  };
  render() {
    const {contact, back} = this.props;
    console.log(contact);
    return (
      <View style={[commonStyles.flex, commonStyles.bgWhite]}>
        <Navbar contact={contact} onPressBack={back} />
        <View style={styles.nameContainer}>
          <Text style={styles.title}>
            {contact.first_name} {contact.last_name}
          </Text>
          <Text style={styles.subtitle}>{getAge(contact)} years</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.bloc}>
            <ContactInfos />
          </View>
          <View style={styles.bloc} />
        </ScrollView>
      </View>
    );
  }
}