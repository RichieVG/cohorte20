package operadores;

import java.util.Scanner;

public class Ciclos {
	
	void saludo() {
		System.out.println("Hola a las funciones en java :) ");
		
	}
	
	int operacion () {
		int f = (int) Math.pow(3, 2);
		return f;		
	}
	
	static double nuevo() {
		double h = Math.pow(5, 3);
		return h;
	}
	
	String caracteres() {
		String nombre = "Hola, buen día!";
		return nombre;
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Ciclos objC;
		objC = new Ciclos();
		objC.saludo();
		
		System.out.println("Uso de clase estática Math.pow(3, 2) " + objC.operacion());
		

		System.out.println("Esta es una función estática pow(5, 3) ---> " + nuevo ());
		
		System.out.println(objC.caracteres());
		
		nuevo();
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("\t\t\tIntroduzca el valor de la tabla de multiplicar: ");
		int tabla = scanner.nextInt();
		for (int i = 0; i <= 10; i++) {
			System.out.println(tabla + " * " + i + " = " + (tabla * i));
		}
		int j = 1;
		System.out.println("\t\tIntroduzca el valor de la tabla de multiplicar con el ciclo for: ");
		int tablaW = scanner.nextInt();
		
		while (j <= 10) {
			System.out.println(tablaW + " * " + j + " = " + (tablaW * j));
			j++;
		}
		
		
	}

}
