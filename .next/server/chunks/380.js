"use strict";
exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Education)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(665);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
;// CONCATENATED MODULE: ./components/EducationCard.tsx




const EducationCard = ({ schoolName , location , subHeader , graduation , //desc,
gpa , descBullets  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        left: true,
        duration: 2000,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
            className: "card-lift--hover shadow mt-4",
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardBody, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "d-flex px-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pl-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "text-info",
                                children: schoolName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                children: location
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                children: subHeader
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Badge, {
                                color: "info",
                                className: "mr-1",
                                children: graduation
                            }),
                            gpa && /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Badge, {
                                color: "primary",
                                className: "mr-1",
                                children: gpa
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "description mt-3",
                                children: descBullets
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_EducationCard = (EducationCard);

// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
;// CONCATENATED MODULE: ./containers/Education.tsx





const Education = ()=>{
    return portfolio/* educationInfo */.E5 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section pb-0 bg-gradient-info my-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex px-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "ni ni-books text-info"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pl-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "display-3 text-white",
                                    children: "Education"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        className: "row-grid align-items-center",
                        children: portfolio/* educationInfo.map */.E5.map((info)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                className: "order-lg-1",
                                lg: "6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_EducationCard, {
                                    ...info
                                })
                            }, info.schoolName);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "separator separator-bottom separator-skew zindex-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "none",
                    version: "1.1",
                    viewBox: "0 0 2560 100",
                    x: "0",
                    y: "0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        className: "fill-white",
                        points: "2560 0 2560 100 0 100"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const containers_Education = (Education);


/***/ })

};
;