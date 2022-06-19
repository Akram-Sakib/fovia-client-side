import { Container, Row, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const RequiredAuth = ({ children }) => { 

  const { user, isLoading } = useAuth();
  let location = useLocation();
    
    if (isLoading) {
        return (
          <Container>
            <Row className="py-5">
              <Spinner className="mx-auto" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Row>
          </Container>
        );
    }


  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
  
};

export default RequiredAuth;