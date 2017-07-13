export default function LayoutController() {
    var vm = this;
    vm.navbarItems = [
        {
            label: "Home",
            link: "/"
        }, {
            label: "Todos",
            link: "/todos"
        }
    ];
}