/**
 * Full medical condition, returned when queried using UID
 */
export type MedicalConditionFull = {
    /**
     * Medical condition unique ID
     */
    uid: string;
    /**
     * Medical condition name
     */
    name: string;
    /**
     * Whether it's a psychological condition
     */
    psychologicalCondition?: boolean;
};
