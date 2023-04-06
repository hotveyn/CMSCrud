<template>
    <header class="header">
        <div class="header__title">
            <div class="header__logo">CMS</div>
            <p class="header__price">
                Итоговая стоимость: <span class="header__price_bold">${{ productTableStore.totalProductPrice }}</span>
            </p>
        </div>
        <span class="header__underline"></span>
    </header>
</template>

<script
    setup
    lang="ts"
>
import {useProductTableStore} from "@/stores/productTableStore";


const productTableStore = useProductTableStore();

</script>

<style
    scoped
    lang="scss"
>
.header {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__title {
    padding: 0 10px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__logo {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #6E6893;
  }

  &__price {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #6E6893;

    &_bold {
      color: #6D5BD0;
      font-weight: 700;
      font-size: 20px;
    }
  }

  &__underline {
    display: block;
    background-color: #6D5BD0;
    height: 2px;
    width: 100%;
  }
}
</style>