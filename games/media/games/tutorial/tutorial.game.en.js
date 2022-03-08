// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Starting Out with Undum</h1>\
        <img src= class='float_right'>\
        <p>Sientes un escalofrío que perturba tu sueño.</p>\
		<p>Estás postrado en una incómoda cama,\
        si a eso se le puede llamar cama, y sientes una leve corriente de aire frío\
        proveniente de una ventana semiabierta. Abres los ojos y echas un vistazo\
		a tu pequeño apartamento, al no haber puertas que protejan la privacidad\
		entre estancias, puedes ver la telepantalla del salón. Parece que está\
		apagada, pero eso es imposible, sabes perfectamente que El Partido (Socing)\
		la controla: ven y escuchan a través de ella.\
		</p>\
		<br>\
		<p class='transient'><a href='ventana'>Cerrar ventana</a></p>\
		<br>\
		<p class='transient'><a href='cama'>Seguir durmiendo</a></p>\
		"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
	/*
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
	*/
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='hub'>return to the topic list</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    ventana: new undum.SimpleSituation(
        "<p>Te decides a cerrar la ventana.</p>\
		<br>\
		Al incorporarte sientes molestias\
        en la espalda y el cuello a causa de la mala calidad del camastro.\
        Con esfuerzo y tras unos estiramientos consigues levantarte y dirigirte hacia la ventana.\
        Cuando alcanzas la manivela cambias de opinión y decides abrirla, notas como la refrescante brisa renueva\
        el vicioso aire del apartamento.</p>\
        <br>\
        <p>Ante tus ojos se extiende la ciudad de Londres, un mar monótono de casas grises\
        solamente interrumpido por cuatro grandes edificios. El primero, en dirección este,\
        es el Miniver (Ministerio de la Verdad en neolengua), es donde trabajas\
        falsificando eventos históricos. El segundo, un poco más al norte, está el Minipax o\
        Ministerio de la Paz, según dicen es el encargado de alcanzar la paz con Eurasia,\
        pero hace tanto tiempo que estalló la guerra que la palabra “paz” suena a algo\
        desconocido o fantasioso.</p>\
        <br>\
        <p>Por otro lado está el Ministerio de la Abundancia o Minindantia, este  último\
        palabrejo más corto te resulta más acertado porque, irónicamente, siempre faltan\
        productos esenciales en el mercado, la oferta siempre es superada por la demanda.</p>\
        <br>\
		<p>Por último está el siniestro y enigmático Minimor, Ministerio del Amor, todo aquel\
		que comete un crimen se lo llevaban a ese sitio y puede suceder dos cosas: que vuelva\
		siendo una persona completamente distinta y fanática del Partido, o bien, simplemente\
		no se le vuelve a ver. Sabes o esperas acabar allí algún día, y al contrario que otra\
		gente, al reflexionar sobre ello no te invade una sensación de pánico o miedo, sino más\
		bien alivio o consuelo.</p>\
		<br>\
		<p>De repente se enciende la telepantalla y en ella aparece una mujer fornida.</p>\
		<p>―¡Camarada!― dice gritando ―¡Hora de las Sacudidas Físicas!</p>\
		<p>Respiras hondo para tranquilizarte y borras de tú rostro la expresión de sorpresa y\
		asco, y la sustituyes por otra de completa neutralidad.</p>\
		<br>\
        <p class='transient'><a href='desayuno'>Continuar</a></p>",
        {
            heading: "Levantarte a cerrar la ventana.",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    cama: new undum.SimpleSituation(
        "<p>Decides quedarte en la cama y te quedas completamente dormido.</p>\
        <br>\
        <p>―¡Camarada! ¡Despierte!― oyes una voz gritando proveniente del salón ―¡Camarada levántese!</p>\
        <br>\
        <p>Del susto te incorporas rápidamente, notando punzadas de dolor en el cuello y la\
        espalda a causa de la mala calidad del camastro. Echas un vistazo al salón y ves\
        que la telepantalla está encendida y en ella hay una robusta mujer con cara de enfado.</p>\
        <br>\
        <p>―¡Buenos días! Ya voy, disculpe― le contestas.</p>\
		<br>\
        <p>―Vamos camarada― te responde con un tono enérgico y furioso ―estas no son\
        horas de estar durmiendo aún, ya sabe que toca ejercitarse.</p>\
		<br>\
        <p>― Sí, sí…― protestas poniendo los ojos en blanco ―las Sacudidas Físicas.</p>\
        <br>\
        <p>Ante este gesto, cuando pensabas que no podía enfadarse más, la fornida\
        monitora adopta un semblante terriblemente serio y amenazador. Tras el cual se\
        forma un incómodo silencio que te hiela la sangre, porque te percatas de que has\
		cometido un fallo garrafal: replicar de mala manera a alguien de El Partido.</p>\
		<br>\
		―Vamos con el calentamiento― dice al fin, de manera serena e imponente.\
		<br>\
        <p class='transient'><a href='desayuno'>Continuar</a></p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Quedarte en la cama",
			enter: function(character, system, from) {
						system.setQuality("crimentalidad", character.qualities.crimentalidad+1);
					}
			
        }
    ),
    desayuno: new undum.SimpleSituation(
        "<p>Al terminar de hacer ejercicio sientes como si el hambre te apuñalara el estómago. Te \
        diriges al armarito donde guardas la comida y ves las baldas desnudas donde yace el último \
        cacho de pan. Repites la misma acción para ver qué queda en el frigo, y ante tus ojos se \
        repite la misma escena: un profanado y frío mausoleo en el que solo queda una cápsula de \
        margarina.</p>\
		<br>\
        Te sientas en la mesita del salón. Crees que, por la posición de la telepantalla, ese sitio\
        escapa a su constante vigilancia. Engulles el pan duro con la insípida margarina. Abres el \
        cajón de la mesa y ves un cuaderno y un lápiz.</p>\
        <br>\
        <p><a href='./coger-cuaderno' class='once'>Coger cuaderno</a></p>\
		<p class='transient'><a href='salir-calle'>Continuar</a>.</p>\
        ",
        {
            actions: {
                "coger-cuaderno":function(character, system, action) {
										system.setQuality("crimentalidad", character.qualities.crimentalidad+1);
										system.write($("#cuaderno").html());
									}
				,
			    "no-coger-cuaderno": "<p>Pasas de coger el cuaderno. Recoges el plato sin limpiarlo porque no has\
									desperdiciado ni una sola miga.</p>\
									<p class='transient'><a href='hub'>Continuar</a>.</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "salir-calle": new undum.SimpleSituation(
        "<br>\
		<p>Una vez saciada tu hambre te pones el mono azul de trabajo, y te sirves un trago de la\
        botella de ginebra que está junto a la entrada.</p>\
		<br>\
        <p>Sales a la escaleras del edificio. Las paredes son grises y la pintura se cae a trozos. La\
        ausencia de ventanas hace que no haya ventilación y huela a algo parecido a verduras\
        cocidas. Por ello la iluminación depende de unos pequeños tubos de luz que\
        parpadean aritmicamente, provocando que todo tome un tono gris y triste.</p>\
		<br>\
		<p>Bajas las escaleras y en el último descansillo ves un gran póster. En él aparece el rostro de un\
        hombre con un espeso bigote y con unas facciones toscas y apuestas. “El Gran Hermano\
        vela por ti” lees en la parte inferior. Observándolo mejor te da la sensación de que su mirada\
        te sigue, mires por donde lo mires, pongas donde te pongas.</p>\
		<img src='media/img/poster.jpg' class='float_right' width='300'>\
        <br>\
        <p>Cuando sales a la calle te pones en marcha hacia Ministerio de la Verdad, lugar en el que\
        trabajas corrigiendo y falseando informes para que parezca que todo lo que diga el Gran\
        Hermano sea verdad. Por ejemplo, si la producción de zapatos bajó un tanto por ciento\
        respecto a la semana anterior, y el Gran Hermano dijo que subiría la producción, habría que\
        modificar todos los escritos de esa semana poniendo que la oferta fue mucho menor, así al\
        comparar entre las dos semanas se notará cierta mejoría.</p>\
		<br>\
        <p>Caminas sin prisa pero procurando no demorarte demasiado. Nadie pasa más tiempo en la\
        calle del necesario, lo justo para cumplir con las obligaciones y necesidades que se supone\
		que debes cubrir. Ya que cualquier otro comportamiento que no sea el esperado, será\
		considerado sospechoso y atraerá la atención de las numerosas telepantallas que hay por\
		las calles. Aumentando las probabilidades de ser detenido.</p>\
		<br>\
		<p>Pasas por delante de una gran telepantalla de la que suena el himno del Partido:</p>\
		<p class='transient'><a href='./mirar_pantalla' class='once'>Mirar telepantalla</a>.</p>\
		<br>\
		<p class='transient'><a href='vifurcacion'>Seguir tu camino</a>.</p>",
        {
            actions: {
                "mirar_pantalla":function(character, system, action) {
										system.setQuality("crimentalidad", character.qualities.crimentalidad+1);
										system.write($("#pantalla").html());
									}
			}
        }
    ),
    
    "vifurcacion": new undum.SimpleSituation(
        "<p>Después de un par de minutos andando tu camino puede tomar dos direcciones:\
		<a href='plaza'>ir a la plaza</a> donde se encuentra el patíbulo, o bien, \
		seguir por una <a href='callejon'>calle secundaria.</a>\
        ",
    ),
    "plaza": new undum.SimpleSituation(
        "<p>Una vez en la plaza te sorprende la gran expectación que hay congregada. Poniendo\
        un poco de atención te enteras de que va a haber una ejecución en el patíbulo. Este\
        se encuentra en el centro de la plaza, que es como una gran hondonada de losas de\
        piedra, en la que el centro conecta con cuatro escaleras al nivel superior, algo\
        parecido a un teatro romano. La multitud se agolpa en las secciones del nivel\
        superior, dejando las escaleras libres donde hay varios agentes de la Policía del\
        Pensamiento en cada una de ellas.</p>\
		<br>\
        <p>No pasa mucho tiempo hasta que la muchedumbre empieza a jalear y a propinar\
        insultos. Y de no sabes donde aparecen, bajando por una de las escaleras, tres\
        presos escoltados por varios agentes. En las grandes telepantallas que rodean a la\
        plaza empiezan restransmitir las imágenes de las caras de los condenados y, de\
        forma casi inaudible por el jaleo, un listado de los cargos por los cuales se les va a\
		aplicar la pena de muerte. Presupones que dos de ellos son extranjeros por sus\
		rasgos faciales, seguramente de Eurasia.</p>\
		<br>\
		<p>Pero antes de que lleguen al patíbulo decides que ya has tenido suficiente de ese\
		macabro espectáculo y te marchas a paso vivo. De repente te parece oír una\
		explosión de alguna calle no muy lejana.</p>\
		<br>\
        <p><a href='trabajo'>Contiuar</a></p>"
		,
        {
            enter: function(character, system, from) {
						system.setQuality("crimentalidad", character.qualities.crimentalidad+1);
					}
        }
	),
	"callejon": new undum.SimpleSituation(
		"<p>Continuas por una calle donde juegan varios niños uniformados, seguramente estén\
		de camino a la Liga Juvenil de Espías.</p>\
		<br>\
		<p>Pasas por delante de una tienda de comestibles y otros artículos de primera\
		necesidad y recuerdas que apenas queda comida en casa.</p>\
		<br>\
		<p class='transient'><a href='tienda'>Entrar en la tienda</a>.</p>\
		<br>\
		<p class='transient'><a href='bomba'>No entrar y seguir tu camino</a>.</p>"		
	),
	"tienda": new undum.SimpleSituation(
		"<p>Entras en la tienda. Al abrir la puerta suena una campanita que\
		despierta de su letargo a un aburrido dependiente.</p>\
		<br>\
		<p>―Hola camarada― Te saluda.</p>\
		<br>\
		<p>―Buenas camarada― respondes mientras miras a las estanterías\
		casi desvalijadas ―¿Le queda algo de comida?</p>\
		<br>\
		<p>―Lo dudo, voy a mirar en la parte de atrás.</p>\
		<br>\
		<p>―Se lo agradezco</p>\
		<br>\
		<p>En cuanto el dependiente desaparece por una puerta, desde la calle,\
		se oye un gran estruendo que revienta el escaparate y hace que te\
		caigas al suelo muerto de miedo. Acto seguido se escuchan unos\
		gritos y sales por la puerta para ver qué ha ocurrido.</p>\
		<br>\
		<p>―¡Acaba de caer una olla a presión!― grita un señor.</p>\
		<br>\
		<p>Donde antes se encontraban los niños jugando, ahora ves un socavón\
		ennegrecido, adoquines desperdigados por todos lados y restos de lo\
		que parecen ser jirones ensangrentados de uniformes.</p>\
		<br>\
		<p>La vista se te nubla y recuerdas la guerra con Eurasia, y si una bomba\
		ha caído en medio de Londres, lo más probable es que el frente esté\
		más cerca de lo que os intenta hacer creer las propagandas de El Partido.\
		<br>\
		<p>Con la mirada absorta y olvidándote de la comida que ibas a comprar vuelves a tu camino al trabajo\
		<br>\
		<p class='transient'><a href='trabajo'>Contuniar</a>.</p>"		
	),
	"bomba": new undum.SimpleSituation(
		"<p>Te asomas por el escaparate lleno de suciedad y huellas, y ves que la\
		tienda no ofrece gran cosa, casi todas las estanterías están vacías.</p>\
		<br>\
		<p>Sigues tu camino. Cuando pasas al lado de los niños que juegan con\
		unas cartas hechas por ellos, escuchas un creciente silbido desde el\
		cielo. Una gran masa de acero aplasta a uno de los de los críos y\
		antes de que nadie pueda procesarlo y pedri ayuda, todo se vuele negro.</p>\
		<br>\
		<p>La felicidad y una sensación de libertad te invaden, llorarías de\
		alegría si tuvieras cuerpo. Pero ya no perteneces a un mundo triste y\
		decadente, ya no eres preso de la monótona rutina, ni del miedo\
		constante al Socing. A partir de ahora eres eternamente libre.</p>\
		<br>\
		<h2>Fin del juego</h2>"
	),
	"trabajo": new undum.SimpleSituation(
		"<p>No piensas en nada, tu cuerpo actúa de manera autónoma. Subes escaleras y atraviesas\
		pasillos sin mirar ni saludar a nadie. Cuando te das cuenta estás en tu cubil de trabajo,\
		sentado, esperando recibir la nueva tarea cada vez más nervioso.</p>\
		<br>\
		<p>Hasta que al fin a través de un conducto cilíndrico, del que desconoces su origen, aparece\
		un rulo de papeles, todos blancos y uno amarillo. El amarillo son las intrucciones, en ellas\
		se explica que tienes que reescribir todos los informes adjuntos, en ellos aparece un\
		nombre de una mujer que, por las razones desconocidas, El Partido quiere hacer que\
		desaparezcan todas sus huellas, como si no hubiera existido.</p>\
		<br>\
		<p>El trabajo no te parece difícil, al contrario, lo encuentras monótono y entretenido. Hace que\
		lo que has presenciado en los últimos minutos te parezca un sueño lejano.</p>\
		<br>\
		<p>Al terminar mandas los informes antiguos por el agujero de memoria, de donde no\
		volverán a salir y nadie los volverá a ver. Y los nuevos los envías a través de otro conducto\
		cilíndrico, del que desconoces su destino.</p>\
		<br>\
		<p>El dolor de espalda de esta mañana vuelve a atacar, te levantas y sales del cubículo para\
		estirarte. En esto que ves a una mujer joven (u hombre), morena y muy atractiva caminando\
		hacia tu dirección a través del pasillo. Esta no es la primera vez que la ves, la recuerdas\
		porque suele llevar una banda de la Brigada Anti-Sex y porque siempre se sienta detrás\
		tuya durante el Minuto de Odio. En estas reuniones los trabajadores se sientan delante de\
		una gran telepantalla y escuchan las noticias y propagandas del Socing, demostrando su\
		amor por el Partido a través de vítores, y su odio a sus enemigos chillando e insultándolos.\
		Ella era de las que más se dejaba llevar por esa mezcla de amor y odio, poniéndote\
		especialmente nervioso. Sospechas que algún día te denunciará o que ella misma te\
		detenga por ser agente secreta de la Policía del Pensamiento, pero aún así mantienes el\
		contacto visual hasta que desaparece al girar por el pasillo.</p>\
		<br>\
		<p>Finalizas tu jornada laboral, es hora de volver a casa. Decides volver por un camino distinto\
		por el que has vuelto. Una zona antigua de calles estrechas poco concurridas y carentes de\
		telepantallas. Mientras piensas que aún tienes que comprar algo de comida para mañana, a\
		tus espaldas escuchas unos inquietantes pasos que se acercan cada vez más.</p>\
		<br>\
		<p class='transient'><a href='ocultarse'>Ocultarte en un callejón</a>.</p>\
		<br>\
		<p class='transient'><a href='correr'>Acelerar el paso y huir</a>.</p>\
		"
	),
	"ocultarse": new undum.SimpleSituation(
		"<p>Girando a tu izquierda te metes en un callejón deshabitado para esperar al individuo\
		de frente. Oyes como sus pasos se aceleran, y de improvisto, una pequeña figura\
		llena de rulos oscuros se choca contigo.</p>\
		<br>\
		<p>―¡Ay!― exclama una voz de mujer ―¿Pero qué haces? ¡No te detengas justo a la vuelta de la esquina!</p>\
		<br>\
		<p>Para tu asombro reconoces esa voz, es la chica morena del trabajo.</p>\
		<br>\
		<p>―Llevo tiempo tiempo queriendo contactar contigo sin saber cómo.</p>\
		<br>\
		<p>No parece la mujer fría y despiadada que ves todos los días en el trabajo. No lleva la\
		banda de la Brigada Anti-Sex y el mono lo tiene un poco desabrochado dejando\
		entrever cierto encanto y atractivo. Su actitud sincera y amena hace que olvides el\
		odio que profesas por ella, dándole una oportunidad.</p>\
		<br>\
		<p>―Está bien, ¿qué quieres?― respondes.</p>\
		<br>\
		<p>―Sé de un sitio seguro donde podemos hablar― dice con voz baja ― Sígueme.</p>\
		<br>\
		<p class='transient'><a href='seguirla'>Seguirla</a>.</p>\
		<br>\
		<p class='transient'><a href='correr'>Ignorarla e irte a casa</a>.</p>\
		"
	),
	"seguirla": new undum.SimpleSituation(
		"<p>Por un lado sabes que puede ser una trampa que puede hacer que te cojan\
		preso. Pero por otro lado, sientes que el hecho de seguirla es una acción que\
		transgrede los principios y normas El Partido. Optas por esta última.</p>\
		<br>\
		<p>Te conduce por un par de callejones en absoluto silencio, atravesandolos\
		rápidamente y parándose en seco en cada intersección de caminos, mirando\
		a ambos lados comprobando que no haya nadie y ninguna telepantalla a la vista.</p>\
		<br>\
		<p>Finalmente os deteneis en un pequeño portal que abre con una llave que se saca del escote. Y rápidamente entrais.</p>\
		<br>\
		<p>―Aquí es donde vivía mi abuela― dice mientras cierra con cuidado la puerta detrás\
		tuya― Perdona que no haya hablado hasta ahora, podía haber algún micrófono oculto.\
		Siempre cabe la posibilidad de que uno de esos cerdos reconozca tu voz.</p>\
		<br>\
		<p>Ante ti se alarga un pasillo estrecho poco iluminado con puertas cerradas, la única\
		puerta abierta es la del fondo. La chica te invita a pasar y ves un cómodo salón: un\
		par de ventanas, un grán sofá acompañado de dos butacas y una pequeña chimenea. Sobre\
		esta hay un cuadro, en él se representa a un hombre en lo alto de risco contemplando un mar de nubes.<p>\
		<br>\
		<p>―¿Te gusta?― te dice la chica señalando el cuadro ―No me acuerdo ni del nombre del\
		autor ni del cuadro, tampoco está firmado porque lo más seguro es que sea una imitación.</p>\
		<br>\
		<p>No le contestas, sigues escéptico mirando alrededor, extrañado por la ausencia de\
		telepantalla. Mientras la chica se sienta en el sofá.</p>\
		<br>\
		<p>―Bueno, ¿te vas a sentar o qué?― dice mientras te señala el sitio al lado de ella\
		―Estate tranquilo, aquí estamos seguros.</p>\
		"
	),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    
	crimentalidad: new undum.IntegerQuality( 
		"Crimentalidad", {priority:"0001", group:'stats'}),
	skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    )/*,
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )*/
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
	
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
	character.qualities.crimentalidad = 0;
	
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
	/*
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
	*/
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
