package polimorfismo;

//import java.util.Scanner;

public abstract class FigurasGeometricas {
	
	//protected double pValor;
	//protected double sValor;
	protected double resultado;
	
	//Scanner s;
	
	public abstract void pedirDatos();
	
	public abstract void area();
		
	public void visualizar() {
		System.out.println("El resultado es: " + resultado);
	}
	
}

/*{ s = new Scanner(System.in);
		System.out.println("Introduzca el primer valor: ");
		pValor = s.nextDouble();
		System.out.println("Introduzca el segundo valor: ");
		sValor = s.nextDouble();
	}*/