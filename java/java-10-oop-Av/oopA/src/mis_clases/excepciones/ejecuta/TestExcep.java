package mis_clases.excepciones.ejecuta;

import mis_clases.excepciones.operacion.Division;

public class TestExcep {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			Division d = new Division(4, 2);
			d.visualizarD();
			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			e.printStackTrace();
			
		}
		System.out.println("Continuará...");
	}
	
}
