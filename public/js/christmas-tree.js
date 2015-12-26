$(function(){

  var mainTreeBox = $( '<div>' );
    mainTreeBox
      .addClass( 'mainTreeBox' )
  ;
  $(document.body).append( mainTreeBox );


  var treeStar = $( '<div>' );
    treeStar
      .addClass( 'treeStar')
      .text( '*' )
  ;
  $( mainTreeBox ).append( treeStar );

  var firstBranch = '0';
    for ( var i = 0; i < 10; i++ ) {

      firstBranch += '00';

      var treeBranches = $( '<div>' );
        treeBranches
          .addClass( 'treeBranches' )
          .text( firstBranch )
      ;
      $( mainTreeBox ).append( treeBranches );
      // $( treeBranches ).text( firstBranch += nextBranch );
      // firstBranch = nextBranch;
    }

  var treeStump = $( '<div>' );
    treeStump
      .addClass( 'treeStump' )
      .text( '||' )
  ;
  $( mainTreeBox ).append( treeStump );

});