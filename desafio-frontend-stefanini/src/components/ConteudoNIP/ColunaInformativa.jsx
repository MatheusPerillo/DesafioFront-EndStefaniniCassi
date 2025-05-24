import { Col } from "react-bootstrap";
import cardImage from "../../assets/unsplash_mMjmfdgNSm8.png";

export default function ColunaInformativa() {
  return (
    <Col
      md={4}
      className="d-flex justify-content-md-end justify-content-center mb-5"
    >
      <div className="bloco-informativo" style={{ width: 445 }}>
        <h5 className="fw-bold text-blue texto-informativo">
          Por que é importante que você responda esse questionário?
        </h5>
        <img
          src={cardImage}
          alt="Atendente"
          className="img-fluid rounded mt-3 mb-3 imagem-informativa"
          width={445}
        />
        <p
          className="mb-0 texto-informativo"
          style={{ opacity: 0.9, fontSize: 16, textAlign: "left" }}
        >
          Na CASSI, buscamos aprimorar continuamente nossos serviços e métodos
          de atendimento. Nosso objetivo é acelerar o processo de análise das
          suas solicitações e torná-lo mais eficiente. Ao responder ao
          questionário, você nos ajuda a alcançar maior assertividade e rapidez
          no atendimento às suas necessidades.
        </p>
      </div>
    </Col>
  );
}
