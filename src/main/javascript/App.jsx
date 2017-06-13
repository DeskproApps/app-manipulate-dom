import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component
{
  static propTypes = { dpapp: React.PropTypes.object.isRequired };

  componentDidMount() {
    const yourMarkupStrings = [
      `<style> #app_manipulate_dom { color: red; height:500px; z-index: 2000; position: absolute; width: 500px;} </style>`,
      `<div id="app_manipulate_dom">Hello World!</div>`
    ];
    const { dpapp } = this.props;
    dpapp.deskproWindow.insertMarkup(yourMarkupStrings);
  }

  shouldComponentUpdate() { return false; }

  render() {
    return null;
  }
}
