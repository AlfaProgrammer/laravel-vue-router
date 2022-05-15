(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Post.index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Post.index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: [],
      lastPage: 0,
      currentPage: 1
    };
  },
  methods: {
    fetchPosts: function fetchPosts() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/api/posts', {
        params: {
          page: page
        }
      }).then(function (res) {
        _this.posts = res.data.posts.data;
        _this.lastPage = res.data.posts.last_page;
        _this.currentPage = res.data.posts.current_page;
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  mounted: function mounted() {
    this.fetchPosts();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Post.index.vue?vue&type=template&id=0574e64d&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Post.index.vue?vue&type=template&id=0574e64d& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-white" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container py-12" }, [
      _c(
        "ul",
        { staticClass: "grid grid-cols-5 gap-6 auto-rows-max" },
        _vm._l(_vm.posts, function (post) {
          return _c(
            "li",
            {
              key: post.id,
              staticClass:
                "border-2 border-slate-500 rounded-xl shadow-xl overflow-hidden",
            },
            [
              _c("div", { staticClass: "card" }, [
                _vm._m(1, true),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "card-title mb-[10px] min-h-[100px] px-[5px]",
                  },
                  [
                    _c("h3", { staticClass: "text-2xl font-bold" }, [
                      _vm._v(_vm._s(post.title)),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "car-info pl-[10px]" },
                  [
                    _c("p", { staticClass: "font-bold text-slate-500" }, [
                      _vm._v(_vm._s(post.category.name)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "flex gap-4 py-4" },
                      _vm._l(post.tags, function (tag) {
                        return _c(
                          "li",
                          {
                            key: tag.id,
                            staticClass:
                              "card-tag bg-amber-600 text-black px-3 rounded",
                          },
                          [
                            _vm._v(
                              " \n                             " +
                                _vm._s(tag.name) +
                                " \n                          "
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "mb-[10px] bg-zinc-400 py-1 px-3 text-sm text-black rounded",
                        attrs: {
                          to: {
                            name: "post.details",
                            params: { slug: post.slug },
                          },
                          tag: "button",
                        },
                      },
                      [
                        _vm._v(
                          " \n                          View Details \n                      "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]
          )
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container py-4" }, [
      _c(
        "ul",
        { staticClass: "pagination flex justify-center gap-4 items-center" },
        _vm._l(_vm.lastPage, function (n) {
          return _c(
            "li",
            {
              key: n,
              class: [
                _vm.currentPage == n ? "bg-orange-400" : "bg-white/30",
                "dot cursor-pointer rounded-full h-10 w-10 flex items-center justify-center text-sm",
              ],
              on: {
                click: function ($event) {
                  return _vm.fetchPosts(n)
                },
              },
            },
            [_vm._v(" " + _vm._s(n) + " ")]
          )
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container my-4" }, [
      _c("h1", { staticClass: "text-4xl font-bold " }, [
        _vm._v("Tutti i post"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("figure", { staticClass: "h-52 mb-[10px]" }, [
      _c("img", {
        staticClass: "block w-full h-full boject-cover object-center ",
        attrs: { src: "https://picsum.photos/200/300", alt: "" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Post.index.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Post.index.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post_index_vue_vue_type_template_id_0574e64d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.index.vue?vue&type=template&id=0574e64d& */ "./resources/js/pages/Post.index.vue?vue&type=template&id=0574e64d&");
/* harmony import */ var _Post_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Post.index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Post_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Post_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Post_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Post_index_vue_vue_type_template_id_0574e64d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Post_index_vue_vue_type_template_id_0574e64d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Post.index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Post.index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Post.index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Post.index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Post.index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Post.index.vue?vue&type=template&id=0574e64d&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Post.index.vue?vue&type=template&id=0574e64d& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_index_vue_vue_type_template_id_0574e64d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Post.index.vue?vue&type=template&id=0574e64d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Post.index.vue?vue&type=template&id=0574e64d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_index_vue_vue_type_template_id_0574e64d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_index_vue_vue_type_template_id_0574e64d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);