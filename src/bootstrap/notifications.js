define(["require", "exports"], function (require, exports) {
    "use strict";
    var BootstrapAlerts = (function () {
        function BootstrapAlerts() {
        }
        BootstrapAlerts.prototype.showToast = function ($event) {
            if (!$event.target.classList.contains('btn'))
                return;
            $.notify({
                title: 'Admin UX',
                icon: $event.target.dataset.icon,
                message: 'A growl like toast notification!!'
            }, {
                type: $event.target.dataset.theme
            });
        };
        BootstrapAlerts.prototype.showAlert = function ($event) {
            if (!$event.target.classList.contains('btn'))
                return;
            if ($event.target.dataset.type == 'confirm') {
                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function (isConfirm) {
                    if (isConfirm) {
                        swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    }
                    else {
                        swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }
                });
            }
            else if ($event.target.dataset.type == 'prompt') {
                swal({
                    title: "An input!",
                    text: "Write something interesting:",
                    type: "input",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    animation: "slide-from-top",
                    inputPlaceholder: "Write something"
                }, function (inputValue) {
                    if (inputValue === false)
                        return false;
                    if (inputValue === "") {
                        swal.showInputError("You need to write something!");
                        return false;
                    }
                    swal("Nice!", "You wrote: " + inputValue, "success");
                });
            }
            else {
                swal("Admin UX", "This is a sweet alert!", $event.target.dataset.theme);
            }
        };
        return BootstrapAlerts;
    }());
    exports.BootstrapAlerts = BootstrapAlerts;
});
