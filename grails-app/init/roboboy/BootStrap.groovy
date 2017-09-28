package roboboy
import roboboy.*;
import roboboy.pedido.*;

class BootStrap {

    def init = { servletContext ->
      def u1, u2;
      (u1 = new Usuario(
        nome: "Igor, ViajaMais Q'Trabalha",
        login: "ivqt",
        telefone: "99899.9899",
        senha: 'im',
        tipo: 1
      )).save();
      (u2 = new Usuario(
        nome: "Niltu, saido crossfit",
        login: "niltu",
        telefone: "99899.9899",
        senha: 'ni',
        tipo: 0
      )).save();

      def pizza;

      pizza = new Pizza("Três Queijos");
      pizza = new ComBorda(pizza, "Catupiry");
      (new Pedido(
        pizza: pizza,
        usuario: u1
      )).save();

      pizza = new Pizza("Nutella");
      pizza = new DoisSabores(pizza, "Banana");
      pizza = new ComBorda(pizza, "Chocolate");
      (new Pedido(
        pizza: pizza,
        usuario: u2
      )).save();
    }
    def destroy = {
    }
}
