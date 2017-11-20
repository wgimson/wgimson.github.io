webpackJsonp([1],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_display_user_display__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UserFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserFormPage = (function () {
    function UserFormPage(nav, navParams, formBuilder, db, auth, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.db = db;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.user = this.formBuilder.group({
            fname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lname: [""],
            age: [""],
            address: [""],
            econtact: [""],
            mconditions: [""],
            prescriptions: [""]
        });
    }
    UserFormPage.prototype.logForm = function () {
        var data = this.user.value;
        this.db.collection('patients').add({
            'fName': data.fname,
            'lName': data.lname,
            'age': data.age,
            'address': data.address,
            'eContact': data.econtact,
            'mConditions': data.mconditions,
            'prescriptions': data.prescriptions
        });
        this.goToDisplayPage();
    };
    UserFormPage.prototype.goToDisplayPage = function () {
        var data = this.user.value;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__user_display_user_display__["a" /* UserDisplayPage */], data);
    };
    UserFormPage.prototype.logout = function () {
        var _this = this;
        this.auth.signOut().then(function (data) {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        });
    };
    UserFormPage.prototype.displayUserWelcome = function () {
        this.loggedInUser = this.navParams.get('displayName');
        this.loggedInUserPhoto = this.navParams.get('photoURL');
        var toast = this.toastCtrl.create({
            message: 'Welcome, ' + this.loggedInUser,
            duration: 5000
        });
        toast.present();
    };
    UserFormPage.prototype.isEditDisplay = function () {
        var _navprms = this.navParams;
        if (_navprms.get('fName')) {
            this.patientDisplay = {
                fName: _navprms.get('fName'),
                lName: _navprms.get('lName'),
                age: _navprms.get('age'),
                address: _navprms.get('address'),
                eContact: _navprms.get('eContact'),
                mConditions: _navprms.get('mConditions'),
                prescriptions: _navprms.get('prescriptions')
            };
            return true;
        }
        return false;
    };
    UserFormPage.prototype.ionViewDidLoad = function () {
        //this.displayUserWelcome();
        var _isEditDisplay = this.isEditDisplay();
        console.log("ionViewDidLoad UserFormPage");
    };
    return UserFormPage;
}());
UserFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-user-form",template:/*ion-inline-start:"E:\OtherProjects\MedBud\medbud\src\pages\user-form\user-form.html"*/'<!--\n  Generated template for the UserFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Form</ion-title>\n    <img class="google-user-icon" [src]="loggedInUserPhoto" />\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="user" (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input type="text" formControlName="fname" placeholder="{{patientDisplay?.fName}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input type="text" formControlName="lname" placeholder="{{patientDisplay?.lName}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Age</ion-label>\n      <ion-input type="text" formControlName="age" placeholder="{{patientDisplay?.age}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Address</ion-label>\n      <ion-input type="text" formControlName="address" placeholder="{{patientDisplay?.address}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Emergency Contact #</ion-label>\n      <ion-input type="text" formControlName="econtact" placeholder="{{patientDisplay?.eContact}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Medical Conditions</ion-label>\n      <ion-textarea formControlName="mconditions" placeholder="{{patientDisplay?.mConditions}}"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Prescriptions</ion-label>\n      <ion-textarea formControlName="prescriptions" placeholder="{{patientDisplay?.prescriptions}}"></ion-textarea>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!user.valid">Submit</button>\n    <button ion-button (click)="logout()">Logout</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\OtherProjects\MedBud\medbud\src\pages\user-form\user-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], UserFormPage);

//# sourceMappingURL=user-form.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDisplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_form_user_form__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR IMPORTS

// IONIC IMPORTS

// PAGES


// PROVIDERS

/**
 * Generated class for the UserDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserDisplayPage = (function () {
    function UserDisplayPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
    }
    UserDisplayPage.prototype.writePatientInfo = function () {
        this.patient = {
            fName: this.navParams.get("fName"),
            lName: this.navParams.get("lName"),
            age: this.navParams.get("age"),
            address: this.navParams.get("address"),
            eContact: this.navParams.get("eContact"),
            mConditions: this.navParams.get("mConditions"),
            prescriptions: this.navParams.get("prescriptions")
        };
    };
    UserDisplayPage.prototype.logout = function () {
        var _this = this;
        this.authService.signOut().then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        });
    };
    UserDisplayPage.prototype.edit = function () {
        console.log(this.patient);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_form_user_form__["a" /* UserFormPage */], this.patient);
    };
    UserDisplayPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UserDisplayPage");
        this.writePatientInfo();
    };
    return UserDisplayPage;
}());
UserDisplayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-user-display",template:/*ion-inline-start:"E:\OtherProjects\MedBud\medbud\src\pages\user-display\user-display.html"*/'<!--\n  Generated template for the UserDisplayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title text-center>My Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card color="primary">\n\n          <ion-card-header>\n            {{patient?.fName + \' \' + patient?.lName}}\n          </ion-card-header>\n\n          <ion-card-content>\n            <ul>\n              <li>Age: {{patient?.age}}</li>\n              <li>Address: {{patient?.address}}</li>\n              <li>Emergency Contact: {{patient?.eContact}}</li>\n              <li>Medical Conditions: {{patient?.mConditions}}</li>\n              <li>Prescriptions: {{patient?.prescriptions}}</li>\n            </ul>\n          </ion-card-content>\n\n        </ion-card>\n        <button ion-button (click)="edit()">Edit</button>\n        <button ion-button (click)="logout()">Log Out</button>\n</ion-content>\n'/*ion-inline-end:"E:\OtherProjects\MedBud\medbud\src\pages\user-display\user-display.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], UserDisplayPage);

