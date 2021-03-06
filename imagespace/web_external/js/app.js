imagespace.App = girder.App.extend({

    render: function() {
        this.$el.html(imagespace.templates.layout());

        new imagespace.views.LayoutHeaderView({
            el: this.$('#im-app-header-container'),
            parentView: this
        }).render();

        imagespace.userDataView = new imagespace.views.LayoutUserDataView({
            el: this.$('#im-app-user-data-container'),
            parentView: this
        }).render();

        return this;
    },

    navigateTo: function (view, settings) {
        console.log(view);
        console.log(settings);

        this.$('.im-nav-li').removeClass('active');

        // this.$('#g-app-body-container').removeClass('c-body-nopad');
        return girder.App.prototype.navigateTo.apply(this, arguments)
    }
});
