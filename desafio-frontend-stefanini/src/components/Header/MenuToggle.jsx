// src/components/MobileMenu.jsx
import {
  Offcanvas,
  Nav,
  Accordion
} from "react-bootstrap";
import { useState } from "react";

export default function MenuToggle({ show, handleClose }) {
  const [activeKeys, setActiveKeys] = useState(["0"]);

  const toggleAccordion = (key) => {
    if (activeKeys.includes(key)) {
      setActiveKeys(activeKeys.filter((k) => k !== key));
    } else {
      setActiveKeys([...activeKeys, key]);
    }
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="d-lg-none">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column gap-2">
          <Nav.Link href="#">Home</Nav.Link>
          <Accordion activeKey={activeKeys} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => toggleAccordion("0")}>Conheça a CASSI</Accordion.Header>
              <Accordion.Body className="ps-3">
                <Nav.Link href="#">Institucional</Nav.Link>
                <Nav.Link href="#">Informações financeiras</Nav.Link>
                <Nav.Link href="#">Governança corporativa</Nav.Link>
                <Nav.Link href="#">Como trabalhamos</Nav.Link>
                <Nav.Link href="#">Faça parte da nossa equipe</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={() => toggleAccordion("1")}>Nossos planos</Accordion.Header>
              <Accordion.Body className="ps-3">
                <Nav.Link href="#">Plano CASSI Essencial</Nav.Link>
                <Nav.Link href="#">Plano CASSI Família</Nav.Link>
                <Nav.Link href="#">Plano CASSI Vida</Nav.Link>
                <Nav.Link href="#">Quero contratar</Nav.Link>
                <Nav.Link href="#">Plano de Associados</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => toggleAccordion("2")}>Já tenho um plano CASSI</Accordion.Header>
              <Accordion.Body className="ps-3">
                <Nav.Link href="#">Cobertura do meu plano</Nav.Link>
                <Nav.Link href="#">Cronogramas</Nav.Link>
                <Nav.Link href="#">Telemedicina</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header onClick={() => toggleAccordion("3")}>CliniCASSI</Accordion.Header>
              <Accordion.Body className="ps-3">
                <Nav.Link href="#">Atenção Primária Saúde</Nav.Link>
                <Nav.Link href="#">Localize sua CliniCASSI</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Nav.Link href="#">Fale com a CASSI</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
