import React, { useContext } from "react";
import { YMaps, Map, SearchControl } from '@pbe/react-yandex-maps';
import { DataContext } from "../../..";

function Area() {
    const data = useContext(DataContext).area

    return <section className="area">
        <div className="area__content">
            <h2 className="area__title">{data?.title}</h2>
            <div className="area__map-wrapper">
                <YMaps>
                    <Map defaultState={{ center: [50, 60], zoom: 3}} height="100%" width="100%" className="area__map" >
                    </Map>
                </YMaps>
            </div>
        </div>
    </section>
}

export default Area;

