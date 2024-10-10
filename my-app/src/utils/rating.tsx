import { useEffect, useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { setRate } from "../features/products/products.slices"

interface IProps {
    id: number
    rate: number
}
export const Rating: React.FC<IProps> = ({ id, rate }) => {
    const filled = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-256.png'
    const empty = 'https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-256.png'

    const [rating, setRating] = useState<number[]>([0, 0, 0, 0, 0])

    const dispatch = useAppDispatch()
    const loadDefault = () => {
        const temp = [...rating]
        temp.fill(1, 0, rate)
        temp.fill(0, rate)
        setRating(temp)
    }

    const onHover = (value: number) => {
        const temp = [...rating]
        temp.fill(1, 0, value)
        temp.fill(0, value)
        setRating(temp)

    }

    useEffect(() => {
        loadDefault()
    }, [])

    return <>
        {
            rating.map((star, i) =>
                <img
                    key={i}
                    style={{ width: 30 }}
                    src={star === 0 ? empty : filled}
                    onMouseLeave={loadDefault}
                    onMouseEnter={() => onHover(i + 1)}
                    onClick={() => dispatch(setRate({ id, rate: i + 1 }))}
                />
            )
        }

    </>
}