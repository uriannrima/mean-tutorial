// app.service('LogService', function () {
//     this.name = "Nome do Meu Serviço";
//     this.log = function (message) {
//         console.log('Log: ', message);
//     }
// });

app.factory('LogService', function ($interval) {
    // Interface do seu serviço
    return {
        nome: 'Service',
        log: function (message) {
            console.log('Log: ', message);
        },
        changeName: function (newName) {
            this.nome = newName;
        }
    };
});