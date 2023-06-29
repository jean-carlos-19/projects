import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { Tittle_1 } from "global/atomic/element";
import { Progress_Bar, Loading, Modal } from "global/atomic/component";
import { Form } from "global/atomic/layout";
import { validation, MAX_VALUE } from "./validation";
import { styles } from "./style/styles";
import { useHome, useProgressBar } from "./hooks";
import { useStateGlobal } from "global/state";

const Home = () => {
  const {
    error,
    set_error,
    loading,
    set_loading,
    message,
    set_message,
    hidden_menssage,
  } = useStateGlobal();
  const { initialValues, create_project } = useHome(
    set_loading,
    set_error,
    set_message
  );
  const { items, position, position_location } = useProgressBar(2);
  return (
    <ScrollView style={styles.scroll}>
      <StatusBar backgroundColor={"#0F172A"} />
      <Loading message="Subiendo el proyecto" state={loading} />
      <Modal sms={message} type={"Success"} close_modal={hidden_menssage} />
      <Modal sms={error} type={"Error"} close_modal={hidden_menssage} />
      <View style={styles.container}>
        <Tittle_1 text={"Create your first projects"} />
        <Progress_Bar
          items={items}
          position={position}
          position_location={position_location}
        />
        <Form
          handle_send={create_project}
          position={position}
          max_values={MAX_VALUE}
          validadion={validation}
          initialValues={initialValues}
          position_location={position_location}
        />
      </View>
    </ScrollView>
  );
};

export { Home };