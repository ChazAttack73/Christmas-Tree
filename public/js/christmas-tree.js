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

  var initialBranch = $( '<div>' );
    initialBranch
      .addClass( 'initialBranch')
      .text( '0' )
  ;
  $( mainTreeBox ).append( initialBranch );

  var initialDeco = $( '<div>' );
    initialDeco
      .addClass( 'initialDeco')
      .text( '*' )
  ;
  $( mainTreeBox ).append( initialDeco );

  for( var i = 0; i < 2; i++ ) {
    var treeBranches = $( '<div>' );
      treeBranches
        .addClass( 'treeBranches' )
    ;
    $( mainTreeBox ).append( treeBranches );

    var treeLeaves = $( '<div>' );
      treeLeaves
        .addClass( 'treeLeaves' )
    ;
    $( treeBranches ).append( treeLeaves );

    var treeDeco = $( '<div>' );
      treeDeco
        .addClass( 'treeDeco' )
    ;
    $( treeBranches ).append( treeDeco );

    var startLeaves = '0';
    var startDeco = '*';
    // for( var j = 0; j < 2; j++ ) {
    startLeaves = startLeaves += '00';
    startDeco = startDeco += '~*';
    $( treeLeaves ).append( startLeaves );
    $( startLeaves ).html( '<br/>' );
    $( treeDeco ).append( startDeco );
    // }
  }


  var treeStump = $( '<div>' );
    treeStump
      .addClass( 'treeStump' )
      .text( '||||' )
  ;
  $( mainTreeBox ).append( treeStump );

});