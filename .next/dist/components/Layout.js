'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewharrison/Desktop/kickstart-app/components/Layout.js';

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), props.children);
};

//camapign list is a child of layout
//container makes sure content are constrained
//head-part of next library, everything in head tag will be moved to head tag 
//can add meta tags for seo purposes
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIkhlYWRlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFROztBQUNSLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVksQUFFbkI7Ozs7Ozs7O2tCQUFlLGlCQUFTLEFBQ3BCOzJCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0E7QUFEQTtBQUFBLEtBQUEsa0JBQ0EsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDQztBQUREO0FBQUEsK0NBQ08sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7c0JBQTVCO3dCQUZELEFBQ0EsQUFDQyxBQUVEO0FBRkM7eUJBRUQsQUFBQzs7c0JBQUQ7d0JBSkEsQUFJQSxBQUNDO0FBREQ7QUFBQSxjQUxKLEFBQ0ksQUFLTyxBQUdkO0FBVkQ7O0FBWUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGV3aGFycmlzb24vRGVza3RvcC9raWNrc3RhcnQtYXBwIn0=