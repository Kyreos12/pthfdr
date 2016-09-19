package fr.gfi.skeleton.db.model;

public class Adresse {

	private String nomArrondissement;
	private String nomVoie;
	private Integer numeroDebut;
	private Integer numeroFin;

	public String getNomArrondissement() {
		return nomArrondissement;
	}

	public void setNomArrondissement(String nomArrondissement) {
		this.nomArrondissement = nomArrondissement;
	}

	public String getNomVoie() {
		return nomVoie;
	}

	public void setNomVoie(String nomVoie) {
		this.nomVoie = nomVoie;
	}

	public Integer getNumeroDebut() {
		return numeroDebut;
	}

	public void setNumeroDebut(Integer numeroDebut) {
		this.numeroDebut = numeroDebut;
	}

	public Integer getNumeroFin() {
		return numeroFin;
	}

	public void setNumeroFin(Integer numeroFin) {
		this.numeroFin = numeroFin;
	}

}
