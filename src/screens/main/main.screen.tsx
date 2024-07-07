import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@shared/index';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text>App entry</Text>
            <Button />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { MainScreen };
