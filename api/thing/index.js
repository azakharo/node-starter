'use strict';

const express = require('express');
const controller = require('./thing.controller');
const auth = require('../../auth/auth.service');

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(),controller.destroy);

module.exports = router;
