import "./Main.css"
 import {Card} from "./Card/Card"


export const Main = () => {
    return (
        <section className="main-container">
            <div className="filter-container">
                <li>baba</li>
                <li>baba</li>
            </div>
            <div className="page-container">
                <div className="main-header">

                </div>
                <div className="card-grid">
                {products.map((product, i) => <Card {...product} key={i}/>)}
                </div>
            </div>
        </section>

    )
}