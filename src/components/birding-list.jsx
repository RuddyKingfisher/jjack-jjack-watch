import React from 'react';
import { observer } from 'mobx-react';

export const BirdingList = observer((props) => {

    console.dir(props);
    const renderBirdingItem = () => {
        const list = [];
        props.store.birdingList.forEach(element => {
            list.push(<span style={{ backgroundColor: 'orange' }}>{element.species}</span>);
        });
        return list;
    };

    return (
        <div>
            <div style={{ width: '300px', height: '300px', backgroundColor: 'red', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* {renderBirdingItem()} */}
            </div>
            <button onClick={props.store.addBird.bind(props.store)}>Add RuddyKingfisher</button>
            <div>Number Of Recourds : {props.store.numberOfRecords}</div>
        </div>);
});