import { Provider } from 'react-redux';
import { Tabs } from 'expo-router';

import { store } from '@store/index';

const RootLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: true,
            }}
        >
            <Tabs.Screen name="index" options={{ tabBarLabel: 'App' }} />
            <Tabs.Screen
                name="settings/index"
                options={{ tabBarLabel: 'Settings' }}
            />
        </Tabs>
    );
};
const TabsLayout = () => {
    return (
        <Provider store={store.instance}>
            <RootLayout />
        </Provider>
    );
};

export default TabsLayout;
