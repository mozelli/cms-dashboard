import './app.css';
import imgBackGround from './images/background-home.png';
import logo from './images/logo-removebg.png';

function App() {

  return (
    <div className="app">
      
      <main className="main">
          <header className="header">
            <div className="brand">
              <img src={ logo } alt="Logo" />
              <h1>mozelli</h1>
            </div>
            <div className="login">
              <ul>
                <li>
                  Entrar
                </li>
                <li className="divider">
                  |
                </li>
                <li>
                  Cadastrar
                </li>
              </ul>
            </div>
          </header>
          <section className='section'>
            <div className="left">
              <h2>Crie artigos fantásticos!</h2>
              <p className="describe">
                Mozelli CMS é um gerenciador de conteúdo<br /> que permite você criar publicações<br /> para seu blog em minutos.
              </p>
              <button className="begain">
                Começar agora!
              </button>
            </div>
            <div className="right">
              <img src={ imgBackGround } alt="Crie artigos fantásticos para seu blog!" />
            </div>
          </section>
      </main>
    </div>
  )
}

export default App
