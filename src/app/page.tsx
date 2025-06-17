import Memu from "@/components/Menu";
import Footer from "@/components/footer";
import User from "@/components/User";

const Home = () => {

  const userName="Weslley";

  return (
    <div>
      <Memu /><br />
      <User name={userName}>
        <p>Este é um conteúdo extra fornecido como Children.</p>
      </User><br />
      <h2>Bem-vindo FlexSystem</h2><br />
      <Footer />
    </div>
  )
}

export default Home;