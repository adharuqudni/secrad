import { useAuth } from '../../utils/auth/authProvider';
import Button from '@mui/material/Button';

export default function SignOutButton() {
    const { signOut } = useAuth();
    return (
        <Button onClick={signOut}>Sign out</Button>
    )
}