import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0F172A',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E2E8F0',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? '#0F172A' : '#94A3B8'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={focused ? '#0F172A' : '#94A3B8'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="academica"
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="school-outline"
              size={size}
              color={focused ? '#0F172A' : '#94A3B8'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profissional"
        options={{
          title: 'Profissional',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="briefcase-outline"
              size={size}
              color={focused ? '#0F172A' : '#94A3B8'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="code-slash-outline"
              size={size}
              color={focused ? '#0F172A' : '#94A3B8'}
            />
          ),
        }}
      />
    </Tabs>
  );
}