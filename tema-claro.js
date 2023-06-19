    var imagen = "Img/fondo-claro.png"
    var barColor = "#f68704";
    var menuColor = "white";
    var fondo = "white";
    
    var ajuste = "black"
    var idioma = "black"
    var bandera = "black"

        app.SetStatusBarColor( "#f68704" );
        app.SetNavBarColor( "#f68704" );
        
        theme = app.CreateTheme( "Light" );
        theme.AdjustColor( 35, 0, -10 );
        theme.SetBackColor( "#f68704" );
        theme.SetBtnTextColor( "black" );
        theme.SetButtonOptions( "custom" );
        theme.SetButtonStyle( "white","white",2,"#999999",0,1,"#ff9000" );
        theme.SetCheckBoxOptions( "dark" );
        theme.SetTextEditOptions( "underline" );
        theme.SetDialogColor( "#ffffffff" );
        theme.SetDialogBtnColor( "#ffeeeeee" );
        theme.SetDialogBtnTxtColor( "#ff666666" );
        theme.SetTitleHeight( 42 );
        theme.SetTitleColor( "#ff888888" ); 
        theme.SetTitleDividerColor( "#ff0099CC" );
        theme.SetTextColor( "#ff666666" );
        app.SetTheme( theme );