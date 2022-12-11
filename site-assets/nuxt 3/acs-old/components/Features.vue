<script setup>
import { TruckIcon, CashIcon, ClockIcon } from '@heroicons/vue/outline'
</script>

<template>
  <div class="container py-16 grid place-items-center">
    <div class="w-8/12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:w-full">
      <div
        class="border border-slate-400 rounded-md px-4 py-10 flex items-center justify-center gap-4 transition hover:border-primary hover:bg-slate-200"
      >
        <TruckIcon class="w-12 h-12 text-primary-light" />
        <div class="w-48">
          <h3 class="text-lg font-bold text-slate-600 capitalize">Free Shipping</h3>
          <div class="text-xs text-slate-500">for orders over $200</div>
        </div>
      </div>
      <div
        class="border border-slate-400 rounded-md px-4 py-10 flex items-center justify-center gap-4 transition hover:border-primary hover:bg-slate-200"
      >
        <CashIcon class="w-12 h-12 text-primary-light" />
        <div class="w-48">
          <h3 class="text-lg font-bold text-slate-600 capitalize">Money back</h3>
          <div class="text-xs text-slate-500">30 days money back garanteed</div>
        </div>
      </div>
      <div
        class="border border-slate-400 rounded-md px-4 py-10 flex items-center justify-center gap-4 transition hover:border-primary hover:bg-slate-200"
      >
        <ClockIcon class="w-12 h-12 text-primary-light" />
        <div class="w-48">
          <h3 class="text-lg font-bold text-slate-600 capitalize">24/7 support</h3>
          <div class="text-xs text-slate-500">Outstanding customer support</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="" scoped></style>
