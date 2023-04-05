<template>
  <div class="table-wrapper">
    <TableHeader/>
    <TableBody/>
    <TableFooter/>
  </div>
</template>

<script setup lang="ts">
import TableHeader from '@/components/table/TableHeader.vue'
import TableBody from '@/components/table/TableBody.vue'
import TableFooter from "@/components/table/TableFooter.vue";
</script>

<style scoped lang="scss">
.table-wrapper {
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

</style>