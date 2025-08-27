export default function Contact() {
  return (
    <section>
      <h2>Entre em Contato</h2>
      <p>Informações de Contato</p>
      <p>Endereço do Consultório</p>
      <p>Horário de Atendimento</p>
      <p>Apoio em Crises</p>
      <form>
        <input placeholder="Nome Completo" />
        <input placeholder="E-mail" />
        <input placeholder="Telefone" />
        <textarea placeholder="Mensagem" />
        <button>Enviar</button>
      </form>
      <p>Obrigado! Sua mensagem foi enviada com sucesso.</p>
    </section>
  );
}
