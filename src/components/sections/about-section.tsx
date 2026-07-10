import { Download } from "lucide-react";
import { ButtonLink } from "../ui/button";

export function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-photo" aria-label="Foto de Rafael Pinheiro">
        <span>Foto</span>
      </div>
      <div className="about-copy">
        <span className="eyebrow">Sobre</span>
        <h2>Sobre mim</h2>
        <p>
          Sou Rafael Pinheiro, desenvolvedor full-stack em Brasília. Programo
          desde 2021 e trabalho criando aplicações web de ponta a ponta, do
          entendimento do problema a interfaces, APIs, dados, testes e evolução.
        </p>
        <p>
          Na prática, gosto de aproximar produto e engenharia: transformar
          contexto em especificação, decisão técnica em implementação e validação
          em aprendizado para a próxima iteração.
        </p>
        <div className="trust-points">
          <span>Programando desde 2021</span>
          <span>Engenharia Mecatrônica na UnB</span>
          <span>Full-stack</span>
        </div>
        <ButtonLink href="#" variant="secondary" aria-disabled="true">
          Ver currículo <Download size={16} />
        </ButtonLink>
      </div>
    </section>
  );
}
