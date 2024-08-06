import { Routes } from "@/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
  <NavigationContainer independent={true}>
      <Routes />
    </NavigationContainer>
  )
}