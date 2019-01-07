import React,  { Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './Picture.css'
import 'font-awesome/css/font-awesome.css'


class Image extends Component {
    state = {
        header: {},
        image: [],
        nextPic: '',
        prevPic: '',
        albumId: ''
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        Axios.get(`http://localhost:3001/images/${id}`).then(resp => {
            this.setState({
                header: resp.data,
                nextPic: Number(resp.data.id) +1,
                prevPic: Number(resp.data.id) -1,
                albumId: resp.data.albumId
            }) 
        })
    }

    componentWillReceiveProps(newProps){
       
            const id = this.props.match.params.id 
        Axios.get(`http://localhost:3001/images/${id}`).then(resp => {
            this.setState({
                header: resp.data,
                nextPic: Number(resp.data.id) +1,
                prevPic: Number(resp.data.id) -1
            }) 
        })
        
    }



  

    render(){
        return (
            <div className="picpage">
               
                <h1>{this.state.header.name}</h1>
                <Link to={'/'}><h2>Back to Albums page</h2></Link> 
                <div className="picbox">
                    <Link to={'/Picture/' + this.state.prevPic}> <div className= "arrowleft"><i className="fa fa-angle-left"></i></div></Link>
                    <img src={this.state.header.url}/>
                    <Link to={'/Picture/' + this.state.nextPic}> <div className= "arrowright"><i className="fa fa-angle-right"></i></div></Link>
                </div>
            </div>
        )
    }

}

export default Image