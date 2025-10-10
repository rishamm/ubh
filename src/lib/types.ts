export type FamilyMember = 'Mom' | 'Dad' | 'Child';
export type ClothingStyle = 'Casual' | 'Formal' | 'Sporty' | 'Bohemian';

export type ClothingItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  familyMember: FamilyMember;
  style: ClothingStyle;
  color: string;
  sizes: string[];
};

export type Collection = {
  id: string;
  name:string;
  description: string;
  image: {
    id: string;
  };
  itemIds: string[];
};
