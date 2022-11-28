package polimorfismo;

import java.util.Scanner;

public class Rectangulo extends FigurasGeometricas {
	private double b;
	private double h;
	Scanner s = new Scanner(System.in);

	@Override
	public void pedirDatos() {
		// TODO Auto-generated method stub
		System.out.println("\t\t\t Area de rectangulo: ");
		System.out.println("Introduzca la base: ");
		b = s.nextDouble();
		System.out.println("Introduzca la altura: ");
		h = s.nextDouble();
		
	}
	
	@Override
	public void area() {
		// TODO Auto-generated method stub
		resultado = (b * h);
	}

	
	

}

