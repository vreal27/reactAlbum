import React,  { Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './Picture.css'
import 'font-awesome/css/font-awesome.css'


class Image extends Component {
    state = {
        header: {},
        image: []
    }

    componentDidMount() {
        const id = this.props.match.params.id
        Axios.get(`http://localhost:3001/images/${id}`).then(resp => {
            this.setState({
                header: resp.data
            }) 
        })
    }



  

    render(){
        return (
            <div className="picpage">
                <h1>{this.state.header.name}</h1>

                <div className="picbox">

                <div className= "arrowleft"><i className="fa fa-angle-left"></i></div>
                
                   <img src={this.state.header.url}/>
                    <div className="arrowright"><i className="fa fa-angle-right"></i></div>
                </div>
            </div>
        )
    }

}

export default Image