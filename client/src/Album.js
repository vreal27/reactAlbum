import React,  { Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './Album.css'


class Album extends Component {
    state = {
        album: {},
        pics: [],
        back: []
    }

    componentDidMount() {
        const id = this.props.match.params.id
        Axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
            this.setState({
                album: resp.data,
                pics: resp.data.images
            })
            
        })

        Axios.get('http://localhost:3001/albums').then(resp => {
            this.setState({
                back: resp.data
            })
        })


        
    }

    componentWillReceiveProps(newProps){
        if(this.props.match.params.id !== newProps.match.params.id ){
            const id = newProps.match.params.id
            Axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
                this.setState({
                    album: resp.data,
                    pics: resp.data.images
                })
            })

        }
        
    }
    render(){
        return (
            <div className="albumpage">
                <h1>{this.state.album.name}</h1>
                <Link to={'/'}><h2>Back to Albums page</h2></Link> 
                <div className="albumcontainer">
                    
                    <ul className="albumlinks">
                        {this.state.back.map(b => (
                         <Link to ={`/Album/${b.id}`}><li>{b.name}</li></Link>
                        ))}
                    </ul>
                    
                    <div className="piclist">
                        {this.state.pics.map(a => (
                                <Link to={`/Picture/${a.id}`}>
                                    <div className="pics">
                                        <img src={a.url}/>
                                        <p>{a.name}</p>
                                    </div>
                                </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Album