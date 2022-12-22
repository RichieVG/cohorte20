package com.generation.jrvg.main;

import java.util.Scanner;

public class ClaseMain {

	public static void main(String[] args) {
		Scanner a = new Scanner(System.in);
		
		String nombre;
		String reverse = "";
		
		System.out.println("Bienvenido a invertir el nombre!");
		System.out.println("Introduce el nombre: ");
		nombre=a.nextLine();
		for (int i = 0; i < nombre.length(); i++) {
			reverse=nombre.charAt(i)+reverse;
		}
		System.out.println(reverse);
		System.out.println("Este es tu nombre al revés!");
	}
}
