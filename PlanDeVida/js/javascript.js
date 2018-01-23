$(window).load(function () {
    $(".loader").fadeOut("slow");
});

function mo() {

    swal({
        title: "¿Está seguro que desea cerrar sesión?",
        text: "No podrás deshacer este paso...",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "NO",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "SI",
        closeOnConfirm: false
    },

        function () {
            window.location = "inicioSesion.HTML";
        });

}

function openNav() {
    var clase = document.getElementsByClassName("contenido");
    var id;
    for (id = 0; id < clase.length; id++) {
        clase[id].style.marginLeft = "25%";
        clase[id].style.width = "70%";
    }
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    var clase = document.getElementsByClassName("contenido");
    var id;
    for (id = 0; id < clase.length; id++) {
        clase[id].style.marginLeft = "10%";
        clase[id].style.width = "80%";
    }
    document.getElementById("mySidenav").style.width = "0";
}
