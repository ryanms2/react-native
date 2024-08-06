import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import * as Clipboard from 'expo-clipboard'

export function PasswordItem({ data, removePassword }: {
    data: any,
    removePassword: any
}) {
    const [hidePassword, setHidePassword] = useState(true);

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(data);
        alert("senha copiada com sucesso!")

    }
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <TextInput style={styles.text} secureTextEntry={hidePassword} editable={false} >{data}</TextInput>

            <Ionicons size={30} color={"white"} name="clipboard-outline" onPress={handleCopyPassword} />

            {hidePassword ? <Ionicons size={30} color={"white"} name='eye-off' onPress={() => setHidePassword(false)} /> : <Ionicons size={30} color={"white"} name='eye-outline' onPress={() => setHidePassword(true)} />}


        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 24,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "#fff",
        flex: 1,
    }
})