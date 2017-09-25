import pubSubProvider from './pubsub.provider';

let WsPubSub =   angular
  .module('ws.pubsub', [])
  .provider('PubSubProvider', pubSubProvider)
  .name;


export default WsPubSub;
