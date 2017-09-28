package roboboy
import grails.rest.*;
import roboboy.Usuario;
import roboboy.pedido.Pizza

class Pedido {
  Pizza pizza;
  static belongsTo = [ usuario: Usuario ]

  static constraints = {
  }
}
