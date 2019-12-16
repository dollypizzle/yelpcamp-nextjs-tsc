webpackHotUpdate("static/development/pages/campgrounds.js",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Navbar = function Navbar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggleCollapse = function toggleCollapse() {
    setIsOpen(!isOpen);
  };

  var logout = function logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('jwtToken');
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('user');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
  };

  var user = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('user');

  var userLinks = __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBNavbarNav"], {
    right: true
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBNavItem"], null, __jsx("a", {
    onClick: logout,
    href: "/",
    className: "nav-link"
  }, "Logout")));

  var guestLinks = __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBNavbarNav"], {
    right: true
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBNavItem"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login"
  }, __jsx("a", {
    className: "nav-link"
  }, "Login"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBNavItem"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/register"
  }, __jsx("a", {
    className: "nav-link"
  }, "Sign Up"))));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBNavbar"], {
    dark: true,
    expand: "md",
    style: {
      marginBottom: '20px',
      backgroundColor: 'purple'
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "nav-link text-light"
  }, "Yelpcamp")), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBNavbarToggler"], {
    onClick: toggleCollapse
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCollapse"], {
    id: "navbarCollapse3",
    isOpen: isOpen,
    navbar: true
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBNavbarNav"], {
    right: true
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/campgrounds"
  }, __jsx("a", {
    className: "nav-link"
  }, "Campgrounds")), user ? userLinks : guestLinks))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=campgrounds.js.af231f70d48c2c393d48.hot-update.js.map