package com.generation.jrvg.myappdb.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.jrvg.myappdb.models.UsuarioModel;
import com.generation.jrvg.myappdb.repositories.UsuarioRepository;

@Service
public class UsuarioSevice {
	@Autowired
	UsuarioRepository usuarioRepositorio;
	public ArrayList<UsuarioModel> obtenerUsuarios(){
		return (ArrayList<UsuarioModel>)usuarioRepositorio.findAll();
	}

	public UsuarioModel guardarUsuario(UsuarioModel usuario) {
		return usuarioRepositorio.save(usuario);
	}
	
}
