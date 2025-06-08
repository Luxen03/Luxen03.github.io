import './Elements.css'
import { useInView } from 'react-intersection-observer'

interface NavParam {
    items: string[][]
}
interface PanelParam {
    items: [React.ReactElement, string][]
}
interface NumberParam {
    val: number
}

export function Navigation({ items }: NavParam) {
    return (
        <nav>
            <ul className='rainbow-border'>
                {items.map(([label, link]) =>
                    <li className='fade_in'>
                        <div><a href={link}>{label}</a></div>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export function PanelList({ items }: PanelParam) {
    const [ref, inView] = useInView({ threshold: 1 })
    return (
        <ul className='rainbow-border' ref={ref}>
            {items.map(([html, link]) =>
                <li className={inView ? 'show' : 'hide'}>
                    <div className='panel'><a href={link}>{html}</a></div>
                </li>
            )}
        </ul>
    )
}

export function RatioBar({ val }: NumberParam) {
    const [ref, inView] = useInView({ threshold: 1 })
    return (
        <div className='ratio-shell' ref={ref}>
            <div className='ratio-kernel' style={{ width: `${inView ? val : 0}%` }}></div>
        </div>
    )
}

export function Divider() {
    return <div className='divider'></div>
}

export default Navigation