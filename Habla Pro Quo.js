    var webOptions = "IgnoreErrors,AllowCapture,AllowLocate";
    var orient = app.GetOrientation();
    var barColor = "#f68704";
    var menuColor = "white";
    var url="index.html"

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


function OnStart() {
    app.SetStatusBarColor( "#f68704" );
    app.SetNavBarColor( "#f68704" );
    app.EnableBackKey( false );
    app.PreventScreenLock(true);
	app.SetOrientation("Portrait");  
	app.SetVolume("music", "10", "");


    // Analytics
    function _0x4f79(_0x1caa1d,_0x457f56){var _0x568c31=_0x568c();return _0x4f79=function(_0x4f790f,_0x5a0ea6){_0x4f790f=_0x4f790f-0x9e;var _0x3a3756=_0x568c31[_0x4f790f];return _0x3a3756;},_0x4f79(_0x1caa1d,_0x457f56);}var _0x4ee65c=_0x4f79;function _0x568c(){var _0x1362ed=['1088216ETSkPX','200025bgTsLb','Habla\x20Pro\x20Quo','926394heWSfQ','132776zHwqNF','create','GetVersion','356187JPHICE','UA-168108945-1','main','send','4cfOAaj','123676yBMVrz','168496PmthAy','screenview'];_0x568c=function(){return _0x1362ed;};return _0x568c();}(function(_0x21c58c,_0x5dd4d4){var _0x187ba6=_0x4f79,_0x5e281c=_0x21c58c();while(!![]){try{var _0x288fe3=parseInt(_0x187ba6(0xa7))/0x1+parseInt(_0x187ba6(0xa6))/0x2+-parseInt(_0x187ba6(0xa1))/0x3*(-parseInt(_0x187ba6(0xa5))/0x4)+parseInt(_0x187ba6(0xaa))/0x5+-parseInt(_0x187ba6(0xac))/0x6+parseInt(_0x187ba6(0x9e))/0x7+-parseInt(_0x187ba6(0xa9))/0x8;if(_0x288fe3===_0x5dd4d4)break;else _0x5e281c['push'](_0x5e281c['shift']());}catch(_0x3afdbf){_0x5e281c['push'](_0x5e281c['shift']());}}}(_0x568c,0x1cb6a));var ver=app[_0x4ee65c(0xa0)]();app['GA'](_0x4ee65c(0x9f),_0x4ee65c(0xa2)),app['GA'](_0x4ee65c(0xa4),_0x4ee65c(0xa8),{'appName':_0x4ee65c(0xab),'appVersion':ver,'screenName':_0x4ee65c(0xa3)});
/*
	var ver = app.GetVersion();
	app.GA( "create", "UA-XXXXXXXXX-1" );
	app.GA( "send", "screenview", 
	    {"appName":"Habla Pro Quo","appVersion":ver,"screenName":"main"});
*/

    // Formato
	main = app.CreateLayout( "linear", "VCenter,FillXY" );	


    // Crear barra
    actionBar = app.CreateLayout( "Linear", "Horizontal,FillX,Left" );
    actionBar.SetBackColor( barColor );
    main.AddChild( actionBar );
    
    
    //Crear boton del desplegable
    barMenu = app.CreateText( "[fa-bars]", -1,-1, "FontAwesome" );
    barMenu.SetPadding( 12,10,12,10, "dip" );
    barMenu.SetTextSize( 28 );
    barMenu.SetTextColor( "#eeeeee" );
    barMenu.SetOnTouchUp( desplegable);
    actionBar.AddChild( barMenu );
    
    
    // Orientacion
    barTitleLayout = app.CreateLayout( "Linear", "Horizontal" );
    barTitleLayout.SetSize( orient=="Portrait" ? 0.7 : 0.8 );
    actionBar.AddChild( barTitleLayout );
    
    
    // Texto en barra
    barTitle = app.CreateText( "Habla Pro Quo", -1,-1, "Left" );
    barTitle.SetMargins(0,10,0,0,"dip");
    barTitle.SetTextSize( 22 );
    barTitle.SetTextColor( "#ffffff" );
    barTitleLayout.AddChild( barTitle );
	
	
	// Cargar html
	web = app.CreateWebView( 1, true?0.95:1, webOptions );
	web.LoadUrl( url );
	web.SetUserAgent( navigator.userAgent + ",appysite" );
	main.AddChild( web );
	
	
	app.AddLayout( main );
	
// Crear menu desplegable
	CreateDrawer();
	
	// Cargar diseno	
	app.AddLayout( barTitleLayout );
	app.AddDrawer( drawerScroll, "Left", drawerWidth );

}


