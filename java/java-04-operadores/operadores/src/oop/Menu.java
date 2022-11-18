package oop;

import java.util.Scanner;

public class Menu {
	Scanner s = new Scanner(System.in);
	int menuOp() {
		int numero = 0;
		System.out.println("\t\t ----- Menu principal -----");
		System.out.println("\t\t1: Tablas de Multiplicar");
		System.out.println("\t\t2: Operaciones Aritméticas");
		System.out.println("\t\t3: Mu");
		System.out.println("\t\t4: Di");
		System.out.println("\t\t5: Mo");
		System.out.println("\t\t6: Bo");
		System.out.println("\t\t7: Salir");
			
		System.out.println(" introduzca la opcion: ");
		return numero = s.nextInt();
	}
	
	int subMenuOp() {
		int numero = 0;
		System.out.println("\t\t ----- Menu-----");
		System.out.println(" 1: Suma");
		System.out.println(" 2: Resta");
		System.out.println(" 3: Multiplicacion");
		System.out.println(" 4: Division");
		System.out.println(" 5: Modulo");
		System.out.println(" 6: Booleans");
		System.out.println(" 7: Salir");
		
		System.out.println(" introduzca la opcion: ");
		return numero = s.nextInt();
	}
}


