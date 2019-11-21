export class User {
  constructor(
    public _id: number = Math.floor(Math.random()*100),
    public email_personal: string = "",
    public email_univ: string = "",
    public nombres: string = "",
    public apellido_p: string = "",
    public apellido_m: string = "",
    public dni: string = "",
    public fec_nac: string = "",
    public celular: number = 0,
    public calle: string = "",
    public nro_casa: number = 0,
    public urbanización: string = "",
    public interior: string = "",
    public departamento: string = "",
    public provincia: string = "",
    public distrito: string = "",
    public constrasena: string = "",
    public editable: boolean = false
  ) {

  }
}