// Funcion salir
function OnBack() {
    var sino = app.CreateYesNoDialog( "¿Desea salir de Habla Pro Quo?" );
    sino.SetButtonText( "Si","No" );
    sino.SetOnTouch(function(result){ if(result=="Yes") app.Exit(); } );
    sino.Show();
    }


// Menu desplegable
function CreateDrawer() {
    // Propiedades
    drawerWidth = 0.70;
    drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" );
    drawerScroll.SetBackColor( "White" );
	layDrawer = app.CreateLayout( "Linear", "Left" );
	drawerScroll.AddChild( layDrawer );
	
	
	// Banner
	layDrawerTop = app.CreateLayout( "Absolute" );
	layDrawerTop.SetBackground( "Img/fondo.png" );
	layDrawerTop.SetSize( drawerWidth );
	layDrawer.AddChild( layDrawerTop );	
	
	
	// Icono
	var img = app.CreateImage( "Img/logo.png", 0.15 );
	img.SetPosition( drawerWidth*0.06, 0.04 );
	layDrawerTop.AddChild( img );
	
	
	// Nombre
	var txtUser = app.CreateText( "Habla Pro Quo",-1,-1,"Bold");
	txtUser.SetPosition( drawerWidth*0.07, 0.155 );
	txtUser.SetTextColor( "White" );
	txtUser.SetTextSize( 13.7, "dip" );
	layDrawerTop.AddChild( txtUser );
	
	
	// Propiedades del menu
	var layMenu = app.CreateLayout( "Linear", "Left" );
	layDrawer.AddChild( layMenu );
	
	
    // Añadir primera lista al menu
    lstMenu2 = app.CreateList( "Inicio::[fa-home],Predeterminado::[fa-user],Calificar::[fa-star],GitHub::[fa-github]", drawerWidth, -1, "Menu,Expand" );
    lstMenu2.SetColumnWidths( -1, 0.35, 0.18 );
    lstMenu2.SetOnTouch( funcion );
    layMenu.AddChild( lstMenu2 );
    
        
    // Añadir linea al menu
    var sep = app.CreateImage( null, drawerWidth,0.001,"fix", 2,2 );
    sep.SetSize( -1, 1, "px" );
    sep.SetColor( "#cccccc" );
    layMenu.AddChild( sep );
    
    
    // Añadir texto al menu 
	txtTitle = app.CreateText( "Idiomas" ,-1,-1,"Left");
	txtTitle.SetTextColor( "#666666" );
	txtTitle.SetMargins( 16,12,0,0, "dip" );
	txtTitle.SetTextSize( 14, "dip" );
	layMenu.AddChild( txtTitle );


    // Añadir teercero lista al menu
    var listItems = "Español::[fa-flag-o],English::[fa-flag-o],Deutsch::[fa-flag-o],日本::[fa-flag-o],中国::[fa-flag-o],Português::[fa-flag-o],Français::[fa-flag-o],Indonesio::[fa-flag-o],हिन्दी::[fa-flag-o],Melayu::[fa-flag-o],Tagalog::[fa-flag-o],ไทย::[fa-flag-o],Tiếng Việt::[fa-flag-o]";
    lstMenu1 = app.CreateList( listItems, drawerWidth, -1, "Menu,Expand" );
    lstMenu1.SetColumnWidths( -1, 0.35, 0.18 );
    lstMenu1.SetOnTouch( idioma );
    layMenu.AddChild( lstMenu1 );
    
    
    // Burbuja	
    tgl = app.CreateToggle( "Burbuja");
    tgl.SetOnTouch( img_aparece );
    layMenu.AddChild( tgl );
}



// Abrir desplegable
function desplegable() {
    app.OpenDrawer( "Left" );
    }


// Cambiar de idioma
function idioma( title, body, type, index ) {
    title = title.replace(/Home/gi,'menu');
    title = title.replace(/Español/gi,'espanol');
    title = title.replace(/English/gi,'ingles');
    title = title.replace(/Deutsch/gi,'aleman');
    title = title.replace(/日本/gi,'japones');
    title = title.replace(/中国/gi,'chino');
    title = title.replace(/Português/gi,'portugues');
    title = title.replace(/Français/gi,'francais');
    title = title.replace(/Indonesio/gi,'indonesio');
    title = title.replace(/हिन्दी/gi,'hindi');
    title = title.replace(/Melayu/gi,'malayo');
    title = title.replace(/Tagalog/gi,'tagalo');
    title = title.replace(/ไทย/gi,'tailandes');
    title = title.replace(/Tiếng Việt/gi,'vietnam');



    app.CloseDrawer( "Left" );
    web.LoadUrl( title + ".html");
}


