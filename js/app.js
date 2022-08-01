// alert("work")
// const fecha = new Date();
const reloj = document.querySelector(".reloj");

const getHora = () => {
    const fecha = new Date();
    // console.log(fecha)
    const tiempo = {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundo : fecha.getSeconds(),
    }
    // const ahora = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo}`
    // console.log(ahora)
    reloj.innerHTML = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo}`; 
}

setInterval(getHora, 300)
// getHora();