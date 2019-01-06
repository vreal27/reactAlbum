import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './Albums.css'

class Albums extends Component {
    state = {
        albumInfo: []
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/albums').then(resp => {
            this.setState({
                albumInfo: resp.data
            })
        })
    }

    render() {
        return (
            <div className="Albums">
                <h1>My Albums</h1>
                <div className="albumbox">
                    {this.state.albumInfo.map(a => (
                        <Link to ={`/album/${a.id}`}>
                            <div className = "albumselect">
                                <img src={a.coverPhoto}/>
                                <p>{a.name}</p>
                            </div>
                        </Link>
                        
                    ))}
                 </div>
            </div>
        )
    }
}

export default Albums
