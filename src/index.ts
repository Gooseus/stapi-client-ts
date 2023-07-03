import {
  AnimalBase,
  AnimalBaseResponse,
  AnimalFull,
  AnimalFullResponse,
  AnimalSearchCriteria,
  AnimalService,
  ApiError,
  AstronomicalObjectService,
  AstronomicalObjectV2Base,
  AstronomicalObjectV2BaseResponse,
  AstronomicalObjectV2Full,
  AstronomicalObjectV2FullResponse,
  AstronomicalObjectV2SearchCriteria,
  AstronomicalObjectV2Type,
  BookCollectionBaseResponse,
  BookCollectionFull,
  BookCollectionFullResponse,
  BookCollectionSearchCriteria,
  BookCollectionService,
  BookSeriesBaseResponse,
  BookSeriesFull,
  BookSeriesFullResponse,
  BookSeriesSearchCriteria,
  BookSeriesService,
  BookService,
  BookV2BaseResponse,
  BookV2Full,
  BookV2FullResponse,
  BookV2SearchCriteria,
  CharacterBaseResponse,
  CharacterFull,
  CharacterFullResponse,
  CharacterSearchCriteria,
  CharacterService,
  ComicCollectionBaseResponse,
  ComicCollectionFull,
  ComicCollectionFullResponse,
  ComicCollectionSearchCriteria,
  ComicCollectionService,
  ComicSeriesBaseResponse,
  ComicSeriesFull,
  ComicSeriesFullResponse,
  ComicSeriesSearchCriteria,
  ComicSeriesService,
  ComicStripBaseResponse,
  ComicStripFull,
  ComicStripFullResponse,
  ComicStripSearchCriteria,
  ComicStripService,
  CompanyFullResponse,
  CompanyService,
  CompanyV2BaseResponse,
  CompanyV2Full,
  CompanyV2SearchCriteria,
  ConflictBaseResponse,
  ConflictSearchCriteria,
  ConflictService,
  ConflictV2Full,
  ConflictV2FullResponse,
  DataVersion,
  DataVersionService,
  ElementService,
  ElementV2BaseResponse,
  ElementV2Full,
  ElementV2FullResponse,
  ElementV2SearchCriteria,
  EpisodeBaseResponse,
  EpisodeFull,
  EpisodeFullResponse,
  EpisodeSearchCriteria,
  EpisodeService,
  Error,
  FoodBaseResponse,
  FoodFull,
  FoodFullResponse,
  FoodSearchCriteria,
  FoodService,
  LiteratureBaseResponse,
  LiteratureFull,
  LiteratureFullResponse,
  LiteratureSearchCriteria,
  LiteratureService,
  LocationService,
  LocationV2BaseResponse,
  LocationV2Full,
  LocationV2FullResponse,
  LocationV2SearchCriteria,
  MagazineBaseResponse,
  MagazineFull,
  MagazineFullResponse,
  MagazineSearchCriteria,
  MagazineSeriesBaseResponse,
  MagazineSeriesFull,
  MagazineSeriesFullResponse,
  MagazineSeriesSearchCriteria,
  MagazineSeriesService,
  MagazineService,
  MaterialBaseResponse,
  MaterialFull,
  MaterialFullResponse,
  MaterialSearchCriteria,
  MaterialService,
  MedicalConditionBaseResponse,
  MedicalConditionFull,
  MedicalConditionFullResponse,
  MedicalConditionSearchCriteria,
  MedicalConditionService,
  MovieBaseResponse,
  MovieFull,
  MovieFullResponse,
  MovieSearchCriteria,
  MovieService,
  OccupationService,
  OccupationV2BaseResponse,
  OccupationV2Full,
  OccupationV2FullResponse,
  OccupationV2SearchCriteria,
  OrganizationBaseResponse,
  OrganizationFull,
  OrganizationFullResponse,
  OrganizationSearchCriteria,
  OrganizationService,
  PerformerService,
  PerformerV2BaseResponse,
  PerformerV2Full,
  PerformerV2FullResponse,
  PerformerV2SearchCriteria,
  RequestSort,
  ResponsePage,
  SeasonBaseResponse,
  SeasonFull,
  SeasonFullResponse,
  SeasonSearchCriteria,
  SeasonService,
  SeriesBaseResponse,
  SeriesFull,
  SeriesFullResponse,
  SeriesSearchCriteria,
  SeriesService,
  SoundtrackBaseResponse,
  SoundtrackFull,
  SoundtrackFullResponse,
  SoundtrackSearchCriteria,
  SoundtrackService,
  SpacecraftClassService,
  SpacecraftClassV2BaseResponse,
  SpacecraftClassV2SearchCriteria,
  SpacecraftClassV3Full,
  SpacecraftClassV3FullResponse,
  SpacecraftService,
  SpacecraftV2BaseResponse,
  SpacecraftV2Full,
  SpacecraftV2FullResponse,
  SpacecraftV2SearchCriteria,
  SpeciesService,
  SpeciesV2BaseResponse,
  SpeciesV2Full,
  SpeciesV2FullResponse,
  SpeciesV2SearchCriteria,
  StaffService,
  StaffV2BaseResponse,
  StaffV2Full,
  StaffV2FullResponse,
  StaffV2SearchCriteria,
  TechnologyService,
  TechnologyV2BaseResponse,
  TechnologyV2Full,
  TechnologyV2FullResponse,
  TechnologyV2SearchCriteria,
  TitleService,
  TitleV2BaseResponse,
  TitleV2Full,
  TitleV2FullResponse,
  TitleV2SearchCriteria,
  TradingCardBaseResponse,
  TradingCardDeckBaseResponse,
  TradingCardDeckFull,
  TradingCardDeckFullResponse,
  TradingCardDeckSearchCriteria,
  TradingCardDeckService,
  TradingCardFull,
  TradingCardFullResponse,
  TradingCardSearchCriteria,
  TradingCardService,
  TradingCardSetBaseResponse,
  TradingCardSetFull,
  TradingCardSetFullResponse,
  TradingCardSetSearchCriteria,
  TradingCardSetService,
  VideoGameBaseResponse,
  VideoGameFull,
  VideoGameFullResponse,
  VideoGameSearchCriteria,
  VideoGameService,
  VideoReleaseService,
  VideoReleaseV2BaseResponse,
  VideoReleaseV2Full,
  VideoReleaseV2FullResponse,
  VideoReleaseV2SearchCriteria,
  WeaponService,
  WeaponV2BaseResponse,
  WeaponV2Full,
  WeaponV2FullResponse,
  WeaponV2SearchCriteria,
} from "./client";

