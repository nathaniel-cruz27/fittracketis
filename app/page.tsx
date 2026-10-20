import "./principalPage.css"

export default function Home() {
  return (
    <body>
      <header>
          <nav role="Barra de navegacion con loggin" className="barraNav">
            <ul className="navLista">
              <li className="grupoPlanes">
                <a href="#"  className ="butNav">Plan standart</a>
                <a href="#"  className ="butNav">Plan midlle</a>
                <a href="#"  className ="butNav">Plan luxury</a>
              </li>
              <li><a href="#" className ="butNav login">Log In</a></li>
            </ul>
          </nav>
      </header>
      <main aria-label="Contenido principal de la pagina">
        <section role="Plan de anuncio" className="planAnuncio">
            <article className="anuncio">
              <h1>FitTracketis</h1>
              <p>blablalblabla bla bla blab la bla bla bla 
                blablalmadoiadidsadaspojasjpodpojsapojdsaoj
                daposdjapodjaposdjaodjapsodjapsdjapodjaposdjpo
                aosdjapdojapodjaspodjsadjapsodjapodjapodjpoajd
                aosdjposajdpaojdpoajdpoajdpoajdpojsadposajdoajdpo
                posdjaposdjapodjajdpoajdpoajdpoajdpojapodjaspodj
                blablalblabla bla bla blab la bla bla bla 
                blablalmadoiadidsadaspojasjpodpojsapojdsaoj
                daposdjapodjaposdjaodjapsodjapsdjapodjaposdjpo
                aosdjapdojapodjaspodjsadjapsodjapodjapodjpoajd
                aosdjposajdpaojdpoajdpoajdpoajdpojsadposajdoajdpo
                posdjaposdjapodjajdpoajdpoajdpoajdpojapodjaspodj
              </p>
            </article>
        </section>
        <section role="Menu de planes" className="menuPlanes">
            <ul className="listaPlanes">
              <li>
                <article aria-label="Informacion breve sobre plan estandar" className="plan">
                  <h2>Plan Standar</h2>
                  <p>  aosdjapdojapodjaspodjsadjapsodjapodjapodjpoajd
                aosdjposajdpaojdpoajdpoajdpoajdpojsadposajdoajdpo
                posdjaposdjapodjajdpoajdpoajdpoajdpojapodjaspodj
                blablalblabla bla bla blab la bla bla bla 
                blablalmadoiadidsadaspojasjpodpojsapojdsaoj
                daposdjapodjaposdjaodjapsodjapsdjapodjaposdjpo
                aosdjapdojapodjaspodjsadjapsodjapodjapodjpoajd
                aosdjposajdpaojdpoajdpoajdpoajdpojsadposajdoajdpo
                posdjaposdjapodjajdpoajdpoajdpoajdpojapodjaspodj</p>
                  <a href="#" role="Menu de plan estandar">Etc...</a>
                </article>
              </li>
              <li>
                <article aria-label="Informacion breve sobre plan medio" className="plan">
                  <h2>Plan medio</h2>
                  <p>  aosdjapdojapodjaspodjsadjapsodjapodjapodjpoajd
                aosdjposajdpaojdpoajdpoajdpoajdpojsadposajdoajdpo
                posdjaposdjapodjajdpoajdpoajdpoajdpojapodjaspodj
                blablalblabla bla bla blab la bla bla bla 
                blablalmadoiadidsadaspojasjpodpojsapojdsaoj
                daposdjapodjaposdjaodjapsodjapsdjapodjaposdjpo
                aosdjapdojapodjaspodjsadjapsodjapodjapodjpoajd
                aosdjposajdpaojdpoajdpoajdpoajdpojsadposajdoajdpo
                posdjaposdjapodjajdpoajdpoajdpoajdpojapodjaspodj</p>
                  <a href="#" role="Menu de plan lujo">Etc...</a>
                </article>
              </li>
              <li>
                <article aria-label="Informacion breve sobre plan lujo" className="plan">
                  <h2>Plan lujo</h2>
                  <p>  aosdjapdojapodjaspodjsadjapsodjapodjapodjpoajd
                aosdjposajdpaojdpoajdpoajdpoajdpojsadposajdoajdpo
                posdjaposdjapodjajdpoajdpoajdpoajdpojapodjaspodj
                blablalblabla bla bla blab la bla bla bla 
                blablalmadoiadidsadaspojasjpodpojsapojdsaoj
                daposdjapodjaposdjaodjapsodjapsdjapodjaposdjpo
                aosdjapdojapodjaspodjsadjapsodjapodjapodjpoajd
                aosdjposajdpaojdpoajdpoajdpoajdpojsadposajdoajdpo
                posdjaposdjapodjajdpoajdpoajdpoajdpojapodjaspodj</p>
                  <a href="#" role="Menu de plan lujo">Etc...</a>
                </article>
              </li>
            </ul>
        </section>
        <section aria-label="Informacion sobre FitTracketis" className = "infoFitTracketis">
          <h2>Sobre nosotros</h2>
          <p></p>
        </section>
      </main>
      <footer aria-label="Info de contacto y opciones para volver">
         <p>&copy; 2026 Mi Web. Todos los derechos reservados.</p>
        <nav aria-label="barra de navegacion para volver">
          <a href="index.html" role="volver a inicio">Inicio</a>
          <a href="contacto.html" role="volver a contactos">Contacto</a>
          <a href="privacidad.html" role="ver politica de privacidad">Política de privacidad</a>
        </nav>
        <p>Síguenos en redes sociales</p>
        <a href="https://instagram.com" role="Ir a instagram de FitTracketis">Instagram</a>
        <a href="https://facebook.com" role="Ir a Facebook de FitTracketis">Facebook</a>
      </footer>
    </body>
  );
}
