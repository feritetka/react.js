import React from 'react'
import Apples, {Bananas1, Orange } from './components/01-my-house/my-house'
import Jsx1 from './components/02-JS/01-jsx';
import Jsx2 from './components/02-JS/02-jsx';
import Jsx3 from './components/02-JS/03-jsx';
import Jsx4 from './components/02-JS/04-jsx';
import InlineStyling from './components/03-styles/01-inline-styling';
import InternalStyling from './components/03-styles/02-internal-styling';
import ExternalStling from './components/03-styles/03-external-styling';
import ExternalModuleStyling from './components/03-styles/04-external-module-styling';

export default function App() {
  return (
    <div>
      <Apples />
      <br />
      <Bananas1 />
      <br />
      <Orange/>
      <br />
      <Jsx1 />
      <br />
      <Jsx2 />
      <br />
      <Jsx3 />
      <br />
      <Jsx4 />
      <br />
      <InlineStyling />
      <br />
      <InternalStyling />
      <br />
      <ExternalStling />
      <br />
      <ExternalModuleStyling />
      <br />
      <br />
    </div>
  )
}
