<template>
  <div class="table-footer">
    <p class="table-footer__pagination">Показывать на странице: {{productTableStore.productCountToShow}}
      <ArrowDropDownIcon class="table-footer__cursor"/>
    </p>
    <p class="table-footer__pages">
        {{productTableStore.productIndexThatStartShow}}-{{productTableStore.productIndexThatEndShow}} из {{productTableStore.productsLength}}
    </p>
    <p class="table-footer__buttons">
      <LeftArrowIcon class="table-footer__cursor" @click="productTableStore.productsVisionPageDown()"/>
      <RightArrowIcon class="table-footer__cursor" @click="productTableStore.productsVisionPageUp()"/>
    </p>
  </div>
</template>

<script setup lang="ts">
import ArrowDropDownIcon from "@/components/shared/icons/ArrowDropDownIcon.vue"
import LeftArrowIcon from "@/components/shared/icons/LeftArrowIcon.vue"
import RightArrowIcon from "@/components/shared/icons/RightArrowIcon.vue"
import {useProductTableStore} from "@/stores/productTableStore";

const productTableStore = useProductTableStore();


</script>

<style scoped lang="scss">
.table-footer {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  gap: 50px;
  justify-content: flex-end;
  align-items: center;
  background-color: #F4F2FF;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .table-footer__cursor {
    cursor: pointer;

  }
}
</style>