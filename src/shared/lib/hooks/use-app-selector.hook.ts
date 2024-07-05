import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { store } from '../../../store/store';

const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.instance.getState>
> = useSelector;

export { useAppSelector };
