// jquery.twitch.js
// @jsantell (c) 2012

;(function( $ ) {

  $.fn.twitch = function ( options ) {
    options = $.extend( {}, $.fn.twitch.defaults, options );

    return this.each(function () {
      var $this = $( this );
      $this.hover(function () {
        $this.data( '_twitch', true );
        twitch.call( $this );
      }, function () {
        $this
          .data( '_twitch', false )
          .css( 'text-shadow', '' );
      });
    });

    function twitch () {
      var
        $this = this,
        rX    = randomBetween( -options.displacement, options.displacement ),
        rY    = randomBetween( -options.displacement, options.displacement ),
        style = rX + 'px ' + rY + 'px 0 ' + options.color1 + ', ' + ( -rX ) + 'px ' + ( -rY ) + 'px 0 ' + options.color2;

      setTimeout(function () {
        $this.css( 'text-shadow', style );
        $this.data( '_twitch' ) ? twitch.call( $this ) : $this.css( 'text-shadow', '' );
      }, options.speed );
    }
  };

  function randomBetween ( min, max ) {
    return parseInt( Math.random() * ( max - min ), 10 ) + min;
  }

  $.fn.twitch.defaults = {
    displacement  : 5,
    speed         : 50,
    color1        : '#ff0077',
    color2        : '#04dbe5'
  };

})( jQuery );
