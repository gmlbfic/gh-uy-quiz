const ORDER = ["DW","JI","MI","PA","OS","KE","RY","ME","TO"];
const CH = {
  DW:{name:"La Calculadora", color:"#9A7B12", emblem:"🧮", bio:"Entraste a la casa con una planilla mental de todos. Sabés quién vota a quién antes que ellos mismos, y tus alianzas duran exactamente lo que te convienen. Afuera te dicen fría; vos le decís método. Pero si hay que llegar a la final, nadie juega mejor que vos."},
  JI:{name:"El Gaucho", color:"#3E6FB0", emblem:"🧉", bio:"Hablás poco de estrategia y mucho de cualquier otra cosa. Tus ocurrencias salvan cualquier almuerzo tenso, y mientras los demás se pelean, vos tomás mate y mirás a cámara. Zafás de las placas sin saber bien cómo. Pero cuando algo te importa, sos el primero en plantarte."},
  MI:{name:"La Diva", color:"#C8312B", emblem:"🪞", bio:"Sabés dónde está cada cámara y cuál te favorece. Para vos la casa no es una competencia: es tu programa, y los demás son el elenco. Decís lo que pensás sin filtro, aunque después tengas que pedir perdón en el confesionario. Pero cuando alguien se derrumba, sos la primera en abrazarlo, con cámara o sin ella."},
  PA:{name:"La Tía", color:"#C2577F", emblem:"🫂", bio:"Sos la que escucha los dramas a las tres de la mañana y la que reparte el último pedazo de torta. Todos te cuentan todo, y vos te guardás lo tuyo para el confesionario. A veces te olvidás de que también estás jugando. Pero el día que hablás, la casa entera se calla."},
  OS:{name:"El Profesor", color:"#2E7D6B", emblem:"📚", bio:"Para vos la convivencia es un caso de estudio. Tenés una teoría sobre cómo vota el público y se la explicás a quien no te la pidió. Corregís a todos, incluso en la placa. Pero cuando la casa se vuelve un caos, sos el único que mantiene la cabeza fría."},
  KE:{name:"La Ecónoma", color:"#D07A1F", emblem:"🛒", bio:"Mientras los demás se clavan puñales, vos contás cuántos paquetes de fideos quedan. Sabés el presupuesto de memoria y defendés la alacena como un tesoro nacional. Algunos te subestiman por no meterte en el juego. Pero sin vos, en esa casa se come aire."},
  RY:{name:"El Camaleón", color:"#6B4FA0", emblem:"🦎", bio:"Esta semana estás con un grupo; la que viene, con el otro. Cambiás de alianza, de look y de discurso según cómo viene la placa. A veces confundís estrategia con humo. Pero nadie se adapta tan rápido como vos, y en un reality eso vale oro."},
  ME:{name:"La Fiestera", color:"#B0306A", emblem:"🪩", bio:"Sos la que pide música el sábado y la última en irse a dormir. Decís todo lo que pensás, y la mitad no te lo acordás al otro día. Te pasan cosas que a nadie más le pasan, y casi siempre en vivo. Pero nunca fingís ser otra persona, y el público lo sabe."},
  TO:{name:"El Reglamento", color:"#66737D", emblem:"📋", bio:"Sabés cada sanción de memoria y se la recordás a todos. Sos la voz de la sensatez en una casa que no quiere escucharla, y por eso terminás nominado cada dos por tres. Pero sos el único que juega limpio, y algún día eso se va a notar."}
};

