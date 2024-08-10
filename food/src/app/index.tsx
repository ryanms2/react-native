import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
      <ScrollView 
      className="flex-1 bg-slate-200" 
      showsVerticalScrollIndicator={false}>

        <View className="w-full mt-18 px-4" style={{ marginTop: statusBarHeight + 8 }}>
          <Header />

          <Banner />

          <Search />
          
        </View>

        <Section name="Comidas em Alta" 
          label="Veja Mais" 
          action={() => console.log("clicou no ver mais")} 
          size="text-2xl" />
        
        <TrendingFoods />

        <Section name="Famosas no Devfood" 
          label="Veja Todas" 
          action={() => console.log("clicou no famosos")} 
          size="text-xl" />

          <Restaurants />

          <Section name="Restaurantes" 
          label="Veja mais" 
          action={() => console.log("clicou no restaurantes")} 
          size="text-xl" />

          <RestaurantVerticalList />
      </ScrollView>
  );
}