// Base Type Aliases
type STAPIError = ApiError | Error;
type APIBaseListResponse<T> = {
  page: ResponsePage;
  size: Response;
  items: Array<T>;
};
export type STAPIRequestSort = RequestSort;

// Animal Type Aliases
export type AnimalListResponse = APIBaseListResponse<AnimalBase> | STAPIError;
export type AnimalSearchRecord = Record<
  keyof AnimalSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type AnimalItemResponse = AnimalFull | STAPIError;

// Astronomical Object Type Aliases
export type AstronimcalObjectEnum = AstronomicalObjectV2Type;
export type AstronomicalSearchRecord = Record<
  keyof AstronomicalObjectV2SearchCriteria,
  number | string | STAPIRequestSort | AstronimcalObjectEnum
>;
export type AstronomicalObjectListResponse =
  | APIBaseListResponse<AstronomicalObjectV2Base>
  | STAPIError;
export type AstronomicalObjectItemResponse =
  | AstronomicalObjectV2Full
  | STAPIError;

// Book Collection Type Aliases
export type BookCollectionSearchRecord = Record<
  keyof BookCollectionSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type BookCollectionListResponse =
  | BookCollectionBaseResponse
  | STAPIError;
export type BookCollectionItemResponse = BookCollectionFull | STAPIError;

// Book Series Type Aliases
export type BookSeriesSearchRecord = Record<
  keyof BookSeriesSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type BookSeriesListResponse = BookSeriesBaseResponse | STAPIError;
export type BookSeriesItemResponse = BookSeriesFull | STAPIError;

// Book Type Aliases
export type BookSearchRecord = Record<
  keyof BookV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type BookListResponse = BookV2BaseResponse | STAPIError;
export type BookItemResponse = BookV2Full | STAPIError;

// Character Type Aliases
export type CharacterSearchRecord = Record<
  keyof CharacterSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type CharacterListResponse = CharacterBaseResponse | STAPIError;
export type CharacterItemResponse = CharacterFull | STAPIError;

// Comic Collection Type Aliases
export type ComicCollectionSearchRecord = Record<
  keyof ComicCollectionSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type ComicCollectionListResponse =
  | ComicCollectionBaseResponse
  | STAPIError;
export type ComicCollectionItemResponse = ComicCollectionFull | STAPIError;

// Comic Series Type Aliases
export type ComicSeriesSearchRecord = Record<
  keyof ComicSeriesSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type ComicSeriesListResponse = ComicSeriesBaseResponse | STAPIError;
export type ComicSeriesItemResponse = ComicSeriesFull | STAPIError;

// Comic Strip Type Aliases
export type ComicStripSearchRecord = Record<
  keyof ComicStripSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type ComicStripListResponse = ComicStripBaseResponse | STAPIError;
export type ComicStripItemResponse = ComicStripFull | STAPIError;

// Company Type Aliases
export type CompanySearchRecord = Record<
  keyof CompanyV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type CompanyListResponse = CompanyV2BaseResponse | STAPIError;
export type CompanyItemResponse = CompanyV2Full | STAPIError;

// Conflict Type Aliases
export type ConflictSearchRecord = Record<
  keyof ConflictSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type ConflictListResponse = ConflictBaseResponse | STAPIError;
export type ConflictItemResponse = ConflictV2Full | STAPIError;

// Data Version Type Alias
export type DataVersionResponse = DataVersion | STAPIError;

// Element Type Aliases
export type ElementSearchRecord = Record<
  keyof ElementV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type ElementListResponse = ElementV2BaseResponse | STAPIError;
export type ElementItemResponse = ElementV2Full | STAPIError;

// Episode Type Aliases
export type EpisodeSearchRecord = Record<
  keyof EpisodeSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type EpisodeListResponse = EpisodeBaseResponse | STAPIError;
export type EpisodeItemResponse = EpisodeFull | STAPIError;

// Food Type Aliases
export type FoodSearchRecord = Record<
  keyof FoodSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type FoodListResponse = FoodBaseResponse | STAPIError;
export type FoodItemResponse = FoodFull | STAPIError;

// Literature Type Aliases
export type LiteratureSearchRecord = Record<
  keyof LiteratureSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type LiteratureListResponse = LiteratureBaseResponse | STAPIError;
export type LiteratureItemResponse = LiteratureFull | STAPIError;

// Location Type Aliases
export type LocationSearchRecord = Record<
  keyof LocationV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type LocationListResponse = LocationV2BaseResponse | STAPIError;
export type LocationItemResponse = LocationV2Full | STAPIError;

// Magazine Series Type Aliases
export type MagazineSeriesSearchRecord = Record<
  keyof MagazineSeriesSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type MagazineSeriesListResponse =
  | MagazineSeriesBaseResponse
  | STAPIError;
export type MagazineSeriesItemResponse = MagazineSeriesFull | STAPIError;

// Magazine Type Aliases
export type MagazineSearchRecord = Record<
  keyof MagazineSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type MagazineListResponse = MagazineBaseResponse | STAPIError;
export type MagazineItemResponse = MagazineFull | STAPIError;

// Material Type Aliases
export type MaterialSearchRecord = Record<
  keyof MaterialSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type MaterialListResponse = MaterialBaseResponse | STAPIError;
export type MaterialItemResponse = MaterialFull | STAPIError;

// Medical Condition Type Aliases
export type MedicalConditionSearchRecord = Record<
  keyof MedicalConditionSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type MedicalConditionListResponse =
  | MedicalConditionBaseResponse
  | STAPIError;
export type MedicalConditionItemResponse = MedicalConditionFull | STAPIError;

// Movie Type Aliases
export type MovieSearchRecord = Record<
  keyof MovieSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type MovieListResponse = MovieBaseResponse | STAPIError;
export type MovieItemResponse = MovieFull | STAPIError;

// Occupation Type Aliases
export type OccupationSearchRecord = Record<
  keyof OccupationV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type OccupationListResponse = OccupationV2BaseResponse | STAPIError;
export type OccupationItemResponse = OccupationV2Full | STAPIError;

// Organization Type Aliases
export type OrganizationSearchRecord = Record<
  keyof OrganizationSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type OrganizationListResponse = OrganizationBaseResponse | STAPIError;
export type OrganizationItemResponse = OrganizationFull | STAPIError;

