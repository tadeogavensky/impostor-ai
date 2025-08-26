export type Role = "CIVIL" | "IMPOSTOR";

export interface CardPreview {
  variant: "preview";
  id: string;
  playerId: string;
  name?: string;
}

export interface CardAssigned {
  variant: "assigned";
  id: string;
  playerId: string;
  name?: string;
  role: Role;
  word: string | null;       
}

export type GameCard = CardPreview | CardAssigned;
