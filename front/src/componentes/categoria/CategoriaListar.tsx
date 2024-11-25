import { useEffect, useState } from 'react';
import { Categoria } from '../../models/Categoria';

const CategoriaListar = () => {
    const [categoria, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        // Função para buscar os usuários
        fetchCategorias();
      }, []);
    
      function fetchUsers() {
        fetch("http://localhost:5071/user")
          .then((response) => response.json())
          .then((data) => {
            setCategorias(data);
          })
          .catch((error) => console.error("Error fetching users:", error));
      }
}

return (
  <div>
    <h2>Lista de Usuários</h2>
    <table cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Celular</th>
          <th>CPF</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.cellphone}</td>
            <td>{user.taxNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

