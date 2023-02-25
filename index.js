
const notasMusicais = {
    "Dó" : {frenquencia: 261.625519},
    "Dó#" : {frenquencia: 277.182648},
    "Ré" : {frenquencia: 293.664734},
    "Ré#" : {frenquencia: 311.126984},
    "Mi" : {frenquencia: 329.627533},
    "Fá" : {frenquencia: 349.228241},
    "Fá#" : {frenquencia: 369.994385},
    "Sol" : {frenquencia: 391.995392},
    "Sol#" : {frenquencia: 415.304688},
    "Lá" : {frenquencia: 440.0},
    "Lá#" : {frenquencia: 466.163788},
    "Si" : {frenquencia: 493.883301},
}

function tocarNota(nota){
    const notaClicada = nota;

    let contexto = new AudioContext();
    let oscilador = contexto.createOscillator();

    oscilador.frequency.value = notasMusicais[nota].frenquencia

    let volume = contexto.createGain()
    volume.gain.exponentialRampToValueAtTime(
        0.00001, contexto.currentTime + 4
    )

    oscilador.connect(volume)
    volume.connect(contexto.destination)

    oscilador.type = "triangle"

    oscilador.start()
}

document.querySelectorAll('.nota').forEach(nota => {
    nota.addEventListener("click", elemento => {
        tocarNota(elemento.target.dataset.nota)
    })
})
   