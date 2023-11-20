import { EmailAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';
import StyledFirebaseAuth from './StyledFirebaseAuth.tsx';
import styles from "../../css/index.module.scss";
import { useSearchParams } from 'react-router-dom';
import * as firebaseui from 'firebaseui';

export function AuthPage() {

    const [params] = useSearchParams();
    const returnAddress = params.get('return') || '/app';

    const uiConfig: firebaseui.auth.Config = {
        signInFlow: 'popup',
        signInSuccessUrl: `/setup?return=${returnAddress}`,
        signInOptions: [EmailAuthProvider.PROVIDER_ID],
        siteName: 'MediStore Web App'
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Placement Management System</div>
            <div className={styles.subtitle}>“Your Journey Starts Here”...</div>
            <div className={styles.secondaryTitle}><b>Login</b> to continue with Placement Portal</div>
            <StyledFirebaseAuth className={styles.actionButtons} uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    );
}
