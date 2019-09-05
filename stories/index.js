import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Onfido from 'onfido-sdk-ui';
const onfidoContainerId = 'onfido-mount'

export default class Index extends React.Component {

  componentDidMount() {
    Onfido.init({
        useModal: false,
        token: "token",
        onComplete: function() {
          // callback for when everything is complete
          console.log("Everything is complete");
        },
        steps: [
          {
            type:'welcome',
            options:{
              title:'Open your new bank account'
            }
          },
          'document',
          'face',
          'complete'
        ]
      })
  }

  render () {
    return (
      <div>
        <p>Hello, Onfido Storybook!</p>
        <div id={onfidoContainerId} />
      </div>
    )
  }
}
