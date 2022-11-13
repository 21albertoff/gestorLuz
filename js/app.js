console.log('%c' + 'Hecho por Alberto Fuentes', 'font-family:Comic Sans MS; font-size:20px; font-weight:bold; background: linear-gradient(#f00, yellow); border-radius: 5px; padding: 20px')

const getDateWithAPI = () => {
    const hoy = new Date();
    const fechaHoy = hoy.getFullYear() + "-"+ (hoy.getMonth()+1)+ "-" +hoy.getDate();
    return `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${fechaHoy}T00:00&end_date=${fechaHoy}T23:59&time_trunc=hour`;
}

const getNowHour = () => {
    const hoy = new Date();
    return hoy.getHours();
}

const getFechaActual = () => {
    const hoy = new Date();
    const fechaHoy = hoy.getDate() + "/"+ (hoy.getMonth()+1)+ "/" +hoy.getFullYear();
    return fechaHoy;
}

const fetchData = async (stringAPI, hora, fechaHoy) => {
    try {
        const res = await fetch(`${stringAPI}`);  
        const data = await res.json();

        const precioMedio = ((((data.included[0].attributes.values[0].value)/1000)+
        ((data.included[0].attributes.values[1].value)/1000)+
        ((data.included[0].attributes.values[2].value)/1000)+
        ((data.included[0].attributes.values[3].value)/1000)+
        ((data.included[0].attributes.values[4].value)/1000)+
        ((data.included[0].attributes.values[5].value)/1000)+
        ((data.included[0].attributes.values[6].value)/1000)+
        ((data.included[0].attributes.values[7].value)/1000)+
        ((data.included[0].attributes.values[8].value)/1000)+
        ((data.included[0].attributes.values[9].value)/1000)+
        ((data.included[0].attributes.values[10].value)/1000)+
        ((data.included[0].attributes.values[11].value)/1000)+
        ((data.included[0].attributes.values[12].value)/1000)+
        ((data.included[0].attributes.values[13].value)/1000)+
        ((data.included[0].attributes.values[14].value)/1000)+
        ((data.included[0].attributes.values[15].value)/1000)+
        ((data.included[0].attributes.values[16].value)/1000)+
        ((data.included[0].attributes.values[17].value)/1000)+
        ((data.included[0].attributes.values[18].value)/1000)+
        ((data.included[0].attributes.values[19].value)/1000)+
        ((data.included[0].attributes.values[20].value)/1000)+
        ((data.included[0].attributes.values[21].value)/1000)+
        ((data.included[0].attributes.values[22].value)/1000)+
        ((data.included[0].attributes.values[23].value)/1000))/24).toFixed(4);

        const precioMax = (Math.max(((data.included[0].attributes.values[0].value)/1000),
        ((data.included[0].attributes.values[1].value)/1000),
        ((data.included[0].attributes.values[2].value)/1000),
        ((data.included[0].attributes.values[3].value)/1000),
        ((data.included[0].attributes.values[4].value)/1000),
        ((data.included[0].attributes.values[5].value)/1000),
        ((data.included[0].attributes.values[6].value)/1000),
        ((data.included[0].attributes.values[7].value)/1000),
        ((data.included[0].attributes.values[8].value)/1000),
        ((data.included[0].attributes.values[9].value)/1000),
        ((data.included[0].attributes.values[10].value)/1000),
        ((data.included[0].attributes.values[11].value)/1000),
        ((data.included[0].attributes.values[12].value)/1000),
        ((data.included[0].attributes.values[13].value)/1000),
        ((data.included[0].attributes.values[14].value)/1000),
        ((data.included[0].attributes.values[15].value)/1000),
        ((data.included[0].attributes.values[16].value)/1000),
        ((data.included[0].attributes.values[17].value)/1000),
        ((data.included[0].attributes.values[18].value)/1000),
        ((data.included[0].attributes.values[19].value)/1000),
        ((data.included[0].attributes.values[20].value)/1000),
        ((data.included[0].attributes.values[21].value)/1000),
        ((data.included[0].attributes.values[22].value)/1000),
        ((data.included[0].attributes.values[23].value)/1000))).toFixed(4);

        const precioMin = (Math.min(((data.included[0].attributes.values[0].value)/1000),
        ((data.included[0].attributes.values[1].value)/1000),
        ((data.included[0].attributes.values[2].value)/1000),
        ((data.included[0].attributes.values[3].value)/1000),
        ((data.included[0].attributes.values[4].value)/1000),
        ((data.included[0].attributes.values[5].value)/1000),
        ((data.included[0].attributes.values[6].value)/1000),
        ((data.included[0].attributes.values[7].value)/1000),
        ((data.included[0].attributes.values[8].value)/1000),
        ((data.included[0].attributes.values[9].value)/1000),
        ((data.included[0].attributes.values[10].value)/1000),
        ((data.included[0].attributes.values[11].value)/1000),
        ((data.included[0].attributes.values[12].value)/1000),
        ((data.included[0].attributes.values[13].value)/1000),
        ((data.included[0].attributes.values[14].value)/1000),
        ((data.included[0].attributes.values[15].value)/1000),
        ((data.included[0].attributes.values[16].value)/1000),
        ((data.included[0].attributes.values[17].value)/1000),
        ((data.included[0].attributes.values[18].value)/1000),
        ((data.included[0].attributes.values[19].value)/1000),
        ((data.included[0].attributes.values[20].value)/1000),
        ((data.included[0].attributes.values[21].value)/1000),
        ((data.included[0].attributes.values[22].value)/1000),
        ((data.included[0].attributes.values[23].value)/1000))).toFixed(4);

        const precioActual = ((data.included[0].attributes.values[hora].value)/1000).toFixed(4);

        const precio0 = ((data.included[0].attributes.values[0].value)/1000).toFixed(3);
        const precio1 = ((data.included[0].attributes.values[1].value)/1000).toFixed(3);
        const precio2 = ((data.included[0].attributes.values[2].value)/1000).toFixed(3);
        const precio3 = ((data.included[0].attributes.values[3].value)/1000).toFixed(3);
        const precio4 = ((data.included[0].attributes.values[4].value)/1000).toFixed(3);
        const precio5 = ((data.included[0].attributes.values[5].value)/1000).toFixed(3);
        const precio6 = ((data.included[0].attributes.values[6].value)/1000).toFixed(3);
        const precio7 = ((data.included[0].attributes.values[7].value)/1000).toFixed(3);
        const precio8 = ((data.included[0].attributes.values[8].value)/1000).toFixed(3);
        const precio9 = ((data.included[0].attributes.values[9].value)/1000).toFixed(3);
        const precio10 = ((data.included[0].attributes.values[10].value)/1000).toFixed(3);
        const precio11 = ((data.included[0].attributes.values[11].value)/1000).toFixed(3);
        const precio12 = ((data.included[0].attributes.values[12].value)/1000).toFixed(3);
        const precio13 = ((data.included[0].attributes.values[13].value)/1000).toFixed(3);
        const precio14 = ((data.included[0].attributes.values[14].value)/1000).toFixed(3);
        const precio15 = ((data.included[0].attributes.values[15].value)/1000).toFixed(3);
        const precio16 = ((data.included[0].attributes.values[16].value)/1000).toFixed(3);
        const precio17 = ((data.included[0].attributes.values[17].value)/1000).toFixed(3);
        const precio18 = ((data.included[0].attributes.values[18].value)/1000).toFixed(3);
        const precio19 = ((data.included[0].attributes.values[19].value)/1000).toFixed(3);
        const precio20 = ((data.included[0].attributes.values[20].value)/1000).toFixed(3);
        const precio21 = ((data.included[0].attributes.values[21].value)/1000).toFixed(3);
        const precio22 = ((data.included[0].attributes.values[22].value)/1000).toFixed(3);
        const precio23 = ((data.included[0].attributes.values[23].value)/1000).toFixed(3);




        const precioMinimo = Math.min(
        ((data.included[0].attributes.values[0].value)),
        ((data.included[0].attributes.values[1].value)),
        ((data.included[0].attributes.values[2].value)),
        ((data.included[0].attributes.values[3].value)),
        ((data.included[0].attributes.values[4].value)),
        ((data.included[0].attributes.values[5].value)),
        ((data.included[0].attributes.values[6].value)),
        ((data.included[0].attributes.values[7].value)),
        ((data.included[0].attributes.values[8].value)),
        ((data.included[0].attributes.values[9].value)),
        ((data.included[0].attributes.values[10].value)),
        ((data.included[0].attributes.values[11].value)),
        ((data.included[0].attributes.values[12].value)),
        ((data.included[0].attributes.values[13].value)),
        ((data.included[0].attributes.values[14].value)),
        ((data.included[0].attributes.values[15].value)),
        ((data.included[0].attributes.values[16].value)),
        ((data.included[0].attributes.values[17].value)),
        ((data.included[0].attributes.values[18].value)),
        ((data.included[0].attributes.values[19].value)),
        ((data.included[0].attributes.values[20].value)),
        ((data.included[0].attributes.values[21].value)),
        ((data.included[0].attributes.values[22].value)),
        ((data.included[0].attributes.values[23].value)));

        const precioMaximo = Math.max(
        ((data.included[0].attributes.values[0].value)),
        ((data.included[0].attributes.values[1].value)),
        ((data.included[0].attributes.values[2].value)),
        ((data.included[0].attributes.values[3].value)),
        ((data.included[0].attributes.values[4].value)),
        ((data.included[0].attributes.values[5].value)),
        ((data.included[0].attributes.values[6].value)),
        ((data.included[0].attributes.values[7].value)),
        ((data.included[0].attributes.values[8].value)),
        ((data.included[0].attributes.values[9].value)),
        ((data.included[0].attributes.values[10].value)),
        ((data.included[0].attributes.values[11].value)),
        ((data.included[0].attributes.values[12].value)),
        ((data.included[0].attributes.values[13].value)),
        ((data.included[0].attributes.values[14].value)),
        ((data.included[0].attributes.values[15].value)),
        ((data.included[0].attributes.values[16].value)),
        ((data.included[0].attributes.values[17].value)),
        ((data.included[0].attributes.values[18].value)),
        ((data.included[0].attributes.values[19].value)),
        ((data.included[0].attributes.values[20].value)),
        ((data.included[0].attributes.values[21].value)),
        ((data.included[0].attributes.values[22].value)),
        ((data.included[0].attributes.values[23].value)));

        var horaMinima = '00:00';
        switch (precioMinimo) {
            case data.included[0].attributes.values[23].value:
                horaMinima = '23:00-24:00';
                break;
            case data.included[0].attributes.values[22].value:
                horaMinima = '22:00-23:00';
                break;
            case data.included[0].attributes.values[21].value:
                horaMinima = '21:00-22:00';
                break;
            case data.included[0].attributes.values[20].value:
                horaMinima = '20:00-21:00';
                break;
            case data.included[0].attributes.values[19].value:
                horaMinima = '19:00-20:00';
                break;
            case data.included[0].attributes.values[18].value:
                horaMinima = '18:00-19:00';
                break;
            case data.included[0].attributes.values[17].value:
                horaMinima = '17:00-18:00';
                break;
            case data.included[0].attributes.values[16].value:
                horaMinima = '16:00-17:00';
                break;
            case data.included[0].attributes.values[15].value:
                horaMinima = '15:00-16:00';
                break;
            case data.included[0].attributes.values[14].value:
                horaMinima = '14:00-15:00';
                break;
            case data.included[0].attributes.values[13].value:
                horaMinima = '13:00-14:00';
                break;
            case data.included[0].attributes.values[12].value:
                horaMinima = '12:00-13:00';
                break;
            case data.included[0].attributes.values[11].value:
                horaMinima = '11:00-12:00';
                break;
            case data.included[0].attributes.values[10].value:
                horaMinima = '10:00-11:00';
                break;
            case data.included[0].attributes.values[9].value:
                horaMinima = '09:00-10:00';
                break;
            case data.included[0].attributes.values[8].value:
                horaMinima = '08:00-09:00';
                break;
            case data.included[0].attributes.values[7].value:
                horaMinima = '07:00-08:00';
                break;
            case data.included[0].attributes.values[6].value:
                horaMinima = '06:00-07:00';
                break;
            case data.included[0].attributes.values[5].value:
                horaMinima = '05:00-06:00';
                break;
            case data.included[0].attributes.values[4].value:
                horaMinima = '04:00-05:00';
                break;
            case data.included[0].attributes.values[3].value:
                horaMinima = '03:00-04:00';
                break;
            case data.included[0].attributes.values[2].value:
                horaMinima = '02:00-03:00';
                break;
            case data.included[0].attributes.values[1].value:
                horaMinima = '01:00-02:00';
                break;
            case data.included[0].attributes.values[0].value:
                horaMinima = '00:00-01:00';
                break;
        }

        var horaMax = '00:00';
        switch (precioMaximo) {
            case data.included[0].attributes.values[23].value:
                horaMax = '23:00-24:00';
                break;
            case data.included[0].attributes.values[22].value:
                horaMax = '22:00-23:00';
                break;
            case data.included[0].attributes.values[21].value:
                horaMax = '21:00-22:00';
                break;
            case data.included[0].attributes.values[20].value:
                horaMax = '20:00-21:00';
                break;
            case data.included[0].attributes.values[19].value:
                horaMax = '19:00-20:00';
                break;
            case data.included[0].attributes.values[18].value:
                horaMax = '18:00-19:00';
                break;
            case data.included[0].attributes.values[17].value:
                horaMax = '17:00-18:00';
                break;
            case data.included[0].attributes.values[16].value:
                horaMax = '16:00-17:00';
                break;
            case data.included[0].attributes.values[15].value:
                horaMax = '15:00-16:00';
                break;
            case data.included[0].attributes.values[14].value:
                horaMax = '14:00-15:00';
                break;
            case data.included[0].attributes.values[13].value:
                horaMax = '13:00-14:00';
                break;
            case data.included[0].attributes.values[12].value:
                horaMax = '12:00-13:00';
                break;
            case data.included[0].attributes.values[11].value:
                horaMax = '11:00-12:00';
                break;
            case data.included[0].attributes.values[10].value:
                horaMax = '10:00-11:00';
                break;
            case data.included[0].attributes.values[9].value:
                horaMax = '09:00-10:00';
                break;
            case data.included[0].attributes.values[8].value:
                horaMax = '08:00-09:00';
                break;
            case data.included[0].attributes.values[7].value:
                horaMax = '07:00-08:00';
                break;
            case data.included[0].attributes.values[6].value:
                horaMax = '06:00-07:00';
                break;
            case data.included[0].attributes.values[5].value:
                horaMax = '05:00-06:00';
                break;
            case data.included[0].attributes.values[4].value:
                horaMax = '04:00-05:00';
                break;
            case data.included[0].attributes.values[3].value:
                horaMax = '03:00-04:00';
                break;
            case data.included[0].attributes.values[2].value:
                horaMax = '02:00-03:00';
                break;
            case data.included[0].attributes.values[1].value:
                horaMax = '01:00-02:00';
                break;
            case data.included[0].attributes.values[0].value:
                horaMax = '00:00-01:00';
                break;
                
          }

          var horaSiguienteMejor = 'Hasta mañana'
          var precioSig = '-'
          var algunMinimo = false;

          for (var i = hora; i < 23; i++) {
            if (data.included[0].attributes.values[i+1].value < data.included[0].attributes.values[i].value){
                horaSiguienteMejor = `${i+1}:00-${i+2}:00`;
                precioSig = ((data.included[0].attributes.values[i+1].value)/1000).toFixed(4);
                algunMinimo = true;
            }

            if (data.included[0].attributes.values[i+1].value > data.included[0].attributes.values[i].value){
                if (algunMinimo){
                    break;
                }
            }
          }

        const gestordeluz = {

            fechaActual: fechaHoy,
            precioMedio: precioMedio,
            mediaMed: Math.round(((precioMax-precioMin)/precioMin)*100),

            horaActual: `${hora}:00-${hora+1}:00`,
            precioActual: precioActual,
            mediaPrecioActual: Math.round(((precioActual-precioMedio)/precioMedio)*100),

            horaMin: horaMinima,
            precioMin: precioMin,
            mediaMin: Math.round(((precioMin-precioMedio)/precioMedio)*100),
            
            horaMax: horaMax,
            precioMax: precioMax,
            mediaMax: Math.round(((precioMax-precioMedio)/precioMedio)*100),

            precioSiguiente: precioSig,
            horaSiguiente: horaSiguienteMejor,
            mediaSiguiente: Math.round(((precioSig-precioMedio)/precioMedio)*100),

            media0: Math.round(((precio0-precioMedio)/precioMedio)*100),
            precioHora0: precio0,
            media1: Math.round(((precio1-precioMedio)/precioMedio)*100),
            precioHora1: precio1,
            media2: Math.round(((precio2-precioMedio)/precioMedio)*100),
            precioHora2: precio2,
            media3: Math.round(((precio3-precioMedio)/precioMedio)*100),
            precioHora3: precio3,
            media4: Math.round(((precio4-precioMedio)/precioMedio)*100),
            precioHora4: precio4,
            media5: Math.round(((precio5-precioMedio)/precioMedio)*100),
            precioHora5: precio5,
            media6: Math.round(((precio6-precioMedio)/precioMedio)*100),
            precioHora6: precio6,
            media7: Math.round(((precio7-precioMedio)/precioMedio)*100),
            precioHora7: precio7,
            media8: Math.round(((precio8-precioMedio)/precioMedio)*100),
            precioHora8: precio8,
            media9: Math.round(((precio9-precioMedio)/precioMedio)*100),
            precioHora9: precio9,
            media10: Math.round(((precio10-precioMedio)/precioMedio)*100),
            precioHora10: precio10,
            media11: Math.round(((precio11-precioMedio)/precioMedio)*100),
            precioHora11: precio11,
            media12: Math.round(((precio12-precioMedio)/precioMedio)*100),
            precioHora12: precio12,
            media13: Math.round(((precio13-precioMedio)/precioMedio)*100),
            precioHora13: precio13,
            media14: Math.round(((precio14-precioMedio)/precioMedio)*100),
            precioHora14: precio14,
            media15: Math.round(((precio15-precioMedio)/precioMedio)*100),
            precioHora15: precio15,
            media16: Math.round(((precio16-precioMedio)/precioMedio)*100),
            precioHora16: precio16,
            media17: Math.round(((precio17-precioMedio)/precioMedio)*100),
            precioHora17: precio17,
            media18: Math.round(((precio18-precioMedio)/precioMedio)*100),
            precioHora18: precio18,
            media19: Math.round(((precio19-precioMedio)/precioMedio)*100),
            precioHora19: precio19,
            media20: Math.round(((precio20-precioMedio)/precioMedio)*100),
            precioHora20: precio20,
            media21: Math.round(((precio21-precioMedio)/precioMedio)*100),
            precioHora21: precio21,
            media22: Math.round(((precio22-precioMedio)/precioMedio)*100),
            precioHora22: precio22,
            media23: Math.round(((precio23-precioMedio)/precioMedio)*100),
            precioHora23: precio23, 
            
            
            limiteMaximo: 5,
            limiteMinimo: -5,
            soloHoraActual: hora,
        }

        printCard(gestordeluz)
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const getDateAPI = getDateWithAPI();
    const hora = getNowHour();
    const fechaHoy = getFechaActual();
    fetchData(getDateAPI, hora, fechaHoy);
})


