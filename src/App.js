import React, {PureComponent} from 'react';
import Axios from 'axios';
import map from 'lodash/map';

const API = 'http://localhost:5000/api/';

const entities = ['countries','cars','quotes','instruments'];

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      entities,
      data: [],
      currentView: 0
    }
  }

  async endPoint(entity, view){
    console.log(entity,'entidad');
    const {data} = await Axios.get(`${API}${entity}`);
    this.setState(() => ({data, currentView: view}));
  }


  render() {
    const {data, currentView} = this.state;
    return (
     <div>
       <h3>Tabla de datos </h3>
       {map(entities, (entity, index) => (
        <button onClick={() => this.endPoint(entity, index)}> BOTONEAME {entity}</button>
       ))}
       
       <hr/>
        <table>
          {currentView === 0 && map(data, country => (
            <tr key={country.id}>
              <td>
                {country.name}
              </td>
              <td>
                {country.code}
              </td>
            </tr>
          ))}
          {currentView === 1 && map(data, car => (
            <tr key={car.id}>
              <td>
                {car.brand}
              </td>
              <td>
                {car.model}
              </td>
              <td>
                {car.year}
              </td>
            </tr>
          ))}
          {currentView === 2 && map(data, quote => (
            <tr key={quote.id}>
              <td>
                {quote.text}
              </td>
              <td>
                {quote.author}
              </td>
            </tr>
          ))}
          {currentView === 3 && map(data, instrument => (
            <tr key={instrument.id}>
              <td>
                {instrument.hexcode}
              </td>
              <td>
                {instrument.family}
              </td>
              <td>
                {instrument.instrument}
              </td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default App;
