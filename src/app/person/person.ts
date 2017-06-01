import { Character } from '../character/character';

export class Person {
    id: number;
    name: string;
    characterClass: string;
    selectedCharacter: Character;
    characters: Character[];
}
