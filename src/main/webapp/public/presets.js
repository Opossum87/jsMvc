var jsMvc = {
    "controller": {},
    "model": {},
    "view": {}
};

function extend(Child, Parent) {
    "use strict";
    if(!Child || !Parent){
        throw new Error("Extend: Invalid arguments");
    }
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}
