const MmaChampions = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:29:07+00:00'],
        },
        categories: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['sr:category:1089'] },
              name: { type: 'string', examples: ['UFC'] },
              weight_classes: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    description: { type: 'string', examples: ['bantamweight'] },
                    competitor: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          examples: ['sr:competitor:260623'],
                        },
                        name: {
                          type: 'string',
                          examples: ['Sterling, Aljamain'],
                        },
                        abbreviation: { type: 'string', examples: ['STE'] },
                        gender: { type: 'string', examples: ['male'] },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaCompetitionInfo = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          competition_id: {
            type: 'string',
            default: 'sr:competition:25457',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given competition',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'competition_id', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:30:00+00:00'],
        },
        competition: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['sr:competition:25357'] },
            name: {
              type: 'string',
              examples: ['UFC Contender Series, Las Vegas, Week 26'],
            },
            parent_id: { type: 'string', examples: ['sr:competition:25325'] },
            category: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['sr:category:1089'] },
                name: { type: 'string', examples: ['UFC'] },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaCompetitionsList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:32:11+00:00'],
        },
        competitions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['sr:competition:25357'] },
              name: {
                type: 'string',
                examples: ['UFC Contender Series, Las Vegas, Week 26'],
              },
              parent_id: { type: 'string', examples: ['sr:competition:25325'] },
              category: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['sr:category:1089'] },
                  name: { type: 'string', examples: ['UFC'] },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaCompetitionsSeasons = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          competition_id: {
            type: 'string',
            default: 'sr:competition:25457',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given competition',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'competition_id', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:33:34+00:00'],
        },
        seasons: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['sr:season:86728'] },
              name: {
                type: 'string',
                examples: [
                  "Dana White's Contender Series: Season 5, Week 6 2021",
                ],
              },
              start_date: { type: 'string', examples: ['2021-10-05'] },
              end_date: { type: 'string', examples: ['2021-10-06'] },
              year: { type: 'string', examples: ['2021'] },
              competition_id: {
                type: 'string',
                examples: ['sr:competition:35146'],
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaCompetitorMergeMappings = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaCompetitorProfile = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          competitor_id: {
            type: 'string',
            default: 'sr:competitor:237652',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given competitor',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'competitor_id', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:34:42+00:00'],
        },
        competitor: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['sr:competitor:237652'] },
            name: { type: 'string', examples: ['Holloway, Max'] },
            abbreviation: { type: 'string', examples: ['HOL'] },
            gender: { type: 'string', examples: ['male'] },
          },
        },
        info: {
          type: 'object',
          properties: {
            birth_city: { type: 'string', examples: ['Honolulu'] },
            birth_state: { type: 'string', examples: ['HI'] },
            birth_country: { type: 'string', examples: ['UNITED STATES'] },
            birth_country_code: { type: 'string', examples: ['USA'] },
            birth_date: { type: 'string', examples: ['1991-12-04'] },
            fighting_out_of_city: { type: 'string', examples: ['Waianae'] },
            fighting_out_of_country: {
              type: 'string',
              examples: ['UNITED STATES'],
            },
            fighting_out_of_country_code: { type: 'string', examples: ['USA'] },
            fighting_out_of_state: { type: 'string', examples: ['HI'] },
            reach: { type: 'integer', default: 0, examples: [175] },
            height: { type: 'integer', default: 0, examples: [180] },
            weight: { type: 'number', default: 0, examples: [65.8] },
            nickname: { type: 'string', examples: ['Blessed'] },
          },
        },
        record: {
          type: 'object',
          properties: {
            wins: { type: 'integer', default: 0, examples: [24] },
            draws: { type: 'integer', default: 0, examples: [0] },
            losses: { type: 'integer', default: 0, examples: [7] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaCompetitorSummaries = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          competitor_id: {
            type: 'string',
            default: 'sr:competitor:237652',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given competitor',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'competitor_id', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2024-02-26T15:32:02.342Z'],
        },
        summaries: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              sport_event: {
                type: 'object',
                properties: {
                  channels: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        url: { type: 'string', examples: ['string'] },
                      },
                    },
                  },
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        abbreviation: { type: 'string', examples: ['string'] },
                        age_group: { type: 'string', examples: ['U23'] },
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        gender: { type: 'string', examples: ['string'] },
                        id: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        qualifier: { type: 'string', examples: ['home'] },
                        virtual: {
                          type: 'boolean',
                          default: true,
                          examples: [true],
                        },
                      },
                    },
                  },
                  coverage: {
                    type: 'object',
                    properties: {
                      sport_event_properties: {
                        type: 'object',
                        properties: {
                          data_complete: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          live: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                        },
                      },
                      type: { type: 'string', examples: ['sport_event'] },
                    },
                  },
                  id: { type: 'string', examples: ['string'] },
                  replaced_by: { type: 'string', examples: ['string'] },
                  resume_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:32:02.343Z'],
                  },
                  sport_event_context: {
                    type: 'object',
                    properties: {
                      category: {
                        type: 'object',
                        properties: {
                          country_code: {
                            type: 'string',
                            examples: ['string'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      competition: {
                        type: 'object',
                        properties: {
                          gender: { type: 'string', examples: ['string'] },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          parent_id: { type: 'string', examples: ['string'] },
                          type: { type: 'string', examples: ['string'] },
                        },
                      },
                      season: {
                        type: 'object',
                        properties: {
                          competition_id: {
                            type: 'string',
                            examples: ['string'],
                          },
                          disabled: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          end_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          start_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          year: { type: 'string', examples: ['string'] },
                        },
                      },
                      sport: {
                        type: 'object',
                        properties: {
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      stage: {
                        type: 'object',
                        properties: {
                          phase: {
                            type: 'string',
                            examples: ['1st_part_of_season_1st_leg'],
                          },
                          type: { type: 'string', examples: ['Early Prelims'] },
                        },
                      },
                    },
                  },
                  start_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:32:02.343Z'],
                  },
                  start_time_confirmed: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  venue: {
                    type: 'object',
                    properties: {
                      capacity: { type: 'integer', default: 0, examples: [0] },
                      changed: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      city_name: { type: 'string', examples: ['string'] },
                      country_code: { type: 'string', examples: ['string'] },
                      country_name: { type: 'string', examples: ['string'] },
                      id: { type: 'string', examples: ['string'] },
                      map_coordinates: { type: 'string', examples: ['string'] },
                      name: { type: 'string', examples: ['string'] },
                      reduced_capacity: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      reduced_capacity_max: {
                        type: 'integer',
                        default: 0,
                        examples: [0],
                      },
                      state: { type: 'string', examples: ['string'] },
                      timezone: { type: 'string', examples: ['string'] },
                    },
                  },
                },
              },
              sport_event_status: {
                type: 'object',
                properties: {
                  end_position: {
                    type: 'string',
                    examples: ['after_drop_to_ground'],
                  },
                  end_strike: { type: 'string', examples: ['elbow'] },
                  end_target: { type: 'string', examples: ['body'] },
                  final_round: { type: 'integer', default: 0, examples: [0] },
                  final_round_length: { type: 'string', examples: ['string'] },
                  main_event: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  match_status: { type: 'string', examples: ['not_started'] },
                  method: { type: 'string', examples: ['decision_majority'] },
                  scheduled_length: {
                    type: 'integer',
                    default: 0,
                    examples: [0],
                  },
                  scout_abandoned: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  status: { type: 'string', examples: ['not_started'] },
                  submission: { type: 'string', examples: ['anaconda_choke'] },
                  title_fight: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  weight_class: { type: 'string', examples: ['string'] },
                  winner: { type: 'string', examples: ['home_team'] },
                  winner_id: { type: 'string', examples: ['string'] },
                },
              },
              statistics: {
                type: 'object',
                properties: {
                  periods: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        competitors: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              abbreviation: {
                                type: 'string',
                                examples: ['string'],
                              },
                              age_group: { type: 'string', examples: ['U23'] },
                              country: { type: 'string', examples: ['string'] },
                              country_code: {
                                type: 'string',
                                examples: ['string'],
                              },
                              gender: { type: 'string', examples: ['string'] },
                              id: { type: 'string', examples: ['string'] },
                              name: { type: 'string', examples: ['string'] },
                              qualifier: { type: 'string', examples: ['home'] },
                              statistics: {
                                type: 'object',
                                properties: {
                                  control: {
                                    type: 'string',
                                    examples: ['6:04'],
                                  },
                                  knockdowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  submission_attempts: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedown_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                },
                              },
                              virtual: {
                                type: 'boolean',
                                default: true,
                                examples: [true],
                              },
                            },
                          },
                        },
                        number: { type: 'integer', default: 0, examples: [0] },
                      },
                    },
                  },
                  totals: {
                    type: 'object',
                    properties: {
                      competitors: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            abbreviation: {
                              type: 'string',
                              examples: ['string'],
                            },
                            age_group: { type: 'string', examples: ['U23'] },
                            country: { type: 'string', examples: ['string'] },
                            country_code: {
                              type: 'string',
                              examples: ['string'],
                            },
                            gender: { type: 'string', examples: ['string'] },
                            id: { type: 'string', examples: ['string'] },
                            name: { type: 'string', examples: ['string'] },
                            qualifier: { type: 'string', examples: ['home'] },
                            statistics: {
                              type: 'object',
                              properties: {
                                control: { type: 'string', examples: ['6:04'] },
                                knockdowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                submission_attempts: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedown_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                              },
                            },
                            virtual: {
                              type: 'boolean',
                              default: true,
                              examples: [true],
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaCompetitorVsCompetitor = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          competitor_id: {
            type: 'string',
            default: 'sr:competitor:237652',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given competitor',
          },
          competitor_id2: {
            type: 'string',
            default: 'sr:competitor:237640',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given competitor',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: [
          'access_level',
          'language_code',
          'competitor_id',
          'competitor_id2',
          'format',
        ],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        competitors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              abbreviation: { type: 'string', examples: ['string'] },
              age_group: { type: 'string', examples: ['U23'] },
              country: { type: 'string', examples: ['string'] },
              country_code: { type: 'string', examples: ['string'] },
              gender: { type: 'string', examples: ['string'] },
              id: { type: 'string', examples: ['string'] },
              name: { type: 'string', examples: ['string'] },
              qualifier: { type: 'string', examples: ['home'] },
              virtual: { type: 'boolean', default: true, examples: [true] },
            },
          },
        },
        generated_at: {
          type: 'string',
          examples: ['2024-02-26T15:32:15.352Z'],
        },
        last_meetings: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              sport_event: {
                type: 'object',
                properties: {
                  channels: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        url: { type: 'string', examples: ['string'] },
                      },
                    },
                  },
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        abbreviation: { type: 'string', examples: ['string'] },
                        age_group: { type: 'string', examples: ['U23'] },
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        gender: { type: 'string', examples: ['string'] },
                        id: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        qualifier: { type: 'string', examples: ['home'] },
                        virtual: {
                          type: 'boolean',
                          default: true,
                          examples: [true],
                        },
                      },
                    },
                  },
                  coverage: {
                    type: 'object',
                    properties: {
                      sport_event_properties: {
                        type: 'object',
                        properties: {
                          data_complete: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          live: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                        },
                      },
                      type: { type: 'string', examples: ['sport_event'] },
                    },
                  },
                  id: { type: 'string', examples: ['string'] },
                  replaced_by: { type: 'string', examples: ['string'] },
                  resume_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:32:15.352Z'],
                  },
                  sport_event_context: {
                    type: 'object',
                    properties: {
                      category: {
                        type: 'object',
                        properties: {
                          country_code: {
                            type: 'string',
                            examples: ['string'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      competition: {
                        type: 'object',
                        properties: {
                          gender: { type: 'string', examples: ['string'] },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          parent_id: { type: 'string', examples: ['string'] },
                          type: { type: 'string', examples: ['string'] },
                        },
                      },
                      season: {
                        type: 'object',
                        properties: {
                          competition_id: {
                            type: 'string',
                            examples: ['string'],
                          },
                          disabled: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          end_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          start_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          year: { type: 'string', examples: ['string'] },
                        },
                      },
                      sport: {
                        type: 'object',
                        properties: {
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      stage: {
                        type: 'object',
                        properties: {
                          phase: {
                            type: 'string',
                            examples: ['1st_part_of_season_1st_leg'],
                          },
                          type: { type: 'string', examples: ['Early Prelims'] },
                        },
                      },
                    },
                  },
                  start_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:32:15.353Z'],
                  },
                  start_time_confirmed: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  venue: {
                    type: 'object',
                    properties: {
                      capacity: { type: 'integer', default: 0, examples: [0] },
                      changed: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      city_name: { type: 'string', examples: ['string'] },
                      country_code: { type: 'string', examples: ['string'] },
                      country_name: { type: 'string', examples: ['string'] },
                      id: { type: 'string', examples: ['string'] },
                      map_coordinates: { type: 'string', examples: ['string'] },
                      name: { type: 'string', examples: ['string'] },
                      reduced_capacity: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      reduced_capacity_max: {
                        type: 'integer',
                        default: 0,
                        examples: [0],
                      },
                      state: { type: 'string', examples: ['string'] },
                      timezone: { type: 'string', examples: ['string'] },
                    },
                  },
                },
              },
              sport_event_status: {
                type: 'object',
                properties: {
                  end_position: {
                    type: 'string',
                    examples: ['after_drop_to_ground'],
                  },
                  end_strike: { type: 'string', examples: ['elbow'] },
                  end_target: { type: 'string', examples: ['body'] },
                  final_round: { type: 'integer', default: 0, examples: [0] },
                  final_round_length: { type: 'string', examples: ['string'] },
                  main_event: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  match_status: { type: 'string', examples: ['not_started'] },
                  method: { type: 'string', examples: ['decision_majority'] },
                  scheduled_length: {
                    type: 'integer',
                    default: 0,
                    examples: [0],
                  },
                  scout_abandoned: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  status: { type: 'string', examples: ['not_started'] },
                  submission: { type: 'string', examples: ['anaconda_choke'] },
                  title_fight: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  weight_class: { type: 'string', examples: ['string'] },
                  winner: { type: 'string', examples: ['home_team'] },
                  winner_id: { type: 'string', examples: ['string'] },
                },
              },
              statistics: {
                type: 'object',
                properties: {
                  periods: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        competitors: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              abbreviation: {
                                type: 'string',
                                examples: ['string'],
                              },
                              age_group: { type: 'string', examples: ['U23'] },
                              country: { type: 'string', examples: ['string'] },
                              country_code: {
                                type: 'string',
                                examples: ['string'],
                              },
                              gender: { type: 'string', examples: ['string'] },
                              id: { type: 'string', examples: ['string'] },
                              name: { type: 'string', examples: ['string'] },
                              qualifier: { type: 'string', examples: ['home'] },
                              statistics: {
                                type: 'object',
                                properties: {
                                  control: {
                                    type: 'string',
                                    examples: ['6:04'],
                                  },
                                  knockdowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  submission_attempts: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedown_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                },
                              },
                              virtual: {
                                type: 'boolean',
                                default: true,
                                examples: [true],
                              },
                            },
                          },
                        },
                        number: { type: 'integer', default: 0, examples: [0] },
                      },
                    },
                  },
                  totals: {
                    type: 'object',
                    properties: {
                      competitors: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            abbreviation: {
                              type: 'string',
                              examples: ['string'],
                            },
                            age_group: { type: 'string', examples: ['U23'] },
                            country: { type: 'string', examples: ['string'] },
                            country_code: {
                              type: 'string',
                              examples: ['string'],
                            },
                            gender: { type: 'string', examples: ['string'] },
                            id: { type: 'string', examples: ['string'] },
                            name: { type: 'string', examples: ['string'] },
                            qualifier: { type: 'string', examples: ['home'] },
                            statistics: {
                              type: 'object',
                              properties: {
                                control: { type: 'string', examples: ['6:04'] },
                                knockdowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                submission_attempts: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedown_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                              },
                            },
                            virtual: {
                              type: 'boolean',
                              default: true,
                              examples: [true],
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        next_meetings: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              sport_event: {
                type: 'object',
                properties: {
                  channels: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        url: { type: 'string', examples: ['string'] },
                      },
                    },
                  },
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        abbreviation: { type: 'string', examples: ['string'] },
                        age_group: { type: 'string', examples: ['U23'] },
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        gender: { type: 'string', examples: ['string'] },
                        id: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        qualifier: { type: 'string', examples: ['home'] },
                        virtual: {
                          type: 'boolean',
                          default: true,
                          examples: [true],
                        },
                      },
                    },
                  },
                  coverage: {
                    type: 'object',
                    properties: {
                      sport_event_properties: {
                        type: 'object',
                        properties: {
                          data_complete: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          live: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                        },
                      },
                      type: { type: 'string', examples: ['sport_event'] },
                    },
                  },
                  id: { type: 'string', examples: ['string'] },
                  replaced_by: { type: 'string', examples: ['string'] },
                  resume_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:32:15.353Z'],
                  },
                  sport_event_context: {
                    type: 'object',
                    properties: {
                      category: {
                        type: 'object',
                        properties: {
                          country_code: {
                            type: 'string',
                            examples: ['string'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      competition: {
                        type: 'object',
                        properties: {
                          gender: { type: 'string', examples: ['string'] },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          parent_id: { type: 'string', examples: ['string'] },
                          type: { type: 'string', examples: ['string'] },
                        },
                      },
                      season: {
                        type: 'object',
                        properties: {
                          competition_id: {
                            type: 'string',
                            examples: ['string'],
                          },
                          disabled: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          end_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          start_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          year: { type: 'string', examples: ['string'] },
                        },
                      },
                      sport: {
                        type: 'object',
                        properties: {
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      stage: {
                        type: 'object',
                        properties: {
                          phase: {
                            type: 'string',
                            examples: ['1st_part_of_season_1st_leg'],
                          },
                          type: { type: 'string', examples: ['Early Prelims'] },
                        },
                      },
                    },
                  },
                  start_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:32:15.353Z'],
                  },
                  start_time_confirmed: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  venue: {
                    type: 'object',
                    properties: {
                      capacity: { type: 'integer', default: 0, examples: [0] },
                      changed: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      city_name: { type: 'string', examples: ['string'] },
                      country_code: { type: 'string', examples: ['string'] },
                      country_name: { type: 'string', examples: ['string'] },
                      id: { type: 'string', examples: ['string'] },
                      map_coordinates: { type: 'string', examples: ['string'] },
                      name: { type: 'string', examples: ['string'] },
                      reduced_capacity: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      reduced_capacity_max: {
                        type: 'integer',
                        default: 0,
                        examples: [0],
                      },
                      state: { type: 'string', examples: ['string'] },
                      timezone: { type: 'string', examples: ['string'] },
                    },
                  },
                },
              },
              sport_event_status: {
                type: 'object',
                properties: {
                  end_position: {
                    type: 'string',
                    examples: ['after_drop_to_ground'],
                  },
                  end_strike: { type: 'string', examples: ['elbow'] },
                  end_target: { type: 'string', examples: ['body'] },
                  final_round: { type: 'integer', default: 0, examples: [0] },
                  final_round_length: { type: 'string', examples: ['string'] },
                  main_event: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  match_status: { type: 'string', examples: ['not_started'] },
                  method: { type: 'string', examples: ['decision_majority'] },
                  scheduled_length: {
                    type: 'integer',
                    default: 0,
                    examples: [0],
                  },
                  scout_abandoned: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  status: { type: 'string', examples: ['not_started'] },
                  submission: { type: 'string', examples: ['anaconda_choke'] },
                  title_fight: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  weight_class: { type: 'string', examples: ['string'] },
                  winner: { type: 'string', examples: ['home_team'] },
                  winner_id: { type: 'string', examples: ['string'] },
                },
              },
              statistics: {
                type: 'object',
                properties: {
                  periods: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        competitors: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              abbreviation: {
                                type: 'string',
                                examples: ['string'],
                              },
                              age_group: { type: 'string', examples: ['U23'] },
                              country: { type: 'string', examples: ['string'] },
                              country_code: {
                                type: 'string',
                                examples: ['string'],
                              },
                              gender: { type: 'string', examples: ['string'] },
                              id: { type: 'string', examples: ['string'] },
                              name: { type: 'string', examples: ['string'] },
                              qualifier: { type: 'string', examples: ['home'] },
                              statistics: {
                                type: 'object',
                                properties: {
                                  control: {
                                    type: 'string',
                                    examples: ['6:04'],
                                  },
                                  knockdowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  submission_attempts: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedown_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                },
                              },
                              virtual: {
                                type: 'boolean',
                                default: true,
                                examples: [true],
                              },
                            },
                          },
                        },
                        number: { type: 'integer', default: 0, examples: [0] },
                      },
                    },
                  },
                  totals: {
                    type: 'object',
                    properties: {
                      competitors: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            abbreviation: {
                              type: 'string',
                              examples: ['string'],
                            },
                            age_group: { type: 'string', examples: ['U23'] },
                            country: { type: 'string', examples: ['string'] },
                            country_code: {
                              type: 'string',
                              examples: ['string'],
                            },
                            gender: { type: 'string', examples: ['string'] },
                            id: { type: 'string', examples: ['string'] },
                            name: { type: 'string', examples: ['string'] },
                            qualifier: { type: 'string', examples: ['home'] },
                            statistics: {
                              type: 'object',
                              properties: {
                                control: { type: 'string', examples: ['6:04'] },
                                knockdowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                submission_attempts: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedown_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                              },
                            },
                            virtual: {
                              type: 'boolean',
                              default: true,
                              examples: [true],
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaDailySummaries = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          date: {
            type: 'string',
            format: 'date',
            default: '2022-02-06',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Date in YYYY-MM-DD',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'date', 'format'],
      },
      {
        type: 'object',
        properties: {
          start: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Number to start the list of results from. Example: start=0',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Number to limit the number of results. Minimum value is 1, maximum value is 200. Example: limit=200',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2024-02-26T15:32:42.913Z'],
        },
        summaries: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              sport_event: {
                type: 'object',
                properties: {
                  channels: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        url: { type: 'string', examples: ['string'] },
                      },
                    },
                  },
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        abbreviation: { type: 'string', examples: ['string'] },
                        age_group: { type: 'string', examples: ['U23'] },
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        gender: { type: 'string', examples: ['string'] },
                        id: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        qualifier: { type: 'string', examples: ['home'] },
                        virtual: {
                          type: 'boolean',
                          default: true,
                          examples: [true],
                        },
                      },
                    },
                  },
                  coverage: {
                    type: 'object',
                    properties: {
                      sport_event_properties: {
                        type: 'object',
                        properties: {
                          data_complete: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          live: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                        },
                      },
                      type: { type: 'string', examples: ['sport_event'] },
                    },
                  },
                  id: { type: 'string', examples: ['string'] },
                  replaced_by: { type: 'string', examples: ['string'] },
                  resume_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:32:42.913Z'],
                  },
                  sport_event_context: {
                    type: 'object',
                    properties: {
                      category: {
                        type: 'object',
                        properties: {
                          country_code: {
                            type: 'string',
                            examples: ['string'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      competition: {
                        type: 'object',
                        properties: {
                          gender: { type: 'string', examples: ['string'] },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          parent_id: { type: 'string', examples: ['string'] },
                          type: { type: 'string', examples: ['string'] },
                        },
                      },
                      season: {
                        type: 'object',
                        properties: {
                          competition_id: {
                            type: 'string',
                            examples: ['string'],
                          },
                          disabled: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          end_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          start_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          year: { type: 'string', examples: ['string'] },
                        },
                      },
                      sport: {
                        type: 'object',
                        properties: {
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      stage: {
                        type: 'object',
                        properties: {
                          phase: {
                            type: 'string',
                            examples: ['1st_part_of_season_1st_leg'],
                          },
                          type: { type: 'string', examples: ['Early Prelims'] },
                        },
                      },
                    },
                  },
                  start_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:32:42.913Z'],
                  },
                  start_time_confirmed: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  venue: {
                    type: 'object',
                    properties: {
                      capacity: { type: 'integer', default: 0, examples: [0] },
                      changed: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      city_name: { type: 'string', examples: ['string'] },
                      country_code: { type: 'string', examples: ['string'] },
                      country_name: { type: 'string', examples: ['string'] },
                      id: { type: 'string', examples: ['string'] },
                      map_coordinates: { type: 'string', examples: ['string'] },
                      name: { type: 'string', examples: ['string'] },
                      reduced_capacity: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      reduced_capacity_max: {
                        type: 'integer',
                        default: 0,
                        examples: [0],
                      },
                      state: { type: 'string', examples: ['string'] },
                      timezone: { type: 'string', examples: ['string'] },
                    },
                  },
                },
              },
              sport_event_status: {
                type: 'object',
                properties: {
                  end_position: {
                    type: 'string',
                    examples: ['after_drop_to_ground'],
                  },
                  end_strike: { type: 'string', examples: ['elbow'] },
                  end_target: { type: 'string', examples: ['body'] },
                  final_round: { type: 'integer', default: 0, examples: [0] },
                  final_round_length: { type: 'string', examples: ['string'] },
                  main_event: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  match_status: { type: 'string', examples: ['not_started'] },
                  method: { type: 'string', examples: ['decision_majority'] },
                  scheduled_length: {
                    type: 'integer',
                    default: 0,
                    examples: [0],
                  },
                  scout_abandoned: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  status: { type: 'string', examples: ['not_started'] },
                  submission: { type: 'string', examples: ['anaconda_choke'] },
                  title_fight: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  weight_class: { type: 'string', examples: ['string'] },
                  winner: { type: 'string', examples: ['home_team'] },
                  winner_id: { type: 'string', examples: ['string'] },
                },
              },
              statistics: {
                type: 'object',
                properties: {
                  periods: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        competitors: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              abbreviation: {
                                type: 'string',
                                examples: ['string'],
                              },
                              age_group: { type: 'string', examples: ['U23'] },
                              country: { type: 'string', examples: ['string'] },
                              country_code: {
                                type: 'string',
                                examples: ['string'],
                              },
                              gender: { type: 'string', examples: ['string'] },
                              id: { type: 'string', examples: ['string'] },
                              name: { type: 'string', examples: ['string'] },
                              qualifier: { type: 'string', examples: ['home'] },
                              statistics: {
                                type: 'object',
                                properties: {
                                  control: {
                                    type: 'string',
                                    examples: ['6:04'],
                                  },
                                  knockdowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  submission_attempts: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedown_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                },
                              },
                              virtual: {
                                type: 'boolean',
                                default: true,
                                examples: [true],
                              },
                            },
                          },
                        },
                        number: { type: 'integer', default: 0, examples: [0] },
                      },
                    },
                  },
                  totals: {
                    type: 'object',
                    properties: {
                      competitors: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            abbreviation: {
                              type: 'string',
                              examples: ['string'],
                            },
                            age_group: { type: 'string', examples: ['U23'] },
                            country: { type: 'string', examples: ['string'] },
                            country_code: {
                              type: 'string',
                              examples: ['string'],
                            },
                            gender: { type: 'string', examples: ['string'] },
                            id: { type: 'string', examples: ['string'] },
                            name: { type: 'string', examples: ['string'] },
                            qualifier: { type: 'string', examples: ['home'] },
                            statistics: {
                              type: 'object',
                              properties: {
                                control: { type: 'string', examples: ['6:04'] },
                                knockdowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                submission_attempts: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedown_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                              },
                            },
                            virtual: {
                              type: 'boolean',
                              default: true,
                              examples: [true],
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaLiveSummaries = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2024-02-26T15:33:01.264Z'],
        },
        summaries: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              sport_event: {
                type: 'object',
                properties: {
                  channels: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        url: { type: 'string', examples: ['string'] },
                      },
                    },
                  },
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        abbreviation: { type: 'string', examples: ['string'] },
                        age_group: { type: 'string', examples: ['U23'] },
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        gender: { type: 'string', examples: ['string'] },
                        id: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        qualifier: { type: 'string', examples: ['home'] },
                        virtual: {
                          type: 'boolean',
                          default: true,
                          examples: [true],
                        },
                      },
                    },
                  },
                  coverage: {
                    type: 'object',
                    properties: {
                      sport_event_properties: {
                        type: 'object',
                        properties: {
                          data_complete: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          live: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                        },
                      },
                      type: { type: 'string', examples: ['sport_event'] },
                    },
                  },
                  id: { type: 'string', examples: ['string'] },
                  replaced_by: { type: 'string', examples: ['string'] },
                  resume_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:33:01.264Z'],
                  },
                  sport_event_context: {
                    type: 'object',
                    properties: {
                      category: {
                        type: 'object',
                        properties: {
                          country_code: {
                            type: 'string',
                            examples: ['string'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      competition: {
                        type: 'object',
                        properties: {
                          gender: { type: 'string', examples: ['string'] },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          parent_id: { type: 'string', examples: ['string'] },
                          type: { type: 'string', examples: ['string'] },
                        },
                      },
                      season: {
                        type: 'object',
                        properties: {
                          competition_id: {
                            type: 'string',
                            examples: ['string'],
                          },
                          disabled: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          end_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          start_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          year: { type: 'string', examples: ['string'] },
                        },
                      },
                      sport: {
                        type: 'object',
                        properties: {
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      stage: {
                        type: 'object',
                        properties: {
                          phase: {
                            type: 'string',
                            examples: ['1st_part_of_season_1st_leg'],
                          },
                          type: { type: 'string', examples: ['Early Prelims'] },
                        },
                      },
                    },
                  },
                  start_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:33:01.264Z'],
                  },
                  start_time_confirmed: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  venue: {
                    type: 'object',
                    properties: {
                      capacity: { type: 'integer', default: 0, examples: [0] },
                      changed: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      city_name: { type: 'string', examples: ['string'] },
                      country_code: { type: 'string', examples: ['string'] },
                      country_name: { type: 'string', examples: ['string'] },
                      id: { type: 'string', examples: ['string'] },
                      map_coordinates: { type: 'string', examples: ['string'] },
                      name: { type: 'string', examples: ['string'] },
                      reduced_capacity: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      reduced_capacity_max: {
                        type: 'integer',
                        default: 0,
                        examples: [0],
                      },
                      state: { type: 'string', examples: ['string'] },
                      timezone: { type: 'string', examples: ['string'] },
                    },
                  },
                },
              },
              sport_event_status: {
                type: 'object',
                properties: {
                  end_position: {
                    type: 'string',
                    examples: ['after_drop_to_ground'],
                  },
                  end_strike: { type: 'string', examples: ['elbow'] },
                  end_target: { type: 'string', examples: ['body'] },
                  final_round: { type: 'integer', default: 0, examples: [0] },
                  final_round_length: { type: 'string', examples: ['string'] },
                  main_event: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  match_status: { type: 'string', examples: ['not_started'] },
                  method: { type: 'string', examples: ['decision_majority'] },
                  scheduled_length: {
                    type: 'integer',
                    default: 0,
                    examples: [0],
                  },
                  scout_abandoned: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  status: { type: 'string', examples: ['not_started'] },
                  submission: { type: 'string', examples: ['anaconda_choke'] },
                  title_fight: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  weight_class: { type: 'string', examples: ['string'] },
                  winner: { type: 'string', examples: ['home_team'] },
                  winner_id: { type: 'string', examples: ['string'] },
                },
              },
              statistics: {
                type: 'object',
                properties: {
                  periods: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        competitors: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              abbreviation: {
                                type: 'string',
                                examples: ['string'],
                              },
                              age_group: { type: 'string', examples: ['U23'] },
                              country: { type: 'string', examples: ['string'] },
                              country_code: {
                                type: 'string',
                                examples: ['string'],
                              },
                              gender: { type: 'string', examples: ['string'] },
                              id: { type: 'string', examples: ['string'] },
                              name: { type: 'string', examples: ['string'] },
                              qualifier: { type: 'string', examples: ['home'] },
                              statistics: {
                                type: 'object',
                                properties: {
                                  control: {
                                    type: 'string',
                                    examples: ['6:04'],
                                  },
                                  knockdowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  submission_attempts: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedown_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                },
                              },
                              virtual: {
                                type: 'boolean',
                                default: true,
                                examples: [true],
                              },
                            },
                          },
                        },
                        number: { type: 'integer', default: 0, examples: [0] },
                      },
                    },
                  },
                  totals: {
                    type: 'object',
                    properties: {
                      competitors: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            abbreviation: {
                              type: 'string',
                              examples: ['string'],
                            },
                            age_group: { type: 'string', examples: ['U23'] },
                            country: { type: 'string', examples: ['string'] },
                            country_code: {
                              type: 'string',
                              examples: ['string'],
                            },
                            gender: { type: 'string', examples: ['string'] },
                            id: { type: 'string', examples: ['string'] },
                            name: { type: 'string', examples: ['string'] },
                            qualifier: { type: 'string', examples: ['home'] },
                            statistics: {
                              type: 'object',
                              properties: {
                                control: { type: 'string', examples: ['6:04'] },
                                knockdowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                submission_attempts: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedown_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                              },
                            },
                            virtual: {
                              type: 'boolean',
                              default: true,
                              examples: [true],
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaRankings = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'English (en), Italian (it), German (de), Spanish (es), Russian (ru), Croatian (hr), Turkish (tr), Slovenian (sl), Norwegian (no), Danish (da), Dutch (nl), Polish (pl), Portuguese (pt), Czech (cs), Finnish (fi), Hungarian (hu), Bulgarian (bg), Greek (ek), Romanian (ro), Serbian (sr), Macedonian (ml), Lithuanian (lt), Indonesian (id), Vietnamese (vi), Azerbaijan (aze), Georgian (ka), Hebrew (heb), Kazakh (kaz)',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:38:39+00:00'],
        },
        rankings: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type_id: { type: 'integer', default: 0, examples: [16] },
              name: { type: 'string', examples: ['heavyweight'] },
              year: { type: 'integer', default: 0, examples: [2023] },
              week: { type: 'integer', default: 0, examples: [17] },
              competitor_rankings: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    rank: { type: 'integer', default: 0, examples: [0] },
                    movement: { type: 'integer', default: 0, examples: [0] },
                    competitor: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          examples: ['sr:competitor:253371'],
                        },
                        name: { type: 'string', examples: ['Jones, Jon'] },
                        abbreviation: { type: 'string', examples: ['JON'] },
                        gender: { type: 'string', examples: ['male'] },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSeasonCompetitors = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          season_id: {
            type: 'string',
            default: 'sr:season:94683',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given season',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'season_id', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:40:14+00:00'],
        },
        season_competitors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['sr:competitor:237620'] },
              name: { type: 'string', examples: ['Arlovski, Andrei'] },
              short_name: { type: 'string', examples: ['Arlovski, Andrei'] },
              abbreviation: { type: 'string', examples: ['ARL'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSeasonInformation = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          season_id: {
            type: 'string',
            default: 'sr:season:94683',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given season',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'season_id', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:40:42+00:00'],
        },
        season: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['sr:season:86944'] },
            name: {
              type: 'string',
              examples: ['UFC Fight Night - Ladd vs. Dumont 2021'],
            },
            start_date: { type: 'string', examples: ['2021-10-16'] },
            end_date: { type: 'string', examples: ['2021-10-17'] },
            year: { type: 'string', examples: ['2021'] },
            competition_id: {
              type: 'string',
              examples: ['sr:competition:35230'],
            },
            sport: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['sr:sport:117'] },
                name: { type: 'string', examples: ['MMA'] },
              },
            },
            category: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['sr:category:1089'] },
                name: { type: 'string', examples: ['UFC'] },
              },
            },
            competition: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['sr:competition:35230'] },
                name: {
                  type: 'string',
                  examples: ['UFC Fight Night - Ladd vs. Dumont'],
                },
              },
            },
          },
        },
        competitors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['sr:competitor:237620'] },
              name: { type: 'string', examples: ['Arlovski, Andrei'] },
              abbreviation: { type: 'string', examples: ['ARL'] },
              gender: { type: 'string', examples: ['male'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSeasonProbabilities = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          season_id: {
            type: 'string',
            default: 'sr:season:94683',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given season',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'season_id', 'format'],
      },
      {
        type: 'object',
        properties: {
          start: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Number to start the list of results from.<br><br>Example: <code>start=0</code>',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Number to limit the number of results. Minimum value is 1, maximum value is 200.<br><br>Example: <code>limit=200</code>',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2024-02-26T15:33:37.122Z'],
        },
        sport_event_probabilities: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              markets: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    away_score: { type: 'integer', default: 0, examples: [0] },
                    home_score: { type: 'integer', default: 0, examples: [0] },
                    last_updated: {
                      type: 'string',
                      examples: ['2024-02-26T15:33:37.122Z'],
                    },
                    live: { type: 'boolean', default: true, examples: [true] },
                    match_time: { type: 'string', examples: ['string'] },
                    name: { type: 'string', examples: ['2way'] },
                    outcomes: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                            examples: ['home_team_winner'],
                          },
                          probability: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                        },
                      },
                    },
                    remaining_time: { type: 'string', examples: ['string'] },
                    remaining_time_in_period: {
                      type: 'string',
                      examples: ['string'],
                    },
                  },
                },
              },
              sport_event: {
                type: 'object',
                properties: {
                  channels: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        url: { type: 'string', examples: ['string'] },
                      },
                    },
                  },
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        abbreviation: { type: 'string', examples: ['string'] },
                        age_group: { type: 'string', examples: ['U23'] },
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        gender: { type: 'string', examples: ['string'] },
                        id: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        qualifier: { type: 'string', examples: ['home'] },
                        virtual: {
                          type: 'boolean',
                          default: true,
                          examples: [true],
                        },
                      },
                    },
                  },
                  coverage: {
                    type: 'object',
                    properties: {
                      sport_event_properties: {
                        type: 'object',
                        properties: {
                          data_complete: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          live: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                        },
                      },
                      type: { type: 'string', examples: ['sport_event'] },
                    },
                  },
                  id: { type: 'string', examples: ['string'] },
                  replaced_by: { type: 'string', examples: ['string'] },
                  resume_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:33:37.122Z'],
                  },
                  sport_event_context: {
                    type: 'object',
                    properties: {
                      category: {
                        type: 'object',
                        properties: {
                          country_code: {
                            type: 'string',
                            examples: ['string'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      competition: {
                        type: 'object',
                        properties: {
                          gender: { type: 'string', examples: ['string'] },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          parent_id: { type: 'string', examples: ['string'] },
                          type: { type: 'string', examples: ['string'] },
                        },
                      },
                      season: {
                        type: 'object',
                        properties: {
                          competition_id: {
                            type: 'string',
                            examples: ['string'],
                          },
                          disabled: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          end_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          start_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          year: { type: 'string', examples: ['string'] },
                        },
                      },
                      sport: {
                        type: 'object',
                        properties: {
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      stage: {
                        type: 'object',
                        properties: {
                          phase: {
                            type: 'string',
                            examples: ['1st_part_of_season_1st_leg'],
                          },
                          type: { type: 'string', examples: ['Early Prelims'] },
                        },
                      },
                    },
                  },
                  start_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:33:37.122Z'],
                  },
                  start_time_confirmed: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  venue: {
                    type: 'object',
                    properties: {
                      capacity: { type: 'integer', default: 0, examples: [0] },
                      changed: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      city_name: { type: 'string', examples: ['string'] },
                      country_code: { type: 'string', examples: ['string'] },
                      country_name: { type: 'string', examples: ['string'] },
                      id: { type: 'string', examples: ['string'] },
                      map_coordinates: { type: 'string', examples: ['string'] },
                      name: { type: 'string', examples: ['string'] },
                      reduced_capacity: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      reduced_capacity_max: {
                        type: 'integer',
                        default: 0,
                        examples: [0],
                      },
                      state: { type: 'string', examples: ['string'] },
                      timezone: { type: 'string', examples: ['string'] },
                    },
                  },
                },
              },
              sport_event_status: {
                type: 'object',
                properties: {
                  end_position: {
                    type: 'string',
                    examples: ['after_drop_to_ground'],
                  },
                  end_strike: { type: 'string', examples: ['elbow'] },
                  end_target: { type: 'string', examples: ['body'] },
                  final_round: { type: 'integer', default: 0, examples: [0] },
                  final_round_length: { type: 'string', examples: ['string'] },
                  main_event: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  match_status: { type: 'string', examples: ['not_started'] },
                  method: { type: 'string', examples: ['decision_majority'] },
                  scheduled_length: {
                    type: 'integer',
                    default: 0,
                    examples: [0],
                  },
                  scout_abandoned: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  status: { type: 'string', examples: ['not_started'] },
                  submission: { type: 'string', examples: ['anaconda_choke'] },
                  title_fight: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  weight_class: { type: 'string', examples: ['string'] },
                  winner: { type: 'string', examples: ['home_team'] },
                  winner_id: { type: 'string', examples: ['string'] },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSeasonSummaries = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          season_id: {
            type: 'string',
            default: 'sr:season:94683',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given season',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'season_id', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2024-02-26T15:34:07.868Z'],
        },
        summaries: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              sport_event: {
                type: 'object',
                properties: {
                  channels: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        url: { type: 'string', examples: ['string'] },
                      },
                    },
                  },
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        abbreviation: { type: 'string', examples: ['string'] },
                        age_group: { type: 'string', examples: ['U23'] },
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        gender: { type: 'string', examples: ['string'] },
                        id: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        qualifier: { type: 'string', examples: ['home'] },
                        virtual: {
                          type: 'boolean',
                          default: true,
                          examples: [true],
                        },
                      },
                    },
                  },
                  coverage: {
                    type: 'object',
                    properties: {
                      sport_event_properties: {
                        type: 'object',
                        properties: {
                          data_complete: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          live: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                        },
                      },
                      type: { type: 'string', examples: ['sport_event'] },
                    },
                  },
                  id: { type: 'string', examples: ['string'] },
                  replaced_by: { type: 'string', examples: ['string'] },
                  resume_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:34:07.868Z'],
                  },
                  sport_event_context: {
                    type: 'object',
                    properties: {
                      category: {
                        type: 'object',
                        properties: {
                          country_code: {
                            type: 'string',
                            examples: ['string'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      competition: {
                        type: 'object',
                        properties: {
                          gender: { type: 'string', examples: ['string'] },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          parent_id: { type: 'string', examples: ['string'] },
                          type: { type: 'string', examples: ['string'] },
                        },
                      },
                      season: {
                        type: 'object',
                        properties: {
                          competition_id: {
                            type: 'string',
                            examples: ['string'],
                          },
                          disabled: {
                            type: 'boolean',
                            default: true,
                            examples: [true],
                          },
                          end_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                          start_date: {
                            type: 'string',
                            examples: ['2024-02-26'],
                          },
                          year: { type: 'string', examples: ['string'] },
                        },
                      },
                      sport: {
                        type: 'object',
                        properties: {
                          id: { type: 'string', examples: ['string'] },
                          name: { type: 'string', examples: ['string'] },
                        },
                      },
                      stage: {
                        type: 'object',
                        properties: {
                          phase: {
                            type: 'string',
                            examples: ['1st_part_of_season_1st_leg'],
                          },
                          type: { type: 'string', examples: ['Early Prelims'] },
                        },
                      },
                    },
                  },
                  start_time: {
                    type: 'string',
                    examples: ['2024-02-26T15:34:07.868Z'],
                  },
                  start_time_confirmed: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  venue: {
                    type: 'object',
                    properties: {
                      capacity: { type: 'integer', default: 0, examples: [0] },
                      changed: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      city_name: { type: 'string', examples: ['string'] },
                      country_code: { type: 'string', examples: ['string'] },
                      country_name: { type: 'string', examples: ['string'] },
                      id: { type: 'string', examples: ['string'] },
                      map_coordinates: { type: 'string', examples: ['string'] },
                      name: { type: 'string', examples: ['string'] },
                      reduced_capacity: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                      reduced_capacity_max: {
                        type: 'integer',
                        default: 0,
                        examples: [0],
                      },
                      state: { type: 'string', examples: ['string'] },
                      timezone: { type: 'string', examples: ['string'] },
                    },
                  },
                },
              },
              sport_event_status: {
                type: 'object',
                properties: {
                  end_position: {
                    type: 'string',
                    examples: ['after_drop_to_ground'],
                  },
                  end_strike: { type: 'string', examples: ['elbow'] },
                  end_target: { type: 'string', examples: ['body'] },
                  final_round: { type: 'integer', default: 0, examples: [0] },
                  final_round_length: { type: 'string', examples: ['string'] },
                  main_event: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  match_status: { type: 'string', examples: ['not_started'] },
                  method: { type: 'string', examples: ['decision_majority'] },
                  scheduled_length: {
                    type: 'integer',
                    default: 0,
                    examples: [0],
                  },
                  scout_abandoned: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  status: { type: 'string', examples: ['not_started'] },
                  submission: { type: 'string', examples: ['anaconda_choke'] },
                  title_fight: {
                    type: 'boolean',
                    default: true,
                    examples: [true],
                  },
                  weight_class: { type: 'string', examples: ['string'] },
                  winner: { type: 'string', examples: ['home_team'] },
                  winner_id: { type: 'string', examples: ['string'] },
                },
              },
              statistics: {
                type: 'object',
                properties: {
                  periods: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        competitors: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              abbreviation: {
                                type: 'string',
                                examples: ['string'],
                              },
                              age_group: { type: 'string', examples: ['U23'] },
                              country: { type: 'string', examples: ['string'] },
                              country_code: {
                                type: 'string',
                                examples: ['string'],
                              },
                              gender: { type: 'string', examples: ['string'] },
                              id: { type: 'string', examples: ['string'] },
                              name: { type: 'string', examples: ['string'] },
                              qualifier: { type: 'string', examples: ['home'] },
                              statistics: {
                                type: 'object',
                                properties: {
                                  control: {
                                    type: 'string',
                                    examples: ['6:04'],
                                  },
                                  knockdowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  significant_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  submission_attempts: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedown_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  takedowns_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strike_percentage: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                  total_strikes_attempted: {
                                    type: 'integer',
                                    default: 0,
                                    examples: [0],
                                  },
                                },
                              },
                              virtual: {
                                type: 'boolean',
                                default: true,
                                examples: [true],
                              },
                            },
                          },
                        },
                        number: { type: 'integer', default: 0, examples: [0] },
                      },
                    },
                  },
                  totals: {
                    type: 'object',
                    properties: {
                      competitors: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            abbreviation: {
                              type: 'string',
                              examples: ['string'],
                            },
                            age_group: { type: 'string', examples: ['U23'] },
                            country: { type: 'string', examples: ['string'] },
                            country_code: {
                              type: 'string',
                              examples: ['string'],
                            },
                            gender: { type: 'string', examples: ['string'] },
                            id: { type: 'string', examples: ['string'] },
                            name: { type: 'string', examples: ['string'] },
                            qualifier: { type: 'string', examples: ['home'] },
                            statistics: {
                              type: 'object',
                              properties: {
                                control: { type: 'string', examples: ['6:04'] },
                                knockdowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                significant_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                submission_attempts: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedown_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                takedowns_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strike_percentage: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                                total_strikes_attempted: {
                                  type: 'integer',
                                  default: 0,
                                  examples: [0],
                                },
                              },
                            },
                            virtual: {
                              type: 'boolean',
                              default: true,
                              examples: [true],
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSeasons = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:39:23+00:00'],
        },
        seasons: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['sr:season:54879'] },
              name: {
                type: 'string',
                examples: ['UFC Contender Series, Las Vegas, Week 26 2018'],
              },
              start_date: { type: 'string', examples: ['2018-06-26'] },
              end_date: { type: 'string', examples: ['2018-06-28'] },
              year: { type: 'string', examples: ['2018'] },
              competition_id: {
                type: 'string',
                examples: ['sr:competition:25357'],
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSportEventChangeLog = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:44:10+00:00'],
        },
        sport_events_updated: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['sr:sport_event:40408409'] },
              updated_at: {
                type: 'string',
                examples: ['2023-04-26T12:41:35+00:00'],
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSportEventSummary = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          sport_event_id: {
            type: 'string',
            default: 'sr:sport_event:35195275',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of a given sport event',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'sport_event_id', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2024-02-26T15:34:29.722Z'],
        },
        sport_event: {
          type: 'object',
          properties: {
            channels: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  country: { type: 'string', examples: ['string'] },
                  country_code: { type: 'string', examples: ['string'] },
                  name: { type: 'string', examples: ['string'] },
                  url: { type: 'string', examples: ['string'] },
                },
              },
            },
            competitors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  abbreviation: { type: 'string', examples: ['string'] },
                  age_group: { type: 'string', examples: ['U23'] },
                  country: { type: 'string', examples: ['string'] },
                  country_code: { type: 'string', examples: ['string'] },
                  gender: { type: 'string', examples: ['string'] },
                  id: { type: 'string', examples: ['string'] },
                  name: { type: 'string', examples: ['string'] },
                  qualifier: { type: 'string', examples: ['home'] },
                  virtual: { type: 'boolean', default: true, examples: [true] },
                },
              },
            },
            coverage: {
              type: 'object',
              properties: {
                sport_event_properties: {
                  type: 'object',
                  properties: {
                    data_complete: {
                      type: 'boolean',
                      default: true,
                      examples: [true],
                    },
                    live: { type: 'boolean', default: true, examples: [true] },
                  },
                },
                type: { type: 'string', examples: ['sport_event'] },
              },
            },
            id: { type: 'string', examples: ['string'] },
            replaced_by: { type: 'string', examples: ['string'] },
            resume_time: {
              type: 'string',
              examples: ['2024-02-26T15:34:29.723Z'],
            },
            sport_event_context: {
              type: 'object',
              properties: {
                category: {
                  type: 'object',
                  properties: {
                    country_code: { type: 'string', examples: ['string'] },
                    id: { type: 'string', examples: ['string'] },
                    name: { type: 'string', examples: ['string'] },
                  },
                },
                competition: {
                  type: 'object',
                  properties: {
                    gender: { type: 'string', examples: ['string'] },
                    id: { type: 'string', examples: ['string'] },
                    name: { type: 'string', examples: ['string'] },
                    parent_id: { type: 'string', examples: ['string'] },
                    type: { type: 'string', examples: ['string'] },
                  },
                },
                season: {
                  type: 'object',
                  properties: {
                    competition_id: { type: 'string', examples: ['string'] },
                    disabled: {
                      type: 'boolean',
                      default: true,
                      examples: [true],
                    },
                    end_date: { type: 'string', examples: ['2024-02-26'] },
                    id: { type: 'string', examples: ['string'] },
                    name: { type: 'string', examples: ['string'] },
                    start_date: { type: 'string', examples: ['2024-02-26'] },
                    year: { type: 'string', examples: ['string'] },
                  },
                },
                sport: {
                  type: 'object',
                  properties: {
                    id: { type: 'string', examples: ['string'] },
                    name: { type: 'string', examples: ['string'] },
                  },
                },
                stage: {
                  type: 'object',
                  properties: {
                    phase: {
                      type: 'string',
                      examples: ['1st_part_of_season_1st_leg'],
                    },
                    type: { type: 'string', examples: ['Early Prelims'] },
                  },
                },
              },
            },
            start_time: {
              type: 'string',
              examples: ['2024-02-26T15:34:29.723Z'],
            },
            start_time_confirmed: {
              type: 'boolean',
              default: true,
              examples: [true],
            },
            venue: {
              type: 'object',
              properties: {
                capacity: { type: 'integer', default: 0, examples: [0] },
                changed: { type: 'boolean', default: true, examples: [true] },
                city_name: { type: 'string', examples: ['string'] },
                country_code: { type: 'string', examples: ['string'] },
                country_name: { type: 'string', examples: ['string'] },
                id: { type: 'string', examples: ['string'] },
                map_coordinates: { type: 'string', examples: ['string'] },
                name: { type: 'string', examples: ['string'] },
                reduced_capacity: {
                  type: 'boolean',
                  default: true,
                  examples: [true],
                },
                reduced_capacity_max: {
                  type: 'integer',
                  default: 0,
                  examples: [0],
                },
                state: { type: 'string', examples: ['string'] },
                timezone: { type: 'string', examples: ['string'] },
              },
            },
          },
        },
        sport_event_status: {
          type: 'object',
          properties: {
            end_position: {
              type: 'string',
              examples: ['after_drop_to_ground'],
            },
            end_strike: { type: 'string', examples: ['elbow'] },
            end_target: { type: 'string', examples: ['body'] },
            final_round: { type: 'integer', default: 0, examples: [0] },
            final_round_length: { type: 'string', examples: ['string'] },
            main_event: { type: 'boolean', default: true, examples: [true] },
            match_status: { type: 'string', examples: ['not_started'] },
            method: { type: 'string', examples: ['decision_majority'] },
            scheduled_length: { type: 'integer', default: 0, examples: [0] },
            scout_abandoned: {
              type: 'boolean',
              default: true,
              examples: [true],
            },
            status: { type: 'string', examples: ['not_started'] },
            submission: { type: 'string', examples: ['anaconda_choke'] },
            title_fight: { type: 'boolean', default: true, examples: [true] },
            weight_class: { type: 'string', examples: ['string'] },
            winner: { type: 'string', examples: ['home_team'] },
            winner_id: { type: 'string', examples: ['string'] },
          },
        },
        statistics: {
          type: 'object',
          properties: {
            periods: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  competitors: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        abbreviation: { type: 'string', examples: ['string'] },
                        age_group: { type: 'string', examples: ['U23'] },
                        country: { type: 'string', examples: ['string'] },
                        country_code: { type: 'string', examples: ['string'] },
                        gender: { type: 'string', examples: ['string'] },
                        id: { type: 'string', examples: ['string'] },
                        name: { type: 'string', examples: ['string'] },
                        qualifier: { type: 'string', examples: ['home'] },
                        statistics: {
                          type: 'object',
                          properties: {
                            control: { type: 'string', examples: ['6:04'] },
                            knockdowns: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            significant_strike_percentage: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            significant_strikes: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            significant_strikes_attempted: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            submission_attempts: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            takedown_percentage: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            takedowns: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            takedowns_attempted: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            total_strike_percentage: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            total_strikes: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                            total_strikes_attempted: {
                              type: 'integer',
                              default: 0,
                              examples: [0],
                            },
                          },
                        },
                        virtual: {
                          type: 'boolean',
                          default: true,
                          examples: [true],
                        },
                      },
                    },
                  },
                  number: { type: 'integer', default: 0, examples: [0] },
                },
              },
            },
            totals: {
              type: 'object',
              properties: {
                competitors: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      abbreviation: { type: 'string', examples: ['string'] },
                      age_group: { type: 'string', examples: ['U23'] },
                      country: { type: 'string', examples: ['string'] },
                      country_code: { type: 'string', examples: ['string'] },
                      gender: { type: 'string', examples: ['string'] },
                      id: { type: 'string', examples: ['string'] },
                      name: { type: 'string', examples: ['string'] },
                      qualifier: { type: 'string', examples: ['home'] },
                      statistics: {
                        type: 'object',
                        properties: {
                          control: { type: 'string', examples: ['6:04'] },
                          knockdowns: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          significant_strike_percentage: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          significant_strikes: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          significant_strikes_attempted: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          submission_attempts: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          takedown_percentage: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          takedowns: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          takedowns_attempted: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          total_strike_percentage: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          total_strikes: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                          total_strikes_attempted: {
                            type: 'integer',
                            default: 0,
                            examples: [0],
                          },
                        },
                      },
                      virtual: {
                        type: 'boolean',
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSportEventsCreated = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
      {
        type: 'object',
        properties: {
          start: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Number to start the list of results from. Example: start=0',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Number to limit the number of results. Minimum value is 1, maximum value is 1000. Example: limit=75',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-08-30T18:52:12.264Z'],
        },
        sport_events_created: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              active_season: {
                type: 'boolean',
                default: true,
                examples: [true],
              },
              created_at: {
                type: 'string',
                examples: ['2023-08-30T18:52:12.264Z'],
              },
              id: { type: 'string', examples: ['string'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MmaSportEventsRemoved = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          access_level: {
            type: 'string',
            enum: ['trial', 'production'],
            default: 'trial',
            description: 'The access level of your API key',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          language_code: {
            type: 'string',
            default: 'en',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.',
          },
          format: {
            type: 'string',
            enum: ['json', 'xml'],
            default: 'json',
            description: 'Format returned',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['access_level', 'language_code', 'format'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        generated_at: {
          type: 'string',
          examples: ['2023-04-26T13:45:45+00:00'],
        },
        sport_events_removed: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['sr:sport_event:18564646'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
export {
  MmaChampions,
  MmaCompetitionInfo,
  MmaCompetitionsList,
  MmaCompetitionsSeasons,
  MmaCompetitorMergeMappings,
  MmaCompetitorProfile,
  MmaCompetitorSummaries,
  MmaCompetitorVsCompetitor,
  MmaDailySummaries,
  MmaLiveSummaries,
  MmaRankings,
  MmaSeasonCompetitors,
  MmaSeasonInformation,
  MmaSeasonProbabilities,
  MmaSeasonSummaries,
  MmaSeasons,
  MmaSportEventChangeLog,
  MmaSportEventSummary,
  MmaSportEventsCreated,
  MmaSportEventsRemoved,
};
