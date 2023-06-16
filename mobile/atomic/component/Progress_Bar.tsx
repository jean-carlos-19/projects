import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { progress_bar_styles } from './style/progress.bar.style'

interface progress_bar_props {
  items: number[];
  position: number;
  position_location: (position: number) => void;
}

const Progress_Bar = (props: progress_bar_props) => {
  const { items, position, position_location } = props;
  return (
    <View style={progress_bar_styles.pogress_bar}>
      {
        items.map((item:number,i:number)=>(
          ((i+1) <= position) ? (
            <TouchableOpacity key={i} style={progress_bar_styles.item} onPress={()=>position_location( i + 1 )}>
              <Text style={progress_bar_styles.text_btn}> { i + 1 } </Text>
            </TouchableOpacity>
          ):(
            <TouchableOpacity key={i} style={[progress_bar_styles.item,progress_bar_styles.item_disable]} disabled={true} onPress={()=>position_location(i + 1)}>
            <Text style={progress_bar_styles.text_disable}> { i + 1 } </Text>
          </TouchableOpacity>
          )
        ))
      }
    </View>
  )
}

export { Progress_Bar }
