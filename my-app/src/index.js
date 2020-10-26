import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';

class ProfilInfos extends React.Component
{
  render()
  {
      return (            
          <div class="container">
            <div class="row">
              <h2>{this.props.value.prenom} {this.props.value.nom}</h2>
              <p>{this.props.value.dateNaissance}</p>
              </div>
          </div>

          
      );
  }
}

class Post extends React.Component
{

  handleClick(i)
  {
      this.props.value[i].like = this.props.value[i].like +1 ;
  }

  render()
  {
      const profils = [];
      for (let i = 0; i < this.props.value.length; i++) {
        profils.push(<p>{this.props.value[i].contenu} </p>) 
        profils.push(<button type="button" onClick={() => this.handleClick(i)}> C'est super !</button>)
        profils.push(<p>{this.props.value[i].like}</p>)

      }
      return (            
          <div class="">
              {profils}
          </div>

          
      );
  }
}

class Main extends React.Component
{
  switche()
  {
      const profils = [];
      for (let i = 0; i < this.state.profils.length; i++) {
        profils.push(<button type="button" onClick={() => this.handleClick(i)} >{this.state.profils[i].prenom}</button>)
      }
      return profils;
  }

  render()
  {
      return (            
          <div class="container">
              <div class="row">
                  {this.switche()}  
              </div>
          <ProfilInfos value={this.state.profils[this.state.numProfil]} /> 
          <Post value={this.state.profils[this.state.numProfil].publication} />

          </div>
      );
  }

  constructor(props)
  {
      super(props);
      this.state = {
          profils : 
          [
              {
                photo : "img.jpg",
                prenom: "bob",
                nom : "Bob",
                dateNaissance : "15/12/1999",
                publication : [{contenu : "Test 1",like : 0},{contenu : "Test 1.1",like : 0},{contenu : "test 1.2",like : 0}]
              },
              {
                photo : "",
                prenom: "martine",
                nom : "Enitram",
                dateNaissance : "02/04/1997",
                publication : [{contenu : "Test 2",like : 0},{contenu : "Test 2.1",like : 0},{contenu : "Test 2.2",like : 0}]
              },
              {
                photo : "",
                prenom: "camille",
                nom : "Ellimac",
                dateNaissance : "23/06/1998",
                publication : [{contenu : "Test 3",like : 0},{contenu : "Test 3.1",like : 0},{contenu : "Test 3.2",like : 0}]
              }
          ],
          numProfil : 0,
      };
  }
  
  handleClick(i) 
  {
      this.setState({
          numProfil: i,
      });
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);