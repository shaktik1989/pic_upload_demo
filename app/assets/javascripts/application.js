// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require dropzone
//= require_tree .

$(document).ready(function(){
  $(".file_upload_area").click(function(){
    $("#image_input").click();
  });

  $("#image_input").change(function(){
    for (var x = 0; x < this.files.length; x++) {
      add_image(this.files, x);
    }
  });

  function add_image(files, i) {
    var fr = new FileReader();
    fr.readAsDataURL( files[i]);
    console.log("decoded");
    setTimeout(function() {
      var element = "<img src='"+fr.result+"' class='image_tag' />";
      $(".file_upload_area").append(element);
    }, 20);
  }

  $("#images_form_check").change(function(){
    var is_checked = $("#images_form_check:checked").length>0;
    if(is_checked==true) {
      $(".submit_button").prop('disabled', false);
    } else {
      $(".submit_button").prop('disabled', true);
    }
  })

  $(".images_form").submit(function(e){
    var is_checked = $("#images_form_check:checked").length>0;
    if(is_checked==false) {
      $(".submit_button").prop('disabled', true);
      e.preventDefault();
    } else {
      $(".submit_button").prop('disabled', false);
    }
  });
});