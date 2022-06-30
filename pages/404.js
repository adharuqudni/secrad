import Router from 'next/router';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

function Page404() {
  const goToHome = () => {
    Router.push('/');
  };

  return (
    <div style={{ padding: 10, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={goToHome} variant="rounded" color="primary" style={{ marginTop: 24, minWidth: 296 }}>
        Go Home
      </Button>
    </div>
  );
}

export default Page404;
