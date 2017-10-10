!function a(b,c,d){
    function e(g,h){
        if(!c[g]){if(!b[g]){
            var i="function"==typeof require&&require;
            if(!h&&i)
                return i(g,!0);
            if(f)return f(g,!0)
            var j=new Error("Cannot find module '"+g+"'");
            throw j.code="MODULE_NOT_FOUND",j}
            var k=c[g]={exports:{}};
        b[g][0].call(k.exports,function(a){
            var c=b[g][1][a];
            return e(c?c:a)},k,k.exports,a,b,c,d)}
            return c[g].exports}
            for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);
    return e}
    ({1:[function(a,b,c){function d(a){function b(a,b){
        a.fadeOut(250,function(){b(),a.fadeIn(250)})}
        function c(b,c){h||(h=a(".row-template").html());
        var i=a(h);
        return d(i,b,c),g(i,c),f(i,c),e(i,c),i}
        function d(a,b,c){
            function d(){
                a.addClass("edit-mode"),h.focus()}
                function e(){
                a.removeClass("edit-mode")}
                function f(a){
                    h.val()!=a&&h.val(a),g.html(a),c()}
                    var g=a.find(".title"),
                        h=a.find(".title-edit input"),
                        i=a.find(".title.not-bought");
                i.click(function(){d()}),
                    h.focusout(function(){e()}),
                    h.on("input",function(){
                        f(h.val())}),
                    f(b)}
                        function e(a,b){
            var c=a.find(".delete-button");
            c.click(function(){
                a.slideUp(function(){
                    a.remove(),
                        b()})})}
                    function f(a,c){
                            function d(d){
                                b(e,function(){
                                    a.removeClass(i).removeClass(j),a.addClass(d),c()})}
                                    var e=a.find(".inner-part"),
                                        f=a.find(".buy-button"),
                                        g=a.find(".unbuy-button");
                            f.click(function(){d(i)}),
                                g.click(function(){d(j)}
                                )}
                                function g(a,c){function d(){
                            return parseInt(f.html())}
                            function e(a,d){function e(){
                                f.html(""+a),
                                    1==a?h.prop("disabled",!0):h.prop("disabled",!1),
                                    c()}d?e():b(f,e)}
                                    var f=a.find(".count-label"),
                                        g=a.find(".plus-button"),
                                        h=a.find(".minus-button");
                            g.click(function(){
                                e(d()+1)}),
                                h.click(function(){
                                    var a=d();
                                    a>1&&e(d()-1)}),
                                e(1,!0)}
                                var h=null,i="state-bought",j="state-not-bought";
                                return c}
                                c.createRow=d($)},{}],2:[function(a,b,c){function d(b){function c(a){
                                    var b=f.createRow(a,e);
                                    g.append(b),b.hide(),b.slideDown(function(){e()})}
                                    function d(){function a(){var a=e.val();
                                    a&&a.length&&(c(a),e.val(""),e.focus())}
                                    var d=b(".new-item"),e=d.find("input"),f=d.find("button");
                                    f.click(function(){a()}),e.keyup(function(b){13==b.keyCode&&a()})}
                                    function e(){function a(a,c){a.html(""),c.each(function(c,d){d=b(d);
                                    var e=d.find(".title").html(),f=d.find(".count-label").html(),g=b(j);
                                    g.find(".title").html(e),g.find(".count").html(f),a.append(g)})}
                                    a(h,g.find(".item-row.state-bought")),a(i,g.find(".item-row.state-not-bought"))}
                                    var f=a("./OneRow"),g=b(".items-list"),h=b(".stats-bought"),i=b(".stats-not-bought"),j=b(".stats-template").html();
                                    d(),c("РџРѕРјС–РґРѕСЂРё"),c("РџРµС‡РёРІРѕ"),c("РЎРёСЂ")}$(function(){d($)})},{"./OneRow":1}]},{},[2]);