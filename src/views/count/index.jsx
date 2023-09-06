import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Count } from "../../components/Count";
import { Header } from "../../components/Header";
import { useState } from "react";

export const ViewCount = () => {
  const getcountListStorege = () =>
    localStorage.getItem("countList")
      ? JSON.parse(localStorage.getItem("countList"))
      : [];

  const setcountListStorege = (newCountList) => {
    if (newCountList) {
      localStorage.setItem("countList", JSON.stringify(newCountList));
    }
  };

  const setList = (list) => {
    setCountList(list);
    setcountListStorege(list);
  };

  const [countList, setCountList] = useState(getcountListStorege);

  const updateCountList = () => {
    let newCount;
    const id = parseInt(Math.max(...countList.map((c) => c.id))) + 1;
    const value = 0;

    countList.length === 0
      ? (newCount = { id: 1, value })
      : (newCount = { id, value });

    const newCountList = [...countList, newCount];
    setList(newCountList);
  };

  const updateValue = (id, newValue) => {
    const idX = countList.findIndex((c) => c.id === id);
    const newCountList = [...countList];
    newCountList[idX] = { ...newCountList[idX], value: newValue };
    setList(newCountList);
  };

  const deleteCount = (id) => {
    if (id) {
      const newCountList = countList.filter((c) => c.id !== id);
      setList(newCountList);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <Button className="m-5" onClick={updateCountList}>
            Novo Contador
          </Button>
          <Container className="m-5">
            <Row xs={2} md={4} lg={6}>
              {countList.map((c) => (
                <Col key={c.id} className="m-5">
                  <Count
                    value={c.value}
                    id={c.id}
                    updateValue={updateValue}
                    deleteCount={deleteCount}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};
