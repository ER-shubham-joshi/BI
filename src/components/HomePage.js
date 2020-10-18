import React from "react";
import Tile from './HomeComponents/Tile';
import TileData from './JSON/TileData.json';

function Home() {

    return (
        <div className="row">
            {TileData.map((tileData) => {
                return <div><Tile data={tileData} /></div>
            })}
        </div>
    );
}

export default Home;
