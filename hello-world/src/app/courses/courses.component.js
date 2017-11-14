"use strict";
/**
 * Created by akg pc on 10/26/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var courses_service_1 = require("./courses.service");
var CoursesComponent = /** @class */ (function () {
    // logic for calling an HTTP endpoint
    function CoursesComponent() {
        this.title = 'List of courses';
        var service = new courses_service_1.CoursesService();
        this.courses = service.getCourses();
    }
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n    <h2> {{\"Title: \" + title}}</h2>\n    <ul>\n      <li *ngFor=\"let course of courses\">\n        {{course}}\n      </li>\n    </ul>\n  "
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
