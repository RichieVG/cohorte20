package multiple;

public class Resta implements OperacionesAritmeticas, Operaciones{

	private double c;
	private double d;
	double pValor;
	double sValor;
	
	public Resta(double c, double d) {
		this.c = c;
		this.d = d;
	}
		
	
	@Override
	public double sumar() {
		// TODO Auto-generated method stub
		return 0;
	}
	
	@Override
	public double restar() {
		// TODO Auto-generated method stub
		return pValor - sValor;
	}
		
	@Override
	public void mensajes() {
		// TODO Auto-generated method stub
		System.out.println("Hola soy la resta ");
	}
	
	
}
