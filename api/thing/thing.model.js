'use strict';

const _ = require('lodash');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let schema = new Schema({
  name: String,
  info: String,
  active: Boolean
});


///////////////////////////////////////////////////////////
// Socket updates

schema.listeners = [];

schema.post('save', function (doc) {
  _.forEach(schema.listeners, (socket) => onSave(socket, doc));
});

schema.post('remove', function (doc) {
  _.forEach(schema.listeners, (socket) => onRemove(socket, doc));
});

function onSave(socket, doc) {
  socket.emit('thing:save', doc);
}

function onRemove(socket, doc) {
  socket.emit('thing:remove', doc);
}


let model = mongoose.model('Thing', schema);

model.subscribe = function(socket) {
  if (socket) {
    schema.listeners.push(socket);
  }
};

model.unsubscribe = function(socket) {
  if (socket) {
    _.pull(schema.listeners, socket);
  }
};

// Socket updates
///////////////////////////////////////////////////////////


module.exports = model;
