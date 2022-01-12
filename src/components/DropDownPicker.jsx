// import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// export default class App extends React.Component {

//     construction(props) {
//         super(props);
//         this.state = {
//             countries: []
//         };
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <DropDownPicker 
//                   items={[
//                       {label: '分' ,value: 'min'},
//                       {label: '時間', value: 'hour'},
//                       {label: '日', value: 'day'},
//                   ]}
//                   style={{
//                       height:40,
//                       width: 100,
//                       textAlign: 'center',
//                   }}
//                   labelStyle = {{
//                       fontSize: 40,
//                       textAlign: 'center',
//                   }}
//                   dropDownStyle={{backgroundColor: 'hsla(0, 0%, 0%, 0.05)'}}
//                   placeholder="単位"
//                   placeholderStyle={{
//                       textAlign: 'center',
//                   }}
//                   activeLabelStyle = {{color: 'red'}}
//                   dropDownDirection="AUTO"
//                   bottomOffset={100}
//               />
//               <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//               {this.state.country!=null ?
//                 <Text style={{fontSize:32}}>"{this.state.country}"を選択中</Text>
//               :
//                 <Text></Text>
//               }   
//               </View>
//             </View>
//           );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 80,
//     }
// })
