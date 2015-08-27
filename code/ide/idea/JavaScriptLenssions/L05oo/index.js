/**
 * Created by navyblue on 2015/8/27.
 */

function A(){}

A.prototype.sayHello = function(){
    this.sayHehe=function(){
        console.log("Hi,verint!");
    }
}

A.sayHi = function(){
    console.log("Hello verint.");
}

var a = new A();
a.sayHello();
A.sayHi();

function B(){}
B.prototype = new A();

var b = new B();
b.sayHello();
b.sayHehe();