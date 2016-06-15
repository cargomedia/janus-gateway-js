var Promise = require('bluebird');
var webrtc = require('webrtc-adapter');
var Client = require('./client');
var JanusError = require('./error');
var WebsocketConnection = require('./websocket-connection');
var Transaction = require('./transaction');
var Connection = require('./connection');
var Session = require('./session');
var Plugin = require('./plugin');
var MediaPlugin = require('./webrtc/media-plugin');
var AudiobridgePlugin = require('./webrtc/plugin/audiobridge-plugin');
var StreamingPlugin = require('./webrtc/plugin/streaming-plugin');
var RtpBroadcastPlugin = require('./webrtc/plugin/rtp-broadcast-plugin');

window.Janus = {
  webrtc: webrtc,
  Promise: Promise,
  Client: Client,
  Error: JanusError,
  Connection: Connection,
  Session: Session,
  Plugin: Plugin,
  MediaPlugin: MediaPlugin,
  AudiobridgePlugin: AudiobridgePlugin,
  StreamingPlugin: StreamingPlugin,
  RtpBroadcastPlugin: RtpBroadcastPlugin,
  WebsocketConnection: WebsocketConnection,
  Transaction: Transaction
};
