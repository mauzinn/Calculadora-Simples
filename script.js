function calcular(tipo) {
    var screen = []
    var log = document.getElementById('res')

    switch (tipo){
        case 1:
            screen.push(1)
            break
        
        case 2:
            screen.push(2)
            break

        case 3:
            screen.push(3)
            break
        
        case 4:
            screen.push(4)
            break
        
        case 5:
            screen.push(5)
            break
        
        case 6:
            screen.push(6)
            break

        case 7:
            screen.push(7)
            break

        case 8:
            screen.push(8)
            break

        case 9:
            screen.push(9)
            break

        case 0:
            screen.push(0)
            break

        case '+':
            screen.push('+')
            break

        case '=':
            try{
                var num = eval(log.innerText)
                log.innerText = num
            } catch{
                log.innerText = 'ERRO'
            }
            break

        case 'apagar':
            log.innerText = ''
    }


    log.innerHTML += screen

}