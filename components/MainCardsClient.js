'use client'

import "../app/globals.css";
import Card from "./Card";

function MainCardsClient({result}) {
    {
        return (
            <div className="darkCardDisplayArea">
                {
                    result.map((note) => (
                        <Card key={note.id} id={note.id} name={note.name} contents={note.contents}/>
                    ))
                }
            </div>
        )
    }

}


export default MainCardsClient;