import Image from 'next/image'
import './Header.comp.css'

export const Header = () => (
  <header>
    <div className="headerconteudo">
      <Image src="/riot.svg" width={52} height={56} alt="Logo Riot" />
      <span />
      <Image src="/vava.svg" width={42} height={46} alt="Logo vava" />

      <nav>
        <a href="">Inicio</a>
        <a href="">Agentes</a>
      </nav>
    </div>
  </header>
)
