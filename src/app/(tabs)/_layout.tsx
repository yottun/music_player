import { colors, fontSize } from "@/constants/tokens"
import { BlurView } from "expo-blur"
import { Tabs } from "expo-router"
import { StyleSheet } from "react-native"
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from "@expo/vector-icons"

const TabsNavigation = () => {
	return (
		<Tabs screenOptions={{
			tabBarActiveTintColor: colors.primary,
			tabBarLabelStyle: {
				fontSize: fontSize.xs,
				fontWeight: "500",
			},
			headerShown: false,
			tabBarStyle: {
				position: "absolute",
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
				borderTopWidth: 0,
				paddingTop: 8,
			},
			tabBarBackground: () => (
				<BlurView
					intensity={95}
					style={{
						...StyleSheet.absoluteFillObject,
						overflow: "hidden",
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
					}} />
			),
		}}>
			<Tabs.Screen name="favorites" options={{
				title: "Favorites",
				tabBarIcon: ({ color }) => (
					<FontAwesome name="heart" color={color} size={20} />
				)
			}} />
			<Tabs.Screen name="playlists" options={{
				title: "Playlists",
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="playlist-music" color={color} size={28} />
				)
			}} />
			<Tabs.Screen name="(songs)" options={{
				title: "Songs",
				tabBarIcon: ({ color }) => (
					<Ionicons name="musical-notes-sharp" color={color} size={24} />
				)
			}} />
			<Tabs.Screen name="artists" options={{
				title: "Artists",
				tabBarIcon: ({ color }) => (
					<FontAwesome6 name="users-line" color={color} size={20} />
				)
			}} />
		</Tabs>
	)
}

export default TabsNavigation
