"use strict";
var showContract = function (element) {
    element.innerHTML = Object.keys(contracts)
        .map(function (module) {
        var contractList = contracts[module]
            .map(function (_a) {
            var name = _a.name, method = _a.method, contract = _a.contract;
            return "\n            <li class=\"collection-item contract-item\">\n              <div class=\"collapsible-header contract-item-header\">\n                <small class=\"method-" + method.toLowerCase() + "\">" + method + "</small> " + name + "\n              </div>\n              <div class=\"collapsible-body contract-item-body\">\n                " + contract + "\n              </div>\n            </li>\n          ";
        });
        return contractList
            ? "<li class=\"contract\">\n              <div class=\"collapsible-header\">\n                <i class=\"material-icons\">layers</i>" + module + "\n              </div>\n              <div class=\"collapsible-body\">\n                <ul class=\"collapsible\">\n                  " + contractList.join('') + "\n                </ul>\n              </div>\n            </li>"
            : '';
    })
        .join('');
};
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
});
//# sourceMappingURL=contractor.js.map