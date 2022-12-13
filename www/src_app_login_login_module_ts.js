"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Administrador_Desktop_Chating_Deber_Examen_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 6636);








let LoginPage = class LoginPage {
    constructor(fb, loadingController, alertController, authService, router) {
        this.fb = fb;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.authService = authService;
        this.router = router;
    }
    // Easy access for form fields
    get email() {
        return this.credentials.get('email');
    }
    get password() {
        return this.credentials.get('password');
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
        });
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const user = yield this.authService.register(this.credentials.value);
            yield loading.dismiss();
            if (user) {
                this.router.navigateByUrl('/home', { replaceUrl: true });
            }
            else {
                this.showAlert('Registration failed', 'Please try again!');
            }
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const user = yield this.authService.login(this.credentials.value);
            yield loading.dismiss();
            if (user) {
                this.router.navigateByUrl('/home', { replaceUrl: true });
            }
            else {
                this.showAlert('Login failed', 'Please try again!');
            }
        });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _C_Users_Administrador_Desktop_Chating_Deber_Examen_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (" <ion-header class=\"centrado\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>INNEC</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n  <ion-card>\n    <img src=\"../../assets/logo.png\" />\n    <ion-card-header>\n      <ion-card-title class=\"centrado\">CENSO 2022</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      8vo censo de población, 7mo de vivienda y 1ro de comunidades\n    </ion-card-content>\n  </ion-card>\n\n \n  <form [formGroup]=\"credentials\" (ngSubmit)=\"login()\" class=\"centrado\">\n    <ion-item fill=\"solid\" class=\"ion-margin-vertical\">\n      <ion-icon name=\"mail-outline\" slot=\"end\" color=\"medium\">\n      </ion-icon>\n      <ion-input placeholder=\"Introduzca la dirección de correo electrónico\" formControlName=\"email\"></ion-input>\n      <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email.errors\">Email is invalid</ion-note>\n    </ion-item>\n\n    <ion-item fill=\"solid\" class=\"ion-margin-bottom\">\n      <ion-icon [name]=\"isTypePassword ? 'lock-closed-outline' : 'lock-open-outline'\" slot=\"end\"\n        [color]=\"isTypePassword ? 'medium' : 'primary'\">\n      </ion-icon>\n      <ion-input type=\"password\" placeholder=\"Introducir la contraseña\" formControlName=\"password\"></ion-input>\n      <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">La contraseña debe tener 6\n        caracteres.</ion-note>\n    </ion-item>\n\n    <ion-button  type=\"submit\" color=\"primary\" shape=\"round\" [disabled]=\"!credentials.valid\">LOG IN</ion-button>\n\n\n    <!-- <ion-button type=\"button\" shape=\"round\" (click)=\"register()\">Crear una cuenta</ion-button>  -->\n  </form>\n</ion-content>");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n  overflow: hidden;\n}\n\nion-content {\n  overflow: hidden;\n  --overflow: hidden;\n}\n\n.centrado {\n  text-align: center;\n}\n\nform ion-item {\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n}\n\nform ion-row {\n  margin-bottom: 5vh;\n}\n\nform ion-button {\n  width: 30vh;\n  margin: auto;\n}\n\nform .alignItems ion-checkbox,\nform .alignItems ion-note {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBSUk7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0FBRFI7O0FBSUk7RUFDSSxrQkFBQTtBQUZSOztBQUtJO0VBRUksV0FBQTtFQUNBLFlBQUE7QUFKUjs7QUFTUTs7RUFFSSxxQkFBQTtFQUNBLHNCQUFBO0FBUFoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhcixcclxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jZW50cmFkbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDMwdmg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbGlnbkl0ZW1zIHtcclxuXHJcbiAgICAgICAgaW9uLWNoZWNrYm94LFxyXG4gICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map