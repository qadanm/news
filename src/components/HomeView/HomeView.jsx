import React from 'react';
import { Link } from 'react-router-dom';
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

{var currentArticle = this.props.index[12]}
    return(
        <div className='ContainerContainerContainer'>
    {currentArticle ?
        

        <div className='HomeViewContainer' style={{backgroundImage: "url(" + currentArticle.urlToImage + ")"}}>


            <div className="TextContainer">
                <p>{currentArticle.title}</p>
            </div>

        </div>

:
console.log('nothing')

}

        </div>
    )
  }

}

export default HomeView;


{/* <iframe src='http://www.youtube.com/embed/IFAcqaNzNSc?autoplay=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&fs=0&color=white&controls=0&disablekb=1' width="560" height="315" frameborder="0"></iframe>         */}




// return (
//     <div
//       className="video"
//       style={{
//         position: "relative",
//         paddingBottom: "56.25%" /* 16:9 */,
//         paddingTop: 25,
//         height: 0
//       }}
//     >
//       <iframe
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%"
//         }}
//         src={`http://www.youtube.com/embed/IFAcqaNzNSc`}
//         frameBorder="0"
//       />
//     </div>
//   );