// Performer Type Aliases
export type PerformerSearchRecord = Record<
  keyof PerformerV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type PerformerListResponse = PerformerV2BaseResponse | STAPIError;
export type PerformerItemResponse = PerformerV2Full | STAPIError;

// Season Type Aliases
export type SeasonSearchRecord = Record<
  keyof SeasonSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type SeasonListResponse = SeasonBaseResponse | STAPIError;
export type SeasonItemResponse = SeasonFull | STAPIError;

// Series Type Aliases
export type SeriesSearchRecord = Record<
  keyof SeriesSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type SeriesListResponse = SeriesBaseResponse | STAPIError;
export type SeriesItemResponse = SeriesFull | STAPIError;

// Soundtrack Type Aliases
export type SoundtrackSearchRecord = Record<
  keyof SoundtrackSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type SoundtrackListResponse = SoundtrackBaseResponse | STAPIError;
export type SoundtrackItemResponse = SoundtrackFull | STAPIError;

// Spacecraft Class Type Aliases
export type SpacecraftClassSearchRecord = Record<
  keyof SpacecraftClassV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type SpacecraftClassListResponse =
  | SpacecraftClassV2BaseResponse
  | STAPIError;
export type SpacecraftClassItemResponse = SpacecraftClassV3Full | STAPIError;

// Spacecraft Type Aliases
export type SpacecraftSearchRecord = Record<
  keyof SpacecraftV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type SpacecraftListResponse = SpacecraftV2BaseResponse | STAPIError;
export type SpacecraftItemResponse = SpacecraftV2Full | STAPIError;

// Species Type Aliases
export type SpeciesSearchRecord = Record<
  keyof SpeciesV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type SpeciesListResponse = SpeciesV2BaseResponse | STAPIError;
export type SpeciesItemResponse = SpeciesV2Full | STAPIError;

// Staff Type Aliases
export type StaffSearchRecord = Record<
  keyof StaffV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type StaffListResponse = StaffV2BaseResponse | STAPIError;
export type StaffItemResponse = StaffV2Full | STAPIError;

// Technology Type Aliases
export type TechnologySearchRecord = Record<
  keyof TechnologyV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type TechnologyListResponse = TechnologyV2BaseResponse | STAPIError;
export type TechnologyItemResponse = TechnologyV2Full | STAPIError;

// Title Type Aliases
export type TitleSearchRecord = Record<
  keyof TitleV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type TitleListResponse = TitleV2BaseResponse | STAPIError;
export type TitleItemResponse = TitleV2Full | STAPIError;

// Trading Card Deck Type Aliases
export type TradingCardDeckSearchRecord = Record<
  keyof TradingCardDeckSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type TradingCardDeckListResponse =
  | TradingCardDeckBaseResponse
  | STAPIError;
export type TradingCardDeckItemResponse = TradingCardDeckFull | STAPIError;

// Trading Card Type Aliases
export type TradingCardSearchRecord = Record<
  keyof TradingCardSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type TradingCardListResponse = TradingCardBaseResponse | STAPIError;
export type TradingCardItemResponse = TradingCardFull | STAPIError;

// Trading Card Set Type Aliases
export type TradingCardSetSearchRecord = Record<
  keyof TradingCardSetSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type TradingCardSetListResponse =
  | TradingCardSetBaseResponse
  | STAPIError;
export type TradingCardSetItemResponse = TradingCardSetFull | STAPIError;

// Video Game Type Aliases
export type VideoGameSearchRecord = Record<
  keyof VideoGameSearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type VideoGameListResponse = VideoGameBaseResponse | STAPIError;
export type VideoGameItemResponse = VideoGameFull | STAPIError;

// Video Release Type Aliases
export type VideoReleaseSearchRecord = Record<
  keyof VideoReleaseV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type VideoReleaseListResponse = VideoReleaseV2BaseResponse | STAPIError;
export type VideoReleaseItemResponse = VideoReleaseV2Full | STAPIError;

// Weapon Type Aliases
export type WeaponSearchRecord = Record<
  keyof WeaponV2SearchCriteria,
  number | string | boolean | STAPIRequestSort | undefined
>;
export type WeaponListResponse = WeaponV2BaseResponse | STAPIError;
export type WeaponItemResponse = WeaponV2Full | STAPIError;

// Animal API
async function searchAnimals(
  page: number,
  size: number,
  sort: string,
  formData: AnimalSearchRecord
): Promise<AnimalListResponse> {
  return AnimalService.v1SearchAnimals(page, size, sort, formData).then(
    (response: AnimalBaseResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      const { animals, ...rest } = response as AnimalBaseResponse;
      return { ...rest, items: animals } as AnimalListResponse;
    }
  );
}

async function pageAnimals(
  page: number,
  size: number
): Promise<AnimalListResponse> {
  return AnimalService.v1PageAnimals(page, size).then(
    (response: AnimalBaseResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      const { animals, ...rest } = response as AnimalBaseResponse;
      return { ...rest, items: animals } as AnimalListResponse;
    }
  );
}

async function getAnimal(uid: string): Promise<AnimalItemResponse> {
  return AnimalService.v1GetAnimal(uid)
    .then((response: AnimalFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as AnimalFullResponse).animal === undefined) {
        return {
          status: 404,
          error: true,
          message: "No animal found.",
        } as STAPIError;
      }
      return (response as AnimalFullResponse).animal ?? {};
    })
    .catch((error: Error): STAPIError => {
      return error as STAPIError;
    });
}

// Astronomical Object API
async function searchAstronomicalObjects(
  page: number,
  size: number,
  sort: string,
  formData: AstronomicalSearchRecord
): Promise<AstronomicalObjectListResponse> {
  return AstronomicalObjectService.v2SearchAstronomicalObjects(
    page,
    size,
    sort,
    formData
  ).then((response: AstronomicalObjectV2BaseResponse | Error) => {
    if (response instanceof Error) {
      return response as STAPIError;
    }
    const { astronomicalObjects, ...rest } =
      response as AstronomicalObjectV2BaseResponse;
    return {
      ...rest,
      items: astronomicalObjects,
    } as AstronomicalObjectListResponse;
  });
}

async function pageAstronomicalObjects(
  page: number,
  size: number
): Promise<AstronomicalObjectListResponse> {
  return AstronomicalObjectService.v2PageAstronomicalObjects(page, size).then(
    (response: AstronomicalObjectV2BaseResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      const { astronomicalObjects, ...rest } =
        response as AstronomicalObjectV2BaseResponse;
      return {
        ...rest,
        items: astronomicalObjects,
      } as AstronomicalObjectListResponse;
    }
  );
}

