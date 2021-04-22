import { Component, h, Prop } from '@stencil/core';
import AppTunnel from '../data/tunnel';

@Component({
  tag: 'app-home-tunnel',
  styleUrl: 'app-home-tunnel.css',
})
export class AppHomeTunnel {
  @Prop() test;

  render() {
    return (
      <div>
        <p>{`Hello prop : ${this.test}`}</p>
      </div>
    );
  }
}
AppTunnel.injectProps(AppHomeTunnel, ['test']);
