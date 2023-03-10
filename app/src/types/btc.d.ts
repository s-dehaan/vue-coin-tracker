export interface btcState {
  data: {
    rates: {
      eur: {
        code: string;
        rate: string;
      };
      gbp: {
        code: string;
        rate: string;
      };
      usd: {
        code: string;
        rate: string;
      };
    };
    disclaimer: string;
  };
}
