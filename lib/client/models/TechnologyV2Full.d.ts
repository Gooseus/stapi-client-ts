/**
 * Full technology, returned when queried using UID (V2)
 */
export type TechnologyV2Full = {
    /**
     * Technology unique ID
     */
    uid: string;
    /**
     * Technology name
     */
    name: string;
    /**
     * Whether it's a Borg technology
     */
    borgTechnology?: boolean;
    /**
     * Whether it's a Borg component
     */
    borgComponent?: boolean;
    /**
     * Whether it's a communications technology
     */
    communicationsTechnology?: boolean;
    /**
     * Whether it's a computer technology
     */
    computerTechnology?: boolean;
    /**
     * Whether it's a technology related to computer programming
     */
    computerProgramming?: boolean;
    /**
     * Whether it's a subroutine
     */
    subroutine?: boolean;
    /**
     * Whether it's a database
     */
    database?: boolean;
    /**
     * Whether it's a energy technology
     */
    energyTechnology?: boolean;
    /**
     * Whether it's a fictional technology
     */
    fictionalTechnology?: boolean;
    /**
     * Whether it's a holographic technology
     */
    holographicTechnology?: boolean;
    /**
     * Whether it's a identification technology
     */
    identificationTechnology?: boolean;
    /**
     * Whether it's a life support technology
     */
    lifeSupportTechnology?: boolean;
    /**
     * Whether it's a sensor technology
     */
    sensorTechnology?: boolean;
    /**
     * Whether it's a shield technology
     */
    shieldTechnology?: boolean;
    /**
     * Whether it's a security technology
     */
    securityTechnology?: boolean;
    /**
     * Whether it's a propulsion technology
     */
    propulsionTechnology?: boolean;
    /**
     * Whether it's a spacecraft component
     */
    spacecraftComponent?: boolean;
    /**
     * Whether it's a warp technology
     */
    warpTechnology?: boolean;
    /**
     * Whether it's a transwarp technology
     */
    transwarpTechnology?: boolean;
    /**
     * Whether it's a time travel technology
     */
    timeTravelTechnology?: boolean;
    /**
     * Whether it's a military technology
     */
    militaryTechnology?: boolean;
    /**
     * Whether it's a victual technology
     */
    victualTechnology?: boolean;
    /**
     * Whether it's a tool
     */
    tool?: boolean;
    /**
     * Whether it's a culinary tool
     */
    culinaryTool?: boolean;
    /**
     * Whether it's a engineering tool
     */
    engineeringTool?: boolean;
    /**
     * Whether it's a household tool
     */
    householdTool?: boolean;
    /**
     * Whether it's a medical equipment
     */
    medicalEquipment?: boolean;
    /**
     * Whether it's a transporter technology
     */
    transporterTechnology?: boolean;
    /**
     * Whether it's a transportation technology
     */
    transportationTechnology?: boolean;
    /**
     * Whether it's a weapon component
     */
    weaponComponent?: boolean;
    /**
     * Whether it's an artificial lifeform component
     */
    artificialLifeformComponent?: boolean;
};
