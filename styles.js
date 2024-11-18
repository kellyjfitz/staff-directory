import { StyleSheet } from 'react-native';

// brand colours
export const colours = {
  lightGrey: '#D9D9D9',
  red: '#941a1d',
  charcoal: '#262626',
  burntOrange: '#c64c38',
  grey: '#595959',
  midGrey: '#3b3b3b',
  white: '#FFFFFF',
}

const styles = StyleSheet.create ({
    background:{
        flex:1,
        padding:10,
        backgroundColor: colours.lightGrey,

    },
    head: {
      fontSize:30,
      fontWeight:'900',
      color: colours.red,
      textAlign:'center',
      marginVertical:5,
    },

    button: {
      backgroundColor:colours.midGrey,
      borderRadius:10,
      padding: 10,
      marginTop:20,
      alignSelf: 'center'
    },
    btnText: {
      fontSize:20,
      fontWeight:'bold',
      color: colours.white,
      textAlign:'center',
    },
    drawerStyle: {
        backgroundColor: '#941a1d',
        width: '75%'
    },
    navLogo: {
        flex:1,
        flexDirection: 'row', // Set row direction
        justifyContent: 'center', // Space between elements
        alignItems: 'center', // Center items vertically
        height:'80%'
        //width: '100%', // Full width of parent
      },
    logo: {
        margin:17.5,
        width: 35,
        height: 35,
    },
    drawerLabelStyle:{
        color:'white',
        fontSize:20,
    },
    drawerStyle: {
        backgroundColor: colours.red,
        width: '50%'
    },
    headerStyle: {
        backgroundColor: colours.lightGrey,
    },
    screen: {
        flex:1,
        justifyContent: 'center',
        backgroundColor:colours.lightGrey,
        padding: '10%'
    },
    listing: {
      flex:1,
      justifyContent: 'center',
    },
    listingHead:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20,
      marginTop:30,
    },
    listingBody: {
      textAlign:'center',
      fontSize:18,
    },
    row: {
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    subtitle: {
        fontSize:24,
        color:'#262626',
        textAlign:'center',
        marginVertical:10,
    },
    labelContainer: {
        marginVertical: 10,
      },
    label: {
        fontSize: 18,
        marginBottom: 10,
        paddingLeft:5,
      },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius:10,
      },
});

export default styles;