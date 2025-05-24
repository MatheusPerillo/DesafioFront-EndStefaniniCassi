import { Col } from "react-bootstrap";
import cardImage from "../../assets/unsplash_mMjmfdgNSm8.png";

export default function ColunaInformativa() {
  return (
    <Col md={4} className="d-flex justify-content-end mb-5">
      <div style={{ width: 410 }}>
        <h5 className="fw-bold text-blue">
          Por que é importante que você responda <br /> esse questionário?
        </h5>
        <img
          src={cardImage}
          alt="Atendente"
          className="img-fluid rounded mt-3 mb-3"
          height={231}
          width={411}
        />
        <p className="mb-0" style={{ opacity: 0.9, fontSize: 16 }}>
          Na CASSI, buscamos aprimorar continuamente nossos <br /> serviços e
          métodos de atendimento. Nosso objetivo é <br /> acelerar o processo de
          análise das suas solicitações e <br /> torná-lo mais eficiente. Ao
          responder ao questionário, <br /> você nos ajuda a alcançar maior
          assertividade e rapidez <br /> no atendimento às suas necessidades.
        </p>
      </div>
    </Col>
  );
}
