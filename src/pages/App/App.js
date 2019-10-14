import React, { Component } from 'react';
import { Route, Switch, Link, Router, withRouter } from 'react-router-dom';
import '../../pages/App/App.css';
import { getNews } from '../../services/news-api';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import HomeView from '../../components/HomeView/HomeView';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ArticlePage from '../ArticlePage/ArticlePage';
import { unlink } from 'fs';
import Marquee3k from 'marquee3000';

Marquee3k.init()

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      news: [],
      desc: '',
      fromHome: false
    };
  }

  getNews = (idx) => {
    return this.state.news[idx];
  }

  async componentDidMount() {
    window.scrollTo(0,0)
    const news = await getNews();
    let desc = await news.articles.map(n => {
      return n.description
    }).join(' ')
    this.setState({ news: news.articles, desc, fromHome:true});
    console.log(this.state.news);
    console.log(this.state.desc);
    console.log("Hitiing")
  }


  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  };

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  };


  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
          news={this.state.news}
          desc={this.state.desc}
        />
        <Switch onUpdate={() => window.scrollTo(0, 0)}>

        <Route exact path='/' render={() => 

            <section>
            <Route path='/'
            render={(props) => 

              <Link
                  to={`/article/12`}
                >
              <HomeView
                {...props}
                news={this.state.news}
                index={this.state.news.map((news) => 
                      {return(
                        news
                      )}
                        )}
        
              />
              </Link>
            
              

            }/>
            <div className='ArticlesContainer'>
              {this.state.news.map((news, idx) => 
              // <>

              <div className='articles' key={idx}>
                <Link
                  to={`/article/${idx}`}
                >

                <div className='news-square'>
                  <div className='img-container'>
                    <img src={news.urlToImage} />
                  </div>
                  <div className='title'>
                   <p>{news.title}</p>
                  </div>
                </div>

                </Link>

                </div>


                // </>
                
              )}
              </div>
              
            </section>

            
          }/>

          <>

        <Route exact path='/signup' render={({ history }) => 
         
         
         <SignupPage

         history={history}
         handleSignupOrLogin={this.handleSignupOrLogin}

         />
          

        }/>
        <Route exact path='/login' render={({ history }) => 
         
         
         <LoginPage

         history={history}
         handleSignupOrLogin={this.handleSignupOrLogin}

         />
        }/>

         <Route  path='/article/:id'
         render={(props) => 

          <ArticlePage
            {...props}
            fromHome={this.state.fromHome}
            user={this.state.user}
            news={this.state.news}
            index={this.state.news.map((news) => 
                  {return(
                    news
                  )}
                    )}
    
          />
        
          

        }/>

</>

        </Switch>
      </div>
    );
  }
}



export default App;
