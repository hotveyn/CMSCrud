<template>
    <p class="table-body__item">{{ product.id }}</p>
    <p class="table-body__item">{{ product.name }}</p>
    <p class="table-body__item">{{ product.category }}</p>
    <p class="table-body__item">{{ product.dimension }}</p>
    <p class="table-body__item">{{ product.quantity }}</p>
    <p class="table-body__item">{{ product.price + '$'}}</p>
    <p class="table-body__item">{{ product.price * product.quantity + '$' }}</p>
    <span class="table-body__item table-body__item_buttons">
        <ImageIcon class="clickable"/>
        <EditIcon class="clickable"/>
        <TrashIcon @click="productTableStore.deleteProductById(product.id)" class="clickable"/>
    </span>
</template>

<script
    setup
    lang="ts"
>
import type {IProduct} from "@/interfaces/IProduct";
import ImageIcon from "@/components/shared/icons/ImageIcon.vue";
import EditIcon from "@/components/shared/icons/EditIcon.vue";
import TrashIcon from "@/components/shared/icons/TrashIcon.vue";
import {useProductTableStore} from "@/stores/productTableStore";

const props = defineProps<{
    product: IProduct
}>();

const productTableStore = useProductTableStore();

</script>

<style scoped>
.table-body__item_buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
</style>