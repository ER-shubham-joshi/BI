import React from "react";
import Tile from './HomeComponents/Tile';
import TileData from './JSON/TileData.json';

function Home() {

    return (
        <div>
            {TileData.map((tileData) => {
                return <div><span><Tile data={tileData} /></span></div>
            })}
        </div>
    );
}


export default Home;
