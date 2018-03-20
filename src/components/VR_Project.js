import React, { Component } from 'react';

import { View, Text, Pano, AppRegistry, asset, StyleSheet } from 'react-vr';

import WeatherCard from './vr/components/WeatherCard';
import Places from './vr/components/Places';



const api_key ='056833a69b0a74334507e1ba1ab23b0d';


 class VR_Project extends Component {
  constructor() {
    super();

    this.state = {
        placeObject:{ 
        showMenu: false,
      place: 'starry-sky.jpg'
        },
         weatherObject: {
        name: '',
        main: {
          temp: 0
        },
        weather: [
          {description: ''}
        ],
        wind: {
          deg: 1,
          speed: 1
        }
      }
    }
      
  }
     componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=${api_key}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({weatherObject: json}));
  }

  

  render() {
    return (
      <View>
        <Places placeObject={this.state.placeObject}/>
        <WeatherCard weatherObject={this.state.weatherObject} />

         </View>
        )
  }
}
export default VR_Project;
AppRegistry.registerComponent('VR_Project', () => VR_Project);