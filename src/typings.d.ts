// * declaración de módulos para CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

/*
 * * declaración de módulos para imagenes
 * NOTA: para cada tipo de formato de imagenes debe declarase como un modulo independiente
 */
declare module '*.jpg' {
  const value: any;
  export default value;
}
