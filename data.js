// PRISME — base de connaissances
// Chaque domaine : découvertes (fiches), notions (comprendre la nature des choses),
// quotidien (dont sécurité/dangers), exos (QCM).
//
// Schéma d'une notion :
//   { titre, accroche, blocs:[{h?,t}], retenir }

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
          titre: "Qu'est-ce que l'électricité, vraiment ?",
          accroche: "Avant les fils, les prises et les factures, il n'y a qu'une seule idée : des charges qui se déplacent.",
          blocs: [
            { h:"Tout est fait d'atomes chargés", t:"La matière est faite d'atomes. Au centre, un noyau chargé positivement (+) ; autour, des électrons minuscules chargés négativement (−). Normalement les deux s'équilibrent : l'atome est neutre. Retiens juste deux règles, elles expliquent TOUTE l'électricité : deux charges de même signe se repoussent, deux charges de signes opposés s'attirent." },
            { h:"Les électrons libres des métaux", t:"Dans un métal (cuivre, fer, or…), les électrons les plus externes sont très mal attachés : ils se baladent librement d'un atome à l'autre. Dans le plastique, le verre, le bois sec, au contraire, les électrons sont prisonniers et ne bougent pas — c'est un isolant." },
            { h:"Le courant, c'est un mouvement d'ensemble", t:"L'électricité qui circule, c'est simplement ces électrons libres qu'on pousse tous dans le même sens, comme un banc de poissons. Tu ne \"fabriques\" pas les électrons : ils sont déjà là, dans le cuivre. Tu leur donnes juste une raison de se déplacer ensemble." }
          ],
          retenir: "L'électricité n'est pas une substance qu'on verse dans un fil. C'est le déplacement ordonné d'électrons déjà présents dans le métal. Métal = chemin possible ; plastique = mur."
        },
        {
          titre: "Tension, courant, résistance : l'analogie de l'eau",
          accroche: "Trois mots qu'on confond tout le temps. Une seule image, tenue jusqu'au bout, les sépare pour de bon : un château d'eau relié à un tuyau.",
          blocs: [
            { h:"La TENSION (volt, V) = la pression", t:"Imagine un château d'eau. Plus il est haut, plus l'eau qui descend pousse fort. La tension, c'est cette pression : la force qui POUSSE les électrons. Une pile de 1,5 V pousse doucement ; une prise de 230 V pousse fort ; une ligne haute tension, c'est un château d'eau haut de plusieurs kilomètres. Point crucial : la tension peut exister SANS que rien ne coule — une pile posée sur la table a une tension (une pression prête) mais aucun courant tant que rien n'est branché, comme un robinet fermé." },
            { h:"Le COURANT / l'INTENSITÉ (ampère, A) = le débit", t:"C'est la quantité d'eau qui passe chaque seconde dans le tuyau — donc le nombre d'électrons qui défilent chaque seconde dans le fil. Beaucoup d'électrons qui passent = forte intensité. C'est ça qui \"fait le travail\" : chauffe le radiateur, allume l'ampoule, fait tourner le moteur." },
            { h:"La RÉSISTANCE (ohm, Ω) = l'étroitesse du tuyau", t:"Un tuyau large laisse tout passer (faible résistance) ; un tuyau étroit ou bouché freine (forte résistance). Un gros fil de cuivre = tuyau large. Le fin filament d'une ampoule = tuyau étroit qui freine tellement les électrons qu'il chauffe et brille." },
            { h:"Comment les trois s'articulent (loi d'Ohm)", t:"Plus tu pousses (tension ↑), plus il passe de courant. Plus le tuyau est étroit (résistance ↑), moins il passe. Ça se résume en U = R × I. Concrètement : à tension fixe, si la résistance chute, le courant explose — c'est exactement pourquoi un court-circuit (résistance quasi nulle) fait passer un courant énorme." }
          ],
          retenir: "Tension = la pression qui pousse. Courant = ce qui passe réellement. Résistance = ce qui freine. La tension peut exister sans courant ; le courant, jamais sans tension."
        },
        {
          titre: "La puissance : ce que tu paies vraiment",
          accroche: "Ni les volts seuls, ni les ampères seuls ne comptent pour ta facture. C'est leur produit.",
          blocs: [
            { h:"Puissance = pression × débit", t:"La puissance (watt, W) = tension × courant : P = U × I. C'est l'énergie livrée chaque seconde. Beaucoup de pression AVEC un gros débit = beaucoup de puissance." },
            { h:"Un exemple qui parle", t:"Un chargeur de téléphone : 5 V et ~2 A → 10 W, minuscule. Un radiateur : 230 V et ~9 A → 2000 W, deux cents fois plus. Voilà pourquoi le radiateur chauffe toute la pièce et pas le chargeur, alors que les deux sont branchés sur le même mur." },
            { h:"L'énergie = puissance × durée", t:"Ta facture n'est pas en watts mais en kilowattheures (kWh) : la puissance multipliée par le temps d'utilisation. Un radiateur de 2000 W pendant 1 h = 2 kWh. Une LED de 20 W pendant 1 h = 0,02 kWh, cent fois moins. Ce qui coûte, c'est la puissance ET la durée." }
          ],
          retenir: "Volt = pression, Ampère = débit, Watt = pression × débit = la puissance réelle. Et le kWh (puissance × durée) = ce que le fournisseur facture."
        },
        {
          titre: "Seul au monde : comment refaire de l'électricité ?",
          accroche: "Si tu étais seul dans la civilisation, tu pourrais en refaire avec presque rien. Deux méthodes, découvertes à trente ans d'écart.",
          blocs: [
            { h:"Méthode 1 — la pile (la chimie)", t:"Prends deux métaux DIFFÉRENTS (par exemple un clou galvanisé en zinc et une pièce en cuivre) et plonge-les dans un acide : jus de citron, vinaigre, ou eau très salée. Les deux métaux n'ont pas la même envie de lâcher leurs électrons : l'un en donne, l'autre en prend, à travers le liquide. Une tension apparaît entre eux — tu peux la mesurer, allumer une petite LED. C'est exactement la pile de Volta (1800). Empile plusieurs paires et les tensions s'additionnent." },
            { h:"Méthode 2 — le générateur (le magnétisme)", t:"C'est LA méthode qui alimente la planète. Prends un aimant et une bobine de fil de cuivre. Bouge l'aimant dans la bobine (ou fais tourner la bobine devant l'aimant) : un courant naît dans le fil, tout seul, sans pile. Un barrage, une éolienne, une centrale nucléaire ne font rien d'autre : l'eau, le vent ou la vapeur font TOURNER un aimant devant des bobines. La source d'énergie (chute d'eau, vent, chaleur) ne sert qu'à faire tourner l'aimant." },
            { h:"Le point commun profond", t:"Dans les deux cas, tu ne crées pas les électrons — ils sont déjà dans le métal. Tu leur donnes juste une raison de bouger tous ensemble : soit une différence chimique entre deux métaux, soit un aimant en mouvement." }
          ],
          retenir: "Refaire de l'électricité seul : (1) deux métaux différents + un acide = une pile, ou (2) un aimant qu'on bouge dans une bobine = un générateur. Tout le réseau mondial, c'est la méthode 2 à très grande échelle."
        },
        {
          titre: "Pourquoi un aimant qui bouge crée du courant",
          accroche: "C'est le cœur du réacteur de toute la civilisation électrique. Une seule idée suffit à le comprendre.",
          blocs: [
            { t:"Un aimant est entouré d'un champ magnétique invisible. Tant qu'il ne bouge pas près d'un fil, rien ne se passe. Mais dès qu'il BOUGE, ce champ magnétique change à l'endroit du fil, et ce changement pousse les électrons libres du fil. Le mot clé est \"changement\" : ce n'est pas l'aimant en lui-même qui crée le courant, c'est son mouvement." },
            { t:"C'est aussi pourquoi le courant de ta prise est alternatif. Dans une centrale, l'aimant tourne : il s'approche, puis s'éloigne, en boucle. Il pousse donc les électrons dans un sens, puis dans l'autre, 50 fois par seconde. Le va-et-vient de l'aimant devient le va-et-vient du courant." }
          ],
          retenir: "Un champ magnétique qui CHANGE fait apparaître une tension. Toute centrale électrique n'est qu'une machine à faire bouger des aimants devant des bobines."
        },
        {
          titre: "Continu ou alternatif ? Et pourquoi ça change tout",
          accroche: "Deux façons de faire circuler les électrons — et la raison pour laquelle tes prises sont d'un type et tes batteries d'un autre.",
          blocs: [
            { h:"Continu (DC)", t:"Les électrons vont toujours dans le même sens, à débit constant. C'est ce que donnent une pile, une batterie, un port USB, un panneau solaire. Simple, stable, idéal pour l'électronique." },
            { h:"Alternatif (AC)", t:"Les électrons font un va-et-vient, changeant de sens 50 fois par seconde (50 Hz en Europe). C'est ce que sort une prise murale, parce que c'est ce que produit naturellement un aimant qui tourne dans une centrale." },
            { h:"Pourquoi le réseau est en alternatif", t:"Parce que l'alternatif se transforme très facilement : un transformateur peut monter la tension à 400 000 V pour le transport (peu de pertes) puis la redescendre à 230 V pour ta maison. C'est ce qui rend un réseau national possible. C'est justement ce qu'Edison (continu) a perdu face à Tesla (alternatif)." }
          ],
          retenir: "Continu = un seul sens (piles, électronique). Alternatif = va-et-vient (prises, réseau). L'alternatif a gagné le réseau parce qu'il se transforme facilement en haute tension pour voyager loin."
        },
        {
          titre: "Série et parallèle : deux façons de brancher",
          accroche: "Le même composant peut se comporter très différemment selon la façon dont on le relie aux autres.",
          blocs: [
            { h:"En série (à la queue leu leu)", t:"Les composants se suivent sur un unique chemin. Même courant partout, mais la tension se partage entre eux. Défaut : si un maillon casse, tout s'arrête — c'est la vieille guirlande où une ampoule grillée éteint toute la rangée." },
            { h:"En parallèle (chacun sa branche)", t:"Chaque composant a son propre chemin et reçoit la pleine tension. Si l'un tombe en panne, les autres continuent. C'est ainsi qu'est câblée une maison : chaque lampe, chaque prise sur sa branche, toutes sous 230 V, indépendantes." }
          ],
          retenir: "Série = un seul chemin, tout dépend de tout (un maillon lâche, tout s'éteint). Parallèle = chacun sa branche sous pleine tension, indépendants. Ta maison est en parallèle."
        }
      ],
      quotidien: [
        {
          titre: "Ce qui tue, c'est le courant, pas la tension",
          danger: true,
          texte: "Le danger vient de l'intensité qui traverse le corps. Dès ~30 mA (0,03 A) le passage dans le thorax peut provoquer une fibrillation cardiaque. C'est pourquoi les interrupteurs différentiels d'une maison se déclenchent à 30 mA : ils comparent le courant qui part et celui qui revient, et coupent si la différence fuit… par exemple à travers toi."
        },
        {
          titre: "Pourquoi l'eau aggrave tout",
          danger: true,
          texte: "La peau sèche résiste (~100 000 Ω) et te protège. Mouillée, elle tombe à ~1 000 Ω. À tension égale, le courant est donc ~100 fois plus grand (loi d'Ohm : I = U/R). D'où l'interdiction absolue d'appareils branchés au bord d'une baignoire, et les prises protégées dans les salles de bain."
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
          q: "La tension (en volts), c'est plutôt…",
          choix: ["Le nombre d'électrons qui passent par seconde", "La pression qui pousse les électrons", "Ce qui freine le courant", "La chaleur dégagée"],
          bonne: 1,
          explication: "La tension est la \"pression électrique\", la force qui pousse les électrons. Le nombre d'électrons qui passent, c'est l'intensité ; ce qui freine, c'est la résistance."
        },
        {
          q: "Une pile de 9 V est posée sur la table, rien n'est branché dessus. Y a-t-il un courant ?",
          choix: ["Oui, 9 ampères", "Oui, un petit courant", "Non : il y a une tension mais aucun courant", "Impossible à savoir"],
          bonne: 2,
          explication: "La tension (la pression) existe, prête à pousser, mais tant que le circuit n'est pas fermé rien ne circule. Comme un château d'eau plein avec le robinet fermé."
        },
        {
          q: "Qu'est-ce qui circule réellement dans un fil électrique en cuivre ?",
          choix: ["Une substance injectée par la centrale", "Des électrons déjà présents dans le métal", "De la chaleur", "De l'eau"],
          bonne: 1,
          explication: "On ne fabrique pas les électrons : ils sont déjà dans le cuivre. Le courant, c'est ces électrons libres poussés tous dans le même sens."
        },
        {
          q: "Seul, avec un aimant et un rouleau de fil de cuivre, comment produire de l'électricité ?",
          choix: ["Chauffer le fil", "Bouger l'aimant dans une bobine de ce fil", "Frotter le fil sur du tissu", "Poser l'aimant immobile sur le fil"],
          bonne: 1,
          explication: "Un champ magnétique qui CHANGE crée une tension. Il faut donc du mouvement : bouger l'aimant dans la bobine (aimant immobile = rien). C'est le principe de toutes les centrales."
        },
        {
          q: "La puissance en watts, c'est…",
          choix: ["La tension seule", "L'intensité seule", "La tension multipliée par l'intensité", "La résistance divisée par la tension"],
          bonne: 2,
          explication: "P = U × I. Il faut à la fois de la pression (volts) ET du débit (ampères) pour délivrer de la puissance."
        },
        {
          q: "Un radiateur de 1150 W est branché sur du 230 V. Quel courant tire-t-il environ ?",
          choix: ["0,2 A", "5 A", "50 A", "230 A"],
          bonne: 1,
          explication: "I = P / U = 1150 / 230 = 5 A. C'est pour ça qu'un tel appareil passe sans problème sur un circuit protégé à 16 A."
        },
        {
          q: "Deux métaux différents plongés dans du vinaigre : qu'obtient-on ?",
          choix: ["Rien du tout", "Une petite pile (une tension apparaît)", "Un aimant", "Un court-circuit"],
          bonne: 1,
          explication: "C'est le principe de la pile de Volta : deux métaux différents + un acide → l'un cède des électrons, l'autre les capte, une tension naît entre eux."
        },
        {
          q: "Pourquoi transporte-t-on l'électricité à très haute tension (400 000 V) sur les grandes lignes ?",
          choix: ["Pour aller plus vite", "Pour réduire les pertes par effet Joule", "Parce que c'est moins dangereux", "Pour éclairer les pylônes"],
          bonne: 1,
          explication: "À puissance égale, plus la tension est haute, plus le courant est faible. Or les pertes chauffent avec le carré du courant (P = R·I²). Haute tension = faible courant = peu de pertes."
        },
        {
          q: "Tu touches un appareil défectueux avec les mains mouillées. Pourquoi est-ce bien plus dangereux ?",
          choix: ["L'eau augmente la tension", "L'eau baisse ta résistance, donc le courant qui te traverse augmente", "L'eau attire la foudre", "Ça ne change rien"],
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
          titre: "Conducteur, isolant… et l'entre-deux qu'on commande",
          accroche: "Toute l'électronique tient dans un matériau ni vraiment conducteur, ni vraiment isolant — mais dont on décide quand il conduit.",
          blocs: [
            { h:"Les deux extrêmes", t:"Un conducteur (métal) a des électrons libres : le courant passe tout seul. Un isolant (verre, plastique) a des électrons prisonniers : rien ne passe. Entre les deux, il n'y aurait rien d'intéressant… sauf le silicium." },
            { h:"Le semi-conducteur", t:"Le silicium pur est presque isolant. Mais on peut lui ajouter des traces d'autres atomes (on \"dope\" le cristal) pour créer soit un léger excès d'électrons (zone dite N), soit un manque, des \"trous\" (zone P). Le génie, c'est qu'on peut CHOISIR où et quand il conduit." },
            { h:"La diode, premier composant", t:"Colle une zone N et une zone P : les électrons ne peuvent traverser la frontière que dans un sens. Tu obtiens une valve à sens unique pour le courant — la diode. C'est déjà elle qui convertit l'alternatif de la prise en continu dans ton chargeur." }
          ],
          retenir: "Le silicium n'a de valeur que parce qu'on peut décider quand il laisse passer le courant. Ce contrôle électrique de la conduction, c'est le fondement de toute l'électronique."
        },
        {
          titre: "Le transistor : un interrupteur sans doigt",
          accroche: "Imagine allumer une lampe, mais en commandant l'interrupteur avec de l'électricité au lieu d'un doigt — et en répétant ce geste des milliards de fois par seconde.",
          blocs: [
            { h:"Trois bornes, une commande", t:"Un transistor a trois pattes. Un petit signal électrique envoyé sur la patte de commande décide si le courant peut passer entre les deux autres. Un courant faible commande donc le passage d'un courant plus fort : c'est un robinet dont on tourne la poignée avec de l'électricité, sans aucune pièce qui bouge." },
            { h:"Deux métiers", t:"Comme interrupteur : passant ou bloqué, c'est le 0 et le 1 de l'informatique. Comme amplificateur : une petite variation de commande recopie en grand une variation de courant — un murmure devient un son puissant dans un ampli, un signal radio faible devient audible." }
          ],
          retenir: "Un transistor = un interrupteur (ou un amplificateur) commandé par de l'électricité, sans pièce mobile. Empiles-en des milliards sur un ongle de silicium et tu obtiens un processeur."
        },
        {
          titre: "0 et 1 : pourquoi tout est en binaire",
          accroche: "Pourquoi les machines comptent-elles avec seulement deux chiffres, quand nous en avons dix ?",
          blocs: [
            { h:"Deux états, parce que c'est fiable", t:"Un transistor n'a que deux positions vraiment nettes : passant ou bloqué. On les appelle 1 et 0. On pourrait tenter dix niveaux de tension, mais ils seraient trop proches, brouillés par le moindre parasite. Deux états, c'est impossible à confondre : soit \"beaucoup\", soit \"rien\"." },
            { h:"Tout se code avec des 0 et des 1", t:"En groupant ces chiffres, on représente des nombres, puis des lettres, des couleurs, du son, des images. Huit bits forment un octet. Une photo, une chanson, ce texte : tout finit en suites de 0 et de 1 dans des milliards de transistors." }
          ],
          retenir: "Le binaire n'est pas un choix mathématique, c'est un choix physique : un interrupteur n'a que deux positions. Le numérique domine parce que deux états résistent au bruit là où des nuances se brouillent."
        },
        {
          titre: "Analogique vs numérique",
          accroche: "La même musique peut voyager de deux façons radicalement différentes — et l'une survit au temps bien mieux que l'autre.",
          blocs: [
            { t:"Un signal analogique varie de façon continue, comme le sillon d'un vinyle ou l'aiguille d'un cadran : une infinité de valeurs possibles. Fidèle, mais fragile — la moindre poussière, le moindre parasite s'ajoute au signal et le dégrade définitivement." },
            { t:"Un signal numérique ne connaît que 0 et 1. Un peu abîmé, il reste lisible : tant qu'on distingue le \"haut\" du \"bas\", on récupère l'information exacte. C'est pourquoi une copie de copie de fichier reste parfaite, alors qu'une cassette recopiée se dégrade." }
          ],
          retenir: "Analogique = continu et fidèle mais fragile. Numérique = deux états, robuste au bruit et copiable à l'infini sans perte. C'est ce qui a fait basculer tout le monde vers le numérique."
        },
        {
          titre: "Pourquoi ça chauffe, et pourquoi il faut limiter le courant",
          accroche: "Chaque composant paie une taxe en chaleur — la comprendre, c'est comprendre les ventilateurs et les résistances qu'on met \"en protection\".",
          blocs: [
            { h:"L'effet Joule", t:"Quand un courant traverse une résistance, une partie de l'énergie se transforme en chaleur (l'énergie chauffe avec le carré du courant). C'est voulu dans un radiateur ou un grille-pain ; c'est du gaspillage subi dans un processeur, d'où le radiateur en cuivre et les ventilateurs." },
            { h:"Protéger le composant fragile", t:"Une LED grille si on lui envoie trop de courant. On place alors une résistance en série pour le brider à une valeur sûre. C'est le tout premier réflexe de l'électronicien : mettre un garde-fou devant le composant délicat." }
          ],
          retenir: "Tout courant qui traverse une résistance produit de la chaleur (effet Joule) : utile dans un chauffage, nuisible dans une puce. Et on protège toujours un composant fragile en limitant le courant avec une résistance."
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
          q: "Pourquoi le silicium (semi-conducteur) est-il au cœur de l'électronique ?",
          choix: ["Il conduit toujours parfaitement", "Il ne conduit jamais", "On peut choisir quand il laisse passer le courant", "Il est magnétique"],
          bonne: 2,
          explication: "Ni bon conducteur ni bon isolant, le silicium devient utile parce qu'on peut commander sa conduction — c'est ce qui rend possibles diodes et transistors."
        },
        {
          q: "À quoi sert principalement une diode ?",
          choix: ["Amplifier un son", "Laisser passer le courant dans un seul sens", "Stocker de l'énergie", "Mesurer la température"],
          bonne: 1,
          explication: "La diode est une valve à sens unique. C'est la base du redressement (alternatif → continu) que fait tout chargeur."
        },
        {
          q: "Un transistor, c'est essentiellement…",
          choix: ["Une petite pile", "Un interrupteur commandé par de l'électricité", "Un aimant", "Une ampoule miniature"],
          bonne: 1,
          explication: "Un petit signal sur sa patte de commande décide si le courant passe entre les deux autres. Interrupteur (0/1) ou amplificateur, sans pièce mobile."
        },
        {
          q: "Pourquoi les ordinateurs travaillent-ils en binaire (0 et 1) ?",
          choix: ["Parce que c'est plus joli", "Parce qu'un interrupteur n'a que deux états fiables", "Parce que les maths l'imposent", "Parce que c'est plus lent mais plus sûr"],
          bonne: 1,
          explication: "Un transistor n'a que deux positions nettes (passant/bloqué). Deux états sont impossibles à confondre, donc robustes au bruit — d'où le binaire."
        },
        {
          q: "Un fichier numérique copié mille fois reste parfait, une cassette recopiée se dégrade. Pourquoi ?",
          choix: ["Le numérique est magique", "Le numérique ne garde que 0 et 1, insensibles au petit bruit", "La cassette est trop vieille", "Le numérique compresse tout"],
          bonne: 1,
          explication: "Tant qu'on distingue le 0 du 1, on récupère l'info exacte : le numérique résiste au bruit. L'analogique (cassette) accumule les défauts à chaque copie."
        },
        {
          q: "Pourquoi met-on une résistance en série avec une LED ?",
          choix: ["Pour la rendre plus lumineuse", "Pour limiter le courant et l'empêcher de griller", "Pour changer sa couleur", "Pour la faire clignoter"],
          bonne: 1,
          explication: "Sans limitation, la LED tire trop de courant et grille. La résistance fixe un courant sûr."
        },
        {
          q: "Pourquoi un processeur a-t-il besoin d'un ventilateur ?",
          choix: ["Pour souffler la poussière", "Parce que le courant qui traverse ses composants les fait chauffer (effet Joule)", "Pour le rendre plus rapide", "Pour l'humidifier"],
          bonne: 1,
          explication: "Chaque courant traversant une résistance dégage de la chaleur. Des milliards de transistors qui commutent chauffent, il faut évacuer cette chaleur."
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
          titre: "L'année-lumière : voir loin, c'est voir dans le passé",
          accroche: "Le plus grand malentendu de l'astronomie : une année-lumière n'est pas une durée, c'est une distance. Et cette distance cache un voyage dans le temps.",
          blocs: [
            { h:"Une distance, pas un temps", t:"La lumière est ce qui va le plus vite dans l'univers : 300 000 km par seconde. Une année-lumière, c'est la distance qu'elle parcourt en un an — environ 9 460 milliards de km. C'est une règle de mesure, pas un chronomètre." },
            { h:"Regarder le ciel, c'est regarder le passé", t:"La lumière met du temps à venir jusqu'à toi. Tu vois le Soleil tel qu'il était il y a 8 minutes. Une étoile à 100 années-lumière, tu la vois telle qu'elle était il y a un siècle — elle pourrait déjà être morte. Plus un objet est loin, plus tu remontes loin dans le temps en le regardant." }
          ],
          retenir: "Année-lumière = une distance (celle parcourue par la lumière en un an). Et comme la lumière voyage à vitesse finie, plus on regarde loin, plus on voit vieux : le ciel est une machine à remonter le temps."
        },
        {
          titre: "Pourquoi les étoiles brillent : l'équilibre d'un soleil",
          accroche: "Une étoile est une bombe permanente qui ne se dilate ni ne s'effondre — parce que deux forces titanesques se neutralisent exactement.",
          blocs: [
            { h:"Deux forces qui se battent", t:"D'un côté, la gravité écrase l'étoile vers son centre (sa propre masse tombe sur elle-même). De l'autre, au cœur, la fusion nucléaire dégage une énergie colossale qui pousse vers l'extérieur. Tant que les deux s'équilibrent, l'étoile est stable et brille tranquillement — le Soleil le fait depuis 4,6 milliards d'années." },
            { h:"D'où vient l'énergie", t:"Au centre, la pression est telle que des noyaux d'hydrogène fusionnent en hélium. Une infime part de masse se transforme en énergie selon E = mc². C'est cette énergie qui, mettant des milliers d'années à remonter, finit par sortir en lumière et en chaleur." },
            { h:"La mort de l'étoile", t:"Quand le carburant s'épuise, la fusion faiblit, la gravité l'emporte. Les petites étoiles gonflent en géantes rouges puis s'éteignent doucement. Les grosses s'effondrent et explosent en supernova, laissant une étoile à neutrons ou un trou noir." }
          ],
          retenir: "Une étoile = un équilibre entre la gravité qui l'écrase et la fusion qui la dilate. Elle brille parce que la fusion (E = mc²) transforme sans cesse une pincée de sa masse en lumière."
        },
        {
          titre: "Nous sommes des poussières d'étoiles",
          accroche: "La phrase paraît poétique. Elle est littéralement, chimiquement vraie.",
          blocs: [
            { t:"Le Big Bang n'a produit presque que les deux éléments les plus simples : l'hydrogène et l'hélium. À l'origine, l'univers ne contenait ni carbone, ni oxygène, ni fer." },
            { t:"Tous les atomes plus lourds ont été forgés dans le cœur des étoiles par la fusion, puis dispersés dans l'espace quand ces étoiles ont explosé. Cette matière enrichie a formé de nouvelles étoiles, des planètes… et nous. Le carbone de tes cellules, l'oxygène que tu respires, le fer de ton sang viennent d'étoiles mortes avant la naissance du Soleil." }
          ],
          retenir: "Presque tous les atomes de ton corps, sauf l'hydrogène, ont été fabriqués au cœur d'étoiles et libérés par leurs explosions. Tu es de la matière d'étoiles recyclée."
        },
        {
          titre: "Comment on sait tout ça sans y aller : la lumière messagère",
          accroche: "On n'est jamais allé sur une étoile. Pourtant on connaît sa température, sa composition, sa vitesse. Le secret tient dans sa lumière.",
          blocs: [
            { h:"La lumière contient un code-barres", t:"Chaque élément chimique, chauffé, émet ou absorbe des couleurs très précises, qui lui sont propres — sa signature. En décomposant la lumière d'une étoile (comme un prisme décompose un arc-en-ciel), on lit ces signatures et on sait de quoi elle est faite, sans jamais la toucher." },
            { h:"La couleur dit la vitesse", t:"Si une source s'éloigne, sa lumière est légèrement décalée vers le rouge ; si elle s'approche, vers le bleu (comme le son d'une sirène qui change selon qu'elle vient ou s'en va). C'est ce \"décalage vers le rouge\" des galaxies qui a révélé à Hubble que l'univers est en expansion." }
          ],
          retenir: "Presque toute l'astrophysique se déduit de la lumière reçue : sa décomposition révèle la composition et la température, son décalage de couleur révèle la vitesse. La lumière est notre seul messager — il suffit de savoir la lire."
        },
        {
          titre: "Trou noir : l'endroit d'où la lumière ne ressort plus",
          accroche: "Ce n'est pas un aspirateur cosmique. C'est un endroit où la gravité a gagné pour de bon.",
          blocs: [
            { t:"Quand une énorme masse est concentrée dans un tout petit volume, sa gravité devient si intense qu'au-delà d'une certaine limite, rien ne peut s'échapper — pas même la lumière. Cette frontière s'appelle l'horizon des événements. Ce n'est pas une surface solide, juste un point de non-retour." },
            { t:"Idée fausse à corriger : un trou noir n'\"aspire\" pas tout autour de lui. À distance suffisante, il attire exactement comme une étoile ordinaire de même masse. Si le Soleil devenait un trou noir, la Terre continuerait tranquillement son orbite — il ferait juste très noir." }
          ],
          retenir: "Un trou noir : une masse si concentrée que, passé l'horizon des événements, même la lumière ne peut plus sortir. Mais de loin, il attire comme n'importe quelle masse — ce n'est pas un aspirateur."
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
          q: "Tu observes une étoile située à 500 années-lumière. Tu la vois…",
          choix: ["Telle qu'elle est maintenant", "Telle qu'elle était il y a 500 ans", "Telle qu'elle sera dans 500 ans", "On ne peut rien dire"],
          bonne: 1,
          explication: "Sa lumière a mis 500 ans à te parvenir : tu vois donc son état d'il y a 500 ans. Regarder loin = voir dans le passé."
        },
        {
          q: "Pourquoi une étoile ne s'effondre-t-elle pas sur elle-même ?",
          choix: ["Elle est trop froide", "La fusion en son cœur pousse vers l'extérieur et équilibre la gravité", "Elle tourne trop vite", "Le vide la retient"],
          bonne: 1,
          explication: "Équilibre entre la gravité qui écrase et la pression de la fusion qui dilate. Quand le carburant s'épuise, l'équilibre se rompt et l'étoile meurt."
        },
        {
          q: "D'où viennent les atomes de fer de ton sang ?",
          choix: ["Du Big Bang", "Du cœur d'étoiles et de leurs explosions", "Du vent solaire", "Ils ont toujours existé sur Terre"],
          bonne: 1,
          explication: "Le Big Bang n'a produit presque que H et He. Les éléments lourds (carbone, oxygène, fer) sont forgés dans les étoiles."
        },
        {
          q: "Comment sait-on de quoi une étoile lointaine est faite, sans y aller ?",
          choix: ["En envoyant des sondes", "En décomposant sa lumière, qui porte la signature de ses éléments", "En mesurant sa température au thermomètre", "On ne le sait pas vraiment"],
          bonne: 1,
          explication: "Chaque élément émet/absorbe des couleurs précises. Décomposer la lumière de l'étoile (spectroscopie) révèle sa composition, comme un code-barres."
        },
        {
          q: "Qu'a montré Edwin Hubble en 1929 ?",
          choix: ["Que la Terre tourne", "Que les galaxies s'éloignent : l'univers est en expansion", "Que la Lune s'éloigne", "Que le Soleil est une étoile"],
          bonne: 1,
          explication: "Plus une galaxie est lointaine, plus elle s'éloigne vite (décalage vers le rouge). En remontant le temps, on obtient le Big Bang."
        },
        {
          q: "Si le Soleil devenait soudain un trou noir de même masse, la Terre…",
          choix: ["Serait aspirée instantanément", "Continuerait son orbite (il ferait juste noir)", "Serait éjectée dans l'espace", "Exploserait"],
          bonne: 1,
          explication: "Un trou noir n'aspire pas plus qu'une masse ordinaire vue de loin. À même masse et même distance, l'attraction est identique : l'orbite ne changerait pas."
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
          titre: "Atome, élément, molécule : l'alphabet de la matière",
          accroche: "Toute la matière de l'univers s'écrit avec une centaine de \"lettres\". Comprendre la différence entre ces trois mots, c'est comprendre la chimie.",
          blocs: [
            { h:"L'atome et l'élément", t:"Un atome est le plus petit grain d'un élément. Un élément, c'est un type d'atome : l'hydrogène, l'oxygène, le fer, l'or… Il en existe une centaine, rangés dans le tableau périodique. Ce sont les lettres de l'alphabet de la matière." },
            { h:"La molécule", t:"En liant des atomes, on forme des molécules — les mots. L'eau, c'est deux hydrogènes accrochés à un oxygène (H₂O). Le sucre, le CO₂, l'ADN : des assemblages plus ou moins grands des mêmes lettres." },
            { h:"L'arrangement change tout", t:"Avec les mêmes atomes, l'agencement fait des matières radicalement différentes. Le carbone arrangé d'une façon donne le graphite noir et mou d'un crayon ; arrangé autrement, le diamant transparent et le plus dur des matériaux. Mêmes lettres, mot différent." }
          ],
          retenir: "Élément = un type d'atome (une lettre) ; molécule = des atomes liés (un mot). Et l'arrangement compte autant que les ingrédients : mêmes atomes, propriétés opposées (graphite vs diamant)."
        },
        {
          titre: "Pourquoi les atomes se lient",
          accroche: "Les atomes ne s'assemblent pas au hasard : ils cherchent tous la même chose, une couche d'électrons complète.",
          blocs: [
            { t:"Autour de chaque noyau, les électrons occupent des \"couches\". Un atome est stable et tranquille quand sa couche externe est pleine. La plupart des atomes ne le sont pas : il leur manque, ou il leur reste, quelques électrons." },
            { t:"Pour atteindre cette stabilité, ils s'associent : soit en partageant des électrons (liaison covalente, comme dans l'eau), soit en s'en cédant carrément (liaison ionique, comme dans le sel, où un atome donne un électron à l'autre). C'est cette quête de couche pleine qui décide quelles molécules existent et dans quelles proportions — pourquoi l'eau est H₂O et jamais H₃O." }
          ],
          retenir: "Les atomes se lient pour compléter leur couche externe d'électrons. Cette règle simple explique pourquoi les molécules ont des formules précises et pas d'autres."
        },
        {
          titre: "Le pH : ce que veut dire \"acide\"",
          accroche: "Acide, basique : des mots du quotidien qui cachent une seule idée — une histoire de charges qui flottent dans l'eau.",
          blocs: [
            { h:"L'échelle de 0 à 14", t:"En dessous de 7 : acide (citron ~2, vinaigre ~3, estomac ~1,5). À 7 : neutre (eau pure). Au-dessus : basique, ou alcalin (savon, bicarbonate, soude). Attention, l'échelle est logarithmique : pH 3 est dix fois plus acide que pH 4, cent fois plus que pH 5." },
            { h:"Ce qui se passe vraiment", t:"Un acide libère dans l'eau des particules chargées très réactives (des ions hydrogène, H⁺). Plus il y en a, plus c'est acide. Une base fait l'inverse. Quand on mélange un acide et une base, ils se neutralisent — c'est pourquoi le bicarbonate (basique) calme une acidité, et pourquoi ça peut mousser." }
          ],
          retenir: "Le pH mesure l'acidité de 0 (très acide) à 14 (très basique), 7 étant neutre. Être acide = libérer beaucoup d'ions H⁺ dans l'eau. Acide + base = neutralisation."
        },
        {
          titre: "Réactions qui chauffent, réactions qui refroidissent",
          accroche: "Pourquoi le ciment prend en chauffant, et pourquoi une poche de froid sportive se glace toute seule ? Même principe, sens inverse.",
          blocs: [
            { t:"Une réaction exothermique LIBÈRE de la chaleur : combustion, ciment qui durcit, corps qui digère. L'énergie stockée dans les liaisons se libère en chaleur." },
            { t:"Une réaction endothermique ABSORBE de la chaleur, donc refroidit son environnement : c'est le cas de la dissolution de certains sels, exploitée dans les poches de froid instantané qu'on casse pour soigner une entorse. L'énergie ne disparaît jamais, elle est juste prise ou rendue au milieu." }
          ],
          retenir: "Exothermique = dégage de la chaleur (feu, ciment). Endothermique = en absorbe et refroidit (poche de froid). Dans les deux cas l'énergie se conserve, elle change simplement de camp."
        },
        {
          titre: "L'oxydoréduction : le lien secret entre rouille, feu, respiration et piles",
          accroche: "Quatre phénomènes qui semblent n'avoir aucun rapport reposent en réalité sur le même geste : un échange d'électrons.",
          blocs: [
            { t:"Dans une oxydoréduction, une espèce cède des électrons (elle s'oxyde), une autre les capte (elle se réduit). C'est un transfert de charges. La rouille (le fer cède des électrons à l'oxygène), la combustion, la respiration de tes cellules : toutes sont des oxydoréductions, plus ou moins rapides." },
            { t:"Et le lien avec l'électricité est direct : une pile n'est qu'une oxydoréduction dont on force les électrons à passer par un fil au lieu de sauter directement. La chimie fabrique alors du courant. C'est exactement le \"deux métaux + acide\" du domaine Électricité." }
          ],
          retenir: "Oxydoréduction = transfert d'électrons entre deux espèces. Rouille, feu, respiration : même mécanisme. Et si on canalise ces électrons dans un fil, on obtient une pile — la chimie devient électricité."
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
          q: "Quelle est la différence entre un élément et une molécule ?",
          choix: ["Aucune", "Un élément est un type d'atome ; une molécule est un assemblage d'atomes liés", "Une molécule est plus petite qu'un atome", "Un élément est toujours un gaz"],
          bonne: 1,
          explication: "L'élément (hydrogène, oxygène…) est une \"lettre\" ; la molécule (H₂O) est un \"mot\" formé d'atomes liés."
        },
        {
          q: "Graphite (mine de crayon) et diamant sont tous deux du carbone pur. Pourquoi si différents ?",
          choix: ["Ce ne sont pas les mêmes atomes", "Seul l'arrangement des atomes change", "Le diamant contient de l'or", "Le graphite est plus vieux"],
          bonne: 1,
          explication: "Mêmes atomes de carbone, agencement différent : d'où un solide noir et mou d'un côté, le matériau le plus dur de l'autre. L'arrangement fait tout."
        },
        {
          q: "Pourquoi les atomes se lient-ils en molécules ?",
          choix: ["Par hasard", "Pour compléter leur couche externe d'électrons et devenir stables", "Parce qu'ils sont magnétiques", "Pour se réchauffer"],
          bonne: 1,
          explication: "Un atome est stable quand sa couche externe est pleine. Il partage ou cède des électrons pour y arriver — ce qui fixe les formules comme H₂O."
        },
        {
          q: "Un pH de 3, c'est…",
          choix: ["Basique", "Neutre", "Acide", "Impossible"],
          bonne: 2,
          explication: "En dessous de 7 c'est acide. pH 3 correspond à du vinaigre environ. Un acide libère beaucoup d'ions H⁺."
        },
        {
          q: "Une poche de froid instantané se refroidit quand on la casse. C'est une réaction…",
          choix: ["Exothermique", "Endothermique", "Nucléaire", "Acide"],
          bonne: 1,
          explication: "Endothermique : elle ABSORBE la chaleur du milieu, donc elle refroidit. L'inverse d'une combustion qui, elle, dégage de la chaleur."
        },
        {
          q: "La rouille, la combustion et la respiration ont en commun d'être…",
          choix: ["Des réactions acido-basiques", "Des oxydoréductions (échange d'électrons)", "Des changements d'état", "Des réactions nucléaires"],
          bonne: 1,
          explication: "Toutes impliquent un transfert d'électrons entre espèces : une s'oxyde, l'autre se réduit."
        },
        {
          q: "Qu'est-ce qu'une pile, du point de vue chimique ?",
          choix: ["Un aimant liquide", "Une oxydoréduction dont on fait passer les électrons par un fil", "De l'eau pure", "Un condensateur"],
          bonne: 1,
          explication: "Une pile force les électrons d'une oxydoréduction à circuler dans un fil : la chimie produit alors du courant électrique."
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
          titre: "E = mc² : ce que ça veut vraiment dire",
          accroche: "L'équation la plus célèbre du monde tient en une phrase : la masse est de l'énergie endormie.",
          blocs: [
            { t:"Elle dit que la masse et l'énergie sont deux visages de la même chose. Le \"taux de change\" entre les deux est c², le carré de la vitesse de la lumière — un nombre gigantesque. Donc une toute petite masse cache une énergie colossale." },
            { t:"Concrètement : quand des noyaux fusionnent ou se cassent, une minuscule fraction de leur masse disparaît… et réapparaît en énergie. C'est de là que vient toute l'énergie du Soleil (fusion) et des centrales nucléaires (fission). Quelques grammes de matière transformés libèrent l'équivalent de milliers de tonnes d'explosif." }
          ],
          retenir: "E = mc² : la masse est une forme concentrée d'énergie, avec un taux de change énorme (c²). Transformer un peu de masse en énergie, c'est le carburant des étoiles et du nucléaire."
        },
        {
          titre: "La dualité onde-particule",
          accroche: "La question qui a occupé les physiciens pendant deux siècles : la lumière est-elle une onde ou une pluie de grains ? Réponse dérangeante : les deux.",
          blocs: [
            { t:"Parfois la lumière se comporte comme une onde : elle se propage, se superpose, crée des figures d'interférence comme des vagues qui se croisent. Parfois elle se comporte comme des grains, les photons : elle arrive par paquets et arrache un électron à la fois (c'est l'effet photoélectrique de tes panneaux solaires)." },
            { t:"Le plus troublant : la matière aussi. Un électron, un atome peuvent montrer un comportement d'onde. Ce n'est ni tout à fait l'un ni tout à fait l'autre — c'est notre intuition, forgée à l'échelle humaine, qui n'a tout simplement pas de mot adapté à ce qu'est un objet quantique." }
          ],
          retenir: "À l'échelle quantique, lumière et matière montrent selon l'expérience un visage d'onde ou de particule. Ce n'est pas une contradiction, c'est que nos catégories habituelles ne s'appliquent plus."
        },
        {
          titre: "Quantifié : la nature avance par marches",
          accroche: "Le mot \"quantique\" fait peur. Il dit juste une chose simple : à très petite échelle, certaines grandeurs sautent par paliers au lieu de varier en douceur.",
          blocs: [
            { t:"À notre échelle, tout semble continu : on peut rouler à 50, 50,1 ou 50,01 km/h. Dans un atome, non. Un électron ne peut occuper que certains niveaux d'énergie précis, comme les marches d'un escalier — jamais entre deux marches, jamais sur la rampe continue." },
            { t:"Quand un électron saute d'une marche haute à une marche basse, il libère l'énergie perdue sous forme d'un grain de lumière d'une couleur bien précise. C'est exactement pourquoi un néon, une lampe à sodium ou un feu d'artifice ont des couleurs caractéristiques : chaque atome a son propre escalier, donc ses propres couleurs." }
          ],
          retenir: "\"Quantifié\" = par paliers, pas en continu. Un électron n'occupe que des niveaux d'énergie précis ; en sautant de l'un à l'autre, il émet une couleur précise. D'où les couleurs des néons et des flammes."
        },
        {
          titre: "Fission et fusion : casser ou fusionner les noyaux",
          accroche: "Deux façons opposées de libérer l'énergie cachée dans la matière — l'une nous éclaire déjà, l'autre est le Graal.",
          blocs: [
            { h:"La fission (casser)", t:"On brise un gros noyau lourd (uranium) en deux morceaux. La somme des morceaux pèse un peu moins que le noyau de départ : la masse manquante est partie en énergie (E = mc²). C'est ce qui se passe dans toutes nos centrales nucléaires actuelles." },
            { h:"La fusion (assembler)", t:"On force deux petits noyaux (de l'hydrogène) à se souder en un plus gros. Là encore un peu de masse se transforme en énergie, mais bien davantage. C'est ce qui fait briller le Soleil. La maîtriser sur Terre serait une énergie quasi illimitée et propre — mais c'est extrêmement difficile, car il faut recréer des conditions dignes d'une étoile." }
          ],
          retenir: "Fission = casser un gros noyau (nos centrales). Fusion = souder deux petits noyaux (le Soleil, l'énergie de demain si on la maîtrise). Les deux transforment un peu de masse en énergie via E = mc²."
        },
        {
          titre: "Le temps n'est pas le même pour tout le monde",
          accroche: "L'idée la plus contre-intuitive d'Einstein : le temps ne s'écoule pas au même rythme partout. Et ce n'est pas une théorie, on le mesure.",
          blocs: [
            { t:"Selon Einstein, plus tu vas vite, plus ton temps s'écoule lentement par rapport à quelqu'un d'immobile. La gravité fait pareil : plus tu es près d'une grosse masse, plus ton temps ralentit. Ces effets sont infimes à nos vitesses, mais bien réels." },
            { t:"On l'a vérifié en embarquant des horloges atomiques ultra-précises dans des avions : de retour, elles affichaient un décalage exactement conforme aux prédictions. Et ton GPS corrige ce décalage en permanence, sinon il te situerait à des kilomètres." }
          ],
          retenir: "Le temps est élastique : il ralentit avec la vitesse et avec la gravité. Imperceptible au quotidien, mesuré par des horloges atomiques, et corrigé en direct par ton GPS."
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
          q: "Que signifie E = mc² ?",
          choix: ["La lumière a une masse", "La masse est une forme concentrée d'énergie", "L'énergie est toujours constante", "La vitesse dépend de la masse"],
          bonne: 1,
          explication: "Masse et énergie sont interchangeables, avec un taux de change énorme (c²). Transformer un peu de masse libère énormément d'énergie."
        },
        {
          q: "Que décrit la dualité onde-particule ?",
          choix: ["La lumière est uniquement une onde", "La lumière/matière montre selon l'expérience un aspect ondulatoire ou corpusculaire", "Les ondes n'existent pas", "Tout est fait de petites billes solides"],
          bonne: 1,
          explication: "Selon l'expérience, la lumière (et la matière) révèle un comportement d'onde ou de particule. Nos catégories habituelles ne suffisent plus."
        },
        {
          q: "Pourquoi un néon a-t-il une couleur bien précise ?",
          choix: ["À cause du verre coloré", "Parce que ses électrons sautent entre des niveaux d'énergie précis en émettant une couleur donnée", "Parce qu'il chauffe", "C'est un hasard de fabrication"],
          bonne: 1,
          explication: "\"Quantifié\" = par paliers. En changeant de niveau, l'électron émet un grain de lumière d'une couleur fixe, propre à chaque type d'atome."
        },
        {
          q: "Que dit le principe d'incertitude de Heisenberg ?",
          choix: ["On mesure mal par manque d'instruments", "On ne peut connaître parfaitement à la fois position et vitesse d'une particule", "Rien n'est mesurable", "Les particules n'ont pas de position"],
          bonne: 1,
          explication: "C'est une limite fondamentale de la nature, pas un problème d'appareil : position et vitesse ne sont pas simultanément parfaitement définies."
        },
        {
          q: "Le Soleil tire son énergie de…",
          choix: ["La fission de l'uranium", "La fusion de l'hydrogène", "La combustion du charbon", "L'effet Joule"],
          bonne: 1,
          explication: "Au cœur du Soleil, des noyaux d'hydrogène fusionnent en hélium, transformant un peu de masse en énergie selon E = mc²."
        },
        {
          q: "Quelle est la différence entre fission et fusion ?",
          choix: ["Aucune", "La fission casse un gros noyau, la fusion soude deux petits noyaux", "La fission concerne l'eau, la fusion le feu", "La fusion est utilisée dans nos centrales actuelles"],
          bonne: 1,
          explication: "Fission (casser l'uranium) = nos centrales. Fusion (souder l'hydrogène) = le Soleil, et l'énergie de demain si on la maîtrise."
        },
        {
          q: "Deux horloges atomiques, une en avion, une au sol. À l'atterrissage…",
          choix: ["Elles sont parfaitement identiques", "Elles affichent un léger décalage, comme prévu par Einstein", "L'horloge d'avion s'est arrêtée", "Impossible à mesurer"],
          bonne: 1,
          explication: "Le temps dépend de la vitesse et de la gravité. Le décalage minuscule mais réel a été mesuré, et le GPS le corrige en permanence."
        },
        {
          q: "Quel rayonnement est ionisant (capable d'abîmer l'ADN) ?",
          choix: ["Le Wi-Fi", "Les ondes radio", "Les rayons X", "Les micro-ondes"],
          bonne: 2,
          explication: "Les rayons X et gamma sont ionisants. Wi-Fi, radio et micro-ondes sont non-ionisants : ils ne font que chauffer."
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
          titre: "Qu'est-ce que le vivant ? La chimie qui se copie",
          accroche: "Où passe la frontière entre un caillou et une bactérie ? La réponse tient dans un mot : la copie.",
          blocs: [
            { t:"Un être vivant est fait des mêmes atomes que le reste du monde — surtout carbone, hydrogène, oxygène, azote. Rien de magique dans les ingrédients. Ce qui le distingue, c'est ce que cette chimie SAIT FAIRE : puiser de l'énergie dans son environnement, se maintenir en ordre, et surtout se reproduire en fabriquant des copies d'elle-même." },
            { t:"La brique de base de tout ce qui vit est la cellule : un sac microscopique délimité par une membrane, contenant la machinerie chimique et le plan (l'ADN) pour se copier. De la bactérie unique à la baleine (des milliers de milliards de cellules), c'est la même brique." }
          ],
          retenir: "Le vivant, ce n'est pas des atomes spéciaux, c'est de la chimie ordinaire qui sait se maintenir et se copier. Son unité de base est la cellule, la même de la bactérie à l'humain."
        },
        {
          titre: "ADN, gène, protéine : le plan et les ouvriers",
          accroche: "Toute cellule fonctionne comme un chantier avec un plan d'architecte et des ouvriers. Comprendre ce trio, c'est comprendre l'hérédité.",
          blocs: [
            { h:"L'ADN, le plan", t:"L'ADN est une longue molécule qui stocke l'information, écrite avec seulement quatre \"lettres\" chimiques (A, T, G, C). C'est le plan complet de l'organisme, rangé dans presque chaque cellule. Sa forme en double hélice permet de le copier fidèlement : chaque brin sert de modèle pour reconstruire l'autre." },
            { h:"Le gène, un chapitre du plan", t:"Un gène est un segment d'ADN qui contient la recette d'une chose précise, en général une protéine." },
            { h:"La protéine, l'ouvrier", t:"Les protéines font le travail concret dans la cellule : elles bâtissent les structures, transportent l'oxygène (l'hémoglobine), accélèrent les réactions (les enzymes de la digestion). Le sens de lecture est toujours le même : ADN → ARN (une copie de travail) → protéine." }
          ],
          retenir: "ADN = le plan (4 lettres) ; gène = un chapitre codant une protéine ; protéine = l'ouvrier qui exécute. La double hélice permet de copier le plan à l'identique — c'est ça, l'hérédité."
        },
        {
          titre: "L'évolution : le tri qui fabrique la complexité",
          accroche: "Pas de plan, pas d'intention, pas de but. Juste deux ingrédients répétés des millions de fois — et pourtant l'œil, l'aile, le cerveau en sortent.",
          blocs: [
            { h:"Variation + tri", t:"Premier ingrédient : les individus varient (les copies de l'ADN comportent de petites erreurs, des mutations). Second ingrédient : l'environnement trie. Ceux dont les variations aident à survivre et à se reproduire laissent plus de descendants, qui héritent de ces variations. Répété sur d'immenses durées, ce tri transforme les espèces." },
            { h:"La résistance, l'évolution sous tes yeux", t:"Utilise un antibiotique : les rares bactéries qui y résistent survivent et se multiplient, les autres meurent. En quelques jours, la population entière est devenue résistante. C'est de l'évolution accélérée, observable en direct — et un enjeu majeur de santé publique." }
          ],
          retenir: "Évolution = variation (mutations au hasard) + tri (par la survie/reproduction), répétés très longtemps. Aucun but, mais un résultat d'une complexité stupéfiante. La résistance aux antibiotiques en est la preuve quotidienne."
        },
        {
          titre: "Immunité et vaccins : entraîner une armée à l'avance",
          accroche: "Ton corps abrite une armée capable d'apprendre. Le vaccin, c'est son terrain d'entraînement.",
          blocs: [
            { t:"Le système immunitaire reconnaît et attaque les intrus (virus, bactéries). Face à un ennemi inconnu, il met du temps à s'organiser — c'est pendant ce délai qu'on tombe malade. Mais il garde ensuite une mémoire de l'intrus." },
            { t:"Un vaccin exploite cette mémoire : il présente à l'organisme un fragment inoffensif du microbe (ou son mode d'emploi), pour que l'armée s'entraîne SANS danger. Le jour où le vrai microbe attaque, la riposte est immédiate et la maladie évitée ou atténuée. Ce n'est pas un médicament qui soigne, c'est un entraînement qui prépare." }
          ],
          retenir: "Le système immunitaire apprend et mémorise ses ennemis. Un vaccin lui fait rencontrer une version inoffensive du microbe pour qu'il s'entraîne à l'avance — d'où une riposte immédiate lors d'une vraie infection."
        },
        {
          titre: "Antibiotiques ≠ antiviraux : pourquoi ça compte",
          accroche: "L'erreur la plus courante en santé : réclamer un antibiotique pour une grippe. Comprendre pourquoi c'est inutile évite un vrai danger.",
          blocs: [
            { t:"Un antibiotique attaque des mécanismes propres aux BACTÉRIES (leur paroi, leur machinerie). Un virus n'a rien de tout ça : c'est un simple bout d'information enfermé, qui détourne tes propres cellules. L'antibiotique n'a donc aucune prise sur lui. La grippe, le rhume, la Covid sont viraux : les antibiotiques n'y font rien." },
            { t:"En prendre \"pour rien\" ne guérit pas, et pire : ça tue tes bonnes bactéries et entraîne les mauvaises à devenir résistantes. D'où deux règles d'or : ne pas exiger d'antibiotique pour une infection virale, et toujours terminer un traitement prescrit pour ne pas laisser survivre les bactéries les plus coriaces." }
          ],
          retenir: "Antibiotique = contre les bactéries seulement. Contre un virus (grippe, rhume), il est inutile et même nuisible (résistances). On ne l'utilise que sur prescription, et on va au bout du traitement."
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
          q: "Qu'est-ce qui distingue le plus fondamentalement le vivant de la matière inerte ?",
          choix: ["Il est fait d'atomes spéciaux", "Il sait puiser de l'énergie, se maintenir et se copier", "Il est toujours vert", "Il ne contient pas de carbone"],
          bonne: 1,
          explication: "Mêmes atomes que le reste du monde ; ce qui change, c'est que cette chimie sait se maintenir en ordre et se reproduire."
        },
        {
          q: "Quelle est l'unité de base de tout être vivant ?",
          choix: ["L'atome", "La cellule", "La molécule", "L'organe"],
          bonne: 1,
          explication: "La théorie cellulaire : tout être vivant est constitué d'une ou plusieurs cellules, de la bactérie à la baleine."
        },
        {
          q: "Dans le trio ADN → gène → protéine, quel est le rôle de la protéine ?",
          choix: ["Stocker l'information", "Être l'ouvrier qui exécute le travail dans la cellule", "Copier l'ADN", "Rien, c'est un déchet"],
          bonne: 1,
          explication: "L'ADN est le plan, le gène un chapitre, la protéine l'ouvrier (enzyme, structure, transport). Sens : ADN → ARN → protéine."
        },
        {
          q: "L'évolution par sélection naturelle repose sur…",
          choix: ["Un plan défini à l'avance", "De la variation (mutations) triée par la survie et la reproduction", "La volonté des individus", "Le hasard pur sans aucun tri"],
          bonne: 1,
          explication: "Deux ingrédients : la variation au hasard, puis le tri par l'environnement. Répétés longtemps, ils produisent la complexité du vivant."
        },
        {
          q: "Un antibiotique agit contre…",
          choix: ["Les virus", "Les bactéries", "Les deux", "Rien de tout ça"],
          bonne: 1,
          explication: "Il cible des mécanismes propres aux bactéries. Un virus (grippe, rhume) n'a pas ces mécanismes : l'antibiotique est inutile contre lui."
        },
        {
          q: "Pourquoi mal utiliser les antibiotiques est-il dangereux collectivement ?",
          choix: ["Ça coûte cher", "Ça sélectionne des bactéries résistantes", "Ça affaiblit le foie uniquement", "Ça n'a aucun effet"],
          bonne: 1,
          explication: "Les bactéries résistantes survivent et se multiplient : c'est de l'évolution sous nos yeux, et un enjeu mondial de santé."
        },
        {
          q: "Comment un vaccin protège-t-il ?",
          choix: ["Il tue tous les microbes du corps", "Il entraîne le système immunitaire à reconnaître un pathogène à l'avance", "Il stérilise le sang", "Il remplace les globules blancs"],
          bonne: 1,
          explication: "Le vaccin présente un fragment inoffensif du pathogène ; le système immunitaire mémorise et riposte vite lors d'une vraie infection."
        },
        {
          q: "Quelle est la structure de l'ADN décrite en 1953, et pourquoi est-ce si important ?",
          choix: ["Une sphère, pour flotter", "Une double hélice à brins complémentaires, ce qui explique comment il se copie", "Une chaîne unique, plus simple", "Un cristal cubique, très solide"],
          bonne: 1,
          explication: "Les deux brins complémentaires permettent, en se séparant, de servir chacun de modèle : c'est le mécanisme même de la copie de l'information génétique."
        }
      ]
    }

  ]
};
