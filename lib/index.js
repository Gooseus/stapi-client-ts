import { AnimalService, AstronomicalObjectService, BookCollectionService, BookSeriesService, BookService, CharacterService, ComicCollectionService, ComicSeriesService, ComicStripService, CompanyService, ConflictService, DataVersionService, ElementService, EpisodeService, FoodService, LiteratureService, LocationService, MagazineSeriesService, MagazineService, MaterialService, MedicalConditionService, MovieService, OccupationService, OrganizationService, PerformerService, SeasonService, SeriesService, SoundtrackService, SpacecraftClassService, SpacecraftService, SpeciesService, StaffService, TechnologyService, TitleService, TradingCardDeckService, TradingCardService, TradingCardSetService, VideoGameService, VideoReleaseService, WeaponService, } from "./client";
// Animal API
async function searchAnimals(page, size, sort, formData) {
    return AnimalService.v1SearchAnimals(page, size, sort, formData).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        const { animals, ...rest } = response;
        return { ...rest, items: animals };
    });
}
async function pageAnimals(page, size) {
    return AnimalService.v1PageAnimals(page, size).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        const { animals, ...rest } = response;
        return { ...rest, items: animals };
    });
}
async function getAnimal(uid) {
    return AnimalService.v1GetAnimal(uid)
        .then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.animal === undefined) {
            return {
                status: 404,
                error: true,
                message: "No animal found.",
            };
        }
        return response.animal ?? {};
    })
        .catch((error) => {
        return error;
    });
}
// Astronomical Object API
async function searchAstronomicalObjects(page, size, sort, formData) {
    return AstronomicalObjectService.v2SearchAstronomicalObjects(page, size, sort, formData).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        const { astronomicalObjects, ...rest } = response;
        return {
            ...rest,
            items: astronomicalObjects,
        };
    });
}
async function pageAstronomicalObjects(page, size) {
    return AstronomicalObjectService.v2PageAstronomicalObjects(page, size).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        const { astronomicalObjects, ...rest } = response;
        return {
            ...rest,
            items: astronomicalObjects,
        };
    });
}
async function getAstronomicalObject(uid) {
    return AstronomicalObjectService.v2GetAstronomicalObject(uid)
        .then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.astronomicalObject ===
            undefined) {
            return {
                status: 404,
                error: true,
                message: "No astronomical object found.",
            };
        }
        return (response.astronomicalObject ?? {});
    })
        .catch((error) => {
        return error;
    });
}
// Book Collection API
async function searchBookCollections(page, size, sort, formData) {
    return BookCollectionService.v1SearchBookCollections(page, size, sort, formData);
}
async function pageBookCollections(page, size) {
    return BookCollectionService.v1PageBookCollections(page, size);
}
async function getBookCollection(uid) {
    return BookCollectionService.v1GetBookCollection(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.bookCollection === undefined) {
            return {
                status: 404,
                error: true,
                message: "No book collection found.",
            };
        }
        return response.bookCollection ?? {};
    });
}
// Book Series API
async function searchBookSeries(page, size, sort, formData) {
    return BookSeriesService.v1SearchBookSeries(page, size, sort, formData);
}
async function pageBookSeries(page, size) {
    return BookSeriesService.v1PageBookSeries(page, size);
}
async function getBookSeries(uid) {
    return BookSeriesService.v1GetBookSeries(uid)
        .then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.bookSeries === undefined) {
            return {
                status: 404,
                error: true,
                message: "No book series found.",
            };
        }
        return response.bookSeries ?? {};
    })
        .catch((error) => {
        return error;
    });
}
// Book API
async function searchBooks(page, size, sort, formData) {
    return BookService.v2SearchBooks(page, size, sort, formData);
}
async function pageBooks(page, size) {
    return BookService.v2PageBooks(page, size);
}
async function getBook(uid) {
    return BookService.v2GetBook(uid)
        .then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.book === undefined) {
            return {
                status: 404,
                error: true,
                message: "No book found.",
            };
        }
        return response.book ?? {};
    })
        .catch((error) => {
        return error;
    });
}
// Character API
async function searchCharacters(page, size, sort, formData) {
    return CharacterService.v1SearchCharacters(page, size, sort, formData);
}
async function pageCharacters(page, size) {
    return CharacterService.v1PageCharacter(page, size);
}
async function getCharacter(uid) {
    return CharacterService.v1GetCharacter(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.character === undefined) {
            return {
                status: 404,
                error: true,
                message: "No character found.",
            };
        }
        return response.character ?? {};
    });
}
// Comic Collection API
async function searchComicCollections(page, size, sort, formData) {
    return ComicCollectionService.v1SearchComicCollections(page, size, sort, formData);
}
async function pageComicCollections(page, size) {
    return ComicCollectionService.v1PageComicCollections(page, size);
}
async function getComicCollection(uid) {
    return ComicCollectionService.v2GetComicCollection(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.comicCollection === undefined) {
            return {
                status: 404,
                error: true,
                message: "No comic collection found.",
            };
        }
        return response.comicCollection ?? {};
    });
}
// Comic Series API
async function searchComicSeries(page, size, sort, formData) {
    return ComicSeriesService.v1SearchComicSeries(page, size, sort, formData);
}
async function pageComicSeries(page, size) {
    return ComicSeriesService.v1PageComicSeries(page, size);
}
async function getComicSeries(uid) {
    return ComicSeriesService.v1GetComicSeries(uid)
        .then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.comicSeries === undefined) {
            return {
                status: 404,
                error: true,
                message: "No comic series found.",
            };
        }
        return response.comicSeries ?? {};
    })
        .catch((error) => {
        return error;
    });
}
// Comic Strip API
async function searchComicStrips(page, size, sort, formData) {
    return ComicStripService.v1SearchComicStrips(page, size, sort, formData);
}
async function pageComicStrips(page, size) {
    return ComicStripService.v1PageComicStrips(page, size);
}
async function getComicStrip(uid) {
    return ComicStripService.v1GetComicStrip(uid)
        .then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.comicStrip === undefined) {
            return {
                status: 404,
                error: true,
                message: "No comic strip found.",
            };
        }
        return response.comicStrip ?? {};
    })
        .catch((error) => {
        return error;
    });
}
// Company API
async function searchCompanies(page, size, sort, formData) {
    return CompanyService.v2SearchCompanies(page, size, sort, formData);
}
async function pageCompanies(page, size) {
    return CompanyService.v2PageCompanies(page, size);
}
async function getCompany(uid) {
    return CompanyService.v2GetCompany(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.company === undefined) {
            return {
                status: 404,
                error: true,
                message: "No company found.",
            };
        }
        return response.company ?? {};
    });
}
// Conflict API
async function searchConflicts(page, size, sort, formData) {
    return ConflictService.v1SearchConflicts(page, size, sort, formData);
}
async function pageConflicts(page, size) {
    return ConflictService.v1PageConflicts(page, size);
}
async function getConflict(uid) {
    return ConflictService.v2GetConflict(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.conflict === undefined) {
            return {
                status: 404,
                error: true,
                message: "No conflict found.",
            };
        }
        return response.conflict ?? {};
    });
}
// DataVersion API
async function getDataVersion() {
    return DataVersionService.v1GetDataVersion();
}
// Element API
async function searchElements(page, size, sort, formData) {
    return ElementService.v2SearchElements(page, size, sort, formData);
}
async function pageElements(page, size) {
    return ElementService.v2PageElements(page, size);
}
async function getElement(uid) {
    return ElementService.v2GetElement(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.element === undefined) {
            return {
                status: 404,
                error: true,
                message: "No element found.",
            };
        }
        return response.element ?? {};
    });
}
// Episode API
async function searchEpisodes(page, size, sort, formData) {
    return EpisodeService.v1SearchEpisodes(page, size, sort, formData);
}
async function pageEpisodes(page, size) {
    return EpisodeService.v1PageEpisodes(page, size);
}
async function getEpisode(uid) {
    return EpisodeService.v1GetEpisode(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.episode === undefined) {
            return {
                status: 404,
                error: true,
                message: "No episode found.",
            };
        }
        return response.episode ?? {};
    });
}
// Food API
async function searchFoods(page, size, sort, formData) {
    return FoodService.v1SearchFoods(page, size, sort, formData);
}
async function pageFoods(page, size) {
    return FoodService.v1PageFoods(page, size);
}
async function getFood(uid) {
    return FoodService.v1GetFood(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.food === undefined) {
            return {
                status: 404,
                error: true,
                message: "No food found.",
            };
        }
        return response.food ?? {};
    });
}
// Literature API
async function searchLiterature(page, size, sort, formData) {
    return LiteratureService.v1SearchLiterature(page, size, sort, formData);
}
async function pageLiterature(page, size) {
    return LiteratureService.v1PageLiterature(page, size);
}
async function getLiterature(uid) {
    return LiteratureService.v1GetLiterature(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.literature === undefined) {
            return {
                status: 404,
                error: true,
                message: "No literature found.",
            };
        }
        return response.literature ?? {};
    });
}
// Location API
async function searchLocations(page, size, sort, formData) {
    return LocationService.v2SearchLocations(page, size, sort, formData);
}
async function pageLocations(page, size) {
    return LocationService.v2PageLocations(page, size);
}
async function getLocation(uid) {
    return LocationService.v2GetLocation(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.location === undefined) {
            return {
                status: 404,
                error: true,
                message: "No location found.",
            };
        }
        return response.location ?? {};
    });
}
// Magazine Series
async function searchMagazineSeries(page, size, sort, formData) {
    return MagazineSeriesService.v1SearchMagazineSeries(page, size, sort, formData);
}
async function pageMagazineSeries(page, size) {
    return MagazineSeriesService.v1PageMagazineSeries(page, size);
}
async function getMagazineSeries(uid) {
    return MagazineSeriesService.v1GetMagazineSeries(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.magazineSeries === undefined) {
            return {
                status: 404,
                error: true,
                message: "No magazine series found.",
            };
        }
        return response.magazineSeries ?? {};
    });
}
// Magazine API
async function searchMagazines(page, size, sort, formData) {
    return MagazineService.v1SearchMagazines(page, size, sort, formData);
}
async function pageMagazines(page, size) {
    return MagazineService.v1PageMagazines(page, size);
}
async function getMagazine(uid) {
    return MagazineService.v1GetMagazine(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.magazine === undefined) {
            return {
                status: 404,
                error: true,
                message: "No magazine found.",
            };
        }
        return response.magazine ?? {};
    });
}
// Material API
async function searchMaterials(page, size, sort, formData) {
    return MaterialService.v1SearchMaterials(page, size, sort, formData);
}
async function pageMaterials(page, size) {
    return MaterialService.v1PageMaterials(page, size);
}
async function getMaterial(uid) {
    return MaterialService.v1GetMaterial(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.material === undefined) {
            return {
                status: 404,
                error: true,
                message: "No material found.",
            };
        }
        return response.material ?? {};
    });
}
// Medical Condition API
async function searchMedicalConditions(page, size, sort, formData) {
    return MedicalConditionService.v1SearchMedicalConditions(page, size, sort, formData);
}
async function pageMedicalConditions(page, size) {
    return MedicalConditionService.v1PageMedicalConditions(page, size);
}
async function getMedicalCondition(uid) {
    return MedicalConditionService.v1GetMedicalCondition(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.medicalCondition ===
            undefined) {
            return {
                status: 404,
                error: true,
                message: "No medical condition found.",
            };
        }
        return response.medicalCondition ?? {};
    });
}
// Movie API
async function searchMovies(page, size, sort, formData) {
    return MovieService.v1SearchMovies(page, size, sort, formData);
}
async function pageMovies(page, size) {
    return MovieService.v1PageMovies(page, size);
}
async function getMovie(uid) {
    return MovieService.v1GetMovie(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.movie === undefined) {
            return {
                status: 404,
                error: true,
                message: "No movie found.",
            };
        }
        return response.movie ?? {};
    });
}
// Occupation API
async function searchOccupations(page, size, sort, formData) {
    return OccupationService.v2SearchOccupations(page, size, sort, formData);
}
async function pageOccupations(page, size) {
    return OccupationService.v2PageOccupations(page, size);
}
async function getOccupation(uid) {
    return OccupationService.v2GetOccupation(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.occupation === undefined) {
            return {
                status: 404,
                error: true,
                message: "No occupation found.",
            };
        }
        return response.occupation ?? {};
    });
}
// Organization API
async function searchOrganizations(page, size, sort, formData) {
    return OrganizationService.v1SearchOrganizations(page, size, sort, formData);
}
async function pageOrganizations(page, size) {
    return OrganizationService.v1PageOrganizations(page, size);
}
async function getOrganization(uid) {
    return OrganizationService.v1GetOrganization(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.organization === undefined) {
            return {
                status: 404,
                error: true,
                message: "No organization found.",
            };
        }
        return response.organization ?? {};
    });
}
// Performer API
async function searchPerformers(page, size, sort, formData) {
    return PerformerService.v2SearchPerformers(page, size, sort, formData);
}
async function pagePerformers(page, size) {
    return PerformerService.v2PagePerformers(page, size);
}
async function getPerformer(uid) {
    return PerformerService.v2GetPerformer(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.performer === undefined) {
            return {
                status: 404,
                error: true,
                message: "No performer found.",
            };
        }
        return response.performer ?? {};
    });
}
// Season API
async function searchSeasons(page, size, sort, formData) {
    return SeasonService.v1SearchSeasons(page, size, sort, formData);
}
async function pageSeasons(page, size) {
    return SeasonService.v1PageSeasons(page, size);
}
async function getSeason(uid) {
    return SeasonService.v1GetSeason(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.season === undefined) {
            return {
                status: 404,
                error: true,
                message: "No season found.",
            };
        }
        return response.season ?? {};
    });
}
// Series API
async function searchSeries(page, size, sort, formData) {
    return SeriesService.v1SearchSeries(page, size, sort, formData);
}
async function pageSeries(page, size) {
    return SeriesService.v1PageSeries(page, size);
}
async function getSeries(uid) {
    return SeriesService.v1GetSeries(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.series === undefined) {
            return {
                status: 404,
                error: true,
                message: "No series found.",
            };
        }
        return response.series ?? {};
    });
}
// Soundtrack API
async function searchSoundtracks(page, size, sort, formData) {
    return SoundtrackService.v1SearchSoundtracks(page, size, sort, formData);
}
async function pageSoundtracks(page, size) {
    return SoundtrackService.v1PageSoundtracks(page, size);
}
async function getSoundtrack(uid) {
    return SoundtrackService.v1GetSoundtrack(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.soundtrack === undefined) {
            return {
                status: 404,
                error: true,
                message: "No soundtrack found.",
            };
        }
        return response.soundtrack ?? {};
    });
}
// Spacecraft Class API
async function searchSpacecraftClasses(page, size, sort, formData) {
    return SpacecraftClassService.v2SearchSpacecraftClasses(page, size, sort, formData);
}
async function pageSpacecraftClasses(page, size) {
    return SpacecraftClassService.v2PageSpacecraftClasses(page, size);
}
async function getSpacecraftClass(uid) {
    return SpacecraftClassService.v3GetSpacecraftClass(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.spacecraftClass ===
            undefined) {
            return {
                status: 404,
                error: true,
                message: "No spacecraft class found.",
            };
        }
        return response.spacecraftClass ?? {};
    });
}
// Spacecraft API
async function searchSpacecrafts(page, size, sort, formData) {
    return SpacecraftService.v2SearchSpacecrafts(page, size, sort, formData);
}
async function pageSpacecrafts(page, size) {
    return SpacecraftService.v2PageSpacecrafts(page, size);
}
async function getSpacecraft(uid) {
    return SpacecraftService.v2GetSpacecraft(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.spacecraft === undefined) {
            return {
                status: 404,
                error: true,
                message: "No spacecraft found.",
            };
        }
        return response.spacecraft ?? {};
    });
}
// Species API
async function searchSpecies(page, size, sort, formData) {
    return SpeciesService.v2SearchSpecies(page, size, sort, formData);
}
async function pageSpecies(page, size) {
    return SpeciesService.v2PageSpecies(page, size);
}
async function getSpecies(uid) {
    return SpeciesService.v2GetSpecies(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.species === undefined) {
            return {
                status: 404,
                error: true,
                message: "No species found.",
            };
        }
        return response.species ?? {};
    });
}
// Staff API
async function searchStaff(page, size, sort, formData) {
    return StaffService.v2SearchStaff(page, size, sort, formData);
}
async function pageStaff(page, size) {
    return StaffService.v2PageStaff(page, size);
}
async function getStaff(uid) {
    return StaffService.v2GetStaff(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.staff === undefined) {
            return {
                status: 404,
                error: true,
                message: "No staff found.",
            };
        }
        return response.staff ?? {};
    });
}
// Technology API
async function searchTechnologies(page, size, sort, formData) {
    return TechnologyService.v2SearchTechnology(page, size, sort, formData);
}
async function pageTechnologies(page, size) {
    return TechnologyService.v2PageTechnology(page, size);
}
async function getTechnology(uid) {
    return TechnologyService.v2GetTechnology(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.technology === undefined) {
            return {
                status: 404,
                error: true,
                message: "No technology found.",
            };
        }
        return response.technology ?? {};
    });
}
// Title API
async function searchTitles(page, size, sort, formData) {
    return TitleService.v2SearchTitles(page, size, sort, formData);
}
async function pageTitles(page, size) {
    return TitleService.v2PageTitles(page, size);
}
async function getTitle(uid) {
    return TitleService.v2GetTitle(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.title === undefined) {
            return {
                status: 404,
                error: true,
                message: "No title found.",
            };
        }
        return response.title ?? {};
    });
}
// Trading Card Deck API
async function searchTradingCardDecks(page, size, sort, formData) {
    return TradingCardDeckService.v1SearchTradingCardDecks(page, size, sort, formData);
}
async function pageTradingCardDecks(page, size) {
    return TradingCardDeckService.v1PageTradingCardDecks(page, size);
}
async function getTradingCardDeck(uid) {
    return TradingCardDeckService.v1GetTradingCardDeck(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.tradingCardDeck === undefined) {
            return {
                status: 404,
                error: true,
                message: "No trading card deck found.",
            };
        }
        return response.tradingCardDeck ?? {};
    });
}
// Trading Card API
async function searchTradingCards(page, size, sort, formData) {
    return TradingCardService.v1SearchTradingCards(page, size, sort, formData);
}
async function pageTradingCards(page, size) {
    return TradingCardService.v1PageTradingCards(page, size);
}
async function getTradingCard(uid) {
    return TradingCardService.v1GetTradingCard(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.tradingCard === undefined) {
            return {
                status: 404,
                error: true,
                message: "No trading card found.",
            };
        }
        return response.tradingCard ?? {};
    });
}
// Trading Card Set API
async function searchTradingCardSets(page, size, sort, formData) {
    return TradingCardSetService.v1SearchTradingCardSets(page, size, sort, formData);
}
async function pageTradingCardSets(page, size) {
    return TradingCardSetService.v1PageTradingCardSets(page, size);
}
async function getTradingCardSet(uid) {
    return TradingCardSetService.v1GetTradingCardSet(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.tradingCardSet === undefined) {
            return {
                status: 404,
                error: true,
                message: "No trading card set found.",
            };
        }
        return response.tradingCardSet ?? {};
    });
}
// Video Game API
async function searchVideoGames(page, size, sort, formData) {
    return VideoGameService.v1SearchVideoGames(page, size, sort, formData);
}
async function pageVideoGames(page, size) {
    return VideoGameService.v1PageVideoGames(page, size);
}
async function getVideoGame(uid) {
    return VideoGameService.v1GetVideoGame(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.videoGame === undefined) {
            return {
                status: 404,
                error: true,
                message: "No video game found.",
            };
        }
        return response.videoGame ?? {};
    });
}
// Video Release API
async function searchVideoReleases(page, size, sort, formData) {
    return VideoReleaseService.v2SearchVideoReleases(page, size, sort, formData);
}
async function pageVideoReleases(page, size) {
    return VideoReleaseService.v2PageVideoReleases(page, size);
}
async function getVideoRelease(uid) {
    return VideoReleaseService.v2GetVideoRelease(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.videoRelease === undefined) {
            return {
                status: 404,
                error: true,
                message: "No video release found.",
            };
        }
        return response.videoRelease ?? {};
    });
}
// Weapon API
async function searchWeapons(page, size, sort, formData) {
    return WeaponService.v2SearchWeapons(page, size, sort, formData);
}
async function pageWeapons(page, size) {
    return WeaponService.v2PageWeapons(page, size);
}
async function getWeapon(uid) {
    return WeaponService.v2GetWeapon(uid).then((response) => {
        if (response instanceof Error) {
            return response;
        }
        if (response.weapon === undefined) {
            return {
                status: 404,
                error: true,
                message: "No weapon found.",
            };
        }
        return response.weapon ?? {};
    });
}
export const AnimalClient = {
    search: searchAnimals,
    page: pageAnimals,
    get: getAnimal,
};
export const AstronomicalObjectClient = {
    search: searchAstronomicalObjects,
    page: pageAstronomicalObjects,
    get: getAstronomicalObject,
};
const STAPIClient = {
    Animal: AnimalClient,
    AstronomicalObject: AstronomicalObjectClient,
    BookCollection: {
        search: searchBookCollections,
        page: pageBookCollections,
        get: getBookCollection,
    },
    BookSeries: {
        search: searchBookSeries,
        page: pageBookSeries,
        get: getBookSeries,
    },
    Book: {
        search: searchBooks,
        page: pageBooks,
        get: getBook,
    },
    Character: {
        search: searchCharacters,
        page: pageCharacters,
        get: getCharacter,
    },
    ComicCollection: {
        search: searchComicCollections,
        page: pageComicCollections,
        get: getComicCollection,
    },
    ComicSeries: {
        search: searchComicSeries,
        page: pageComicSeries,
        get: getComicSeries,
    },
    ComicStrip: {
        search: searchComicStrips,
        page: pageComicStrips,
        get: getComicStrip,
    },
    Company: {
        search: searchCompanies,
        page: pageCompanies,
        get: getCompany,
    },
    Conflict: {
        search: searchConflicts,
        page: pageConflicts,
        get: getConflict,
    },
    DataVersion: {
        get: getDataVersion,
    },
    Element: {
        search: searchElements,
        page: pageElements,
        get: getElement,
    },
    Episode: {
        search: searchEpisodes,
        page: pageEpisodes,
        get: getEpisode,
    },
    Food: {
        search: searchFoods,
        page: pageFoods,
        get: getFood,
    },
    Literature: {
        search: searchLiterature,
        page: pageLiterature,
        get: getLiterature,
    },
    Location: {
        search: searchLocations,
        page: pageLocations,
        get: getLocation,
    },
    MagazineSeries: {
        search: searchMagazineSeries,
        page: pageMagazineSeries,
        get: getMagazineSeries,
    },
    Magazine: {
        search: searchMagazines,
        page: pageMagazines,
        get: getMagazine,
    },
    Material: {
        search: searchMaterials,
        page: pageMaterials,
        get: getMaterial,
    },
    MedicalCondition: {
        search: searchMedicalConditions,
        page: pageMedicalConditions,
        get: getMedicalCondition,
    },
    Movie: {
        search: searchMovies,
        page: pageMovies,
        get: getMovie,
    },
    Occupation: {
        search: searchOccupations,
        page: pageOccupations,
        get: getOccupation,
    },
    Organization: {
        search: searchOrganizations,
        page: pageOrganizations,
        get: getOrganization,
    },
    Performer: {
        search: searchPerformers,
        page: pagePerformers,
        get: getPerformer,
    },
    Season: {
        search: searchSeasons,
        page: pageSeasons,
        get: getSeason,
    },
    Series: {
        search: searchSeries,
        page: pageSeries,
        get: getSeries,
    },
    Soundtrack: {
        search: searchSoundtracks,
        page: pageSoundtracks,
        get: getSoundtrack,
    },
    SpacecraftClass: {
        search: searchSpacecraftClasses,
        page: pageSpacecraftClasses,
        get: getSpacecraftClass,
    },
    Spacecraft: {
        search: searchSpacecrafts,
        page: pageSpacecrafts,
        get: getSpacecraft,
    },
    Species: {
        search: searchSpecies,
        page: pageSpecies,
        get: getSpecies,
    },
    Staff: {
        search: searchStaff,
        page: pageStaff,
        get: getStaff,
    },
    Technology: {
        search: searchTechnologies,
        page: pageTechnologies,
        get: getTechnology,
    },
    Title: {
        search: searchTitles,
        page: pageTitles,
        get: getTitle,
    },
    TradingCardDeck: {
        search: searchTradingCardDecks,
        page: pageTradingCardDecks,
        get: getTradingCardDeck,
    },
    TradingCardSet: {
        search: searchTradingCardSets,
        page: pageTradingCardSets,
        get: getTradingCardSet,
    },
    TradingCard: {
        search: searchTradingCards,
        page: pageTradingCards,
        get: getTradingCard,
    },
    VideoGame: {
        search: searchVideoGames,
        page: pageVideoGames,
        get: getVideoGame,
    },
    VideoRelease: {
        search: searchVideoReleases,
        page: pageVideoReleases,
        get: getVideoRelease,
    },
    Weapon: {
        search: searchWeapons,
        page: pageWeapons,
        get: getWeapon,
    },
};
export default STAPIClient;