async function getAstronomicalObject(
  uid: string
): Promise<AstronomicalObjectItemResponse> {
  return AstronomicalObjectService.v2GetAstronomicalObject(uid)
    .then((response: AstronomicalObjectV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if (
        (response as AstronomicalObjectV2FullResponse).astronomicalObject ===
        undefined
      ) {
        return {
          status: 404,
          error: true,
          message: "No astronomical object found.",
        } as STAPIError;
      }
      return (
        (response as AstronomicalObjectV2FullResponse).astronomicalObject ?? {}
      );
    })
    .catch((error: Error): STAPIError => {
      return error as STAPIError;
    });
}

// Book Collection API
async function searchBookCollections(
  page: number,
  size: number,
  sort: string,
  formData: BookCollectionSearchRecord
): Promise<BookCollectionListResponse> {
  return BookCollectionService.v1SearchBookCollections(
    page,
    size,
    sort,
    formData
  );
}

async function pageBookCollections(
  page: number,
  size: number
): Promise<BookCollectionListResponse> {
  return BookCollectionService.v1PageBookCollections(page, size);
}

async function getBookCollection(
  uid: string
): Promise<BookCollectionItemResponse> {
  return BookCollectionService.v1GetBookCollection(uid).then(
    (response: BookCollectionFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if (
        (response as BookCollectionFullResponse).bookCollection === undefined
      ) {
        return {
          status: 404,
          error: true,
          message: "No book collection found.",
        } as STAPIError;
      }
      return (response as BookCollectionFullResponse).bookCollection ?? {};
    }
  );
}

// Book Series API
async function searchBookSeries(
  page: number,
  size: number,
  sort: string,
  formData: BookSeriesSearchRecord
): Promise<BookSeriesListResponse> {
  return BookSeriesService.v1SearchBookSeries(page, size, sort, formData);
}

async function pageBookSeries(
  page: number,
  size: number
): Promise<BookSeriesListResponse> {
  return BookSeriesService.v1PageBookSeries(page, size);
}

async function getBookSeries(uid: string): Promise<BookSeriesItemResponse> {
  return BookSeriesService.v1GetBookSeries(uid)
    .then((response: BookSeriesFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as BookSeriesFullResponse).bookSeries === undefined) {
        return {
          status: 404,
          error: true,
          message: "No book series found.",
        } as STAPIError;
      }
      return (response as BookSeriesFullResponse).bookSeries ?? {};
    })
    .catch((error: Error): STAPIError => {
      return error as STAPIError;
    });
}

// Book API
async function searchBooks(
  page: number,
  size: number,
  sort: string,
  formData: BookSearchRecord
): Promise<BookListResponse> {
  return BookService.v2SearchBooks(page, size, sort, formData);
}

async function pageBooks(
  page: number,
  size: number
): Promise<BookListResponse> {
  return BookService.v2PageBooks(page, size);
}

async function getBook(uid: string): Promise<BookItemResponse> {
  return BookService.v2GetBook(uid)
    .then((response: BookV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as BookV2FullResponse).book === undefined) {
        return {
          status: 404,
          error: true,
          message: "No book found.",
        } as STAPIError;
      }
      return (response as BookV2FullResponse).book ?? {};
    })
    .catch((error: Error): STAPIError => {
      return error as STAPIError;
    });
}

// Character API
async function searchCharacters(
  page: number,
  size: number,
  sort: string,
  formData: any
): Promise<CharacterListResponse> {
  return CharacterService.v1SearchCharacters(page, size, sort, formData);
}

async function pageCharacters(
  page: number,
  size: number
): Promise<CharacterListResponse> {
  return CharacterService.v1PageCharacter(page, size);
}

async function getCharacter(uid: string): Promise<CharacterItemResponse> {
  return CharacterService.v1GetCharacter(uid).then(
    (response: CharacterFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as CharacterFullResponse).character === undefined) {
        return {
          status: 404,
          error: true,
          message: "No character found.",
        } as STAPIError;
      }
      return (response as CharacterFullResponse).character ?? {};
    }
  );
}

// Comic Collection API
async function searchComicCollections(
  page: number,
  size: number,
  sort: string,
  formData: ComicSeriesSearchRecord
): Promise<ComicCollectionListResponse> {
  return ComicCollectionService.v1SearchComicCollections(
    page,
    size,
    sort,
    formData
  );
}

async function pageComicCollections(
  page: number,
  size: number
): Promise<ComicCollectionListResponse> {
  return ComicCollectionService.v1PageComicCollections(page, size);
}

async function getComicCollection(
  uid: string
): Promise<ComicCollectionItemResponse> {
  return ComicCollectionService.v2GetComicCollection(uid).then(
    (response: ComicCollectionFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if (
        (response as ComicCollectionFullResponse).comicCollection === undefined
      ) {
        return {
          status: 404,
          error: true,
          message: "No comic collection found.",
        } as STAPIError;
      }
      return (response as ComicCollectionFullResponse).comicCollection ?? {};
    }
  );
}

// Comic Series API
async function searchComicSeries(
  page: number,
  size: number,
  sort: string,
  formData: ComicSeriesSearchRecord
): Promise<ComicSeriesListResponse> {
  return ComicSeriesService.v1SearchComicSeries(page, size, sort, formData);
}

async function pageComicSeries(
  page: number,
  size: number
): Promise<ComicSeriesListResponse> {
  return ComicSeriesService.v1PageComicSeries(page, size);
}

async function getComicSeries(uid: string): Promise<ComicSeriesItemResponse> {
  return ComicSeriesService.v1GetComicSeries(uid)
    .then((response: ComicSeriesFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as ComicSeriesFullResponse).comicSeries === undefined) {
        return {
          status: 404,
          error: true,
          message: "No comic series found.",
        } as STAPIError;
      }
      return (response as ComicSeriesFullResponse).comicSeries ?? {};
    })
    .catch((error: Error): STAPIError => {
      return error as STAPIError;
    });
}

// Comic Strip API
async function searchComicStrips(
  page: number,
  size: number,
  sort: string,
  formData: ComicStripSearchRecord
): Promise<ComicStripListResponse> {
  return ComicStripService.v1SearchComicStrips(page, size, sort, formData);
}

async function pageComicStrips(
  page: number,
  size: number
): Promise<ComicStripListResponse> {
  return ComicStripService.v1PageComicStrips(page, size);
}

