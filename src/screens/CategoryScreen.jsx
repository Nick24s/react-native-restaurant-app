import { Text, View } from "react-native";

export default function CategoryScreen({route}) {
    const { categoryId } = route.params;

    return (
        <View>
            <Text>Category screen {categoryId}</Text>
        </View>
    )
}