import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;

  const numberOfCharacters = text.length;
  const facebookCharactersLeft = 2200 - text.length;
  const instagramCharactersLeft = 280 - text.length;

  const stats = {
    numberOfWords: numberOfWords,
    numberOfCharacters: numberOfCharacters,
    instagramCharactersLeft: instagramCharactersLeft,
    facebookCharactersLeft: facebookCharactersLeft,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
