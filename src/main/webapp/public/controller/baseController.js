/*global jsMvc */
jsMvc.controller.baseController = function() {
    "use strict";
    console.log("base controller ready");

};


jsMvc.controller.baseController.prototype = {
    "constructor": jsMvc.controller.baseController,
    "forward": function() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1123");
    }
};

