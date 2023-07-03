import type { CharacterBase } from './CharacterBase';
/**
 * Full title, returned when queried using UID
 */
export type TitleFull = {
    /**
     * Title unique ID
     */
    uid: string;
    /**
     * Title name
     */
    name: string;
    /**
     * Whether it's a military rank
     */
    militaryRank?: boolean;
    /**
     * Whether it's a fleet rank
     */
    fleetRank?: boolean;
    /**
     * Whether it's a religious title
     */
    religiousTitle?: boolean;
    /**
     * Whether it's a position
     */
    position?: boolean;
    /**
     * Whether this title is from mirror universe
     */
    mirror?: boolean;
    /**
     * Characters that holds this title
     */
    characters?: Array<CharacterBase>;
};
