import React from "react";
import MapIcon from "../../../assets/icons/map.svg";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import "./Geography.css";

function Geography({ data }) {
  const defaultState = {
    center: [57.712448, 73.714477],
    zoom: 4,
  };
  return (
    <>
      <h2 className="geography__header">{data.title}</h2>
      <div className="geography__box">
        <div className="geography__img-box">
          <YMaps>
            <Map defaultState={defaultState} width="100%" height="474px">
              {data.geography.map((item) => {
                let coordinates = item.coordinates.split(",").map((i) => +i);
                return <Placemark key={item.id} geometry={coordinates} />;
              })}
            </Map>
          </YMaps>
        </div>
      </div>
    </>
  );
}

export default Geography;
