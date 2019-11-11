/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
	ScrollView,
	Dimensions,
	View,
	TouchableOpacity,
	Text,
	Image
} from "react-native";

import colors from "../../themes/colors";
import Snow from "react-native-snow";
import advents from "../../config/advents";
import images from "../../themes/images";

const { height, width } = Dimensions.get('window');
const doorColors = [colors.darkPink, colors.darkGreen];

const Calendar: () => React$Node = () => {
	const doorSize = 120;
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.white,
				paddingHorizontal: 16
			}}
		>
			<Snow snowfall={"medium"}/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-between",
					paddingVertical: 40
				}}
			>
				{advents.map(({ image }, index) => (
					<TouchableOpacity
						key={index}
						activeOpacity={0.8}
						style={{
							marginTop: 16,
							width: doorSize * 0.8,
							height: doorSize,
							borderRadius: 10,
							backgroundColor: doorColors[index % 2],
							alignItems: "center"
						}}
					>
						<Text
							style={{
								position: "absolute",
								color: "white",
								fontSize: 40,
								left: 4
							}}
						>
							{index + 1}
						</Text>
						<Image
							style={{ width: doorSize * 0.6, height: doorSize, flex: 1 }}
							resizeMode={"contain"}
							source={image}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

export default Calendar;
