import type { MedicalConditionBase } from './MedicalConditionBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for medical conditions search
 */
export type MedicalConditionBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of medical conditions matching given criteria
     */
    medicalConditions?: Array<MedicalConditionBase>;
};
