$(document).ready(function () {
    var LIST = $('.bl-list');
    var ITEM_TEMPLATE = $('#template').html();
    var STAT_TEMPLATE = $('.statsTemplate').html();

    // Add 3 lines
    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");

    var checkString = function (f) {
        if (f && f.charAt(0) != " ") {
            return true;
        }
        return false;
    };

    // Left column
    // Add a new line on click
    $(".add").click(function () {
        var f = $(".field").val();
        if (checkString(f)) {
            addItem(f);
        }
        $(".field").val("");
        $(".field").focus();
    });

    function addItem(title) {
        var node = $(ITEM_TEMPLATE); //Create new HTML node
        var rightNode = $(STAT_TEMPLATE);
        var rename = node.find('.rename');
        var product = node.find(".bl-product");
        var rightProduct = rightNode.find('.title');
        var buy = true;
        rename.hide();
        product.text(title); //Set product title
        rightProduct.text(title);
        rightNode.find('.count').text(1);

        product.click(function () {
            if (buy) {
                rename.val(product.text());
                product.hide();
                rename.show();
                rename.focus();
            }
        });
        rename.focusout(function () {
            var name = rename.val();
            if (checkString(name)) {
                product.text(name);
                rightProduct.text(name);
                rename.hide();
                product.show();
            } else {
                rename.hide();
                product.show();
            }
        });
        //Delete line
        node.find(".bl-cancel").click(function () {
            node.slideUp(function () {
                node.remove();
            });
            rightNode.fadeTo(300, 0, function () {
                rightNode.remove();
            });
        });
        //Add one unit to list
        node.find(".bl-plus").click(function () {
            var thisC = node.find('.bl-label');
            var count = thisC.text();
            if (parseInt(count) === 1)
                node.find('.bl-minus').removeClass("disabled");
            count++;
            thisC.fadeOut(250, function () {
                thisC.text(count);
                thisC.fadeIn(250);
            });
            var r = rightNode.find(".count");
            r.fadeOut(250, function () {
                r.text(count);
                r.fadeIn(250);
            });
        });
        //Remove one unit from list
        node.find(".bl-minus").click(function () {
            var thisC = node.find('.bl-label');
            var count = thisC.text();
            if (parseInt(count) !== 1) {
                count--;
                thisC.fadeOut(250, function () {
                    thisC.text(count);
                    thisC.fadeIn(250);
                });
                var r = rightNode.find(".count");
                r.fadeOut(250, function () {
                    r.text(count);
                    r.fadeIn(250);
                });
            }
            if (count == 1)
                node.find('.bl-minus').addClass("disabled");
        });
        // Add the item to the bought-list
        node.find(".bl-buy").click(function () {
            node.fadeOut(250, function () {
                var thisN = node.find('.bl-product');
                node.find('.bl-minus').toggle();
                node.find('.bl-plus').toggle();
                node.find('.bl-cancel').toggle();
                if (buy) {
                    thisN.addClass("line-through");
                    node.find('.bl-buy').text("Не куплено");
                    rightNode.fadeOut(250, function () {
                        rightNode.remove();
                        $('.stats').append(rightNode);
                        rightNode.find('.title').addClass("line-through");
                        rightNode.fadeIn(250);
                    });
                    buy = false;
                } else {
                    thisN.removeClass("line-through");
                    node.find('.bl-buy').text("Куплено");
                    rightNode.fadeOut(250, function () {
                        rightNode.remove();
                        $('.not-bought').append(rightNode);
                        rightNode.find('.title').removeClass("line-through");
                        rightNode.fadeIn(250);
                    });
                    buy = true;
                }
                node.fadeIn(250);
            });
        });
        LIST.append(node); //Add to the end of the list
        $(".not-bought").append(rightNode);
    }

    $(".field").keypress(function (event) {
        if (event.which == 13) {
            var f = $(".field").val();
            if (checkString(f)) addItem(f);
            $(".field").val("");
            $(".field").focus();
        }
    });
});