async function getComicStrip(uid: string): Promise<ComicStripItemResponse> {
  return ComicStripService.v1GetComicStrip(uid)
    .then((response: ComicStripFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as ComicStripFullResponse).comicStrip === undefined) {
        return {
          status: 404,
          error: true,
          message: "No comic strip found.",
        } as STAPIError;
      }
      return (response as ComicStripFullResponse).comicStrip ?? {};
    })
    .catch((error: Error): STAPIError => {
      return error as STAPIError;
    });
}

// Company API
async function searchCompanies(
  page: number,
  size: number,
  sort: string,
  formData: CompanySearchRecord
): Promise<CompanyListResponse> {
  return CompanyService.v2SearchCompanies(page, size, sort, formData);
}

async function pageCompanies(
  page: number,
  size: number
): Promise<CompanyListResponse> {
  return CompanyService.v2PageCompanies(page, size);
}

async function getCompany(uid: string): Promise<CompanyItemResponse> {
  return CompanyService.v2GetCompany(uid).then(
    (response: CompanyFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as CompanyFullResponse).company === undefined) {
        return {
          status: 404,
          error: true,
          message: "No company found.",
        } as STAPIError;
      }
      return (response as CompanyFullResponse).company ?? {};
    }
  );
}

// Conflict API
async function searchConflicts(
  page: number,
  size: number,
  sort: string,
  formData: ConflictSearchRecord
): Promise<ConflictListResponse> {
  return ConflictService.v1SearchConflicts(page, size, sort, formData);
}

async function pageConflicts(
  page: number,
  size: number
): Promise<ConflictListResponse> {
  return ConflictService.v1PageConflicts(page, size);
}

async function getConflict(uid: string): Promise<ConflictItemResponse> {
  return ConflictService.v2GetConflict(uid).then(
    (response: ConflictV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as ConflictV2FullResponse).conflict === undefined) {
        return {
          status: 404,
          error: true,
          message: "No conflict found.",
        } as STAPIError;
      }
      return (response as ConflictV2FullResponse).conflict ?? {};
    }
  );
}

// DataVersion API
async function getDataVersion(): Promise<DataVersionResponse> {
  return DataVersionService.v1GetDataVersion();
}

// Element API
async function searchElements(
  page: number,
  size: number,
  sort: string,
  formData: ElementSearchRecord
): Promise<ElementListResponse> {
  return ElementService.v2SearchElements(page, size, sort, formData);
}

async function pageElements(
  page: number,
  size: number
): Promise<ElementListResponse> {
  return ElementService.v2PageElements(page, size);
}

async function getElement(uid: string): Promise<ElementItemResponse> {
  return ElementService.v2GetElement(uid).then(
    (response: ElementV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as ElementV2FullResponse).element === undefined) {
        return {
          status: 404,
          error: true,
          message: "No element found.",
        } as STAPIError;
      }
      return (response as ElementV2FullResponse).element ?? {};
    }
  );
}

// Episode API
async function searchEpisodes(
  page: number,
  size: number,
  sort: string,
  formData: EpisodeSearchRecord
): Promise<EpisodeListResponse> {
  return EpisodeService.v1SearchEpisodes(page, size, sort, formData);
}

async function pageEpisodes(
  page: number,
  size: number
): Promise<EpisodeListResponse> {
  return EpisodeService.v1PageEpisodes(page, size);
}

async function getEpisode(uid: string): Promise<EpisodeItemResponse> {
  return EpisodeService.v1GetEpisode(uid).then(
    (response: EpisodeFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as EpisodeFullResponse).episode === undefined) {
        return {
          status: 404,
          error: true,
          message: "No episode found.",
        } as STAPIError;
      }
      return (response as EpisodeFullResponse).episode ?? {};
    }
  );
}

// Food API
async function searchFoods(
  page: number,
  size: number,
  sort: string,
  formData: FoodSearchRecord
): Promise<FoodListResponse> {
  return FoodService.v1SearchFoods(page, size, sort, formData);
}

async function pageFoods(
  page: number,
  size: number
): Promise<FoodListResponse> {
  return FoodService.v1PageFoods(page, size);
}

async function getFood(uid: string): Promise<FoodItemResponse> {
  return FoodService.v1GetFood(uid).then(
    (response: FoodFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as FoodFullResponse).food === undefined) {
        return {
          status: 404,
          error: true,
          message: "No food found.",
        } as STAPIError;
      }
      return (response as FoodFullResponse).food ?? {};
    }
  );
}

// Literature API
async function searchLiterature(
  page: number,
  size: number,
  sort: string,
  formData: LiteratureSearchRecord
): Promise<LiteratureListResponse> {
  return LiteratureService.v1SearchLiterature(page, size, sort, formData);
}

async function pageLiterature(
  page: number,
  size: number
): Promise<LiteratureListResponse> {
  return LiteratureService.v1PageLiterature(page, size);
}

async function getLiterature(uid: string): Promise<LiteratureItemResponse> {
  return LiteratureService.v1GetLiterature(uid).then(
    (response: LiteratureFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as LiteratureFullResponse).literature === undefined) {
        return {
          status: 404,
          error: true,
          message: "No literature found.",
        } as STAPIError;
      }
      return (response as LiteratureFullResponse).literature ?? {};
    }
  );
}

// Location API
async function searchLocations(
  page: number,
  size: number,
  sort: string,
  formData: LocationSearchRecord
): Promise<LocationListResponse> {
  return LocationService.v2SearchLocations(page, size, sort, formData);
}

async function pageLocations(
  page: number,
  size: number
): Promise<LocationListResponse> {
  return LocationService.v2PageLocations(page, size);
}

async function getLocation(uid: string): Promise<LocationItemResponse> {
  return LocationService.v2GetLocation(uid).then(
    (response: LocationV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as LocationV2FullResponse).location === undefined) {
        return {
          status: 404,
          error: true,
          message: "No location found.",
        } as STAPIError;
      }
      return (response as LocationV2FullResponse).location ?? {};
    }
  );
}

// Magazine Series
async function searchMagazineSeries(
  page: number,
  size: number,
  sort: string,
  formData: MagazineSeriesSearchRecord
): Promise<MagazineSeriesListResponse> {
  return MagazineSeriesService.v1SearchMagazineSeries(
    page,
    size,
    sort,
    formData
  );
}

