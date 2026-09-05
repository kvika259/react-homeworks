const Header = () => {
  return <header>homework-05</header>
}
const MainContent = () => {
  return (
    <main>
      Основная область страницы <Section />
    </main>
  )
}

const Section = () => {
  return (
    <section>
      <h3>Заголовок секции</h3>
      <p>Первый абзац статического текста.</p>
      <p>Второй абзац статического текста.</p>
    </section>
  )
}

const Footer = () => {
  return <footer>© 2026 Мой сайт. Все права защищены.</footer>
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
