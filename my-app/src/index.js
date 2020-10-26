import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';

class ProfilInfos extends React.Component
{
  render()
  {
      return (    
              <table>
                <td>
                  <tr><h2>Prenom: {this.props.value.prenom} Nom: {this.props.value.nom}</h2></tr>              
                  <tr><p>Date de naissance: {this.props.value.dateNaissance}</p></tr>
                </td>
              </table> 
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
        profils.push(<button type="button" class="" onClick={() => this.handleClick(i)} >{this.state.profils[i].prenom}</button>)
      }
      return profils;
  }

  render()
  {
      return (            
          <div class="text-center">
                  {this.switche()}  
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
                publication : [{contenu : "Le pâté en croûte (ou pâté-croûte en champenois) est une charcuterie pâtissière composée d'un pâté cuit dans une pâte feuilletée ou dans une pâte brisée. En entrée froide, il comporte de la gelée à son sommet et se cuisine dans une terrine. En matière de législation, pour le vendre en boutique, un pâté doit contenir au moins la moitié de la viande qui donne l'appellation au pâté.",like : 0}]
              },
              {
                photo : "",
                prenom: "martine",
                nom : "Enitram",
                dateNaissance : "02/04/1997",
                publication : [{contenu : "Les appellations d'origines mont d'Or et Vacherin Mont-d'Or désignent deux fromages au lait de vache à pâte molle à croûte lavée élaborés dans une zone située au cœur du massif du Jura. Le fromage produit en France, dans une partie du département du Doubs, est appelé « mont d'Or » ou « vacherin du Haut-Doubs », tandis que celui produit en Suisse dans le canton de Vaud est appelé « Vacherin Mont-d'Or » ou simplement « Vacherin ». Bien que les deux fromages soient très similaires1, il existe quelques différences, les plus importantes étant d'une part l'utilisation exclusive de lait cru en France et, depuis 2003, de lait thermisé en Suisse et d'autre part un affinage obligatoirement sur planche d’épicéa, de 17 à 25 jours en Suisse pour 12 jours en France.",like : 0}]
              },
              {
                photo : "",
                prenom: "camille",
                nom : "Ellimac",
                dateNaissance : "23/06/1998",
                publication : [{contenu : "Le tiramisu (de l'italien « tiramisù » [ˌtiramiˈsu], du vénitien « tiramesù », littéralement « tire-moi vers le haut », « remonte-moi le moral », « redonne-moi des forces ») est une pâtisserie et un dessert traditionnel de la cuisine italienne. Mais la réelle origine du tiramisu remonte à bien plus loin. En effet la famille Speciale originaire de france au XVIIe siècle émigre alors vers l'italie et alliera les saveurs de la crème renversée et du flan avec la culture du Nord de l'italie pour créer le tiramisu.",like : 0}]
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