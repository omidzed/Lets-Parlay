import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'sportradar-mma/unknown (api/6.1.1)');
  }
  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config) {
    this.core.setConfig(config);
  }
  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values) {
    this.core.setAuth(...values);
    return this;
  }
  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url, variables = {}) {
    this.core.setServer(url, variables);
  }
  /**
   * Provides a list of current champions by weight class.
   *
   * @summary Champions
   */
  mmaChampions(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/champions.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides the name, id, and parent id for a given competition.
   *
   * @summary Competition Info
   */
  mmaCompetitionInfo(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/competitions/{competition_id}/info.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides a list of all available competitions.
   *
   * @summary Competitions List
   */
  mmaCompetitionsList(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/competitions.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides valid ids for competitors who have had their profiles merged. While Sportradar
   * always strives to provide one unique competitor id, it is a possibility for two ids to
   * be created. This feed provides the correct id once profiles have been
   * merged.<br><br>Entries are retained in this endpoint for one week.
   *
   * @summary Competitor Merge Mappings
   */
  mmaCompetitorMergeMappings(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/competitors/merge_mappings.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides historical season information for a given competition. Valid competition IDs
   * can be found in the Competitions feed.
   *
   * @summary Competitions Seasons
   */
  mmaCompetitionsSeasons(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/competitions/{competition_id}/seasons.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides biographical information for a given competitor, including record.
   *
   * @summary Competitor Profile
   */
  mmaCompetitorProfile(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/competitors/{competitor_id}/profile.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides information for all currently live events, including results and statistics.
   *
   * @summary Live Summaries
   */
  mmaLiveSummaries(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/schedules/live/summaries.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides previous and upcoming event information for a given competitor, including
   * results for past events and scheduling info for upcoming events.
   *
   * @summary Competitor Summaries
   */
  mmaCompetitorSummaries(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/competitors/{competitor_id}/summaries.{format}',
      'get',
      metadata
    );
  }
  /**
   * Returns the current rankings for each weight class.
   *
   * @summary Rankings
   */
  mmaRankings(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/rankings.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides previous and upcoming fights between two competitors, including results and
   * statistics.
   *
   * @summary Competitor vs Competitor
   */
  mmaCompetitorVsCompetitor(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/competitors/{competitor_id}/versus/{competitor_id2}/summaries.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides event schedules for a given day, including results and statistics.
   *
   * @summary Daily Summaries
   */
  mmaDailySummaries(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/schedules/{date}/summaries.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides win probabilities for each participant for every match from a given
   * event/season.
   *
   * @summary Season Probabilities
   */
  mmaSeasonProbabilities(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/seasons/{season_id}/probabilities.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides information for a given event/season, including a list of participants.
   *
   * @summary Season Information
   */
  mmaSeasonInformation(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/seasons/{season_id}/info.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides a complete list of historical event/season information for all supported
   * competitions in the API.
   *
   * @summary Seasons
   */
  mmaSeasons(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/seasons.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides schedule information and results for all fights from a given event/season.
   *
   * @summary Season Summaries
   */
  mmaSeasonSummaries(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/seasons/{season_id}/summaries.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides a list of competitors participating for a given event/season id.
   *
   * @summary Season Competitors
   */
  mmaSeasonCompetitors(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/seasons/{season_id}/competitors.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides ids for sport events that have been created in the last 24 hours.
   *
   * @summary Sport Events Created
   */
  mmaSportEventsCreated(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/sport_events/created.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides ids for sport events that have been updated in the last 24 hours.
   *
   * @summary Sport Event Change Log
   */
  mmaSportEventChangeLog(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/sport_events/updated.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides ids for sport events that have been removed or deleted.
   *
   * @summary Sport Events Removed
   */
  mmaSportEventsRemoved(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/sport_events/removed.{format}',
      'get',
      metadata
    );
  }
  /**
   * Provides live scoring for a given event/fight. Please note that data returned is
   * determined by coverage level.
   *
   * @summary Sport Event Summary
   */
  mmaSportEventSummary(metadata) {
    return this.core.fetch(
      '/{access_level}/v2/{language_code}/sport_events/{sport_event_id}/summary.{format}',
      'get',
      metadata
    );
  }
}
const createSDK = (() => {
  return new SDK();
})();
export default createSDK;
