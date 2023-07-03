/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CharacterHeader } from './CharacterHeader';

/**
 * Relation between characters
 */
export type CharacterRelation = {
    /**
     * Relation type
     */
    type?: string;
    source?: CharacterHeader;
    target?: CharacterHeader;
};

