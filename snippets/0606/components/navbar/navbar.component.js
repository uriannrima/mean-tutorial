app.component('meanNavbar', {
    templateUrl: './components/navbar/navbar.template.html',
    controller: function (LogService) {
        var vm = this;
        this.param = 'first';
        this.isOpen = false;

        this.toggle = function () {
            LogService.log('Toggle called.');
            this.isOpen = !this.isOpen;
        }

        this.close = function () {
            this.isOpen = false;
        }

        this.onItemClick = function (item) {
            this.close();
            this.onShurasowaka({ item: item });
        }
    },
    bindings: {
        brand: '@', // @ => String que vem DOM
        items: '<?', // < => One way binding para dentro do component
        user: '=?', // = => Two way binding para dentro do componente
        onShurasowaka: '&' // & => Evento para fora do componente
    }
});