'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mock_data_users = require('./../../data/mock_data_users.json');

var _mock_data_users2 = _interopRequireDefault(_mock_data_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
  res.send(_mock_data_users2.default.users);
});

exports.default = router;
//# sourceMappingURL=users.js.map