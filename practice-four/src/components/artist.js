import React, { Component } from 'react';

import Header from '../components/header';
import AlbumList from '../components/albumList';
const REQ_URL = 'http://localhost:3004/artists';
class Artist extends Component{
    constructor(props){
        super(props);
        this.state={
            artistInfo:''
        }
    }
    componentDidMount(){
        //console.log(this.props.match.params.artistid)
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                artistInfo:json
            })
            //console.log(this.state.artistInfo)
        })
    }
    render(){
        return(
            <div>
                <Header />
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={{background:`url('/images/covers/${this.state.artistInfo.cover}.jpg')`}}></span>
                    </div>
                    <h3>{this.state.artistInfo.name}</h3>
                    <div className="bio">{this.state.artistInfo.bio}</div>
                </div>
                <AlbumList albumList={this.state.artistInfo.albums}/>
            </div>
        )
    }
}
export default Artist;