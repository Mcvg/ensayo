    $(window).load(function () {
      $(".loader").fadeOut("slow");
    });

    function mo(){

	swal({ 
 title: "¿Está seguro que desea cerrar sesión?", 
 text: "No podrás deshacer este paso...", 
 type: "warning", 
 showCancelButton: true,
 cancelButtonText: "NO", 
 confirmButtonColor: "#DD6B55", 
 confirmButtonText: "SI", 
 closeOnConfirm: false }, 

 function(){ 
 window.location="inicioSesion.HTML"; 
 });

} 

 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mortificacion").style.marginLeft = "30%";
    document.getElementById("tituloUnion").style.marginLeft = "15%";
    document.getElementById("tituloInicio").style.marginLeft = "50%";
    document.getElementById("titulo").style.marginLeft = "15%";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mortificacion").style.marginLeft= "15%";
    document.getElementById("tituloInicio").style.marginLeft= "15%";
    document.getElementById("titulo").style.marginLeft= "0%";
}
