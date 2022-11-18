package oop;

public class Submarino {
	// main temporal
	 void submenu() {
		Menu m = new Menu();
		OperacionesAritmeticas oa = new OperacionesAritmeticas();
		int opcion = m.subMenuOp();
		do {
			switch (opcion) {
			case 1: {
				System.out.println(oa.add());
				break;
			}
			case 2: {
				System.out.println(oa.sustrac());
			}
			case 3: {
				System.out.println(oa.producto());
			}
			case 4: {
				System.out.println(oa.divide());
			}
			case 5: {
				System.out.println(oa.modulo());
			}
			case 6:{
				System.out.println("Soy el caso 6");
			}
			default:
				break;
			}

		} while (opcion != 7);

	}
	 
}
