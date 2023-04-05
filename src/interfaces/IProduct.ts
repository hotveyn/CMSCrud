export interface IProduct{
    id: number | string,
    name: string,
    category: string,
    dimension: 'шт' | 'дст',
    quantity: number,
    price: number,
    description: string,
    isDiscount: boolean
    discount: number,
    img: string
}