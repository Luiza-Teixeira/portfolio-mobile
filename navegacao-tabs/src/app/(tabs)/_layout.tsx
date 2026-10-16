import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
        }}
      />

      <Tabs.Screen
        name="academica"
        options={{
          title: 'Acadêmica',
        }}
      />

      <Tabs.Screen
        name="profissional"
        options={{
          title: 'Profissional',
        }}
      />

      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
        }}
      />
    </Tabs>
  );
}