//# sourceMappingURL=user-display.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/register/register.module": [
		422,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\OtherProjects\MedBud\medbud\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\OtherProjects\MedBud\medbud\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get("item");
        // Let's populate this page with some filler content for funzies
        this.icons = [
            "flask",
            "wifi",
            "beer",
            "football",
            "basketball",
            "paper-plane",
            "american-football",
            "boat",
            "bluetooth",
            "build"
        ];
        /*     db
              .collection("items")
              .add({
                fName: "Billy",
                lName: "Gimson"
              })
              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
              })
              .catch(function(error) {
                console.error("Error adding document: ", error);
              }); */
    }
    ListPage.prototype.ngOnInit = function () {
        this.itemCollection = this.db.collection('items');
        this.items = this.itemCollection.valueChanges();
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-list",template:/*ion-inline-start:"E:\OtherProjects\MedBud\medbud\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ul>\n      <li class="text" *ngFor="let item of items | async">\n        {{item.fName}} {{ item.lName }}\n      </li>\n    </ul>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\OtherProjects\MedBud\medbud\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(afs) {
        this.afs = afs;
    }
    UserProvider.prototype.getPatientByUID = function (uid) {
        return this.afs
            .collection("patients", function (ref) { return ref.where("uid", "==", uid); })
            .valueChanges();
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(288);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_form_user_form__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_display_user_display__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_user__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// Import the AF2 Module

// for auth

// for database

// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyDk_lNkfHuzk66qkUpio_zjDf_hhigu2Rw",
    authDomain: "medbud-c6b5b.firebaseapp.com",
    databaseURL: "https://medbud-c6b5b.firebaseio.com",
    projectId: "medbud-c6b5b",
    storageBucket: "medbud-c6b5b.appspot.com",
    messagingSenderId: "1067946597419"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_user_form_user_form__["a" /* UserFormPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_user_display_user_display__["a" /* UserDisplayPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["b" /* AngularFirestoreModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_user_form_user_form__["a" /* UserFormPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_user_display_user_display__["a" /* UserDisplayPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_user_user__["a" /* UserProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_form_user_form__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_display_user_display__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR IMPORTS

// IONIC IMPORTS



// PAGES





// SERVICES


// COMPONENT
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService, userService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.userService = userService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: "List", component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: "Form", component: __WEBPACK_IMPORTED_MODULE_6__pages_user_form_user_form__["a" /* UserFormPage */] }
        ];
        this.authService.afAuth.authState.subscribe(function (user) {
            if (user == null) {
                _this.clearUserObject();
            }
            else {
                _this.isLoggedIn = true;
                _this.userParam = {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid
                };
                authService.getPatientByUid(_this.userParam.uid).subscribe(function (patient) {
                    var _uid = "";
                    if (patient[0]["uid"]) {
                        _uid = patient[0]["uid"];
                    }
                    var _correctlyRegistered = _this.patientIsCorrectlyRegistered(_uid);
                    if (_correctlyRegistered) {
                        var _patientParam = _this.buildPatientParamObject(patient[0]);
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_user_display_user_display__["a" /* UserDisplayPage */], _patientParam);
                    }
                    else {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_user_form_user_form__["a" /* UserFormPage */], _this.userParam);
                    }
                });
            }
        });
    }
    // PUBLIC FUNCTIONS
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    // PRIVATE FUNCTIONS
    MyApp.prototype.buildPatientParamObject = function (patient) {
        return (this.patient = {
            age: patient.age,
            address: patient.address,
            eContact: patient.eContact,
            fName: patient.fName,
            lName: patient.lName,
            mConditions: patient.mConditions,
            prescriptions: patient.prescriptions,
            uid: patient.uid
        });
    };
    MyApp.prototype.patientIsCorrectlyRegistered = function (uid) {
        return this.userParam.uid === uid ? true : false;
    };
    MyApp.prototype.clearUserObject = function () {
        this.isLoggedIn = false;
        this.userParam = { displayName: "", email: "", photoURL: "", uid: "" };
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\OtherProjects\MedBud\medbud\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-content>\n    <ion-list>\n     <!--  <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button> -->\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\OtherProjects\MedBud\medbud\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = (function () {
    function User(name, email) {
        this.displayName = name;
        this.email = email;
    }
    return User;
}());

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
    }
    AuthServiceProvider.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthServiceProvider.prototype.getUserByUid = function (uid) {
        return this.afs
            .collection("users", function (ref) { return ref.where("uid", "==", uid); })
            .valueChanges();
    };
    AuthServiceProvider.prototype.getPatientByUid = function (uid) {
        return this.afs
            .collection("patients", function (ref) { return ref.where("uid", "==", uid); })
            .valueChanges();
    };
    AuthServiceProvider.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthServiceProvider.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider).then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthServiceProvider.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data);
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: "", password: "" };
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push("RegisterPage");
    };
    LoginPage.prototype.googleLogin = function () {
        this.auth.googleLogin();
    };
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.auth.signOut().then(function (data) {
            _this.nav.push(LoginPage_1);
        });
    };
    // TO SPIN UP OUR OWN LOGIN ONE DAY
    LoginPage.prototype.login = function () {
        /*
        this.showLoading()
        let creds = this.registerCredentials;
        this.auth.googleLogin().subscribe(allowed => {
          if (allowed) {
            this.nav.setRoot('HomePage');
          } else {
            this.showError("Access Denied");
          }
        },
          error => {
            this.showError(error);
          }); */
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: "Fail",
            subTitle: text,
            buttons: ["OK"]
        });
        alert.present(prompt);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-login",template:/*ion-inline-start:"E:\OtherProjects\MedBud\medbud\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Log In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="http://placehold.it/300x200" />\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <h3>Welcome to MedID</h3>\n    <p>Please login using Google or Facebook...</p>\n\n    <button (click)="googleLogin()">\n      <i class="fa fa-google"></i> Connect Google\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\OtherProjects\MedBud\medbud\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map