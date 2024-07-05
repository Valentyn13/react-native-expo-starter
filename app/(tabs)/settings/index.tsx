import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

import {
    asyncStorage,
    AsyncStorageKey,
    useAppDispatch,
    useAppSelector,
} from '../../../src/shared';
import { actions as exampleActions } from '../../../src/store/slices/example/example.store.ts';

const SettigsPage = () => {
    const [token, setToken] = useState<string>('');
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.example.data);

    useEffect(() => {
        dispatch(exampleActions.getExampleData());
        void asyncStorage.setItem(AsyncStorageKey.TOKEN, 'test-token');
    }, [dispatch]);
    const handlePressButton = async () => {
        const token = await asyncStorage.getItem(AsyncStorageKey.TOKEN);
        if (token) {
            setToken(token);
        }
    };
    return (
        <View
            style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
        >
            <Text>Redux Test: {token}</Text>
            <Text>{data && JSON.stringify(data, null, 2)}</Text>
            <Button title="Get token" onPress={handlePressButton} />
        </View>
    );
};

export default SettigsPage;
