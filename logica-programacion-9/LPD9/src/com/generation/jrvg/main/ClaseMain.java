package com.generation.jrvg.main;

import java.util.HashMap;
import java.util.Scanner;

public class ClaseMain {

	public static void main(String[] args) {
		
		HashMap<String, String> dicc = new HashMap<>();
		Scanner a = new Scanner(System.in);	
		
		dicc.put("reloj", "watch");
		dicc.put("caliente", "hot");
		dicc.put("frío", "cold");
		dicc.put("tienda", "market");
		dicc.put("cuchillo", "knife");
		dicc.put("tenedor", "fork");
		dicc.put("baño", "bathroom");
		dicc.put("cabeza", "head");
		dicc.put("riñón", "liver");
		dicc.put("pie", "foot");
		dicc.put("grande", "big");
		dicc.put("pequeño", "little");
		dicc.put("lento", "slow");
		dicc.put("rápido", "fast");
		dicc.put("celular", "cellphone");
		dicc.put("plaza", "mall");
		dicc.put("gato", "cat");
		dicc.put("perro", "dog");
		dicc.put("ratón", "mouse");
		dicc.put("manos", "hands");
		
		String palabra;
		System.out.println("Introduce la palabra bien escrita en español:");
		palabra = a.nextLine().toLowerCase();
		
		if (dicc.containsKey(palabra)) {
			System.out.println(dicc.get(palabra));
		} else {
			System.out.println("La palabra no está disponible, vuelve a intentarlo...");
			palabra = a.nextLine().toLowerCase();
		} 
		
	}
}
