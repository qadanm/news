import React from 'react';
import './HomeView.css';


class HomeView extends React.Component {
    state={
      news: 'hello'
    }


  componentDidMount(){
    this.setState({
      news: this.props.index
    })
  }

  render(){

  var currentArticle = this.props.index[12]
    return(
        <div className='ContainerContainerContainer'>
    {currentArticle ?
        

        <div className='HomeViewContainer' style={{backgroundImage: "url(" + currentArticle.urlToImage + ")"}}>


            <div className="TextContainer">
                <p>{currentArticle.title}</p>
            </div>

        </div>

:
<div>
<h1 style={{textAlign: "center", color: "white", fontSize: "2em"}}>loading...</h1>
</div>

}

        </div>
    )
  }

}

export default HomeView;