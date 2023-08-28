import React, { useState } from 'react';

import 'styles/app.css';
import logoIcon from 'assets/logo-icon.png';
import logoText from 'assets/logo-text.png';
import { Button } from 'components';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className='app'>
      <header>
        <img src={logoIcon} alt="Poliedro" />
        <img src={logoText} alt="Sistema de Ensino" />
      </header>

      <section>
        <h1>Projeto padrão para desenvolvimento <span>Front-end 🚀</span></h1>

        <div>
          <Button onClick={() => setCount(prev => prev + 1)}>
            {count} clicks
          </Button>
        </div>
      </section>
    </main>
  );
};