async function pageMagazineSeries(
  page: number,
  size: number
): Promise<MagazineSeriesListResponse> {
  return MagazineSeriesService.v1PageMagazineSeries(page, size);
}

async function getMagazineSeries(
  uid: string
): Promise<MagazineSeriesItemResponse> {
  return MagazineSeriesService.v1GetMagazineSeries(uid).then(
    (response: MagazineSeriesFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if (
        (response as MagazineSeriesFullResponse).magazineSeries === undefined
      ) {
        return {
          status: 404,
          error: true,
          message: "No magazine series found.",
        } as STAPIError;
      }
      return (response as MagazineSeriesFullResponse).magazineSeries ?? {};
    }
  );
}

// Magazine API
async function searchMagazines(
  page: number,
  size: number,
  sort: string,
  formData: MagazineSearchRecord
): Promise<MagazineListResponse> {
  return MagazineService.v1SearchMagazines(page, size, sort, formData);
}

async function pageMagazines(
  page: number,
  size: number
): Promise<MagazineListResponse> {
  return MagazineService.v1PageMagazines(page, size);
}

async function getMagazine(uid: string): Promise<MagazineItemResponse> {
  return MagazineService.v1GetMagazine(uid).then(
    (response: MagazineFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as MagazineFullResponse).magazine === undefined) {
        return {
          status: 404,
          error: true,
          message: "No magazine found.",
        } as STAPIError;
      }
      return (response as MagazineFullResponse).magazine ?? {};
    }
  );
}

// Material API
async function searchMaterials(
  page: number,
  size: number,
  sort: string,
  formData: MaterialSearchRecord
): Promise<MaterialListResponse> {
  return MaterialService.v1SearchMaterials(page, size, sort, formData);
}

async function pageMaterials(
  page: number,
  size: number
): Promise<MaterialListResponse> {
  return MaterialService.v1PageMaterials(page, size);
}

async function getMaterial(uid: string): Promise<MaterialItemResponse> {
  return MaterialService.v1GetMaterial(uid).then(
    (response: MaterialFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as MaterialFullResponse).material === undefined) {
        return {
          status: 404,
          error: true,
          message: "No material found.",
        } as STAPIError;
      }
      return (response as MaterialFullResponse).material ?? {};
    }
  );
}

// Medical Condition API
async function searchMedicalConditions(
  page: number,
  size: number,
  sort: string,
  formData: MedicalConditionSearchRecord
): Promise<MedicalConditionListResponse> {
  return MedicalConditionService.v1SearchMedicalConditions(
    page,
    size,
    sort,
    formData
  );
}

async function pageMedicalConditions(
  page: number,
  size: number
): Promise<MedicalConditionListResponse> {
  return MedicalConditionService.v1PageMedicalConditions(page, size);
}

async function getMedicalCondition(
  uid: string
): Promise<MedicalConditionItemResponse> {
  return MedicalConditionService.v1GetMedicalCondition(uid).then(
    (response: MedicalConditionFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if (
        (response as MedicalConditionFullResponse).medicalCondition ===
        undefined
      ) {
        return {
          status: 404,
          error: true,
          message: "No medical condition found.",
        } as STAPIError;
      }
      return (response as MedicalConditionFullResponse).medicalCondition ?? {};
    }
  );
}

// Movie API
async function searchMovies(
  page: number,
  size: number,
  sort: string,
  formData: MovieSearchRecord
): Promise<MovieListResponse> {
  return MovieService.v1SearchMovies(page, size, sort, formData);
}

async function pageMovies(
  page: number,
  size: number
): Promise<MovieListResponse> {
  return MovieService.v1PageMovies(page, size);
}

async function getMovie(uid: string): Promise<MovieItemResponse> {
  return MovieService.v1GetMovie(uid).then(
    (response: MovieFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as MovieFullResponse).movie === undefined) {
        return {
          status: 404,
          error: true,
          message: "No movie found.",
        } as STAPIError;
      }
      return (response as MovieFullResponse).movie ?? {};
    }
  );
}

// Occupation API
async function searchOccupations(
  page: number,
  size: number,
  sort: string,
  formData: OccupationSearchRecord
): Promise<OccupationListResponse> {
  return OccupationService.v2SearchOccupations(page, size, sort, formData);
}

async function pageOccupations(
  page: number,
  size: number
): Promise<OccupationListResponse> {
  return OccupationService.v2PageOccupations(page, size);
}

async function getOccupation(uid: string): Promise<OccupationItemResponse> {
  return OccupationService.v2GetOccupation(uid).then(
    (response: OccupationV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as OccupationV2FullResponse).occupation === undefined) {
        return {
          status: 404,
          error: true,
          message: "No occupation found.",
        } as STAPIError;
      }
      return (response as OccupationV2FullResponse).occupation ?? {};
    }
  );
}

// Organization API
async function searchOrganizations(
  page: number,
  size: number,
  sort: string,
  formData: OrganizationSearchRecord
): Promise<OrganizationListResponse> {
  return OrganizationService.v1SearchOrganizations(page, size, sort, formData);
}

async function pageOrganizations(
  page: number,
  size: number
): Promise<OrganizationListResponse> {
  return OrganizationService.v1PageOrganizations(page, size);
}

async function getOrganization(uid: string): Promise<OrganizationItemResponse> {
  return OrganizationService.v1GetOrganization(uid).then(
    (response: OrganizationFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as OrganizationFullResponse).organization === undefined) {
        return {
          status: 404,
          error: true,
          message: "No organization found.",
        } as STAPIError;
      }
      return (response as OrganizationFullResponse).organization ?? {};
    }
  );
}

// Performer API
async function searchPerformers(
  page: number,
  size: number,
  sort: string,
  formData: PerformerSearchRecord
): Promise<PerformerListResponse> {
  return PerformerService.v2SearchPerformers(page, size, sort, formData);
}

async function pagePerformers(
  page: number,
  size: number
): Promise<PerformerListResponse> {
  return PerformerService.v2PagePerformers(page, size);
}

async function getPerformer(uid: string): Promise<PerformerItemResponse> {
  return PerformerService.v2GetPerformer(uid).then(
    (response: PerformerV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as PerformerV2FullResponse).performer === undefined) {
        return {
          status: 404,
          error: true,
          message: "No performer found.",
        } as STAPIError;
      }
      return (response as PerformerV2FullResponse).performer ?? {};
    }
  );
}

// Season API
async function searchSeasons(
  page: number,
  size: number,
  sort: string,
  formData: SeasonSearchRecord
): Promise<SeasonListResponse> {
  return SeasonService.v1SearchSeasons(page, size, sort, formData);
}

