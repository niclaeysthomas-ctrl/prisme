// PRISME — base de connaissances
// Chaque domaine : découvertes (fiches), notions (à comprendre),
// quotidien (dont sécurité/dangers), exos (QCM).

const DATA = {
  domaines: [

    /* ============================ ÉLECTRICITÉ ============================ */
    {
      id: "electricite",
      nom: "Électricité",
      emoji: "⚡",
      accent: "#f4c542",
      tagline: "Le mouvement des charges, dompté.",
      decouvertes: [
        {
          titre: "La pile de Volta",
          annee: "1800",
          qui: "Alessandro Volta",
          resume: "Premier générateur de courant continu stable : un empilement de disques de zinc et de cuivre séparés par du carton imbibé de saumure.",
          pourquoi: "Avant, on ne savait produire que des décharges brèves (électricité statique). La pile fournit un courant continu, ce qui rend possibles toutes les expériences suivantes — électrolyse, électroaimant, télégraphe. Le volt lui rend hommage."
        },
        {
          titre: "La loi d'Ohm",
          annee: "1827",
          qui: "Georg Ohm",
          resume: "U = R × I : la tension aux bornes d'un conducteur est proportionnelle au courant qui le traverse, le coefficient étant la résistance.",
          pourquoi: "C'est l'équation de base de tout circuit. Elle permet de calculer, dimensionner, protéger. Sans elle, pas de fusible correctement choisi ni de câble au bon diamètre."
        },
        {
          titre: "L'induction électromagnétique",
          annee: "1831",
          qui: "Michael Faraday",
          resume: "Un aimant qu'on déplace dans une bobine y fait naître un courant. Un champ magnétique variable crée une tension.",
          pourquoi: "C'est le principe de TOUTES les centrales électriques (sauf le photovoltaïque) et de tous les transformateurs. La quasi-totalité de l'électricité que tu consommes vient de ce phénomène."
        },
        {
          titre: "Les équations de Maxwell",
          annee: "1865",
          qui: "James Clerk Maxwell",
          resume: "Quatre équations qui unifient électricité et magnétisme en une seule théorie et prédisent l'existence d'ondes électromagnétiques se déplaçant à la vitesse de la lumière.",
          pourquoi: "Elles révèlent que la lumière EST une onde électromagnétique, et ouvrent la porte à la radio, au Wi-Fi, au four à micro-ondes. Un des sommets de la physique du XIXe siècle."
        },
        {
          titre: "La guerre des courants",
          annee: "1880-1893",
          qui: "Edison (continu) vs Tesla & Westinghouse (alternatif)",
          resume: "Bataille industrielle pour imposer le standard de distribution. Le courant alternatif l'emporte car il se transforme facilement en haute tension, ce qui limite les pertes sur de longues distances.",
          pourquoi: "C'est pour ça que ta prise est en alternatif (230 V, 50 Hz en Europe). Le transport à haute tension puis l'abaissement local est ce qui rend un réseau national viable."
        }
      ],
      notions: [
        {
          titre: "Tension, courant, résistance",
          texte: "La tension (volt, V) est la différence de potentiel, l'équivalent d'une pression. Le courant (ampère, A) est le débit de charges. La résistance (ohm, Ω) freine ce débit. Analogie de l'eau : la tension = la pression, le courant = le débit, la résistance = un tuyau étroit."
        },
        {
          titre: "La puissance",
          texte: "P = U × I (watt). C'est l'énergie consommée par seconde. Un radiateur de 2000 W sur 230 V tire environ 8,7 A. Multiplie la puissance par la durée et tu obtiens l'énergie (kWh) — ce que facture ton fournisseur."
        },
        {
          titre: "Continu vs alternatif",
          texte: "En continu (DC), le courant va toujours dans le même sens (pile, batterie, USB). En alternatif (AC), il change de sens 50 fois par seconde (prise murale). L'alternatif se transforme facilement en haute/basse tension, d'où son usage pour le transport."
        },
        {
          titre: "Série et parallèle",
          texte: "En série, les composants se suivent : même courant partout, les tensions s'additionnent (guirlande à l'ancienne : une ampoule grillée éteint tout). En parallèle, chacun a la pleine tension et un chemin propre : c'est le câblage d'une maison."
        }
      ],
      quotidien: [
        {
          titre: "Ce qui tue, c'est le courant, pas la tension",
          danger: true,
          texte: "Le danger vient de l'intensité qui traverse le corps. Dès ~30 mA (0,03 A) le passage dans le thorax peut provoquer une fibrillation cardiaire. C'est pourquoi les interrupteurs différentiels d'une maison se déclenchent à 30 mA : ils comparent le courant qui part et celui qui revient, et coupent si la différence fuit… par exemple à travers toi."
        },
        {
          titre: "Pourquoi l'eau aggrave tout",
          danger: true,
          texte: "La peau sèche résiste (~100 000 Ω) et te protège. Mouillée, elle tombe à ~1 000 Ω. À tension égale, le courant est donc ~100 fois plus grand (loi d'Ohm). D'où l'interdiction absolue d'appareils branchés au bord d'une baignoire, et les prises protégées dans les salles de bain."
        },
        {
          titre: "Fusible et disjoncteur : à quoi ils servent vraiment",
          danger: true,
          texte: "Ils protègent les CÂBLES d'un incendie, pas forcément toi. Si trop de courant passe (court-circuit, surcharge), le fil chauffe et peut mettre le feu. Le disjoncteur coupe avant. Ne JAMAIS remplacer un fusible par un modèle de calibre supérieur ou un bout de fil : tu débranches la sécurité anti-incendie."
        },
        {
          titre: "Le rôle de la terre",
          texte: "Le fil de terre (vert/jaune) relie la carcasse métallique des appareils au sol. Si un fil sous tension touche la carcasse, le courant part à la terre et fait sauter le différentiel, au lieu d'attendre que tu touches l'appareil. C'est une protection invisible mais essentielle."
        }
      ],
      exos: [
        {
          q: "Un radiateur de 1150 W est branché sur du 230 V. Quel courant tire-t-il environ ?",
          choix: ["0,2 A", "5 A", "50 A", "230 A"],
          bonne: 1,
          explication: "I = P / U = 1150 / 230 = 5 A. C'est pour ça qu'un tel appareil passe sans problème sur un circuit protégé à 16 A."
        },
        {
          q: "À partir de quelle intensité traversant le corps le cœur risque-t-il la fibrillation ?",
          choix: ["Environ 30 mA", "Environ 2 A", "Environ 10 A", "Environ 100 A"],
          bonne: 0,
          explication: "Autour de 30 mA (0,03 A) le risque de fibrillation devient sérieux. D'où le seuil des interrupteurs différentiels domestiques."
        },
        {
          q: "Pourquoi transporte-t-on l'électricité à très haute tension (400 000 V) sur les grandes lignes ?",
          choix: ["Pour aller plus vite", "Pour réduire les pertes par effet Joule", "Parce que c'est moins dangereux", "Pour éclairer les pylônes"],
          bonne: 1,
          explication: "À puissance égale, plus la tension est haute, plus le courant est faible. Or les pertes chauffent avec le carré du courant (P = R·I²). Haute tension = faible courant = peu de pertes."
        },
        {
          q: "Deux ampoules identiques en série, une grille. Que se passe-t-il ?",
          choix: ["L'autre brille plus fort", "L'autre s'éteint aussi", "Rien ne change", "Un court-circuit se produit"],
          bonne: 1,
          explication: "En série il n'y a qu'un seul chemin : l'ampoule grillée coupe le circuit, tout s'éteint. C'est le défaut des vieilles guirlandes."
        },
        {
          q: "Tu touches un appareil défectueux avec les mains mouillées. Pourquoi est-ce bien plus dangereux que les mains sèches ?",
          choix: ["L'eau augmente la tension", "L'eau baisse ta résistance, donc le courant augmente", "L'eau attire la foudre", "Ça ne change rien"],
          bonne: 1,
          explication: "Mains mouillées, ta résistance chute (~1000 Ω au lieu de ~100 000). À tension fixe, I = U/R explose. Le courant qui te traverse peut devenir mortel."
        }
      ]
    },

    /* ============================ ÉLECTRONIQUE ============================ */
    {
      id: "electronique",
      nom: "Électronique",
      emoji: "🔌",
      accent: "#4fd1c5",
      tagline: "Faire penser des cailloux avec des électrons.",
      decouvertes: [
        {
          titre: "La diode et le redressement",
          annee: "1904",
          qui: "John Ambrose Fleming",
          resume: "Composant qui laisse passer le courant dans un seul sens. La première version était un tube à vide.",
          pourquoi: "Convertir l'alternatif en continu (redressement) est indispensable : tous les chargeurs le font. La diode est aussi la brique de la LED et du panneau solaire."
        },
        {
          titre: "Le transistor",
          annee: "1947",
          qui: "Bardeen, Brattain, Shockley (Bell Labs)",
          resume: "Un petit composant à semi-conducteur qui amplifie ou commute un signal électrique, sans pièce mobile ni tube fragile.",
          pourquoi: "C'est l'invention la plus importante du XXe siècle pour la technologie. Il remplace les tubes à vide, permet la miniaturisation, et tout ordinateur en contient aujourd'hui des milliards. Prix Nobel 1956."
        },
        {
          titre: "Le circuit intégré",
          annee: "1958",
          qui: "Jack Kilby & Robert Noyce",
          resume: "Graver plusieurs composants (transistors, résistances) sur une même puce de silicium au lieu de les câbler un à un.",
          pourquoi: "C'est le passage à l'échelle. On passe de circuits câblés à la main à des puces contenant aujourd'hui des dizaines de milliards de transistors. Sans lui, pas de smartphone."
        },
        {
          titre: "La loi de Moore",
          annee: "1965",
          qui: "Gordon Moore",
          resume: "Observation (pas une loi physique) : le nombre de transistors par puce double environ tous les deux ans.",
          pourquoi: "Cette prédiction a tenu un demi-siècle et a guidé toute l'industrie. Elle explique pourquoi ton téléphone est plus puissant que les ordinateurs de la mission Apollo."
        }
      ],
      notions: [
        {
          titre: "Semi-conducteur : ni isolant ni conducteur",
          texte: "Le silicium ne conduit ni très bien ni très mal — et surtout on peut contrôler sa conduction en le 'dopant' avec des impuretés. C'est ce contrôle qui rend possibles diodes et transistors : on commande le passage du courant électriquement."
        },
        {
          titre: "Le transistor comme interrupteur",
          texte: "Un transistor a trois bornes. Un petit signal sur la borne de commande ouvre ou ferme le passage du courant entre les deux autres. Un interrupteur commandé par de l'électricité, sans pièce mobile : c'est la brique du 0 et du 1."
        },
        {
          titre: "Analogique vs numérique",
          texte: "Un signal analogique varie continûment (le son d'un vinyle, une aiguille). Un signal numérique n'a que deux états, 0 et 1. Le numérique résiste au bruit : un signal un peu abîmé reste lisible tant qu'on distingue le 0 du 1. D'où sa domination."
        },
        {
          titre: "La résistance de limitation",
          texte: "Une LED grille si on lui envoie trop de courant. On place une résistance en série pour le limiter à une valeur sûre. C'est le premier réflexe de tout montage : protéger le composant fragile."
        }
      ],
      quotidien: [
        {
          titre: "Les condensateurs restent chargés",
          danger: true,
          texte: "Dans un chargeur, un micro-ondes ou un vieux téléviseur, de gros condensateurs peuvent garder une charge dangereuse plusieurs minutes APRÈS le débranchement. On n'ouvre jamais ce genre d'appareil sans savoir décharger ces condensateurs — le micro-ondes en particulier peut être mortel."
        },
        {
          titre: "Pourquoi les appareils chauffent",
          texte: "Tout composant dissipe de l'énergie sous forme de chaleur (effet Joule). C'est pourquoi un ordinateur a des ventilateurs et un radiateur en cuivre. Boucher les aérations d'un portable posé sur un lit, c'est risquer la surchauffe."
        },
        {
          titre: "Les piles et batteries lithium",
          danger: true,
          texte: "Une batterie lithium percée, écrasée ou gonflée peut s'emballer thermiquement et prendre feu. On ne perce jamais une batterie, on ne charge pas une batterie gonflée, et on ne les jette pas à la poubelle (métaux + risque incendie) — bac de recyclage dédié."
        }
      ],
      exos: [
        {
          q: "À quoi sert principalement une diode ?",
          choix: ["Amplifier un son", "Laisser passer le courant dans un seul sens", "Stocker de l'énergie", "Mesurer la température"],
          bonne: 1,
          explication: "La diode est un composant à sens unique. C'est la base du redressement (AC → DC) que fait tout chargeur."
        },
        {
          q: "Quelle invention de 1947 a rendu possible la miniaturisation de l'électronique ?",
          choix: ["Le tube à vide", "Le transistor", "L'ampoule", "Le condensateur"],
          bonne: 1,
          explication: "Le transistor (Bell Labs, 1947) remplace le tube à vide : plus petit, robuste, peu gourmand. Il est la brique de toute l'informatique."
        },
        {
          q: "Pourquoi met-on une résistance en série avec une LED ?",
          choix: ["Pour la rendre plus lumineuse", "Pour limiter le courant et l'empêcher de griller", "Pour changer sa couleur", "Pour la faire clignoter"],
          bonne: 1,
          explication: "Sans limitation, la LED tire trop de courant et grille. La résistance fixe un courant sûr."
        },
        {
          q: "Qu'affirme la loi de Moore ?",
          choix: ["La vitesse de la lumière est constante", "Le nombre de transistors par puce double ~tous les 2 ans", "Le courant est proportionnel à la tension", "L'énergie se conserve"],
          bonne: 1,
          explication: "C'est une observation empirique de Gordon Moore (1965) sur le rythme de la miniaturisation, pas une loi physique."
        },
        {
          q: "Pourquoi ne faut-il jamais ouvrir un four à micro-ondes débranché sans précaution ?",
          choix: ["Il est encore chaud", "Son condensateur haute tension peut rester chargé et être mortel", "Les ondes continuent", "Rien de dangereux"],
          bonne: 1,
          explication: "Le condensateur haute tension d'un micro-ondes peut conserver une charge mortelle longtemps après le débranchement."
        }
      ]
    },

    /* ============================ ASTROPHYSIQUE ============================ */
    {
      id: "astrophysique",
      nom: "Astrophysique",
      emoji: "🌌",
      accent: "#a78bfa",
      tagline: "Lire l'univers dans la lumière qui nous arrive.",
      decouvertes: [
        {
          titre: "Les lois de Kepler",
          annee: "1609-1619",
          qui: "Johannes Kepler",
          resume: "Les planètes décrivent des ellipses (pas des cercles) dont le Soleil occupe un foyer ; elles vont plus vite près du Soleil ; le carré de la période est proportionnel au cube de la distance.",
          pourquoi: "Première description mathématique exacte du système solaire, à partir des observations de Tycho Brahe. Elle prépare la gravitation de Newton."
        },
        {
          titre: "La gravitation universelle",
          annee: "1687",
          qui: "Isaac Newton",
          resume: "Deux masses s'attirent avec une force proportionnelle à leurs masses et inversement au carré de leur distance. La même loi fait tomber la pomme et tourner la Lune.",
          pourquoi: "Unification du ciel et de la Terre : les mêmes lois partout. On peut désormais calculer les trajectoires — comètes, satellites, sondes spatiales."
        },
        {
          titre: "La relativité générale",
          annee: "1915",
          qui: "Albert Einstein",
          resume: "La gravité n'est pas une force mais la courbure de l'espace-temps par la masse. La lumière elle-même est déviée en passant près d'un astre massif.",
          pourquoi: "Elle prédit les trous noirs, l'expansion de l'univers, la déviation de la lumière (confirmée en 1919), et corrige le GPS. Sans elle, ton GPS dériverait de plusieurs km par jour."
        },
        {
          titre: "L'expansion de l'univers",
          annee: "1929",
          qui: "Edwin Hubble",
          resume: "Les galaxies s'éloignent de nous d'autant plus vite qu'elles sont lointaines. L'univers est en expansion.",
          pourquoi: "En remontant le temps, tout était concentré : c'est l'idée du Big Bang. Ça transforme la cosmologie en science observationnelle."
        },
        {
          titre: "Le fond diffus cosmologique",
          annee: "1965",
          qui: "Penzias & Wilson",
          resume: "Un rayonnement micro-onde uniforme dans tout le ciel : la lumière fossile émise ~380 000 ans après le Big Bang, quand l'univers est devenu transparent.",
          pourquoi: "C'est la preuve observationnelle la plus forte du Big Bang. Sa cartographie très fine nous renseigne sur l'âge, la composition et la géométrie de l'univers."
        }
      ],
      notions: [
        {
          titre: "L'année-lumière est une distance",
          texte: "C'est la distance parcourue par la lumière en un an (~9 460 milliards de km). Voir loin, c'est voir dans le passé : le Soleil, tu le vois tel qu'il était il y a 8 minutes ; une galaxie à 2 millions d'a.l., telle qu'elle était il y a 2 millions d'années."
        },
        {
          titre: "La vie et la mort des étoiles",
          texte: "Une étoile est un équilibre entre la gravité qui l'écrase et la fusion nucléaire qui la dilate. Quand le carburant s'épuise, l'équilibre se rompt : les petites étoiles gonflent en géantes rouges puis s'éteignent, les grosses explosent en supernova, laissant une étoile à neutrons ou un trou noir."
        },
        {
          titre: "Nous sommes des poussières d'étoiles",
          texte: "Le Big Bang n'a produit quasiment que de l'hydrogène et de l'hélium. Le carbone, l'oxygène, le fer de ton corps ont été forgés dans le cœur d'étoiles et dispersés par leurs explosions. Littéralement, tu es fait de matière recyclée d'étoiles mortes."
        },
        {
          titre: "Trou noir : l'horizon des événements",
          texte: "Un trou noir est une région où la matière est si concentrée que rien, pas même la lumière, ne peut s'échapper au-delà d'une limite appelée horizon des événements. Ce n'est pas un aspirateur cosmique : à distance suffisante, il attire exactement comme une masse ordinaire."
        }
      ],
      quotidien: [
        {
          titre: "Le GPS corrige Einstein en direct",
          texte: "Les satellites GPS vont vite (relativité restreinte : leur horloge retarde) et sont plus haut dans un champ de gravité plus faible (relativité générale : leur horloge avance). Le bilan net fait avancer leurs horloges d'environ 38 microsecondes par jour. Non corrigé, ça décalerait ta position de ~10 km/jour."
        },
        {
          titre: "Le four solaire au-dessus de ta tête",
          danger: true,
          texte: "Ne jamais regarder le Soleil directement, encore moins avec des jumelles ou un télescope non filtrés : la lumière concentrée brûle la rétine en une fraction de seconde, sans douleur (la rétine n'a pas de capteurs de douleur). Une éclipse s'observe uniquement avec des lunettes certifiées."
        },
        {
          titre: "Pourquoi le ciel est bleu (et rouge au couchant)",
          texte: "L'atmosphère diffuse plus la lumière bleue que la rouge (diffusion de Rayleigh). Au zénith, le bleu diffusé domine. Au couchant, la lumière traverse plus d'air, le bleu est dispersé en route et il ne reste que le rouge/orange."
        }
      ],
      exos: [
        {
          q: "Une année-lumière mesure…",
          choix: ["Une durée", "Une distance", "Une vitesse", "Une masse"],
          bonne: 1,
          explication: "C'est la distance parcourue par la lumière en un an, environ 9 460 milliards de km."
        },
        {
          q: "D'où viennent les atomes de fer de ton sang ?",
          choix: ["Du Big Bang", "Du cœur d'étoiles et de leurs explosions", "Du vent solaire", "Ils ont toujours existé sur Terre"],
          bonne: 1,
          explication: "Le Big Bang n'a produit presque que H et He. Les éléments lourds (carbone, oxygène, fer) sont forgés dans les étoiles."
        },
        {
          q: "Qu'a montré Edwin Hubble en 1929 ?",
          choix: ["Que la Terre tourne", "Que les galaxies s'éloignent : l'univers est en expansion", "Que la Lune s'éloigne", "Que le Soleil est une étoile"],
          bonne: 1,
          explication: "Plus une galaxie est lointaine, plus elle s'éloigne vite. En remontant le temps, on obtient le Big Bang."
        },
        {
          q: "Qu'est-ce que l'horizon des événements d'un trou noir ?",
          choix: ["Sa surface solide", "La limite au-delà de laquelle rien ne peut s'échapper", "Son atmosphère", "Sa température"],
          bonne: 1,
          explication: "Au-delà de l'horizon, même la lumière ne peut plus sortir. Ce n'est pas une surface matérielle mais une frontière."
        },
        {
          q: "Pourquoi le GPS doit-il tenir compte de la relativité ?",
          choix: ["Les satellites sont trop loin", "Leurs horloges se décalent (vitesse + gravité)", "À cause du vent solaire", "Pour économiser la batterie"],
          bonne: 1,
          explication: "Effets combinés de la relativité restreinte et générale : ~38 µs d'avance par jour, soit ~10 km d'erreur si on ne corrige pas."
        }
      ]
    },

    /* ============================ CHIMIE ============================ */
    {
      id: "chimie",
      nom: "Chimie",
      emoji: "⚗️",
      accent: "#f78fb3",
      tagline: "La matière qui se recompose.",
      decouvertes: [
        {
          titre: "La conservation de la masse",
          annee: "1789",
          qui: "Antoine Lavoisier",
          resume: "\"Rien ne se perd, rien ne se crée, tout se transforme.\" Dans une réaction fermée, la masse totale des produits égale celle des réactifs.",
          pourquoi: "Fin de l'alchimie, début de la chimie quantitative. On peut désormais équilibrer une réaction et prévoir les quantités."
        },
        {
          titre: "Le tableau périodique",
          annee: "1869",
          qui: "Dmitri Mendeleïev",
          resume: "Classement des éléments par masse et propriétés, révélant une périodicité. Mendeleïev laisse des cases vides et prédit les propriétés d'éléments non encore découverts.",
          pourquoi: "Une carte de toute la matière. Ses prédictions se vérifient, ce qui en fait un des plus beaux succès prédictifs de la science."
        },
        {
          titre: "La liaison chimique et l'électron",
          annee: "1916",
          qui: "Gilbert Lewis",
          resume: "Les atomes se lient en partageant des paires d'électrons pour compléter leur couche externe (règle de l'octet).",
          pourquoi: "Explique POURQUOI les atomes s'assemblent en molécules et sous quelles proportions. Base de toute la chimie moléculaire."
        },
        {
          titre: "La synthèse de l'ammoniac (Haber-Bosch)",
          annee: "1913",
          qui: "Fritz Haber & Carl Bosch",
          resume: "Fabriquer de l'ammoniac (NH₃) à partir de l'azote de l'air et de l'hydrogène, sous haute pression et température.",
          pourquoi: "Les engrais azotés qui en découlent nourrissent aujourd'hui près de la moitié de l'humanité. Sans doute la réaction industrielle qui a le plus changé la démographie mondiale."
        }
      ],
      notions: [
        {
          titre: "Atome, molécule, élément",
          texte: "Un atome est la plus petite unité d'un élément (l'oxygène, le fer…). Une molécule est un assemblage d'atomes liés (H₂O = 2 hydrogène + 1 oxygène). Un même élément peut former des corps très différents selon l'agencement (le carbone : diamant ou graphite)."
        },
        {
          titre: "Le pH : acide ou basique",
          texte: "Le pH mesure l'acidité de 0 à 14. En dessous de 7 : acide (citron ~2, vinaigre ~3). 7 : neutre (eau pure). Au-dessus : basique (savon, soude). L'échelle est logarithmique : pH 3 est dix fois plus acide que pH 4."
        },
        {
          titre: "Réaction exothermique / endothermique",
          texte: "Une réaction exothermique libère de la chaleur (combustion, ciment qui prend). Une endothermique en absorbe (dissolution de certains sels, poches de froid instantané). L'énergie ne disparaît pas, elle change de forme."
        },
        {
          titre: "Oxydoréduction",
          texte: "Un échange d'électrons entre espèces : l'une s'oxyde (perd des électrons), l'autre se réduit (en gagne). La rouille, la combustion, la respiration, une pile : ce sont toutes des oxydoréductions."
        }
      ],
      quotidien: [
        {
          titre: "Ne JAMAIS mélanger eau de Javel et acide/ammoniaque",
          danger: true,
          texte: "Javel + produit acide (détartrant, anti-calcaire) libère du dichlore, un gaz toxique. Javel + ammoniaque (certains nettoyants vitres) libère des chloramines, toxiques aussi. Ces mélanges 'maison' ont envoyé des gens aux urgences. On n'associe jamais deux produits ménagers, et on aère."
        },
        {
          titre: "Les acides et bases forts brûlent",
          danger: true,
          texte: "Un déboucheur de canalisation (soude concentrée) ou un acide fort attaque la peau et les yeux. En cas de projection : rincer abondamment à l'eau très longtemps (15 min) et consulter. Toujours verser l'acide DANS l'eau, jamais l'eau dans l'acide (projection violente sinon)."
        },
        {
          titre: "Le monoxyde de carbone, le tueur invisible",
          danger: true,
          texte: "Une combustion incomplète (chauffage d'appoint, chaudière mal réglée, groupe électrogène en intérieur) produit du CO : inodore, incolore, mortel. Il prend la place de l'oxygène dans le sang. D'où l'obligation d'aérer et l'utilité d'un détecteur de CO."
        }
      ],
      exos: [
        {
          q: "Que dit le principe de Lavoisier ?",
          choix: ["L'énergie augmente toujours", "Rien ne se perd, tout se transforme (la masse se conserve)", "Les acides neutralisent les bases", "Tout finit en rouille"],
          bonne: 1,
          explication: "Dans un système fermé, la masse totale est conservée au cours d'une réaction. Base de la chimie quantitative."
        },
        {
          q: "Un pH de 3, c'est…",
          choix: ["Basique", "Neutre", "Acide", "Impossible"],
          bonne: 2,
          explication: "En dessous de 7 c'est acide. pH 3 correspond à du vinaigre environ."
        },
        {
          q: "Pourquoi ne jamais mélanger eau de Javel et un détartrant acide ?",
          choix: ["Ça mousse trop", "Ça dégage du dichlore, un gaz toxique", "Ça devient inoffensif", "Ça tache"],
          bonne: 1,
          explication: "Le mélange libère du chlore gazeux (dichlore), toxique pour les voies respiratoires. Danger domestique classique."
        },
        {
          q: "La rouille, la combustion et la respiration ont en commun d'être…",
          choix: ["Des réactions acido-basiques", "Des oxydoréductions (échange d'électrons)", "Des changements d'état", "Des réactions nucléaires"],
          bonne: 1,
          explication: "Toutes impliquent un transfert d'électrons entre espèces : une s'oxyde, l'autre se réduit."
        },
        {
          q: "Pourquoi le monoxyde de carbone (CO) est-il si dangereux ?",
          choix: ["Il sent très mauvais", "Il est inodore et prend la place de l'oxygène dans le sang", "Il est explosif au moindre contact", "Il ronge les murs"],
          bonne: 1,
          explication: "Inodore et incolore, il se fixe sur l'hémoglobine à la place de l'O₂ et asphyxie sans signe avant-coureur."
        }
      ]
    },

    /* ============================ PHYSIQUE MODERNE ============================ */
    {
      id: "physique",
      nom: "Physique moderne",
      emoji: "⚛️",
      accent: "#63b3ed",
      tagline: "Là où l'intuition lâche prise.",
      decouvertes: [
        {
          titre: "Le quantum d'énergie",
          annee: "1900",
          qui: "Max Planck",
          resume: "Pour expliquer le rayonnement des corps chauds, Planck postule que l'énergie s'échange par paquets discrets ('quanta'), pas de façon continue.",
          pourquoi: "Acte de naissance de la physique quantique. L'idée que la nature est 'granulaire' à petite échelle bouleverse tout."
        },
        {
          titre: "L'effet photoélectrique",
          annee: "1905",
          qui: "Albert Einstein",
          resume: "La lumière arrache des électrons à un métal, mais seulement au-dessus d'une certaine fréquence. Einstein montre que la lumière se comporte comme des grains d'énergie : les photons.",
          pourquoi: "Confirme la nature quantique de la lumière (Nobel 1921) et fonde le photovoltaïque. C'est ce qui fait fonctionner tes panneaux solaires et les capteurs d'appareil photo."
        },
        {
          titre: "Le principe d'incertitude",
          annee: "1927",
          qui: "Werner Heisenberg",
          resume: "On ne peut connaître simultanément avec une précision parfaite la position et la vitesse d'une particule. Ce n'est pas un défaut de mesure, c'est une propriété de la nature.",
          pourquoi: "Il impose une limite fondamentale à ce qu'on peut savoir, et signe la rupture avec le déterminisme classique."
        },
        {
          titre: "E = mc²",
          annee: "1905",
          qui: "Albert Einstein",
          resume: "Masse et énergie sont deux formes d'une même chose. Une petite masse équivaut à une énorme énergie, le facteur étant le carré de la vitesse de la lumière.",
          pourquoi: "Explique d'où vient l'énergie du Soleil (fusion) et des centrales nucléaires (fission). La physique la plus célèbre du monde."
        }
      ],
      notions: [
        {
          titre: "La dualité onde-particule",
          texte: "La lumière — et même la matière — se comporte tantôt comme une onde (interférences), tantôt comme des particules (photons). Ni l'un ni l'autre exclusivement : selon l'expérience, un aspect se manifeste. Notre intuition, forgée à l'échelle humaine, n'est pas équipée pour ça."
        },
        {
          titre: "Quantifié = par paliers",
          texte: "À l'échelle atomique, beaucoup de grandeurs ne prennent que des valeurs discrètes. Un électron dans un atome ne peut occuper que certains niveaux d'énergie, comme des marches d'escalier, pas la rampe continue. En sautant d'un niveau à l'autre, il émet ou absorbe un photon précis — d'où les couleurs des néons."
        },
        {
          titre: "Fission et fusion",
          texte: "La fission casse un gros noyau (uranium) en deux, libérant de l'énergie : c'est nos centrales actuelles. La fusion assemble deux petits noyaux (hydrogène) en un plus gros : c'est le Soleil, et l'espoir d'une énergie propre encore difficile à maîtriser sur Terre."
        },
        {
          titre: "Le temps n'est pas absolu",
          texte: "En relativité, le temps s'écoule différemment selon la vitesse et la gravité. Une horloge en mouvement rapide retarde par rapport à une horloge immobile. Vérifié expérimentalement avec des horloges atomiques en avion. À nos vitesses, l'effet est infime mais réel."
        }
      ],
      quotidien: [
        {
          titre: "La radioactivité au quotidien",
          danger: true,
          texte: "La radioactivité est partout à faible dose (roches, aliments, rayons cosmiques, radon dans certaines caves). Le danger dépend de la dose. Le radon, gaz radioactif naturel qui s'accumule dans des sous-sols mal ventilés, est une cause réelle de cancer du poumon : aérer suffit souvent à le disperser."
        },
        {
          titre: "Les rayonnements : ionisants ou non",
          texte: "Les ondes radio, le Wi-Fi, les micro-ondes sont non-ionisants : trop peu d'énergie pour casser l'ADN, ils ne peuvent que chauffer. Les rayons X et gamma sont ionisants : ils arrachent des électrons et peuvent endommager les cellules. C'est pourquoi on limite les radios médicales, pas le Wi-Fi."
        },
        {
          titre: "Pourquoi le micro-ondes chauffe l'eau",
          texte: "Ses ondes font vibrer les molécules d'eau, qui s'échauffent par friction. Un aliment sec ou une assiette vide chauffe donc mal. Et le métal réfléchit les ondes (arcs électriques) : jamais de métal au micro-ondes."
        }
      ],
      exos: [
        {
          q: "Que décrit la dualité onde-particule ?",
          choix: ["La lumière est uniquement une onde", "La lumière/matière montre selon l'expérience un aspect ondulatoire ou corpusculaire", "Les ondes n'existent pas", "Tout est fait de particules solides"],
          bonne: 1,
          explication: "Selon l'expérience, la lumière (et la matière) révèle un comportement d'onde ou de particule. Les deux à la fois, en quelque sorte."
        },
        {
          q: "Que dit le principe d'incertitude de Heisenberg ?",
          choix: ["On mesure mal par manque d'instruments", "On ne peut connaître parfaitement à la fois position et vitesse d'une particule", "Rien n'est mesurable", "Les particules n'ont pas de position"],
          bonne: 1,
          explication: "C'est une limite fondamentale de la nature, pas un problème d'appareil : position et quantité de mouvement ne sont pas simultanément parfaitement définies."
        },
        {
          q: "Le Soleil tire son énergie de…",
          choix: ["La fission de l'uranium", "La fusion de l'hydrogène", "La combustion du charbon", "L'effet Joule"],
          bonne: 1,
          explication: "Au cœur du Soleil, des noyaux d'hydrogène fusionnent en hélium, libérant de l'énergie selon E = mc²."
        },
        {
          q: "Quel rayonnement est ionisant (capable d'abîmer l'ADN) ?",
          choix: ["Le Wi-Fi", "Les ondes radio", "Les rayons X", "Les micro-ondes"],
          bonne: 2,
          explication: "Les rayons X et gamma sont ionisants. Wi-Fi, radio et micro-ondes sont non-ionisants : ils ne font que chauffer."
        },
        {
          q: "Pourquoi ne met-on jamais de métal au micro-ondes ?",
          choix: ["Le métal absorbe toutes les ondes", "Le métal réfléchit les ondes et provoque des arcs électriques", "Ça refroidit l'aliment", "Ça ne change rien"],
          bonne: 1,
          explication: "Le métal réfléchit les micro-ondes ; les bords et pointes concentrent le champ et créent des étincelles pouvant endommager l'appareil."
        }
      ]
    },

    /* ============================ LE VIVANT ============================ */
    {
      id: "vivant",
      nom: "Le Vivant",
      emoji: "🧬",
      accent: "#68d391",
      tagline: "La chimie qui s'est mise à se copier.",
      decouvertes: [
        {
          titre: "La cellule",
          annee: "1665 / 1839",
          qui: "Robert Hooke, puis Schleiden & Schwann",
          resume: "Hooke observe des 'cellules' dans du liège. Deux siècles plus tard, la théorie cellulaire pose que tout être vivant est fait de cellules, unité de base de la vie.",
          pourquoi: "Cadre fondateur de la biologie : comprendre la vie, c'est comprendre la cellule. De la bactérie à la baleine, même brique."
        },
        {
          titre: "L'évolution par sélection naturelle",
          annee: "1859",
          qui: "Charles Darwin",
          resume: "Les individus varient ; ceux dont les traits favorisent la survie et la reproduction transmettent davantage ces traits. Sur de longues durées, les espèces se transforment.",
          pourquoi: "Le principe unificateur de toute la biologie. Il explique la diversité du vivant sans recours à un dessein, et éclaire la résistance des bactéries aux antibiotiques."
        },
        {
          titre: "Les lois de l'hérédité",
          annee: "1866",
          qui: "Gregor Mendel",
          resume: "En croisant des pois, Mendel découvre que les caractères se transmettent par unités discrètes (les futurs gènes), selon des règles statistiques.",
          pourquoi: "Fondation de la génétique. Longtemps ignoré, son travail devient la clé pour relier l'hérédité aux gènes."
        },
        {
          titre: "La structure de l'ADN",
          annee: "1953",
          qui: "Watson, Crick, Franklin, Wilkins",
          resume: "L'ADN est une double hélice dont les deux brins se complètent. Cette structure explique immédiatement comment l'information se copie : chaque brin sert de modèle.",
          pourquoi: "Le support moléculaire de l'hérédité est enfin compris. Point de départ de la biologie moléculaire, du génie génétique, du séquençage."
        },
        {
          titre: "La pénicilline",
          annee: "1928",
          qui: "Alexander Fleming",
          resume: "Une moisissure contaminant une culture tue les bactéries autour d'elle. Fleming en tire le premier antibiotique.",
          pourquoi: "Des infections jusque-là mortelles deviennent soignables. Un des plus grands sauts d'espérance de vie de l'histoire médicale."
        }
      ],
      notions: [
        {
          titre: "ADN, gène, protéine",
          texte: "L'ADN est le plan, écrit avec 4 'lettres'. Un gène est un segment de ce plan qui code une protéine. Les protéines font le travail dans la cellule (enzymes, structure, transport). Schéma : ADN → ARN → protéine."
        },
        {
          titre: "Pourquoi les antibiotiques ne soignent pas la grippe",
          texte: "Les antibiotiques tuent des bactéries. La grippe et le rhume sont causés par des virus, sur lesquels ils n'ont aucun effet. En prendre 'pour rien' ne guérit pas et favorise l'apparition de bactéries résistantes."
        },
        {
          titre: "Le système immunitaire et les vaccins",
          texte: "Le système immunitaire apprend à reconnaître les agents pathogènes. Un vaccin lui montre un fragment inoffensif du microbe pour qu'il s'entraîne à l'avance : le jour d'une vraie infection, la riposte est immédiate. C'est de la mémoire biologique."
        },
        {
          titre: "L'évolution en action : la résistance",
          texte: "Quand on utilise un antibiotique, les rares bactéries qui y résistent survivent et se multiplient. C'est de l'évolution accélérée, sous nos yeux. Voilà pourquoi mal utiliser les antibiotiques est un problème de santé publique mondial."
        }
      ],
      quotidien: [
        {
          titre: "Terminer son traitement antibiotique",
          danger: true,
          texte: "Arrêter dès qu'on se sent mieux laisse survivre les bactéries les plus coriaces, qui peuvent revenir plus résistantes. On suit la durée prescrite, et on ne réutilise jamais un reste d'antibiotique 'au cas où'."
        },
        {
          titre: "La chaîne du froid et les toxines",
          danger: true,
          texte: "Entre ~4 °C et 60 °C, les bactéries se multiplient vite dans les aliments. Certaines produisent des toxines que la cuisson ne détruit pas toujours. D'où : réfrigérer rapidement, ne pas recongeler un produit décongelé, et le principe 'dans le doute, jette'."
        },
        {
          titre: "Se laver les mains, geste le plus rentable",
          texte: "Le savon décolle et emporte virus et bactéries (il détruit l'enveloppe grasse de nombreux virus). 20-30 secondes de lavage réduisent massivement la transmission de maladies. Simple, gratuit, et parmi les plus efficaces de toute la médecine."
        }
      ],
      exos: [
        {
          q: "Quelle est l'unité de base de tout être vivant ?",
          choix: ["L'atome", "La cellule", "La molécule", "L'organe"],
          bonne: 1,
          explication: "La théorie cellulaire : tout être vivant est constitué d'une ou plusieurs cellules."
        },
        {
          q: "Un antibiotique agit contre…",
          choix: ["Les virus", "Les bactéries", "Les deux", "Rien de tout ça"],
          bonne: 1,
          explication: "Les antibiotiques ciblent les bactéries. Contre un virus (grippe, rhume) ils sont inutiles."
        },
        {
          q: "Comment un vaccin protège-t-il ?",
          choix: ["Il tue tous les microbes du corps", "Il entraîne le système immunitaire à reconnaître un pathogène à l'avance", "Il stérilise le sang", "Il remplace les globules blancs"],
          bonne: 1,
          explication: "Le vaccin présente un fragment inoffensif du pathogène ; le système immunitaire mémorise et riposte vite lors d'une vraie infection."
        },
        {
          q: "Pourquoi mal utiliser les antibiotiques est-il dangereux collectivement ?",
          choix: ["Ça coûte cher", "Ça sélectionne des bactéries résistantes", "Ça affaiblit le foie uniquement", "Ça n'a aucun effet"],
          bonne: 1,
          explication: "Les bactéries résistantes survivent et se multiplient : c'est de l'évolution sous nos yeux, et un enjeu mondial de santé."
        },
        {
          q: "Quelle est la structure de l'ADN décrite en 1953 ?",
          choix: ["Une sphère", "Une double hélice à brins complémentaires", "Une chaîne unique", "Un cristal cubique"],
          bonne: 1,
          explication: "La double hélice à brins complémentaires explique directement comment l'information génétique se copie."
        }
      ]
    }

  ]
};
