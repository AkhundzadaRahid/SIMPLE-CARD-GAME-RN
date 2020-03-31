import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions, BackHandler} from 'react-native';

const App = () => {
  const [count, setcount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [num1, setNum1] = useState(2);
  const [num2, setNum2] = useState(2);

  var arr = [
    require('./src/png/2.3.png'),
    require('./src/png/3.3.png'),
    require('./src/png/4.3.png'),
    require('./src/png/5.3.png'),
    require('./src/png/6.3.png'),
    require('./src/png/7.3.png'),
    require('./src/png/8.3.png'),
    require('./src/png/9.3.png'),
    require('./src/png/10.3.png'),
    require('./src/png/11.3.png'),
    require('./src/png/12.3.png'),
    require('./src/png/13.3.png'),
    require('./src/png/14.3.png'),
    require('./src/png/15.2.png'),
  ];

  const Deal = () => {
    var random1 = Math.floor(Math.random() * 14);
    var random2 = Math.floor(Math.random() * 14);
    console.log(random1);
    console.log(random2);

    setNum1(random1);
    setNum2(random2);
    if (random1 > random2) {
      setcount(count + 1);
    } else if (random1 < random2) {
      setCount2(count2 + 1);
    } else {
      setcount(count);
      setCount2(count2);
    }
  };

  const Finish = () => {
    if (count === 10) {
      alert('USER WIN');
      Restart();
    } else if (count2 === 10) {
      alert('PC WIN');
      Restart();
    }
  };

  Finish();
  function Restart() {
    setcount(0);
    setCount2(0);
  }
  const Exit = () => {
    BackHandler.exitApp();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Image
          source={require('./src/extras/header.png')}
          style={styles.Headerimage}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image source={arr[num1]} style={styles.image} />
        <Image source={arr[num2]} style={styles.image} />
      </View>

      <View style={styles.playStyle}>
        <View style={styles.playStyle1}>
          <TouchableOpacity style={styles.btnDeal} onPress={Deal}>
            <Text style={styles.dealStyle}>Deal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.playStyle2}>
          <View style={styles.playStyle3}>
            <Image
              source={require('./src/extras/boy.png')}
              style={styles.image2}
            />
            <Text style={styles.dealStyle}>{count}</Text>
          </View>

          <View style={styles.playStyle3}>
            <Image
              source={require('./src/extras/pc.png')}
              style={{width: 66, height: 66}}
            />
            <Text style={styles.dealStyle}>{count2}</Text>
          </View>
        </View>
        <View style={styles.playStyle4}>
          <TouchableOpacity onPress={Restart}>
            <Image
              source={require('./src/extras/restart.png')}
              style={{width: 66, height: 66}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={Exit}>
            <Image
              source={require('./src/extras/exit.png')}
              style={{width: 66, height: 66}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  Headerimage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 4,
  },
  image: {
    width: 150,
    height: 220,
    margin: 30,
  },
  imageContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playStyle: {
    margin: 20,
    padding: 20,
    flex: 2,
  },
  playStyle1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDeal: {
    height: 60,
    width: 80,
    backgroundColor: 'green',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dealStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  playStyle2: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 50,
  },
  playStyle3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  playStyle4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
