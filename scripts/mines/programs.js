function mostrarDescripcion(id) {
    var modalId = "#modalPrograma" + id;
    var modal = new bootstrap.Modal(document.querySelector(modalId));
    modal.show();
}