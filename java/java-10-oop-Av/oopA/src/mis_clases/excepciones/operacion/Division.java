package mis_clases.excepciones.operacion;

public class Division {
private int numerador;
private int denominador;

public Division(int numerador, int denominador) {
	this.numerador = numerador;
	this.denominador = denominador;
}
public void visualizarD() {
	System.out.println("Resultado de la división " + (this.numerador/this.denominador));
}
}
