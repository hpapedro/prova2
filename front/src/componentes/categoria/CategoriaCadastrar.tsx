import { useState } from 'react';

// Definição da interface Categoria
interface Categoria {
  nome: string;
  descricao: string;
}

function CategoriaCadastrar() {
  const [nome, setNome] = useState<string>("");

  // Função para enviar a categoria para a API
  function enviarCategoria(event: React.FormEvent) {
    event.preventDefault();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const Categoria = {
      nome: nome,
    };

    // Requisição para o endpoint de cadastro de categoria
    fetch("http://localhost:5000/api/categoria/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Categoria),
    })
    
      .then((resposta) => resposta.json())
      .then((categoriaCadastrada) => {
        console.log(categoriaCadastrada); // Exibe a resposta da categoria cadastrada
        alert("Categoria cadastrada com sucesso!");
      })
      .catch((erro) => {
        console.error("Erro ao cadastrar categoria", erro);
        alert("Erro ao cadastrar categoria.");
      });
  }
}
  return (
    <div>
      <h2>Cadastrar Categoria</h2>
      <form onSubmit={enviarCategoria} id="form-cadastro">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(event) => setNome(event.target.value)}
            value={nome}
          />
        </div>

        <button type="submit">Cadastrar Categoria</button>
      </form>
    </div>
  );
}

export default CategoriaCadastrar;
