function Home() {
  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "#fdeff2",
        color: "#333",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#c2185b" }}>
        Atenção, Andreia! Mensagem para você.
      </h1>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <ul
          style={{
            listStyleType: "disc",
            textAlign: "left",
            marginBottom: "40px",
            paddingLeft: "20px",
          }}
        >
          <li>
            Atravessei diferentes caminhos para chegar até aqui e te dizer algo
            extremamente importante.
          </li>
          <li>
            Foram necessários alguns protocolos (conjuntos de regras) para
            viabilizar essa comunicação, e como o que vou expressar não precisa
            ser mantido em segredo, utilizei o protocolo{" "}
            <strong style={{ color: "#1565c0" }}>HTTP</strong>.
          </li>
          <li>
            A jornada ocorreu mais ou menos assim: o protocolo{" "}
            <strong style={{ color: "#1565c0" }}>DNS</strong> converteu a URL do
            site em um endereço IP, permitindo encontrar o servidor adequado
            para a página em questão.
          </li>
          <li>
            Após você clicar na URL que te enviei, foi estabelecida uma conexão{" "}
            <strong style={{ color: "#1565c0" }}>TCP</strong> (Protocolo de
            Controle de Transmissão) entre o seu dispositivo (smartphone) e o
            servidor da mensagem.
          </li>
          <li>
            O <strong style={{ color: "#1565c0" }}>TCP</strong> garantiu que a
            mensagem fosse dividida em vários segmentos e enviada de forma
            confiável e na ordem correta.
          </li>
          <li>
            Por sua vez, o protocolo{" "}
            <strong style={{ color: "#1565c0" }}>IP</strong> (Protocolo de
            Internet) roteou esses segmentos de dados, identificando a origem e
            o destino dos mesmos.
          </li>
          <li>
            Na conexão <strong style={{ color: "#1565c0" }}>TCP</strong>, o
            protocolo <strong style={{ color: "#1565c0" }}>HTTP</strong>{" "}
            (Protocolo de Transferência de Hipertexto) solicitou ao servidor a
            página com esta mensagem, e novamente o{" "}
            <strong style={{ color: "#1565c0" }}>TCP</strong> foi utilizado para
            garantir a entrega confiável da mensagem pelo servidor.
          </li>
          <li>
            E, por fim, o <strong style={{ color: "#1565c0" }}>HTTP</strong>{" "}
            transmitiu a página solicitada.
          </li>
          <li>
            Uau, tantos conceitos técnicos! Caso você não tenha compreendido
            completamente, não se preocupe! O mais importante é que você entenda
            o seguinte:
          </li>
        </ul>
      </div>
      <h1 style={{ fontSize: "48px", marginBottom: "10px", color: "#c2185b" }}>
        EU TE AMO, ANDREIA!
      </h1>
      <h2 style={{ fontSize: "24px", marginBottom: "40px", color: "#1565c0" }}>
        Com todo o meu carinho: Ronaldo. Beijos.
      </h2>
    </div>
  );
}

function Teste() {
  console.log("Indentação errada");
}
export default Home;