const printCard = (gestordeluz) => {
    console.log(gestordeluz);

    const flex = document.querySelector('.flex');
    const template = document.getElementById('template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('#horaActual').innerHTML = `<i class="bi bi-clock"></i> ${gestordeluz.horaActual}`;
    clone.querySelector('#precioActual').innerHTML = `${gestordeluz.precioActual}`;
    clone.querySelector('#mediaPrecioActual').innerHTML = `${gestordeluz.mediaPrecioActual}%`;

    if (gestordeluz.mediaPrecioActual > gestordeluz.limiteMaximo){
        clone.querySelector('#precioActual').style = 'color: #d9534f; font-size: 5.3em;';
        clone.querySelector('#identificadorPrecio').style = 'color: #d9534f;';
        clone.querySelector('#mediaPrecioActual').setAttribute("class", "badge badge-soft-danger me-2");
    } else if(gestordeluz.mediaPrecioActual < gestordeluz.limiteMinimo){
        clone.querySelector('#precioActual').style = 'color: #4bbf73; font-size: 5.3em;';
        clone.querySelector('#identificadorPrecio').style = 'color: #4bbf73;';
        clone.querySelector('#mediaPrecioActual').setAttribute("class", "badge badge-soft-success me-2");
    } else {
        clone.querySelector('#precioActual').style = 'color: #d9844f; font-size: 5.3em;';
        clone.querySelector('#identificadorPrecio').style = 'color: #d9844f;';
        clone.querySelector('#mediaPrecioActual').setAttribute("class", "badge badge-soft-primary me-2");
    }

    clone.querySelector('#horaSiguiente').innerHTML = `<i class="bi bi-clock"></i> ${gestordeluz.horaSiguiente}`;
    clone.querySelector('#precioSiguiente').innerHTML = `${gestordeluz.precioSiguiente}€/KWh`;
    clone.querySelector('#mediaSiguiente').innerHTML = `${gestordeluz.mediaSiguiente}%`;


    if (gestordeluz.mediaSiguiente > gestordeluz.limiteMaximo){
        clone.querySelector('#mediaPrecioActual').setAttribute("class", "badge badge-soft-danger me-2");
    } else if(gestordeluz.mediaSiguiente < gestordeluz.limiteMinimo){
        clone.querySelector('#mediaPrecioActual').setAttribute("class", "badge badge-soft-success me-2");
    } else {
        clone.querySelector('#mediaPrecioActual').setAttribute("class", "badge badge-soft-primary me-2");
    }

    clone.querySelector('#horaMin').innerHTML = `<i class="bi bi-clock"></i> ${gestordeluz.horaMin}`;
    clone.querySelector('#precioMin').innerHTML = `${gestordeluz.precioMin}€/KWh`;
    clone.querySelector('#mediaMin').innerHTML = `${gestordeluz.mediaMin}%`;

    if (gestordeluz.mediaMin > gestordeluz.limiteMaximo){
        clone.querySelector('#mediaMin').setAttribute("class", "badge badge-soft-danger me-2");
    } else if(gestordeluz.mediaMin < gestordeluz.limiteMinimo){
        clone.querySelector('#mediaMin').setAttribute("class", "badge badge-soft-success me-2");
    } else {
        clone.querySelector('#mediaMin').setAttribute("class", "badge badge-soft-primary me-2");
    }



    clone.querySelector('#horaMax').innerHTML = `<i class="bi bi-clock"></i> ${gestordeluz.horaMax}`;
    clone.querySelector('#precioMax').innerHTML = `${gestordeluz.precioMax}€/KWh`;
    clone.querySelector('#mediaMax').innerHTML = `${gestordeluz.mediaMax}%`;

    if (gestordeluz.mediaMax > gestordeluz.limiteMaximo){
        clone.querySelector('#mediaMax').setAttribute("class", "badge badge-soft-danger me-2");
    } else if(gestordeluz.mediaMax < gestordeluz.limiteMinimo){
        clone.querySelector('#mediaMax').setAttribute("class", "badge badge-soft-success me-2");
    } else {
        clone.querySelector('#mediaMax').setAttribute("class", "badge badge-soft-primary me-2");
    }


    clone.querySelector('#fechaActual').innerHTML = `<i class="bi bi-calendar4-week"></i> ${gestordeluz.fechaActual}`;
    clone.querySelector('#precioMed').innerHTML = `${gestordeluz.precioMedio}€/KWh`;
    clone.querySelector('#mediaMed').innerHTML = `${gestordeluz.mediaMed}%`;

    if (gestordeluz.mediaMed > gestordeluz.limiteMaximo){
        clone.querySelector('#mediaMax').setAttribute("class", "badge badge-soft-danger me-2");
    } else if(gestordeluz.mediaMed < gestordeluz.limiteMinimo){
        clone.querySelector('#mediaMax').setAttribute("class", "badge badge-soft-success me-2");
    } else {
        clone.querySelector('#mediaMax').setAttribute("class", "badge badge-soft-primary me-2");
    }

    clone.querySelector('#mediahora0').innerHTML = `${gestordeluz.media0}%`;
    clone.querySelector('#preciohora0').innerHTML = `${gestordeluz.precioHora0}€`;

    if (gestordeluz.media0 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora0').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora0').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media0 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora0').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora0').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora0').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora0').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 0){
        clone.querySelector('#hora0').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora1').innerHTML = `${gestordeluz.media1}%`;
    clone.querySelector('#preciohora1').innerHTML = `${gestordeluz.precioHora1}€`;

    if (gestordeluz.media1 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora1').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora1').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media1 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora1').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora1').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora1').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora1').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 1){
        clone.querySelector('#hora1').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora2').innerHTML = `${gestordeluz.media2}%`;
    clone.querySelector('#preciohora2').innerHTML = `${gestordeluz.precioHora2}€`;

    if (gestordeluz.media2 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora2').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora2').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media2 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora2').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora2').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora2').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora2').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 2){
        clone.querySelector('#hora2').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora3').innerHTML = `${gestordeluz.media3}%`;
    clone.querySelector('#preciohora3').innerHTML = `${gestordeluz.precioHora3}€`;

    if (gestordeluz.media3 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora3').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora3').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media3 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora3').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora3').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora3').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora3').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 3){
        clone.querySelector('#hora3').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora4').innerHTML = `${gestordeluz.media4}%`;
    clone.querySelector('#preciohora4').innerHTML = `${gestordeluz.precioHora4}€`;

    if (gestordeluz.media4 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora4').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora4').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media4 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora4').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora4').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora4').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora4').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 4){
        clone.querySelector('#hora4').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora5').innerHTML = `${gestordeluz.media5}%`;
    clone.querySelector('#preciohora5').innerHTML = `${gestordeluz.precioHora5}€`;

    if (gestordeluz.media5 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora5').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora5').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media5 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora5').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora5').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora5').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora5').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 5){
        clone.querySelector('#hora5').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora6').innerHTML = `${gestordeluz.media6}%`;
    clone.querySelector('#preciohora6').innerHTML = `${gestordeluz.precioHora6}€`;

    if (gestordeluz.media6 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora6').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora6').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media6 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora6').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora6').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora6').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora6').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 6){
        clone.querySelector('#hora6').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora7').innerHTML = `${gestordeluz.media7}%`;
    clone.querySelector('#preciohora7').innerHTML = `${gestordeluz.precioHora7}€`;

    if (gestordeluz.media7 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora7').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora7').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media7 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora7').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora7').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora7').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora7').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 7){
        clone.querySelector('#hora7').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora8').innerHTML = `${gestordeluz.media8}%`;
    clone.querySelector('#preciohora8').innerHTML = `${gestordeluz.precioHora8}€`;

    if (gestordeluz.media8 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora8').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora8').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media8 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora8').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora8').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora8').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora8').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 8){
        clone.querySelector('#hora8').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora9').innerHTML = `${gestordeluz.media9}%`;
    clone.querySelector('#preciohora9').innerHTML = `${gestordeluz.precioHora9}€`;

    if (gestordeluz.media9 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora9').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora9').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media9 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora9').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora9').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora9').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora9').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 9){
        clone.querySelector('#hora9').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora10').innerHTML = `${gestordeluz.media10}%`;
    clone.querySelector('#preciohora10').innerHTML = `${gestordeluz.precioHora10}€`;

    if (gestordeluz.media10 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora10').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora10').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media10 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora10').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora10').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora10').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora10').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 10){
        clone.querySelector('#hora10').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora11').innerHTML = `${gestordeluz.media11}%`;
    clone.querySelector('#preciohora11').innerHTML = `${gestordeluz.precioHora11}€`;

    if (gestordeluz.media11 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora11').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora11').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media11 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora11').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora11').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora11').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora11').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 11){
        clone.querySelector('#hora11').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora12').innerHTML = `${gestordeluz.media12}%`;
    clone.querySelector('#preciohora12').innerHTML = `${gestordeluz.precioHora12}€`;

    if (gestordeluz.media12 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora12').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora12').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media12 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora12').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora12').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora12').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora12').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 12){
        clone.querySelector('#hora12').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora13').innerHTML = `${gestordeluz.media13}%`;
    clone.querySelector('#preciohora13').innerHTML = `${gestordeluz.precioHora13}€`;

    if (gestordeluz.media13 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora13').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora13').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media13 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora13').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora13').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora13').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora13').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 13){
        clone.querySelector('#hora13').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora14').innerHTML = `${gestordeluz.media14}%`;
    clone.querySelector('#preciohora14').innerHTML = `${gestordeluz.precioHora14}€`;

    if (gestordeluz.media14 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora14').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora14').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media14 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora14').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora14').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora14').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora14').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 14){
        clone.querySelector('#hora14').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora15').innerHTML = `${gestordeluz.media15}%`;
    clone.querySelector('#preciohora15').innerHTML = `${gestordeluz.precioHora15}€`;

    if (gestordeluz.media15 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora15').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora15').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media15 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora15').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora15').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora15').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora15').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 15){
        clone.querySelector('#hora15').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora16').innerHTML = `${gestordeluz.media16}%`;
    clone.querySelector('#preciohora16').innerHTML = `${gestordeluz.precioHora16}€`;

    if (gestordeluz.media16 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora16').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora16').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media16 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora16').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora16').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora16').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora16').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 16){
        clone.querySelector('#hora16').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora17').innerHTML = `${gestordeluz.media17}%`;
    clone.querySelector('#preciohora17').innerHTML = `${gestordeluz.precioHora17}€`;

    if (gestordeluz.media17 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora17').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora17').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media17 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora17').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora17').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora17').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora17').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 17){
        clone.querySelector('#hora17').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora18').innerHTML = `${gestordeluz.media18}%`;
    clone.querySelector('#preciohora18').innerHTML = `${gestordeluz.precioHora18}€`;

    if (gestordeluz.media18 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora18').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora18').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media18 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora18').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora18').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora18').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora18').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 18){
        clone.querySelector('#hora18').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora19').innerHTML = `${gestordeluz.media19}%`;
    clone.querySelector('#preciohora19').innerHTML = `${gestordeluz.precioHora19}€`;

    if (gestordeluz.media19 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora19').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora19').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media19 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora19').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora19').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora19').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora19').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 19){
        clone.querySelector('#hora19').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora20').innerHTML = `${gestordeluz.media20}%`;
    clone.querySelector('#preciohora20').innerHTML = `${gestordeluz.precioHora20}€`;

    if (gestordeluz.media20 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora20').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora20').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media20 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora20').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora20').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora20').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora20').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 20){
        clone.querySelector('#hora20').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }


    clone.querySelector('#mediahora21').innerHTML = `${gestordeluz.media21}%`;
    clone.querySelector('#preciohora21').innerHTML = `${gestordeluz.precioHora21}€`;

    if (gestordeluz.media21 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora21').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora21').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media21 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora21').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora21').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora21').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora21').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 21){
        clone.querySelector('#hora21').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora22').innerHTML = `${gestordeluz.media22}%`;
    clone.querySelector('#preciohora22').innerHTML = `${gestordeluz.precioHora22}€`;

    if (gestordeluz.media22 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora22').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora22').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media22 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora22').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora22').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora22').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora22').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 22){
        clone.querySelector('#hora22').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }

    clone.querySelector('#mediahora23').innerHTML = `${gestordeluz.media23}%`;
    clone.querySelector('#preciohora23').innerHTML = `${gestordeluz.precioHora23}€`;

    if (gestordeluz.media23 > gestordeluz.limiteMaximo){
        clone.querySelector('#hora23').setAttribute("class", "card-body badge-soft-danger");
        clone.querySelector('#mediahora23').setAttribute("class", "badge badge-soft-danger justify-content-rigth");

    } else if(gestordeluz.media23 < gestordeluz.limiteMinimo){
        clone.querySelector('#hora23').setAttribute("class", "card-body badge-soft-success");
        clone.querySelector('#mediahora23').setAttribute("class", "badge badge-soft-success justify-content-rigth");
    } else {
        clone.querySelector('#hora23').setAttribute("class", "card-body badge-soft-primary");
        clone.querySelector('#mediahora23').setAttribute("class", "badge badge-soft-primary justify-content-rigth");
    }

    if (gestordeluz.soloHoraActual == 23){
        clone.querySelector('#hora23').style = "display:flex;align-content: space-between;align-items: center;flex-direction: row;flex-wrap: wrap;justify-content: space-between; border: 2px solid #f7b532";
    }




    fragment.appendChild(clone)
    flex.appendChild(fragment)
}