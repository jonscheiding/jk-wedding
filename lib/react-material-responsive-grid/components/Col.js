'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Col = function Col(_ref) {
	var className = _ref.className,
	    xs4 = _ref.xs4,
	    xs8 = _ref.xs8,
	    sm8 = _ref.sm8,
	    sm12 = _ref.sm12,
	    md12 = _ref.md12,
	    lg12 = _ref.lg12,
	    xl12 = _ref.xl12,
	    xs4Offset = _ref.xs4Offset,
	    xs8Offset = _ref.xs8Offset,
	    sm8Offset = _ref.sm8Offset,
	    sm12Offset = _ref.sm12Offset,
	    md12Offset = _ref.md12Offset,
	    lg12Offset = _ref.lg12Offset,
	    xl12Offset = _ref.xl12Offset,
	    sm = _ref.sm,
	    md = _ref.md,
	    lg = _ref.lg,
	    xl = _ref.xl,
	    smOffset = _ref.smOffset,
	    mdOffset = _ref.mdOffset,
	    lgOffset = _ref.lgOffset,
	    xlOffset = _ref.xlOffset,
	    first = _ref.first,
	    last = _ref.last,
	    hidden = _ref.hidden,
	    hiddenUp = _ref.hiddenUp,
	    hiddenDown = _ref.hiddenDown,
	    tagName = _ref.tagName,
	    other = (0, _objectWithoutProperties3.default)(_ref, ['className', 'xs4', 'xs8', 'sm8', 'sm12', 'md12', 'lg12', 'xl12', 'xs4Offset', 'xs8Offset', 'sm8Offset', 'sm12Offset', 'md12Offset', 'lg12Offset', 'xl12Offset', 'sm', 'md', 'lg', 'xl', 'smOffset', 'mdOffset', 'lgOffset', 'xlOffset', 'first', 'last', 'hidden', 'hiddenUp', 'hiddenDown', 'tagName']);

	var newProps = (0, _extends3.default)({}, other);
	var classNames = [];

	// size specific properties
	if (xs4) {
		classNames.push((0, _utils.getClass)('col-xs4-' + xs4));
	}

	if (xs8) {
		classNames.push((0, _utils.getClass)('col-xs8-' + xs8));
	}

	if (sm8) {
		classNames.push((0, _utils.getClass)('col-sm8-' + sm8));
	}

	if (sm12) {
		classNames.push((0, _utils.getClass)('col-sm12-' + sm12));
	}

	if (md12) {
		classNames.push((0, _utils.getClass)('col-md12-' + md12));
	}

	if (lg12) {
		classNames.push((0, _utils.getClass)('col-lg12-' + lg12));
	}

	if (xl12) {
		classNames.push((0, _utils.getClass)('col-xl12-' + xl12));
	}

	if (xs4Offset || xs4Offset === 0) {
		classNames.push((0, _utils.getClass)('col-xs4-offset-' + xs4Offset));
	}

	if (xs8Offset || xs8Offset === 0) {
		classNames.push((0, _utils.getClass)('col-xs8-offset-' + xs8Offset));
	}

	if (sm8Offset || sm8Offset === 0) {
		classNames.push((0, _utils.getClass)('col-sm8-offset-' + sm8Offset));
	}

	if (sm12Offset || sm12Offset === 0) {
		classNames.push((0, _utils.getClass)('col-sm12-offset-' + sm12Offset));
	}

	if (md12Offset || md12Offset === 0) {
		classNames.push((0, _utils.getClass)('col-md12-offset-' + md12Offset));
	}

	if (lg12Offset || lg12Offset === 0) {
		classNames.push((0, _utils.getClass)('col-lg12-offset-' + lg12Offset));
	}

	if (xl12Offset || xl12Offset === 0) {
		classNames.push((0, _utils.getClass)('col-xl12-offset-' + xl12Offset));
	}

	// convenience properties (twelve columns implied)
	if (sm) {
		classNames.push((0, _utils.getClass)('col-sm-' + sm));
	}

	if (md) {
		classNames.push((0, _utils.getClass)('col-md-' + md));
	}

	if (lg) {
		classNames.push((0, _utils.getClass)('col-lg-' + lg));
	}

	if (xl) {
		classNames.push((0, _utils.getClass)('col-xl-' + xl));
	}

	if (smOffset || smOffset === 0) {
		classNames.push((0, _utils.getClass)('col-sm-offset-' + smOffset));
	}

	if (mdOffset || mdOffset === 0) {
		classNames.push((0, _utils.getClass)('col-md-offset-' + mdOffset));
	}

	if (lgOffset || lgOffset === 0) {
		classNames.push((0, _utils.getClass)('col-lg-offset-' + lgOffset));
	}

	if (xlOffset || xlOffset === 0) {
		classNames.push((0, _utils.getClass)('col-xl-offset-' + xlOffset));
	}

	if (hiddenUp && (0, _utils.isSizeValid)(hiddenUp)) {
		classNames.push((0, _utils.getClass)('hidden-' + hiddenUp + '-up'));
	}

	if (hiddenDown && (0, _utils.isSizeValid)(hiddenDown)) {
		classNames.push((0, _utils.getClass)('hidden-' + hiddenDown + '-down'));
	}

	// properties implemented as an array of sizes
	(0, _utils.pushSizeClassNames)(classNames, first, 'first-');
	(0, _utils.pushSizeClassNames)(classNames, last, 'last-');
	(0, _utils.pushSizeClassNames)(classNames, hidden, 'hidden-', '-only');

	// specified class is added last
	if (className) {
		classNames.push(className);
	}

	if (classNames.length) {
		newProps.className = classNames.filter(function (cssName) {
			return cssName;
		}).join(' ');
	}

	return _react2.default.createElement(tagName || 'div', newProps);
};

