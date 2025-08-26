import { CardAssigned, CardPreview, GameCard } from "@/types/card";
import React from "react";
import spy from "@/app/assets/spy.svg";
import farmer from "@/app/assets/farmer.svg";
import Image from "next/image";

const Card: React.FC<{ card: GameCard }> = ({ card }) => {
  const renderCard = () => {
    switch (card.variant) {
      case "preview":
        return <PreviewCard card={card} />;
      case "assigned":
        return <AssignedCard card={card} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[400px] h-full">
      {renderCard()}
    </div>
  );
};

const PreviewCard = ({ card }: { card: CardPreview }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-[18px] border-4 border-gray-400 gap-1">
      <p className="text-gray-400 font-bold">{card.name}</p>
      <p className="text-gray-400 font-bold">Toca para ver tu rol.</p>
    </div>
  );
};

const AssignedCard = ({ card }: { card: CardAssigned }) => {
  const isImpostor = card.role === "IMPOSTOR";
  return (
    <div
      className={` flex flex-col items-center justify-center gap-8
    ${isImpostor ? "border-primary border-4" : "border-tertiary border-4"}
    p-4 rounded-[18px] justify-between text-center
  `}
    >
      <Image
        height={300}
        src={isImpostor ? spy : farmer}
        alt={isImpostor ? "Spy" : "Farmer"}
      />

      <p className="text-3xl">{isImpostor ? "Sos un espía" : card.word}</p>

      <div className="flex flex-col items-center gap-1">
        {isImpostor ? (
          <p className="text-xl">Trata de no llamar la atención.</p>
        ) : (
          <p className="text-xl">
            Todos los jugadores excepto el espía conoce esta palabra.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
