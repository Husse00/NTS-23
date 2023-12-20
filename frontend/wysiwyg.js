// WYSIWYG
tinymce.init({
    selector: "#textContent",
    plugins: "code",
    toolbar:
      "undo redo | forecolor | backcolor | styles | bold italic | alignleft alignright | code",
  
    setup: function (editor) {
      editor.on("change", function () {
        editor.save();
      });
    },
  });