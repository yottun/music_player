import { FlatList, FlatListProps, View } from "react-native"
import library from "@/assets/data/library.json"
import { TrackListItem } from "./TrackListItem"
import { utilsStyles } from "@/styles"

export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => (
    <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TracksList = ({ ...flatListProps }: TracksListProps) => {
    return (
        <FlatList
            data={library}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => (
                <TrackListItem
                    track={{
                        ...track,
                        image: track.artwork
                    }}
                />
            )}
            {...flatListProps}
        />
    )
}