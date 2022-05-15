(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/PostDetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/PostDetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      post: null,
      loading: true
    };
  },
  methods: {
    fetchPostDetails: function fetchPostDetails() {
      var _this = this;

      axios.get("/api/posts/".concat(this.$route.params.slug)).then(function (res) {
        // console.log(res.data)                    
        _this.post = res.data.post;
        _this.loading = false;
      })["catch"](function (err) {
        // console.log($router)
        _this.$router.push('/404');
      });
    }
  },
  // mounted(){
  //     console.log(this.$route)
  // }
  beforeMount: function beforeMount() {
    this.fetchPostDetails();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/PostDetails.vue?vue&type=template&id=af2a14ee&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/PostDetails.vue?vue&type=template&id=af2a14ee&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return !_vm.loading
    ? _c("div", { staticClass: "container text-white" }, [
        _c("img", {
          staticClass: "w-full mt-[25px]",
          attrs: { src: "https://picsum.photos/1920/350" },
        }),
        _vm._v(" "),
        _c("section", [
          _c("h1", { staticClass: "text-3xl py-10 mb-2" }, [
            _vm._v(" " + _vm._s(_vm.post.title) + "  "),
          ]),
          _vm._v(" "),
          _vm.post.category
            ? _c("p", { staticClass: "text-orange-400 text-md " }, [
                _vm._v(" " + _vm._s(_vm.post.category.name) + " "),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "flex gap-2 items-center" },
            _vm._l(_vm.post.tags, function (tag) {
              return _c(
                "li",
                {
                  key: tag.id,
                  staticClass:
                    "text-white/50 italic text-sm after:content-[',']",
                },
                [_vm._v(" " + _vm._s(tag.name) + " ")]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "py-12" }, [
            _vm._v("\n          " + _vm._s(_vm.post.content) + "\n      "),
          ]),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/PostDetails.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/PostDetails.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostDetails_vue_vue_type_template_id_af2a14ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostDetails.vue?vue&type=template&id=af2a14ee&scoped=true& */ "./resources/js/pages/PostDetails.vue?vue&type=template&id=af2a14ee&scoped=true&");
/* harmony import */ var _PostDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDetails.vue?vue&type=script&lang=js& */ "./resources/js/pages/PostDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostDetails_vue_vue_type_template_id_af2a14ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostDetails_vue_vue_type_template_id_af2a14ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "af2a14ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/PostDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/PostDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/PostDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PostDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/PostDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/PostDetails.vue?vue&type=template&id=af2a14ee&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/PostDetails.vue?vue&type=template&id=af2a14ee&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetails_vue_vue_type_template_id_af2a14ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PostDetails.vue?vue&type=template&id=af2a14ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/PostDetails.vue?vue&type=template&id=af2a14ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetails_vue_vue_type_template_id_af2a14ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetails_vue_vue_type_template_id_af2a14ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);