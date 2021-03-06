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
                var esc = event.which == 27,
                    el = event.target;

                if (esc) {
                        ctrl.$setViewValue(elm.html());
                        el.blur();
                        event.preventDefault();
                    }

            });

        }
    };
});
angular.module('QCrowd').directive('clone', function($compile) {
    return {
        link: function(scope, elm, attrs, ctrl) {
          /* register your event handler here */
          var  clickHandlerFn =    function () {
                  var root = document.querySelector('#root');
                  var cln = document.querySelector('#modal-input-group').cloneNode(true);
                  cln.id = cln.id + 1;

                  root.appendChild(cln);
                  cln.classList.add("bar");
                  $compile(cln)(scope);
               };
          elm.on('click', clickHandlerFn);
           elm.on('$destroy', function () {
               elm.off('click', clickHandlerFn);
           });
            }
        }
});
