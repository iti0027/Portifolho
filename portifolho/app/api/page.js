"use client";
import styles from "./page.module.css"
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useState } from "react";

export default function API() {
  const [getDog, setGetDog] = useState("");
  const [nameDog, setNameDog] = useState("");

  const dogBreeds = ["affenpinscher","african","airedale","akita","appenzeller","australian/kelpie","australian/shepherd","basenji","beagle","bluetick","borzoi","bouvier","boxer","briard","bulldog/boston","bulldog/english",
  ];

  const getAPI = async () => {
    const randomIndex = Math.floor(Math.random() * dogBreeds.length);
    const breed = dogBreeds[randomIndex];

    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      const data = await response.json();
      setGetDog(data.message);
      setNameDog(breed)
    } catch (error) {
      console.error("Erro ao buscar imagem", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <main className={styles.main}>
        <div>
          {getDog && <img src={getDog} alt="Dog Aleatório" width={400}  height={400}/>}
          {nameDog && <h1 className={styles.dogName}>{nameDog}</h1>}
        </div>
        <button onClick={getAPI}>Gerar um Cachorro</button>
      </main>
      <Footer />
    </div>
  );
}