async function pageSeasons(
  page: number,
  size: number
): Promise<SeasonListResponse> {
  return SeasonService.v1PageSeasons(page, size);
}

async function getSeason(uid: string): Promise<SeasonItemResponse> {
  return SeasonService.v1GetSeason(uid).then(
    (response: SeasonFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as SeasonFullResponse).season === undefined) {
        return {
          status: 404,
          error: true,
          message: "No season found.",
        } as STAPIError;
      }
      return (response as SeasonFullResponse).season ?? {};
    }
  );
}

// Series API
async function searchSeries(
  page: number,
  size: number,
  sort: string,
  formData: SeriesSearchRecord
): Promise<SeriesListResponse> {
  return SeriesService.v1SearchSeries(page, size, sort, formData);
}

async function pageSeries(
  page: number,
  size: number
): Promise<SeriesListResponse> {
  return SeriesService.v1PageSeries(page, size);
}

async function getSeries(uid: string): Promise<SeriesItemResponse> {
  return SeriesService.v1GetSeries(uid).then(
    (response: SeriesFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as SeriesFullResponse).series === undefined) {
        return {
          status: 404,
          error: true,
          message: "No series found.",
        } as STAPIError;
      }
      return (response as SeriesFullResponse).series ?? {};
    }
  );
}

// Soundtrack API
async function searchSoundtracks(
  page: number,
  size: number,
  sort: string,
  formData: SoundtrackSearchRecord
): Promise<SoundtrackListResponse> {
  return SoundtrackService.v1SearchSoundtracks(page, size, sort, formData);
}

async function pageSoundtracks(
  page: number,
  size: number
): Promise<SoundtrackListResponse> {
  return SoundtrackService.v1PageSoundtracks(page, size);
}

async function getSoundtrack(uid: string): Promise<SoundtrackItemResponse> {
  return SoundtrackService.v1GetSoundtrack(uid).then(
    (response: SoundtrackFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as SoundtrackFullResponse).soundtrack === undefined) {
        return {
          status: 404,
          error: true,
          message: "No soundtrack found.",
        } as STAPIError;
      }
      return (response as SoundtrackFullResponse).soundtrack ?? {};
    }
  );
}

// Spacecraft Class API
async function searchSpacecraftClasses(
  page: number,
  size: number,
  sort: string,
  formData: SpacecraftClassSearchRecord
): Promise<SpacecraftClassListResponse> {
  return SpacecraftClassService.v2SearchSpacecraftClasses(
    page,
    size,
    sort,
    formData
  );
}

async function pageSpacecraftClasses(
  page: number,
  size: number
): Promise<SpacecraftClassListResponse> {
  return SpacecraftClassService.v2PageSpacecraftClasses(page, size);
}

async function getSpacecraftClass(
  uid: string
): Promise<SpacecraftClassItemResponse> {
  return SpacecraftClassService.v3GetSpacecraftClass(uid).then(
    (response: SpacecraftClassV3FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if (
        (response as SpacecraftClassV3FullResponse).spacecraftClass ===
        undefined
      ) {
        return {
          status: 404,
          error: true,
          message: "No spacecraft class found.",
        } as STAPIError;
      }
      return (response as SpacecraftClassV3FullResponse).spacecraftClass ?? {};
    }
  );
}

// Spacecraft API
async function searchSpacecrafts(
  page: number,
  size: number,
  sort: string,
  formData: SpacecraftV2SearchCriteria
): Promise<SpacecraftListResponse> {
  return SpacecraftService.v2SearchSpacecrafts(page, size, sort, formData);
}

async function pageSpacecrafts(
  page: number,
  size: number
): Promise<SpacecraftListResponse> {
  return SpacecraftService.v2PageSpacecrafts(page, size);
}

async function getSpacecraft(uid: string): Promise<SpacecraftItemResponse> {
  return SpacecraftService.v2GetSpacecraft(uid).then(
    (response: SpacecraftV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as SpacecraftV2FullResponse).spacecraft === undefined) {
        return {
          status: 404,
          error: true,
          message: "No spacecraft found.",
        } as STAPIError;
      }
      return (response as SpacecraftV2FullResponse).spacecraft ?? {};
    }
  );
}

// Species API
async function searchSpecies(
  page: number,
  size: number,
  sort: string,
  formData: SpeciesSearchRecord
): Promise<SpeciesListResponse> {
  return SpeciesService.v2SearchSpecies(page, size, sort, formData);
}

async function pageSpecies(
  page: number,
  size: number
): Promise<SpeciesListResponse> {
  return SpeciesService.v2PageSpecies(page, size);
}

async function getSpecies(uid: string): Promise<SpeciesItemResponse> {
  return SpeciesService.v2GetSpecies(uid).then(
    (response: SpeciesV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as SpeciesV2FullResponse).species === undefined) {
        return {
          status: 404,
          error: true,
          message: "No species found.",
        } as STAPIError;
      }
      return (response as SpeciesV2FullResponse).species ?? {};
    }
  );
}

// Staff API
async function searchStaff(
  page: number,
  size: number,
  sort: string,
  formData: StaffSearchRecord
): Promise<StaffListResponse> {
  return StaffService.v2SearchStaff(page, size, sort, formData);
}

async function pageStaff(
  page: number,
  size: number
): Promise<StaffListResponse> {
  return StaffService.v2PageStaff(page, size);
}

async function getStaff(uid: string): Promise<StaffItemResponse> {
  return StaffService.v2GetStaff(uid).then(
    (response: StaffV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as StaffV2FullResponse).staff === undefined) {
        return {
          status: 404,
          error: true,
          message: "No staff found.",
        } as STAPIError;
      }
      return (response as StaffV2FullResponse).staff ?? {};
    }
  );
}

// Technology API
async function searchTechnologies(
  page: number,
  size: number,
  sort: string,
  formData: TechnologySearchRecord
): Promise<TechnologyListResponse> {
  return TechnologyService.v2SearchTechnology(page, size, sort, formData);
}

async function pageTechnologies(
  page: number,
  size: number
): Promise<TechnologyListResponse> {
  return TechnologyService.v2PageTechnology(page, size);
}

async function getTechnology(uid: string): Promise<TechnologyItemResponse> {
  return TechnologyService.v2GetTechnology(uid).then(
    (response: TechnologyV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as TechnologyV2FullResponse).technology === undefined) {
        return {
          status: 404,
          error: true,
          message: "No technology found.",
        } as STAPIError;
      }
      return (response as TechnologyV2FullResponse).technology ?? {};
    }
  );
}

