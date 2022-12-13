"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 559:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));


/***/ }),

/***/ 3201:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 559);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1482)).then(m => new m.CameraWeb()),
});




/***/ }),

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Administrador_Desktop_Chating_Deber_Examen_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 3201);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 6636);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/avatar.service */ 6758);









let HomePage = class HomePage {
    constructor(avatarService, authService, router, loadingController, alertController) {
        this.avatarService = avatarService;
        this.authService = authService;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.profile = null;
        this.avatarService.getUserProfile().subscribe((data) => {
            this.profile = data;
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
        });
    }
    changeImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera, // Camera, Photos or Prompt!
            });
            if (image) {
                const loading = yield this.loadingController.create();
                yield loading.present();
                const result = yield this.avatarService.uploadImage(image);
                loading.dismiss();
                if (!result) {
                    const alert = yield this.alertController.create({
                        header: 'Upload failed',
                        message: 'There was a problem uploading your avatar.',
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _C_Users_Administrador_Desktop_Chating_Deber_Examen_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 6758:
/*!********************************************!*\
  !*** ./src/app/services/avatar.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarService": () => (/* binding */ AvatarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 4400);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 5357);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 7200);





let AvatarService = class AvatarService {
    constructor(auth, firestore, storage) {
        this.auth = auth;
        this.firestore = firestore;
        this.storage = storage;
    }
    getUserProfile() {
        const user = this.auth.currentUser;
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, `users/${user.uid}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.docData)(userDocRef);
    }
    uploadImage(cameraFile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const user = this.auth.currentUser;
            const path = `uploads/${user.uid}/profile.png`;
            const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, path);
            try {
                yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadString)(storageRef, cameraFile.base64String, 'base64');
                const imageUrl = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
                const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, `users/${user.uid}`);
                yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(userDocRef, {
                    imageUrl,
                });
                return true;
            }
            catch (e) {
                return null;
            }
        });
    }
};
AvatarService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
AvatarService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], AvatarService);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> INNEC </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"preview\">\n    <ion-avatar>\n      <img *ngIf=\"profile?.imageUrl; else placeholder_avatar;\" [src]=\"profile.imageUrl\" />\n    </ion-avatar>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"changeImage()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-toolbar>\n    <ion-title>\n      Geolocalizacion\n    </ion-title>\n  </ion-toolbar>\n\n  <!-- <div class=\"ion-padding\" style=\"text-align: center\"> \n    <ion-label>COORDENADAS</ion-label>\n  </div>-->\n\n  <!-- <div class=\"ion-padding\">\n    <ion-item>\n      <ion-label>LATITUD: {{latitud}}</ion-label>\n    </ion-item>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-label>LONGITUD: {{longitud}}</ion-label>\n    </ion-item>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"full\" (click)=obtenerCoordenadas()>Capturar Coordenas</ion-label>\n    </ion-item>\n  </div>-->\n</ion-content>");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.preview {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback {\n  width: 128px;\n  height: 128px;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cblxuLnByZXZpZXcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZhbGxiYWNrIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map