export class Cancion {
	constructor(id, titulo, autor = "ADF", anioLanzamiento = "2025") {
		this.id = id;
		this.titulo = titulo;
		this.autor = autor;
		this.anioLanzamiento = anioLanzamiento;
	}
}
