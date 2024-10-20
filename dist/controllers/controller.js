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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.homePage = void 0;
const homePage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('home');
    }
    catch (error) {
        next(error);
    }
});
exports.homePage = homePage;
const addTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { newTask } = req.body;
        res.redirect("/");
    }
    catch (error) {
        next(error);
    }
});
exports.addTask = addTask;
