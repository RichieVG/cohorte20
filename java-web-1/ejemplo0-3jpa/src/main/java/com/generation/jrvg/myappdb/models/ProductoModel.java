package com.generation.jrvg.myappdb.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "producto")
public class ProductoModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;
	private String nombreProducto;
	/***********relaciones*************/
	@ManyToOne // muchos productos a un solo usuario
	private UsuarioModel usuario;
	
	//La relación de visibilidad mo existe con detalle
	//en donde no es necesariover al detalle orden desde producto
	//pero al contrario si debe existir la visibilidad 
	
	/**********************************/
	
	public ProductoModel() {
		
	}

	public ProductoModel(Long id, String nombreProducto) {

		this.id = id;
		this.nombreProducto = nombreProducto;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public UsuarioModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioModel usuario) {
		this.usuario = usuario;
	}
	
	
}
