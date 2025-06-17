import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import IMAGES from "../../assets";

import HomeScreen from "../Screens/HomeScreen";
import CommuScreen from "../Screens/CommuScreen";
import FreeBoardScreen from "../Screens/FreeBoardScreen";
import ChatScreen from "../Screens/ChatScreen";
import HomeScrapScreen from "../Screens/HomeScrapScreen";
import CommuScrapScreen from "../Screens/CommuScrapScreen";
import FreeBoardScrapScreen from "../Screens/FreeBoardScrapScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

const Header = ({ name, navigation }) => (
  <SafeAreaView style={{ backgroundColor: "white" }}>
    <View style={styles.header}>
      {name === "채팅" ? (
        <View style={styles.topContainer}>
          <Text style={styles.topFont}>채팅</Text>
          <TouchableOpacity
            style={styles.setButton}
            onPress={() => navigation.navigate("SettingPage")}
          >
            <MaterialIcons name="settings" size={26} color="#67574D" />
          </TouchableOpacity>
        </View>
      ) : name === "마이페이지" ? (
        <View style={{ marginLeft: "auto" }}>
          <TouchableOpacity onPress={() => navigation.navigate("SettingPage")}>
            <Image
              source={IMAGES.SETTING}
              resizeMode="contain"
              style={styles.setting}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Image
            source={IMAGES.SWAPLOGOV2}
            resizeMode="contain"
            style={styles.logo}
          />
          <View
            style={{
              flexDirection: "row",
              marginLeft: "auto",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchingPage")}
            >
              <Image
                source={IMAGES.SEARCH}
                resizeMode="contain"
                style={styles.search}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationPage")}
            >
              <Image
                source={IMAGES.BELL}
                resizeMode="contain"
                style={styles.notificationIcon}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  </SafeAreaView>
);

const TopTabIcon = (name, component) => (
  <TopTab.Screen
    key={name}
    name={name}
    component={component}
    options={{
      tabBarShowLabel: false,
      tabBarIndicatorStyle: { opacity: 0 },
      tabBarLabel: ({ focused }) => (
        <View
          style={[
            styles.topTabBtn,
            {
              backgroundColor: focused ? "#67574D" : "#FFFFFF",
              borderWidth: focused ? 0 : 1,
              borderColor: focused ? "white" : "#D0D1D1",
            },
          ]}
        >
          <Text
            style={[
              styles.topTabFont,
              { color: focused ? "#FFFFFF" : "#000000" },
            ]}
          >
            {name}
          </Text>
        </View>
      ),
    }}
  />
);

const CommunGroup = () => (
  <TopTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIndicatorStyle: { opacity: 0 },
      tabBarStyle: styles.topTapStyle,
      tabBarItemStyle: styles.topTapItemContainer,
      swipeEnabled: false,
      tabBarPressColor: "transparent",
    }}
  >
    {TopTabIcon("커뮤니티", CommuScreen)}
    {TopTabIcon("자유게시판", FreeBoardScreen)}
  </TopTab.Navigator>
);

const ScrapGroup = () => (
  <TopTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIndicatorStyle: { opacity: 0 },
      tabBarStyle: styles.topTapStyle,
      tabBarItemStyle: styles.topTapItemContainer,
      swipeEnabled: false,
      tabBarPressColor: "transparent",
    }}
  >
    {TopTabIcon("중고거래", HomeScrapScreen)}
    {TopTabIcon("커뮤니티", CommuScrapScreen)}
    {TopTabIcon("자유게시판", FreeBoardScrapScreen)}
  </TopTab.Navigator>
);

const BottomTabIcon = (name, focused) => {
  const icons = {
    중고거래: IMAGES.HOME,
    커뮤니티: IMAGES.COMMUNITY,
    채팅: IMAGES.CHAT,
    스크랩: IMAGES.SCRAP,
    마이페이지: IMAGES.PROFILE,
  };

  return (
    <View style={styles.bottomTabIconContainer}>
      <Image
        source={icons[name]}
        resizeMode="contain"
        style={[
          styles.bottomTabIcon,
          { tintColor: focused ? "#474747" : "#D1D1D1" },
        ]}
      />
      <Text
        style={[
          styles.bottomTabFont,
          { color: focused ? "#474747" : "#D1D1D1" },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};
const TotalTab = (name, component, key, headerShown = true) => (
  <BottomTab.Screen
    key={key}
    name={key}
    component={component}
    options={({ navigation }) => ({
      header: headerShown
        ? () => <Header name={name} navigation={navigation} />
        : undefined,
      tabBarIcon: ({ focused }) => BottomTabIcon(name, focused),
    })}
  />
);

export default function RouteScreen({ navigation }) {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomTabStyle,
      }}
    >
      {TotalTab("중고거래", HomeScreen, "HomeScreen", true, navigation)}
      {TotalTab("커뮤니티", CommunGroup, "CommunGroup", true, navigation)}
      {TotalTab("채팅", ChatScreen, "ChatScreen", true, navigation)}
      {TotalTab("스크랩", ScrapGroup, "ScrapGroup", true, navigation)}
      {TotalTab("마이페이지", ProfileScreen, "ProfileScreen", true, navigation)}
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
    width: "95%",
    height: height * 0.1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  topContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topFont: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  setButton: {
    padding: 5,
  },
  logo: {
    width: width > 700 ? "80%" : "60%",
    height: height > 700 ? "80%" : "60%",
  },
  search: {
    width: width > 700 ? 28 : 23,
    height: width > 700 ? 28 : 23,
    marginRight: 10,
  },
  notificationIcon: {
    width: width > 700 ? 28 : 23,
    height: width > 700 ? 28 : 23,
    marginRight: 5,
  },
  setting: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  bottomTabStyle: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    paddingHorizontal: 10,
    height: height * 0.1,
  },

  bottomTabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  bottomTabFont: {
    fontSize: 10,
    marginTop: 2,
  },
  topTapStyle: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
  },
  topTapItemContainer: {
    width: "auto",
  },
  topTabBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  topTabFont: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
