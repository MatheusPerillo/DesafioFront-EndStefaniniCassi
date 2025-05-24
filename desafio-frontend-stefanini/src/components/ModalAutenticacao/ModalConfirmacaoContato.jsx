import { Modal, Button, Form, Row, Col } from "react-bootstrap";

export default function ModalConfirmacaoContato({
  show,
  onClose,
  onConfirmar,
}) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body>
        <h6 className="fw-bold mb-2">Verificar dados de contato</h6>
        <p className="mb-4" style={{ fontSize: 15 }}>
          Considerando que você não reconheceu a Notificação de Intermediação
          Preliminar (NIP), a CASSI entrará em contato para compreender melhor a
          situação. <br />
          Por favor, verifique as informações abaixo e, se necessário,
          atualize-as:
        </p>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Beneficiário</Form.Label>
            <Form.Control value="Leandro Henrique" disabled />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">E-mail</Form.Label>
                <Form.Control
                  defaultValue="leandro.henrique@gmail.com"
                  type="email"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Celular</Form.Label>
                <Form.Control defaultValue="(61) 9 9999-9999" type="text" />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-center gap-3 mt-2">
            <Button
              variant="outline"
              className="btn-outline-azul px-4"
              onClick={onClose}
            >
              Voltar
            </Button>
            <Button className="btn-azul" onClick={onConfirmar}>
              Confirmar dados
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
