import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree'

export default function App() {
  const [] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-gray-50 font-bold text-5xl">Rocketseat</Text>
      <StatusBar style="light" />
    </View>
  );
}
