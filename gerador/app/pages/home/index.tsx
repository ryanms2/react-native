import { ModalPassword } from "@/components/modal";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  
  function generatePassword() {
    let password = "";

    for(let i = 0,  n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password)
    setModalVisible(true)
  }
  return (
    <View
      style={styles.container}
    >
      <Image source={require("@/assets/images/logo.png")}
      style={styles.logo} />
      <Text style={styles.title}>{size} characteres</Text>
      <View style={styles.area}>
        <Slider style={{ height: 50 }}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor="#ff0000"
        minimumTrackTintColor="#000"
        thumbTintColor="#392de9"
        value={size}
        onValueChange={value => setSize(Number(value.toFixed(0)))} />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
      </Modal>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#F3F3FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  area: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 14,
    marginBottom: 14,
    borderRadius: 8,
    padding: 8,
  },
  button: {
    width: '80%',
    backgroundColor: '#392de9',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
})
