const form = $("#suscribeForm");
const formGroups = form.find(".form-group");
const formControl = formGroups.find(".form-control");

$("#submit").click(function(){

  const error = Math.random() > 0.5;
  formGroups.removeClass().addClass("form-group");
  formControl.removeClass().addClass("form-control")
  formGroups.addClass(error ? "has-danger" : "has-success");
  formControl.addClass(error ? "form-control-danger" : "form-control-success");
  formGroups.find(".form-control-feedback").remove();

  var el;
  if (error) {
    el = $("<div>",{html: "Ha ocurrado un error."});
  }else {
    el = $("<div>",{html: "Te enviaremos todas la novedades."});
  }

  el.addClass("form-control-feedback");
  formGroups.append(el);
});


function mostrarModal(){
  if (!JSON.parse(localStorage.noMostrarModal)) {
    $("#modalOferta").modal();
  }

  $("#btnNoRegistrar").click(function(){
    localStorage.noMostrarModal = true;
  });
}
