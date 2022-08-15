let alfabetoMin = [
    'a','b','c','d','e','f','g','h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
     'v', 'w','x','y', 'z'
]
let alfabetoMai = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
]

let criptografada = ""
let descriptografada = ""
let maiuscula

function Criptografar(){
    let indiceLetra = 0
    let palavraD = document.querySelector('#palavraD').value

    for(let i=0; i < palavraD.length; i++){
        maiuscula = false
        indiceLetra = 0
       while(palavraD[i] != alfabetoMin[indiceLetra]){
            indiceLetra++
            if(palavraD[i] == " "){
                criptografada += " "
                break
            }

            if(indiceLetra > 25){
                indiceLetra = 0
                while(palavraD[i] != alfabetoMai[indiceLetra]){
                    indiceLetra++
                }
                maiuscula = true
                break
            }
       }
       if(maiuscula == true){
            if(palavraD[i] != " "){
                indiceLetra += 8
                indiceLetra>25 ? indiceLetra-=26 : indiceLetra
                criptografada += alfabetoMai[indiceLetra]
            }
       }else{
            if(palavraD[i] != " "){
                indiceLetra += 8
                indiceLetra>25 ? indiceLetra-=26 : indiceLetra
                criptografada += alfabetoMin[indiceLetra]
            }
    }
}
    document.querySelector('#cript').style.display='block'
    document.querySelector('#cript').innerText = `Palavra: ${criptografada}`
    document.querySelector('#palavraD').value = ""
    criptografada = ""
}

function Descriptografar(){
    let indiceLetra = 0
    let palavraC = document.querySelector('#palavraC').value
    
    for(let i=0; i < palavraC.length; i++){
        indiceLetra = 0
        maiuscula = false
        while(palavraC[i] != alfabetoMin[indiceLetra]){
                indiceLetra++
                if(palavraC[i] == " "){
                    descriptografada += " "
                    break
                }

                if(indiceLetra > 25){
                    indiceLetra = 0
                    while(palavraC[i] != alfabetoMai[indiceLetra]){
                        indiceLetra++
                    }
                    maiuscula = true
                    break
                }
       }
    
       if(maiuscula == true){
            if(palavraC[i] != " "){
                indiceLetra -= 8
                indiceLetra<0 ? indiceLetra+=26 : indiceLetra
                descriptografada += alfabetoMai[indiceLetra]
            }
        }else{
            if(palavraC[i] != " "){
                indiceLetra -= 8
                indiceLetra<0 ? indiceLetra+=26 : indiceLetra
                descriptografada += alfabetoMin[indiceLetra]
            }
        }
    }
    document.querySelector('#descript').style.display='block'
    document.querySelector('#descript').innerText = `Palavra: ${descriptografada}`
    document.querySelector('#palavraC').value = ""
    descriptografada = ""
}