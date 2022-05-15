import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import data from '../../Utils/data';
import Image from 'next/image';

export default function ProductScreen() {
    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find(x => x.slug === slug);
    if (!product) {
        return <p>Product not found</p>
    }

    return (
        <div className="ProductScreen">
            <div>
                <Link href='/'>Back To Products</Link>
            </div>

            <div className="grid md:grid-cols-4 md:gap-3">
                <div className='md:col-span-2'>
                    <Image 
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        layout="responsive"
                    />
                </div>
                <div>
                    <ul>
                        <li><h2 className="text-lg">{product.name}</h2></li>
                        <li>category: {product.category}</li>
                        <li>Brand: {product.brand}</li>
                        <li>{product.rating} of {product.numReviews} reviews</li>
                        <li>Description: {product.description}</li>
                    </ul>
                </div>
                <div className='card-price'>
                    <div className='flex justify-between mb-2 p-5'>
                        <div>price</div>
                        <div>${product.price}</div>
                    </div>
                    <div className='flex justify-between mb-2 p-5'>
                        <div>status</div>
                        <div>{product.countInStock >0 ? 'In Stock' : 'Unavailabe' }</div>
                    </div>
                    {/* <button className='add-button'>Add To Cart</button> */}
                </div>

            </div>
        </div>
    )
}
