import merge from 'lodash.merge'
import { OpenFinApplicationConfiguration } from '../types'
import base from './base'

/* eslint-disable @typescript-eslint/camelcase */
export default (env: string): OpenFinApplicationConfiguration => {
  const baseConfig = base(env)
  const name = `Reactive Ecosystem Launcher${env !== 'demo' ? ` (${env.toUpperCase()})` : ''}`

  return merge(baseConfig, {
    startup_app: {
      name,
      url: `https://web-${env}.adaptivecluster.com/launcher`,
      uuid: `reactive-launcher-${env}`,
      defaultWidth: 400,
      defaultHeight: 120,
      defaultTop: 160,
      defaultLeft: 30,
      transparent: true,
      permissions: {
        System: {
          launchExternalProcess: true,
        },
      },
      saveWindowState: false,
      resizable: false,
      shadow: true,
      backgroundColor: '#444C5F',
      alwaysOnTop: true,
      icon: `https://web-${env}.adaptivecluster.com/static/media/icon.ico`,
      applicationIcon: `https://web-${env}.adaptivecluster.com/static/media/adaptive-mark-large.png`,
      contextMenu: true,
      accelerator: {
        devtools: true,
        reload: true,
        reloadIgnoreCache: true,
        zoom: true,
      },
    },
    runtime: {
      arguments: '--remote-debugging-port=9222 --disable-legacy-window',
      version: '13.76.44.21',
    },
    shortcut: {
      company: 'Adaptive Consulting',
      icon: `https://web-${env}.adaptivecluster.com/static/media/icon.ico`,
      name,
    },
    appAssets: [
      {
        src: `https://web-${env}.adaptivecluster.com/plugin/add-in.zip`,
        alias: 'excel-api-addin',
        version: '2.0.0',
      },
      {
        src: `https://web-${env}.adaptivecluster.com/plugin/LimitChecker.zip`,
        alias: 'LimitChecker',
        version: '1.6.0',
        target: 'LimitChecker.application',
      },
    ],
  })
}
