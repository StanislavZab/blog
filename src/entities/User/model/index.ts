export { getUserAuthData } from './selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './selectors/getUserInited/getUserInited';

export {
    userActions,
    userReducer,
} from './slice/userSlice';

export {
    getUserRoles,
    isUserManager,
    isUserAdmin,
    isUserUser,
} from './selectors/roleSelectors';

export type { UserSchema, User } from './types/user';
export { UserRole } from './consts/consts';
