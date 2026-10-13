import "./styles.css"
import Image from "next/image";

export default function Home() {
  return (
    <body>
      <header>
        <nav>
          <ul>
            <li><a href="#">Element 1</a></li>
            <li><a href="#">Element 2</a></li>
            <li><a href="#">Etc...</a></li>
          </ul>
        </nav>
        <h1>FitTracketis</h1>
        <h3><a href="#">Log In</a></h3>
      </header>

      <main>
        <section>
          <img src="https://via.placeholder.com/300x200" title="FitTracketis" alt="Logo FitTracketis"></img>
          <p>Texto sobre FitTracketis Bla Bla Bla Lorem ipsum...</p>
        </section>
        <section>Section 2</section>
        <section>Section 3</section>
      </main>

      <footer>Text del footer</footer>
    </body>
  );
}
