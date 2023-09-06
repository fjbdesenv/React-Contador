import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Count = ({ id = -1, value = 0, updateValue, deleteCount }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Contador {id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dados</Card.Subtitle>
        <Card.Text>Valor: {value}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button className="m-1" onClick={(event) => updateValue(id, value - 1)}>
          Decrementar
        </Button>
        <Button className="m-1" onClick={(event) => updateValue(id, value + 1)}>
          Incrementar
        </Button>
      </Card.Body>
      <Card.Body>
        <Button className="m-1 btn-danger" onClick={(event) => deleteCount(id)}>
          Deletar
        </Button>
      </Card.Body>
    </Card>
  );
};
