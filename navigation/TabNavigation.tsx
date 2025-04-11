import React from "react";
import { View } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import Home from "../TabScreens/Home";
import Explore from "../TabScreens/Explore";

import colors from "../assets/colors";
import AddHabit from "../TabScreens/AddHabit";

type TabParamList = {
  Home: undefined;
  Explore: undefined;
  Stats: undefined;
  Add: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const getIcon = () => {
          switch (route.name) {
            case "Home":
              return (
                <Feather
                  name="home"
                  size={20}
                  color={isFocused ? colors.blue : colors.grey}
                />
              );
            case "Explore":
              return (
                <Feather
                  name="users"
                  size={20}
                  color={isFocused ? colors.blue : colors.grey}
                />
              );
            case "Stats":
              return (
                <Ionicons
                  name="stats-chart"
                  size={20}
                  color={isFocused ? colors.blue : colors.grey}
                />
              );
            case "Add":
              return (
                <AntDesign
                  name="pluscircleo"
                  size={20}
                  color={isFocused ? colors.blue : colors.grey}
                />
              );
            case "Settings":
              return (
                <Feather
                  name="settings"
                  size={20}
                  color={isFocused ? colors.blue : colors.grey}
                />
              );
            default:
              return null;
          }
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              {getIcon()}
              <Text
                style={{
                  color: isFocused ? colors.blue : colors.grey,
                  fontFamily: "Roboto-Regular",
                }}
              >
                {label}
              </Text>
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Add" component={AddHabit} />
      {/* <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  );
}

export default MyTabs;
