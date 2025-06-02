"use client";

import { useState } from "react";
import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Game() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState([]);
  const [userAttempts, setUserAttempts] = useState([]);
  const [chances, setChances] = useState(0);
  const [points, setPoints] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const MAX_ATTEMPTS = 10;
  const PASSWORD_LENGTH = 5;

  function generatePassword() {
    const generated = new Set();
    while (generated.size < PASSWORD_LENGTH) {
      const digit = Math.floor(Math.random() * 10).toString();
      generated.add(digit);
    }

    setPassword(Array.from(generated));
    resetGameState();
    setGameStarted(true);
  }

  function resetGameState() {
    setUserAttempts([]);
    setInputValue("");
    setChances(0);
    setPoints(0);
  }

  function revealPassword() {
    if (!gameStarted) return;

    alert(`A senha era: ${password.join("")}`);
    endGame();
  }

  function endGame() {
    setGameStarted(false);
  }

  function handleInputChange(e) {
    const cleanValue = e.target.value.replace(/\D/g, "");
    if (cleanValue.length <= PASSWORD_LENGTH) {
      setInputValue(cleanValue);
    }
  }

  function handleSubmit() {
    if (!gameStarted || inputValue.length !== PASSWORD_LENGTH) {
      alert("Digite exatamente 5 números antes de enviar.");
      return;
    }

    const attempt = inputValue.split("");
    setUserAttempts((prev) => [...prev, attempt]);

    const currentPoints = attempt.reduce(
      (acc, digit, index) => (digit === password[index] ? acc + 1 : acc),
      0
    );

    setPoints(currentPoints);
    setChances((prev) => prev + 1);
    setInputValue("");

    if (currentPoints === PASSWORD_LENGTH || chances + 1 === MAX_ATTEMPTS) {
      endGame();
    }
  }

  function getDigitStyle(digit, index) {
    if (digit === password[index]) return styles.correctPosition;
    if (password.includes(digit)) return styles.incorretPosition;
    return styles.extingueDaFaceDaTerra;
  }

  const isGameOver = points === PASSWORD_LENGTH || chances === MAX_ATTEMPTS;

  return (
    <div className={`${styles.divContain} container`}>
      <Header />

      <main className={styles.main}>
        <section className={styles.section}>
          {isGameOver && (
            <h1 className={styles.title}>
              {points === PASSWORD_LENGTH ? "Você Ganhou 🎉" : "Você Perdeu 😢"}
            </h1>
          )}

          <section className={styles.passwordSection}>
            {userAttempts.map((attempt, i) => (
              <div key={i} className={styles.divPassword}>
                {attempt.map((digit, index) => (
                  <p key={index} className={getDigitStyle(digit, index)}>
                    {digit}
                  </p>
                ))}
              </div>
            ))}
          </section>

          <section className={styles.sectionInput}>
            <input
              type="text"
              placeholder="Digite 5 números"
              value={inputValue}
              onChange={handleInputChange}
              className={styles.input}
              maxLength={5}
              disabled={!gameStarted || isGameOver}
            />

            <div className={styles.divButtons}>
              <button
                onClick={handleSubmit}
                disabled={!gameStarted || isGameOver}
              >
                Enviar senha
              </button>

              <button onClick={generatePassword}>
                Gerar nova senha
              </button>

              <button
                onClick={revealPassword}
                disabled={!gameStarted || isGameOver}
              >
                Mostrar senha
              </button>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
