import { defineStore } from "pinia";

export const useBtcStore = defineStore("btcStore", {
  state: () => {
    return {
      data: {
        rates: {
          eur: {},
          gbp: {},
          usd: {},
        },
        disclaimer: "",
      },
    };
  },
  getters: {},
  actions: {
    async setState() {
      const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
      const response = await fetch(url);
      const responseData = await response.json();
      console.log(responseData);

      this.data.rates.eur = responseData.bpi.EUR;
      this.data.rates.gbp = responseData.bpi.GBP;
      this.data.rates.usd = responseData.bpi.USD;
      this.data.disclaimer = responseData.disclaimer;
    },

    async updateState() {
      await this.setState();
      setInterval(async () => {
        await this.setState();
      }, 30000);
    },
  },
});
