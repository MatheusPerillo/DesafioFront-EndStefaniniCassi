import { Row, Col } from "react-bootstrap";
import logo from "../../assets/web-white-logo-cassi.png";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-footer text-white py-5">
      <div className="lateral-80">
        <div className="d-flex justify-content-between align-items-center">
          <img src={logo} alt="CASSI" height="52" />
          <div className="d-flex gap-3">
            <BsFacebook size={18} />
            <BsLinkedin size={18} />
            <BsInstagram size={18} />
          </div>
        </div>

        <hr style={{ border: "1px solid #FCFC1B", width: "100%" }} />

        <Row className="d-flex justify-content-between mt-4">
          <Col >
            <h5>
              <a href="#" className="text-white text-decoration-none">
                <strong>Home</strong>
              </a>
            </h5>
          </Col>

          <Col >
            <h5>
              <a href="#" className="text-white">
                <strong>Conheça a CASSI</strong>
              </a>
            </h5>
            <ul
              className="list-unstyled"
              style={{ fontSize: 14, marginTop: 13 }}
            >
              <li>Institucional</li>
              <li>Informações financeiras</li>
              <li>Governança corporativa</li>
              <li>Como trabalhamos</li>
              <li>Faça parte da nossa equipe</li>
            </ul>
          </Col>

          <Col >
            <h5>
              <a href="#" className="text-white ">
                <strong>Nossos Planos</strong>
              </a>
            </h5>
            <ul
              className="list-unstyled"
              style={{ fontSize: 14, marginTop: 13 }}
            >
              <li>Plano CASSI Essencial</li>
              <li>Plano CASSI Família</li>
              <li>Plano CASSI Vida</li>
              <li>Quero contratar</li>
              <li>Plano de Associados</li>
            </ul>
          </Col>

          <Col >
            <h5>
              <a href="#" className="text-white ">
                <strong>Já tenho um plano CASSI</strong>
              </a>
            </h5>
            <ul
              className="list-unstyled"
              style={{ fontSize: 14, marginTop: 13 }}
            >
              <li>Cobertura do meu plano</li>
              <li>Cronogramas</li>
              <li>Telemedicina</li>
            </ul>
          </Col>

          <Col >
            <h5>
              <a href="#" className="text-white ">
                <strong>CliniCASSI</strong>
              </a>
            </h5>
            <ul
              className="list-unstyled"
              style={{ fontSize: 14, marginTop: 13 }}
            >
              <li>Atenção Primária Saúde</li>
              <li>Localize sua CliniCASSI</li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
