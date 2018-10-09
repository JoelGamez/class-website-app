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

//= require jquery3
//= require rails-ujs
//= require activestorage

//= require_tree



$(document).ready(function() {
  $('.datepicker').datepicker();
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();
  $('.scrollspy').scrollSpy();
  $('.materialboxed').materialbox();
  $('.tap-target').tapTarget();
  $('.dropdown-trigger').dropdown();
  // $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
   fullWidth: true,
   indicators: true
  });


  $(".log").hide("slow");
  $("#icon_prefix").click(function() {
   if ($("#icon_prefix").val() == "neverstoplearning"){
     $(".admin").hide();
     $( ".log" ).show( 2000 );
   }
   });

   $("#about_edit").hide("slow");
   $(".edit_about").click(function() {

      $( "#about_edit" ).show( 2000 );
    });


 });
