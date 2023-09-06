import Container from "react-bootstrap/esm/Container";
import { Header } from "../../components/Header";

export const ViewHome = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container className="m-5">
            <p>
              Essa aplicação mostrar conhecimentos basicos para criação de
              conteudos com React.
            </p>
            <p>Acesse o menu Contador para visualizar o contador.</p>
          </Container>
        </section>
      </main>
    </>
  );
};
