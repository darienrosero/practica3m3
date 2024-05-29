import React from 'react'

const Butons = ({ setPorcentaje, porcentaje }) => {
    const butonlist = [5,
        10,
        15,
        25,
        50]
    return (
        <ul>
            {
                butonlist.map(buton =>
                    <li key={buton} id={`percentage-${buton}`}>
                        <button type="button" 
                        name='porcentage' 
                        className={`percentage-button ${porcentaje === buton && 'active'}`} 
                        value={buton} onClick={setPorcentaje} > 
                        {buton} %</button>
                    </li>
                )
            }

            <li>
                <input type="number"
                    name='porcentage'
                    placeholder="Custom"
                    id="custom-percentage-button"
                    className="percentage-button"
                    onChange={setPorcentaje} />
            </li>
        </ul>
    )
}

export default Butons
