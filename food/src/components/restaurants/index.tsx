import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CardHorizontalRestaurant } from './horizontal';

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch('http://192.168.0.106:3000/restaurants');
            const data = await response.json();
            setRestaurants(data);
        }

        getRestaurants();
    }, [])
 return (
    <FlatList data={restaurants}
    renderItem={ ({ item }) => <CardHorizontalRestaurant item={item} />}
     horizontal={true} 
     contentContainerStyle={{ gap: 1, paddingLeft: 16, paddingRight: 16 }} 
     showsHorizontalScrollIndicator={false} />
  );
}