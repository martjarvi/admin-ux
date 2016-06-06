define(["require", "exports"], function (require, exports) {
    "use strict";
    var Application = (function () {
        function Application() {
            this.routes = [{
                    title: 'Home',
                    icon: 'fi-lined-home',
                    href: '/home',
                    cls: 'ux-route-home'
                }, {
                    title: 'Dashboard',
                    icon: 'fi-lined-television-2',
                    href: '/dashboard',
                    cls: 'ux-route-dashboard'
                }, {
                    title: 'Form Elements',
                    icon: 'fi-lined-codings',
                    href: '/forms',
                    cls: 'ux-route-form',
                    children: [{
                            title: 'Basic',
                            href: 'basic'
                        }, {
                            title: 'Buttons',
                            href: 'buttons'
                        }, {
                            title: 'Select',
                            href: 'select'
                        }, {
                            title: 'Checkboxes',
                            href: 'checkboxes'
                        }, {
                            title: 'Date/Time',
                            href: 'datetime'
                        }]
                }, {
                    title: 'Components',
                    icon: 'fi-lined-layers',
                    href: '/components',
                    cls: 'ux-route-components',
                    children: [{
                            title: 'Bootstrap UI',
                            href: 'bootstrap'
                        }, {
                            title: 'Alerts & Notifications',
                            href: 'notifications'
                        }, {
                            title: 'Cards',
                            href: 'cards'
                        }]
                }, {
                    title: 'Charts',
                    icon: 'fi-lined-presentation',
                    href: '/charts',
                    cls: 'ux-route-charts',
                    children: [{
                            title: 'Column',
                            href: 'column'
                        }, {
                            title: 'Bar',
                            href: 'bar'
                        }, {
                            title: 'Area',
                            href: 'area'
                        }, {
                            title: 'Pie',
                            href: 'pie'
                        }, {
                            title: 'Gauge',
                            href: 'gauge'
                        }]
                }];
            this.user = {
                username: 'user@domain.com',
                firstName: 'User',
                lastName: 'Name',
                mails: [{
                        user: 'Username',
                        postTime: moment()
                            .add(-4, 'hour'),
                        subject: 'Sales meeting minutes amendment #36'
                    }, {
                        user: 'Username',
                        postTime: moment()
                            .add(-7, 'hour'),
                        subject: 'Sales meeting minutes amendment #31'
                    }, {
                        read: true,
                        user: 'Username',
                        postTime: moment()
                            .add(-11, 'hour'),
                        subject: 'Sales meeting minutes amendment #24'
                    }, {
                        read: true,
                        user: 'Username',
                        postTime: moment()
                            .add(-18, 'hour'),
                        subject: 'Sales meeting minutes amendment #18'
                    }],
                messages: [{
                        read: false,
                        avatar: 'none',
                        postTime: moment()
                            .add(-2, 'hour'),
                        message: '[@user](javascript:;) has just posted a comment on [Sales Meeting - #36](javascript:;)'
                    }, {
                        read: false,
                        avatar: 'none',
                        postTime: moment()
                            .add(-6, 'hour'),
                        message: '[@user](javascript:;) has just posted a comment on [Sales Meeting - #31](javascript:;)'
                    }, {
                        read: false,
                        avatar: 'none',
                        postTime: moment()
                            .add(-9, 'hour'),
                        message: '[@user](javascript:;) has just posted a comment on [Sales Meeting - #24](javascript:;)'
                    }, {
                        read: true,
                        avatar: 'none',
                        postTime: moment()
                            .add(-13, 'hour'),
                        message: '[@user](javascript:;) has just posted a comment on [Sales Meeting - #18](javascript:;)'
                    }, {
                        read: true,
                        avatar: 'none',
                        postTime: moment()
                            .add(-27, 'hour'),
                        message: '[@user](javascript:;) has just posted a comment on [Sales Meeting - #9](javascript:;)'
                    }]
            };
        }
        Application.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Admin UX';
            config.map([{
                    route: 'home',
                    moduleId: './home/view',
                    name: 'home'
                }, {
                    route: 'components.bootstrap',
                    moduleId: './bootstrap/view',
                    name: 'components.bootstrap'
                }, {
                    route: 'components.notifications',
                    moduleId: './bootstrap/notifications',
                    name: 'components.notifications'
                }, {
                    route: 'components.cards',
                    moduleId: './bootstrap/cards',
                    name: 'components.cards'
                }, {
                    route: 'forms.basic',
                    moduleId: './forms/basic',
                    name: 'forms.basic'
                }, {
                    route: '',
                    redirect: 'home'
                }]);
        };
        Application.prototype.attached = function () {
            $('#btnMessages')
                .popover({
                html: true,
                content: $('#popoverMessages'),
                template: '<div class="popover ux-popover-messages" role="tooltip">' + '<div class="popover-content"></div></div>'
            });
            $('#btnMails')
                .popover({
                html: true,
                content: $('#popoverMails'),
                template: '<div class="popover ux-popover-messages" role="tooltip">' + '<div class="popover-content"></div></div>'
            });
        };
        Application.prototype.activeRoute = function (route) {
            if (!this.router || !this.router.currentInstruction)
                return '';
            return this.router.currentInstruction.fragment.replace('/', '');
        };
        Application.prototype.resetElements = function ($event) {
            if (!$event.target.parentElement.classList.contains('ux-search-bar'))
                this.__searchForm.classList.remove('show-search');
        };
        Application.prototype.toggleMenu = function ($event) {
            $event.cancelBubble = true;
            $event.preventDefault();
            this.__element.classList.toggle('show-menu');
            this.__element.classList.remove('show-general-menu');
        };
        Application.prototype.toggleGeneralMenu = function ($event) {
            $event.cancelBubble = true;
            $event.preventDefault();
            this.__element.classList.remove('show-menu');
            this.__element.classList.toggle('show-general-menu');
        };
        Application.prototype.closeMenus = function ($event) {
            $event.cancelBubble = true;
            $event.preventDefault();
            this.__element.classList.remove('show-menu');
            this.__element.classList.remove('show-general-menu');
        };
        Application.prototype.search = function ($event) {
            $event.cancelBubble = true;
            $event.preventDefault();
            var searchable = this.__searchForm.classList.contains('show-search');
            if (searchable) {
            }
            else {
                this.__searchForm.classList.add('show-search');
                this.__searchInput.focus();
            }
        };
        return Application;
    }());
    exports.Application = Application;
});
