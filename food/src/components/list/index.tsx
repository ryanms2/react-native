import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { RestaurantProps } from '../restaurants';
import { RestaurantItem } from './item';

export function RestaurantVerticalList() {

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
  <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
    {restaurants.map( item => (
      <RestaurantItem item={item} key={item.id} />
    ))}
  </View>
    
 );
}