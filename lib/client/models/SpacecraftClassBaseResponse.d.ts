import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SpacecraftClassBase } from './SpacecraftClassBase';
/**
 * Response object for spacecraft classes search
 */
export type SpacecraftClassBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of spacecraft classes matching given criteria
     */
    spacecraftClasses?: Array<SpacecraftClassBase>;
};
