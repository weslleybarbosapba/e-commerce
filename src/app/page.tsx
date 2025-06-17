'use client'
import { useState } from "react";
import Memu from "@/components/Menu";
import Footer from "@/components/footer";
import User from "@/components/User";


const Home = () => {

  const [userName, setNameUser] = useState("Weslley");

	return (
		<div>
      <Memu /><br />
      <User name={userName}>
        <p>Este é um conteúdo extra fornecido como Children.</p>
      </User><br />

      <button onClick={() => setNameUser("Márika")}>Alterar</button>
      <h2>Bem-vindo FlexSystem</h2><br />
      <Footer />
    </div>
  )
}

export default Home;