function    realizar_operacion() { 
    var input = document.querySelector('#input-1')
    monto=input.value
    Dato1=Number(monto) * 595000
    elemento_resultado = document.querySelector('#Dato2')
    elemento_resultado.innerHTML = (Dato1) + `  $`
    elemento_resultado = document.querySelector('#Dato3')
    elemento_resultado.innerHTML = (monto)+ `    `
    }
    function cambiar_color(){                  
        input= document.querySelector('#color')
        elemento2=document.querySelector('#color3')
        elemento2.style.backgroundColor= input.value
        elemento2.style.borderRadius="50%"
    
    }