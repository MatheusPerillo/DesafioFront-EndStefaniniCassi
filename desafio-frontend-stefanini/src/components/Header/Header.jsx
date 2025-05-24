import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  NavDropdown,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BsSearch,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsList,
} from "react-icons/bs";
import logo from "../../assets/web-logo-cassi.png";
import loremIpsumIcon from "../../assets/loremipsum-image.png";
import { useState } from "react";
import MenuToggle from "./MenuToggle";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="border-bottom">
      <div className="py-3 bg-white border-bottom lateral-80">
        <Container
          fluid
          className="d-flex align-items-center justify-content-between p-0"
        >
          <img src={logo} alt="CASSI" height="52" />

          <div
            className="d-none d-md-flex flex-grow-1 mx-3"
            style={{ maxWidth: 222 }}
          >
            <InputGroup className="w-100">
              <InputGroup.Text>
                <BsSearch />
              </InputGroup.Text>
              <Form.Control type="search" placeholder="Faça sua busca aqui" />
            </InputGroup>
          </div>

          <div className="d-none d-md-flex align-items-center gap-2">
            <small className="me-1 hide-on-1250">
              Siga a CASSI nas redes sociais:
            </small>
            <div className="d-flex align-items-center icons">
              <BsFacebook color="#002D4B" />
              <BsLinkedin color="#002D4B" />
              <BsInstagram color="#002D4B" />
            </div>
          </div>

          <div className="d-none d-md-flex align-items-center gap-2 cursor-pointer">
            <img src={loremIpsumIcon} alt="CASSI" height="30" />
            <span>Lorem Ipsum</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Button
              variant="primary"
              className="btn-azul px-3"
            >
              Fazer login
            </Button>
            <Button
              variant="light"
              className="d-lg-none p-2"
              onClick={handleShow}
            >
              <BsList size={24} />
            </Button>
          </div>
        </Container>
      </div>

      <Navbar bg="white" expand="lg" className="border-top d-none d-lg-flex">
        <Container className="justify-content-center">
          <Nav className="gap-3">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Conheça a CASSI" id="nav-conheca">
              <NavDropdown.Item href="#">Institucional</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Informações financeiras
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Governança corporativa
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Como trabalhamos</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Faça parte da nossa equipe
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Nossos planos" id="nav-planos">
              <NavDropdown.Item href="#">
                Plano CASSI Essencial
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Plano CASSI Família</NavDropdown.Item>
              <NavDropdown.Item href="#">Plano CASSI Vida</NavDropdown.Item>
              <NavDropdown.Item href="#">Quero contratar</NavDropdown.Item>
              <NavDropdown.Item href="#">Plano de Associados</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Já tenho um plano CASSI" id="nav-jatenho">
              <NavDropdown.Item href="#">
                Cobertura do meu plano
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Cronogramas</NavDropdown.Item>
              <NavDropdown.Item href="#">Telemedicina</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CliniCASSI" id="nav-clinicassi">
              <NavDropdown.Item href="#">
                Atenção Primária Saúde
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Localize sua CliniCASSI
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Fale com a CASSI</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <MenuToggle show={show} handleClose={handleClose} />
    </header>
  );
}
