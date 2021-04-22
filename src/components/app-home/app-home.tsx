import { Component, h } from '@stencil/core';
import AppTunnel from '../data/tunnel';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    const appTunnelState = {
      test: 'hello',
    };
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <app-home-tunnel></app-home-tunnel>
        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
        <AppTunnel.Provider state={appTunnelState}></AppTunnel.Provider>
      </div>
    );
  }
}
