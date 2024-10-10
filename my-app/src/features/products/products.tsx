import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAll } from "./products.slices"
import styles from "./products.module.css"
import { Rating } from "../../utils/rating"

export const Products = () => {
    const items = useAppSelector(state => state.items)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])
    return <>
        <h3>Products {items.length}</h3>
        <div className={styles.list}>
            {
                items.map(product =>
                    <div key={product.id}>
                        <img
                            src={product.picture}
                            alt=''
                        />
                        <p>{product.title}</p>
                        <p>{product.price}USD</p>
                        <Rating
                            id={product.id}
                            rate={product.rate}
                        />
                    </div>
                )
            }
        </div>
    </>
}