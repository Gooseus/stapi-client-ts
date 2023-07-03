# Star Trek API (STAPI) Typescript Client

This is a client library for the [STAPI](https://stapi.co) API. It is written in Typescript and was mostly generated from the OpenAPI specification using [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen).

This client has some opinionated changes to the generated code / API, such as:
* Abstracts versions, providing access to only the latest version of each endpoint.
* Exports simplified types that also uses the latest versions.
* Responses are normalized so the resource name does not appear as a key in the response object.
  * For example, the response for `GET /character` is `{ items: Character[] }` instead of `{ characters: Character[] }` and the response for a single entity (`GET /character/:uid`) is just the Character object itself instead of `{ character: Character }`.

## Installation

```bash
npm install stapi-client-ts
```

## Usage

```typescript
import STAPIClient from "stapi-client-ts";
const Movies = await STAPIClient.Movies.page();
console.log(Movies);
```

# Example

See [stapi-client-example]() for an example of an Express server that uses this client.

# Disclaimer

I'm not a trekkie and I know very little about Star Trek. I created this in < 12 hours as a personal challenge to see how well I could leverage my existing skills. I'm not affiliated with STAPI in any way. It isn't complete and I may at least finish this, but it is unlikely that I will maintain this project beyond this month, but I will accept pull requests.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
