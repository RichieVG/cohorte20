package com.generation.pruebasUnitarias;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Clase  de prueba de calculadora")
public class CalculadoraTest {
	
	Calculadora calc = new Calculadora(true);
	
	@Test
	@DisplayName("Método que prueba si la suma es correcta")
	void pruebaSuma() {
		//Calculadora calc = new Calculadora(true);
		
		assertEquals(4, calc.suma(2,2), "Deberían ser 4");
	}
	
	@Test
	@DisplayName("Probar si la calculadora está encendida")
	void pruebaisOn() {
		//Calculadora calc = new Calculadora(true);
		
		assertTrue(calc.isOn());
		
	}
	
	@Test
	@DisplayName("Prueba de división")
	void pruebaDiv() {
		assertEquals(2.5, calc.division(5, 2));
	}
}
