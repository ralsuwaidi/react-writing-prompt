import orderAtom from "../../atoms/ordering"
import { useRecoilState } from "recoil";

export default function Heading(props) {
    const [order, setOrder] = useRecoilState(orderAtom);

    return (
        <div className="lg:flex lg:items-center lg:justify-between mt-6">
            <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{order.charAt(0).toUpperCase() + order.slice(1)}</h2>
            </div>
        </div>

    )
}