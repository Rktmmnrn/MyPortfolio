import './styleHN.css'
// import background from './assets/png/Background.png'
import Logo from '/Logo.svg'

function app() {
  const color1 = '#800000';

  return (
    <>
    {/* <figure className='background'>
      <img src={background} alt="background_image" />
    </figure> */}

    <header>
      <span>portfolio</span>
      <nav>
        <a href="">éxperiences</a>
        <a href="">à propos</a>
        <a href="">contact</a>
      </nav>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
    </header>

    <section className="hero">
      <h1>fanomezan<span style={{color: color1}}>iavo</span></h1>
      <h2 style={{color:color1}}>développeur web junior front-end</h2>
    </section>
    </>
  )
}

export default app