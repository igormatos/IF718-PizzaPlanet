$(()=>{


  let form = $("form[name='pedido']");
  let metade1 = $("form input[name='metade1']")
  let metade2 = $("form input[name='metade2']")
  let borda = $("form input[name='border']")

  pedidoSetup();


  function pedidoSetup(){

    form.on('submit', (ev)=>{
      ev.preventDefault();

      let data = {
        sabor1: metade1.val(),
        sabor2: metade2.val(),
        borda: borda.val(),
        cliente: getCookie('usuario[id]')
      }

      post('/pedido', data, function(retorno){
        showMessage(`Total: ${retorno.pizza.preco}$`);
        // setTimeout(()=>{
        //   redirect(`/entrega/cliente/${retorno.id}`)
        // }, 2000)
      })

      return false;
    })

  }
});
