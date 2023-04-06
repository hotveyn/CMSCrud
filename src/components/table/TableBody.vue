<template>
  <div class="table-body base-grid">
    <template v-for="a1 in productTableStore.productToShow" :key="a1.id">
      <TableBodyItem :product="a1"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import type {IProduct} from "@/interfaces/IProduct";
import TableBodyItem from "@/components/table/TableBodyItem.vue"
import {useProductTableStore} from "@/stores/productTableStore";

const productTableStore = useProductTableStore();
</script>

<style lang="scss">
.table-body {
  align-content: center;
  &__item {
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>