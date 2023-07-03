/**
 * Full literature, returned when queried using UID
 */
export type LiteratureFull = {
    /**
     * Literature unique ID
     */
    uid: string;
    /**
     * Literature title
     */
    title: string;
    /**
     * Whether it's of earthly origin
     */
    earthlyOrigin?: boolean;
    /**
     * Whether it's a Shakespearean work
     */
    shakespeareanWork?: boolean;
    /**
     * Whether it's a report
     */
    report?: boolean;
    /**
     * Whether it's a scientific literature
     */
    scientificLiterature?: boolean;
    /**
     * Whether it's a technical manual
     */
    technicalManual?: boolean;
    /**
     * Whether it's a religious literature
     */
    religiousLiterature?: boolean;
};
