import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../../src/shared';
import { actions as exampleActions } from '../../../src/store/slices/example/example.store.ts';

const SettigsPage = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.example.data);

    useEffect(() => {
        dispatch(exampleActions.getExampleData());
    }, [dispatch]);
    return (
        <View
            style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
        >
            <Text>Redux Test</Text>
            <Text>{data && JSON.stringify(data, null, 2)}</Text>
        </View>
    );
};

export default SettigsPage;
