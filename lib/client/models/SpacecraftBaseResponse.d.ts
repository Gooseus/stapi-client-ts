import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SpacecraftBase } from './SpacecraftBase';
/**
 * Response object for spacecrafts search
 */
export type SpacecraftBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of spacecrafts matching given criteria
     */
    spacecrafts?: Array<SpacecraftBase>;
};
