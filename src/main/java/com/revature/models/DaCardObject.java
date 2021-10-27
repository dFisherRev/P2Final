package com.revature.models;

public class DaCardObject {

	private String svg;
	private String png;
	
	public DaCardObject(String svg, String png) {
		super();
		this.svg = svg;
		this.png = png;
	}
	public DaCardObject() {
		super();
	}
	public String getSvg() {
		return svg;
	}
	public void setSvg(String svg) {
		this.svg = svg;
	}
	public String getPng() {
		return png;
	}
	public void setPng(String png) {
		this.png = png;
	}
	
	
	
}
