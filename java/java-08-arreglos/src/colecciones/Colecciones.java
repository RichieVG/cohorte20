package colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
		//List - ArrayList
		//Valores de un mismo tipo
		
		System.out.println("--- Arraylist ---");
		
		List<String> miArray = new ArrayList<String>();
		
		miArray.add("GDL");
		miArray.add("CDMX");
		miArray.add("MTY");
		miArray.add(1, "Manzanillo");
		
		String valorQuitado = miArray.remove(0);
		//boolean valorQuitado = miArray.remove("GDLx");
		
		System.out.println(miArray);
		System.out.println(valorQuitado);
		System.out.println(miArray.get(2));
		System.out.println(miArray.size());//size() == lenght
		
		imprimir(miArray);
		
		System.out.println("--- HashSet ---");
		//Es la más rápida de todas
		//No permiten elementos duplicados
		//No guarda los elementos en un orden aparente
		//No maneja índice
		Set<String> miSet = new HashSet<String>();
		
		miSet.add("Panchito");
		miSet.add("Paco");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Martín");
		
		System.out.println(miSet);
		imprimir(miSet);
		
		System.out.println(miSet.contains("Martín"));
		miSet.remove("Martín");
		imprimir(miSet);
		
		
		System.out.println("--- HashMap ---");
		//pares de valores (llave - valor)
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		
		miMap.put("Valor 1", 56);
		miMap.put("Valor 2", 56);
		miMap.put("Valor 3", 70);
		
		System.out.println(miMap);
		System.out.println(miMap.get("Valor 2"));
		System.out.println(miMap.keySet());
		
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
		}
	}
	
	
	public static void imprimir(Collection coleccion) {
		for(Object elemento : coleccion ) {
			System.out.println("Elemento = " + elemento);
		}
	}

	
}
