import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabsIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center gap-2">
      <Image source={icon} resizeMode="contain" className="w-6 h-6" style={{ tintColor: color }} />
      <Text className={`${focused ? 'font-bold' : 'font-normal'} text-xs`} style={{ color: color }}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
        tabBarShowLabel: false, 
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
          justifyContent: 'center'
        } 
      }}
      >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabsIcon icon={icons.home} color={color} name="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabsIcon icon={icons.bookmark} color={color} name="Bookmark" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabsIcon icon={icons.plus} color={color} name="Create" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabsIcon icon={icons.profile} color={color} name="Profile" focused={focused} />,
        }}
      />
    </Tabs>
  );
};



export default TabsLayout;
