import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import type {IProduct} from "@/interfaces/IProduct";

type ProductCountInPageType = 1|2|3|4|5|6|7|8|9|10;

export const useProductTableStore = defineStore('productTable', () => {
    const products = ref<IProduct[]>([
        {
            id: '246016548',
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
            id: '244516548',
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
            id: '246216548',
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
            id: '244316548',
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
            id: '247216548',
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
            id: '234316548',
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
            id: '233316548',
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
            id: '246016248',
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
            id: '246011248',
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
            id: '245316248',
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
            id: '246165648',
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
            id: '24612248',
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
            id: '246016532',
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
            id: '246016212',
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
            id: '246016248',
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
            id: '246416548',
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
            id: '937295527',
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
            id: '246016549',
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
            id: '246016550',
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
            id: '246016551',
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
            id: '246016552',
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
            id: '246016553',
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
            id: '246016554',
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
            id: '246016555',
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
            id: '246016556',
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