Col.propTypes = {
	className: _propTypes2.default.string,
	xs4: _propTypes2.default.number,
	xs8: _propTypes2.default.number,
	sm8: _propTypes2.default.number,
	sm12: _propTypes2.default.number,
	md12: _propTypes2.default.number,
	lg12: _propTypes2.default.number,
	xl12: _propTypes2.default.number,
	xs4Offset: _propTypes2.default.number,
	xs8Offset: _propTypes2.default.number,
	sm8Offset: _propTypes2.default.number,
	sm12Offset: _propTypes2.default.number,
	md12Offset: _propTypes2.default.number,
	lg12Offset: _propTypes2.default.number,
	xl12Offset: _propTypes2.default.number,
	sm: _propTypes2.default.number,
	md: _propTypes2.default.number,
	lg: _propTypes2.default.number,
	xl: _propTypes2.default.number,
	smOffset: _propTypes2.default.number,
	mdOffset: _propTypes2.default.number,
	lgOffset: _propTypes2.default.number,
	xlOffset: _propTypes2.default.number,
	first: _propTypes2.default.arrayOf(_propTypes2.default.string),
	last: _propTypes2.default.arrayOf(_propTypes2.default.string),
	hidden: _propTypes2.default.arrayOf(_propTypes2.default.string),
	hiddenUp: _propTypes2.default.string,
	hiddenDown: _propTypes2.default.string,
	tagName: _propTypes2.default.string
};

Col.defaultProps = {
	className: null,
	xs4: null,
	xs8: null,
	sm8: null,
	sm12: null,
	md12: null,
	lg12: null,
	xl12: null,
	xs4Offset: null,
	xs8Offset: null,
	sm8Offset: null,
	sm12Offset: null,
	md12Offset: null,
	lg12Offset: null,
	xl12Offset: null,
	sm: null,
	md: null,
	lg: null,
	xl: null,
	smOffset: null,
	mdOffset: null,
	lgOffset: null,
	xlOffset: null,
	first: [],
	last: [],
	hidden: [],
	hiddenUp: null,
	hiddenDown: null,
	tagName: null
};

exports.default = Col;