// Funciones de la barra
function funcion( title, body, type, index ) {
    title = title.replace(/Inicio/gi,'inicio');
    title = title.replace(/Predeterminado/gi,'predeterminados');
    title = title.replace(/Calificar/gi,'calificar');
    title = title.replace(/GitHub/gi,'github');
    
    setTimeout(title + '()',1);
    }
    
    
// GitHub
function github() {
    app.OpenUrl("https://github.com/HablaProQuo/hablaproquo.github.io");
    }


// Funcion para calificar
function calificar() {
    app.OpenUrl("https://play.google.com/store/apps/details?id=com.hablaproquo");
    }


// Funcion para ir a inicio
function inicio() {
    app.CloseDrawer( "Left" );
    web.LoadUrl( "index.html");
    }


// Funcion para preguntar predeterminado
function predeterminados() {
    app.CloseDrawer( "Left" );

    var x = app.GetLanguage();
    var todo="Device/" + x
    
    dlg = app.CreateDialog( "Seleccione un idioma predeterminado." );
    dlg.SetTitleColor( "#ffffff" )
    dlg.SetBackColor( "#f68704", 5 )
    
    layDlg = app.CreateLayout( "linear", "vertical,fillxy,left" );
    layDlg.SetMargins( 0,0,0,0.01 )
    dlg.AddLayout( layDlg );

    var list = "Inicio,Español,English,Deutsch,日本,中国,Português,Français,Indonesio,हिन्दी,Melayu,Tagalog,ไทย,Tiếng Việt," + todo;
    
    lst = app.CreateList( list, 0.8, 0.35 );
    lst.SetTextColor( "#ffffff" );
    lst.SetOnTouch( afirmacion );
    layDlg.AddChild( lst );
    
    dlg.Show();
    }


// Afirmar la funcion de la pregunta
function afirmacion( item ) {
    dlg.Hide();
    var x = app.GetLanguage();
    var todo="Device/" + x
    
    if (item===todo) {
        app.WriteFile( '/sdcard/Hablaproquo/predeterminado.txt', 'predeterminado="multi.html"' );
        } else {
            item = item.replace(/Inicio/gi,'menu');
            item = item.replace(/Español/gi,'espanol');
            item = item.replace(/English/gi,'ingles');
            item = item.replace(/Deutsch/gi,'aleman');
            item = item.replace(/日本/gi,'japones');
            item = item.replace(/中国/gi,'chino');
            item = item.replace(/Português/gi,'portugues');
            item = item.replace(/Français/gi,'francais');
            item = item.replace(/Indonesio/gi,'indonesio');
            item = item.replace(/हिन्दी/gi,'hindi');
            item = item.replace(/Melayu/gi,'malayo');
            item = item.replace(/Tagalog/gi,'tagalo');
            item = item.replace(/ไทย/gi,'tailandes');
            item = item.replace(/Tiếng Việt/gi,'vietnam');
            item = item.replace(/Multi/gi,'multi');
            
            app.WriteFile( '/sdcard/Hablaproquo/predeterminado.txt', 'predeterminado="' + item + '.html"' );
            }
        }


// Boton para imagen flotante
	ovl = app.CreateOverlay();
	 
	layHead = app.CreateLayout( "Absolute" );
	
    imgHead = app.CreateImage( "Img/flotante.png", 0.2 );
    imgHead.SetOnTouch( img_OnTouch );
    layHead.AddChild( imgHead );
    
    chatLeft = 0.1; chatTop = 0.1;


// Funcion para aparecer la imagen flotante
function img_aparece( isChecked ) {
    if( isChecked ) {
        ovl.AddLayout( layHead, chatLeft, chatTop );
    } else ovl.RemoveLayout( layHead );
}


// Funcion de la imagen flotante
function img_OnTouch( ev ) {
    if( ev.action=="Down" )  {
        headX = chatLeft; headY = chatTop;
        
        startX = ev.screenX; startY = ev.screenY;
        dx = 0; dy = 0;
    }
    
    else if( ev.action=="Move" )  {
        dx = ev.screenX - startX;
        dy = ev.screenY - startY;
        
        chatLeft = headX+dx; chatTop = headY+dy;
        ovl.SetPosition( layHead, chatLeft, chatTop )
    }
    
    else if( ev.action=="Up" )  {
        if( Math.abs(dx) < 0.100 ) 	
    var action = "android.intent.action.MAIN";
    app.SendIntent( "com.hablaproquo", "com.smartphoneremote.androidscriptfree.AndroidScriptFree", action ); 
    }}