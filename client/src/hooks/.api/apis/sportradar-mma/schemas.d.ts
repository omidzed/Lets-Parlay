declare const MmaChampions: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:29:07+00:00'];
        };
        readonly categories: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:category:1089'];
              };
              readonly name: {
                readonly type: 'string';
                readonly examples: readonly ['UFC'];
              };
              readonly weight_classes: {
                readonly type: 'array';
                readonly items: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly description: {
                      readonly type: 'string';
                      readonly examples: readonly ['bantamweight'];
                    };
                    readonly competitor: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['sr:competitor:260623'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['Sterling, Aljamain'];
                        };
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['STE'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['male'];
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaCompetitionInfo: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly competition_id: {
            readonly type: 'string';
            readonly default: 'sr:competition:25457';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given competition';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'competition_id',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:30:00+00:00'];
        };
        readonly competition: {
          readonly type: 'object';
          readonly properties: {
            readonly id: {
              readonly type: 'string';
              readonly examples: readonly ['sr:competition:25357'];
            };
            readonly name: {
              readonly type: 'string';
              readonly examples: readonly [
                'UFC Contender Series, Las Vegas, Week 26'
              ];
            };
            readonly parent_id: {
              readonly type: 'string';
              readonly examples: readonly ['sr:competition:25325'];
            };
            readonly category: {
              readonly type: 'object';
              readonly properties: {
                readonly id: {
                  readonly type: 'string';
                  readonly examples: readonly ['sr:category:1089'];
                };
                readonly name: {
                  readonly type: 'string';
                  readonly examples: readonly ['UFC'];
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaCompetitionsList: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:32:11+00:00'];
        };
        readonly competitions: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:competition:25357'];
              };
              readonly name: {
                readonly type: 'string';
                readonly examples: readonly [
                  'UFC Contender Series, Las Vegas, Week 26'
                ];
              };
              readonly parent_id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:competition:25325'];
              };
              readonly category: {
                readonly type: 'object';
                readonly properties: {
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['sr:category:1089'];
                  };
                  readonly name: {
                    readonly type: 'string';
                    readonly examples: readonly ['UFC'];
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaCompetitionsSeasons: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly competition_id: {
            readonly type: 'string';
            readonly default: 'sr:competition:25457';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given competition';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'competition_id',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:33:34+00:00'];
        };
        readonly seasons: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:season:86728'];
              };
              readonly name: {
                readonly type: 'string';
                readonly examples: readonly [
                  "Dana White's Contender Series: Season 5, Week 6 2021"
                ];
              };
              readonly start_date: {
                readonly type: 'string';
                readonly examples: readonly ['2021-10-05'];
              };
              readonly end_date: {
                readonly type: 'string';
                readonly examples: readonly ['2021-10-06'];
              };
              readonly year: {
                readonly type: 'string';
                readonly examples: readonly ['2021'];
              };
              readonly competition_id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:competition:35146'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaCompetitorMergeMappings: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaCompetitorProfile: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly competitor_id: {
            readonly type: 'string';
            readonly default: 'sr:competitor:237652';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given competitor';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'competitor_id',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:34:42+00:00'];
        };
        readonly competitor: {
          readonly type: 'object';
          readonly properties: {
            readonly id: {
              readonly type: 'string';
              readonly examples: readonly ['sr:competitor:237652'];
            };
            readonly name: {
              readonly type: 'string';
              readonly examples: readonly ['Holloway, Max'];
            };
            readonly abbreviation: {
              readonly type: 'string';
              readonly examples: readonly ['HOL'];
            };
            readonly gender: {
              readonly type: 'string';
              readonly examples: readonly ['male'];
            };
          };
        };
        readonly info: {
          readonly type: 'object';
          readonly properties: {
            readonly birth_city: {
              readonly type: 'string';
              readonly examples: readonly ['Honolulu'];
            };
            readonly birth_state: {
              readonly type: 'string';
              readonly examples: readonly ['HI'];
            };
            readonly birth_country: {
              readonly type: 'string';
              readonly examples: readonly ['UNITED STATES'];
            };
            readonly birth_country_code: {
              readonly type: 'string';
              readonly examples: readonly ['USA'];
            };
            readonly birth_date: {
              readonly type: 'string';
              readonly examples: readonly ['1991-12-04'];
            };
            readonly fighting_out_of_city: {
              readonly type: 'string';
              readonly examples: readonly ['Waianae'];
            };
            readonly fighting_out_of_country: {
              readonly type: 'string';
              readonly examples: readonly ['UNITED STATES'];
            };
            readonly fighting_out_of_country_code: {
              readonly type: 'string';
              readonly examples: readonly ['USA'];
            };
            readonly fighting_out_of_state: {
              readonly type: 'string';
              readonly examples: readonly ['HI'];
            };
            readonly reach: {
              readonly type: 'integer';
              readonly default: 0;
              readonly examples: readonly [175];
            };
            readonly height: {
              readonly type: 'integer';
              readonly default: 0;
              readonly examples: readonly [180];
            };
            readonly weight: {
              readonly type: 'number';
              readonly default: 0;
              readonly examples: readonly [65.8];
            };
            readonly nickname: {
              readonly type: 'string';
              readonly examples: readonly ['Blessed'];
            };
          };
        };
        readonly record: {
          readonly type: 'object';
          readonly properties: {
            readonly wins: {
              readonly type: 'integer';
              readonly default: 0;
              readonly examples: readonly [24];
            };
            readonly draws: {
              readonly type: 'integer';
              readonly default: 0;
              readonly examples: readonly [0];
            };
            readonly losses: {
              readonly type: 'integer';
              readonly default: 0;
              readonly examples: readonly [7];
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaCompetitorSummaries: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly competitor_id: {
            readonly type: 'string';
            readonly default: 'sr:competitor:237652';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given competitor';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'competitor_id',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2024-02-26T15:32:02.342Z'];
        };
        readonly summaries: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly sport_event: {
                readonly type: 'object';
                readonly properties: {
                  readonly channels: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly url: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                      };
                    };
                  };
                  readonly competitors: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly age_group: {
                          readonly type: 'string';
                          readonly examples: readonly ['U23'];
                        };
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly qualifier: {
                          readonly type: 'string';
                          readonly examples: readonly ['home'];
                        };
                        readonly virtual: {
                          readonly type: 'boolean';
                          readonly default: true;
                          readonly examples: readonly [true];
                        };
                      };
                    };
                  };
                  readonly coverage: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly sport_event_properties: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly data_complete: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly live: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                        };
                      };
                      readonly type: {
                        readonly type: 'string';
                        readonly examples: readonly ['sport_event'];
                      };
                    };
                  };
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly replaced_by: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly resume_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:32:02.343Z'];
                  };
                  readonly sport_event_context: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly category: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly country_code: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly competition: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly gender: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly parent_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly season: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly competition_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly disabled: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly end_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly start_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly year: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly sport: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly stage: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly phase: {
                            readonly type: 'string';
                            readonly examples: readonly [
                              '1st_part_of_season_1st_leg'
                            ];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['Early Prelims'];
                          };
                        };
                      };
                    };
                  };
                  readonly start_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:32:02.343Z'];
                  };
                  readonly start_time_confirmed: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly venue: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly capacity: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly changed: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly city_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_code: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly id: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly map_coordinates: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly reduced_capacity: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly reduced_capacity_max: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly state: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly timezone: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                    };
                  };
                };
              };
              readonly sport_event_status: {
                readonly type: 'object';
                readonly properties: {
                  readonly end_position: {
                    readonly type: 'string';
                    readonly examples: readonly ['after_drop_to_ground'];
                  };
                  readonly end_strike: {
                    readonly type: 'string';
                    readonly examples: readonly ['elbow'];
                  };
                  readonly end_target: {
                    readonly type: 'string';
                    readonly examples: readonly ['body'];
                  };
                  readonly final_round: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly final_round_length: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly main_event: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly match_status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly method: {
                    readonly type: 'string';
                    readonly examples: readonly ['decision_majority'];
                  };
                  readonly scheduled_length: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly scout_abandoned: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly submission: {
                    readonly type: 'string';
                    readonly examples: readonly ['anaconda_choke'];
                  };
                  readonly title_fight: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly weight_class: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly winner: {
                    readonly type: 'string';
                    readonly examples: readonly ['home_team'];
                  };
                  readonly winner_id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                };
              };
              readonly statistics: {
                readonly type: 'object';
                readonly properties: {
                  readonly periods: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly competitors: {
                          readonly type: 'array';
                          readonly items: {
                            readonly type: 'object';
                            readonly properties: {
                              readonly abbreviation: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly age_group: {
                                readonly type: 'string';
                                readonly examples: readonly ['U23'];
                              };
                              readonly country: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly country_code: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly gender: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly id: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly name: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly qualifier: {
                                readonly type: 'string';
                                readonly examples: readonly ['home'];
                              };
                              readonly statistics: {
                                readonly type: 'object';
                                readonly properties: {
                                  readonly control: {
                                    readonly type: 'string';
                                    readonly examples: readonly ['6:04'];
                                  };
                                  readonly knockdowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly submission_attempts: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedown_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                };
                              };
                              readonly virtual: {
                                readonly type: 'boolean';
                                readonly default: true;
                                readonly examples: readonly [true];
                              };
                            };
                          };
                        };
                        readonly number: {
                          readonly type: 'integer';
                          readonly default: 0;
                          readonly examples: readonly [0];
                        };
                      };
                    };
                  };
                  readonly totals: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly competitors: {
                        readonly type: 'array';
                        readonly items: {
                          readonly type: 'object';
                          readonly properties: {
                            readonly abbreviation: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly age_group: {
                              readonly type: 'string';
                              readonly examples: readonly ['U23'];
                            };
                            readonly country: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly country_code: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly gender: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly id: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly name: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly qualifier: {
                              readonly type: 'string';
                              readonly examples: readonly ['home'];
                            };
                            readonly statistics: {
                              readonly type: 'object';
                              readonly properties: {
                                readonly control: {
                                  readonly type: 'string';
                                  readonly examples: readonly ['6:04'];
                                };
                                readonly knockdowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly submission_attempts: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedown_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                              };
                            };
                            readonly virtual: {
                              readonly type: 'boolean';
                              readonly default: true;
                              readonly examples: readonly [true];
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaCompetitorVsCompetitor: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly competitor_id: {
            readonly type: 'string';
            readonly default: 'sr:competitor:237652';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given competitor';
          };
          readonly competitor_id2: {
            readonly type: 'string';
            readonly default: 'sr:competitor:237640';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given competitor';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'competitor_id',
          'competitor_id2',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly competitors: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly abbreviation: {
                readonly type: 'string';
                readonly examples: readonly ['string'];
              };
              readonly age_group: {
                readonly type: 'string';
                readonly examples: readonly ['U23'];
              };
              readonly country: {
                readonly type: 'string';
                readonly examples: readonly ['string'];
              };
              readonly country_code: {
                readonly type: 'string';
                readonly examples: readonly ['string'];
              };
              readonly gender: {
                readonly type: 'string';
                readonly examples: readonly ['string'];
              };
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['string'];
              };
              readonly name: {
                readonly type: 'string';
                readonly examples: readonly ['string'];
              };
              readonly qualifier: {
                readonly type: 'string';
                readonly examples: readonly ['home'];
              };
              readonly virtual: {
                readonly type: 'boolean';
                readonly default: true;
                readonly examples: readonly [true];
              };
            };
          };
        };
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2024-02-26T15:32:15.352Z'];
        };
        readonly last_meetings: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly sport_event: {
                readonly type: 'object';
                readonly properties: {
                  readonly channels: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly url: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                      };
                    };
                  };
                  readonly competitors: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly age_group: {
                          readonly type: 'string';
                          readonly examples: readonly ['U23'];
                        };
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly qualifier: {
                          readonly type: 'string';
                          readonly examples: readonly ['home'];
                        };
                        readonly virtual: {
                          readonly type: 'boolean';
                          readonly default: true;
                          readonly examples: readonly [true];
                        };
                      };
                    };
                  };
                  readonly coverage: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly sport_event_properties: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly data_complete: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly live: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                        };
                      };
                      readonly type: {
                        readonly type: 'string';
                        readonly examples: readonly ['sport_event'];
                      };
                    };
                  };
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly replaced_by: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly resume_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:32:15.352Z'];
                  };
                  readonly sport_event_context: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly category: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly country_code: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly competition: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly gender: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly parent_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly season: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly competition_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly disabled: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly end_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly start_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly year: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly sport: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly stage: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly phase: {
                            readonly type: 'string';
                            readonly examples: readonly [
                              '1st_part_of_season_1st_leg'
                            ];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['Early Prelims'];
                          };
                        };
                      };
                    };
                  };
                  readonly start_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:32:15.353Z'];
                  };
                  readonly start_time_confirmed: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly venue: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly capacity: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly changed: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly city_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_code: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly id: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly map_coordinates: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly reduced_capacity: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly reduced_capacity_max: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly state: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly timezone: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                    };
                  };
                };
              };
              readonly sport_event_status: {
                readonly type: 'object';
                readonly properties: {
                  readonly end_position: {
                    readonly type: 'string';
                    readonly examples: readonly ['after_drop_to_ground'];
                  };
                  readonly end_strike: {
                    readonly type: 'string';
                    readonly examples: readonly ['elbow'];
                  };
                  readonly end_target: {
                    readonly type: 'string';
                    readonly examples: readonly ['body'];
                  };
                  readonly final_round: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly final_round_length: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly main_event: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly match_status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly method: {
                    readonly type: 'string';
                    readonly examples: readonly ['decision_majority'];
                  };
                  readonly scheduled_length: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly scout_abandoned: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly submission: {
                    readonly type: 'string';
                    readonly examples: readonly ['anaconda_choke'];
                  };
                  readonly title_fight: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly weight_class: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly winner: {
                    readonly type: 'string';
                    readonly examples: readonly ['home_team'];
                  };
                  readonly winner_id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                };
              };
              readonly statistics: {
                readonly type: 'object';
                readonly properties: {
                  readonly periods: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly competitors: {
                          readonly type: 'array';
                          readonly items: {
                            readonly type: 'object';
                            readonly properties: {
                              readonly abbreviation: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly age_group: {
                                readonly type: 'string';
                                readonly examples: readonly ['U23'];
                              };
                              readonly country: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly country_code: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly gender: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly id: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly name: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly qualifier: {
                                readonly type: 'string';
                                readonly examples: readonly ['home'];
                              };
                              readonly statistics: {
                                readonly type: 'object';
                                readonly properties: {
                                  readonly control: {
                                    readonly type: 'string';
                                    readonly examples: readonly ['6:04'];
                                  };
                                  readonly knockdowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly submission_attempts: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedown_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                };
                              };
                              readonly virtual: {
                                readonly type: 'boolean';
                                readonly default: true;
                                readonly examples: readonly [true];
                              };
                            };
                          };
                        };
                        readonly number: {
                          readonly type: 'integer';
                          readonly default: 0;
                          readonly examples: readonly [0];
                        };
                      };
                    };
                  };
                  readonly totals: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly competitors: {
                        readonly type: 'array';
                        readonly items: {
                          readonly type: 'object';
                          readonly properties: {
                            readonly abbreviation: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly age_group: {
                              readonly type: 'string';
                              readonly examples: readonly ['U23'];
                            };
                            readonly country: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly country_code: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly gender: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly id: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly name: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly qualifier: {
                              readonly type: 'string';
                              readonly examples: readonly ['home'];
                            };
                            readonly statistics: {
                              readonly type: 'object';
                              readonly properties: {
                                readonly control: {
                                  readonly type: 'string';
                                  readonly examples: readonly ['6:04'];
                                };
                                readonly knockdowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly submission_attempts: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedown_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                              };
                            };
                            readonly virtual: {
                              readonly type: 'boolean';
                              readonly default: true;
                              readonly examples: readonly [true];
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
        readonly next_meetings: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly sport_event: {
                readonly type: 'object';
                readonly properties: {
                  readonly channels: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly url: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                      };
                    };
                  };
                  readonly competitors: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly age_group: {
                          readonly type: 'string';
                          readonly examples: readonly ['U23'];
                        };
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly qualifier: {
                          readonly type: 'string';
                          readonly examples: readonly ['home'];
                        };
                        readonly virtual: {
                          readonly type: 'boolean';
                          readonly default: true;
                          readonly examples: readonly [true];
                        };
                      };
                    };
                  };
                  readonly coverage: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly sport_event_properties: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly data_complete: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly live: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                        };
                      };
                      readonly type: {
                        readonly type: 'string';
                        readonly examples: readonly ['sport_event'];
                      };
                    };
                  };
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly replaced_by: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly resume_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:32:15.353Z'];
                  };
                  readonly sport_event_context: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly category: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly country_code: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly competition: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly gender: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly parent_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly season: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly competition_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly disabled: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly end_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly start_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly year: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly sport: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly stage: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly phase: {
                            readonly type: 'string';
                            readonly examples: readonly [
                              '1st_part_of_season_1st_leg'
                            ];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['Early Prelims'];
                          };
                        };
                      };
                    };
                  };
                  readonly start_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:32:15.353Z'];
                  };
                  readonly start_time_confirmed: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly venue: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly capacity: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly changed: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly city_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_code: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly id: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly map_coordinates: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly reduced_capacity: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly reduced_capacity_max: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly state: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly timezone: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                    };
                  };
                };
              };
              readonly sport_event_status: {
                readonly type: 'object';
                readonly properties: {
                  readonly end_position: {
                    readonly type: 'string';
                    readonly examples: readonly ['after_drop_to_ground'];
                  };
                  readonly end_strike: {
                    readonly type: 'string';
                    readonly examples: readonly ['elbow'];
                  };
                  readonly end_target: {
                    readonly type: 'string';
                    readonly examples: readonly ['body'];
                  };
                  readonly final_round: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly final_round_length: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly main_event: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly match_status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly method: {
                    readonly type: 'string';
                    readonly examples: readonly ['decision_majority'];
                  };
                  readonly scheduled_length: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly scout_abandoned: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly submission: {
                    readonly type: 'string';
                    readonly examples: readonly ['anaconda_choke'];
                  };
                  readonly title_fight: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly weight_class: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly winner: {
                    readonly type: 'string';
                    readonly examples: readonly ['home_team'];
                  };
                  readonly winner_id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                };
              };
              readonly statistics: {
                readonly type: 'object';
                readonly properties: {
                  readonly periods: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly competitors: {
                          readonly type: 'array';
                          readonly items: {
                            readonly type: 'object';
                            readonly properties: {
                              readonly abbreviation: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly age_group: {
                                readonly type: 'string';
                                readonly examples: readonly ['U23'];
                              };
                              readonly country: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly country_code: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly gender: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly id: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly name: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly qualifier: {
                                readonly type: 'string';
                                readonly examples: readonly ['home'];
                              };
                              readonly statistics: {
                                readonly type: 'object';
                                readonly properties: {
                                  readonly control: {
                                    readonly type: 'string';
                                    readonly examples: readonly ['6:04'];
                                  };
                                  readonly knockdowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly submission_attempts: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedown_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                };
                              };
                              readonly virtual: {
                                readonly type: 'boolean';
                                readonly default: true;
                                readonly examples: readonly [true];
                              };
                            };
                          };
                        };
                        readonly number: {
                          readonly type: 'integer';
                          readonly default: 0;
                          readonly examples: readonly [0];
                        };
                      };
                    };
                  };
                  readonly totals: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly competitors: {
                        readonly type: 'array';
                        readonly items: {
                          readonly type: 'object';
                          readonly properties: {
                            readonly abbreviation: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly age_group: {
                              readonly type: 'string';
                              readonly examples: readonly ['U23'];
                            };
                            readonly country: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly country_code: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly gender: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly id: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly name: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly qualifier: {
                              readonly type: 'string';
                              readonly examples: readonly ['home'];
                            };
                            readonly statistics: {
                              readonly type: 'object';
                              readonly properties: {
                                readonly control: {
                                  readonly type: 'string';
                                  readonly examples: readonly ['6:04'];
                                };
                                readonly knockdowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly submission_attempts: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedown_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                              };
                            };
                            readonly virtual: {
                              readonly type: 'boolean';
                              readonly default: true;
                              readonly examples: readonly [true];
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaDailySummaries: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly date: {
            readonly type: 'string';
            readonly format: 'date';
            readonly default: '2022-02-06';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Date in YYYY-MM-DD';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'date',
          'format'
        ];
      },
      {
        readonly type: 'object';
        readonly properties: {
          readonly start: {
            readonly type: 'integer';
            readonly format: 'int32';
            readonly minimum: -2147483648;
            readonly maximum: 2147483647;
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Number to start the list of results from. Example: start=0';
          };
          readonly limit: {
            readonly type: 'integer';
            readonly format: 'int32';
            readonly minimum: -2147483648;
            readonly maximum: 2147483647;
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Number to limit the number of results. Minimum value is 1, maximum value is 200. Example: limit=200';
          };
        };
        readonly required: readonly [];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2024-02-26T15:32:42.913Z'];
        };
        readonly summaries: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly sport_event: {
                readonly type: 'object';
                readonly properties: {
                  readonly channels: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly url: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                      };
                    };
                  };
                  readonly competitors: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly age_group: {
                          readonly type: 'string';
                          readonly examples: readonly ['U23'];
                        };
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly qualifier: {
                          readonly type: 'string';
                          readonly examples: readonly ['home'];
                        };
                        readonly virtual: {
                          readonly type: 'boolean';
                          readonly default: true;
                          readonly examples: readonly [true];
                        };
                      };
                    };
                  };
                  readonly coverage: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly sport_event_properties: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly data_complete: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly live: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                        };
                      };
                      readonly type: {
                        readonly type: 'string';
                        readonly examples: readonly ['sport_event'];
                      };
                    };
                  };
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly replaced_by: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly resume_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:32:42.913Z'];
                  };
                  readonly sport_event_context: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly category: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly country_code: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly competition: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly gender: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly parent_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly season: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly competition_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly disabled: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly end_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly start_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly year: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly sport: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly stage: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly phase: {
                            readonly type: 'string';
                            readonly examples: readonly [
                              '1st_part_of_season_1st_leg'
                            ];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['Early Prelims'];
                          };
                        };
                      };
                    };
                  };
                  readonly start_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:32:42.913Z'];
                  };
                  readonly start_time_confirmed: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly venue: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly capacity: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly changed: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly city_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_code: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly id: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly map_coordinates: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly reduced_capacity: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly reduced_capacity_max: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly state: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly timezone: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                    };
                  };
                };
              };
              readonly sport_event_status: {
                readonly type: 'object';
                readonly properties: {
                  readonly end_position: {
                    readonly type: 'string';
                    readonly examples: readonly ['after_drop_to_ground'];
                  };
                  readonly end_strike: {
                    readonly type: 'string';
                    readonly examples: readonly ['elbow'];
                  };
                  readonly end_target: {
                    readonly type: 'string';
                    readonly examples: readonly ['body'];
                  };
                  readonly final_round: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly final_round_length: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly main_event: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly match_status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly method: {
                    readonly type: 'string';
                    readonly examples: readonly ['decision_majority'];
                  };
                  readonly scheduled_length: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly scout_abandoned: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly submission: {
                    readonly type: 'string';
                    readonly examples: readonly ['anaconda_choke'];
                  };
                  readonly title_fight: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly weight_class: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly winner: {
                    readonly type: 'string';
                    readonly examples: readonly ['home_team'];
                  };
                  readonly winner_id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                };
              };
              readonly statistics: {
                readonly type: 'object';
                readonly properties: {
                  readonly periods: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly competitors: {
                          readonly type: 'array';
                          readonly items: {
                            readonly type: 'object';
                            readonly properties: {
                              readonly abbreviation: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly age_group: {
                                readonly type: 'string';
                                readonly examples: readonly ['U23'];
                              };
                              readonly country: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly country_code: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly gender: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly id: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly name: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly qualifier: {
                                readonly type: 'string';
                                readonly examples: readonly ['home'];
                              };
                              readonly statistics: {
                                readonly type: 'object';
                                readonly properties: {
                                  readonly control: {
                                    readonly type: 'string';
                                    readonly examples: readonly ['6:04'];
                                  };
                                  readonly knockdowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly submission_attempts: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedown_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                };
                              };
                              readonly virtual: {
                                readonly type: 'boolean';
                                readonly default: true;
                                readonly examples: readonly [true];
                              };
                            };
                          };
                        };
                        readonly number: {
                          readonly type: 'integer';
                          readonly default: 0;
                          readonly examples: readonly [0];
                        };
                      };
                    };
                  };
                  readonly totals: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly competitors: {
                        readonly type: 'array';
                        readonly items: {
                          readonly type: 'object';
                          readonly properties: {
                            readonly abbreviation: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly age_group: {
                              readonly type: 'string';
                              readonly examples: readonly ['U23'];
                            };
                            readonly country: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly country_code: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly gender: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly id: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly name: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly qualifier: {
                              readonly type: 'string';
                              readonly examples: readonly ['home'];
                            };
                            readonly statistics: {
                              readonly type: 'object';
                              readonly properties: {
                                readonly control: {
                                  readonly type: 'string';
                                  readonly examples: readonly ['6:04'];
                                };
                                readonly knockdowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly submission_attempts: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedown_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                              };
                            };
                            readonly virtual: {
                              readonly type: 'boolean';
                              readonly default: true;
                              readonly examples: readonly [true];
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaLiveSummaries: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2024-02-26T15:33:01.264Z'];
        };
        readonly summaries: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly sport_event: {
                readonly type: 'object';
                readonly properties: {
                  readonly channels: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly url: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                      };
                    };
                  };
                  readonly competitors: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly age_group: {
                          readonly type: 'string';
                          readonly examples: readonly ['U23'];
                        };
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly qualifier: {
                          readonly type: 'string';
                          readonly examples: readonly ['home'];
                        };
                        readonly virtual: {
                          readonly type: 'boolean';
                          readonly default: true;
                          readonly examples: readonly [true];
                        };
                      };
                    };
                  };
                  readonly coverage: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly sport_event_properties: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly data_complete: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly live: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                        };
                      };
                      readonly type: {
                        readonly type: 'string';
                        readonly examples: readonly ['sport_event'];
                      };
                    };
                  };
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly replaced_by: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly resume_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:33:01.264Z'];
                  };
                  readonly sport_event_context: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly category: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly country_code: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly competition: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly gender: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly parent_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly season: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly competition_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly disabled: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly end_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly start_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly year: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly sport: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly stage: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly phase: {
                            readonly type: 'string';
                            readonly examples: readonly [
                              '1st_part_of_season_1st_leg'
                            ];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['Early Prelims'];
                          };
                        };
                      };
                    };
                  };
                  readonly start_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:33:01.264Z'];
                  };
                  readonly start_time_confirmed: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly venue: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly capacity: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly changed: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly city_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_code: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly id: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly map_coordinates: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly reduced_capacity: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly reduced_capacity_max: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly state: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly timezone: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                    };
                  };
                };
              };
              readonly sport_event_status: {
                readonly type: 'object';
                readonly properties: {
                  readonly end_position: {
                    readonly type: 'string';
                    readonly examples: readonly ['after_drop_to_ground'];
                  };
                  readonly end_strike: {
                    readonly type: 'string';
                    readonly examples: readonly ['elbow'];
                  };
                  readonly end_target: {
                    readonly type: 'string';
                    readonly examples: readonly ['body'];
                  };
                  readonly final_round: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly final_round_length: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly main_event: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly match_status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly method: {
                    readonly type: 'string';
                    readonly examples: readonly ['decision_majority'];
                  };
                  readonly scheduled_length: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly scout_abandoned: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly submission: {
                    readonly type: 'string';
                    readonly examples: readonly ['anaconda_choke'];
                  };
                  readonly title_fight: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly weight_class: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly winner: {
                    readonly type: 'string';
                    readonly examples: readonly ['home_team'];
                  };
                  readonly winner_id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                };
              };
              readonly statistics: {
                readonly type: 'object';
                readonly properties: {
                  readonly periods: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly competitors: {
                          readonly type: 'array';
                          readonly items: {
                            readonly type: 'object';
                            readonly properties: {
                              readonly abbreviation: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly age_group: {
                                readonly type: 'string';
                                readonly examples: readonly ['U23'];
                              };
                              readonly country: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly country_code: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly gender: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly id: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly name: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly qualifier: {
                                readonly type: 'string';
                                readonly examples: readonly ['home'];
                              };
                              readonly statistics: {
                                readonly type: 'object';
                                readonly properties: {
                                  readonly control: {
                                    readonly type: 'string';
                                    readonly examples: readonly ['6:04'];
                                  };
                                  readonly knockdowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly submission_attempts: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedown_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                };
                              };
                              readonly virtual: {
                                readonly type: 'boolean';
                                readonly default: true;
                                readonly examples: readonly [true];
                              };
                            };
                          };
                        };
                        readonly number: {
                          readonly type: 'integer';
                          readonly default: 0;
                          readonly examples: readonly [0];
                        };
                      };
                    };
                  };
                  readonly totals: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly competitors: {
                        readonly type: 'array';
                        readonly items: {
                          readonly type: 'object';
                          readonly properties: {
                            readonly abbreviation: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly age_group: {
                              readonly type: 'string';
                              readonly examples: readonly ['U23'];
                            };
                            readonly country: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly country_code: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly gender: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly id: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly name: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly qualifier: {
                              readonly type: 'string';
                              readonly examples: readonly ['home'];
                            };
                            readonly statistics: {
                              readonly type: 'object';
                              readonly properties: {
                                readonly control: {
                                  readonly type: 'string';
                                  readonly examples: readonly ['6:04'];
                                };
                                readonly knockdowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly submission_attempts: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedown_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                              };
                            };
                            readonly virtual: {
                              readonly type: 'boolean';
                              readonly default: true;
                              readonly examples: readonly [true];
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaRankings: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'English (en), Italian (it), German (de), Spanish (es), Russian (ru), Croatian (hr), Turkish (tr), Slovenian (sl), Norwegian (no), Danish (da), Dutch (nl), Polish (pl), Portuguese (pt), Czech (cs), Finnish (fi), Hungarian (hu), Bulgarian (bg), Greek (ek), Romanian (ro), Serbian (sr), Macedonian (ml), Lithuanian (lt), Indonesian (id), Vietnamese (vi), Azerbaijan (aze), Georgian (ka), Hebrew (heb), Kazakh (kaz)';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:38:39+00:00'];
        };
        readonly rankings: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly type_id: {
                readonly type: 'integer';
                readonly default: 0;
                readonly examples: readonly [16];
              };
              readonly name: {
                readonly type: 'string';
                readonly examples: readonly ['heavyweight'];
              };
              readonly year: {
                readonly type: 'integer';
                readonly default: 0;
                readonly examples: readonly [2023];
              };
              readonly week: {
                readonly type: 'integer';
                readonly default: 0;
                readonly examples: readonly [17];
              };
              readonly competitor_rankings: {
                readonly type: 'array';
                readonly items: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly rank: {
                      readonly type: 'integer';
                      readonly default: 0;
                      readonly examples: readonly [0];
                    };
                    readonly movement: {
                      readonly type: 'integer';
                      readonly default: 0;
                      readonly examples: readonly [0];
                    };
                    readonly competitor: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['sr:competitor:253371'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['Jones, Jon'];
                        };
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['JON'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['male'];
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSeasonCompetitors: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly season_id: {
            readonly type: 'string';
            readonly default: 'sr:season:94683';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given season';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'season_id',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:40:14+00:00'];
        };
        readonly season_competitors: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:competitor:237620'];
              };
              readonly name: {
                readonly type: 'string';
                readonly examples: readonly ['Arlovski, Andrei'];
              };
              readonly short_name: {
                readonly type: 'string';
                readonly examples: readonly ['Arlovski, Andrei'];
              };
              readonly abbreviation: {
                readonly type: 'string';
                readonly examples: readonly ['ARL'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSeasonInformation: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly season_id: {
            readonly type: 'string';
            readonly default: 'sr:season:94683';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given season';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'season_id',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:40:42+00:00'];
        };
        readonly season: {
          readonly type: 'object';
          readonly properties: {
            readonly id: {
              readonly type: 'string';
              readonly examples: readonly ['sr:season:86944'];
            };
            readonly name: {
              readonly type: 'string';
              readonly examples: readonly [
                'UFC Fight Night - Ladd vs. Dumont 2021'
              ];
            };
            readonly start_date: {
              readonly type: 'string';
              readonly examples: readonly ['2021-10-16'];
            };
            readonly end_date: {
              readonly type: 'string';
              readonly examples: readonly ['2021-10-17'];
            };
            readonly year: {
              readonly type: 'string';
              readonly examples: readonly ['2021'];
            };
            readonly competition_id: {
              readonly type: 'string';
              readonly examples: readonly ['sr:competition:35230'];
            };
            readonly sport: {
              readonly type: 'object';
              readonly properties: {
                readonly id: {
                  readonly type: 'string';
                  readonly examples: readonly ['sr:sport:117'];
                };
                readonly name: {
                  readonly type: 'string';
                  readonly examples: readonly ['MMA'];
                };
              };
            };
            readonly category: {
              readonly type: 'object';
              readonly properties: {
                readonly id: {
                  readonly type: 'string';
                  readonly examples: readonly ['sr:category:1089'];
                };
                readonly name: {
                  readonly type: 'string';
                  readonly examples: readonly ['UFC'];
                };
              };
            };
            readonly competition: {
              readonly type: 'object';
              readonly properties: {
                readonly id: {
                  readonly type: 'string';
                  readonly examples: readonly ['sr:competition:35230'];
                };
                readonly name: {
                  readonly type: 'string';
                  readonly examples: readonly [
                    'UFC Fight Night - Ladd vs. Dumont'
                  ];
                };
              };
            };
          };
        };
        readonly competitors: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:competitor:237620'];
              };
              readonly name: {
                readonly type: 'string';
                readonly examples: readonly ['Arlovski, Andrei'];
              };
              readonly abbreviation: {
                readonly type: 'string';
                readonly examples: readonly ['ARL'];
              };
              readonly gender: {
                readonly type: 'string';
                readonly examples: readonly ['male'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSeasonProbabilities: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly season_id: {
            readonly type: 'string';
            readonly default: 'sr:season:94683';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given season';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'season_id',
          'format'
        ];
      },
      {
        readonly type: 'object';
        readonly properties: {
          readonly start: {
            readonly type: 'integer';
            readonly format: 'int32';
            readonly minimum: -2147483648;
            readonly maximum: 2147483647;
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Number to start the list of results from.<br><br>Example: <code>start=0</code>';
          };
          readonly limit: {
            readonly type: 'integer';
            readonly format: 'int32';
            readonly minimum: -2147483648;
            readonly maximum: 2147483647;
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Number to limit the number of results. Minimum value is 1, maximum value is 200.<br><br>Example: <code>limit=200</code>';
          };
        };
        readonly required: readonly [];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2024-02-26T15:33:37.122Z'];
        };
        readonly sport_event_probabilities: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly markets: {
                readonly type: 'array';
                readonly items: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly away_score: {
                      readonly type: 'integer';
                      readonly default: 0;
                      readonly examples: readonly [0];
                    };
                    readonly home_score: {
                      readonly type: 'integer';
                      readonly default: 0;
                      readonly examples: readonly [0];
                    };
                    readonly last_updated: {
                      readonly type: 'string';
                      readonly examples: readonly ['2024-02-26T15:33:37.122Z'];
                    };
                    readonly live: {
                      readonly type: 'boolean';
                      readonly default: true;
                      readonly examples: readonly [true];
                    };
                    readonly match_time: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly name: {
                      readonly type: 'string';
                      readonly examples: readonly ['2way'];
                    };
                    readonly outcomes: {
                      readonly type: 'array';
                      readonly items: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['home_team_winner'];
                          };
                          readonly probability: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                        };
                      };
                    };
                    readonly remaining_time: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly remaining_time_in_period: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                  };
                };
              };
              readonly sport_event: {
                readonly type: 'object';
                readonly properties: {
                  readonly channels: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly url: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                      };
                    };
                  };
                  readonly competitors: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly age_group: {
                          readonly type: 'string';
                          readonly examples: readonly ['U23'];
                        };
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly qualifier: {
                          readonly type: 'string';
                          readonly examples: readonly ['home'];
                        };
                        readonly virtual: {
                          readonly type: 'boolean';
                          readonly default: true;
                          readonly examples: readonly [true];
                        };
                      };
                    };
                  };
                  readonly coverage: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly sport_event_properties: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly data_complete: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly live: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                        };
                      };
                      readonly type: {
                        readonly type: 'string';
                        readonly examples: readonly ['sport_event'];
                      };
                    };
                  };
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly replaced_by: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly resume_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:33:37.122Z'];
                  };
                  readonly sport_event_context: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly category: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly country_code: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly competition: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly gender: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly parent_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly season: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly competition_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly disabled: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly end_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly start_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly year: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly sport: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly stage: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly phase: {
                            readonly type: 'string';
                            readonly examples: readonly [
                              '1st_part_of_season_1st_leg'
                            ];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['Early Prelims'];
                          };
                        };
                      };
                    };
                  };
                  readonly start_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:33:37.122Z'];
                  };
                  readonly start_time_confirmed: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly venue: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly capacity: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly changed: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly city_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_code: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly id: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly map_coordinates: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly reduced_capacity: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly reduced_capacity_max: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly state: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly timezone: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                    };
                  };
                };
              };
              readonly sport_event_status: {
                readonly type: 'object';
                readonly properties: {
                  readonly end_position: {
                    readonly type: 'string';
                    readonly examples: readonly ['after_drop_to_ground'];
                  };
                  readonly end_strike: {
                    readonly type: 'string';
                    readonly examples: readonly ['elbow'];
                  };
                  readonly end_target: {
                    readonly type: 'string';
                    readonly examples: readonly ['body'];
                  };
                  readonly final_round: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly final_round_length: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly main_event: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly match_status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly method: {
                    readonly type: 'string';
                    readonly examples: readonly ['decision_majority'];
                  };
                  readonly scheduled_length: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly scout_abandoned: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly submission: {
                    readonly type: 'string';
                    readonly examples: readonly ['anaconda_choke'];
                  };
                  readonly title_fight: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly weight_class: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly winner: {
                    readonly type: 'string';
                    readonly examples: readonly ['home_team'];
                  };
                  readonly winner_id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSeasonSummaries: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly season_id: {
            readonly type: 'string';
            readonly default: 'sr:season:94683';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given season';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'season_id',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2024-02-26T15:34:07.868Z'];
        };
        readonly summaries: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly sport_event: {
                readonly type: 'object';
                readonly properties: {
                  readonly channels: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly url: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                      };
                    };
                  };
                  readonly competitors: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly age_group: {
                          readonly type: 'string';
                          readonly examples: readonly ['U23'];
                        };
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly qualifier: {
                          readonly type: 'string';
                          readonly examples: readonly ['home'];
                        };
                        readonly virtual: {
                          readonly type: 'boolean';
                          readonly default: true;
                          readonly examples: readonly [true];
                        };
                      };
                    };
                  };
                  readonly coverage: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly sport_event_properties: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly data_complete: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly live: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                        };
                      };
                      readonly type: {
                        readonly type: 'string';
                        readonly examples: readonly ['sport_event'];
                      };
                    };
                  };
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly replaced_by: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly resume_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:34:07.868Z'];
                  };
                  readonly sport_event_context: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly category: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly country_code: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly competition: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly gender: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly parent_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly season: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly competition_id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly disabled: {
                            readonly type: 'boolean';
                            readonly default: true;
                            readonly examples: readonly [true];
                          };
                          readonly end_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly start_date: {
                            readonly type: 'string';
                            readonly examples: readonly ['2024-02-26'];
                          };
                          readonly year: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly sport: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly id: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                          readonly name: {
                            readonly type: 'string';
                            readonly examples: readonly ['string'];
                          };
                        };
                      };
                      readonly stage: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly phase: {
                            readonly type: 'string';
                            readonly examples: readonly [
                              '1st_part_of_season_1st_leg'
                            ];
                          };
                          readonly type: {
                            readonly type: 'string';
                            readonly examples: readonly ['Early Prelims'];
                          };
                        };
                      };
                    };
                  };
                  readonly start_time: {
                    readonly type: 'string';
                    readonly examples: readonly ['2024-02-26T15:34:07.868Z'];
                  };
                  readonly start_time_confirmed: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly venue: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly capacity: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly changed: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly city_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_code: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly id: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly map_coordinates: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly reduced_capacity: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                      readonly reduced_capacity_max: {
                        readonly type: 'integer';
                        readonly default: 0;
                        readonly examples: readonly [0];
                      };
                      readonly state: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly timezone: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                    };
                  };
                };
              };
              readonly sport_event_status: {
                readonly type: 'object';
                readonly properties: {
                  readonly end_position: {
                    readonly type: 'string';
                    readonly examples: readonly ['after_drop_to_ground'];
                  };
                  readonly end_strike: {
                    readonly type: 'string';
                    readonly examples: readonly ['elbow'];
                  };
                  readonly end_target: {
                    readonly type: 'string';
                    readonly examples: readonly ['body'];
                  };
                  readonly final_round: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly final_round_length: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly main_event: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly match_status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly method: {
                    readonly type: 'string';
                    readonly examples: readonly ['decision_majority'];
                  };
                  readonly scheduled_length: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                  readonly scout_abandoned: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly status: {
                    readonly type: 'string';
                    readonly examples: readonly ['not_started'];
                  };
                  readonly submission: {
                    readonly type: 'string';
                    readonly examples: readonly ['anaconda_choke'];
                  };
                  readonly title_fight: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                  readonly weight_class: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly winner: {
                    readonly type: 'string';
                    readonly examples: readonly ['home_team'];
                  };
                  readonly winner_id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                };
              };
              readonly statistics: {
                readonly type: 'object';
                readonly properties: {
                  readonly periods: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly competitors: {
                          readonly type: 'array';
                          readonly items: {
                            readonly type: 'object';
                            readonly properties: {
                              readonly abbreviation: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly age_group: {
                                readonly type: 'string';
                                readonly examples: readonly ['U23'];
                              };
                              readonly country: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly country_code: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly gender: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly id: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly name: {
                                readonly type: 'string';
                                readonly examples: readonly ['string'];
                              };
                              readonly qualifier: {
                                readonly type: 'string';
                                readonly examples: readonly ['home'];
                              };
                              readonly statistics: {
                                readonly type: 'object';
                                readonly properties: {
                                  readonly control: {
                                    readonly type: 'string';
                                    readonly examples: readonly ['6:04'];
                                  };
                                  readonly knockdowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly significant_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly submission_attempts: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedown_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly takedowns_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strike_percentage: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                  readonly total_strikes_attempted: {
                                    readonly type: 'integer';
                                    readonly default: 0;
                                    readonly examples: readonly [0];
                                  };
                                };
                              };
                              readonly virtual: {
                                readonly type: 'boolean';
                                readonly default: true;
                                readonly examples: readonly [true];
                              };
                            };
                          };
                        };
                        readonly number: {
                          readonly type: 'integer';
                          readonly default: 0;
                          readonly examples: readonly [0];
                        };
                      };
                    };
                  };
                  readonly totals: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly competitors: {
                        readonly type: 'array';
                        readonly items: {
                          readonly type: 'object';
                          readonly properties: {
                            readonly abbreviation: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly age_group: {
                              readonly type: 'string';
                              readonly examples: readonly ['U23'];
                            };
                            readonly country: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly country_code: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly gender: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly id: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly name: {
                              readonly type: 'string';
                              readonly examples: readonly ['string'];
                            };
                            readonly qualifier: {
                              readonly type: 'string';
                              readonly examples: readonly ['home'];
                            };
                            readonly statistics: {
                              readonly type: 'object';
                              readonly properties: {
                                readonly control: {
                                  readonly type: 'string';
                                  readonly examples: readonly ['6:04'];
                                };
                                readonly knockdowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly significant_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly submission_attempts: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedown_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly takedowns_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strike_percentage: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                                readonly total_strikes_attempted: {
                                  readonly type: 'integer';
                                  readonly default: 0;
                                  readonly examples: readonly [0];
                                };
                              };
                            };
                            readonly virtual: {
                              readonly type: 'boolean';
                              readonly default: true;
                              readonly examples: readonly [true];
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSeasons: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:39:23+00:00'];
        };
        readonly seasons: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:season:54879'];
              };
              readonly name: {
                readonly type: 'string';
                readonly examples: readonly [
                  'UFC Contender Series, Las Vegas, Week 26 2018'
                ];
              };
              readonly start_date: {
                readonly type: 'string';
                readonly examples: readonly ['2018-06-26'];
              };
              readonly end_date: {
                readonly type: 'string';
                readonly examples: readonly ['2018-06-28'];
              };
              readonly year: {
                readonly type: 'string';
                readonly examples: readonly ['2018'];
              };
              readonly competition_id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:competition:25357'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSportEventChangeLog: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:44:10+00:00'];
        };
        readonly sport_events_updated: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:sport_event:40408409'];
              };
              readonly updated_at: {
                readonly type: 'string';
                readonly examples: readonly ['2023-04-26T12:41:35+00:00'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSportEventSummary: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly sport_event_id: {
            readonly type: 'string';
            readonly default: 'sr:sport_event:35195275';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of a given sport event';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [
          'access_level',
          'language_code',
          'sport_event_id',
          'format'
        ];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2024-02-26T15:34:29.722Z'];
        };
        readonly sport_event: {
          readonly type: 'object';
          readonly properties: {
            readonly channels: {
              readonly type: 'array';
              readonly items: {
                readonly type: 'object';
                readonly properties: {
                  readonly country: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly country_code: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly name: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly url: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                };
              };
            };
            readonly competitors: {
              readonly type: 'array';
              readonly items: {
                readonly type: 'object';
                readonly properties: {
                  readonly abbreviation: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly age_group: {
                    readonly type: 'string';
                    readonly examples: readonly ['U23'];
                  };
                  readonly country: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly country_code: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly gender: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly id: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly name: {
                    readonly type: 'string';
                    readonly examples: readonly ['string'];
                  };
                  readonly qualifier: {
                    readonly type: 'string';
                    readonly examples: readonly ['home'];
                  };
                  readonly virtual: {
                    readonly type: 'boolean';
                    readonly default: true;
                    readonly examples: readonly [true];
                  };
                };
              };
            };
            readonly coverage: {
              readonly type: 'object';
              readonly properties: {
                readonly sport_event_properties: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly data_complete: {
                      readonly type: 'boolean';
                      readonly default: true;
                      readonly examples: readonly [true];
                    };
                    readonly live: {
                      readonly type: 'boolean';
                      readonly default: true;
                      readonly examples: readonly [true];
                    };
                  };
                };
                readonly type: {
                  readonly type: 'string';
                  readonly examples: readonly ['sport_event'];
                };
              };
            };
            readonly id: {
              readonly type: 'string';
              readonly examples: readonly ['string'];
            };
            readonly replaced_by: {
              readonly type: 'string';
              readonly examples: readonly ['string'];
            };
            readonly resume_time: {
              readonly type: 'string';
              readonly examples: readonly ['2024-02-26T15:34:29.723Z'];
            };
            readonly sport_event_context: {
              readonly type: 'object';
              readonly properties: {
                readonly category: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly country_code: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly id: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly name: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                  };
                };
                readonly competition: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly gender: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly id: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly name: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly parent_id: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly type: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                  };
                };
                readonly season: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly competition_id: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly disabled: {
                      readonly type: 'boolean';
                      readonly default: true;
                      readonly examples: readonly [true];
                    };
                    readonly end_date: {
                      readonly type: 'string';
                      readonly examples: readonly ['2024-02-26'];
                    };
                    readonly id: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly name: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly start_date: {
                      readonly type: 'string';
                      readonly examples: readonly ['2024-02-26'];
                    };
                    readonly year: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                  };
                };
                readonly sport: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly id: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                    readonly name: {
                      readonly type: 'string';
                      readonly examples: readonly ['string'];
                    };
                  };
                };
                readonly stage: {
                  readonly type: 'object';
                  readonly properties: {
                    readonly phase: {
                      readonly type: 'string';
                      readonly examples: readonly [
                        '1st_part_of_season_1st_leg'
                      ];
                    };
                    readonly type: {
                      readonly type: 'string';
                      readonly examples: readonly ['Early Prelims'];
                    };
                  };
                };
              };
            };
            readonly start_time: {
              readonly type: 'string';
              readonly examples: readonly ['2024-02-26T15:34:29.723Z'];
            };
            readonly start_time_confirmed: {
              readonly type: 'boolean';
              readonly default: true;
              readonly examples: readonly [true];
            };
            readonly venue: {
              readonly type: 'object';
              readonly properties: {
                readonly capacity: {
                  readonly type: 'integer';
                  readonly default: 0;
                  readonly examples: readonly [0];
                };
                readonly changed: {
                  readonly type: 'boolean';
                  readonly default: true;
                  readonly examples: readonly [true];
                };
                readonly city_name: {
                  readonly type: 'string';
                  readonly examples: readonly ['string'];
                };
                readonly country_code: {
                  readonly type: 'string';
                  readonly examples: readonly ['string'];
                };
                readonly country_name: {
                  readonly type: 'string';
                  readonly examples: readonly ['string'];
                };
                readonly id: {
                  readonly type: 'string';
                  readonly examples: readonly ['string'];
                };
                readonly map_coordinates: {
                  readonly type: 'string';
                  readonly examples: readonly ['string'];
                };
                readonly name: {
                  readonly type: 'string';
                  readonly examples: readonly ['string'];
                };
                readonly reduced_capacity: {
                  readonly type: 'boolean';
                  readonly default: true;
                  readonly examples: readonly [true];
                };
                readonly reduced_capacity_max: {
                  readonly type: 'integer';
                  readonly default: 0;
                  readonly examples: readonly [0];
                };
                readonly state: {
                  readonly type: 'string';
                  readonly examples: readonly ['string'];
                };
                readonly timezone: {
                  readonly type: 'string';
                  readonly examples: readonly ['string'];
                };
              };
            };
          };
        };
        readonly sport_event_status: {
          readonly type: 'object';
          readonly properties: {
            readonly end_position: {
              readonly type: 'string';
              readonly examples: readonly ['after_drop_to_ground'];
            };
            readonly end_strike: {
              readonly type: 'string';
              readonly examples: readonly ['elbow'];
            };
            readonly end_target: {
              readonly type: 'string';
              readonly examples: readonly ['body'];
            };
            readonly final_round: {
              readonly type: 'integer';
              readonly default: 0;
              readonly examples: readonly [0];
            };
            readonly final_round_length: {
              readonly type: 'string';
              readonly examples: readonly ['string'];
            };
            readonly main_event: {
              readonly type: 'boolean';
              readonly default: true;
              readonly examples: readonly [true];
            };
            readonly match_status: {
              readonly type: 'string';
              readonly examples: readonly ['not_started'];
            };
            readonly method: {
              readonly type: 'string';
              readonly examples: readonly ['decision_majority'];
            };
            readonly scheduled_length: {
              readonly type: 'integer';
              readonly default: 0;
              readonly examples: readonly [0];
            };
            readonly scout_abandoned: {
              readonly type: 'boolean';
              readonly default: true;
              readonly examples: readonly [true];
            };
            readonly status: {
              readonly type: 'string';
              readonly examples: readonly ['not_started'];
            };
            readonly submission: {
              readonly type: 'string';
              readonly examples: readonly ['anaconda_choke'];
            };
            readonly title_fight: {
              readonly type: 'boolean';
              readonly default: true;
              readonly examples: readonly [true];
            };
            readonly weight_class: {
              readonly type: 'string';
              readonly examples: readonly ['string'];
            };
            readonly winner: {
              readonly type: 'string';
              readonly examples: readonly ['home_team'];
            };
            readonly winner_id: {
              readonly type: 'string';
              readonly examples: readonly ['string'];
            };
          };
        };
        readonly statistics: {
          readonly type: 'object';
          readonly properties: {
            readonly periods: {
              readonly type: 'array';
              readonly items: {
                readonly type: 'object';
                readonly properties: {
                  readonly competitors: {
                    readonly type: 'array';
                    readonly items: {
                      readonly type: 'object';
                      readonly properties: {
                        readonly abbreviation: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly age_group: {
                          readonly type: 'string';
                          readonly examples: readonly ['U23'];
                        };
                        readonly country: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly country_code: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly gender: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly id: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly name: {
                          readonly type: 'string';
                          readonly examples: readonly ['string'];
                        };
                        readonly qualifier: {
                          readonly type: 'string';
                          readonly examples: readonly ['home'];
                        };
                        readonly statistics: {
                          readonly type: 'object';
                          readonly properties: {
                            readonly control: {
                              readonly type: 'string';
                              readonly examples: readonly ['6:04'];
                            };
                            readonly knockdowns: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly significant_strike_percentage: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly significant_strikes: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly significant_strikes_attempted: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly submission_attempts: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly takedown_percentage: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly takedowns: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly takedowns_attempted: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly total_strike_percentage: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly total_strikes: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                            readonly total_strikes_attempted: {
                              readonly type: 'integer';
                              readonly default: 0;
                              readonly examples: readonly [0];
                            };
                          };
                        };
                        readonly virtual: {
                          readonly type: 'boolean';
                          readonly default: true;
                          readonly examples: readonly [true];
                        };
                      };
                    };
                  };
                  readonly number: {
                    readonly type: 'integer';
                    readonly default: 0;
                    readonly examples: readonly [0];
                  };
                };
              };
            };
            readonly totals: {
              readonly type: 'object';
              readonly properties: {
                readonly competitors: {
                  readonly type: 'array';
                  readonly items: {
                    readonly type: 'object';
                    readonly properties: {
                      readonly abbreviation: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly age_group: {
                        readonly type: 'string';
                        readonly examples: readonly ['U23'];
                      };
                      readonly country: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly country_code: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly gender: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly id: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly name: {
                        readonly type: 'string';
                        readonly examples: readonly ['string'];
                      };
                      readonly qualifier: {
                        readonly type: 'string';
                        readonly examples: readonly ['home'];
                      };
                      readonly statistics: {
                        readonly type: 'object';
                        readonly properties: {
                          readonly control: {
                            readonly type: 'string';
                            readonly examples: readonly ['6:04'];
                          };
                          readonly knockdowns: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly significant_strike_percentage: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly significant_strikes: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly significant_strikes_attempted: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly submission_attempts: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly takedown_percentage: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly takedowns: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly takedowns_attempted: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly total_strike_percentage: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly total_strikes: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                          readonly total_strikes_attempted: {
                            readonly type: 'integer';
                            readonly default: 0;
                            readonly examples: readonly [0];
                          };
                        };
                      };
                      readonly virtual: {
                        readonly type: 'boolean';
                        readonly default: true;
                        readonly examples: readonly [true];
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSportEventsCreated: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      },
      {
        readonly type: 'object';
        readonly properties: {
          readonly start: {
            readonly type: 'integer';
            readonly format: 'int32';
            readonly minimum: -2147483648;
            readonly maximum: 2147483647;
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Number to start the list of results from. Example: start=0';
          };
          readonly limit: {
            readonly type: 'integer';
            readonly format: 'int32';
            readonly minimum: -2147483648;
            readonly maximum: 2147483647;
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Number to limit the number of results. Minimum value is 1, maximum value is 1000. Example: limit=75';
          };
        };
        readonly required: readonly [];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-08-30T18:52:12.264Z'];
        };
        readonly sport_events_created: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly active_season: {
                readonly type: 'boolean';
                readonly default: true;
                readonly examples: readonly [true];
              };
              readonly created_at: {
                readonly type: 'string';
                readonly examples: readonly ['2023-08-30T18:52:12.264Z'];
              };
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['string'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MmaSportEventsRemoved: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly access_level: {
            readonly type: 'string';
            readonly enum: readonly ['trial', 'production'];
            readonly default: 'trial';
            readonly description: 'The access level of your API key';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly language_code: {
            readonly type: 'string';
            readonly default: 'en';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: '2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.';
          };
          readonly format: {
            readonly type: 'string';
            readonly enum: readonly ['json', 'xml'];
            readonly default: 'json';
            readonly description: 'Format returned';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly ['access_level', 'language_code', 'format'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly generated_at: {
          readonly type: 'string';
          readonly examples: readonly ['2023-04-26T13:45:45+00:00'];
        };
        readonly sport_events_removed: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly id: {
                readonly type: 'string';
                readonly examples: readonly ['sr:sport_event:18564646'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
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
