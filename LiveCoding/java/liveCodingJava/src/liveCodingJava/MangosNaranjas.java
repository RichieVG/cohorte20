package liveCodingJava;

import java.util.Scanner;

public class MangosNaranjas {
	//Entrada de usuario
	Scanner entrada = new Scanner(System.in);
	
	int mangos;
	int naranjas;
	
	public MangosNaranjas(int mangos, int naranjas) {
		this.mangos = mangos;
		this.naranjas = naranjas;
	}
	
	public int calcularMCD(int mangos, int naranjas) {
		if (mangos > naranjas) {
			int temporal = mangos;
			mangos = naranjas % mangos;
			
		}
	}
	
	public void imprimir() {
		System.out.println(mangos);
		System.out.println(naranjas);
	}
}
