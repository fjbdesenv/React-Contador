import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { Header } from "../../components/Header";

export const ViewNotFound = () => {
  return (
    <>
      <Header />
      <Container className="m-5">
        <Alert variant="danger">
          <Alert.Heading>Pagina não encontrada!</Alert.Heading>
          <p>Verifique o endereço e tente novamente.</p>
        </Alert>
      </Container>
    </>
  );
};
