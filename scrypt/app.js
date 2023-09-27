const areaRegiones = document.querySelectorAll('map>area');
const seccionMapa = document.querySelector('.main');

//Recorro la etiqueta map de las regiones
areaRegiones.forEach((mapas) =>{
    mapas.addEventListener('mouseover', (e)=> {
        // console.log(e.target.className);

        buscarImagenes(e.target.className);
    });
    mapas.addEventListener('mouseout', (e)=> {
       
        let nombreClase= e.target.className;
        
        // console.log("Estoy en mouseouteover");
        buscarImagenes(e.target.className);
    });
});
//Reemplazo la className de las imagenes del mapa 
function remplazarClaseRegiones(nombreClase){
    // console.log(nombreClase +" En funcin remplazarClaseRgion");
    

}

function buscarImagenes(nombreClaseArea){
    
    if (nombreClaseArea=="areaMacroOeste") {
        
        const area= document.querySelectorAll('.areaMacroOeste');
        console.log(area[0].style);
        
        // area[0].style.display="flex";
        // area[0].style.position="absolute";
        // area[0].style.color="black";
        // area[0].style.width="100%";

        // seccionMapa

        // remplazarClaseRegiones(nombreRegion);
        
    } else if(nombreClaseArea=="areaMacroCentro_Oeste"){
        console.log(nombreClaseArea+ " elseif2 en buscar área")
        
        let nombreRegion="areaMacroCentro_Oeste;"
        remplazarClaseRegiones(nombreRegion);
        
    }else{
        console.log( " else en buscar área")
       
    }
    


    // imgRegiones.forEach((imagenes) =>{

    //     if (imagenes = nombreClaseArea) {
    //         console.log(imagenes.className + " if en buscar área")
            
    //     } else {
    //         console.log(imagenes.className + " else en buscar área")
    //         // imagenes.className
    //     }

    // });
};
