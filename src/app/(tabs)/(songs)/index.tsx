import { useNavigationSearch } from "@/app/hooks/useNavigationSearch"
import { TracksList } from "@/components/TracksList"
import { screenPadding } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { ScrollView, View } from "react-native"

const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: "Find in songs"
        }
    })
    return (
        <View style={defaultStyles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ paddingHorizontal: screenPadding.horizontal }}
            >
                <TracksList scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}

export default SongsScreen