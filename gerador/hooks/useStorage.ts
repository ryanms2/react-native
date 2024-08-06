import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    // buscar os itens salvos
    const getItem = async (key: any) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return passwords ? JSON.parse(passwords) : [];
        } catch (error) {
            console.log("Erro ao buscar", error);
            return [];
        }
    }

    // salva o item
    const saveItem = async (key:any, value:any) => {
        try {
        
            let passwords = await getItem(key);
        passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        } catch (error) {
            console.log("ERRO AO SALVAR", error);
        }
        
    }

    // remove o item
    const removeItem = async (key:any, item: any) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password: string) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;
        } catch (error) {
            console.log("ERROR AO DELETAR", error);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage;