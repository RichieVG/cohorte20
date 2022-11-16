package operadores;

import java.util.Scanner;

public class Operadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		int numero = 0;
		do {
		//System.out.println("---- Da un dato: -----");
		//String dato = scanner.nextLine();
		//System.out.println("El dato es :" + dato);
			
		System.out.println("\t\t ----- Menu-----");
		System.out.println(" 1: Suma");
		System.out.println(" 2: Resta");
		System.out.println(" 3: Multiplicacion");
		System.out.println(" 4: Division");
		System.out.println(" 5: Modulo");
		System.out.println(" 6: Booleans");
		System.out.println(" 7: Salir");
			
		System.out.println(" introduzca la opcion: ");
		numero = scanner.nextInt();	
		
		switch(numero){
		case 1:
			 System.out.println("uno");
			 System.out.println("\t----Suma---");
				System.out.print("introduzca un numero ");
				int datosS = scanner.nextInt();
				System.out.print("introduzca un numero ");
				int datosSu = scanner.nextInt();		
				int suma = datosS + datosSu;
				System.out.println("Suma: " + suma);
			 break;
		case 2:
			System.out.println("\t----Resta---");
			System.out.print("introduzca un numero ");
			int datosR = scanner.nextInt();
			System.out.print("introduzca un numero ");
			int datosRe = scanner.nextInt();		
			int rest = datosR - datosRe;
			System.out.println("Rest: " + rest);
			System.out.println("dos");
			break;
		case 3: 
			System.out.println("\t----Multiplicacion---");
			System.out.print("introduzca un numero ");
			int datosM = scanner.nextInt();
			System.out.print("introduzca un numero ");
			int datosMu = scanner.nextInt();		
			int mult = datosM * datosMu;
			System.out.println("Mult: " + mult);
			System.out.println("tres");
			break;
		case 4:
			System.out.println("\t----Division---");
			
			System.out.print("introduzca un numero ");
			int datosD = scanner.nextInt();
			System.out.print("introduzca un numero ");
			int datosDi = scanner.nextInt();
			
			if (datosDi != 0) {
				int div = datosD / datosDi;
				System.out.println("Div: " + div);			
			} else {
				System.out.println(" el denominador es cero");
			}
			
			break;
		case 5:
			
			System.out.println("\t----Modulo---");
			System.out.print("introduzca un numero ");
			int datosMo = scanner.nextInt();
			System.out.print("introduzca un numero ");
			int datosMod = scanner.nextInt();		
			int modulo = datosMo % datosMod;
			System.out.println("Modulo: " + modulo);
			if (modulo == 0) {
				System.out.println("El numero es un par");
			} else {
				System.out.println("El numero no es par ");
			}
			
			break;
		case 6:
			int a = 3;
			int b =5;
			boolean comparar= a >= b;
			boolean logica = false;
			if (!comparar || !(logica)) {
				System.out.println("hola si soy verdadero ");
				System.out.println(" comparar: " + comparar);			
			} else {
				System.out.println(comparar);
				System.out.println(logica);
			}
		case 7:
			System.out.println("Bye");
			break;
			default:
				break;
			
		}

		}while (numero != 7);
		
	}

}
