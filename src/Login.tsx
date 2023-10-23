import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Simulando um banco de dados local
const users = [
  { username: 'Luisao', password: '1234' },
  // Adicione mais usuários conforme necessário
];

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    // Verifica se o usuário e a senha correspondem a um registro no banco de dados local
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      // Autenticação bem-sucedida
      setError(null);
      // Redirecione ou realize outra ação após o login
      history.push('/success');
    } else {
      setError('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Nome de usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
