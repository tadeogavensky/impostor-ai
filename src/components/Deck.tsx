import { GameCard } from "@/types/card";
import React from "react";
import Card from "./Card";

export const cardSequence: GameCard[] = [
  {
    variant: "preview",
    id: "1",
    playerId: "u01",
    name: "Tadeo",
  },
  {
    variant: "assigned",
    id: "2",
    playerId: "u01",
    name: "Tadeo",
    role: "CIVIL",
    word: "Biblioteca",
  },
  {
    variant: "preview",
    id: "3",
    playerId: "u02",
    name: "Pamela",
  },
  {
    variant: "assigned",
    id: "4",
    playerId: "u02",
    name: "Pamela",
    role: "IMPOSTOR",
    word: null,
  },
  {
    variant: "preview",
    id: "5",
    playerId: "u03",
    name: "Agustín",
  },
  {
    variant: "assigned",
    id: "6",
    playerId: "u03",
    name: "Agustín",
    role: "CIVIL",
    word: "Biblioteca",
  },
];

const Deck = () => {
  return (
    <div className="h-[calc(100vh-3rem)] mt-[4rem] w-screen flex items-center justify-center">
      <Card card={cardSequence[0]} />
    </div>
  );
};

export default Deck;
