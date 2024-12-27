import { Stack } from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


export default function ProductLayout() {
    return (<Stack>
        <Stack.Screen name='[slug]' options={({ navigation})=> ({
            headerShown: true,
            headerLeft: () => (
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name='arrow-back' size={24} color='black'
/>                </TouchableOpacity>
            ),
        })       
        }/>
    </Stack>
    );

}