import Footer from "./components/Footer";
import Head from "./components/Head";
import Storage from "./components/Storage";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Head />
        <Storage />
      </main>
      <Footer />
    </>
  );
}

export default App;
