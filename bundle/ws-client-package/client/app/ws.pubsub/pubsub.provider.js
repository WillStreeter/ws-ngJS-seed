class PubSubProvider {
          constructor() {
            'ngInject';

            this.maxHistory = 10;

            this.defaultTypes = {
                'apiRemoteUserService':'apiRemoteUserService',
                'apiRemoteUserServicesResponse':'apiRemoteUserServicesResponse',
                'apiLocalRequest':'apiLocalRequest'
            }
          }


         /**
         * @ngdoc provider
         * @name provider.PubSubModule.PubSub
         * @description Publish and Subscribe service Utility
         */
         setMaxHistory(newMax) {
              this.maxHistory = newMax;
              return this;
          };


         $get() {
              let self = this;
              let channels = {};
              let id = 0;

              /**
               * Subscribes a callback to a channel.
               *
               * @param {Object}    channel  The channel being subscribed.
               * @param {Function}  callback The subscriber's callback.
               * @return {Function}          A function that, when called,
               *                               unsubscribes the callback from the
               *                               channel.
               */
              const addSubscriber = (channel, callback)=>{
                  const subscriberId = getUniqueId();

                  channel[subscriberId] = callback;

                  return createUnsubscribeFunction(channel, subscriberId);
              };

              /**
               * Adds a message to a channel's history, if maxHistory is greater than
               * 0. Trims the existing history if it goes over maxHistory.
               *
               * @param  {Object}    channel The channel being added to.
               * @param  {Array}     message The message to store.
               * @return {undefined}
               */
              const appendToHistory = (channel, message)=>{
                  if (this.maxHistory <= 0) { return; }

                  channel.history.push(message);

                  if (channel.history.length > this.maxHistory) {
                      channel.history.shift();
                  }
              };

              /**
               * Creates a new channel with an empty history.
               *
               * @return {Object} The new, empty channel.
               */
              const createChannel =  ()=>{
                  let channel = { };

                  Object.defineProperty(
                      channel, 'history', { value: [], enumerable: false });

                  return channel;
              };

              /**
               * Creates an unsubscribe function for a given subscriber's ID. The
               * returned function, when called, removes the subscriber from the
               * channel.
               *
               * @param  {Object}  channel The channel object.
               * @param  {Integer} id      The subscriber's ID.
               * @return {Function}        The unsubscribing function.
               */
              const createUnsubscribeFunction =  (channel, id)=>{
                  return ()=>{ delete channel[id]; };
              };

              /**
               * Drops the first n arguments from an Arguments object and returns an
               * Array with the remaining arguments.
               *
               * @param  {Object}  args The Arguments Object to drop args from.
               * @param  {Integer} n    How many arguments to drop.
               * @return {Array}        A new Array with the remaining arguments.
               */
              const dropFromArguments = (args, n)=>{
                  let newArgs = [];

                  for (let i = n; i < args.length; i++) {
                      newArgs.push(args[i]);
                  }

                  return newArgs;
              };

              /**
               * Retrieves a channel object, creating it if it does not yet exist.
               *
               * @param  {String} channel The channel to retrieve.
               * @return {Object}         The channel's object.
               */
              const getOrCreateChannel = (channel)=>{
                  if (angular.isUndefined(channels[channel] )) {
                      channels[channel] = createChannel();
                  }

                  return channels[channel];
              }

              /**
               * Generates a new subscriber ID.
               *
               * @return {Integer} An integer number for the subscriber
               */
              const getUniqueId = ()=>{
                  this.id += 1;
                  return id;
              };

              /**
               * Publish a message on the channel with the given name. Takes any
               * number of values as a message and passes them on to the subscribers'
               * callbacks.
               *
               * @param  {String}    channel The channel being published to.
               * @param  {[...]}     message Zero or more values to pass as a message.
               * @return {undefined}
               */
               function publish(channel){
                  let args = dropFromArguments(arguments, 1);
                  channel = getOrCreateChannel(channel);

                  publishOn(channel, args);
                  appendToHistory(channel, args);
              };

              /**
               * Publishes the given message on the given channel. Expects a channel
               * object, _not its name_, and the values to publish.
               *
               * @param  {Object}    channel The channel being published to.
               * @param  {Array}     message Possibly empty array of message values.
               * @return {undefined}
               */
              const publishOn =  (channel, message)=>{
                  let subscribers = Object.keys(channel);

                  for (let i = 0; i < subscribers.length; i++) {
                      channel[subscribers[i]].apply(undefined, message);
                  }
              };

              /**
               * Rewinds and plays back the channel's messages. Searches the history
               * of the channel for up to {count} messages and calls the callback with
               * as many messages as were retrieved, in historical order (older first).
               *
               * @param  {Object}    channel  The channel being rewound.
               * @param  {Function}  callback The subscriber's callback.
               * @param  {[type]}    count    Max number of messages to play back.
               * @return {undefined}
               */
              const rewind = (channel, callback, count)=> {
                  let history = channel.history;
                  let startIndex = 0;

                  if (!angular.isUndefined(count)) {
                      startIndex = Math.max(startIndex, history.length - count);
                  }

                  for (let i = startIndex; i < history.length; i++) {
                      callback.apply(null, history[i]);
                  }
              };

              /**
               * Subscribes to a channel to start receiving messages when publishes
               * are done. Can optionally 'rewind' the channel and pass the messages
               * received upon subscribing.
               *
               * @param  {String}   channel     The channel being subscribed to's name.
               * @param  {Function} callback    The callback to run upon any publish.
               * @param  {Boolean}  playback    Whether to playback previous messages.
               * @param  {Boolean}  maxPlayback Max number of messages to playback.
               * @return {Function}             A callback for unsubscribing from the
               *                                  channel.
               */
               const subscribe =(channel, callback, playback, maxPlayback)=> {
                  var unsubscribe;

                  channel = getOrCreateChannel(channel);
                  unsubscribe = addSubscriber(channel, callback);

                  if (playback === true) {
                      rewind(channel, callback, maxPlayback);
                  }

                  return unsubscribe;
              };


              const pubsubType = ()=>{
                      return this.defaultTypes;
              };



              return {



                  pubsubType:pubsubType,

                    /**
                     * @ngdoc method
                     * @name publish
                     * @methodOf provider.PubSubModule.PubSub
                     * @param
                     *       {String}    channel The channel being published to.
                     * @param  {[...]}
                     *        message Zero or more values to pass as a message.
                     * @return {undefined}
                     */
                  publish:publish,
                    /**
                     * @ngdoc method
                     * @name subscribe
                     * @methodOf provider.PubSubModule.PubSub
                     * @param  {String}
                     *            channel     The channel being subscribed to's name.
                     * @param  {Function}
                     *            callback    The callback to run upon any publish.
                     * @param  {Boolean}
                     *             playback    Whether to playback previous messages.
                     * @param  {Boolean}
                     *              maxPlayback Max number of messages to playback.
                     * @return {Function}             A callback for unsubscribing from the
                     *                                  channel.
                     */
                  subscribe:subscribe
              };

    }

}



export default PubSubProvider;
