// src/pages/Home.jsx
import { Row, Col } from "react-bootstrap";
import CardNotificacao from "../components/ConteudoNIP/CardNotificacao";
import ColunaInformativa from "../components/ConteudoNIP/ColunaInformativa";
import RespostaNip from "../components/ConteudoNIP/RespostaNip";

export default function Home() {
  return (
    <div className="mt-5 lateral-80 bg-f9">
      <Row className="gy-5">
        <Col md={8}>
          <h4 className="fw-bold" style={{ color: "#003057" }}>
            Olá, &lt;nome&gt;
          </h4>
          <p style={{ fontSize: 22 }}>
            Foi realizada a abertura de uma Notificação de Intermediação
            Preliminar (NIP) em seu nome.
          </p>

          <p className="fw-bold mt-4 pb-2 text-blue" style={{ fontSize: 22 }}>
            Dados do notificação
          </p>
          <hr style={{ border: "1px solid ##FCFC1B", width: "100%" }} />

          <CardNotificacao />

          <RespostaNip />
        </Col>
        <ColunaInformativa />
      </Row>
    </div>
  );
}
