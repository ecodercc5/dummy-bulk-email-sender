"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = __importDefault(require("puppeteer"));
var $USERNAME = "j_username";
var $PASSWORD = "j_password";
var emails = [
    {
        email: "ericchen9025@gmail.com",
        subject: "Hello World",
        body: "I am Eric",
    },
    {
        email: "ericchen9025@gmail.com",
        subject: "Monkeyysss",
        body: "I am a asdfkjlqwjero",
    },
];
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, emailInput, submitEmail, _a, _b, _c, mitKerbInput, mitKerbPassword, submitKerb, _i, emails_1, mail, composeBtn, email, subject, body, emailInp, subjectInput, bodyInput, sendEmailBtn;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, puppeteer_1.default.launch({ headless: false })];
            case 1:
                browser = _d.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _d.sent();
                return [4 /*yield*/, page.goto("https://outlook.office.com/mail/")];
            case 3:
                _d.sent();
                return [4 /*yield*/, page.waitForSelector("input[type=\"email\"]")];
            case 4:
                emailInput = _d.sent();
                return [4 /*yield*/, page.waitForSelector("input[type=\"submit\"]")];
            case 5:
                submitEmail = _d.sent();
                return [4 /*yield*/, (emailInput === null || emailInput === void 0 ? void 0 : emailInput.type("eric25@mit.edu"))];
            case 6:
                _d.sent();
                console.log("yo");
                _b = (_a = Promise).all;
                return [4 /*yield*/, (submitEmail === null || submitEmail === void 0 ? void 0 : submitEmail.click())];
            case 7:
                _c = [
                    _d.sent()
                ];
                return [4 /*yield*/, page.waitForNavigation()];
            case 8: return [4 /*yield*/, _b.apply(_a, [_c.concat([
                        _d.sent()
                    ])])];
            case 9:
                _d.sent();
                // touchstone login
                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 5000); })];
            case 10:
                // touchstone login
                _d.sent();
                console.log("help");
                return [4 /*yield*/, page.waitForSelector("input[name=\"j_username\"]")];
            case 11:
                mitKerbInput = _d.sent();
                return [4 /*yield*/, page.waitForSelector("input[name=\"j_password\"]")];
            case 12:
                mitKerbPassword = _d.sent();
                return [4 /*yield*/, page.waitForSelector("input[type=\"submit\"]")];
            case 13:
                submitKerb = _d.sent();
                console.log(mitKerbInput);
                //   await new Promise((r) => setTimeout(r, 3000));
                //   await submitKerb?.click();
                // bypass security
                //   await new Promise((r) => setTimeout(r, 20000));
                return [4 /*yield*/, page.waitForFunction("window.location.href === 'https://outlook.office.com/mail/'")];
            case 14:
                //   await new Promise((r) => setTimeout(r, 3000));
                //   await submitKerb?.click();
                // bypass security
                //   await new Promise((r) => setTimeout(r, 20000));
                _d.sent();
                _i = 0, emails_1 = emails;
                _d.label = 15;
            case 15:
                if (!(_i < emails_1.length)) return [3 /*break*/, 28];
                mail = emails_1[_i];
                return [4 /*yield*/, page.waitForSelector("button .ms-Button-label.ZZgmc.label-176")];
            case 16:
                composeBtn = _d.sent();
                console.log("yurrrrrrr");
                return [4 /*yield*/, (composeBtn === null || composeBtn === void 0 ? void 0 : composeBtn.click())];
            case 17:
                _d.sent();
                email = mail.email, subject = mail.subject, body = mail.body;
                return [4 /*yield*/, page.waitForSelector(".G4a5Z .AALfT div[contenteditable=\"true\"]")];
            case 18:
                emailInp = _d.sent();
                return [4 /*yield*/, page.waitForSelector("input[placeholder=\"Add a subject\"]")];
            case 19:
                subjectInput = _d.sent();
                return [4 /*yield*/, page.waitForSelector(".dbf5I.Umiif.SPY2A.tEMfE.sBugl.eQcvi")];
            case 20:
                bodyInput = _d.sent();
                console.log("ready to type email");
                return [4 /*yield*/, (emailInp === null || emailInp === void 0 ? void 0 : emailInp.type(email))];
            case 21:
                _d.sent();
                return [4 /*yield*/, (subjectInput === null || subjectInput === void 0 ? void 0 : subjectInput.type(subject))];
            case 22:
                _d.sent();
                return [4 /*yield*/, (bodyInput === null || bodyInput === void 0 ? void 0 : bodyInput.type(body))];
            case 23:
                _d.sent();
                return [4 /*yield*/, page.waitForSelector("button[title=\"Send (\u2318+Enter)\"]")];
            case 24:
                sendEmailBtn = _d.sent();
                console.log("sending");
                console.log(sendEmailBtn);
                return [4 /*yield*/, (sendEmailBtn === null || sendEmailBtn === void 0 ? void 0 : sendEmailBtn.click())];
            case 25:
                _d.sent();
                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 2000); })];
            case 26:
                _d.sent();
                _d.label = 27;
            case 27:
                _i++;
                return [3 /*break*/, 15];
            case 28: return [2 /*return*/];
        }
    });
}); };
main();
