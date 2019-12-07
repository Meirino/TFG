(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_auth_component_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth-component/auth.component */ "./src/app/components/auth-component/auth.component.ts");
/* harmony import */ var _components_simple_chat_simple_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/simple-chat/simple-chat.component */ "./src/app/components/simple-chat/simple-chat.component.ts");
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/perfil/perfil.component */ "./src/app/components/perfil/perfil.component.ts");
/* harmony import */ var _components_ejercicios_component_ejercicios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ejercicios-component/ejercicios.component */ "./src/app/components/ejercicios-component/ejercicios.component.ts");
/* harmony import */ var _components_index_component_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index-component/index.component */ "./src/app/components/index-component/index.component.ts");








var appRoutes = [
    { path: "index", component: _components_index_component_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"] },
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "login", component: _components_auth_component_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    { path: "chat", component: _components_simple_chat_simple_chat_component__WEBPACK_IMPORTED_MODULE_4__["SimpleChatComponent"] },
    { path: "perfil", component: _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"] },
    { path: "ejercicios", component: _components_ejercicios_component_ejercicios_component__WEBPACK_IMPORTED_MODULE_6__["EjerciciosComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bot-navbar></bot-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, user) {
        this.auth = auth;
        this.user = user;
        this.title = "TFG-Angular";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.auth.loginRefresh().subscribe(function (res) {
                _this.user.currentUser = res;
            });
        }
        catch (error) { }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_auth_component_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth-component/auth.component */ "./src/app/components/auth-component/auth.component.ts");
/* harmony import */ var _services_dialogflow_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/dialogflow.service */ "./src/app/services/dialogflow.service.ts");
/* harmony import */ var _components_simple_chat_simple_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/simple-chat/simple-chat.component */ "./src/app/components/simple-chat/simple-chat.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_ejercicios_component_ejercicios_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ejercicios-component/ejercicios.component */ "./src/app/components/ejercicios-component/ejercicios.component.ts");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");
/* harmony import */ var _components_simple_chat_message_component_message_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/simple-chat/message-component/message-component.component */ "./src/app/components/simple-chat/message-component/message-component.component.ts");
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/perfil/perfil.component */ "./src/app/components/perfil/perfil.component.ts");
/* harmony import */ var _components_ejercicios_component_ejercicio1_component_ejercicio1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ejercicios-component/ejercicio1-component/ejercicio1.component */ "./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.ts");
/* harmony import */ var _components_progress_component_progress_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/progress-component/progress.component */ "./src/app/components/progress-component/progress.component.ts");
/* harmony import */ var _components_index_component_index_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/index-component/index.component */ "./src/app/components/index-component/index.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_auth_component_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                _components_simple_chat_simple_chat_component__WEBPACK_IMPORTED_MODULE_10__["SimpleChatComponent"],
                _components_simple_chat_message_component_message_component_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponentComponent"],
                _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__["PerfilComponent"],
                _components_ejercicios_component_ejercicios_component__WEBPACK_IMPORTED_MODULE_13__["EjerciciosComponent"],
                _components_ejercicios_component_ejercicio1_component_ejercicio1_component__WEBPACK_IMPORTED_MODULE_17__["Ejercicio1Component"],
                _components_progress_component_progress_component__WEBPACK_IMPORTED_MODULE_18__["ProgressComponent"],
                _components_index_component_index_component__WEBPACK_IMPORTED_MODULE_19__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_14__["MzNavbarModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_14__["MzTabModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_14__["MzCardModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_14__["MzValidationModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_14__["MzInputModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_14__["MzCollapsibleModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_14__["MzProgressModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_14__["MzButtonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"]
            ],
            providers: [_services_dialogflow_service__WEBPACK_IMPORTED_MODULE_9__["DialogflowService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth-component/auth.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/auth-component/auth.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <mz-tab [fixedTabWidth]=\"'true'\" [responsiveThreshold]=\"'true'\" [swipeable]=\"'true'\">\r\n      <mz-tab-item [active]=\"'true'\" [label]=\"'Login'\">\r\n        <div class=\"col m5 s12 x12\">\r\n          <div class=\"card\" id=\"login\">\r\n            <div class=\"card-body\">\r\n              {{errorMessage}}\r\n              <h4 class=\"card-title\">Login</h4>\r\n              <div class=\"error\" *ngIf=\"this.errorMessageLogin\">{{this.errorMessageLogin}}</div>\r\n              <form (ngSubmit)=\"login()\">\r\n                <div class=\"input-field\">\r\n                  <label for=\"exampleInputEmail2\">Correo Electrónico</label>\r\n                  <br />\r\n                  <input [(ngModel)]=\"this.loginInfo.email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\"\r\n                    aria-describedby=\"emailHelp\" placeholder=\"Introduzca su correo\" name=\"username\" />\r\n                </div>\r\n                <div class=\"input-field\">\r\n                  <label for=\"exampleInputPassword1\">Contraseña</label>\r\n                  <br />\r\n                  <input [(ngModel)]=\"this.loginInfo.password\" type=\"password\" class=\"form-control\"\r\n                    id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"password\" />\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col m7 s12 x12\">\r\n          <mz-card [hoverable]=\"yes\">\r\n            <mz-card-title>Ayuda</mz-card-title>\r\n            <mz-card-content>\r\n              <p>Una vez estés registrado, podrás iniciar sesión con el correo que hayas usado para registrarte y la\r\n                contraseña que hayas elegido.</p>\r\n            </mz-card-content>\r\n          </mz-card>\r\n        </div>\r\n      </mz-tab-item>\r\n      <mz-tab-item [label]=\"'Registro'\">\r\n        <div class=\"col m6 s12 x12\">\r\n          <div class=\"card\" id=\"registro\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Registro</h4>\r\n              <div class=\"error\" *ngIf=\"this.errorMessage\">{{this.errorMessage}}</div>\r\n              <form (ngSubmit)=\"register()\">\r\n                <div class=\"input-field\">\r\n                  <label for=\"exampleInputEmail3\">Nombre de usuario</label>\r\n                  <br />\r\n                  <input type=\"email\" [(ngModel)]=\"this.newUserRegister.username\" class=\"form-control\"\r\n                    id=\"exampleInputEmail3\" aria-describedby=\"emailHelp\" placeholder=\"Enter username\" name=\"username\" />\r\n                </div>\r\n                <div class=\"input-field\">\r\n                  <label for=\"exampleInputEmail1\">Correo electrónico</label>\r\n                  <br />\r\n                  <input type=\"email\" [(ngModel)]=\"this.newUserRegister.email\" class=\"form-control\"\r\n                    id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" name=\"email\" />\r\n                </div>\r\n                <div class=\"input-field\">\r\n                  <label for=\"exampleInputPassword1\">Contraseña</label>\r\n                  <br />\r\n                  <input type=\"password\" [(ngModel)]=\"this.newUserRegister.password\" class=\"form-control\"\r\n                    id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"password\" />\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col m6 s12 x12\">\r\n          <mz-card [hoverable]=\"yes\">\r\n            <mz-card-title>Ayuda</mz-card-title>\r\n            <mz-card-content>\r\n              <p>Una vez estés registrado, podrás iniciar sesión con el correo que hayas usado para registrarte y la\r\n                contraseña que hayas elegido.</p>\r\n              <p>Para registrarte, usa tu correo electrónico y un nombre de usuario que quieras usar.</p>\r\n            </mz-card-content>\r\n          </mz-card>\r\n        </div>\r\n      </mz-tab-item>\r\n    </mz-tab>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth-component/auth.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/auth-component/auth.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#text-chat {\n  padding-top: 10px; }\n\n.card {\n  padding: 8px;\n  padding-top: 2px;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9URkcvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2F1dGgtY29tcG9uZW50L2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoLWNvbXBvbmVudC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RleHQtY2hhdCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/auth-component/auth.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth-component/auth.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(auth, userService) {
        var _this = this;
        this.auth = auth;
        this.userService = userService;
        this.newUserRegister = {
            username: "",
            password: "",
            email: "",
            id: ""
        };
        this.errorMessage = undefined;
        this.errorMessageLogin = undefined;
        this.loginInfo = { email: "", password: "password" };
        this.auth.getLoginErrors().subscribe(function (error) {
            _this.errorMessage = error;
        });
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.register = function () {
        var _this = this;
        if (this.newUserRegister.email !== "" &&
            this.newUserRegister.password !== "" &&
            this.newUserRegister.username !== "") {
            this.auth.register(this.newUserRegister).subscribe(function (res) {
                _this.errorMessage = "Registro completado";
            }, function (error) {
                _this.errorMessage = error;
            });
        }
        else {
            this.errorMessage = "Datos incorrectos";
        }
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        try {
            this.auth.login(this.loginInfo).subscribe(function (res) {
                _this.userService.currentUser = res;
            }, function (err) {
                _this.errorMessageLogin = err;
            });
        }
        catch (error) {
            console.log("Error");
        }
    };
    AuthComponent.prototype.checkEmail = function () {
        return this.auth
            .checkEmail(this.newUserRegister.email)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bot-auth",
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/components/auth-component/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/components/auth-component/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\">\r\n  <p>En este ejercicio se deben introducir dos contraseñas distintas que cumplan los siguientes requisitos:</p>\r\n  <ul>\r\n    <li>Números</li>\r\n    <li>Letras mayúsculas y minúsculas</li>\r\n    <li>Símbolos (/@_-|)</li>\r\n    <li>Longitud de más de 8 carácteres</li>\r\n  </ul>\r\n  <input [(ngModel)]=\"this.password1\" (keyup)=\"onKey1($event)\" id=\"pass1\" type=\"password\" name=\"pass1\" />\r\n  <mz-progress id=\"progreso1\" [backgroundClass]=\"'blue lighten-4'\" [percentage]=\"progress1\" [progressClass]=\"'blue'\">\r\n  </mz-progress>\r\n\r\n  <input [(ngModel)]=\"this.password2\" (keyup)=\"onKey2($event)\" id=\"pass2\" type=\"password\" name=\"pass2\" />\r\n  <mz-progress id=\"progreso2\" [backgroundClass]=\"'blue lighten-4'\" [percentage]=\"progress2\" [progressClass]=\"'blue'\">\r\n  </mz-progress>\r\n\r\n  <button type=\"submit\" mz-button>Enviar</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWplcmNpY2lvcy1jb21wb25lbnQvZWplcmNpY2lvMS1jb21wb25lbnQvZWplcmNpY2lvMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: Ejercicio1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ejercicio1Component", function() { return Ejercicio1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var Ejercicio1Component = /** @class */ (function () {
    function Ejercicio1Component(userservice) {
        this.userservice = userservice;
        this.password1 = "";
        this.password2 = "";
        this.progress1 = 0;
        this.progress2 = 0;
    }
    Ejercicio1Component.prototype.ngOnInit = function () { };
    Ejercicio1Component.prototype.onSubmit = function () {
        // Comprobar fuerza de ambas contraseñas
        if (this.validarPassword(this.password1) > 0 &&
            this.validarPassword(this.password2) > 0) {
            // Llamar al servicio de usuario para que de el ejercicio como completado
            this.userservice.completarEjercicio(1);
        }
        else {
            // Mostrar mensaje de seguir intentándolo
        }
        // Si pasa la verificación, añadir a la base de datos el ejercicio completado
    };
    Ejercicio1Component.prototype.onKey1 = function (event) {
        this.progress1 = this.validarPassword(event.target.value);
    };
    Ejercicio1Component.prototype.onKey2 = function (event) {
        this.progress2 = this.validarPassword(event.target.value);
    };
    Ejercicio1Component.prototype.validarPassword = function (pass) {
        var puntuacion = 0;
        // Puntos longitud
        if (pass.length < 8) {
            return 0;
        }
        else {
            puntuacion = +(pass.length * 4);
        }
        // Puntos por mayúsculas
        var mayúsculas = pass.length - pass.replace(/[A-Z]/g, "").length;
        if (mayúsculas === 0) {
            return 0;
        }
        else {
            puntuacion = +((pass.length - mayúsculas) * 2);
        }
        // Puntos por minúsculas
        var minúsculas = pass.length - pass.replace(/[a-z]/g, "").length;
        if (minúsculas === 0) {
            return 0;
        }
        else {
            puntuacion = +((pass.length - minúsculas) * 2);
        }
        // Puntos por números
        var numeros = pass.length - pass.replace(/[0-9]/g, "").length;
        if (numeros === 0) {
            return 0;
        }
        else {
            puntuacion = +((pass.length - numeros) * 4);
        }
        // Puntos por símbolos
        var simbolos = pass.length - pass.replace(/[/ñ@_-|]/g, "").length;
        if (simbolos === 0) {
            return 0;
        }
        else {
            puntuacion = +((pass.length - simbolos) * 6);
        }
        if (puntuacion > 100) {
            return 100;
        }
        else {
            return puntuacion;
        }
    };
    Ejercicio1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ejercicio1",
            template: __webpack_require__(/*! ./ejercicio1.component.html */ "./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.html"),
            styles: [__webpack_require__(/*! ./ejercicio1.component.scss */ "./src/app/components/ejercicios-component/ejercicio1-component/ejercicio1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], Ejercicio1Component);
    return Ejercicio1Component;
}());



/***/ }),

/***/ "./src/app/components/ejercicios-component/ejercicios.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/ejercicios-component/ejercicios.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h4 id=\"titulo\">Ejercicios</h4>\r\n\r\n  <div id=\"contenedor\">\r\n    <mz-collapsible [mode]=\"'expandable'\" [onClose]=\"closeFunctionCallback\" [onOpen]=\"openFunctionCallback\"\r\n      [popout]=\"true\">\r\n      <mz-collapsible-item [active]=\"true\">\r\n        <mz-collapsible-item-header>\r\n          Temario: Contraseñas seguras\r\n        </mz-collapsible-item-header>\r\n        <mz-collapsible-item-body>\r\n          <ejercicio1></ejercicio1>\r\n        </mz-collapsible-item-body>\r\n      </mz-collapsible-item>\r\n    </mz-collapsible>\r\n    <mz-collapsible [mode]=\"'expandable'\" [onClose]=\"closeFunctionCallback\" [onOpen]=\"openFunctionCallback\"\r\n      [popout]=\"true\">\r\n      <mz-collapsible-item [active]=\"true\">\r\n        <mz-collapsible-item-header>\r\n          Temario: Salud\r\n        </mz-collapsible-item-header>\r\n        <mz-collapsible-item-body>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        </mz-collapsible-item-body>\r\n      </mz-collapsible-item>\r\n    </mz-collapsible>\r\n    <mz-collapsible [mode]=\"'expandable'\" [onClose]=\"closeFunctionCallback\" [onOpen]=\"openFunctionCallback\"\r\n      [popout]=\"true\">\r\n      <mz-collapsible-item [active]=\"true\">\r\n        <mz-collapsible-item-header>\r\n          Temario: Amenazas online\r\n        </mz-collapsible-item-header>\r\n        <mz-collapsible-item-body>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        </mz-collapsible-item-body>\r\n      </mz-collapsible-item>\r\n    </mz-collapsible>\r\n    <mz-collapsible [mode]=\"'expandable'\" [onClose]=\"closeFunctionCallback\" [onOpen]=\"openFunctionCallback\"\r\n      [popout]=\"true\">\r\n      <mz-collapsible-item [active]=\"true\">\r\n        <mz-collapsible-item-header>\r\n          Temario: Equipo seguro\r\n        </mz-collapsible-item-header>\r\n        <mz-collapsible-item-body>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        </mz-collapsible-item-body>\r\n      </mz-collapsible-item>\r\n    </mz-collapsible>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/ejercicios-component/ejercicios.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/ejercicios-component/ejercicios.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWplcmNpY2lvcy1jb21wb25lbnQvZWplcmNpY2lvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/ejercicios-component/ejercicios.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/ejercicios-component/ejercicios.component.ts ***!
  \*************************************************************************/
/*! exports provided: EjerciciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjerciciosComponent", function() { return EjerciciosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EjerciciosComponent = /** @class */ (function () {
    function EjerciciosComponent() {
    }
    EjerciciosComponent.prototype.ngOnInit = function () { };
    EjerciciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ejercicios",
            template: __webpack_require__(/*! ./ejercicios.component.html */ "./src/app/components/ejercicios-component/ejercicios.component.html"),
            styles: [__webpack_require__(/*! ./ejercicios.component.scss */ "./src/app/components/ejercicios-component/ejercicios.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EjerciciosComponent);
    return EjerciciosComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\r\n  <mz-navbar id=\"header\">\r\n    <mz-navbar-item-container [align]=\"'left'\">\r\n      <mz-navbar-item><a routerLink=\"/\">Inicio</a></mz-navbar-item>\r\n      <mz-navbar-item *ngIf=this.userService.currentUser><a routerLink=\"/chat\">Chat</a></mz-navbar-item>\r\n      <mz-navbar-item *ngIf=this.userService.currentUser><a routerLink=\"/ejercicios\">Ejercicios</a></mz-navbar-item>\r\n    </mz-navbar-item-container>\r\n    <mz-navbar-item-container *ngIf=this.userService.currentUser [align]=\"'right'\">\r\n      <a (click)=\"cerrarSesion()\" id=\"apagado\" class=\"\">Cerrar sesión</a>\r\n    </mz-navbar-item-container>\r\n    <mz-navbar-item-container *ngIf=this.userService.currentUser [align]=\"'right'\">\r\n      <img class=\"circle responsive-img\" src=\"/avatars/0{{this.userService.currentUser.id}}.jpg\"\r\n        style=\"height:60px;padding:5px;\">\r\n    </mz-navbar-item-container>\r\n    <mz-navbar-item-container *ngIf=this.userService.currentUser [align]=\"'right'\">\r\n      <a routerLink=\"/perfil\" id=\"userspace\" class=\"\">{{this.userService.currentUser.username}}</a>\r\n    </mz-navbar-item-container>\r\n  </mz-navbar>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-header {\n  float: left;\n  padding: 15px;\n  text-align: center;\n  width: 100%; }\n\nnav {\n  font-family: \"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\nli > a:hover {\n  color: rgba(255, 255, 255, 0.5); }\n\nimg.user-avatar {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9URkcvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2I7RUFDRSx5S0FBeUssRUFBQTs7QUFHM0s7RUFFSSwrQkFBK0IsRUFBQTs7QUFJbkM7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWhlYWRlciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxufVxyXG5cclxubGk+YSB7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgfVxyXG59XHJcblxyXG5pbWcudXNlci1hdmF0YXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.cerrarSesion = function () {
        var _this = this;
        this.authService.cerrarSesion().subscribe(function (res) {
            if (res) {
                _this.userService.currentUser = undefined;
            }
            else {
                console.log("Ha ocurrido un error");
            }
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bot-navbar",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/index-component/index.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/index-component/index.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.userService.currentUser === undefined\">\r\n  <bot-auth></bot-auth>\r\n</div>\r\n<div class=\"row\" *ngIf=\"this.userService.currentUser !== undefined\">\r\n  <app-progress></app-progress>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/index-component/index.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/index-component/index.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kZXgtY29tcG9uZW50L2luZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/index-component/index.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/index-component/index.component.ts ***!
  \***************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var IndexComponent = /** @class */ (function () {
    function IndexComponent(userService) {
        this.userService = userService;
    }
    IndexComponent.prototype.ngOnInit = function () { };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "index",
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index-component/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/components/index-component/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil/perfil.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div id=\"header\">\r\n      <h4>Perfil</h4>\r\n      <hr>\r\n    </div>\r\n    <mz-tab [fixedTabWidth]=\"'true'\">\r\n      <mz-tab-item [active]=\"'true'\" [label]=\"'Progreso'\">\r\n        <app-progress></app-progress>\r\n      </mz-tab-item>\r\n      <mz-tab-item [label]=\"'Editar información'\">\r\n        <div class=\"col m6 s12\">\r\n          <div id=\"formulario\">\r\n            <form name=\"datosDeUsuario\">\r\n              <h5>Información personal</h5>\r\n              <div class=\"row\">\r\n                <mz-input-container class=\"col s12 m6\">\r\n                  <input mz-input name=\"new_name\" id=\"input-username\" type=\"text\" [label]=\"'Nuevo nombre de usuario'\"\r\n                    [(ngModel)]=\"this.options.new_name\" />\r\n                </mz-input-container>\r\n              </div>\r\n              <div class=\"row\">\r\n                <mz-input-container class=\"col s12 m6\">\r\n                  <input mz-input id=\"input-email\" type=\"text\" [label]=\"'Nuevo correo electrónico'\" name=\"new_email\"\r\n                    [(ngModel)]=\"this.options.new_email\" />\r\n                </mz-input-container>\r\n              </div>\r\n              <div class=\"row\">\r\n                <mz-input-container class=\"col s12 m6\">\r\n                  <input mz-input id=\"input-pass\" type=\"password\" [label]=\"'Nueva contraseña'\" name=\"new_pass\"\r\n                    [(ngModel)]=\"this.options.new_pass\" />\r\n                </mz-input-container>\r\n              </div>\r\n              <button class=\"btn\" type=\"submit\" (click)=\"this.cambiarDatos()\">Guardar</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <form>\r\n            <h6>Nuevo Avatar</h6>\r\n            <div class=\"row\">\r\n              <mz-input-container class=\"col s12 m6\">\r\n                <input mz-input id=\"input-avatar\" id=\"avatar\" type=\"file\"\r\n                  (change)=\"subirArchivo($event.target.files)\" />\r\n              </mz-input-container>\r\n              <button class=\"btn\" type=\"submit\" (click)=\"this.subirAvatar()\">Cambiar</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </mz-tab-item>\r\n    </mz-tab>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/perfil/perfil.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/perfil/perfil.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.ts ***!
  \*******************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(userService) {
        this.userService = userService;
        this.archivo = null;
        this.options = {
            new_name: "",
            new_pass: "",
            new_email: ""
        };
    }
    PerfilComponent.prototype.ngOnInit = function () { };
    PerfilComponent.prototype.cambiarDatos = function () {
        console.log(this.options);
        this.userService.modificarDatos(this.options);
    };
    PerfilComponent.prototype.subirArchivo = function (files) {
        this.archivo = files.item(0);
    };
    PerfilComponent.prototype.subirAvatar = function () {
        this.userService.cambiarAvatar(this.archivo).subscribe(function (data) {
            // do something, if upload success
        }, function (error) {
            console.log(error);
        });
    };
    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-perfil",
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/components/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.scss */ "./src/app/components/perfil/perfil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/components/progress-component/progress.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/progress-component/progress.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"col m6 s12\" *ngIf=\"lessonProgress\">\r\n    <h5>Material</h5>\r\n    <!-- <p *ngFor=\"let leccion of lessonProgress\">{{leccion.name}} <i *ngIf=\"leccion.completed == 1\">- Completado</i></p> -->\r\n    <mz-card class=\"\" [horizontal]=\"true\" *ngFor=\"let leccion of lessonProgress\">\r\n      <mz-card-title>{{leccion.name}} <fa-icon *ngIf=\"leccion.completed == 1\" style=\"color: #4caf50\"\r\n          [icon]=\"faCheckmark\"></fa-icon>\r\n      </mz-card-title>\r\n    </mz-card>\r\n  </div>\r\n  <div class=\"col m6 s12\" *ngIf=\"lessonProgress\">\r\n    <h5>Ejercicios</h5>\r\n    <!-- <p *ngFor=\"let ejercicio of exerciseProgress\">{{ejercicio.name}} <i *ngIf=\"ejercicio.completed == 1\">-\r\n        Completado</i>\r\n    </p> -->\r\n    <mz-card class=\"\" [horizontal]=\"true\" *ngFor=\"let ejercicio of exerciseProgress\">\r\n      <mz-card-title>{{ejercicio.name}} <fa-icon *ngIf=\"ejercicio.completed == 1\" style=\"color: #4caf50\"\r\n          [icon]=\"faCheckmark\"></fa-icon>\r\n      </mz-card-title>\r\n    </mz-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/progress-component/progress.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/progress-component/progress.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MtY29tcG9uZW50L3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/progress-component/progress.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/progress-component/progress.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(userService) {
        this.userService = userService;
        this.lessonProgress = undefined;
        this.exerciseProgress = undefined;
        this.LeccionesLabels = ["No Completadas", "Completadas"];
        this.pieChartData = [4, 1];
        this.pieChartType = "pie";
        this.pieChartOptions = {
            backgroundColor: ["#FF6384", "#4BC0C0"]
        };
        this.faCheckmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheck"];
    }
    ProgressComponent.prototype.ngOnInit = function () {
        this.getProgress();
    };
    ProgressComponent.prototype.getProgress = function () {
        var _this = this;
        this.userService.getUserLessonProgress().subscribe(function (result) {
            _this.lessonProgress = result;
        });
        this.userService.getUserExerciseProgress().subscribe(function (result) {
            _this.exerciseProgress = result;
        });
    };
    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-progress",
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/components/progress-component/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/components/progress-component/progress.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/components/simple-chat/message-component/message-component.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/simple-chat/message-component/message-component.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"message\" [ngClass]=\"{'my-message': !mensaje.bot}\">\n    <div class=\"message_text\">{{mensaje.content}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/simple-chat/message-component/message-component.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/simple-chat/message-component/message-component.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  float: right;\n  position: relative;\n  min-height: 30px;\n  max-width: 50%;\n  min-width: 25%;\n  background-color: #fff0a7;\n  margin-bottom: 8px;\n  border-radius: 6px;\n  padding-left: 5px;\n  padding-right: 5px;\n  z-index: 2; }\n\n.message.my-message {\n  float: left;\n  background-color: #effdde; }\n\n.message.droplet:before {\n  position: absolute;\n  content: '';\n  bottom: 0;\n  left: -8px;\n  width: 12px;\n  height: 1px;\n  background-color: inherit;\n  z-index: 1;\n  box-shadow: 0px 1px 1px 1px rgba(160, 172, 182, 0.5); }\n\n.message.droplet:after {\n  position: absolute;\n  content: '';\n  bottom: 0;\n  left: -10px;\n  width: 16px;\n  height: 10px;\n  -webkit-clip-path: url(#left-droplet);\n          clip-path: url(#left-droplet);\n  background-color: inherit;\n  z-index: 1;\n  box-shadow: 0 2px 1px 0 rgba(160, 172, 182, 0.5); }\n\n.message.my-message.droplet:before {\n  right: -8px;\n  left: initial;\n  box-shadow: 0px 1px 1px 1px rgba(93, 196, 82, 0.5); }\n\n.message.my-message.droplet:after {\n  right: -10px;\n  left: initial;\n  -webkit-clip-path: url(#right-droplet);\n          clip-path: url(#right-droplet); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9URkcvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3NpbXBsZS1jaGF0L21lc3NhZ2UtY29tcG9uZW50L21lc3NhZ2UtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUVaLGtCQUFrQjtFQUVsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFFZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUVsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG9EQUFtRCxFQUFBOztBQUdyRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixnREFBK0MsRUFBQTs7QUFHakQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtEQUFpRCxFQUFBOztBQUduRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQThCO1VBQTlCLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaW1wbGUtY2hhdC9tZXNzYWdlLWNvbXBvbmVudC9tZXNzYWdlLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiAyNSU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBhNztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcblxuICB6LWluZGV4OiAyO1xufVxuXG4ubWVzc2FnZS5teS1tZXNzYWdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmZkZGU7XG59XG5cbi5tZXNzYWdlLmRyb3BsZXQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAtOHB4O1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IDFweCByZ2JhKDE2MCwgMTcyLCAxODIsIC41KTtcbn1cblxuLm1lc3NhZ2UuZHJvcGxldDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogLTEwcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGNsaXAtcGF0aDogdXJsKCNsZWZ0LWRyb3BsZXQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggMCByZ2JhKDE2MCwgMTcyLCAxODIsIC41KTtcbn1cblxuLm1lc3NhZ2UubXktbWVzc2FnZS5kcm9wbGV0OmJlZm9yZSB7XG4gIHJpZ2h0OiAtOHB4O1xuICBsZWZ0OiBpbml0aWFsO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDFweCAxcHggcmdiYSg5MywgMTk2LCA4MiwgLjUpO1xufVxuXG4ubWVzc2FnZS5teS1tZXNzYWdlLmRyb3BsZXQ6YWZ0ZXIge1xuICByaWdodDogLTEwcHg7XG4gIGxlZnQ6IGluaXRpYWw7XG4gIGNsaXAtcGF0aDogdXJsKCNyaWdodC1kcm9wbGV0KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/simple-chat/message-component/message-component.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/simple-chat/message-component/message-component.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MessageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponentComponent", function() { return MessageComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/message */ "./src/app/models/message.ts");



var MessageComponentComponent = /** @class */ (function () {
    function MessageComponentComponent() {
    }
    MessageComponentComponent.prototype.ngOnInit = function () { };
    MessageComponentComponent.prototype.ngAfterViewChecked = function () {
        this.container = document.getElementById("message_row");
        this.container.scrollTop = this.container.scrollHeight;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["Message"])
    ], MessageComponentComponent.prototype, "mensaje", void 0);
    MessageComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-message-component",
            template: __webpack_require__(/*! ./message-component.component.html */ "./src/app/components/simple-chat/message-component/message-component.component.html"),
            styles: [__webpack_require__(/*! ./message-component.component.scss */ "./src/app/components/simple-chat/message-component/message-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponentComponent);
    return MessageComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/simple-chat/simple-chat.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/simple-chat/simple-chat.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <mz-navbar id=\"AIbar\">\n    <a class=\"brand-logo\"><img class=\"circle responsive-img\" src=\"/avatars/bot.jpg\" style=\"height:60px;padding:5px;\">\n      {{this.userService.botUser.username}}</a>\n  </mz-navbar>\n</div>\n<div id=\"text-chat\" class=\"chat_body\">\n  <div id=\"message_row\" class=\"messages\">\n    <div class=\"row\" *ngFor=\"let texto of mensajes; let last = last\">\n      <app-message-component [mensaje]=\"texto\"></app-message-component>\n    </div>\n  </div>\n  <div id=\"anchor\"></div>\n</div>\n<div class=\"row\">\n  <div id=\"textbox\" class=\"col m12 s12 x12\">\n    <input (keyup.enter)=\"talk()\" class=\"form-control\" [(ngModel)]=\"mensaje\" name=\"chat\" type=\"text\"\n      placeholder=\"Hola, ¿Qué tal?\">\n  </div>\n  <div class=\"col m1 s1 x0\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/simple-chat/simple-chat.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/simple-chat/simple-chat.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  position: fixed;\n  bottom: 0px;\n  padding: 15px; }\n\n#text-chat {\n  overflow-anchor: none;\n  padding: 2%; }\n\n#anchor {\n  overflow-anchor: auto;\n  height: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9URkcvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3NpbXBsZS1jaGF0L3NpbXBsZS1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHFCQUFxQjtFQUNyQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpbXBsZS1jaGF0L3NpbXBsZS1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4jdGV4dC1jaGF0IHtcclxuICAgIG92ZXJmbG93LWFuY2hvcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4jYW5jaG9yIHtcclxuICAgIG92ZXJmbG93LWFuY2hvcjogYXV0bztcclxuICAgIGhlaWdodDogMXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/simple-chat/simple-chat.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/simple-chat/simple-chat.component.ts ***!
  \*****************************************************************/
/*! exports provided: SimpleChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleChatComponent", function() { return SimpleChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dialogflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dialogflow.service */ "./src/app/services/dialogflow.service.ts");
/* harmony import */ var src_app_models_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/message */ "./src/app/models/message.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





var SimpleChatComponent = /** @class */ (function () {
    function SimpleChatComponent(dialog, userService) {
        this.dialog = dialog;
        this.userService = userService;
        this.mensaje = "";
        this.mensajes = [];
    }
    SimpleChatComponent.prototype.talk = function () {
        var _this = this;
        this.mensajes.push(new src_app_models_message__WEBPACK_IMPORTED_MODULE_3__["Message"](this.mensaje, false, this.userService.currentUser));
        this.dialog.getResponse(this.mensaje).subscribe(function (response) {
            _this.mensajes.push(new src_app_models_message__WEBPACK_IMPORTED_MODULE_3__["Message"](response, true, _this.userService.botUser));
        });
        this.mensaje = "";
    };
    SimpleChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dialog.getResponse("ayuda").subscribe(function (response) {
            _this.mensajes.push(new src_app_models_message__WEBPACK_IMPORTED_MODULE_3__["Message"](response, true, _this.userService.botUser));
        });
    };
    SimpleChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-simple-chat",
            template: __webpack_require__(/*! ./simple-chat.component.html */ "./src/app/components/simple-chat/simple-chat.component.html"),
            styles: [__webpack_require__(/*! ./simple-chat.component.scss */ "./src/app/components/simple-chat/simple-chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dialogflow_service__WEBPACK_IMPORTED_MODULE_2__["DialogflowService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SimpleChatComponent);
    return SimpleChatComponent;
}());



/***/ }),

/***/ "./src/app/models/message.ts":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, bot, user) {
        this.content = content;
        this.bot = bot;
        this.user = user;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var AuthService = /** @class */ (function () {
    function AuthService(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.baseURL = "http://18.212.103.97:4000/api/";
        this.logInErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AuthService.prototype.getLoginErrors = function () {
        return this.logInErrorSubject;
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseURL + "register", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return "OK";
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /* Realiza la petición de login con los datos del usuario y recibe el resultado
    Posteriormente guarda el ID y el token de sesión en el navegador */
    AuthService.prototype.login = function (user) {
        return this.http.post(this.baseURL + "login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            localStorage.setItem("user_id", res.user.id);
            localStorage.setItem("user_token", res.user.sessionToken);
            return new _user_service__WEBPACK_IMPORTED_MODULE_5__["User"](res.user.username, res.user.email, res.user.id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /* Comprueba si existe un token de sesión almacenado en el navegador
    Si existe, manda una petición al servidor para que recoger los datos del usuario  */
    AuthService.prototype.loginRefresh = function () {
        var _this = this;
        if (localStorage.getItem("user_id") && localStorage.getItem("user_token")) {
            console.log("ID del usuario: " + localStorage.getItem("user_id"));
            console.log("Token del usuario: " + localStorage.getItem("user_token"));
            try {
                return this.http
                    .post(this.baseURL + "refreshLogin", {
                    user_id: localStorage.getItem("user_id"),
                    user_token: localStorage.getItem("user_token")
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                    _this.userService.currentUser = new _user_service__WEBPACK_IMPORTED_MODULE_5__["User"](res.username, res.email, res.id);
                    return new _user_service__WEBPACK_IMPORTED_MODULE_5__["User"](res.username, res.email, res.id);
                }));
            }
            catch (error) {
                /* En caso de error, lo mejor es hacer una petición para que el servidor borre los token de sesión
                y borrar el localStorage */
                console.log("Ha ocurrido un error");
            }
        }
    };
    AuthService.prototype.cerrarSesion = function () {
        var _this = this;
        var id = localStorage.getItem("user_id");
        var token = localStorage.getItem("user_token");
        if (id && token) {
            try {
                return this.http
                    .post(this.baseURL + "signout", {
                    user_id: id,
                    user_token: token
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                    localStorage.removeItem("user_id");
                    localStorage.removeItem("user_token");
                    _this.router.navigateByUrl("/");
                    return res.status;
                }));
            }
            catch (error) {
                this.logInErrorSubject.next("Algo ha salido mal");
            }
        }
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.baseURL + ("email/" + email));
    };
    AuthService.prototype.handleError = function (error) {
        var errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // Error del servidor
            if (error.status === 409) {
                errorMessage = "Ya existe un usuario registrado con ese correo.";
            }
            if (error.status === 500) {
                errorMessage = "Algo salió mal.";
            }
            if (error.status === 500) {
                errorMessage = "Algo salió mal.";
            }
            if (error.status === 404) {
                errorMessage = "Usuario no encontrado. Revise los datos.";
            }
            if (error.status === 401) {
                errorMessage = "Contraseña incorrecta.";
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/dialogflow.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/dialogflow.service.ts ***!
  \************************************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return DialogflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");





var DialogflowService = /** @class */ (function () {
    function DialogflowService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.baseURL = "http://18.212.103.97:4000/api/chat";
        this.nextContext = "";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
    }
    DialogflowService.prototype.getResponse = function (query) {
        var _this = this;
        var data = {};
        return this.http
            .post(this.baseURL, { mensaje: query, context: this.nextContext }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res.intent === "secureBrowsing - Phising Final") {
                console.log("¡Lección completada!");
                _this.completeLesson(2);
            }
            _this.nextContext = res.context;
            return res.text;
        }));
    };
    DialogflowService.prototype.completeLesson = function (id) {
        this.http
            .put("http://18.212.103.97:4000/api/lecciones", {
            leccion: id,
            usuario: parseInt(this.userService.currentUser.id)
        })
            .subscribe(function (result) {
            console.log(result);
        });
    };
    DialogflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], DialogflowService);
    return DialogflowService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: User, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var User = /** @class */ (function () {
    function User(user, email, id) {
        (this.username = user), (this.email = email), (this.id = id);
    }
    return User;
}());

var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseURL = "http://18.212.103.97:4000/api/";
        this.currentUser = undefined;
        this.botUser = new User("AI", "AI@bot.com", "bot");
    }
    UserService.prototype.ngOnInit = function () {
        // if (localStorage.getItem("user_id")) {
        //   this.currentUser = localStorage.getItem("user_id");
        // }
    };
    UserService.prototype.modificarDatos = function (options) {
        var _this = this;
        if (options.new_name === "") {
            options.new_name = this.currentUser.username;
        }
        if (options.new_email === "") {
            options.new_email = this.currentUser.email;
        }
        if (options.new_pass === "") {
            options.new_pass = undefined;
        }
        this.http
            .put(this.baseURL + "datos", {
            id: this.currentUser.id,
            options: options
        })
            .subscribe(function (result) {
            _this.currentUser.username = options.new_name;
            _this.currentUser.email = options.new_email;
        });
        console.log(options);
    };
    UserService.prototype.completarEjercicio = function (ejercicio_id) {
        this.http
            .put(this.baseURL + "ejercicios", {
            ejercicio: ejercicio_id,
            id: this.currentUser.id
        })
            .subscribe(function (result) {
            console.log(result);
        });
    };
    UserService.prototype.getUserLessonProgress = function () {
        return this.http.get(this.baseURL + "lecciones/" + this.currentUser.id);
    };
    UserService.prototype.getUserExerciseProgress = function () {
        return this.http.get(this.baseURL + "ejercicios/" + this.currentUser.id);
    };
    UserService.prototype.cambiarAvatar = function (archivo) {
        var formData = new FormData();
        formData.append(this.currentUser.id, archivo, archivo.name);
        return this.http.post(this.baseURL + "avatar", formData);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    token: "2bbb99d625f64ea2808a5f519e4b5df7"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/TFG/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map