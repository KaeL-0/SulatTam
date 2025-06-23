import { useAuthContext } from '../context/UserInfoContext';
import { Navigate } from 'react-router-dom';

export default function RedirectIfAuth({ children }: { children: React.ReactNode }) {
    const { isTokenMissing } = useAuthContext();

    if (!isTokenMissing) {
        return <Navigate to="/" replace />;
    }

    return children;
}