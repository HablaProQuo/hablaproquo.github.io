    var imagen = "Img/fondo-oscuro.png"
    var barColor = "#2C2C2C";
    var menuColor = "white";
    var fondo = "#2C2C2C";
    
    var ajuste = "white"
    var idioma = "white"
    var bandera = "white"

        app.SetStatusBarColor( "#2C2C2C" );
        app.SetNavBarColor( "#2C2C2C" );
        
        theme = app.CreateTheme( "Dark" )
        theme.SetBackColor( barColor )

        app.SetTheme( theme )