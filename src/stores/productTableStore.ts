import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import type {IProduct} from "@/interfaces/IProduct";

type ProductCountInPageType = 1|2|3|4|5|6|7|8|9|10;

export const useProductTableStore = defineStore('productTable', () => {
    const products = ref<IProduct[]>([
        {
            id: 1,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 2,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 3,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 4,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 5,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 6,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 7,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 8,
            name: 'Навигационная система Pascal',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 50,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 9,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 10,
            name: 'Навигационная система Pascal',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 50,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 11,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 12,
            name: 'Навигационная система Pascal',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 50,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 13,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 14,
            name: 'Навигационная система Pascal',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 50,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 15,
            name: 'Навигационная система Pascal',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 50,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 16,
            name: 'Навигационная система Pedro',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 77,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '../img/cart.png',
        },
        {
            id: 17,
            name: 'Настольная игра “На 4-х ногах”',
            category: 'Настольные игры',
            dimension: 'шт',
            quantity: 12,
            price: 14,

            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        },
        {
            id: 18,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        },
        {
            id: 19,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        },
        {
            id: 20,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        },
        {
            id: 21,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        },
        {
            id: 22,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        },
        {
            id: 23,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        },
        {
            id: 24,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        },
        {
            id: 25,
            name: 'Навигационная система Soundmax',
            category: 'Техника для дома',
            dimension: 'шт',
            quantity: 5,
            price: 100,
            description: '',
            isDiscount: false,
            discount: 0,
            img: '',
        }
    ]);

    if (localStorage.getItem('products')) {
        products.value = JSON.parse(localStorage.getItem('products')!);
    } else {
        localStorage.setItem('products', JSON.stringify(products.value))
    }

    const productsVisionPage = ref<number>(1);
    const productCountToShow = ref<ProductCountInPageType>(10);


    const productIndexThatStartShow = computed(() => {
        return productsVisionPage.value * productCountToShow.value - productCountToShow.value;
    });

    const productIndexThatEndShow = computed(() => {
        let productIndexThatEndShowT = productsVisionPage.value * productCountToShow.value

        return productIndexThatEndShowT < productsLength.value ? productIndexThatEndShowT : productsLength.value
    });

    const productToShow = computed(() => {
        return products.value.slice(productIndexThatStartShow.value, productIndexThatEndShow.value)
    })

    const productsLength = computed(() => {
        return products.value.length
    })
    const totalProductPrice = computed(()=>{
        let totalPrice = 0;
        products.value.forEach((i)=>{
            totalPrice += (i.price - i.discount) * i.quantity;
        })
        return totalPrice;
    })

    function productsVisionPageUp() {
        if ((productsVisionPage.value + 1) * productCountToShow.value < productsLength.value + productCountToShow.value){
            productsVisionPage.value += 1;
        }
    }

    function productsVisionPageDown() {
        if (productsVisionPage.value > 1) {
            productsVisionPage.value -= 1;
        }
    }

    function setProductCountToShow(payload: ProductCountInPageType) {
        productCountToShow.value = payload;
    }

    function setProductsVisionPage(payload: number) {
        if (payload > products.value.length / productCountToShow.value) {
            return
        }

        productsVisionPage.value = payload;
    }

    function getProductById(id: number | string) {
        return products.value.find((i) => {
            return i.id === id;
        })
    }

    function setProducts(payload: IProduct[]) {
        products.value = payload;
        localStorage.setItem('products', JSON.stringify(products.value));
    }

    function deleteProductById(id: number | string) {
        const toDeleteProduct = products.value.find((i) => {
            return i.id === id
        });

        if (toDeleteProduct) {
            setProducts(products.value.filter((i) => {
                console.log(i.id, toDeleteProduct.id, i.id !== toDeleteProduct.id)
                return i.id !== toDeleteProduct.id;
            }))
        }
    }

    return {
        productToShow,
        productIndexThatStartShow,
        productIndexThatEndShow,
        productsLength,
        productCountToShow,
        deleteProductById,
        productsVisionPageUp,
        productsVisionPageDown,
        totalProductPrice
    }
})
