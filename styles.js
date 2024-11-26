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
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
    backgroundColor: colours.lightGrey,
  },
  head: {
    fontSize: 40, 
    fontWeight: '900',
    color: colours.red,
    textAlign: 'center',
    marginVertical: 5,
  },
  button: {
    backgroundColor: colours.midGrey,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: colours.white,
    textAlign: 'center',
  },
  headerStyle: {
    backgroundColor: colours.lightGrey,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colours.lightGrey,
    paddingHorizontal: '10%',
    paddingBottom:'10%'
  },
  listing: {
    flex: 1,
    justifyContent: 'center',
  },
  listingHead: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20, 
    marginTop: 30,
  },
  listingBody: {
    textAlign: 'center',
    fontSize: 18, 
  },
  directoryItem: {
    padding: 10,
  },
  directoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color: colours.charcoal
  },

  subtitle: {
    fontSize: 24, 
    color: colours.charcoal,
    textAlign: 'center',
    marginVertical: 10,
  },
  labelContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18, 
    marginBottom: 10,
    paddingLeft: 5,
  },
  input: {
    height: 40,
    borderColor: colours.grey,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 16, 
  },
  picker: {
    fontSize: 16, 
    marginLeft: 0, 
    textAlign: 'left'
  },
  pickerContainer: {
    height: 40,
    borderColor: colours.grey,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 14, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  scrollContainer: {
    paddingBottom:20,
  }
});

export default styles;
