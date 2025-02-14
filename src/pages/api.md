---
layout: "../layouts/Page.astro"
title: "API"
---

# Community API

Stormgate World provides a public API for the community to use. The API, just like the game, is currently in beta and may change without notice. The API is currently read-only and does not require authentication.

## Usage Guidelines

Feel free to use the API for your own projects, but please be considerate of the server load. Specifically, please do not crawl the API to make a full copy of data. If you need a full copy of the data please contact us and we can provide a dump.

If you made something cool with the API, please let us know! We'd love to feature it on our website.

> The API is currently in beta and may change, however we will try to maintain backwards compatibility as much as possible. Follow the Discord Channel for updates.

## Privacy

The API exposes player nicknames, Steam IDs, and match results following the [Privacy Policy](https://playstormgate.com/legal/privacy-policy) of Frost Giant Studios. Our backend includes features that will add control the visibility of player profiles (i.e. opt-out/private profiles) – which may mean that some data is not available via the API. Please refer to our own [privacy policy](/privacy) for more information.

## OpenAPI Spec & Docs

The API is documented using the OpenAPI 3.1 specification. You can view the [auto-generated documentation](https://api.stormgateworld.com/swagger-ui/#/Leaderboards/getLeaderboard) and the specification in [openapi.json](https://api.stormgateworld.com/api-docs/openapi.json).

## Endpoints

### Leaderboard

```
GET https://api.stormgateworld.com/v0/leaderboards/ranked_1v1
```

[View Live](https://api.stormgateworld.com/v0/leaderboards/ranked_1v1) | [Docs](https://api.stormgateworld.com/swagger-ui/#/Leaderboards/getLeaderboard)

#### Example Response

```json
{
  "page": 1,
  "count": 100,
  "total": 956,
  "entries": [
    {
      "leaderboard_entry_id": "PlXLrT",
      "leaderboard": "ranked_1v1",
      "player_id": "9qgUTN",
      "anynymous": false,
      "nickname": "VortiX",
      "nickname_discriminator": "2730",
      "rank": 1,
      "race": "infernals",
      "league": "master",
      "tier": 2,
      "mmr": 2138.226,
      "points": 2000.4164,
      "wins": 52,
      "losses": 6,
      "ties": 0,
      "matches": 58,
      "win_rate": 89.65517241379311
    },
    {
      "etc...": "etc..."
    }
  ]
}
```

### Player

```
GET https://api.stormgateworld.com/v0/players/{player_id}
```

[View Live](https://api.stormgateworld.com/v0/players/PlXLrT) | [Docs](https://api.stormgateworld.com/swagger-ui/#/Players/getPlayer)

#### Example Response

```json
{
  "id": "9qgUTN",
  "anonymous": false,
  "nickname": "VortiX",
  "nickname_discriminator": "2730",
  "steam_id": "76561198102723093",
  "leaderboard_entries": [
    {
      "leaderboard_entry_id": "PlXLrT",
      "leaderboard": "ranked_1v1",
      "anynymous": false,
      "rank": 1,
      "race": "infernals",
      "league": "master",
      "tier": 2,
      "mmr": 2138.226,
      "points": 2000.4164,
      "wins": 52,
      "losses": 6,
      "ties": 0,
      "matches": 58,
      "win_rate": 89.65517241379311
    },
    {
      "leaderboard_entry_id": "vPgr56",
      "leaderboard": "ranked_1v1",
      "anynymous": false,
      "rank": 152,
      "race": "vanguard",
      "league": "aspirant",
      "tier": 3,
      "mmr": 1850.4203,
      "points": 957.48737,
      "wins": 9,
      "losses": 1,
      "ties": 0,
      "matches": 10,
      "win_rate": 90
    }
  ]
}
```

### Player Matches

```
GET https://api.stormgateworld.com/v0/players/{player_id}/matches
```

[View Live](https://api.stormgateworld.com/v0/players/OwJyEu/matches) | [Docs](https://api.stormgateworld.com/swagger-ui/#/Players/getPlayerMatches)

#### Example Response

See [Matches](#matches) for the response format.

### Matches

```
GET https://api.stormgateworld.com/v0/matches
```

[View Live](https://api.stormgateworld.com/v0/matches) | [Docs](https://api.stormgateworld.com/swagger-ui/#/Matches/getMatches)

#### Example Response

```json
{
  "count": 1,
  "page": 1,
  "total": 5317,
  "matches": [
    {
      "match_id": "U5Z5q0",
      "state": "ongoing",
      "leaderboard": "ranked_1v1",
      "server": "London",
      "players": [
        {
          "player": {
            "player_id": "OwJyEu",
            "nickname": "kauP",
            "nickname_discriminator": "0657"
          },
          "player_leaderboard_entry": {
            "league": "platinum",
            "tier": 1,
            "rank": 39
          },
          "race": "infernals",
          "team": 0,
          "party": 0,
          "rating": 1749.3805,
          "rating_updated": 0,
          "rating_diff": null,
          "result": null,
          "ping": 16,
          "scores": null
        },
        {
          "player": {
            "player_id": "5lscid",
            "nickname": "Winckel",
            "nickname_discriminator": "5036"
          },
          "player_leaderboard_entry": {
            "league": "silver",
            "tier": 2,
            "rank": 70
          },
          "race": "vanguard",
          "team": 1,
          "party": 1,
          "rating": 1774.8973,
          "rating_updated": 0,
          "rating_diff": null,
          "result": null,
          "ping": 32,
          "scores": null
        }
      ],
      "created_at": "2024-02-01T17:23:35",
      "ended_at": null,
      "duration": null
    },
    {
      "etc...": "etc..."
    }
  ]
}
```

## FAQ

- **How did you get the data?**
  In collaboration with Frost Giant Studios we have created a system that fetches data from the game servers and stores it in normalized form. The API is a read-only interface to that data meant for community usage.
- **Where is the official API?**
  There is no official API yet. We're a fan made project trying to help the community by offering an API while the developers at Frost Giant Studios are busy building the game.
- **How often is the data updated?**
  The data is updated every 5 minutes.

## Contact

If you have any questions, feedback, bugs or other issues to discuss, please join the [#stormgateworld-api](https://discord.com/channels/1101590942076653660/1202677262478999612) Discord Channel on the Official Playtest Discord Server (invite may be required).
