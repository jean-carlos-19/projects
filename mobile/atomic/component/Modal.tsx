import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { modal_styles } from './style/modal.styles'
interface modal_props {
  sms: string;
  type: 'Error' | 'Success',
  close_modal: () => void
}
const Modal = (props: modal_props) => {
  const { sms, type, close_modal } = props;
  return (
    sms !== '' ? (
      type === 'Error' ? (
        <View style={modal_styles.container}>
          <View style={modal_styles.modal}>
            <Text style={[modal_styles.header,modal_styles.error]}> Error message </Text>
            <Text style={modal_styles.boddy}> {sms} </Text>
            <TouchableOpacity style={[modal_styles.button,modal_styles.error]} onPress={() => close_modal()}>
              <Text style={modal_styles.text}>Entendido</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={modal_styles.container}>
          <View style={modal_styles.modal}>
            <Text style={[modal_styles.header,modal_styles.success]}> Success message </Text>
            <Text style={modal_styles.boddy}> {sms} </Text>
            <TouchableOpacity style={[modal_styles.button,modal_styles.success]} onPress={() => close_modal()}>
              <Text style={modal_styles.text}>Entendido</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    ) : (null)
  )
}

export { Modal }
