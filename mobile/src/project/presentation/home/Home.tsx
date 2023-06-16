import React from "react";
import { View, ScrollView } from "react-native";
import { Tittle_1 } from "global/atomic/element";
import { Progress_Bar, Loading } from "global/atomic/component";
import { Form } from "global/atomic/layout";
import { validation, MAX_VALUE } from "./validation";
import { styles } from "./style/styles";
import { useHome, useProgressBar } from "./hooks";

const Home = () => {
  const { initialValues, create_project } = useHome();
  const { items, position, position_location } = useProgressBar(2);
  return (
    <ScrollView style={styles.scroll}>
      
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
