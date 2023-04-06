<template>
    <div class="table-header">
        <div class="left">
            <BaseButton>
                <FilterIcon/>
                Фильтр
            </BaseButton>
            <BaseInput :is-search="true" placeholder="Поиск по наименованию и категории"/>
        </div>
        <BaseButton @click="modalVision = true" type="secondary">Добавить товар</BaseButton>
        <Teleport to="body">
            <OpacityTransition>
                <ModalWrapper @hide-modal="modalVision = false" v-if="modalVision" >
                    <BaseProductForm @hide-modal="modalVision = false" :modal-mode="true">
                        <template #header>
                            <h2>Добавить товар</h2>
                        </template>
                        <template #button-text>
                            Добавить товар
                        </template>
                    </BaseProductForm>
                </ModalWrapper>
            </OpacityTransition>
        </Teleport>
    </div>
    <div class="table-first-row base-grid">
        <p class="table-first-row__item">ID</p>
        <p class="table-first-row__item">Наименование</p>
        <p class="table-first-row__item">Категория</p>
        <p class="table-first-row__item">ед/изм</p>
        <p class="table-first-row__item">Количество</p>
        <p class="table-first-row__item">цена</p>
        <p class="table-first-row__item">ИТОГ</p>
        <div class="table-first-row__item"></div>
    </div>
</template>

<script setup lang="ts">
import ModalWrapper from "@/components/shared/modal/ModalWrapper.vue";
import BaseButton from '@/components/shared/Buttons/BaseButton.vue'
import BaseInput from '@/components/shared/Inputs/BaseInput.vue'
import FilterIcon from '@/components/shared/icons/FilterIcon.vue'
import {ref} from "vue";
import OpacityTransition from "@/components/shared/transitions/OpacityTransition.vue";
import BaseProductForm from "@/components/shared/forms/BaseProductForm.vue";

let modalVision = ref(false);
</script>

<style scoped lang="scss">
.table-header {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: min(100%, 500px);
  }
}

.table-first-row {
  background: #F4F2FF;
  text-transform: uppercase;
  color: #6E6893;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  &__item {
    padding: 15px 0;

    &_buttons {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
}
</style>