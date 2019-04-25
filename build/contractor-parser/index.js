#!/usr/bin/env node
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var showdown_1 = require("showdown");
var yargs_1 = require("yargs");
var converter = new showdown_1.Converter();
var contractsPath = yargs_1.argv.path;
var extractName = function (contractFilename) {
    var parsedFilename = contractFilename.match(/([a-z-_{}]+)/ig);
    if (!parsedFilename) {
        return { name: '', method: '' };
    }
    var method = parsedFilename[0], name = parsedFilename[1];
    return {
        name: name.replace(/_/g, '/'),
        method: method.toUpperCase()
    };
};
var contracts = fs_1.readdirSync(contractsPath).map(function (module) {
    var _a;
    var contractList = fs_1.readdirSync(contractsPath + "/" + module)
        .map(function (contractName) {
        var markdown = fs_1.readFileSync(contractsPath + "/" + module + "/" + contractName).toString();
        var contract = converter.makeHtml(markdown);
        return __assign({ module: module,
            contract: contract }, extractName(contractName));
    });
    return _a = {},
        _a[module] = contractList,
        _a;
})
    .reduce(function (contractList, moduleList) { return (__assign({}, contractList, moduleList)); }, {});
fs_1.writeFileSync('./node_modules/api-contractor/build/contractor-app/contracts.js', "const contracts = " + JSON.stringify(contracts), 'utf-8');
//# sourceMappingURL=index.js.map