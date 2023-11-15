"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Experience)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(665);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
;// CONCATENATED MODULE: ./components/ExperienceCard.tsx




const ExperienceCard = ({ companyLogo , projectName , //role,
//date,
//desc,
descBullets , github  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
        lg: "6",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
            left: true,
            duration: 2000,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
                style: {
                    flex: 1
                },
                className: "shadow-lg--hover mb-3 shadow border-0 text-center rounded",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.CardBody, {
                    className: "",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: companyLogo,
                            style: {
                                objectFit: "cover",
                                left: 0,
                                right: 0,
                                top: "7rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "8rem",
                                height: "8rem",
                                borderRadius: "50%"
                            },
                            className: "shadow mb-3",
                            alt: companyLogo
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.CardTitle, {
                            tag: "h4",
                            className: "mb-2",
                            children: [
                                projectName,
                                "\xa0",
                                github ? /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                    className: "btn-icon",
                                    color: "github",
                                    href: github,
                                    target: "_blank",
                                    rel: "noopener",
                                    "aria-label": "Github",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "btn-inner--icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-github"
                                        })
                                    })
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: descBullets && descBullets.map((descBullet, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: Array.isArray(descBullet) ? // If descBullet is an array (React nodes), render each element
                                    descBullet.map((item, j)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: item
                                        }, j)) : // If descBullet is a string, render it directly
                                    descBullet
                                }, i))
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_ExperienceCard = (ExperienceCard);

;// CONCATENATED MODULE: ./containers/Experience.tsx





const Experience = ()=>{
    return portfolio/* experience */.b8 && /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section section-lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ni ni-laptop text-info"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pl-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "display-3 text-info",
                                children: "Projects"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                    className: "row-grid align-items-start",
                    children: portfolio/* experience.map */.b8.map((data, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(components_ExperienceCard, {
                            ...data
                        }, i);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const containers_Experience = (Experience);


/***/ })

};
;