package ejecutar;

import clases.Animal;

public class Ejemplo {

	public static void main(String[] args) {
		
		Animal miAnimal = new Animal("Nina");
		miAnimal.setEdad(1);
		miAnimal.setRaza("Desconocido");
		
		System.out.println("El nombre es: " + miAnimal.getNombre());
		System.out.println("Su edad es de: " + miAnimal.getEdad() + " año");
		System.out.println("Raza: " + miAnimal.getRaza());
		
		System.out.println("----------------------");

		Animal otroAnimal;
		otroAnimal = new Animal();
		otroAnimal.setNombre("Toffee");
		otroAnimal.setEdad(5);
		otroAnimal.setRaza("Husky Siberiano");
		
		System.out.println("El nuevo animal es: " + otroAnimal.getNombre());
		System.out.println("Su edad es de: " + otroAnimal.getEdad() + " años");
		System.out.println("Raza: " +otroAnimal.getRaza());
	}

}
