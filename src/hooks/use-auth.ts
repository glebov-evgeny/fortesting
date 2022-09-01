import { useAppSelector} from './redux-hooks';

export function useAuth() {
    const {username} = useAppSelector(state => state.user)
    return {
        isAuth: !!username,
    };
}