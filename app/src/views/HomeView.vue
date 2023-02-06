<script setup lang="ts">
import { useBtcStore } from "@/stores/btc";
const store = useBtcStore();
store.updateState();
</script>

<template>
  <main>
    <div class="container-fluid text-center">
      <div v-if="store.data.disclaimer" class="row">
        <p><strong>Disclaimer:</strong> {{ store.data.disclaimer }}</p>
      </div>
      <div class="row">
        <div v-for="(rate, index) in store.data.rates" :key="index" class="col">
          <p>{{ rate.code }} {{ rate.rate }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
