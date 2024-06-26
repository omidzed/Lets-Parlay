import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
  spec: Oas;
  core: APICore;
  constructor();
  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions): void;
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
  auth(...values: string[] | number[]): this;
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
  server(url: string, variables?: {}): void;
  /**
   * Provides a list of current champions by weight class.
   *
   * @summary Champions
   */
  mmaChampions(
    metadata: types.MmaChampionsMetadataParam
  ): Promise<FetchResponse<200, types.MmaChampionsResponse200>>;
  /**
   * Provides the name, id, and parent id for a given competition.
   *
   * @summary Competition Info
   */
  mmaCompetitionInfo(
    metadata: types.MmaCompetitionInfoMetadataParam
  ): Promise<FetchResponse<200, types.MmaCompetitionInfoResponse200>>;
  /**
   * Provides a list of all available competitions.
   *
   * @summary Competitions List
   */
  mmaCompetitionsList(
    metadata: types.MmaCompetitionsListMetadataParam
  ): Promise<FetchResponse<200, types.MmaCompetitionsListResponse200>>;
  /**
   * Provides valid ids for competitors who have had their profiles merged. While Sportradar
   * always strives to provide one unique competitor id, it is a possibility for two ids to
   * be created. This feed provides the correct id once profiles have been
   * merged.<br><br>Entries are retained in this endpoint for one week.
   *
   * @summary Competitor Merge Mappings
   */
  mmaCompetitorMergeMappings(
    metadata: types.MmaCompetitorMergeMappingsMetadataParam
  ): Promise<FetchResponse<200, types.MmaCompetitorMergeMappingsResponse200>>;
  /**
   * Provides historical season information for a given competition. Valid competition IDs
   * can be found in the Competitions feed.
   *
   * @summary Competitions Seasons
   */
  mmaCompetitionsSeasons(
    metadata: types.MmaCompetitionsSeasonsMetadataParam
  ): Promise<FetchResponse<200, types.MmaCompetitionsSeasonsResponse200>>;
  /**
   * Provides biographical information for a given competitor, including record.
   *
   * @summary Competitor Profile
   */
  mmaCompetitorProfile(
    metadata: types.MmaCompetitorProfileMetadataParam
  ): Promise<FetchResponse<200, types.MmaCompetitorProfileResponse200>>;
  /**
   * Provides information for all currently live events, including results and statistics.
   *
   * @summary Live Summaries
   */
  mmaLiveSummaries(
    metadata: types.MmaLiveSummariesMetadataParam
  ): Promise<FetchResponse<200, types.MmaLiveSummariesResponse200>>;
  /**
   * Provides previous and upcoming event information for a given competitor, including
   * results for past events and scheduling info for upcoming events.
   *
   * @summary Competitor Summaries
   */
  mmaCompetitorSummaries(
    metadata: types.MmaCompetitorSummariesMetadataParam
  ): Promise<FetchResponse<200, types.MmaCompetitorSummariesResponse200>>;
  /**
   * Returns the current rankings for each weight class.
   *
   * @summary Rankings
   */
  mmaRankings(
    metadata: types.MmaRankingsMetadataParam
  ): Promise<FetchResponse<200, types.MmaRankingsResponse200>>;
  /**
   * Provides previous and upcoming fights between two competitors, including results and
   * statistics.
   *
   * @summary Competitor vs Competitor
   */
  mmaCompetitorVsCompetitor(
    metadata: types.MmaCompetitorVsCompetitorMetadataParam
  ): Promise<FetchResponse<200, types.MmaCompetitorVsCompetitorResponse200>>;
  /**
   * Provides event schedules for a given day, including results and statistics.
   *
   * @summary Daily Summaries
   */
  mmaDailySummaries(
    metadata: types.MmaDailySummariesMetadataParam
  ): Promise<FetchResponse<200, types.MmaDailySummariesResponse200>>;
  /**
   * Provides win probabilities for each participant for every match from a given
   * event/season.
   *
   * @summary Season Probabilities
   */
  mmaSeasonProbabilities(
    metadata: types.MmaSeasonProbabilitiesMetadataParam
  ): Promise<FetchResponse<200, types.MmaSeasonProbabilitiesResponse200>>;
  /**
   * Provides information for a given event/season, including a list of participants.
   *
   * @summary Season Information
   */
  mmaSeasonInformation(
    metadata: types.MmaSeasonInformationMetadataParam
  ): Promise<FetchResponse<200, types.MmaSeasonInformationResponse200>>;
  /**
   * Provides a complete list of historical event/season information for all supported
   * competitions in the API.
   *
   * @summary Seasons
   */
  mmaSeasons(
    metadata: types.MmaSeasonsMetadataParam
  ): Promise<FetchResponse<200, types.MmaSeasonsResponse200>>;
  /**
   * Provides schedule information and results for all fights from a given event/season.
   *
   * @summary Season Summaries
   */
  mmaSeasonSummaries(
    metadata: types.MmaSeasonSummariesMetadataParam
  ): Promise<FetchResponse<200, types.MmaSeasonSummariesResponse200>>;
  /**
   * Provides a list of competitors participating for a given event/season id.
   *
   * @summary Season Competitors
   */
  mmaSeasonCompetitors(
    metadata: types.MmaSeasonCompetitorsMetadataParam
  ): Promise<FetchResponse<200, types.MmaSeasonCompetitorsResponse200>>;
  /**
   * Provides ids for sport events that have been created in the last 24 hours.
   *
   * @summary Sport Events Created
   */
  mmaSportEventsCreated(
    metadata: types.MmaSportEventsCreatedMetadataParam
  ): Promise<FetchResponse<200, types.MmaSportEventsCreatedResponse200>>;
  /**
   * Provides ids for sport events that have been updated in the last 24 hours.
   *
   * @summary Sport Event Change Log
   */
  mmaSportEventChangeLog(
    metadata: types.MmaSportEventChangeLogMetadataParam
  ): Promise<FetchResponse<200, types.MmaSportEventChangeLogResponse200>>;
  /**
   * Provides ids for sport events that have been removed or deleted.
   *
   * @summary Sport Events Removed
   */
  mmaSportEventsRemoved(
    metadata: types.MmaSportEventsRemovedMetadataParam
  ): Promise<FetchResponse<200, types.MmaSportEventsRemovedResponse200>>;
  /**
   * Provides live scoring for a given event/fight. Please note that data returned is
   * determined by coverage level.
   *
   * @summary Sport Event Summary
   */
  mmaSportEventSummary(
    metadata: types.MmaSportEventSummaryMetadataParam
  ): Promise<FetchResponse<200, types.MmaSportEventSummaryResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
