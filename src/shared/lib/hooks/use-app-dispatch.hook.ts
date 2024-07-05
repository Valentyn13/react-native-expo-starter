import { useDispatch } from 'react-redux';

import { store } from '../../../store/store';

const useAppDispatch: () => typeof store.instance.dispatch = () =>
    useDispatch<typeof store.instance.dispatch>();

export { useAppDispatch };
