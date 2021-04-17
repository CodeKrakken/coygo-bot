import { Coygo, SUPPORTED_EXCHANGE_IDS } from 'coygo-api';

const coygo = new Coygo({
  apiKey: '<coygo api key>',
  exchanges: [
    {
      exchangeId: SUPPORTED_EXCHANGE_IDS.KRAKEN,
      apikey: '<kraken api key>',
      apiSecret: '<kraken api secret>'
    }
  ]
});

const krakenClient = coygo.getClient({
  exchangeId: SUPPORTED_EXCHANGE_IDS.KRAKEN
});