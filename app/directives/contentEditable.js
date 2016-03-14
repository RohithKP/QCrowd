angular.module('QCrowd').directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // view -> model
            elm.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

            // model -> view
            ctrl.render = function(value) {
                elm.html(value);
            };

            // load init value from DOM
            ctrl.$setViewValue(elm.html());

            elm.bind('keydown', function(event) {
                console.log("keydown " + event.which);
                var esc = event.which == 27,
                    el = event.target;

                if (esc) {
                        console.log("esc");
                        ctrl.$setViewValue(elm.html());
                        el.blur();
                        event.preventDefault();
                    }

            });

        }
    };
});
angular.module('QCrowd').directive('clone', function() {
    return {
        link: function(scope, elm, attrs, ctrl) {
          /* register your event handler here */
          var  clickHandlerFn =    function () {
                  var root = document.querySelector('#root');
                  var cln = document.querySelector('#modal-input-group').cloneNode(true);
                  cln.id = cln.id + 1;
                  console.log(cln);
                  root.appendChild(cln);
               };
           elm.on('click', clickHandlerFn);
           /* As we're explicitly registering the handler, we need
             to de-register it, once your element is destroyed like below */

           elm.on('$destroy', function () {
               elm.off('click', clickHandlerFn);
           });
            }
        }
});
