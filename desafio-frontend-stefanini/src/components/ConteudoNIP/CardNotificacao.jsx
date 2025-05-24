import { Row, Col } from "react-bootstrap";

export default function CardNotificacao() {
  return (
    <Row className="mb-3 mt-4">
      <Col md={6}>
        <p className="mb-1 text-gray-bold">Beneficiário</p>
        <p className="mb-2 text-gray-light">Leandro Henrique</p>
      </Col>
      <Col md={6}>
        <p className="mb-1 text-gray-bold">Interlocutor</p>
        <p className="mb-2 text-gray-light">Leandro Henrique</p>
      </Col>
      <Col md={6} className="mt-2">
        <p className="mb-1 text-gray-bold">Data de abertura</p>
        <p className="mb-3 text-gray-light">29/01/2022</p>
      </Col>
    </Row>
  );
}
