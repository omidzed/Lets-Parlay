import sdk from '@api/sportradar-mma';

sdk.auth('GWos0Nlpuq22OCZAhnhMU4Abs6LFxpcIVFrL9P3j');
sdk
  .mmaChampions({ access_level: 'trial', language_code: 'en', format: 'json' })
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err));