// Title API
async function searchTitles(
  page: number,
  size: number,
  sort: string,
  formData: TitleSearchRecord
): Promise<TitleListResponse> {
  return TitleService.v2SearchTitles(page, size, sort, formData);
}

async function pageTitles(
  page: number,
  size: number
): Promise<TitleListResponse> {
  return TitleService.v2PageTitles(page, size);
}

async function getTitle(uid: string): Promise<TitleItemResponse> {
  return TitleService.v2GetTitle(uid).then(
    (response: TitleV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as TitleV2FullResponse).title === undefined) {
        return {
          status: 404,
          error: true,
          message: "No title found.",
        } as STAPIError;
      }
      return (response as TitleV2FullResponse).title ?? {};
    }
  );
}

// Trading Card Deck API
async function searchTradingCardDecks(
  page: number,
  size: number,
  sort: string,
  formData: TradingCardDeckSearchRecord
): Promise<TradingCardDeckListResponse> {
  return TradingCardDeckService.v1SearchTradingCardDecks(
    page,
    size,
    sort,
    formData
  );
}

async function pageTradingCardDecks(
  page: number,
  size: number
): Promise<TradingCardDeckListResponse> {
  return TradingCardDeckService.v1PageTradingCardDecks(page, size);
}

async function getTradingCardDeck(
  uid: string
): Promise<TradingCardDeckItemResponse> {
  return TradingCardDeckService.v1GetTradingCardDeck(uid).then(
    (response: TradingCardDeckFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if (
        (response as TradingCardDeckFullResponse).tradingCardDeck === undefined
      ) {
        return {
          status: 404,
          error: true,
          message: "No trading card deck found.",
        } as STAPIError;
      }
      return (response as TradingCardDeckFullResponse).tradingCardDeck ?? {};
    }
  );
}

// Trading Card API
async function searchTradingCards(
  page: number,
  size: number,
  sort: string,
  formData: TradingCardSearchRecord
): Promise<TradingCardListResponse> {
  return TradingCardService.v1SearchTradingCards(page, size, sort, formData);
}

async function pageTradingCards(
  page: number,
  size: number
): Promise<TradingCardListResponse> {
  return TradingCardService.v1PageTradingCards(page, size);
}

async function getTradingCard(uid: string): Promise<TradingCardItemResponse> {
  return TradingCardService.v1GetTradingCard(uid).then(
    (response: TradingCardFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as TradingCardFullResponse).tradingCard === undefined) {
        return {
          status: 404,
          error: true,
          message: "No trading card found.",
        } as STAPIError;
      }
      return (response as TradingCardFullResponse).tradingCard ?? {};
    }
  );
}

// Trading Card Set API
async function searchTradingCardSets(
  page: number,
  size: number,
  sort: string,
  formData: TradingCardSetSearchRecord
): Promise<TradingCardSetListResponse> {
  return TradingCardSetService.v1SearchTradingCardSets(
    page,
    size,
    sort,
    formData
  );
}

async function pageTradingCardSets(
  page: number,
  size: number
): Promise<TradingCardSetListResponse> {
  return TradingCardSetService.v1PageTradingCardSets(page, size);
}

async function getTradingCardSet(
  uid: string
): Promise<TradingCardSetItemResponse> {
  return TradingCardSetService.v1GetTradingCardSet(uid).then(
    (response: TradingCardSetFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if (
        (response as TradingCardSetFullResponse).tradingCardSet === undefined
      ) {
        return {
          status: 404,
          error: true,
          message: "No trading card set found.",
        } as STAPIError;
      }
      return (response as TradingCardSetFullResponse).tradingCardSet ?? {};
    }
  );
}

// Video Game API
async function searchVideoGames(
  page: number,
  size: number,
  sort: string,
  formData: VideoGameSearchRecord
): Promise<VideoGameListResponse> {
  return VideoGameService.v1SearchVideoGames(page, size, sort, formData);
}

async function pageVideoGames(
  page: number,
  size: number
): Promise<VideoGameListResponse> {
  return VideoGameService.v1PageVideoGames(page, size);
}

async function getVideoGame(uid: string): Promise<VideoGameItemResponse> {
  return VideoGameService.v1GetVideoGame(uid).then(
    (response: VideoGameFullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as VideoGameFullResponse).videoGame === undefined) {
        return {
          status: 404,
          error: true,
          message: "No video game found.",
        } as STAPIError;
      }
      return (response as VideoGameFullResponse).videoGame ?? {};
    }
  );
}

// Video Release API
async function searchVideoReleases(
  page: number,
  size: number,
  sort: string,
  formData: VideoReleaseSearchRecord
): Promise<VideoReleaseListResponse> {
  return VideoReleaseService.v2SearchVideoReleases(page, size, sort, formData);
}

async function pageVideoReleases(
  page: number,
  size: number
): Promise<VideoReleaseListResponse> {
  return VideoReleaseService.v2PageVideoReleases(page, size);
}

async function getVideoRelease(uid: string): Promise<VideoReleaseItemResponse> {
  return VideoReleaseService.v2GetVideoRelease(uid).then(
    (response: VideoReleaseV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as VideoReleaseV2FullResponse).videoRelease === undefined) {
        return {
          status: 404,
          error: true,
          message: "No video release found.",
        } as STAPIError;
      }
      return (response as VideoReleaseV2FullResponse).videoRelease ?? {};
    }
  );
}

// Weapon API
async function searchWeapons(
  page: number,
  size: number,
  sort: string,
  formData: WeaponSearchRecord
): Promise<WeaponListResponse> {
  return WeaponService.v2SearchWeapons(page, size, sort, formData);
}

async function pageWeapons(
  page: number,
  size: number
): Promise<WeaponListResponse> {
  return WeaponService.v2PageWeapons(page, size);
}

async function getWeapon(uid: string): Promise<WeaponItemResponse> {
  return WeaponService.v2GetWeapon(uid).then(
    (response: WeaponV2FullResponse | Error) => {
      if (response instanceof Error) {
        return response as STAPIError;
      }
      if ((response as WeaponV2FullResponse).weapon === undefined) {
        return {
          status: 404,
          error: true,
          message: "No weapon found.",
        } as STAPIError;
      }
      return (response as WeaponV2FullResponse).weapon ?? {};
    }
  );
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
