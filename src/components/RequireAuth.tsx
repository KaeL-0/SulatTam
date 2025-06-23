import { useAuthContext } from '../context/UserInfoContext';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
    const { isTokenMissing } = useAuthContext();
    const location = useLocation();

    if (isTokenMissing) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
}