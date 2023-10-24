var e ={
  toolTipFunc: function () {
        var tooltipTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    },
  quill: function () {
    var ql = e.select('#quilleditor');
    if (e.isVariableDefined(ql)) {
      var editor = new Quill('#quilleditor', {
        modules: { toolbar: '#quilltoolbar' },
        theme: 'snow'
      });
    }
  },
};
e.init();