// ---------- Preguntas: [texto, emoji provisorio, principal, secundario, imagen] ----------
// Cuando estén las imágenes de Magnific, se completa el 5.º campo con su URL o data URI.
const Q = [
 {q:"Reunión sorpresa con el presupuesto completo de la semana. ¿Qué hacés?", c:"#E9B07A", o:[
  ["Hacés el asado, y nadie más toca la parrilla","🔥","DW","TO"],
  ["Te dedicás a ensuciar: cuatro vasos, tres platos y la tabla del chorizo","🍽️","MI","RY"],
  ["Tomás algo desde la reposera y garroneás sin culpa","🍺","JI","PA"],
  ["Llorás por el pedazo de pan que no comiste","🥖","KE","MI"],
  ["Le explicás al asador cuál es el punto exacto de la carne","🥩","OS","TO"],
  ["Lavás todo mientras los demás comen","🧽","PA","JI"]]},
 {q:"Si pudieras entrar un objeto extra a la casa, ¿cuál llevás?", c:"#9CC5A1", o:[
  ["Un kit de supervivencia","🎒","DW","KE"],
  ["Un dibujo enmarcado hecho por vos","🖼️","PA","KE"],
  ["Una taza con tu propia cara","☕","MI","ME"],
  ["Un libro en francés","📕","OS","RY"],
  ["Una broma envuelta en cinco cajas, una dentro de otra","📦","JI","ME"],
  ["Una caja de bombones ya abierta, \u201cpara probarlos\u201d","🍫","KE","MI"]]},
 {q:"¿Dónde pasás el día en la casa?", c:"#A9BCE0", o:[
  ["Vigilando la puerta del confesionario, para saber quién entra","🚪","DW","OS"],
  ["Frente a la cámara principal, por las dudas","🎥","MI","RY"],
  ["En el jardín, regando plantas donde nadie te pide nada","🪴","PA","TO"],
  ["Donde haya alguien a quien hacerle una broma","📎","JI","MI"],
  ["Al borde de la piscina, con un libro y juzgando en silencio","🏊","OS","DW"],
  ["A menos de tres metros de la heladera","🧊","KE","ME"]]},
 {q:"Salís de la casa y te hacés un Tinder. ¿Qué foto ponés?", c:"#F2A7B8", o:[
  ["Una selfie en el auto, con lentes de sol y pose de jefe","🕶️","MI","RY"],
  ["Posando orgulloso con un animal de granja","🐄","DW","KE"],
  ["Una foto espontánea, riéndote y medio desenfocada","😂","JI","PA"],
  ["En un taller, con las manos manchadas de pintura","🎨","PA","OS"],
  ["Frente a un museo europeo, copa de vino en mano","🍷","OS","RY"],
  ["Una foto borrosa de fiesta a las 4 a. m.","🥳","ME","MI"]]},
 {q:"Domingo, 19 h, justo antes de la gala. ¿Dónde estás?", c:"#C9B6E4", o:[
  ["Armando una broma con cinta y papel de regalo","🎁","JI","PA"],
  ["Recorriendo una muestra en un museo","🏛️","OS","JI"],
  ["Cambiándote de look por tercera vez antes de la gala","👗","RY","DW"],
  ["En el sofá, con manta y una montaña de snacks","🛋️","KE","JI"],
  ["En un after con luces de boliche","🪩","ME","KE"],
  ["Con una película triste y una caja de pañuelos","🎬","TO","PA"]]},
 {q:"Ganás 10.000 dólares en GH. ¿En qué los gastás?", c:"#B5D98A", o:[
  ["Un búnker lleno de latas de conserva","🥫","DW","TO"],
  ["Materiales de arte","🖌️","PA","OS"],
  ["Un viaje a la ópera en Viena","🎭","OS","RY"],
  ["Fichas de casino","🎰","KE","ME"],
  ["Un asado para toda la casa, invitás vos","🍝","MI","KE"],
  ["Una valija armada y un pasaje a cualquier lado","🧳","JI","MI"]]},
 {q:"Te gusta alguien de la casa. ¿Qué hacés?", c:"#F4B48C", o:[
  ["Una declaración pública, con globos y un cartel con su nombre","🎈","MI","DW"],
  ["La hacés reír todos los días","☕","JI","PA"],
  ["Le proponés un contrato de relación con cláusulas","📜","DW","OS"],
  ["Le hacés un dibujo que nunca le vas a dar","✏️","PA","TO"],
  ["Le regalás la misma flor a dos personas distintas","🌹","RY","ME"],
  ["La mirás de lejos, en silencio","🌧️","TO","PA"]]},
 {q:"Te toca organizar la fiesta del sábado. ¿Cómo es?", c:"#F7D56A", o:[
  ["Temática: vos. Con karaoke","🎤","MI","ME"],
  ["Decoración hecha a mano hasta las 3 a. m.","✂️","PA","KE"],
  ["Cena de pasos con maridaje","🥂","OS","RY"],
  ["Con lista de invitados verificada y plan de evacuación","📋","DW","OS"],
  ["Barra libre, y nadie se acuerda de cómo terminó","🍹","ME","JI"],
  ["Con cierre a las 22 h, por respeto a los vecinos","🕙","TO","DW"]]}
];

const PRIMARY = 2, SECONDARY = 1;
function scoreFrom(ans){
  const s = {}, p = {};
  ORDER.forEach(k => { s[k] = 0; p[k] = 0; });
  ans.forEach((a, i) => {
    if (a == null) return;
    const [, , pri, sec] = Q[i].o[a];
    s[pri] += PRIMARY; p[pri] += 1; s[sec] += SECONDARY;
  });
  const ranked = [...ORDER].sort((a, b) => s[b] - s[a] || p[b] - p[a] || ORDER.indexOf(a) - ORDER.indexOf(b));
  return { s, ranked };
}

// ---------- Cierre grupal: diagnóstico de la casa ----------
const DIAG = {
  DW: ["Casa de estrategas", "Acá nadie da un paso sin calcular el voto. Las alianzas se firman en la cocina y se rompen en el confesionario."],
  JI: ["Casa de joda", "La casa más divertida y la menos productiva del programa. Nadie juega en serio, todos se ríen, y el público los quiere igual."],
  MI: ["Casa de protagonistas", "Todos quieren la cámara y nadie quiere lavar los platos. Cada charla termina en monólogo."],
  PA: ["Casa de contención", "Acá se escucha, se abraza y se llora en grupo. Tan sana que la producción ya no sabe qué editar."],
  OS: ["Casa de debate", "Toda discusión termina en una tesis. Es la casa más culta y la más agotadora para convivir."],
  KE: ["Casa de la olla", "El tema de conversación es la compra semanal. Mucha felicidad, poca estrategia y siempre falta pan."],
  RY: ["Casa de traidores", "Las alianzas duran lo que dura una placa. Nadie sabe con quién está nadie, ni siquiera ellos."],
  ME: ["Casa de fiesta", "El sábado empieza el jueves. Nadie recuerda cómo terminó la última gala."],
  TO: ["Casa reglamentaria", "Hay sanciones para todo y alguien las anota. La casa más ordenada y la más aburrida de mirar."],
};
const DIAG_TWIST = {
  DW: "alguien ya está contando votos.",
  JI: "hay una broma en marcha en el jardín.",
  MI: "alguien le está hablando a la cámara ahora mismo.",
  PA: "alguien está consolando a otro en el confesionario.",
  OS: "alguien está por explicar cómo vota el público.",
  KE: "la alacena tiene candado.",
  RY: "alguien acaba de cambiar de bando.",
  ME: "el sábado ya empezó.",
  TO: "alguien está leyendo el reglamento en voz alta.",
};
const DIAG_BALANCED = ["Casa sin líder", "No manda nadie y opina todo el mundo. Hay un poco de cada rol, que es la receta exacta para una semana de placas imposibles."];
