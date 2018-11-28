import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) =>{
    const list = ({allArtist}) =>{
       if(allArtist){
        return allArtist.map((item) =>{
            const style = {
                background:`url('/images/covers/${item.cover}.jpg') 
                no-repeat`
            }
            return(
                <Link className="artist_item" key={item} style={style} to={`/artist/${item.id}`}>
                    <div>{item.name}</div>
                </Link>
            )
        })
       }
    }

    return(
        <div className="artists_list">
            <h4>Browse the artist</h4>
            {list(props)}
        </div>
    )
}
export default ArtistList;