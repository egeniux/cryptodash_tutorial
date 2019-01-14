import HighchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHightcharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';

ReactHightcharts.Highcharts.setOptions(HighchartsTheme);


export default function () {
  return (
      <AppContext.Consumer>
          {({}) => 
          <Tile>
              <ReactHightcharts config={HighchartsConfig()}/>
          </Tile>
          }
      </AppContext.Consumer>
  )
}



