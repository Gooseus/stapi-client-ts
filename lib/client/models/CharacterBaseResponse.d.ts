import type { CharacterBase } from './CharacterBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for characters search
 */
export type CharacterBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of characters matching given criteria
     */
    characters?: Array<CharacterBase>;
};
