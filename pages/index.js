import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [gameState, setGameState] = useState({
    name: "",
    step: "intro",
    message: "",
  });

  const handleInput = (e, nextStep) => {
    const value = e.target.value.toLowerCase();

    if (nextStep === "name") {
      setGameState({
        name: value,
        step: "firstChoice",
        message: `Welcome, ${value}! Your journey begins now with me.`,
      });
    } else if (nextStep === "firstChoice") {
      if (value === "1") {
        setGameState({
          ...gameState,
          step: "pathChoice",
          message:
            "You set out into the unknown. The path splits into multiple directions. Choose wisely.",
        });
      } else {
        setGameState({
          ...gameState,
          step: "end",
          message: "You chose to rest, but you may have missed your destiny.",
        });
      }
    } else if (nextStep === "pathChoice") {
      if (value === "1") {
        setGameState({
          ...gameState,
          step: "forestRiddle",
          message:
            'You venture into the unknown forest. A whispering voice asks: "I have led elections and inspired millions, a chaiwala from a small state, now ruling the nation. Who am I?"',
        });
      } else if (value === "2") {
        setGameState({
          ...gameState,
          step: "hillPuzzle",
          message:
            'While star gazing. A star has riddle for us to solve: "I am where pictures tell stories, memories are shared, and influencers live. What am I?"',
        });
      } else if (value === "3") {
        setGameState({
          ...gameState,
          step: "riverReflection",
          message:
            "You step into the initial pages of the book. Do you follow the book's path or trust your heart? (yes/no)",
        });
      } else {
        setGameState({
          ...gameState,
          step: "end",
          message: "Invalid choice! The journey ends here.",
        });
      }
    } else if (nextStep === "forestRiddle") {
      if (value === "modi") {
        setGameState({
          ...gameState,
          step: "proposeForest",
          message:
            "Correct! The path reveals itself further into the forest. Tanya, in every leaf and every whisper of the forest, I find a reason to love you.",
        });
      } else {
        setGameState({
          ...gameState,
          message:
            "Incorrect. The trees rustle as if they are disappointed. Try again...",
        });
      }
    } else if (nextStep === "hillPuzzle") {
      if (value === "instagram") {
        setGameState({
          ...gameState,
          step: "proposeHill",
          message:
            "Correct! Tanya, every moment I stargazed it felt like climbing towards my dreams with you by my side.",
        });
      } else {
        setGameState({
          ...gameState,
          message: "Incorrect. But you try again with renewed courage...",
        });
      }
    } else if (nextStep === "riverReflection") {
      if (value === "yes") {
        setGameState({
          ...gameState,
          step: "proposeRiver",
          message:
            "You trust my choice and step into your destiny. Tanya, like the overlapping pages of the book, our journey will be filled with love,strength and words forever.",
        });
      } else {
        setGameState({
          ...gameState,
          step: "end",
          message:
            "You hesitate, but life will always find a way. Reflect and take the plunge.",
        });
      }
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>Magical Journey Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {gameState.step === "intro" && (
          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Welcome to your magical journey game!
            </h1>
            <input
              type="text"
              style={{
                width: "400px",
                height: "40px",
                textAlign: "center",
                display: "block",
                margin: "20px auto",
              }}
              placeholder="Enter your name"
              onKeyDown={(e) => e.key === "Enter" && handleInput(e, "name")}
            />
          </div>
        )}

        {gameState.step !== "intro" && (
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {gameState.message}
          </p>
        )}

        {gameState.step === "firstChoice" && (
          <div>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              1. Explore the mysterious paths ahead.
            </p>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              2. Ignore the letter and head back to rest.
            </p>
            <input
              type="text"
              style={{
                width: "400px",
                height: "40px",
                textAlign: "center",
                display: "block",
                margin: "20px auto",
              }}
              placeholder="Enter your choice (1 or 2)"
              onKeyDown={(e) =>
                e.key === "Enter" && handleInput(e, "firstChoice")
              }
            />
          </div>
        )}

        {gameState.step === "pathChoice" && (
          <div>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              1. Explore the unknown places together.
            </p>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              2. Lay down together in mountains watching the stars.
            </p>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              3. Exchange books with each other.
            </p>
            <input
              type="text"
              style={{
                width: "400px",
                height: "40px",
                textAlign: "center",
                display: "block",
                margin: "20px auto",
              }}
              placeholder="Choose one path (1, 2, or 3)"
              onKeyDown={(e) =>
                e.key === "Enter" && handleInput(e, "pathChoice")
              }
            />
          </div>
        )}

        {(gameState.step === "forestRiddle" ||
          gameState.step === "hillPuzzle") && (
          <input
            type="text"
            style={{
              width: "400px",
              height: "40px",
              textAlign: "center",
              display: "block",
              margin: "20px auto",
            }}
            placeholder="Enter your answer"
            onKeyDown={(e) =>
              e.key === "Enter" && handleInput(e, gameState.step)
            }
          />
        )}

        {gameState.step === "riverReflection" && (
          <input
            type="text"
            style={{
              width: "400px",
              height: "40px",
              textAlign: "center",
              display: "block",
              margin: "20px auto",
            }}
            placeholder="Type 'yes' or 'no'"
            onKeyDown={(e) =>
              e.key === "Enter" && handleInput(e, "riverReflection")
            }
          />
        )}

        {gameState.step === "end" && (
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Thank you for playing!
          </p>
        )}
      </main>
    </div>
  );
}
