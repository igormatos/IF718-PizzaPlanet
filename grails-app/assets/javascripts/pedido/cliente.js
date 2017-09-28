$(()=>{

  let senha = $("#login_form input[name='senha']");
  let login = $("#login_form input[name='login']");
  let buttn = $("form input[name='submit']");
  let metade1 = $("form input[name='metade1']")
  let metade2 = $("form input[name='metade2']")
  let borda = $("form input[name='border']")
  let cadas = $("#cadastro_btn");
  let modal = $('.modal');
  let modcl = $('.modal_close');
  let cadbt = $('#cadastrar_btn');
  let cadIn = $('#cadastro_form input');

  loginSetup();


  function loginSetup(){

    buttn.click(ev=>{
      console.log("eii, fui clicado!")
      let data = {
        sabor1: metade1.val(),
        sabor2: metade2.val(),
        borda: borda.val(),
        cliente: 1
      }

      post('/pedido', data, function(){
        console.log("acho que foiz")
      })
    })
  }
});
