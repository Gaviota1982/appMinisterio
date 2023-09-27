const areaRegiones = document.querySelectorAll('map>area');
const seccionMapa = document.querySelector('.main');

areaRegiones.forEach((mapas) =>{
    mapas.addEventListener('mouseover', (e)=> {
        setTimeout(()=>{
            let valor = Math.floor(Math.random()*9);
            console.log(valor);
            switch (valor) {
                case 1:
                    window.location ="../html/oeste.html";
                    break;
                case 2:
                    window.location ="../html/centroOeste.html";
                break;
                case 3:
                     window.location ="../html/centralNorte.html";
                    break;
                case 4:
                    window.location ="../html/centralSur.html";
                    break;
                case 5:
                    window.location ="../html/subtropical.html";
                break;
                case 6:
                    window.location ="../html/piraneNorte.html";
                    break;
                case 7:    
                    window.location ="../html/piraneSur.html";
                    break;
                case 8:
                    window.location ="../html/litoral.html";
                    break;
                default:
                    break;
            }
        },"500000");
    });
});