package variables;

public class TipoVariables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// byte, short, int, long y char (tipo entero)
		System.out.println("-------------------------------------BYTE");
		byte numeroB = 12;
		System.out.println("Tamaño en bytes: " + Byte.BYTES);
		System.out.println("Tamaño en bits byte: " + Byte.SIZE);
		System.out.println("Valor máximo: " + Byte.MAX_VALUE);
		System.out.println("Valor mínimo: " + Byte.MIN_VALUE);
		
		System.out.println("--------------------------------------INT");
		int entero = 2147483647;
		System.out.println("Tamaño en bytes: " + Integer.BYTES);
		System.out.println("Tamaño en bits int: " + Integer.SIZE);
		System.out.println("Valor máximo: " + Integer.MAX_VALUE);
		System.out.println("Valor mínimo: " + Integer.MIN_VALUE);
		
		System.out.println("------------------------------------SHORT");
		short variableS = 6;
		System.out.println("Tamaño en bytes: " + Short.BYTES);
		System.out.println("Tamaño en bits short: " + Short.SIZE);
		System.out.println("Valor máximo: " + Short.MAX_VALUE);
		System.out.println("Valor mínimo: " + Short.MIN_VALUE);
		
		System.out.println("-------------------------------------LONG");
		long variableL = 565;
		System.out.println("Tamaño en bytes: " + Long.BYTES);
		System.out.println("Tamaño en bits long: " + Long.SIZE);
		System.out.println("Valor máximo: " + Long.MAX_VALUE);
		System.out.println("Valor mínimo: " + Long.MIN_VALUE);
		
		
		System.out.println("------TIPOD DE NUMEROS------");
		//sin límite LONG
		var num = 21474836488L;
		System.out.println("Esta es la variable con var: " + num);
		
		//Binario (0b a la izquierda)
		var sistemNum = 0b1010;
		System.out.println("decimal: " + sistemNum);
		
		//Octal (0 a la izquierda), Exadecimal (0X a la izquierda)
		var sisn = 0XFC;
		System.out.println("--->" + sisn);
		System.out.println("------FIN------");
		
		System.out.println("-----Primitivos Float y Double");
		
		System.out.println("------------------------------------FLOAT");
		System.out.println("Tamaño en bytes: " + Float.BYTES);
		System.out.println("Tamaño en bits float: " + Float.SIZE);
		System.out.println("Valor máximo: " + Float.MAX_VALUE);
		System.out.println("Valor mínimo: " + Float.MIN_VALUE);
		
		var comaF  = 100.10f;
		
		System.out.println("-----------------------------------DOUBLE");
		System.out.println("Tamaño en bytes: " + Double.BYTES);
		System.out.println("Tamaño en bits double: " + Double.SIZE);
		System.out.println("Valor máximo: " + Double.MAX_VALUE);
		System.out.println("Valor mínimo: " + Double.MIN_VALUE);
		var comaD = 1000.10E23;
		System.out.println("---> float: " + comaF);
		System.out.println("---> double: " + comaD);
		
		System.out.println("----------------------------------BOOLEAN");
		boolean estado = true; //false;
		System.out.println("--->" + estado);
		System.out.println("---> Boolean false " + Boolean.FALSE);
		System.out.println("---> Boolean true " + Boolean.TRUE);
		
		if (estado) {
			System.out.println("---> soy verdadero");
		}else {
			System.out.println("soy falso");
		}
		
		var edad = 20;
		boolean adulto = edad >= 10;
		if (adulto) {
			System.out.println("---> : varBool la edad es mayor o igual a 10 > " + edad);
		}else {
			System.out.println("---> : varBool la edad es menor a > " + edad);
		}
		System.out.println("-------------------------------------CHAR");
		
		
		char caracter0 = "halo".charAt (1);
		char caracter1 = '\u0C6A';
		System.out.println("---> " + caracter0);
		System.out.println("---> " + caracter1);
		
	}

}
