"use strict";
var showContract = function (element) {
    element.innerHTML = Object.keys(contracts).map(function (module) {
        var contractList = contracts[module]
            .map(function (_a) {
            var name = _a.name, method = _a.method, contract = _a.contract;
            return "\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <div class=\"card-title h5\">" + name + "</div>\n              <div class=\"card-subtitle text-gray\">" + method + "</div>\n            </div>\n            <div class=\"card-body\">" + contract + "</div>\n          </div>\n        ";
        });
        return "\n        <details class=\"accordion\">\n          <summary class=\"accordion-header\">\n            <i class=\"icon icon-arrow-right mr-1\"></i>\n            " + module + "\n          </summary>\n          <div class=\"accordion-body\">\n            " + contractList + "\n          </div>\n        </details>\n      ";
    }).reduce(function (list, contract) { return list + contract; }, '');
};
//# sourceMappingURL=contractor.js.map