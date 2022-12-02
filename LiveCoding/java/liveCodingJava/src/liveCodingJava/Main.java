package liveCodingJava;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int mangos;
		int naranjas;

		System.out.println("Dame el número de mangos: ");
		mangos = entrada.nextInt(); //para n. de mangos
		
		System.out.println("Dame el número de naranjas: ");
		naranjas = entrada.nextInt(); //para n. de naranjas
		
		//Instancia
		MangosNaranjas mangosNaranjas = new MangosNaranjas(mangos, naranjas);
		
		//Salida
		System.out.println("El número de mangos en una caja ");
	}

}
