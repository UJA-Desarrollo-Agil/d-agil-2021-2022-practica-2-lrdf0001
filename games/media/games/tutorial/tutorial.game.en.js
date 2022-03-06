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
		<p class='transient'><a href='telepantalla'>Mirar telepantalla</a>.</p>\
		<br>\
		<p class='transient'><a href=''>Seguir tu camino</a>.</p>\
		"/*,
        {
            actions: {
                "seguir-camno": "<p>Sigues tu camino sin problema alguno.</p>\
								<p class='transient'><a href=''>Continuar</a>.</p>\
								"
                }
        }*/
    ),
    "telepantalla": new undum.SimpleSituation(
        "<p>Te detienes a mirarla.</p>\
		<br>\
        <p>Por alguna extraña razón la música y los colores de las imágenes atraen tu atención.\
        En ellas se suceden una serie de lemas junto con imágenes del Gran Hermano:</p>\
		<br>\
        <h2>La Guerra es Paz</h2>\
        <h2>La Libertad es Esclavitud</h2>\
        <h2>La Ignorancia es Fuerza</h2>\
		<br>\
        <p>Ante esta visión no eres capaz de controlarte y poner una expresión de \
        preocupación y miedo. Te vuelves rápidamente y sigues tu camino.</p>\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>\
		<br>\
		<p class='transient'><a href=''>Continuar</a>.\
		",
        {
            enter: function(character, system, from) {
                system.setQuality("crimentalidad", character.qualities.crimentalidad+1);
            }
        }
    ),
    "vifurcacion": new undum.SimpleSituation(
        "<p>Después de un par de minutos andando tu camino puede tomar dos direcciones:\
		<a href='plaza'>ir a la plaza</a> donde se encuentra el patíbulo, o bien, \
		seguir por una <a href='callejon'>calle secundaria.</a>\
        ",
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
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
