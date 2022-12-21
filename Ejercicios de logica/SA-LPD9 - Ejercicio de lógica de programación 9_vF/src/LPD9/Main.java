package LPD9;

import java.util.HashMap;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner in=new Scanner(System.in);
		String palabra;
		HashMap<String, String> diccionario=new HashMap<>();
		
		diccionario.put("tijeras", "scissors");
		diccionario.put("corazon", "heart");
		diccionario.put("fuego", "fire");
		diccionario.put("perro", "dog");
		diccionario.put("cuchillo", "knife");
		diccionario.put("pescadoa", "fish");
		diccionario.put("pasillo", "alley");
		diccionario.put("cascaron", "shell");
		diccionario.put("hora", "hour");
		diccionario.put("gato", "cat");
		diccionario.put("tienda", "market");
		diccionario.put("capa", "cloak");
		diccionario.put("huevo", "egg");
		diccionario.put("carrera", "race");
		diccionario.put("cazar", "hunt");
		diccionario.put("camisa", "shirt");
		diccionario.put("hielo", "ice");
		diccionario.put("ventana", "window");
		diccionario.put("berenjena", "eggplant");
		diccionario.put("farmacia", "drugstore");
		
		System.out.println("Introduce la palabra en español:");
		palabra=in.nextLine().toLowerCase();
		if (diccionario.containsKey(palabra)) {
			System.out.println(diccionario.get(palabra));
		} else {
			System.out.println("La palabra no se encuentra en el diccionario, vuelve a intentarlo.");
		}
		
	}
}
