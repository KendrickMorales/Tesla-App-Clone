import { StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    
      },
    
      titles:{
        width: '100%',
        marginTop: '30%',
        alignItems: 'center'
    
      },
      title:{
        fontSize: 40,
        fontWeight: '600'
    
    
      },
      subtittle:{
    
        fontSize: 16,
        color: '#5c5362'
    
      },
    
      image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },

    cta: {
      textDecorationLine: 'underline',

    },

});

export default styles;