'use client';
import "./estilos/principalPage.css";


const planes = [
  {
    id: "standard",
    nombre: "Plan estándar",
    descripcion: `
      Empieza a cuidar tu cuerpo y mejora tus hábitos con nuestro plan estándar.
      Accede a una experiencia de entrenamiento pensada para ayudarte a mantenerte
      activo, establecer objetivos y avanzar a tu propio ritmo. Descubre nuevas
      formas de incorporar el ejercicio a tu rutina diaria y trabaja para mejorar
      tu resistencia, fuerza y bienestar general. Este plan es ideal para quienes
      quieren iniciarse en el mundo del fitness, recuperar la motivación y construir
      una rutina saludable. Da el primer paso hacia una vida más activa y descubre
      todo lo que puedes conseguir con constancia, esfuerzo y una actitud positiva.
    `,
    enlace: "/planes/planEstandar/",
  },
  {
    id: "medio",
    nombre: "Plan medio",
    descripcion: `
      Lleva tus entrenamientos al siguiente nivel con nuestro plan medio.
      Diseñado para quienes buscan progresar y conseguir una rutina más completa,
      te ayuda a trabajar diferentes aspectos de tu condición física y a mantener
      la motivación durante el proceso. Organiza tus objetivos, mejora tu
      rendimiento y encuentra el equilibrio entre actividad física y descanso.
      Tanto si ya entrenas habitualmente como si quieres recuperar tu ritmo,
      este plan te ofrece una opción para seguir evolucionando. Supera tus límites,
      establece nuevas metas y convierte el ejercicio en una parte importante
      de tu estilo de vida. Cada entrenamiento es una oportunidad para mejorar.
    `,
    enlace: "/planes/planMedio",
  },
  {
    id: "lujo",
    nombre: "Plan lujo",
    descripcion: `
      Disfruta de una experiencia fitness más completa con nuestro plan lujo.
      Pensado para quienes desean dar prioridad a sus objetivos deportivos,
      ofrece una propuesta orientada a mejorar la planificación, la constancia
      y el seguimiento de tu progreso. Dedica tiempo a trabajar tu fuerza,
      resistencia y bienestar con una visión global de tu entrenamiento.
      Encuentra nuevas motivaciones, establece objetivos ambiciosos y descubre
      cómo pequeños avances pueden convertirse en grandes resultados.
      Si buscas llevar tu compromiso con el fitness más lejos y mantener
      un estilo de vida activo, este plan está pensado para acompañarte
      en tu camino hacia una mejor versión de ti mismo.
    `,
    enlace: "/planes/planLujo",
  },
];


export default function Home() {
  return (
    <>
      <header>
        <nav className="barraNav" aria-label="Navegación principal">
          <ul className="navLista">
            <li className="grupoPlanes">
              <a href="#standard" className="butNav">Plan estándar</a>
              <a href="#medio" className="butNav">Plan medio</a>
              <a href="#lujo" className="butNav">Plan lujo</a>
            </li>
            <li>
              <a href="/login" className="butNav login">Log In</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="planAnuncio">
          <article className="anuncio">
            <h1 className="tituloAnuncio">FitTracketis</h1>
            <p className="contenidoAnuncio">
  escubre FitTracketis, tu espacio para cuidar tu cuerpo y mejorar tu
  bienestar a través del ejercicio. Encuentra nuevas motivaciones para
  mantenerte activo, establece tus objetivos y trabaja para alcanzarlos
  a tu propio ritmo. Tanto si estás empezando a entrenar como si buscas
  mejorar tu rendimiento, aquí podrás descubrir diferentes opciones para
  pacompañarte en tu camino hacia una vida más saludable. La constancia
  es la clave del progreso, y cada pequeño esfuerzo cuenta. Empieza hoy,
  supera tus propios límites y transforma tu forma de entender el fitness.
            </p>
          </article>
        </section>
        <section className="menuPlanes" aria-labelledby="tituloPlanes">
          <h2 id="tituloPlanes" className="tituloPlanes">Nuestros planes</h2>
          <ul className="listaPlanes">
            {planes.map((plan) => (
              <li key={plan.id} id={plan.id}>
                <article className="plan">
                  <h3>{plan.nombre}</h3>
                  <p>{plan.descripcion}</p>
                  <a href={plan.enlace} className="enlacePlan">Más información</a>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <section className="infoFitTracketis" aria-labelledby="tituloNosotros">
          <article className="contenidoInfoFitTracketis">
            <h2 id="tituloNosotros">Sobre nosotros</h2>
            <p>
      En FitTracketis creemos que el ejercicio es mucho más que una
      actividad física es una forma de mejorar nuestra calidad de vida.
      Nuestro objetivo es acercar el mundo del fitness a personas con
      disdferentes niveles de experiencia, ayudándolas a encontrar la
      motivación necesaria para mantenerse activas y desarrollar hábitos
      saludables. Queremos que cada persona pueda avanzar a su ritmo,
      descubrir sus capacidades y disfrutar del proceso de superación.
            </p>
            <p>
      Por eso, presentamos diferentes planes pensados para adaptarse a
      distintas necesidades y objetivos. Queremos ayudarte a mantener la
      constancia, organizar tus entrenamientos y valorar cada avance,
      independientemente de tu punto de partida. Sabemos que cada camino
      es diferente y que los resultados requieren tiempo, esfuerzo y
      dedicación. En FitTracketis apostamos por un estilo de vida activo,
      equilibrado y sostenible. Nuestro propósito es inspirarte a dar el
      siguiente paso y acompañarte en tu evolución hacia una vida más
      saludable, fuerte y llena de energía.
            </p>
          </article>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 FitTracketis. Todos los derechos reservados.</p>
        <nav className="navFooter" aria-label="Navegación del pie de página">
          <a href="/">Inicio</a>
          <a href="/contacto">Contacto</a>
          <a href="/privacidad">Política de privacidad</a></nav>
        <p>Síguenos en redes sociales</p>
        <div className="redesSociales">
          <a href="https://www.instagram.com/basetisbcn/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FBasetisBCN%2F" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </footer>
    </>
  );
}

