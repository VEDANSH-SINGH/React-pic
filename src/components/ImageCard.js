import React from 'react';
class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0};
        this.ImageRef=React.createRef();
    }
    componentDidMount(){
        this.ImageRef.current.addEventListener('load',this.setSpan);
    }
    setSpan= () =>{
        const Height=this.ImageRef.current.clientHeight;
        const span=Math.ceil(Height/10);
        this.setState({spans:span})
    }
    render(){
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
            <img ref={this.ImageRef} src={this.props.src} alt={this.props.alt} >
            </img>
            </div>
        )
    }
}
export default ImageCard;