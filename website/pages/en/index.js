/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const styled = require('styled-components').default;
const { Button, Alert, Provider } = require('rendition');
const {
  Button: ButtonSC,
  Alert: AlertSC,
  ThemeProvider: ProviderSC,
} = require('@smooth-ui/core-sc');

const { theme } = require('@smooth-ui/core-sc');

const Spacing = styled.div`
  margin: 24px 0;
`;

const RenditionComponents = () => (
  <Provider>
    <div>
      <h1>Rendition Components</h1>
      <Button>Rendition default button</Button>
      <Spacing />
      <Button danger>Rendition danger Button</Button>
      <Spacing />
      <Alert>Rendition Alert</Alert>
      <div>
        <h4>See how is Button being imported</h4>
        <code>{JSON.stringify(Button)}</code>
      </div>
    </div>
  </Provider>
);

const SmoothUICompoments = () => (
  <ProviderSC theme={theme}>
    <div>
      <h1>Smooth UI Components</h1>
      <ButtonSC>Smooth UI default button</ButtonSC>
      <Spacing />
      <ButtonSC variant="danger">Smooth UI danger Button</ButtonSC>
      <Spacing />
      <AlertSC>Smooth UI Alert</AlertSC>
    </div>
  </ProviderSC>
);

const Index = () => (
  <div>
    <RenditionComponents />
    <br />
    <SmoothUICompoments />
  </div>
);

module.exports = Index;
