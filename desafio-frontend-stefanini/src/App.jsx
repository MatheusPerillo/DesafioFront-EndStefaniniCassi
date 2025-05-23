import { Container, Navbar, Nav, Button, Modal, Alert } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [nip, setNip] = useState('');
  const [tentativas, setTentativas] = useState(0);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState('');

  const handleConfirmar = () => {
    if (nip === '1234') {
      setSucesso(true);
      setErro('');
    } else {
      const novasTentativas = tentativas + 1;
      setTentativas(novasTentativas);
      setErro('NIP incorreto');

      if (novasTentativas >= 3) {
        setErro('Solicitação bloqueada após 3 tentativas.');
        setShowModal(false);
      }
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">CASSI</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h2>Confirmação de Solicitação</h2>
        <p>Deseja confirmar a solicitação XYZ?</p>
        {sucesso && <Alert variant="success">Solicitação confirmada com sucesso!</Alert>}
        {erro && <Alert variant="danger">{erro}</Alert>}

        <Button variant="primary" onClick={() => setShowModal(true)}>
          Confirmar
        </Button>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Digite seu NIP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="password"
            className="form-control"
            placeholder="****"
            value={nip}
            onChange={(e) => setNip(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirmar}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
