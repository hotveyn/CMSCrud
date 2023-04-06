<template>
    <div class="product-form">
        <div class="product-form__header">
            <h2 class="product-form__title">
                <slot name="header"/>
            </h2>
            <CloseIcon class="product-form__cansel"/>
        </div>
        <span class="product-form__underline"></span>
        <form class="product-form__form">
            <div class="left product-form__staff">
                <div class="product-form__input-wrapper">
                    <BaseInput class="product-form__input" label-text="Наименование"/>
                </div>
                <div class="product-form__input-wrapper">
                    <BaseInput class="product-form__input" label-text="Категория"/>
                </div>
                <div class="product-form__input-wrapper">
                    <BaseInput class="product-form__input" label-text="Единицы измерения"/>
                </div>
                <div class="product-form__input-wrapper">
                    <BaseInput class="product-form__input" label-text="Дисконт"/>
                </div>
            </div>
            <div class="right product-form__staff">
                <div class="product-form__input-wrapper aboba">
                    <BaseTextarea label-text="Описание"/>
                </div>
                <div class="product-form__input-wrapper">
                    <BaseInput class="product-form__input" label-text="Количество"/>
                </div>
                <div class="product-form__input-wrapper">
                    <BaseInput class="product-form__input" label-text="Цена"/>
                </div>
            </div>
        </form>
        <div class="product-form__footer">
            <span class="product-form__total ">Итоговая стоимость: <span class="blue-bold">$123</span></span>
            <BaseButton :type="'secondary'">Добавить товар</BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/components/shared/icons/CloseIcon.vue";
import BaseInput from "@/components/shared/Inputs/BaseInput.vue";
import BaseTextarea from "@/components/shared/textarea/BaseTextarea.vue";
import BaseButton from "@/components/shared/Buttons/BaseButton.vue";

</script>

<style scoped lang="scss">
.product-form {
  max-width: 580px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.1em;
    color: #6E6893;
  }

  &__cansel {
    scale: 2;

    cursor: pointer;
    transform: translate(36px);
  }

  &__underline {
    display: block;
    background-color: #6D5BD0;
    height: 1px;
    width: 100%;
    margin: 21px 0;
  }

  &__form {
    width: 100%;
    padding: 28px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  &__staff {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 28px;
    max-width: 520px;
    width: 100%;
  }

  &__total {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #6E6893;
  }

  .aboba {
    grid-row-start: 1;
    grid-row-end: 3;

  }
}
</style>