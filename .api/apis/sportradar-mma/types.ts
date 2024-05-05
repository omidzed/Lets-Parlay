import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type MmaChampionsMetadataParam = FromSchema<
  typeof schemas.MmaChampions.metadata
>;
export type MmaChampionsResponse200 = FromSchema<
  (typeof schemas.MmaChampions.response)['200']
>;
export type MmaCompetitionInfoMetadataParam = FromSchema<
  typeof schemas.MmaCompetitionInfo.metadata
>;
export type MmaCompetitionInfoResponse200 = FromSchema<
  (typeof schemas.MmaCompetitionInfo.response)['200']
>;
export type MmaCompetitionsListMetadataParam = FromSchema<
  typeof schemas.MmaCompetitionsList.metadata
>;
export type MmaCompetitionsListResponse200 = FromSchema<
  (typeof schemas.MmaCompetitionsList.response)['200']
>;
export type MmaCompetitionsSeasonsMetadataParam = FromSchema<
  typeof schemas.MmaCompetitionsSeasons.metadata
>;
export type MmaCompetitionsSeasonsResponse200 = FromSchema<
  (typeof schemas.MmaCompetitionsSeasons.response)['200']
>;
export type MmaCompetitorMergeMappingsMetadataParam = FromSchema<
  typeof schemas.MmaCompetitorMergeMappings.metadata
>;
export type MmaCompetitorMergeMappingsResponse200 = FromSchema<
  (typeof schemas.MmaCompetitorMergeMappings.response)['200']
>;
export type MmaCompetitorProfileMetadataParam = FromSchema<
  typeof schemas.MmaCompetitorProfile.metadata
>;
export type MmaCompetitorProfileResponse200 = FromSchema<
  (typeof schemas.MmaCompetitorProfile.response)['200']
>;
export type MmaCompetitorSummariesMetadataParam = FromSchema<
  typeof schemas.MmaCompetitorSummaries.metadata
>;
export type MmaCompetitorSummariesResponse200 = FromSchema<
  (typeof schemas.MmaCompetitorSummaries.response)['200']
>;
export type MmaCompetitorVsCompetitorMetadataParam = FromSchema<
  typeof schemas.MmaCompetitorVsCompetitor.metadata
>;
export type MmaCompetitorVsCompetitorResponse200 = FromSchema<
  (typeof schemas.MmaCompetitorVsCompetitor.response)['200']
>;
export type MmaDailySummariesMetadataParam = FromSchema<
  typeof schemas.MmaDailySummaries.metadata
>;
export type MmaDailySummariesResponse200 = FromSchema<
  (typeof schemas.MmaDailySummaries.response)['200']
>;
export type MmaLiveSummariesMetadataParam = FromSchema<
  typeof schemas.MmaLiveSummaries.metadata
>;
export type MmaLiveSummariesResponse200 = FromSchema<
  (typeof schemas.MmaLiveSummaries.response)['200']
>;
export type MmaRankingsMetadataParam = FromSchema<
  typeof schemas.MmaRankings.metadata
>;
export type MmaRankingsResponse200 = FromSchema<
  (typeof schemas.MmaRankings.response)['200']
>;
export type MmaSeasonCompetitorsMetadataParam = FromSchema<
  typeof schemas.MmaSeasonCompetitors.metadata
>;
export type MmaSeasonCompetitorsResponse200 = FromSchema<
  (typeof schemas.MmaSeasonCompetitors.response)['200']
>;
export type MmaSeasonInformationMetadataParam = FromSchema<
  typeof schemas.MmaSeasonInformation.metadata
>;
export type MmaSeasonInformationResponse200 = FromSchema<
  (typeof schemas.MmaSeasonInformation.response)['200']
>;
export type MmaSeasonProbabilitiesMetadataParam = FromSchema<
  typeof schemas.MmaSeasonProbabilities.metadata
>;
export type MmaSeasonProbabilitiesResponse200 = FromSchema<
  (typeof schemas.MmaSeasonProbabilities.response)['200']
>;
export type MmaSeasonSummariesMetadataParam = FromSchema<
  typeof schemas.MmaSeasonSummaries.metadata
>;
export type MmaSeasonSummariesResponse200 = FromSchema<
  (typeof schemas.MmaSeasonSummaries.response)['200']
>;
export type MmaSeasonsMetadataParam = FromSchema<
  typeof schemas.MmaSeasons.metadata
>;
export type MmaSeasonsResponse200 = FromSchema<
  (typeof schemas.MmaSeasons.response)['200']
>;
export type MmaSportEventChangeLogMetadataParam = FromSchema<
  typeof schemas.MmaSportEventChangeLog.metadata
>;
export type MmaSportEventChangeLogResponse200 = FromSchema<
  (typeof schemas.MmaSportEventChangeLog.response)['200']
>;
export type MmaSportEventSummaryMetadataParam = FromSchema<
  typeof schemas.MmaSportEventSummary.metadata
>;
export type MmaSportEventSummaryResponse200 = FromSchema<
  (typeof schemas.MmaSportEventSummary.response)['200']
>;
export type MmaSportEventsCreatedMetadataParam = FromSchema<
  typeof schemas.MmaSportEventsCreated.metadata
>;
export type MmaSportEventsCreatedResponse200 = FromSchema<
  (typeof schemas.MmaSportEventsCreated.response)['200']
>;
export type MmaSportEventsRemovedMetadataParam = FromSchema<
  typeof schemas.MmaSportEventsRemoved.metadata
>;
export type MmaSportEventsRemovedResponse200 = FromSchema<
  (typeof schemas.MmaSportEventsRemoved.response)['200']
>;
