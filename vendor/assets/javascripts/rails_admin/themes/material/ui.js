//= require rails_admin/themes/material/bootstrap-material-design/material
//= require rails_admin/themes/material/bootstrap-material-design/ripples

var classes_sidebar = false;
var classes_content = false;

function toggleMenu( e ) {
  e.preventDefault();
  if( classes_sidebar ) {
    $('.sidebar-nav > .nav').animate( { width: 'toggle' }, 200 );
    $('.sidebar-nav').attr( 'class', classes_sidebar )
    $('.sidebar-nav ~ div').attr( 'class', classes_content );
    classes_sidebar = false;
    $('#btn-menu-wrapper > a').addClass( 'opened' );
    $('#btn-menu-wrapper i').attr( 'class', 'icon-chevron-left' );
  }
  else {
    $('.sidebar-nav > .nav').animate( { width: 'toggle' }, 200 );
    classes_sidebar = $('.sidebar-nav').attr( 'class' );
    classes_content = $('.sidebar-nav ~ div').attr( 'class' );
    $('.sidebar-nav').attr( 'class', 'sidebar-nav' );
    $('.sidebar-nav ~ div').attr( 'class', 'content-expanded' );
    $('#btn-menu-wrapper > a').removeClass( 'opened' );
    $('#btn-menu-wrapper i').attr( 'class', 'icon-chevron-right' );
  }
}

$(document).on('rails_admin.dom_ready', function(){
  $.material.init();
  if( !$('#btn-menu-wrapper').length ) {
    $('.sidebar-nav').prepend( '<div id="btn-menu-wrapper"><a href="#" class="btn btn-info btn-xs opened" onclick="Javascript:toggleMenu(event)"><i class="icon-chevron-left"></i></a></div>' );
  }
});
