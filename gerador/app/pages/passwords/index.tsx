import useStorage from '@/hooks/useStorage';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PasswordItem } from './_components/password-item';

export function Password() {
    const [listPasswords, setListPaswwords] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPassword() {
            const passwords = await getItem("@pass")
            setListPaswwords(passwords)
        }

        loadPassword();
    }, [focused])

    async function handleDeletePassword(item: string) {
        const passwords = await removeItem("@pass", item)
        setListPaswwords(passwords);
    }

    return(
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList style={{ flex: 1, paddingTop: 14, }} 
                data={listPasswords} 
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />} />
            </View>
        </SafeAreaView>
    )  
        
        
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }
})