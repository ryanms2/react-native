import { Image, Pressable, Text } from 'react-native';
import { RestaurantProps } from '..';

export function CardHorizontalRestaurant({ item }: {item: RestaurantProps}) {
 return (
   <Pressable className='flex flex-col items-center justify-center px-2' onPress={() => console.log("clicou no retaurante " + item.name)}>
    <Image source={{uri: item.image}} 
    className='w-20 h-20 rounded-full' />
    <Text className='text-sm w-20 text-center leading-4 text-black pt-2' numberOfLines={2}>{item.name}</Text>
   </Pressable>
  );
}