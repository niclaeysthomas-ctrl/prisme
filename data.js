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
        },
        {
          titre: "Le moteur électrique",
          annee: "1821",
          qui: "Michael Faraday",
          resume: "Faraday montre qu'un fil parcouru par un courant, plongé dans le champ d'un aimant, se met à bouger. L'électricité peut donc produire du mouvement.",
          pourquoi: "C'est l'inverse exact du générateur : le générateur transforme le mouvement en courant, le moteur transforme le courant en mouvement. Ventilateur, TGV, perceuse, disque dur, voiture électrique : partout le même principe."
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
        },
        {
          titre: "L'électricité statique et la foudre",
          accroche: "Le petit \"clac\" quand tu touches une poignée en hiver et l'éclair d'un orage sont exactement le même phénomène, à deux échelles différentes.",
          blocs: [
            { t:"En frottant deux matériaux (tes semelles sur la moquette, les cristaux de glace dans un nuage), des électrons passent de l'un à l'autre. Un objet se retrouve avec un excès d'électrons (chargé −), l'autre avec un manque (chargé +). Cette charge accumulée ne circule pas : c'est l'électricité \"statique\", une pression électrique en attente." },
            { t:"Quand l'accumulation devient trop forte, tout se décharge d'un coup en forçant le passage à travers l'air : une étincelle. C'est ton \"clac\" ; en version géante entre un nuage et le sol, c'est la foudre — un courant de dizaines de milliers d'ampères pendant une fraction de seconde, qui chauffe l'air au point de le faire briller (l'éclair) et exploser (le tonnerre)." }
          ],
          retenir: "L'électricité statique = une charge accumulée et immobile. Quand elle se libère brutalement à travers l'air, ça fait une étincelle. La foudre n'est que cette étincelle à l'échelle d'un nuage."
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
        },
        {
          titre: "Les multiprises et le risque de surchauffe",
          danger: true,
          texte: "Brancher radiateur, bouilloire et chauffage d'appoint sur une même multiprise peut dépasser la puissance qu'elle supporte (souvent 3680 W, soit 16 A). Les fils chauffent alors et peuvent fondre ou prendre feu. On évite les gros appareils sur une multiprise, et on ne branche jamais une multiprise sur une autre (\"marguerite\")."
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
        },
        {
          q: "Pourquoi un oiseau posé sur un fil à haute tension n'est-il pas électrocuté ?",
          choix: ["Ses plumes l'isolent", "Il ne touche qu'un seul fil : pas de différence de tension entre ses pattes, donc pas de courant", "La tension est trop faible", "Il est trop léger"],
          bonne: 1,
          explication: "Le courant ne traverse un corps que s'il existe une différence de tension entre deux points touchés. Sur un seul fil, les deux pattes sont au même potentiel : rien ne circule. Toucher en plus un 2e fil ou le sol serait fatal."
        },
        {
          q: "Dans une centrale nucléaire, qu'est-ce qui produit concrètement l'électricité ?",
          choix: ["La réaction nucléaire directement", "La chaleur fait bouillir de l'eau, dont la vapeur fait tourner un aimant dans des bobines", "Des panneaux solaires internes", "D'immenses piles"],
          bonne: 1,
          explication: "Le nucléaire ne sert qu'à produire de la chaleur, donc de la vapeur. C'est cette vapeur qui fait tourner une turbine, donc un aimant : on retombe sur l'induction de Faraday. Charbon, gaz, nucléaire : tous font \"juste\" bouillir de l'eau."
        },
        {
          q: "Un moteur électrique, c'est essentiellement…",
          choix: ["Une grosse pile", "L'inverse d'un générateur : il transforme le courant en mouvement", "Un aimant permanent", "Une résistance chauffante"],
          bonne: 1,
          explication: "Générateur : mouvement → courant. Moteur : courant → mouvement. Même physique (courant + aimant), sens inverse. D'où ventilateurs, TGV, voitures électriques."
        },
        {
          q: "\"Courant alternatif à 50 Hz\" veut dire que le courant…",
          choix: ["Est coupé 50 fois par jour", "Change de sens 50 fois par seconde", "Vaut 50 volts", "Passe dans 50 fils"],
          bonne: 1,
          explication: "50 Hz = 50 cycles par seconde. Les électrons font un va-et-vient complet 50 fois chaque seconde, à l'image de l'aimant qui tourne dans la centrale."
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
        },
        {
          titre: "Le microprocesseur",
          annee: "1971",
          qui: "Intel (Federico Faggin, Ted Hoff, Masatoshi Shima)",
          resume: "L'Intel 4004 : la première fois que toute l'unité de calcul d'un ordinateur tient sur une seule puce de silicium grande comme un ongle.",
          pourquoi: "L'ordinateur devient miniaturisable et bon marché. Sans le microprocesseur, pas d'ordinateur personnel, pas de smartphone, pas d'objet connecté."
        },
        {
          titre: "La LED (diode électroluminescente)",
          annee: "1962",
          qui: "Nick Holonyak",
          resume: "Une diode qui, au lieu de gaspiller son énergie en chaleur, émet directement de la lumière quand le courant la traverse.",
          pourquoi: "Bien plus efficace que l'ampoule à filament (presque pas de chaleur perdue), elle a remplacé l'essentiel de l'éclairage et illumine tous nos écrans. La LED bleue, plus tardive, a valu un Nobel en 2014."
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
        },
        {
          titre: "Comment on grave des milliards de transistors",
          accroche: "Comment fait-on tenir cinquante milliards d'interrupteurs sur un ongle ? En dessinant… avec de la lumière.",
          blocs: [
            { t:"On part d'une galette de silicium ultra-pur. On la recouvre d'un vernis sensible à la lumière, puis on projette dessus le plan du circuit — énormément réduit — à travers un masque, comme une diapositive. Là où la lumière frappe, le vernis change ; on peut alors creuser ou déposer de la matière exactement selon le motif." },
            { t:"On répète l'opération couche par couche, des dizaines de fois, pour bâtir les transistors et tous leurs fils de connexion. Les détails atteignent aujourd'hui quelques nanomètres — soit quelques dizaines d'atomes, plus fin que la longueur d'onde de la lumière visible. C'est cette précision hallucinante qui permet la miniaturisation." }
          ],
          retenir: "Une puce est \"imprimée\" par la lumière (photolithographie), couche après couche, sur du silicium. La finesse atteint quelques nanomètres : voilà comment on entasse des dizaines de milliards de transistors sur une puce."
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
        },
        {
          q: "Combien de transistors compte environ un processeur de smartphone moderne ?",
          choix: ["Quelques centaines", "Quelques milliers", "Des dizaines de milliards", "Exactement un million"],
          bonne: 2,
          explication: "On grave aujourd'hui des dizaines de milliards de transistors sur une puce grande comme un ongle. C'est la miniaturisation décrite par la loi de Moore."
        },
        {
          q: "Une LED, c'est…",
          choix: ["Une petite ampoule à filament", "Une diode conçue pour émettre de la lumière quand le courant la traverse", "Un transistor", "Une résistance"],
          bonne: 1,
          explication: "C'est une diode (sens unique) qui émet de la lumière plutôt que de la chaleur : bien plus efficace qu'un filament, d'où sa généralisation dans l'éclairage et les écrans."
        },
        {
          q: "Un octet (byte) correspond à…",
          choix: ["1 bit", "8 bits", "1000 bits", "1 transistor"],
          bonne: 1,
          explication: "8 bits = 1 octet. Avec ces 8 chiffres binaires, on code par exemple une lettre, ou un nombre de 0 à 255."
        },
        {
          q: "Comment grave-t-on les motifs microscopiques d'une puce ?",
          choix: ["Au laser, un par un", "En projetant le plan réduit avec de la lumière sur un vernis photosensible, couche par couche", "En les imprimant à l'encre", "En les soudant à la main"],
          bonne: 1,
          explication: "C'est la photolithographie : la lumière insole un plan à travers un masque, couche après couche. Les détails atteignent quelques nanomètres."
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
        },
        {
          titre: "La première exoplanète",
          annee: "1995",
          qui: "Michel Mayor & Didier Queloz",
          resume: "Première détection d'une planète en orbite autour d'une autre étoile que le Soleil (51 Pegasi b). On en connaît aujourd'hui des milliers, et on estime qu'il y en a des milliards.",
          pourquoi: "La question \"sommes-nous seuls ?\" devient une science : on cherche désormais des planètes de la taille de la Terre, dans la zone où l'eau peut être liquide. Prix Nobel 2019."
        },
        {
          titre: "Les ondes gravitationnelles",
          annee: "2015",
          qui: "Collaboration LIGO",
          resume: "Détection directe des ondulations de l'espace-temps prédites par Einstein en 1916, produites ici par la collision de deux trous noirs il y a 1,3 milliard d'années.",
          pourquoi: "Une toute nouvelle fenêtre sur l'univers : on ne l'observe plus seulement avec de la lumière, mais en \"écoutant\" les vibrations de l'espace lui-même. Prix Nobel 2017."
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
        },
        {
          titre: "Le Big Bang n'est pas une explosion",
          accroche: "L'image d'une bombe qui projette de la matière dans le vide est fausse. Le Big Bang, c'est l'espace lui-même qui grandit.",
          blocs: [
            { t:"Une explosion se produit quelque part, dans un espace qui existe déjà, et envoie des débris vers l'extérieur depuis un centre. Le Big Bang, non : il n'y a ni \"centre\" d'où tout partirait, ni \"dehors\" vers lequel s'étendre. C'est l'espace entier qui s'étire, partout à la fois." },
            { t:"La bonne image est un cake aux raisins qui gonfle au four. Chaque raisin s'éloigne de tous les autres, non parce qu'il se déplace dans la pâte, mais parce que la pâte entre les raisins grandit. Les galaxies sont les raisins, l'espace est la pâte. Voilà pourquoi, depuis n'importe quelle galaxie, toutes les autres semblent fuir." }
          ],
          retenir: "Le Big Bang n'est pas une explosion DANS l'espace, mais une expansion DE l'espace : ni centre, ni bord. Partout, la distance entre galaxies augmente — comme les raisins d'un cake qui gonfle."
        },
        {
          titre: "Pourquoi il y a des saisons",
          accroche: "Non, ce n'est pas parce que la Terre est plus proche du Soleil en été. La preuve : quand c'est l'été chez nous, c'est l'hiver en Australie.",
          blocs: [
            { t:"L'axe de rotation de la Terre est incliné (d'environ 23°). Au fil de l'année, c'est tantôt l'hémisphère nord, tantôt l'hémisphère sud qui est penché vers le Soleil. L'hémisphère penché reçoit les rayons plus à la verticale (donc plus concentrés) et pendant plus d'heures par jour : c'est l'été. L'autre, incliné à l'opposé, est en hiver." },
            { t:"La distance Terre-Soleil, elle, ne varie presque pas — et la Terre est même un peu plus PROCHE du Soleil en janvier, en plein hiver de l'hémisphère nord. Ce qui fait les saisons, c'est l'inclinaison, jamais la distance." }
          ],
          retenir: "Les saisons viennent de l'inclinaison de l'axe terrestre, pas de la distance au Soleil. L'hémisphère penché vers le Soleil reçoit des rayons plus directs et plus longs : c'est l'été. D'où les saisons inversées entre nord et sud."
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
        },
        {
          titre: "Les marées, c'est surtout la Lune",
          texte: "La Lune attire les océans par sa gravité : l'eau se bombe légèrement du côté qui lui fait face (et, par un effet symétrique, du côté opposé). Comme la Terre tourne sous ce bourrelet d'eau, chaque littoral connaît deux marées hautes par jour. Le Soleil s'en mêle un peu : quand Lune et Soleil s'alignent (pleine et nouvelle lune), les marées sont les plus fortes — les grandes marées."
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
        },
        {
          q: "La lumière du Soleil met environ combien de temps à nous parvenir ?",
          choix: ["C'est instantané", "8 minutes", "1 heure", "1 journée"],
          bonne: 1,
          explication: "Environ 8 minutes. Tu vois donc toujours le Soleil tel qu'il était il y a 8 minutes — s'il s'éteignait, on ne le saurait qu'après ce délai."
        },
        {
          q: "Le Big Bang, c'est…",
          choix: ["Une explosion de matière dans le vide", "L'expansion de l'espace lui-même, sans centre ni bord", "L'explosion du Soleil primitif", "Une théorie aujourd'hui abandonnée"],
          bonne: 1,
          explication: "Pas une explosion DANS l'espace, mais une dilatation DE l'espace, partout à la fois — comme les raisins d'un cake qui gonfle s'éloignant les uns des autres."
        },
        {
          q: "Pourquoi y a-t-il des saisons ?",
          choix: ["La Terre est plus près du Soleil en été", "L'axe de la Terre est incliné : un hémisphère est penché vers le Soleil", "Le Soleil brûle plus fort l'été", "La Lune projette son ombre"],
          bonne: 1,
          explication: "L'inclinaison de l'axe (~23°) fait que l'hémisphère penché reçoit des rayons plus directs et plus longs. La distance ne joue quasiment pas — d'où les saisons inversées entre nord et sud."
        },
        {
          q: "Que reste-t-il après l'explosion (supernova) d'une étoile très massive ?",
          choix: ["Rien du tout", "Une étoile à neutrons ou un trou noir", "Une nouvelle planète", "Seulement un nuage de gaz"],
          bonne: 1,
          explication: "Le cœur s'effondre en étoile à neutrons (ultra-dense) ou, pour les plus massives, en trou noir. Les couches externes sont soufflées et ensemencent l'espace en éléments lourds."
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
        },
        {
          titre: "La synthèse de l'urée",
          annee: "1828",
          qui: "Friedrich Wöhler",
          resume: "Wöhler fabrique de l'urée — une molécule produite par les êtres vivants — à partir d'un simple composé minéral, dans un tube à essai.",
          pourquoi: "Avant lui, on croyait que les molécules du vivant exigeaient une mystérieuse \"force vitale\". Wöhler prouve que la chimie du vivant obéit aux mêmes lois que le reste de la matière : c'est l'acte de naissance de la chimie organique."
        },
        {
          titre: "La radioactivité",
          annee: "1896-1898",
          qui: "Henri Becquerel, Marie et Pierre Curie",
          resume: "Certains éléments (uranium, radium) émettent spontanément un rayonnement en se transformant. Marie Curie isole deux nouveaux éléments, le polonium et le radium.",
          pourquoi: "Révèle que l'atome n'est pas immuable : il peut se désintégrer et libérer de l'énergie. Ouvre la médecine nucléaire et la datation… mais coûtera la vie à Marie Curie, exposée sans protection. Deux prix Nobel."
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
        },
        {
          titre: "Physique ou chimique ? La bonne question à se poser",
          accroche: "L'eau qui gèle et le bois qui brûle changent tous les deux d'aspect. Pourtant un seul est une vraie transformation chimique.",
          blocs: [
            { h:"Changement d'état = physique", t:"Quand l'eau fond, bout ou s'évapore, ses molécules restent des H₂O : elles se rapprochent ou s'écartent, c'est tout. Aucune nouvelle substance n'est créée, et c'est réversible (la vapeur redevient eau, l'eau regèle). C'est un changement physique." },
            { h:"Réaction = chimique", t:"Quand le bois brûle ou que le fer rouille, les molécules de départ sont cassées et recombinées en d'AUTRES molécules (gaz, cendres, oxyde). De nouvelles substances apparaissent, et on ne peut pas revenir en arrière facilement. Là, c'est chimique. Le test à retenir : y a-t-il de NOUVELLES molécules à la fin ?" }
          ],
          retenir: "Changement d'état (fondre, bouillir) = physique : mêmes molécules, réversible. Réaction chimique (brûler, rouiller) = de nouvelles molécules se forment, difficilement réversible. La question clé : nouvelles molécules, oui ou non ?"
        },
        {
          titre: "Le catalyseur : accélérer sans se consumer",
          accroche: "Certaines réactions sont possibles mais désespérément lentes. Un catalyseur les débloque — et ressort intact, prêt à recommencer.",
          blocs: [
            { t:"Un catalyseur est une substance qui accélère énormément une réaction en lui offrant un chemin plus facile, sans être consommée : on la retrouve intacte à la fin. Le pot catalytique d'une voiture, par exemple, transforme à la volée des gaz d'échappement toxiques en gaz moins nocifs." },
            { t:"Le vivant en est bourré : ce sont les enzymes. Sans elles, digérer un repas prendrait des années au lieu de quelques heures. Chaque enzyme accélère une réaction bien précise, des millions de fois — c'est ce qui rend la vie chimiquement possible à la douce température du corps." }
          ],
          retenir: "Un catalyseur accélère une réaction sans être consommé (donc réutilisable). Dans le vivant, ce sont les enzymes : elles rendent possibles à 37 °C des réactions qui, autrement, prendraient des années."
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
        },
        {
          q: "L'eau qui bout et se change en vapeur, c'est…",
          choix: ["Une réaction chimique", "Un changement d'état (physique) : les molécules restent des H₂O", "Une combustion", "Une oxydation"],
          bonne: 1,
          explication: "Aucune nouvelle molécule n'est créée : l'eau reste de l'eau. C'est physique et réversible, contrairement à une combustion qui, elle, forme de nouvelles substances."
        },
        {
          q: "Qu'est-ce qu'un catalyseur ?",
          choix: ["Une substance qui accélère une réaction sans être consommée", "Un explosif", "Un acide très fort", "Un gaz rare"],
          bonne: 0,
          explication: "Il facilite la réaction et ressort intact, donc réutilisable. Les enzymes de ton corps sont des catalyseurs qui rendent la digestion possible à 37 °C."
        },
        {
          q: "Pourquoi saler les routes fait-il fondre le verglas ?",
          choix: ["Le sel dégage de la chaleur", "Le sel abaisse la température à laquelle l'eau gèle", "Le sel brûle la glace", "Le sel absorbe la glace"],
          bonne: 1,
          explication: "De l'eau salée reste liquide en dessous de 0 °C. En salant, on empêche l'eau de geler aux températures proches de zéro."
        },
        {
          q: "Combien d'éléments compte environ le tableau périodique ?",
          choix: ["Une dizaine", "Environ 118", "Plusieurs milliers", "Exactement 50"],
          bonne: 1,
          explication: "Environ 118 éléments connus, dont ~90 présents naturellement. Toute la matière de l'univers se combine à partir de ces \"lettres\"."
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
        },
        {
          titre: "L'antimatière",
          annee: "1928 / 1932",
          qui: "Paul Dirac (prédiction), Carl Anderson (détection)",
          resume: "Dirac prédit par le calcul un \"jumeau\" de l'électron, de charge opposée. Quatre ans plus tard, on le détecte : le positron. À chaque particule correspond une antiparticule.",
          pourquoi: "Quand matière et antimatière se rencontrent, elles s'annihilent en pure énergie (E = mc²). Ce n'est pas de la science-fiction : l'imagerie médicale TEP (le PET-scan) exploite ce phénomène tous les jours."
        },
        {
          titre: "Le boson de Higgs",
          annee: "2012",
          qui: "CERN (théorisé par Higgs, Englert et al. en 1964)",
          resume: "Détection, dans le grand collisionneur LHC, de la particule associée au champ de Higgs — le champ qui donne leur masse aux autres particules.",
          pourquoi: "Dernière pièce manquante du \"modèle standard\", notre meilleure théorie des particules. Il répond à une question fondamentale : pourquoi les particules ont-elles une masse plutôt que rien ? Prix Nobel 2013."
        },
        {
          titre: "L'atome de Bohr",
          annee: "1913",
          qui: "Niels Bohr",
          resume: "Bohr propose que les électrons ne tournent autour du noyau que sur certaines orbites permises, à énergies fixes. En sautant de l'une à l'autre, ils émettent ou absorbent un grain de lumière bien précis.",
          pourquoi: "Première explication des couleurs propres à chaque atome (ses \"raies\") et de la structure du tableau périodique. Le pont décisif entre l'atome et la théorie quantique naissante."
        },
        {
          titre: "L'intrication confirmée",
          annee: "1982",
          qui: "Alain Aspect (d'après Einstein-Podolsky-Rosen 1935 et John Bell 1964)",
          resume: "Deux particules \"intriquées\" restent corrélées même séparées par une grande distance : mesurer l'une fixe instantanément l'état de l'autre. Aspect le prouve par l'expérience.",
          pourquoi: "Einstein jugeait cette \"action fantôme à distance\" impossible. L'expérience lui donne tort : l'intrication est bien réelle. C'est la base des ordinateurs quantiques et de la cryptographie quantique. Prix Nobel 2022."
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
        },
        {
          titre: "Rien ne va plus vite que la lumière",
          accroche: "300 000 km/s, ce n'est pas juste \"très rapide\" : c'est la limite de vitesse de l'univers, et rien de matériel ne peut l'atteindre.",
          blocs: [
            { t:"Plus on pousse un objet qui a une masse, plus il va vite — mais plus il devient difficile de l'accélérer encore. En s'approchant de la vitesse de la lumière, il faudrait une énergie tendant vers l'infini pour aller plus vite : c'est impossible. Seuls les objets sans masse, comme la lumière elle-même, atteignent cette vitesse." },
            { t:"Le plus étrange : cette vitesse est la même pour tout le monde, quelle que soit sa propre vitesse. Que tu fonces vers un rayon lumineux ou que tu le fuies, tu le mesures toujours à 300 000 km/s. C'est de cette bizarrerie que découle toute la relativité — le temps qui ralentit, les longueurs qui se contractent." }
          ],
          retenir: "La vitesse de la lumière (~300 000 km/s) est la limite absolue de l'univers : accélérer une masse jusque-là demanderait une énergie infinie. Seul ce qui n'a pas de masse l'atteint."
        },
        {
          titre: "La superposition et le chat de Schrödinger",
          accroche: "Le fameux chat \"mort et vivant à la fois\" n'est pas une devinette : c'est une image pour illustrer une propriété bien réelle du monde quantique.",
          blocs: [
            { t:"À l'échelle des particules, tant qu'on ne l'observe pas, un objet quantique peut être dans plusieurs états à la fois — par exemple à deux endroits en même temps. C'est la superposition. Ce n'est pas qu'on ignore où il est : il est réellement dans une combinaison des deux, jusqu'à ce qu'une mesure le \"fixe\" sur un état." },
            { t:"Schrödinger a poussé l'idée à l'absurde : en liant le sort d'un chat à une particule superposée, le chat serait \"mort ET vivant\" tant qu'on n'ouvre pas la boîte. Son but était de souligner combien c'est déroutant transposé à notre échelle. Mais pour les particules, la superposition est bien réelle — et c'est précisément elle qu'exploitent les ordinateurs quantiques." }
          ],
          retenir: "Superposition = une particule non observée est réellement dans plusieurs états à la fois, jusqu'à la mesure. Le chat de Schrödinger illustre l'absurdité de transposer ça à notre échelle. C'est la base des ordinateurs quantiques."
        },
        {
          titre: "L'intrication : le lien fantôme entre deux particules",
          accroche: "Deux particules peuvent rester si liées que ce qui arrive à l'une se reflète instantanément sur l'autre, même à l'autre bout de l'univers. Einstein trouvait ça impossible. Il avait tort.",
          blocs: [
            { t:"Quand deux particules sont \"intriquées\", elles ne forment plus qu'un seul système : leurs propriétés sont liées. Mesure l'une, et tu connais aussitôt l'état de l'autre, quelle que soit la distance. Imagine deux pièces magiques qui, lancées aux deux bouts du monde, tomberaient toujours sur des faces coordonnées." },
            { t:"Le piège à éviter : cela ne permet PAS d'envoyer un message plus vite que la lumière, car le résultat de chaque mesure reste, pris isolément, totalement aléatoire. Mais la corrélation, elle, est bien réelle et plus forte que tout ce que la physique classique autorise. C'est l'une des ressources clés des ordinateurs quantiques." }
          ],
          retenir: "L'intrication lie deux particules en un seul système : mesurer l'une fixe instantanément l'état de l'autre, à toute distance. Ça ne transmet pas d'information plus vite que la lumière, mais c'est bien réel — et exploitable en informatique quantique."
        },
        {
          titre: "L'effet tunnel : traverser un mur infranchissable",
          accroche: "En physique classique, sans l'élan pour passer une colline, tu redescends. Dans le monde quantique, une particule peut parfois se retrouver de l'autre côté sans jamais passer par-dessus.",
          blocs: [
            { t:"Une particule quantique est \"floue\" : elle est décrite par une onde de probabilité qui s'étale un peu partout. Face à une barrière d'énergie qu'elle ne devrait pas pouvoir franchir, il reste une petite chance qu'elle apparaisse de l'autre côté — comme si elle avait creusé un tunnel. Plus la barrière est fine, plus c'est probable." },
            { t:"Ce n'est pas une curiosité de laboratoire : c'est grâce à l'effet tunnel que le Soleil brille (des noyaux fusionnent alors qu'ils devraient se repousser), que certains atomes sont radioactifs, et que fonctionnent la mémoire flash de ta clé USB et le microscope qui \"voit\" les atomes un par un." }
          ],
          retenir: "Effet tunnel : une particule peut franchir une barrière d'énergie qu'elle ne \"devrait\" pas pouvoir passer, parce qu'elle est étalée en probabilité. Sans lui, le Soleil ne brillerait pas et ta clé USB n'existerait pas."
        },
        {
          titre: "Le spin et le principe de Pauli : pourquoi la matière est solide",
          accroche: "Pourquoi ta main ne traverse-t-elle pas la table, alors qu'un atome est surtout du vide ? La réponse tient dans une règle quantique, pas dans la \"solidité\" de la matière.",
          blocs: [
            { t:"Les électrons possèdent une propriété quantique appelée spin, une sorte de \"sens de rotation\" sans équivalent dans notre monde. Le principe d'exclusion de Pauli impose que deux électrons ne peuvent jamais occuper exactement le même état au même endroit." },
            { t:"Conséquence : quand tu presses deux objets l'un contre l'autre, leurs électrons refusent de se superposer et se repoussent violemment. C'est cette répulsion — et non un quelconque \"plein\" de la matière — qui empêche ta main de traverser la table. La même règle explique pourquoi les électrons se rangent par couches, donnant au tableau périodique sa forme en colonnes." }
          ],
          retenir: "Le principe de Pauli interdit à deux électrons d'être dans le même état : ils s'évitent. C'est ce qui rend la matière \"solide\" (les objets ne se traversent pas) et ce qui structure le tableau périodique."
        },
        {
          titre: "Pourquoi on ne voit jamais le quantique (la décohérence)",
          accroche: "Si une particule peut être à deux endroits à la fois, pourquoi jamais un ballon de foot ? La réponse fait le pont entre le monde quantique et le nôtre.",
          blocs: [
            { t:"Les comportements quantiques (superposition, intrication) sont extrêmement fragiles. Dès qu'un objet interagit avec son environnement — de l'air, de la lumière, de la chaleur — ces états délicats se \"brouillent\" quasi instantanément et se réduisent à un seul état bien défini. On appelle ça la décohérence." },
            { t:"Un électron isolé reste quantique. Un objet de notre taille, fait de milliards de milliards de particules sans cesse bousculées, perd ses propriétés quantiques en un temps infime : il se comporte \"classiquement\". Voilà pourquoi un ordinateur quantique doit isoler et refroidir ses qubits près du zéro absolu — pour retarder cette décohérence." }
          ],
          retenir: "La décohérence : au contact de l'environnement, les états quantiques se brouillent instantanément et deviennent classiques. C'est pourquoi le quantique reste invisible à notre échelle, et pourquoi les ordinateurs quantiques doivent isoler leurs qubits du monde."
        },
        {
          titre: "L'ordinateur quantique : ce que c'est (et ce que ce n'est pas)",
          accroche: "Ce n'est pas un ordinateur simplement \"plus rapide\". Il calcule d'une façon fondamentalement différente — et seulement pour certains problèmes.",
          blocs: [
            { t:"Un ordinateur classique manipule des bits, chacun valant 0 OU 1. Un ordinateur quantique manipule des \"qubits\" qui, par superposition, explorent 0 ET 1 à la fois, et qui, par intrication, se coordonnent. En orchestrant finement ces états, il peut évaluer un nombre colossal de combinaisons simultanément." },
            { t:"Ce n'est pas une baguette magique : il n'accélère qu'une poignée de problèmes très particuliers — factoriser de très grands nombres (ce qui menacerait le chiffrement actuel), ou simuler des molécules pour la chimie et les médicaments. Pour envoyer un mail, naviguer ou jouer, un ordinateur classique reste bien meilleur." }
          ],
          retenir: "Un ordinateur quantique exploite superposition et intrication pour explorer massivement de possibilités en parallèle. Redoutable sur quelques problèmes précis (chiffrement, chimie), inutile pour le quotidien, et si fragile qu'il doit être isolé du monde."
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
        },
        {
          q: "Pourquoi ne peut-on pas accélérer une fusée jusqu'à dépasser la vitesse de la lumière ?",
          choix: ["Le carburant gèlerait", "Plus on approche de cette vitesse, plus l'énergie nécessaire tend vers l'infini", "La lumière la repousserait", "On le peut, en réalité"],
          bonne: 1,
          explication: "Amener une masse à la vitesse de la lumière demanderait une énergie infinie. Seuls les objets sans masse (la lumière) l'atteignent : c'est la limite de vitesse de l'univers."
        },
        {
          q: "La \"superposition\" quantique signifie qu'une particule non observée…",
          choix: ["N'existe pas vraiment", "Peut être réellement dans plusieurs états à la fois, jusqu'à la mesure", "Va plus vite que la lumière", "Est toujours parfaitement immobile"],
          bonne: 1,
          explication: "Avant mesure, elle est dans une combinaison de plusieurs états (ex : deux endroits). Le chat de Schrödinger illustre l'étrangeté de l'idée. C'est le principe des ordinateurs quantiques."
        },
        {
          q: "L'antimatière, ça existe vraiment ?",
          choix: ["Non, c'est de la science-fiction", "Oui : chaque particule a une antiparticule, utilisée par ex. dans les PET-scans", "Seulement au cœur des étoiles", "Uniquement sur le papier"],
          bonne: 1,
          explication: "Prédite par Dirac (1928), détectée dès 1932. Particule et antiparticule s'annihilent en énergie. L'imagerie médicale TEP (PET-scan) l'exploite au quotidien."
        },
        {
          q: "Un morceau de métal chauffé devient rouge, puis blanc. Pourquoi ?",
          choix: ["Il rouille", "Tout corps chaud émet de la lumière, et la couleur émise dépend de la température", "Il reflète les flammes", "C'est une réaction chimique"],
          bonne: 1,
          explication: "C'est le rayonnement thermique : plus c'est chaud, plus la lumière émise se décale vers le blanc/bleu. Expliquer ce phénomène a mené Planck à fonder la physique quantique en 1900."
        },
        {
          q: "Deux particules intriquées sont séparées de plusieurs kilomètres. Mesurer l'une…",
          choix: ["N'a aucun effet sur l'autre", "Fixe instantanément l'état de l'autre, sans pour autant transmettre de message", "Détruit l'autre", "Envoie un message plus vite que la lumière"],
          bonne: 1,
          explication: "La corrélation est instantanée et réelle, mais comme chaque résultat pris seul est aléatoire, on ne peut pas s'en servir pour transmettre une information plus vite que la lumière."
        },
        {
          q: "Grâce à quel phénomène le Soleil peut-il fusionner l'hydrogène malgré la répulsion des noyaux ?",
          choix: ["La décohérence", "L'effet tunnel", "L'intrication", "Le spin"],
          bonne: 1,
          explication: "L'effet tunnel donne aux noyaux une petite chance de franchir la barrière de répulsion. Sans lui, le Soleil ne brillerait pas — et la mémoire flash de ta clé USB n'existerait pas."
        },
        {
          q: "Pourquoi ta main ne traverse-t-elle pas la table, alors que les atomes sont surtout du vide ?",
          choix: ["Les atomes sont en fait pleins", "Le principe de Pauli fait que les électrons refusent de se superposer et se repoussent", "À cause de la gravité", "À cause du magnétisme"],
          bonne: 1,
          explication: "Deux électrons ne peuvent pas occuper le même état (Pauli) : pressés l'un contre l'autre, ils se repoussent. C'est cette répulsion qui rend la matière \"solide\"."
        },
        {
          q: "Pourquoi ne voit-on jamais un objet de notre taille \"à deux endroits à la fois\" ?",
          choix: ["C'est interdit par une loi", "La décohérence : au contact de l'environnement, les états quantiques se brouillent instantanément", "Les gros objets n'ont pas d'atomes", "On n'observe pas assez finement"],
          bonne: 1,
          explication: "Un objet macroscopique interagit sans cesse avec son environnement ; ses états quantiques se réduisent instantanément à un seul. C'est la décohérence."
        },
        {
          q: "À quoi sert surtout un ordinateur quantique ?",
          choix: ["À tout faire plus vite", "À quelques problèmes précis (chiffrement, simulation de molécules)", "À jouer aux jeux vidéo", "À remplacer entièrement les ordinateurs classiques"],
          bonne: 1,
          explication: "Il n'accélère qu'une poignée de problèmes exploitant superposition et intrication. Pour le quotidien, un ordinateur classique reste bien meilleur."
        },
        {
          q: "Pourquoi chaque type d'atome émet-il des couleurs bien précises (ses \"raies\") ?",
          choix: ["À cause de sa température", "Ses électrons ne peuvent occuper que certains niveaux d'énergie et émettent en sautant de l'un à l'autre", "C'est un reflet du Soleil", "C'est le fruit du hasard"],
          bonne: 1,
          explication: "Modèle de Bohr : les électrons sautent entre des niveaux d'énergie fixes, émettant à chaque saut un grain de lumière d'une couleur précise. C'est la signature de l'atome."
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
        },
        {
          titre: "La théorie des germes",
          annee: "années 1860",
          qui: "Louis Pasteur",
          resume: "Pasteur montre que des micro-organismes invisibles causent les fermentations et de nombreuses maladies — et qu'on peut les neutraliser par la chaleur (la pasteurisation).",
          pourquoi: "Fin de la croyance en la \"génération spontanée\". Naissance de l'hygiène, de l'asepsie en chirurgie et de la microbiologie. Se laver les mains et stériliser les instruments a sauvé des millions de vies."
        },
        {
          titre: "CRISPR, les ciseaux génétiques",
          annee: "2012",
          qui: "Jennifer Doudna & Emmanuelle Charpentier",
          resume: "Un outil emprunté au système de défense des bactéries, qui permet de couper et modifier l'ADN à un endroit précis — simplement, vite et à faible coût.",
          pourquoi: "Une révolution pour la biologie et la médecine : on commence à corriger des maladies héréditaires en réécrivant directement le gène fautif. Prix Nobel de chimie 2020."
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
        },
        {
          titre: "La photosynthèse : capter la lumière pour fabriquer du vivant",
          accroche: "À la base de presque toute la nourriture et tout l'oxygène de la planète, il y a des êtres qui \"mangent\" de la lumière.",
          blocs: [
            { t:"Les plantes, les algues et certaines bactéries captent l'énergie de la lumière du Soleil et s'en servent pour assembler, à partir de CO₂ (puisé dans l'air) et d'eau, des molécules de sucre riches en énergie. Elles fabriquent leur propre matière à partir de presque rien — c'est l'inverse d'un animal, qui doit manger d'autres organismes." },
            { t:"Deux conséquences immenses. D'abord, elles rejettent de l'oxygène : celui que tu respires vient de là. Ensuite, elles sont le premier maillon de presque toutes les chaînes alimentaires. Quand tu manges, tu consommes, en bout de chaîne, de l'énergie solaire captée par des plantes." }
          ],
          retenir: "Photosynthèse : lumière + CO₂ + eau → sucre + oxygène. C'est la porte d'entrée de l'énergie du Soleil dans le vivant. Notre nourriture ET l'oxygène qu'on respire en découlent."
        },
        {
          titre: "Qu'est-ce qu'un virus ?",
          accroche: "Ni tout à fait vivant, ni tout à fait inerte : le virus est un cas-limite fascinant — et comprendre ce qu'il est explique pourquoi on le soigne autrement.",
          blocs: [
            { t:"Un virus, c'est un simple fragment d'information génétique (ADN ou ARN) emballé dans une coque de protéines. Contrairement à une cellule, il n'a aucune machinerie à lui : il ne se nourrit pas, ne produit pas d'énergie, et surtout ne peut pas se reproduire seul. Isolé, c'est presque un objet inerte." },
            { t:"Pour se multiplier, il doit entrer dans une de tes cellules et détourner SA machinerie pour se faire recopier en masse. C'est exactement pour ça qu'un antibiotique — qui s'attaque à la machinerie propre des bactéries — ne peut rien contre lui : le virus n'a pas de machinerie à saboter, il emprunte la tienne." }
          ],
          retenir: "Un virus = un bout d'information dans une coque, incapable de se reproduire seul ; il détourne les cellules qu'il infecte. D'où l'inutilité des antibiotiques contre lui, et l'intérêt des vaccins qui préparent la défense."
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
        },
        {
          q: "Où l'ADN est-il rangé dans une de tes cellules ?",
          choix: ["Dans la membrane", "Dans le noyau", "Dans le sang", "Il flotte partout autour de la cellule"],
          bonne: 1,
          explication: "Chez les organismes comme nous, l'ADN est protégé dans le noyau. Les bactéries, plus simples, n'ont pas de noyau : leur ADN flotte librement."
        },
        {
          q: "Qu'est-ce qu'un virus, fondamentalement ?",
          choix: ["Une petite bactérie", "Un fragment d'information dans une coque, incapable de se reproduire seul", "Un poison chimique", "Un champignon microscopique"],
          bonne: 1,
          explication: "Sans machinerie propre, il détourne tes cellules pour se copier. D'où l'inutilité des antibiotiques, qui ciblent la machinerie des bactéries."
        },
        {
          q: "La photosynthèse produit notamment…",
          choix: ["Du CO₂", "De l'oxygène et du sucre, à partir de lumière, d'eau et de CO₂", "De l'azote pur", "De l'électricité"],
          bonne: 1,
          explication: "Les plantes captent la lumière pour fabriquer du sucre (leur énergie) et rejettent l'oxygène qu'on respire. C'est l'entrée de l'énergie solaire dans le vivant."
        },
        {
          q: "Toutes tes cellules ont le même ADN. Pourquoi un neurone diffère-t-il d'une cellule de peau ?",
          choix: ["Elles ont un ADN différent", "Elles n'activent pas les mêmes gènes", "L'une n'a pas d'ADN", "C'est totalement aléatoire"],
          bonne: 1,
          explication: "Le plan complet est dans chaque cellule, mais chacune ne \"lit\" que les chapitres (gènes) utiles à sa fonction. C'est l'expression génique."
        }
      ]
    },

    /* ============================ LA TERRE ============================ */
    {
      id: "terre",
      nom: "La Terre",
      emoji: "🌍",
      accent: "#6ec98a",
      tagline: "La planète sous tes pieds, en mouvement.",
      decouvertes: [
        {
          titre: "L'âge de la Terre",
          annee: "1956",
          qui: "Clair Patterson",
          resume: "En datant des météorites par la désintégration radioactive du plomb, Patterson établit l'âge de la Terre : 4,54 milliards d'années.",
          pourquoi: "Donne l'échelle de temps vertigineuse dont la géologie et l'évolution ont besoin. Sans temps long, ni montagnes érodées ni espèces transformées ne s'expliquent."
        },
        {
          titre: "La dérive des continents",
          annee: "1912",
          qui: "Alfred Wegener",
          resume: "Wegener remarque que les continents s'emboîtent comme un puzzle et propose qu'ils dérivent. Moqué de son vivant, il est confirmé dans les années 1960 par la tectonique des plaques.",
          pourquoi: "Explique d'un coup la forme des continents, les chaînes de montagnes, et pourquoi séismes et volcans se concentrent aux mêmes endroits. Une des grandes unifications de la science."
        },
        {
          titre: "L'intérieur de la Terre par les séismes",
          annee: "1909-1936",
          qui: "Andrija Mohorovičić, Inge Lehmann",
          resume: "En étudiant comment les ondes des séismes se courbent et rebondissent en profondeur, on cartographie les couches internes — jusqu'à découvrir que le noyau a une graine solide (Lehmann).",
          pourquoi: "On connaît l'intérieur de la Terre sans jamais y descendre : les séismes sont une échographie géante de la planète."
        },
        {
          titre: "L'effet de serre calculé",
          annee: "1896",
          qui: "Svante Arrhenius",
          resume: "Arrhenius calcule, à la main, de combien la température monterait si l'on doublait le CO₂ de l'atmosphère. Son ordre de grandeur reste étonnamment juste.",
          pourquoi: "Acte de naissance de la science du climat : le lien entre CO₂ et température est établi plus d'un siècle avant les débats actuels."
        },
        {
          titre: "Le champ magnétique et ses inversions",
          annee: "1906",
          qui: "Bernard Brunhes (puis la géomagnétique moderne)",
          resume: "On découvre que certaines roches anciennes sont aimantées à l'envers : le champ magnétique terrestre s'est inversé de nombreuses fois au cours de l'histoire.",
          pourquoi: "Ces bandes aimantées de part et d'autre des dorsales océaniques ont fourni la preuve décisive que les fonds marins s'écartent — confirmant la tectonique des plaques."
        },
        {
          titre: "Le trou dans la couche d'ozone",
          annee: "1985",
          qui: "Joe Farman et al. (mécanisme : Molina & Rowland, 1974)",
          resume: "On découvre au-dessus de l'Antarctique un effondrement de la couche d'ozone, causé par des gaz industriels (les CFC des aérosols et réfrigérateurs).",
          pourquoi: "Rare succès mondial : le Protocole de Montréal (1987) a interdit ces gaz, et la couche se reconstitue lentement. La preuve qu'une action collective peut réparer un dégât planétaire."
        }
      ],
      notions: [
        {
          titre: "Un oignon de roche : la structure de la Terre",
          accroche: "Sous tes pieds, la Terre est faite de couches, comme un oignon — et on les connaît grâce aux tremblements de terre.",
          blocs: [
            { h:"Trois grandes couches", t:"La croûte, mince pellicule solide sur laquelle on vit (quelques dizaines de km). Le manteau, épais, en roche brûlante qui flue très lentement comme une pâte. Le noyau, en métal (fer-nickel) : liquide à l'extérieur, solide au centre malgré 5000 °C, à cause de l'énorme pression." },
            { h:"Comment on le sait", t:"On n'a jamais foré à plus de ~12 km. Mais les ondes d'un séisme traversent toute la planète en changeant de vitesse et de direction selon la matière rencontrée. En analysant leur trajet, on \"radiographie\" l'intérieur — c'est ainsi qu'on a déduit chaque couche." }
          ],
          retenir: "La Terre est faite de couches : croûte (fine), manteau (roche qui flue lentement), noyau (métal, liquide puis solide). On les connaît grâce aux ondes sismiques qui la traversent, comme une échographie."
        },
        {
          titre: "La tectonique des plaques : un puzzle qui bouge",
          accroche: "La surface de la Terre n'est pas d'un seul tenant : c'est un puzzle de grandes plaques qui glissent lentement, portées par le manteau.",
          blocs: [
            { t:"La croûte est découpée en une douzaine de plaques qui se déplacent de quelques centimètres par an — la vitesse de pousse de tes ongles. Elles flottent sur le manteau chaud, animé de lents mouvements de convection (la roche chaude monte, la froide redescend)." },
            { t:"Tout se joue à leurs frontières. Quand deux plaques s'écartent (dorsales océaniques), de la roche neuve remonte. Quand elles se percutent, l'une plonge sous l'autre (subduction) ou elles se soulèvent en montagnes — l'Himalaya grandit encore parce que l'Inde pousse contre l'Asie. Quand elles frottent, elles accrochent puis lâchent d'un coup : un séisme." }
          ],
          retenir: "La surface terrestre est un puzzle de plaques qui glissent de quelques cm/an sur le manteau. À leurs frontières se forment montagnes, volcans et séismes selon qu'elles s'écartent, se percutent ou frottent."
        },
        {
          titre: "Volcans et séismes : pourquoi là, et pas ailleurs",
          accroche: "Regarde une carte des volcans et des séismes : ils dessinent des lignes. Ces lignes sont les coutures des plaques.",
          blocs: [
            { t:"Un séisme, c'est la libération brutale de tensions accumulées : deux plaques restent bloquées par le frottement, la contrainte monte, puis d'un coup ça rompt et le sol tremble. La fameuse \"ceinture de feu\" autour du Pacifique aligne la grande majorité des séismes et volcans du globe." },
            { t:"Un volcan, c'est une remontée de roche fondue (magma) vers la surface, surtout là où une plaque plonge sous une autre et fond en profondeur. Quelques volcans font exception, au milieu des plaques (\"points chauds\", comme Hawaï), au-dessus d'un panache de chaleur venu du manteau profond." }
          ],
          retenir: "Séismes et volcans se concentrent aux frontières de plaques : les séismes viennent de la rupture brutale entre plaques bloquées, les volcans de la remontée de magma. La \"ceinture de feu\" du Pacifique en est la vitrine."
        },
        {
          titre: "L'effet de serre : pourquoi la Terre est habitable",
          accroche: "Sans effet de serre, la Terre serait un caillou gelé à -18 °C. Le problème n'est pas l'effet de serre : c'est de l'augmenter trop vite.",
          blocs: [
            { t:"Le Soleil chauffe le sol, qui renvoie de la chaleur vers l'espace. Certains gaz de l'atmosphère (vapeur d'eau, CO₂, méthane) interceptent une partie de cette chaleur sortante et la renvoient vers le sol, comme une couverture. Grâce à eux, la température moyenne est d'agréables +15 °C au lieu de -18 °C." },
            { t:"En brûlant charbon, pétrole et gaz, on ajoute du CO₂ : la couverture s'épaissit, et la Terre retient un peu plus de chaleur. L'effet est lent mais cumulatif. Tout l'enjeu du climat tient dans ce déséquilibre entre la chaleur reçue et la chaleur qu'on laisse repartir." }
          ],
          retenir: "L'effet de serre naturel garde la Terre habitable (+15 °C au lieu de -18 °C). Ajouter du CO₂ épaissit la \"couverture\" et fait retenir plus de chaleur : c'est le moteur du réchauffement."
        },
        {
          titre: "Le cycle de l'eau : une même eau, en boucle",
          accroche: "L'eau que tu bois est peut-être passée par un dinosaure. Il n'y a pas d'eau \"neuve\" : la même tourne en boucle depuis des milliards d'années.",
          blocs: [
            { t:"Le Soleil évapore l'eau des océans ; la vapeur monte, refroidit en altitude et se condense en nuages ; il pleut ou il neige ; l'eau ruisselle vers les rivières et retourne à la mer, ou s'infiltre dans les nappes souterraines. Puis ça recommence, indéfiniment." },
            { t:"Ce cycle redistribue l'eau douce sur les continents (toute la pluie vient de là) et transporte d'énormes quantités de chaleur, ce qui régule le climat. La quantité totale d'eau sur Terre, elle, ne change quasiment pas : on ne fait que la recycler." }
          ],
          retenir: "Le cycle de l'eau (évaporation → nuages → pluie → rivières → mer) recycle sans cesse une même réserve d'eau, alimente toute l'eau douce et transporte de la chaleur qui régule le climat."
        },
        {
          titre: "L'atmosphère : la fine pellicule qui nous garde en vie",
          accroche: "Si la Terre était une pomme, l'atmosphère serait plus fine que sa peau. Tout ce qui nous protège tient dans cette mince couche de gaz.",
          blocs: [
            { t:"L'atmosphère est un mélange de gaz (surtout azote ~78 % et oxygène ~21 %) retenu par la gravité. Elle nous fournit l'oxygène, filtre les rayonnements dangereux du Soleil, désintègre la plupart des météorites, et sa couverture d'effet de serre garde la Terre tempérée." },
            { t:"Elle est étonnamment mince : l'essentiel tient dans les ~10 premiers kilomètres, alors que la Terre a un rayon de 6 400 km. Dès une dizaine de km d'altitude, l'air est déjà trop rare pour respirer. Cette finesse explique pourquoi nos rejets de gaz peuvent en modifier l'équilibre." }
          ],
          retenir: "L'atmosphère est une fine couche de gaz (azote + oxygène) retenue par la gravité : elle donne l'air, filtre les rayons dangereux et régule la température. Fine et fragile, d'où sa sensibilité à nos émissions."
        },
        {
          titre: "Climat et météo : ne pas confondre",
          accroche: "\"Il fait froid aujourd'hui, où est le réchauffement ?\" — la question confond deux choses d'échelles totalement différentes.",
          blocs: [
            { t:"La météo, c'est le temps qu'il fait à un endroit, un jour donné : pluie, soleil, température du moment. Elle est chaotique et imprévisible au-delà de quelques jours. Le climat, c'est la moyenne de cette météo sur des décennies et sur de vastes régions." },
            { t:"Un jour froid ne dit rien du climat, comme un mauvais repas ne dit rien de ton alimentation de l'année. Le réchauffement parle de tendances longues (la moyenne mondiale qui monte), pas du temps de demain. On peut avoir une vague de froid locale dans un monde qui se réchauffe globalement." }
          ],
          retenir: "Météo = le temps qu'il fait maintenant, ici (chaotique, court terme). Climat = la moyenne sur des décennies et de grandes régions. Un jour froid ne contredit pas une tendance climatique, comme un repas ne définit pas une alimentation."
        }
      ],
      quotidien: [
        {
          titre: "Séisme : les bons réflexes",
          danger: true,
          texte: "Pendant la secousse, on ne court pas dehors (chutes d'objets, façades) : on se baisse, on s'abrite sous une table solide et on s'éloigne des fenêtres et des meubles hauts. Après la secousse principale, sortir calmement car des répliques peuvent suivre. La plupart des blessures viennent d'objets qui tombent, pas de l'effondrement."
        },
        {
          titre: "Tsunami : si la mer se retire, fuis vers les hauteurs",
          danger: true,
          texte: "Un retrait brutal et anormal de la mer, ou un séisme ressenti en bord de côte, peut annoncer un tsunami quelques minutes plus tard. Le bon réflexe : ne pas rester à regarder, s'éloigner de la côte et gagner un point haut immédiatement. La vague n'est pas un rouleau de surf mais une montée massive et rapide de l'eau."
        },
        {
          titre: "Le sol garde la chaleur : la géothermie",
          texte: "À quelques mètres sous terre, la température reste stable toute l'année (~12-14 °C en France). C'est pourquoi une cave est fraîche l'été et hors gel l'hiver, et c'est ce que des pompes à chaleur géothermiques exploitent pour chauffer une maison à moindre coût."
        },
        {
          titre: "Les UV : se protéger d'une étoile",
          danger: true,
          texte: "Le Soleil émet des ultraviolets (UV) que l'atmosphère ne filtre qu'en partie. À forte dose ils brûlent la peau (coups de soleil) et, à long terme, provoquent vieillissement et cancers cutanés. On se protège aux heures les plus fortes (midi), à l'ombre, avec vêtements, lunettes et crème solaire — d'autant que les UV traversent les nuages et se réfléchissent sur l'eau et la neige."
        }
      ],
      exos: [
        {
          q: "Comment connaît-on la structure interne de la Terre, sans y descendre ?",
          choix: ["En creusant jusqu'au noyau", "Grâce aux ondes des séismes qui la traversent", "Grâce aux satellites", "On ne la connaît pas vraiment"],
          bonne: 1,
          explication: "Les ondes sismiques changent de vitesse et de direction selon les couches traversées : en les analysant, on \"radiographie\" l'intérieur. On n'a jamais foré au-delà de ~12 km."
        },
        {
          q: "Pourquoi volcans et séismes se concentrent-ils sur certaines lignes du globe ?",
          choix: ["Par hasard", "Ils suivent les frontières entre plaques tectoniques", "Là où il fait le plus chaud", "Là où il y a le plus d'eau"],
          bonne: 1,
          explication: "Ces lignes sont les coutures des plaques : elles s'y percutent, s'y écartent ou s'y frottent, ce qui provoque séismes et volcans (ex. la ceinture de feu du Pacifique)."
        },
        {
          q: "Quel âge a la Terre, environ ?",
          choix: ["6 000 ans", "1 million d'années", "4,5 milliards d'années", "14 milliards d'années"],
          bonne: 2,
          explication: "Environ 4,54 milliards d'années, déterminé par datation radioactive. (14 milliards, c'est l'âge de l'univers.)"
        },
        {
          q: "Sans effet de serre, la température moyenne de la Terre serait…",
          choix: ["La même", "Environ -18 °C (une planète gelée)", "Plus chaude", "Exactement 0 °C"],
          bonne: 1,
          explication: "L'effet de serre naturel nous fait passer de -18 °C à un habitable +15 °C. Le problème actuel, c'est de l'amplifier trop vite en ajoutant du CO₂."
        },
        {
          q: "L'Himalaya continue de grandir. Pourquoi ?",
          choix: ["L'érosion l'agrandit", "La plaque indienne pousse contre la plaque asiatique", "Les volcans l'alimentent", "La fonte des glaces"],
          bonne: 1,
          explication: "Deux plaques qui se percutent se soulèvent en montagnes. L'Inde avance toujours contre l'Asie : l'Himalaya gagne encore quelques millimètres par an."
        },
        {
          q: "L'eau que tu bois aujourd'hui…",
          choix: ["Vient d'être créée", "Est de l'eau recyclée en boucle depuis des milliards d'années", "Ne retournera jamais à la mer", "Disparaît après usage"],
          bonne: 1,
          explication: "Il n'y a pas d'eau \"neuve\" : le cycle de l'eau (évaporation, pluie, rivières, mer) recycle indéfiniment une même réserve."
        },
        {
          q: "En bord de mer, la mer se retire soudainement de façon anormale. Que faire ?",
          choix: ["Aller ramasser des coquillages", "S'éloigner vite de la côte et gagner un point haut (risque de tsunami)", "Attendre de voir", "Se baigner"],
          bonne: 1,
          explication: "Un retrait brutal peut précéder un tsunami de quelques minutes. Il faut immédiatement fuir vers les hauteurs, sans rester observer."
        },
        {
          q: "Le noyau de la Terre est à ~5000 °C mais son centre est solide. Pourquoi ?",
          choix: ["Il fait froid au centre", "L'énorme pression le maintient solide malgré la chaleur", "Il est en glace", "C'est une erreur de mesure"],
          bonne: 1,
          explication: "La pression colossale au centre force les atomes de fer à rester en solide, même à des milliers de degrés. La couche externe du noyau, moins comprimée, est liquide."
        },
        {
          q: "Le trou dans la couche d'ozone est un rare cas de problème planétaire…",
          choix: ["Jamais résolu", "En voie de réparation grâce à l'interdiction mondiale des CFC", "Aggravé chaque année sans espoir", "Inventé de toutes pièces"],
          bonne: 1,
          explication: "Le Protocole de Montréal (1987) a interdit les gaz (CFC) responsables ; la couche se reconstitue lentement. Preuve qu'une action collective peut réparer un dégât mondial."
        },
        {
          q: "Il fait exceptionnellement froid aujourd'hui. Cela contredit-il le réchauffement climatique ?",
          choix: ["Oui, forcément", "Non : la météo est le temps d'un jour, le climat une moyenne sur des décennies", "Oui, le réchauffement est faux", "On ne peut pas savoir"],
          bonne: 1,
          explication: "Météo = temps du moment (chaotique) ; climat = moyenne sur des décennies. Un jour froid ne dit rien de la tendance longue, comme un repas ne définit pas ton alimentation."
        },
        {
          q: "L'atmosphère respirable, comparée à la taille de la Terre, est…",
          choix: ["Aussi épaisse que la Terre", "Une couche très fine (l'essentiel dans les ~10 premiers km)", "Infinie", "Inexistante"],
          bonne: 1,
          explication: "La Terre a un rayon de 6 400 km, mais l'air respirable tient dans une dizaine de km : une pellicule plus fine que la peau d'une pomme, donc fragile."
        },
        {
          q: "À quelle vitesse se déplacent les plaques tectoniques ?",
          choix: ["Plusieurs km par jour", "Quelques centimètres par an (comme la pousse des ongles)", "À la vitesse du son", "Elles ne bougent pas"],
          bonne: 1,
          explication: "Quelques cm/an : imperceptible à notre échelle, mais sur des millions d'années cela déplace des continents et soulève des montagnes."
        }
      ]
    },

    /* ============================ LE CORPS HUMAIN ============================ */
    {
      id: "corps",
      nom: "Le Corps humain",
      emoji: "🫀",
      accent: "#ef6b7d",
      tagline: "La machine que tu habites.",
      decouvertes: [
        {
          titre: "La circulation du sang",
          annee: "1628",
          qui: "William Harvey",
          resume: "Harvey démontre que le cœur est une pompe et que le sang circule en boucle fermée dans le corps, au lieu d'être fabriqué puis consommé comme on le croyait depuis l'Antiquité.",
          pourquoi: "Fondation de la physiologie moderne : le corps devient un système que l'on peut comprendre mécaniquement, mesurer, et un jour réparer."
        },
        {
          titre: "Se laver les mains sauve des vies",
          annee: "1847",
          qui: "Ignace Semmelweis",
          resume: "Dans une maternité, Semmelweis découvre que les médecins qui se désinfectent les mains font chuter drastiquement la mortalité des mères. On se moque de lui à l'époque.",
          pourquoi: "Avant même de connaître les microbes, il établit le geste le plus rentable de toute la médecine. Confirmé ensuite par Pasteur et la théorie des germes."
        },
        {
          titre: "Le neurone",
          annee: "~1890",
          qui: "Santiago Ramón y Cajal",
          resume: "Cajal montre que le cerveau n'est pas un réseau continu mais un assemblage de cellules distinctes, les neurones, qui communiquent en se touchant presque.",
          pourquoi: "Acte de naissance des neurosciences : penser, mémoriser, ressentir deviennent des affaires de cellules et de signaux. Prix Nobel 1906."
        },
        {
          titre: "Les groupes sanguins",
          annee: "1901",
          qui: "Karl Landsteiner",
          resume: "Landsteiner découvre les groupes A, B, AB, O : mélanger des sangs incompatibles provoque une réaction dangereuse.",
          pourquoi: "Rend les transfusions sanguines sûres et possibles. Des millions de vies sauvées en chirurgie, accouchement, accident. Prix Nobel 1930."
        },
        {
          titre: "Le génome humain séquencé",
          annee: "2003",
          qui: "Projet Génome Humain (consortium international)",
          resume: "Lecture complète des ~3 milliards de \"lettres\" de l'ADN humain, réparties dans environ 20 000 gènes.",
          pourquoi: "Une carte de référence du vivant humain, qui accélère la compréhension des maladies génétiques et ouvre la médecine personnalisée."
        },
        {
          titre: "Les rayons X",
          annee: "1895",
          qui: "Wilhelm Röntgen",
          resume: "Röntgen découvre par hasard un rayonnement invisible qui traverse les chairs mais pas les os, et impressionne une plaque photo : la première radiographie.",
          pourquoi: "Pour la première fois, on voit l'intérieur d'un corps vivant sans l'ouvrir. Fondation de l'imagerie médicale (radio, scanner). Tout premier prix Nobel de physique, 1901."
        }
      ],
      notions: [
        {
          titre: "Le cœur : une pompe à deux circuits",
          accroche: "Ton cœur bat ~100 000 fois par jour sans jamais se reposer. Ce n'est qu'une pompe — mais une pompe à deux étages, pour une bonne raison.",
          blocs: [
            { t:"Le sang a deux missions : aller se recharger en oxygène dans les poumons, et distribuer cet oxygène à tout le corps. Le cœur gère les deux avec deux moitiés. La moitié droite envoie le sang \"usé\" (pauvre en oxygène) vers les poumons ; la moitié gauche renvoie le sang \"rechargé\" vers tout l'organisme." },
            { t:"Le sang circule donc en boucle fermée : cœur → poumons → cœur → corps → cœur. Les artères l'éloignent du cœur sous pression (le pouls que tu sens), les veines le ramènent. En moins d'une minute, une goutte fait le tour complet." }
          ],
          retenir: "Le cœur est une double pompe : la droite envoie le sang aux poumons pour l'oxygéner, la gauche l'envoie au reste du corps. Le sang tourne en boucle fermée, artères à l'aller, veines au retour."
        },
        {
          titre: "Le cerveau : de l'électricité et de la chimie",
          accroche: "Tes pensées, tes souvenirs, tes gestes : tout passe par ~86 milliards de neurones qui s'échangent des signaux.",
          blocs: [
            { t:"Un neurone est une cellule avec de longs prolongements. Il transmet un signal électrique le long de lui-même, très vite. Mais entre deux neurones, il y a un minuscule espace, la synapse : là, le signal électrique se convertit en messagers chimiques qui traversent et déclenchent (ou freinent) le neurone suivant." },
            { t:"Apprendre, c'est renforcer certaines connexions entre neurones à force de les utiliser. La mémoire n'est pas rangée à un endroit précis comme un fichier, mais répartie dans des réseaux de connexions. C'est cette plasticité qui te permet de progresser à la guitare ou en langue." }
          ],
          retenir: "Le cerveau fonctionne par signaux : électriques dans chaque neurone, chimiques d'un neurone à l'autre (les synapses). Apprendre = renforcer des connexions. La mémoire est un réseau, pas un tiroir."
        },
        {
          titre: "Respirer et digérer : faire tourner le moteur",
          accroche: "Manger et respirer, ce n'est pas deux corvées sans rapport : c'est le carburant ET le comburant d'un même feu, celui qui fait vivre tes cellules.",
          blocs: [
            { h:"La digestion : casser pour reconstruire", t:"Les aliments sont de grosses molécules inutilisables telles quelles. La digestion les découpe en petites briques (sucres, acides aminés, graisses) assez fines pour passer dans le sang, qui les livre à chaque cellule. Là, elles servent de carburant ou de matériaux de construction." },
            { h:"La respiration : apporter l'oxygène", t:"Pour \"brûler\" ce carburant et en tirer de l'énergie, tes cellules ont besoin d'oxygène — d'où la respiration. En échange, elles rejettent du CO₂, un déchet, que le sang ramène aux poumons pour l'expirer. Manger apporte le carburant, respirer apporte l'oxygène qui le fait brûler." }
          ],
          retenir: "La digestion découpe les aliments en briques que le sang distribue ; la respiration apporte l'oxygène pour les \"brûler\" et en tirer de l'énergie (en rejetant du CO₂). Nourriture + oxygène = énergie des cellules."
        },
        {
          titre: "Les hormones : les messages lents du corps",
          accroche: "À côté du réseau ultra-rapide des nerfs, le corps a un second système de communication, plus lent mais qui touche tout : les hormones.",
          blocs: [
            { t:"Une hormone est un messager chimique libéré dans le sang par une glande, qui va agir à distance sur d'autres organes. Là où le nerf envoie un signal ciblé en un éclair, l'hormone diffuse un message général qui dure." },
            { t:"Exemples parlants : l'adrénaline prépare le corps à l'action en une bouffée (cœur qui s'emballe avant un examen) ; l'insuline commande aux cellules d'absorber le sucre du sang après un repas ; la mélatonine, le soir, donne le signal du sommeil. Un déséquilibre hormonal peut donc bouleverser l'humeur, le poids, l'énergie." }
          ],
          retenir: "Les hormones sont des messagers chimiques diffusés par le sang : action lente mais large (adrénaline, insuline, mélatonine…). Le pendant \"radio\" du système nerveux, qui, lui, est \"télégraphe ciblé\"."
        },
        {
          titre: "À quoi sert le sommeil",
          accroche: "On passe un tiers de sa vie à dormir. Loin d'être du temps perdu, c'est un chantier nocturne indispensable.",
          blocs: [
            { t:"Pendant le sommeil, le cerveau trie et consolide ce qu'on a appris dans la journée : c'est en dormant qu'un apprentissage \"s'imprime\" vraiment. Le corps, lui, répare les tissus, renforce l'immunité et régule les hormones (dont celles de l'appétit)." },
            { t:"Le cerveau profite aussi du sommeil pour évacuer des déchets accumulés en journée. Voilà pourquoi une nuit trop courte dégrade mémoire, concentration, humeur et défenses — et pourquoi \"réviser en dormant assez\" bat souvent \"réviser toute la nuit\"." }
          ],
          retenir: "Le sommeil consolide la mémoire, répare le corps, régule les hormones et nettoie le cerveau. Bien dormir n'est pas du temps perdu : c'est là que l'apprentissage s'imprime et que les défenses se rechargent."
        },
        {
          titre: "Le système immunitaire : ton armée intérieure",
          accroche: "Une armée à deux vitesses veille en toi en permanence : une garde rapide et généraliste, et des troupes d'élite qui apprennent.",
          blocs: [
            { h:"La ligne rapide (innée)", t:"Des cellules patrouillent et attaquent tout intrus de façon générale, en quelques minutes. La fièvre et l'inflammation (rougeur, chaleur, gonflement) font partie de cette riposte : monter la température gêne les microbes et accélère la défense. Un peu de fièvre est souvent un signe que le corps se bat, pas seulement un symptôme à faire taire." },
            { h:"La ligne spécialisée (adaptative)", t:"Plus lente à démarrer, elle fabrique des armes sur mesure contre un microbe précis (les anticorps) et en garde la mémoire. C'est elle qui te rend immunisé après une maladie ou un vaccin : au prochain contact, la riposte est quasi immédiate." }
          ],
          retenir: "Deux défenses : l'innée (rapide, générale, avec fièvre/inflammation) et l'adaptative (lente mais ciblée, fabrique des anticorps sur mesure et les mémorise). Cette mémoire immunitaire est ce qu'exploitent les vaccins."
        },
        {
          titre: "Reins et foie : les stations d'épuration",
          accroche: "Ton sang est nettoyé en continu par deux organes discrets. Sans eux, tu serais empoisonné par tes propres déchets en quelques jours.",
          blocs: [
            { t:"Les reins filtrent le sang en permanence : ils en retirent les déchets et l'excès d'eau et de sel, évacués dans l'urine, tout en gardant ce qui est utile. Ils règlent aussi la quantité d'eau du corps — d'où l'urine plus foncée quand tu es déshydraté (le rein économise l'eau)." },
            { t:"Le foie est l'usine chimique du corps : il neutralise les toxines (dont l'alcool et de nombreux médicaments), stocke des réserves d'énergie et fabrique quantité de molécules indispensables. C'est pour cela qu'un excès d'alcool ou certaines substances l'abîment en premier." }
          ],
          retenir: "Les reins filtrent le sang (déchets → urine) et gèrent l'eau du corps ; le foie neutralise les toxines et fabrique des molécules vitales. Deux stations d'épuration sans lesquelles on s'empoisonnerait vite."
        }
      ],
      quotidien: [
        {
          titre: "Reconnaître un AVC : la règle FAST / VITE",
          danger: true,
          texte: "Devant un visage qui s'affaisse d'un côté, un bras qui ne peut plus se lever, une parole qui devient confuse : c'est peut-être un AVC (accident vasculaire cérébral). Chaque minute compte, des zones du cerveau meurent. Le seul bon geste : appeler les secours (15 ou 112) immédiatement, en notant l'heure d'apparition des signes. Ne pas \"attendre que ça passe\"."
        },
        {
          titre: "Les signes d'une crise cardiaque",
          danger: true,
          texte: "Une douleur ou une oppression au centre de la poitrine, qui peut irradier vers le bras gauche, la mâchoire ou le dos, avec sueurs, nausées ou essoufflement : possible infarctus. On appelle les secours sans attendre. Les signes peuvent être plus discrets (fatigue, gêne) surtout chez les femmes et les diabétiques."
        },
        {
          titre: "Ton corps est surtout de l'eau",
          texte: "Le corps humain est composé d'environ 60 % d'eau. On en perd en permanence (respiration, sueur, urine) et une baisse de seulement 1-2 % suffit à altérer concentration et performance. La soif est un signal déjà tardif : boire régulièrement, sans attendre d'avoir soif, surtout à l'effort ou par forte chaleur."
        },
        {
          titre: "Bouger : le corps est fait pour ça",
          texte: "La position assise prolongée est associée à de nombreux risques pour la santé, même chez les sportifs. Le corps a évolué pour bouger : marcher, se lever régulièrement, monter les escaliers relance la circulation et le métabolisme. Quelques minutes d'activité toutes les heures comptent autant qu'une grosse séance isolée. Le meilleur exercice reste celui qu'on tient dans la durée."
        }
      ],
      exos: [
        {
          q: "Quelle est la fonction du cœur, démontrée par Harvey en 1628 ?",
          choix: ["Fabriquer le sang", "Réchauffer le corps", "Pomper le sang qui circule en boucle fermée", "Filtrer l'air"],
          bonne: 2,
          explication: "Le cœur est une pompe ; le sang circule en boucle (cœur → poumons → cœur → corps). Avant Harvey, on croyait le sang fabriqué puis consommé."
        },
        {
          q: "Entre deux neurones, comment passe le signal ?",
          choix: ["Il saute électriquement sans interruption", "Il se convertit en messagers chimiques au niveau de la synapse", "Par magnétisme", "Il ne passe pas"],
          bonne: 1,
          explication: "Le signal est électrique DANS le neurone, mais chimique ENTRE deux neurones : des messagers traversent la synapse et activent (ou freinent) le neurone suivant."
        },
        {
          q: "Pourquoi tes cellules ont-elles besoin d'oxygène ?",
          choix: ["Pour se refroidir", "Pour \"brûler\" les nutriments et en tirer de l'énergie", "Pour se gonfler", "Elles n'en ont pas besoin"],
          bonne: 1,
          explication: "L'oxygène permet de \"brûler\" le carburant (sucres…) apporté par la digestion, libérant l'énergie des cellules. Le déchet, le CO₂, est expiré."
        },
        {
          q: "Le visage d'un proche s'affaisse d'un côté et sa parole devient confuse. Que faire ?",
          choix: ["Le faire s'allonger et attendre", "Lui donner à boire", "Appeler les secours immédiatement (signes d'AVC)", "Lui donner un médicament"],
          bonne: 2,
          explication: "Ce sont des signes d'AVC : chaque minute, des neurones meurent. On appelle le 15/112 tout de suite en notant l'heure d'apparition des symptômes."
        },
        {
          q: "Quel est le rôle de l'insuline ?",
          choix: ["Accélérer le cœur", "Faire absorber par les cellules le sucre présent dans le sang", "Déclencher le sommeil", "Digérer les graisses"],
          bonne: 1,
          explication: "L'insuline, hormone libérée après un repas, commande aux cellules de capter le sucre du sang. Son défaut ou son inefficacité, c'est le diabète."
        },
        {
          q: "Pourquoi bien dormir aide-t-il à apprendre ?",
          choix: ["Ça ne change rien", "Le cerveau consolide la mémoire pendant le sommeil", "On révise dans les rêves", "Ça repose seulement les yeux"],
          bonne: 1,
          explication: "Pendant le sommeil, le cerveau trie et fixe ce qui a été appris. Une nuit suffisante bat souvent une nuit blanche de révision."
        },
        {
          q: "Le corps humain est composé d'environ…",
          choix: ["10 % d'eau", "30 % d'eau", "60 % d'eau", "90 % d'eau"],
          bonne: 2,
          explication: "Environ 60 %. Une perte de seulement 1-2 % altère déjà la concentration : mieux vaut boire avant d'avoir soif, signal déjà tardif."
        },
        {
          q: "Pourquoi les groupes sanguins (A, B, AB, O) sont-ils importants ?",
          choix: ["Ils déterminent la personnalité", "Mélanger des sangs incompatibles lors d'une transfusion est dangereux", "Ils changent la couleur du sang", "Ils n'ont aucune importance"],
          bonne: 1,
          explication: "Une transfusion incompatible déclenche une réaction grave. La découverte des groupes (Landsteiner, 1901) a rendu les transfusions sûres."
        },
        {
          q: "Grâce à quelle découverte peut-on voir les os sans ouvrir le corps ?",
          choix: ["L'échographie", "Les rayons X (Röntgen, 1895)", "Le microscope", "La prise de sang"],
          bonne: 1,
          explication: "Les rayons X traversent les chairs mais pas les os : la radiographie, première façon de voir l'intérieur d'un corps vivant sans l'ouvrir."
        },
        {
          q: "Avoir un peu de fièvre pendant une infection, c'est…",
          choix: ["Toujours dangereux, à supprimer d'urgence", "Souvent un signe que le corps se défend (elle gêne les microbes)", "Sans rapport avec l'infection", "Le signe que la guérison est finie"],
          bonne: 1,
          explication: "La fièvre fait partie de la riposte immunitaire innée : elle gêne les microbes et accélère la défense. Utile en soi, même s'il faut surveiller si elle est forte ou prolongée."
        },
        {
          q: "Pourquoi ton urine devient-elle plus foncée quand tu es déshydraté ?",
          choix: ["Les reins ajoutent un colorant", "Les reins économisent l'eau : l'urine est plus concentrée", "C'est le foie qui la teinte", "C'est mauvais signe pour le cœur"],
          bonne: 1,
          explication: "En manque d'eau, les reins en gardent le maximum : l'urine est plus concentrée, donc plus foncée. Un bon indicateur d'hydratation."
        },
        {
          q: "Pourquoi n'attrape-t-on en général qu'une seule fois certaines maladies (ex. varicelle) ?",
          choix: ["Le corps s'y habitue au hasard", "Le système immunitaire en garde la mémoire et riposte vite au retour", "Le microbe disparaît de la Terre", "C'est faux, on les rattrape toujours"],
          bonne: 1,
          explication: "L'immunité adaptative fabrique des armes sur mesure et les mémorise. C'est ce mécanisme de mémoire que les vaccins déclenchent, sans la maladie."
        }
      ]
    },

    /* ============================ LES MATHÉMATIQUES ============================ */
    {
      id: "maths",
      nom: "Les Mathématiques",
      emoji: "🧮",
      accent: "#6c8cff",
      tagline: "Le langage caché du réel.",
      decouvertes: [
        {
          titre: "Le théorème de Pythagore",
          annee: "~530 av. J.-C.",
          qui: "École de Pythagore (connu bien avant en Babylonie)",
          resume: "Dans un triangle rectangle, le carré du grand côté égale la somme des carrés des deux autres (a² + b² = c²).",
          pourquoi: "Une relation exacte et universelle entre des longueurs. Base de la géométrie, de l'arpentage, de la navigation, et aujourd'hui du calcul de distances dans un GPS ou un jeu vidéo."
        },
        {
          titre: "L'invention du zéro",
          annee: "~5e-7e siècle",
          qui: "Mathématiciens indiens (Brahmagupta)",
          resume: "Le zéro devient un nombre à part entière, et la numération de position (où la place du chiffre compte) permet d'écrire tous les nombres avec dix symboles.",
          pourquoi: "Sans le zéro, pas de calcul efficace, pas d'algèbre, pas d'informatique. Une des inventions les plus sous-estimées de l'histoire humaine."
        },
        {
          titre: "Le calcul des probabilités",
          annee: "1654",
          qui: "Blaise Pascal & Pierre de Fermat",
          resume: "En résolvant un problème de jeu d'argent, Pascal et Fermat posent les bases d'une science du hasard : on peut chiffrer l'incertain.",
          pourquoi: "Mesurer le risque transforme l'assurance, la finance, la médecine, la physique. Le hasard cesse d'être un mystère pour devenir un calcul."
        },
        {
          titre: "Le calcul infinitésimal",
          annee: "~1670",
          qui: "Isaac Newton & Gottfried Leibniz",
          resume: "Un outil pour décrire le changement instantané : vitesse, pente, accumulation. On apprend à manier l'infiniment petit.",
          pourquoi: "C'est le langage de toute la physique (mouvement, forces, ondes) et de l'ingénierie. Sans lui, ni fusées, ni ponts calculés, ni prévisions."
        },
        {
          titre: "Les infinis de Cantor",
          annee: "~1874",
          qui: "Georg Cantor",
          resume: "Cantor prouve qu'il existe plusieurs \"tailles\" d'infini : l'infini des nombres entiers est strictement plus petit que celui des points d'une droite.",
          pourquoi: "Vertigineux et fondateur : il donne aux mathématiques des fondations solides sur l'infini, longtemps tabou. On peut comparer ce qui n'a pas de fin."
        },
        {
          titre: "Les logarithmes",
          annee: "1614",
          qui: "John Napier",
          resume: "Napier invente une opération qui transforme les multiplications en additions, simplifiant énormément les calculs à une époque sans machine.",
          pourquoi: "Au-delà du calcul, le logarithme est l'outil pour manier les grandeurs qui varient sur d'énormes échelles : l'échelle de Richter (séismes), les décibels (son) et le pH (acidité) sont tous logarithmiques."
        }
      ],
      notions: [
        {
          titre: "Pourquoi les maths \"marchent\" dans le monde réel",
          accroche: "Étrange, non ? Des symboles inventés dans une tête prédisent la trajectoire d'une planète ou la portance d'une aile. Pourquoi ça colle si bien ?",
          blocs: [
            { t:"Les mathématiques ne sont pas une description directe du monde : ce sont des règles logiques appliquées à des idées abstraites (nombres, formes, relations). Leur force est d'être exactes et sans exception : si les prémisses sont vraies, la conclusion l'est forcément." },
            { t:"Quand une structure mathématique reflète bien la structure d'un phénomène réel (la géométrie pour l'espace, les équations pour le mouvement), on peut \"calculer le monde\" au lieu de l'observer à tâtons. On teste ensuite si la prédiction colle. C'est cette efficacité, presque déroutante, qui fait des maths le langage naturel de la science." }
          ],
          retenir: "Les maths sont un système de règles logiques exactes sur des idées abstraites. Quand une de ces structures épouse un phénomène réel, on peut le prédire par le calcul. C'est ce qui en fait le langage de la science."
        },
        {
          titre: "La croissance exponentielle : l'intuition qui nous piège",
          accroche: "Plie une feuille de papier 42 fois : son épaisseur atteindrait la Lune. Notre cerveau pense en ligne droite, mais le monde, souvent, double.",
          blocs: [
            { t:"Une croissance exponentielle, c'est quand une quantité est multipliée (et non augmentée) à chaque étape : elle double, puis re-double, puis encore. Au début ça paraît lent et anodin, puis ça explose brutalement. Le grain de riz doublé sur chaque case d'un échiquier finit en montagnes de riz impossibles." },
            { t:"On la retrouve partout : une épidémie qui double tous les 3 jours, un placement à intérêts composés, la puissance des puces (loi de Moore), un buzz sur les réseaux. La leçon : sous-estimer l'exponentielle, c'est se faire surprendre par la phase où \"tout s'emballe d'un coup\"." }
          ],
          retenir: "Exponentiel = multiplié à chaque étape (ça double), pas augmenté d'un pas fixe. Trompeusement lent au début, foudroyant ensuite. Épidémies, intérêts composés, réseaux : notre intuition linéaire s'y casse les dents."
        },
        {
          titre: "Les nombres premiers : les briques des nombres",
          accroche: "Certains nombres ne se divisent par rien d'autre qu'eux-mêmes et 1. Ils sont les \"atomes\" à partir desquels tous les autres se construisent — et ils protègent tes mots de passe.",
          blocs: [
            { t:"Un nombre premier (2, 3, 5, 7, 11, 13…) n'a aucun diviseur à part 1 et lui-même. Tout autre nombre entier se décompose de façon unique en produit de premiers (12 = 2×2×3). Ils sont en nombre infini, et se raréfient sans jamais s'arrêter." },
            { t:"Fait remarquable : multiplier deux grands nombres premiers est facile, mais retrouver ces deux facteurs à partir du résultat est extraordinairement long, même pour un ordinateur. Toute la cryptographie qui sécurise Internet (paiements, messages) repose sur cette asymétrie." }
          ],
          retenir: "Les nombres premiers (divisibles seulement par 1 et eux-mêmes) sont les briques uniques de tous les entiers. Multiplier deux grands premiers est facile, l'opération inverse quasi impossible : c'est le secret du chiffrement d'Internet."
        },
        {
          titre: "Le hasard et la loi des grands nombres",
          accroche: "Une pièce n'a pas de mémoire : après dix \"face\", le prochain lancer reste à 50/50. Pourtant, sur des millions de lancers, l'ordre émerge du désordre.",
          blocs: [
            { h:"L'illusion du joueur", t:"Chaque lancer est indépendant : la pièce ne \"doit\" rien rattraper. Croire qu'après une série de rouges à la roulette le noir est \"dû\" est une erreur classique. Le passé ne change pas la probabilité du prochain coup." },
            { h:"L'ordre à grande échelle", t:"Mais plus on répète une expérience, plus la proportion de résultats se rapproche de la probabilité théorique : c'est la loi des grands nombres. C'est pourquoi un casino ou un assureur, qui jouent des millions de fois, gagnent à coup sûr sur la masse, même s'ils perdent parfois un coup." }
          ],
          retenir: "Chaque événement au hasard est indépendant (la pièce n'a pas de mémoire), mais sur un très grand nombre d'essais, les proportions convergent vers la probabilité théorique. L'imprévisible individuel devient prévisible en masse."
        },
        {
          titre: "Pi et les nombres qui ne s'arrêtent jamais",
          accroche: "Le rapport entre le tour d'un cercle et son diamètre vaut 3,14159… et ces décimales ne s'arrêtent jamais, ni ne se répètent. Étrange qu'une chose aussi simple qu'un cercle cache un nombre infini.",
          blocs: [
            { t:"Pi (π) est le même pour tous les cercles de l'univers : périmètre = π × diamètre. Mais c'est un nombre \"irrationnel\" : impossible de l'écrire comme une fraction exacte, et ses décimales défilent à l'infini sans motif. On en connaît des milliers de milliards, sans jamais toucher le \"bout\"." },
            { t:"Ce n'est pas un cas isolé : la plupart des nombres sont irrationnels (comme la racine de 2). Cela révèle que même la géométrie la plus élémentaire contient de l'infini, et que nos écritures décimales ne \"contiennent\" pas tous les nombres." }
          ],
          retenir: "π (≈3,14159…) relie le tour d'un cercle à son diamètre, identique pour tout cercle. C'est un nombre irrationnel : décimales infinies, sans fraction exacte ni motif. La simplicité d'un cercle cache de l'infini."
        },
        {
          titre: "Les logarithmes : dompter les nombres géants",
          accroche: "Comment mettre sur une même échelle un chuchotement et un réacteur d'avion, ou un séisme minuscule et un cataclysme ? En comptant les zéros plutôt que les nombres.",
          blocs: [
            { t:"Un logarithme répond à la question : \"combien de fois faut-il multiplier par 10 pour atteindre ce nombre ?\". 100 = 10×10, son logarithme vaut 2 ; 1000 = 10×10×10, il vaut 3. On remplace des nombres énormes par leur \"nombre de zéros\", bien plus maniable." },
            { t:"C'est pourquoi les grandeurs de la nature qui s'étalent sur d'immenses plages utilisent des échelles logarithmiques. Sur l'échelle de Richter, un séisme de magnitude 7 libère ~30 fois plus d'énergie qu'un magnitude 6, et ~1000 fois plus qu'un magnitude 5. Un petit chiffre en plus cache une énorme différence réelle. Idem pour les décibels et le pH." }
          ],
          retenir: "Un logarithme compte les facteurs de 10 (les \"zéros\") d'un nombre : il écrase des échelles gigantesques en petits chiffres maniables (Richter, décibels, pH). Attention : +1 sur ces échelles = ×10 (ou plus) dans la réalité."
        },
        {
          titre: "Moyenne ou médiane ? Le piège des statistiques",
          accroche: "Dix personnes dans un bar gagnent 2 000 € par mois. Un milliardaire entre. Le salaire \"moyen\" grimpe à des millions — alors que personne n'est plus riche. La moyenne peut mentir.",
          blocs: [
            { t:"La moyenne additionne tout et divise par le nombre : une seule valeur extrême la tire brutalement. La médiane, elle, est la valeur \"du milieu\" (la moitié en dessous, la moitié au-dessus) : le milliardaire ne la bouge presque pas." },
            { t:"Selon le message qu'on veut faire passer, on cite l'une ou l'autre — d'où l'importance de savoir laquelle. Pour des revenus, des prix immobiliers ou des temps d'attente très inégaux, la médiane décrit bien mieux \"les gens ordinaires\" que la moyenne." }
          ],
          retenir: "La moyenne est tirée par les valeurs extrêmes ; la médiane (la valeur du milieu) y résiste. Pour des données très inégales (salaires, prix), la médiane est plus honnête. Toujours se demander laquelle est citée."
        }
      ],
      quotidien: [
        {
          titre: "Les intérêts composés : l'exponentielle à ton service (ou contre toi)",
          texte: "Placer de l'argent qui rapporte des intérêts, lesquels rapportent à leur tour, c'est une croissance exponentielle. À 7 % par an, une somme double environ tous les 10 ans. À l'inverse, un crédit renouvelable à fort taux gonfle de la même façon contre toi. Comprendre l'exponentielle, c'est comprendre pourquoi commencer tôt change tout."
        },
        {
          titre: "Le piège des pourcentages",
          texte: "Une hausse de 50 % suivie d'une baisse de 50 % ne te ramène PAS au point de départ : 100 € → 150 € → 75 €. Les pourcentages se multiplient, ils ne s'additionnent pas. Ce piège se cache dans les soldes, les variations de salaire ou de Bourse."
        },
        {
          titre: "Probabilités : pourquoi tu ne gagnes pas au loto",
          texte: "À la loterie, chaque grille est indépendante et la probabilité de gagner le gros lot est de l'ordre de 1 sur des dizaines de millions. Jouer les mêmes numéros \"parce qu'ils vont finir par sortir\" ne change rien : le tirage n'a pas de mémoire. La seule certitude mathématique, c'est que l'organisateur gagne sur la masse (loi des grands nombres)."
        },
        {
          titre: "Lire un chiffre dans les médias",
          texte: "\"+100 % de risque\" fait peur, mais passer de 1 cas sur un million à 2 sur un million reste minuscule : un pourcentage n'a de sens qu'avec sa valeur de départ (le risque absolu). De même, une \"hausse moyenne des salaires\" peut cacher que la plupart des gens n'ont rien gagné (voir moyenne vs médiane). Devant un chiffre, demande-toi toujours : par rapport à quoi ? moyenne ou médiane ? sur quel échantillon ?"
        }
      ],
      exos: [
        {
          q: "Que dit le théorème de Pythagore ?",
          choix: ["a + b = c", "a² + b² = c² dans un triangle rectangle", "Tout nombre est premier", "π = 3"],
          bonne: 1,
          explication: "Dans un triangle rectangle, le carré de l'hypoténuse égale la somme des carrés des deux autres côtés. Base du calcul de distances, jusque dans un GPS."
        },
        {
          q: "Tu pars de 100 €. +50 %, puis -50 %. Combien te reste-t-il ?",
          choix: ["100 €", "75 €", "50 €", "125 €"],
          bonne: 1,
          explication: "100 → 150 (+50 %) → 75 (-50 % de 150). Les pourcentages se multiplient, ils ne s'annulent pas. Piège classique."
        },
        {
          q: "Une rumeur double de partages toutes les heures. C'est une croissance…",
          choix: ["Linéaire", "Exponentielle", "Nulle", "Décroissante"],
          bonne: 1,
          explication: "Multipliée (×2) à chaque étape : c'est exponentiel. Lent au début, puis explosif — notre intuition linéaire le sous-estime toujours."
        },
        {
          q: "Sur quoi repose le chiffrement qui sécurise Internet ?",
          choix: ["Le théorème de Pythagore", "La difficulté de retrouver deux grands nombres premiers à partir de leur produit", "Le nombre π", "Le hasard pur"],
          bonne: 1,
          explication: "Multiplier deux grands premiers est facile ; faire l'inverse (factoriser) est quasi impossible en un temps raisonnable. Cette asymétrie protège paiements et messages."
        },
        {
          q: "À la roulette, le rouge est sorti 6 fois de suite. Au prochain tour, le noir est…",
          choix: ["Plus probable, il est \"dû\"", "Ni plus ni moins probable : chaque tour est indépendant", "Certain", "Impossible"],
          bonne: 1,
          explication: "La roulette n'a pas de mémoire. Croire qu'un résultat est \"dû\" est l'illusion du joueur. Chaque tour repart à la même probabilité."
        },
        {
          q: "Un nombre premier, c'est un nombre…",
          choix: ["Toujours pair", "Divisible seulement par 1 et par lui-même", "Plus grand que 100", "Qui finit par 1"],
          bonne: 1,
          explication: "2, 3, 5, 7, 11… n'ont pas d'autre diviseur que 1 et eux-mêmes. Ce sont les \"briques\" à partir desquelles se construisent tous les entiers."
        },
        {
          q: "Pourquoi l'invention du zéro fut-elle si importante ?",
          choix: ["Pour compter les moutons", "Elle permet la numération de position et un calcul efficace", "Pour mesurer les angles", "Elle ne l'était pas"],
          bonne: 1,
          explication: "Avec le zéro et la position des chiffres, on écrit tous les nombres avec dix symboles et on calcule efficacement. Sans lui, pas d'algèbre ni d'informatique."
        },
        {
          q: "π (pi) est un nombre dont les décimales…",
          choix: ["S'arrêtent à 3,14", "Se répètent en boucle", "Défilent à l'infini sans motif régulier", "Sont toutes des 3"],
          bonne: 2,
          explication: "π est irrationnel : décimales infinies, sans période. La simplicité d'un cercle (périmètre = π × diamètre) cache pourtant de l'infini."
        },
        {
          q: "Sur l'échelle de Richter, un séisme de magnitude 7 par rapport à un magnitude 6 libère…",
          choix: ["Un peu plus d'énergie", "Environ 30 fois plus d'énergie", "Exactement 2 fois plus", "La même chose"],
          bonne: 1,
          explication: "L'échelle est logarithmique : +1 en magnitude ≈ ×30 en énergie. Un petit chiffre en plus cache une différence énorme."
        },
        {
          q: "Dans un bar, 10 personnes gagnent 2000 €. Un milliardaire entre. Qu'est-ce qui décrit le mieux \"les gens ordinaires\" ?",
          choix: ["La moyenne", "La médiane", "Les deux, pareil", "Aucune des deux"],
          bonne: 1,
          explication: "La moyenne explose à cause du milliardaire ; la médiane (valeur du milieu) reste ~2000 €. Pour des données très inégales, la médiane est plus honnête."
        },
        {
          q: "Le logarithme (base 10) de 1000, c'est…",
          choix: ["10", "3", "100", "1000"],
          bonne: 1,
          explication: "1000 = 10×10×10, soit trois facteurs de 10 : son logarithme vaut 3. Le log compte les \"zéros\"."
        },
        {
          q: "\"Ce comportement double votre risque.\" Est-ce forcément alarmant ?",
          choix: ["Oui, toujours", "Pas forcément : doubler un risque minuscule reste minuscule (il faut le risque de départ)", "Non, jamais", "Ça veut dire 100 % de chances"],
          bonne: 1,
          explication: "Passer de 1 sur un million à 2 sur un million, c'est +100 % mais reste infime. Un pourcentage n'a de sens qu'avec sa valeur absolue de départ."
        }
      ]
    },

    /* ============================ LE NUMÉRIQUE ============================ */
    {
      id: "numerique",
      nom: "Le Numérique",
      emoji: "💻",
      accent: "#b07bff",
      tagline: "Comment les machines pensent.",
      decouvertes: [
        {
          titre: "La machine de Turing",
          annee: "1936",
          qui: "Alan Turing",
          resume: "Turing imagine une machine abstraite qui lit et écrit des symboles selon des règles simples, et démontre qu'elle peut effectuer n'importe quel calcul faisable.",
          pourquoi: "Définition même de ce qu'est \"calculer\". Tous nos ordinateurs, si différents soient-ils, sont équivalents à cette machine. Fondement théorique de l'informatique."
        },
        {
          titre: "La théorie de l'information",
          annee: "1948",
          qui: "Claude Shannon",
          resume: "Shannon invente le \"bit\", unité de base de l'information, et montre comment transmettre un message de façon fiable malgré le bruit, et jusqu'à quel point on peut le compresser.",
          pourquoi: "Le socle des télécommunications, de la compression (photos, musique), du stockage et d'Internet. Il transforme l'information en une grandeur que l'on mesure et manipule."
        },
        {
          titre: "Le paquet et le réseau",
          annee: "1969-1974",
          qui: "ARPANET, puis Vinton Cerf & Robert Kahn",
          resume: "Plutôt que d'ouvrir une ligne dédiée, on découpe l'information en petits \"paquets\" qui voyagent indépendamment et se recomposent à l'arrivée. Le protocole TCP/IP normalise l'ensemble.",
          pourquoi: "C'est ce qui rend Internet robuste : si un chemin est coupé, les paquets passent par un autre. L'architecture de tout le réseau mondial."
        },
        {
          titre: "Le Web",
          annee: "1989",
          qui: "Tim Berners-Lee",
          resume: "Au CERN, Berners-Lee invente les pages liées entre elles par des hyperliens, les adresses (URL) et le navigateur : le World Wide Web.",
          pourquoi: "Il rend Internet utilisable par tous et relie l'information du monde en un seul espace navigable. À ne pas confondre avec Internet (le réseau) : le Web est ce qui tourne dessus."
        },
        {
          titre: "L'apprentissage profond",
          annee: "2012",
          qui: "Geoffrey Hinton et son équipe (AlexNet)",
          resume: "Des réseaux de neurones artificiels à plusieurs couches, entraînés sur d'énormes quantités d'exemples, se mettent à reconnaître images et sons mieux que tout ce qu'on savait programmer à la main.",
          pourquoi: "Le déclencheur de l'IA moderne (reconnaissance d'images, traduction, assistants, IA générative). Un changement de méthode : on n'écrit plus les règles, la machine les apprend."
        },
        {
          titre: "Les langages de programmation",
          annee: "années 1950",
          qui: "Grace Hopper (compilateur, puis COBOL)",
          resume: "Hopper crée le premier \"compilateur\", un programme qui traduit des instructions écrites dans un langage proche de l'humain en langage machine (des 0 et des 1).",
          pourquoi: "Plus besoin d'écrire directement en binaire : programmer devient accessible. Tous les langages actuels (Python, etc.) descendent de cette idée. Hopper a aussi popularisé le mot \"bug\"."
        }
      ],
      notions: [
        {
          titre: "Comment un ordinateur \"pense\" : 0, 1 et logique",
          accroche: "Un ordinateur ne comprend rien. Il ne fait qu'enchaîner, à une vitesse folle, des opérations idiotes sur des 0 et des 1. Toute sa \"pensée\" naît de là.",
          blocs: [
            { t:"Tout, dans une machine, est codé en 0 et 1 (des interrupteurs ouverts/fermés). Sur ces bits, l'ordinateur applique des opérations logiques élémentaires : ET (vrai seulement si les deux entrées le sont), OU, NON. Ces \"portes logiques\" sont de simples arrangements de transistors." },
            { t:"En combinant des millions de ces portes, on sait additionner, comparer, choisir, mémoriser. Un programme n'est qu'une longue recette : \"fais ceci, si telle condition alors cela, répète tant que…\". L'intelligence apparente vient de l'accumulation vertigineuse d'opérations triviales, des milliards par seconde." }
          ],
          retenir: "Un ordinateur manipule des 0/1 avec des opérations logiques de base (ET, OU, NON) faites de transistors. Un programme est une recette d'étapes. La \"pensée\" n'est qu'un empilement colossal d'opérations simples, très vite."
        },
        {
          titre: "Un algorithme, c'est quoi au juste",
          accroche: "Le mot fait savant, mais tu en exécutes tous les jours : une recette de cuisine est un algorithme.",
          blocs: [
            { t:"Un algorithme est une suite finie d'instructions précises pour résoudre un problème, étape par étape, sans ambiguïté. \"Pour trouver un mot dans le dictionnaire : ouvre au milieu, si le mot est avant va à gauche sinon à droite, recommence.\" C'est un algorithme de recherche, redoutablement efficace." },
            { t:"La qualité d'un algorithme se mesure surtout à sa rapidité quand les données grandissent. Chercher un nom dans un annuaire trié en coupant en deux à chaque fois (dichotomie) trouve la bonne page en une vingtaine d'essais parmi un million de noms, là où une recherche page par page en demanderait des milliers. Bien choisir l'algorithme change tout." }
          ],
          retenir: "Un algorithme = une suite d'étapes précises et non ambiguës pour résoudre un problème (comme une recette). Son intérêt tient à son efficacité quand les données grossissent : le bon algorithme fait le travail en quelques étapes plutôt que des millions."
        },
        {
          titre: "Comment marche Internet : tout voyage en morceaux",
          accroche: "Quand tu envoies un message, il ne part pas d'un bloc par un tuyau qui te relierait au destinataire. Il est découpé, éclaté, puis rassemblé.",
          blocs: [
            { t:"Ton message est découpé en petits paquets. Chacun reçoit une adresse (l'adresse IP du destinataire) et part de son côté, sautant de routeur en routeur, chacun choisissant la meilleure direction du moment. Les paquets peuvent emprunter des chemins différents et arriver dans le désordre : ils sont renumérotés et recomposés à l'arrivée." },
            { t:"Cette idée de \"paquets indépendants\" rend le réseau très robuste : si un câble est coupé, les paquets contournent par ailleurs. Internet, c'est le réseau qui achemine ces paquets ; le Web, les mails, les vidéos sont des services qui circulent dessus." }
          ],
          retenir: "Internet découpe toute information en paquets adressés qui voyagent indépendamment, par des chemins variables, et se recomposent à l'arrivée. D'où sa robustesse. Internet = le réseau ; le Web n'est qu'un service qui l'utilise."
        },
        {
          titre: "Le chiffrement : comment un secret reste secret",
          accroche: "Tes paquets traversent des dizaines de machines inconnues. Pourquoi personne ne peut lire ton mot de passe ou ton numéro de carte au passage ?",
          blocs: [
            { t:"On brouille le message avec une \"clé\" : sans elle, le texte intercepté n'est qu'une bouillie illisible. Le problème historique : comment se mettre d'accord sur une clé secrète avec quelqu'un qu'on n'a jamais rencontré, sur un réseau public ?" },
            { t:"Solution géniale (clé publique) : chacun a deux clés liées, une publique (un cadenas ouvert qu'on distribue à tous) et une privée (la seule qui referme, gardée secrète). N'importe qui peut fermer le cadenas pour t'écrire, toi seul peux l'ouvrir. La sécurité repose sur des maths (les grands nombres premiers) faciles dans un sens, quasi impossibles à inverser. Le petit cadenas de ton navigateur, c'est ça." }
          ],
          retenir: "Le chiffrement brouille un message avec une clé. Le chiffrement à clé publique permet à des inconnus d'échanger en sécurité : cadenas public pour fermer, clé privée pour ouvrir. Sa solidité vient des maths des nombres premiers."
        },
        {
          titre: "Comment une IA apprend (et pourquoi elle se trompe)",
          accroche: "Une IA moderne n'est pas programmée avec des règles. On ne lui a pas écrit \"un chat a des moustaches\". Elle a appris toute seule, à partir d'exemples.",
          blocs: [
            { t:"Un réseau de neurones artificiels est une immense fonction avec des millions de \"boutons\" réglables. On lui montre des masses d'exemples (des images étiquetées \"chat\"/\"pas chat\"), et à chaque erreur on ajuste un peu les boutons pour qu'elle se rapproche de la bonne réponse. Répété des milliards de fois, elle finit par capter des régularités." },
            { t:"D'où deux limites majeures. Un : elle ne \"comprend\" pas, elle reconnaît des motifs statistiques — elle peut donc se tromper avec aplomb, ou inventer (les \"hallucinations\"). Deux : elle hérite des biais de ses exemples. Une IA n'est jamais meilleure ni plus neutre que les données sur lesquelles on l'a entraînée." }
          ],
          retenir: "Une IA moderne apprend des régularités à partir d'énormes jeux d'exemples, en ajustant des millions de paramètres — au lieu de suivre des règles écrites. Elle reconnaît des motifs sans \"comprendre\", d'où erreurs, inventions et biais hérités des données."
        },
        {
          titre: "Pixels, fichiers et compression : pourquoi une photo pèse 3 Mo",
          accroche: "Une image, pour un ordinateur, c'est une grille de milliers de petits carrés colorés — et tout l'art consiste à la décrire avec le moins de chiffres possible.",
          blocs: [
            { t:"Une photo est une grille de pixels ; chaque pixel a une couleur codée par des nombres (dose de rouge, de vert, de bleu). Plusieurs millions de pixels, cela fait énormément de chiffres — d'où des fichiers lourds si on les stocke tels quels." },
            { t:"La compression allège tout ça intelligemment. Sans perte, elle repère les répétitions (une grande zone de ciel bleu = \"ce bleu, ×10000\" au lieu de 10000 valeurs identiques). Avec perte (JPEG pour l'image, MP3 pour le son), elle jette les détails que l'œil ou l'oreille ne remarquent pas. C'est pourquoi une photo compressée pèse dix fois moins sans paraître dégradée." }
          ],
          retenir: "Une image = une grille de pixels colorés, donc beaucoup de chiffres. La compression allège : sans perte (repérer les répétitions) ou avec perte (jeter ce que l'œil/l'oreille ne perçoivent pas, comme le JPEG et le MP3)."
        },
        {
          titre: "Le cloud : les ordinateurs de quelqu'un d'autre",
          accroche: "Tes photos sont \"dans le nuage\". Rassurant et vaporeux — sauf qu'il n'y a aucun nuage : juste des ordinateurs bien réels, ailleurs.",
          blocs: [
            { t:"Le \"cloud\", ce sont d'immenses entrepôts remplis de serveurs (des ordinateurs qui tournent en permanence), gérés par des entreprises, auxquels tu accèdes par Internet. Quand tu \"sauvegardes dans le cloud\", ton fichier est copié sur ces machines distantes plutôt que sur ton seul appareil." },
            { t:"Avantages : tu retrouves tes données partout et tu ne les perds pas si ton téléphone casse. Contreparties : sans connexion, tu n'y accèdes plus, et tu confies tes fichiers à un tiers — d'où l'importance de savoir qui les héberge, où, et comment ils sont protégés." }
          ],
          retenir: "Le cloud n'a rien de vaporeux : ce sont les ordinateurs (serveurs) de quelqu'un d'autre, accessibles par Internet. Pratique (données partout, sauvegardées) mais dépendant d'une connexion et d'un tiers à qui tu confies tes fichiers."
        }
      ],
      quotidien: [
        {
          titre: "Mots de passe et double authentification",
          danger: true,
          texte: "Un mot de passe long et unique par site vaut mieux qu'un mot compliqué réutilisé partout : si un site est piraté, les autres tombent. Un gestionnaire de mots de passe s'en souvient à ta place. Et la double authentification (un code en plus du mot de passe) bloque l'essentiel des piratages, même si ton mot de passe fuite."
        },
        {
          titre: "Reconnaître un hameçonnage (phishing)",
          danger: true,
          texte: "Un message urgent (\"votre compte va être bloqué\", \"colis en attente\") qui pousse à cliquer vite et à saisir mot de passe ou carte : méfiance. On ne clique pas sur le lien ; on va sur le site officiel par ses propres moyens. Vérifier l'adresse de l'expéditeur et l'URL réelle du lien. La précipitation est l'arme n°1 de l'arnaqueur."
        },
        {
          titre: "Ce que tu laisses derrière toi (les données)",
          texte: "Chaque site visité, recherche, clic peut être enregistré et recoupé pour dresser un profil (souvent à des fins de publicité). Les cookies servent à ce suivi. Refuser les cookies non essentiels, utiliser la navigation privée pour les recherches sensibles et limiter les autorisations des applis réduit cette trace."
        },
        {
          titre: "Sauvegarder : la règle du 3-2-1",
          texte: "Un disque tombe toujours en panne un jour, et un rançongiciel peut tout chiffrer d'un coup. La règle éprouvée : 3 copies de tes données importantes, sur 2 supports différents, dont 1 hors de chez toi (un disque externe rangé ailleurs, ou le cloud). Une seule copie n'est pas une sauvegarde. La plupart des drames de données auraient été évités par une simple copie à jour."
        }
      ],
      exos: [
        {
          q: "Au niveau le plus bas, un ordinateur manipule…",
          choix: ["Des mots", "Des 0 et des 1 avec des opérations logiques (ET, OU, NON)", "Des images", "Des ondes"],
          bonne: 1,
          explication: "Tout est codé en 0/1, traités par des portes logiques faites de transistors. La \"pensée\" de la machine n'est qu'un empilement d'opérations simples, très rapides."
        },
        {
          q: "Un algorithme, c'est…",
          choix: ["Un composant électronique", "Une suite d'étapes précises pour résoudre un problème", "Un virus", "Un langage secret"],
          bonne: 1,
          explication: "Comme une recette de cuisine : des instructions non ambiguës, étape par étape. Son intérêt : être efficace même quand les données grossissent."
        },
        {
          q: "Comment une information voyage-t-elle sur Internet ?",
          choix: ["D'un bloc, par un tuyau direct", "Découpée en paquets qui voyagent séparément et se recomposent à l'arrivée", "Par ondes radio uniquement", "Elle ne bouge pas"],
          bonne: 1,
          explication: "Le découpage en paquets adressés, empruntant des chemins variables, rend le réseau robuste : si un chemin est coupé, les paquets contournent."
        },
        {
          q: "Le chiffrement à clé publique permet à deux inconnus d'échanger en sécurité grâce à…",
          choix: ["Un mot de passe partagé d'avance", "Une clé publique pour fermer et une clé privée pour ouvrir", "La chance", "Un antivirus"],
          bonne: 1,
          explication: "Le cadenas public (distribué à tous) ferme le message, seule la clé privée l'ouvre. Sa solidité vient des maths des grands nombres premiers."
        },
        {
          q: "Comment une IA moderne \"apprend\" à reconnaître un chat ?",
          choix: ["On lui écrit la règle 'un chat a des moustaches'", "Elle ajuste des millions de paramètres à partir de nombreux exemples étiquetés", "Elle demande à un humain à chaque fois", "Elle devine au hasard"],
          bonne: 1,
          explication: "Pas de règles écrites : elle capte des régularités statistiques dans les exemples. D'où sa puissance, mais aussi ses erreurs, ses inventions et ses biais."
        },
        {
          q: "Pourquoi ne faut-il pas réutiliser le même mot de passe partout ?",
          choix: ["Ça ralentit la connexion", "Si un site est piraté, tous tes comptes tombent", "C'est interdit par la loi", "Ça n'a pas d'importance"],
          bonne: 1,
          explication: "Une seule fuite compromet alors tous tes comptes. Mieux : un mot de passe unique par site (via un gestionnaire) et la double authentification."
        },
        {
          q: "Un mail \"urgent\" te demande de cliquer vite pour éviter le blocage de ton compte. C'est typiquement…",
          choix: ["Un service utile", "Une tentative d'hameçonnage (phishing)", "Une mise à jour", "Sans risque"],
          bonne: 1,
          explication: "L'urgence qui pousse à cliquer et à saisir ses identifiants est l'arme n°1 de l'arnaque. On n'utilise pas le lien : on va au site officiel par soi-même."
        },
        {
          q: "Quelle est la différence entre Internet et le Web ?",
          choix: ["Aucune", "Internet est le réseau ; le Web est un service (pages liées) qui circule dessus", "Le Web est plus ancien", "Internet ne sert qu'aux mails"],
          bonne: 1,
          explication: "Internet achemine les paquets ; le Web (pages et hyperliens, 1989) n'est qu'un des services qui l'utilisent, au même titre que les mails ou la vidéo."
        },
        {
          q: "Pourquoi n'écrit-on plus les programmes directement en 0 et 1 ?",
          choix: ["C'est interdit", "Des langages proches de l'humain sont traduits en binaire par un compilateur", "Les 0 et 1 n'existent plus", "C'est devenu trop rapide"],
          bonne: 1,
          explication: "Depuis Grace Hopper et le compilateur, on écrit dans un langage lisible (Python…) qu'un programme traduit en langage machine. Programmer devient accessible."
        },
        {
          q: "Pourquoi une photo JPEG pèse-t-elle bien moins que l'image brute ?",
          choix: ["Elle a moins de pixels", "La compression jette les détails que l'œil ne remarque pas", "Elle est en noir et blanc", "Par magie"],
          bonne: 1,
          explication: "Le JPEG est une compression \"avec perte\" : il supprime les informations peu perceptibles. On gagne énormément de place sans dégradation visible."
        },
        {
          q: "\"Sauvegarder dans le cloud\", concrètement, ça veut dire…",
          choix: ["Envoyer ses fichiers dans l'atmosphère", "Copier ses fichiers sur des serveurs distants, accessibles par Internet", "Les graver sur un CD", "Les supprimer de partout"],
          bonne: 1,
          explication: "Le cloud, ce sont les ordinateurs (serveurs) de quelqu'un d'autre. Tes fichiers y sont copiés et accessibles partout — tant que tu as une connexion."
        },
        {
          q: "Quelle est la bonne règle pour sauvegarder des données importantes ?",
          choix: ["Une copie sur l'ordinateur suffit", "3 copies, sur 2 supports, dont 1 hors de chez soi", "Les imprimer", "Se les envoyer une fois par mail"],
          bonne: 1,
          explication: "La règle 3-2-1 protège des pannes, vols et rançongiciels. Une seule copie n'est pas une sauvegarde : le disque lâchera un jour."
        }
      ]
    },

    /* ============================ ÉNERGIE & CHALEUR ============================ */
    {
      id: "energie",
      nom: "Énergie & Chaleur",
      emoji: "🔥",
      accent: "#f0883e",
      tagline: "Rien ne se perd, mais tout se dégrade.",
      decouvertes: [
        {
          titre: "La conservation de l'énergie",
          annee: "~1840-1847",
          qui: "James Joule, Julius von Mayer, Hermann von Helmholtz",
          resume: "L'énergie peut changer de forme (mouvement, chaleur, électricité, chimie) mais la quantité totale ne change jamais : c'est le premier principe de la thermodynamique.",
          pourquoi: "Une des lois les plus solides de la physique. Elle interdit la machine à mouvement perpétuel et sert de règle de comptabilité à toute l'ingénierie."
        },
        {
          titre: "L'entropie et le second principe",
          annee: "1824-1865",
          qui: "Sadi Carnot, Rudolf Clausius",
          resume: "La chaleur va spontanément du chaud vers le froid, jamais l'inverse. Une grandeur, l'entropie (le \"désordre\"), ne peut qu'augmenter dans un système isolé.",
          pourquoi: "Explique pourquoi aucune machine n'est parfaite, pourquoi le temps a un sens, et pourquoi on ne peut pas récupérer toute l'énergie. Peut-être la loi la plus profonde de la physique."
        },
        {
          titre: "Le zéro absolu",
          annee: "1848",
          qui: "William Thomson (Lord Kelvin)",
          resume: "Il existe une température minimale absolue, -273,15 °C (0 kelvin), en dessous de laquelle on ne peut pas descendre : l'agitation des atomes y serait au minimum.",
          pourquoi: "Révèle ce qu'est vraiment la température (de l'agitation) et fonde l'échelle Kelvin utilisée par toute la science. On peut s'en approcher, jamais l'atteindre."
        },
        {
          titre: "La chaleur, c'est du mouvement",
          annee: "~1860-1870",
          qui: "Ludwig Boltzmann, James Clerk Maxwell",
          resume: "La chaleur n'est pas un fluide invisible : c'est l'agitation désordonnée des atomes et molécules. Plus ils s'agitent, plus c'est \"chaud\".",
          pourquoi: "Relie le monde microscopique (atomes en mouvement) au monde qu'on ressent (chaud/froid). Fonde la physique statistique."
        },
        {
          titre: "La machine à vapeur",
          annee: "1769",
          qui: "James Watt",
          resume: "Watt perfectionne la machine à vapeur : la chaleur d'un feu fait bouillir de l'eau, dont la vapeur pousse un piston et produit un mouvement mécanique utilisable.",
          pourquoi: "Pour la première fois, on convertit massivement de la chaleur en travail : c'est le moteur de la révolution industrielle (usines, trains, bateaux). Le watt, unité de puissance, lui rend hommage."
        }
      ],
      notions: [
        {
          titre: "Chaleur et température, ce n'est pas pareil",
          accroche: "Une étincelle à 1000 °C ne te brûle pas, une baignoire à 40 °C peut t'ébouillanter sur la durée. La différence entre chaleur et température est là.",
          blocs: [
            { h:"La température = l'agitation", t:"La température mesure à quel point les atomes s'agitent en moyenne. Plus ils vibrent vite, plus c'est chaud. C'est une intensité, indépendante de la quantité de matière." },
            { h:"La chaleur = l'énergie transférée", t:"La chaleur, elle, est la quantité totale d'énergie qui passe d'un corps chaud à un corps froid. Une étincelle est à très haute température mais contient très peu de matière, donc très peu de chaleur : elle s'éteint sur ta peau sans dégât. La baignoire est à basse température mais contient énormément d'énergie. Température = qualité, chaleur = quantité." }
          ],
          retenir: "Température = à quel point les atomes s'agitent (une intensité). Chaleur = la quantité d'énergie transférée. Une étincelle : haute température, peu de chaleur. Une baignoire tiède : basse température, beaucoup de chaleur."
        },
        {
          titre: "Premier principe : l'énergie se transforme, jamais ne disparaît",
          accroche: "Tu ne \"consommes\" jamais d'énergie au sens strict : tu la transformes d'une forme en une autre. C'est pour ça que le mouvement perpétuel est impossible.",
          blocs: [
            { t:"L'énergie existe sous plein de formes : mouvement, hauteur (un objet en l'air), chaleur, électricité, énergie chimique (essence, aliments), lumière. Elle passe sans cesse de l'une à l'autre — une voiture change l'énergie chimique de l'essence en mouvement et en chaleur — mais le total ne change jamais." },
            { t:"Conséquence directe : aucune machine ne peut produire plus d'énergie qu'elle n'en reçoit. La \"machine à mouvement perpétuel\" qui tournerait toute seule pour toujours est impossible, non par manque d'ingéniosité, mais parce qu'elle violerait cette loi fondamentale." }
          ],
          retenir: "Premier principe : l'énergie change de forme (chimique, mouvement, chaleur, électricité…) mais sa quantité totale est constante. On ne la crée ni ne la détruit — d'où l'impossibilité du mouvement perpétuel."
        },
        {
          titre: "Second principe : pourquoi le café refroidit toujours",
          accroche: "Un café chaud refroidit ; un café froid ne se réchauffe jamais tout seul. Cette évidence cache la loi la plus profonde de la physique : l'entropie.",
          blocs: [
            { t:"La chaleur se répand toujours du chaud vers le froid, jamais l'inverse spontanément. Plus généralement, tout système livré à lui-même évolue vers plus de désordre (l'entropie augmente) : l'ordre se défait facilement, l'inverse demande un effort. Une tasse se brise, elle ne se recolle pas toute seule." },
            { t:"C'est aussi ce qui donne au temps une direction : on distingue le passé du futur justement parce que l'entropie augmente. Et c'est pourquoi aucune machine ne récupère 100 % de l'énergie : une part se dissipe fatalement en chaleur inutilisable. On peut créer de l'ordre localement (un frigo, un être vivant), mais toujours au prix de plus de désordre ailleurs." }
          ],
          retenir: "Second principe : la chaleur va du chaud vers le froid et le désordre (entropie) augmente toujours globalement. D'où la flèche du temps et le fait qu'aucune machine n'est parfaite : une part d'énergie se dégrade toujours en chaleur perdue."
        },
        {
          titre: "Le frigo ne crée pas de froid : il déplace la chaleur",
          accroche: "Un réfrigérateur ne \"fabrique\" pas du froid — ça n'existe pas. Il prend la chaleur là où tu n'en veux pas et la jette ailleurs.",
          blocs: [
            { t:"Le froid n'est que l'absence de chaleur. Un frigo pompe la chaleur de l'intérieur et la rejette à l'arrière (la grille arrière est tiède, c'est là que part la chaleur de tes aliments). Il faut de l'énergie pour ça : forcer la chaleur à aller du froid vers le chaud, c'est remonter la pente naturelle, donc ça se paie en électricité." },
            { t:"Une pompe à chaleur, c'est le même appareil vu à l'envers : elle prend la chaleur de l'air extérieur (même frais) et la rejette dans la maison pour la chauffer. C'est pour ça qu'elle est si efficace : elle ne crée pas la chaleur, elle la déménage, et en déplace bien plus que l'électricité qu'elle consomme." }
          ],
          retenir: "Le \"froid\" n'existe pas, c'est l'absence de chaleur. Un frigo déplace la chaleur de l'intérieur vers l'arrière ; une pompe à chaleur déménage la chaleur de dehors vers dedans. Déplacer la chaleur coûte de l'énergie, mais bien moins que la créer."
        },
        {
          titre: "Les trois façons dont la chaleur voyage",
          accroche: "Pourquoi une poignée en métal semble plus froide qu'une poignée en bois, à la même température ? Parce que la chaleur se déplace de trois manières.",
          blocs: [
            { h:"Conduction (de proche en proche)", t:"Dans un solide, la chaleur se propage de contact en contact. Le métal conduit très bien : il évacue vite la chaleur de ta main, d'où la sensation de froid — alors que le bois, mauvais conducteur, te la laisse. Ils sont pourtant à la même température." },
            { h:"Convection (par le mouvement d'un fluide)", t:"Dans l'air ou l'eau, le chaud monte et le froid descend, créant des courants qui brassent la chaleur. C'est ainsi qu'un radiateur réchauffe toute une pièce." },
            { h:"Rayonnement (par ondes, sans contact)", t:"Tout corps chaud émet de la chaleur sous forme d'ondes, qui traversent même le vide — c'est ainsi que le Soleil nous chauffe. C'est ce que ta main sent face à un feu sans le toucher." }
          ],
          retenir: "La chaleur voyage par conduction (de proche en proche dans les solides), convection (courants dans l'air/l'eau) et rayonnement (ondes, même dans le vide). Bien isoler une maison, c'est bloquer ces trois chemins."
        },
        {
          titre: "Puissance ou énergie ? (le watt et le kilowattheure)",
          accroche: "Deux mots qu'on mélange sans arrêt, sur les factures comme sur les étiquettes. Les distinguer, c'est comprendre ce qu'on paie vraiment.",
          blocs: [
            { t:"La puissance (en watts, W) est un débit : l'énergie utilisée à chaque instant. Un appareil de 2000 W tire fort tant qu'il fonctionne. C'est comme le débit d'un robinet ouvert." },
            { t:"L'énergie (en wattheures, Wh, ou kilowattheures, kWh) est le total consommé sur la durée : puissance × temps. C'est le volume d'eau qui a coulé. Un appareil de 2000 W pendant 30 min consomme 1 kWh ; une LED de 10 W pendant 100 h aussi. Ta facture est en kWh : c'est l'énergie totale, pas la puissance instantanée, que tu paies." }
          ],
          retenir: "Puissance (W) = le débit d'énergie à un instant (la force du robinet). Énergie (kWh) = puissance × durée = le total consommé (le volume écoulé). La facture est en kWh. Un appareil puissant mais bref peut coûter moins qu'un faible mais permanent."
        },
        {
          titre: "Toute énergie finit en chaleur",
          accroche: "Suis n'importe quelle énergie assez longtemps : elle termine toujours dispersée en chaleur. C'est la version concrète du \"tout se dégrade\".",
          blocs: [
            { t:"L'électricité d'une ampoule finit en lumière puis en chaleur dans les murs ; le mouvement d'une voiture finit en chaleur dans les freins, les pneus et l'air ; le son se dissipe en chaleur. À chaque conversion, une part devient de la chaleur diffuse, de moins en moins récupérable (c'est le second principe, l'entropie)." },
            { t:"D'où une nuance importante : on ne \"consomme\" pas l'énergie (elle se conserve), on la dégrade — d'une forme concentrée et utile (essence, électricité) vers de la chaleur diffuse et inutilisable. \"Économiser l'énergie\", c'est en réalité limiter cette dégradation en gaspillant moins de formes utiles." }
          ],
          retenir: "Toute chaîne d'énergie finit en chaleur diffuse, de moins en moins récupérable (entropie). On ne détruit pas l'énergie, on la dégrade du concentré (essence, électricité) vers le dispersé. \"Économiser l'énergie\" = gaspiller moins de formes utiles."
        }
      ],
      quotidien: [
        {
          titre: "Bien isoler : bloquer les trois chemins de la chaleur",
          texte: "Une maison perd sa chaleur par conduction (murs, fenêtres), convection (courants d'air, fuites) et rayonnement. Le double vitrage piège une couche d'air (ou de gaz) mauvaise conductrice entre deux vitres ; calfeutrer les fuites coupe la convection ; les isolants épais ralentissent la conduction. Moins de chaleur perdue = moins de chauffage = facture réduite."
        },
        {
          titre: "Métal ou bois : la même température, pas la même sensation",
          texte: "Au réveil, le carrelage semble glacé et le tapis doux, pourtant ils sont à la même température ambiante. Le carrelage (bon conducteur) aspire vite la chaleur de tes pieds ; le tapis (isolant) la garde. Ta peau ne mesure pas la température, mais la vitesse à laquelle elle perd (ou gagne) de la chaleur."
        },
        {
          titre: "Pourquoi un thermos garde chaud ET froid",
          texte: "Un thermos combat les trois transferts : double paroi avec du vide entre les deux (le vide ne conduit pas et empêche la convection), et surfaces réfléchissantes (contre le rayonnement). Résultat : il ralentit l'échange de chaleur dans les deux sens, donc il garde un café chaud comme une boisson fraîche."
        },
        {
          titre: "Comprendre sa facture d'électricité",
          texte: "Ta facture compte des kilowattheures (kWh) : la puissance de chaque appareil × son temps d'usage. Les gros postes sont ceux qui sont puissants ET longtemps allumés : chauffage, chauffe-eau, sèche-linge. Une ampoule LED ou un chargeur, même oubliés allumés, pèsent peu. Pour réduire la facture, viser d'abord le chauffage et l'eau chaude, pas les petites veilles."
        }
      ],
      exos: [
        {
          q: "Une étincelle est à 1000 °C mais ne te brûle pas. Pourquoi ?",
          choix: ["Elle n'est pas vraiment chaude", "Haute température mais très peu de matière, donc très peu de chaleur (énergie) transférée", "Ta peau est ignifugée", "C'est une illusion"],
          bonne: 1,
          explication: "Température = agitation (élevée ici) ; chaleur = énergie transférée (minuscule, car l'étincelle contient très peu de matière). Température et chaleur ne sont pas la même chose."
        },
        {
          q: "Une machine à mouvement perpétuel qui tournerait pour toujours sans énergie est…",
          choix: ["Possible mais chère", "Impossible : elle violerait la conservation de l'énergie", "Déjà inventée", "Interdite par la loi seulement"],
          bonne: 1,
          explication: "Aucune machine ne produit plus d'énergie qu'elle n'en reçoit (premier principe). Le mouvement perpétuel est impossible par principe physique."
        },
        {
          q: "Pourquoi un café chaud refroidit-il toujours, et jamais l'inverse ?",
          choix: ["Par hasard", "La chaleur va spontanément du chaud vers le froid (entropie qui augmente)", "À cause de la tasse", "Parce qu'on souffle dessus"],
          bonne: 1,
          explication: "Second principe : la chaleur se répand vers le froid et le désordre augmente. C'est aussi ce qui donne au temps une direction."
        },
        {
          q: "Que fait réellement un réfrigérateur ?",
          choix: ["Il fabrique du froid", "Il déplace la chaleur de l'intérieur vers l'arrière", "Il détruit la chaleur", "Il ralentit le temps"],
          bonne: 1,
          explication: "Le froid n'existe pas : c'est l'absence de chaleur. Le frigo pompe la chaleur des aliments et la rejette derrière (grille tiède). Ça coûte de l'électricité."
        },
        {
          q: "Le carrelage semble plus froid que le tapis, à la même température. Pourquoi ?",
          choix: ["Il est réellement plus froid", "Bon conducteur, il aspire vite la chaleur de tes pieds", "Il contient de la glace", "C'est faux"],
          bonne: 1,
          explication: "Ta peau ne mesure pas la température mais la vitesse de perte de chaleur. Le carrelage (bon conducteur) l'évacue vite, le tapis (isolant) la garde."
        },
        {
          q: "Qu'est-ce que la chaleur, à l'échelle des atomes ?",
          choix: ["Un fluide invisible", "L'agitation désordonnée des atomes et molécules", "De la lumière", "Du magnétisme"],
          bonne: 1,
          explication: "Chaud = atomes qui s'agitent beaucoup ; froid = atomes plus calmes. Au zéro absolu (-273,15 °C), l'agitation serait minimale."
        },
        {
          q: "Le double vitrage isole surtout parce que…",
          choix: ["Le verre est plus épais", "Une couche d'air/gaz emprisonnée entre deux vitres conduit mal la chaleur", "Il est teinté", "Il réfléchit le bruit"],
          bonne: 1,
          explication: "L'air (ou un gaz) piégé entre les deux vitres est un mauvais conducteur : il freine la fuite de chaleur par conduction. On bloque un des trois chemins de la chaleur."
        },
        {
          q: "Aucune centrale ou moteur ne convertit 100 % de l'énergie en travail utile. Pourquoi ?",
          choix: ["Manque de technologie", "Le second principe impose qu'une part se dissipe toujours en chaleur", "Les ingénieurs sont négligents", "C'est en fait possible"],
          bonne: 1,
          explication: "Le second principe (entropie) garantit qu'une part de l'énergie se dégrade fatalement en chaleur inutilisable. La perfection est physiquement interdite, pas juste difficile."
        },
        {
          q: "Quelle unité apparaît sur ta facture d'électricité ?",
          choix: ["Le watt (puissance)", "Le kilowattheure (énergie = puissance × temps)", "Le volt", "Le degré"],
          bonne: 1,
          explication: "On paie l'énergie totale consommée (kWh), pas la puissance instantanée (W). Puissance × durée = énergie."
        },
        {
          q: "Que devient, au bout du compte, l'énergie du mouvement d'une voiture qui freine ?",
          choix: ["Elle disparaît", "Elle se transforme en chaleur (freins, pneus, air)", "Elle retourne dans le réservoir", "Elle devient de la lumière"],
          bonne: 1,
          explication: "Le freinage convertit le mouvement en chaleur diffuse. Comme toute énergie, elle n'est pas détruite mais dégradée en chaleur peu récupérable."
        },
        {
          q: "Qu'a rendu possible la machine à vapeur de Watt ?",
          choix: ["De voler", "De convertir massivement la chaleur en mouvement (révolution industrielle)", "De produire de l'électricité solaire", "De refroidir les maisons"],
          bonne: 1,
          explication: "Transformer la chaleur d'un feu en travail mécanique a lancé usines, trains et bateaux. Le watt porte son nom."
        },
        {
          q: "Quel appareil pèse le plus lourd sur une facture d'électricité, en général ?",
          choix: ["Un chargeur de téléphone", "Une LED oubliée allumée", "Le chauffage ou le chauffe-eau", "Une télécommande"],
          bonne: 2,
          explication: "Les gros postes sont puissants ET longtemps allumés : chauffage, eau chaude, sèche-linge. Les petites veilles pèsent peu à côté."
        }
      ]
    },

    /* ============================ ONDES, SON & LUMIÈRE ============================ */
    {
      id: "ondes",
      nom: "Ondes, son & lumière",
      emoji: "🌈",
      accent: "#38bdf8",
      tagline: "Tout ce qui vibre, voyage et nous informe.",
      decouvertes: [
        {
          titre: "La décomposition de la lumière",
          annee: "1666",
          qui: "Isaac Newton",
          resume: "Newton fait passer la lumière blanche à travers un prisme et la décompose en toutes les couleurs de l'arc-en-ciel — puis prouve qu'un second prisme les recombine en blanc.",
          pourquoi: "La lumière blanche n'est pas \"pure\" : c'est un mélange de toutes les couleurs. Ça explique l'arc-en-ciel et la couleur des objets, et fonde l'optique. Le nom même de cette app, PRISME, vient de là."
        },
        {
          titre: "La lumière est une onde (fentes de Young)",
          annee: "1801",
          qui: "Thomas Young",
          resume: "En faisant passer la lumière par deux fentes proches, Young obtient des bandes claires et sombres alternées : la signature d'une onde qui interfère avec elle-même.",
          pourquoi: "Preuve décisive que la lumière est une onde. La physique quantique montrera plus tard qu'elle est aussi faite de grains — la fameuse dualité onde-particule."
        },
        {
          titre: "Les ondes radio",
          annee: "1887",
          qui: "Heinrich Hertz (d'après la théorie de Maxwell)",
          resume: "Hertz produit et capte pour la première fois des ondes radio en laboratoire, confirmant que lumière et ondes invisibles sont de même nature électromagnétique.",
          pourquoi: "Ouvre l'ère des télécommunications sans fil : radio, télévision, radar, Wi-Fi. Le hertz (Hz), unité de fréquence, lui rend hommage."
        },
        {
          titre: "L'effet Doppler",
          annee: "1842",
          qui: "Christian Doppler",
          resume: "Doppler montre que la fréquence perçue d'une onde change quand la source se rapproche (plus aiguë) ou s'éloigne (plus grave).",
          pourquoi: "On l'entend dans une sirène qui passe, on l'utilise dans les radars et l'échographie… et c'est le décalage vers le rouge qui a révélé l'expansion de l'univers."
        },
        {
          titre: "Le laser",
          annee: "1960",
          qui: "Theodore Maiman (principe : Einstein, 1917)",
          resume: "Le laser produit une lumière d'une seule couleur, parfaitement ordonnée et concentrée en un faisceau très fin, au lieu de la lumière ordinaire dispersée.",
          pourquoi: "Partout : lecteurs de codes-barres et de disques, fibre optique d'Internet, chirurgie de l'œil, découpe industrielle, mesures de distances ultra-précises."
        }
      ],
      notions: [
        {
          titre: "Qu'est-ce qu'une onde ?",
          accroche: "Fais une \"ola\" dans un stade : la vague fait le tour, mais chaque spectateur reste à sa place. Une onde transporte de l'énergie, pas de la matière.",
          blocs: [
            { t:"Une onde est une vibration qui se propage. Sur l'eau, un bouchon monte et descend sur place pendant que la vague, elle, avance : ce n'est pas l'eau qui voyage, c'est le mouvement. Le son, la lumière, les vagues, une corde qu'on secoue : toutes sont des ondes." },
            { t:"On la décrit par trois nombres : la fréquence (combien de vibrations par seconde, en hertz), la longueur d'onde (la distance entre deux crêtes) et l'amplitude (la taille de la vibration — pour le son, le volume ; pour la lumière, l'intensité)." }
          ],
          retenir: "Une onde est une vibration qui se propage en transportant de l'énergie, pas de la matière (comme la \"ola\"). On la mesure par sa fréquence, sa longueur d'onde et son amplitude."
        },
        {
          titre: "Le son : de la matière qui vibre",
          accroche: "Dans l'espace, personne ne t'entend crier — et ce n'est pas une exagération de cinéma. Le son a besoin de matière pour voyager.",
          blocs: [
            { t:"Un son, c'est de la matière qui vibre et pousse ses voisines de proche en proche : tes cordes vocales font vibrer l'air, l'air fait vibrer ton tympan. Sans milieu (air, eau, solide), pas de son — d'où le silence total du vide spatial. Dans l'eau ou le métal, le son va même plus vite que dans l'air." },
            { t:"La fréquence donne la hauteur (aigu/grave), l'amplitude donne le volume. Et le son est bien plus lent que la lumière (~340 m/s contre 300 000 km/s) : c'est pourquoi on voit l'éclair avant d'entendre le tonnerre." }
          ],
          retenir: "Le son est une vibration de la matière qui se propage de proche en proche : pas de matière, pas de son (silence du vide spatial). Fréquence = hauteur, amplitude = volume. Il est bien plus lent que la lumière."
        },
        {
          titre: "La lumière : une onde qui n'a besoin de rien",
          accroche: "Contrairement au son, la lumière traverse le vide — sinon celle du Soleil ne nous parviendrait jamais.",
          blocs: [
            { t:"La lumière est une onde électromagnétique : une vibration de champs électrique et magnétique qui se propage sans support, même dans le vide, à 300 000 km/s (la vitesse limite de l'univers). C'est ce que Maxwell a compris au XIXe siècle." },
            { t:"Ce que nos yeux voient — l'arc-en-ciel, du rouge au violet — n'est qu'une toute petite fenêtre. Juste au-delà du rouge commence l'infrarouge (la chaleur qu'on sent d'un feu), juste avant le violet l'ultraviolet. Même nature, mais des fréquences que nos yeux ne captent pas." }
          ],
          retenir: "La lumière est une onde électromagnétique qui voyage même dans le vide, à 300 000 km/s. Le visible (rouge→violet) n'est qu'une petite fenêtre ; au-delà, mêmes ondes invisibles (infrarouge, UV…)."
        },
        {
          titre: "Le spectre électromagnétique : une seule famille",
          accroche: "Les ondes radio, le Wi-Fi, la chaleur, la lumière, les rayons X : tout cela est la même chose, à des fréquences différentes.",
          blocs: [
            { t:"Du plus \"calme\" au plus énergique : ondes radio → micro-ondes → infrarouge → lumière visible → ultraviolet → rayons X → rayons gamma. Toutes sont des ondes électromagnétiques ; seule leur fréquence (donc leur énergie) change. Plus la fréquence est haute, plus l'onde est énergique." },
            { t:"C'est cette énergie qui décide de tout : les ondes radio et le Wi-Fi (basse énergie) traversent les murs sans danger ; les rayons X et gamma (haute énergie) peuvent casser l'ADN. Chaque technologie choisit sa \"case\" du spectre selon l'usage." }
          ],
          retenir: "Radio, micro-ondes, infrarouge, visible, UV, X, gamma : une seule famille d'ondes électromagnétiques, classées par énergie croissante. Basse énergie = inoffensif et traversant ; haute énergie (X, gamma) = ionisant."
        },
        {
          titre: "Pourquoi les objets ont une couleur",
          accroche: "Une pomme n'est pas \"rouge\" en soi. Elle renvoie le rouge et avale le reste — la couleur naît de cette sélection.",
          blocs: [
            { t:"La lumière blanche contient toutes les couleurs. Quand elle frappe un objet, celui-ci en absorbe certaines et renvoie les autres. Une pomme rouge absorbe le bleu et le vert, et te renvoie le rouge : c'est cette lumière renvoyée que tu vois. Un objet noir absorbe presque tout, un objet blanc renvoie presque tout." },
            { t:"Deux conséquences très concrètes : sous une lumière colorée, les couleurs semblent changer (il n'y a plus toutes les couleurs disponibles à renvoyer), et un vêtement noir chauffe plus au soleil qu'un blanc, car il absorbe davantage d'énergie lumineuse." }
          ],
          retenir: "La couleur d'un objet, c'est la lumière qu'il RENVOIE (il absorbe le reste). Rouge = renvoie le rouge. Noir = absorbe presque tout (et chauffe) ; blanc = renvoie presque tout."
        },
        {
          titre: "L'effet Doppler : le son qui monte et descend",
          accroche: "La sirène d'une ambulance semble plus aiguë quand elle arrive, plus grave quand elle s'éloigne. Pourtant le son émis ne change jamais.",
          blocs: [
            { t:"Quand la source se rapproche, chaque vibration est émise un peu plus près que la précédente : les ondes se tassent, la fréquence perçue monte (plus aigu). Quand elle s'éloigne, les ondes s'étirent, la fréquence baisse (plus grave). Le son réel est constant ; c'est le mouvement qui change ce que tu perçois." },
            { t:"Le même effet vaut pour la lumière : une source qui s'éloigne paraît légèrement plus rouge (décalage vers le rouge). C'est ainsi qu'on a découvert que les galaxies s'éloignent et que l'univers est en expansion. Le radar routier et l'échographie l'exploitent aussi." }
          ],
          retenir: "Effet Doppler : une source qui s'approche \"tasse\" ses ondes (son plus aigu, lumière plus bleue) ; qui s'éloigne les étire (plus grave, plus rouge). D'où la sirène, le radar, et le décalage vers le rouge des galaxies."
        }
      ],
      quotidien: [
        {
          titre: "Le bruit abîme l'oreille pour de bon",
          danger: true,
          texte: "Le volume se mesure en décibels, une échelle logarithmique : +10 dB, c'est déjà 10 fois plus d'énergie sonore. Au-delà de ~85 dB (trafic dense, concert), une exposition prolongée détruit peu à peu les cellules de l'oreille interne, qui ne repoussent jamais. Acouphènes et perte d'audition sont irréversibles : baisser le volume des écouteurs et faire des pauses est la seule vraie prévention."
        },
        {
          titre: "Estimer la distance d'un orage",
          texte: "La lumière de l'éclair arrive quasi instantanément, mais le son (le tonnerre) ne parcourt que ~340 m par seconde. Compte les secondes entre l'éclair et le tonnerre et divise par 3 : tu obtiens la distance en kilomètres. Moins de 10 secondes (≈3 km), l'orage est proche : mets-toi à l'abri."
        },
        {
          titre: "Pourquoi ta voix enregistrée te semble étrange",
          texte: "Quand tu parles, tu t'entends de deux façons : par l'air (comme les autres) et par les vibrations transmises à travers les os de ton crâne, qui ajoutent des graves. Un enregistrement ne capte que la voie aérienne — c'est ta \"vraie\" voix, celle que les autres entendent. Elle te paraît bizarre simplement parce que tu n'as pas l'habitude de l'entendre sans les graves internes."
        }
      ],
      exos: [
        {
          q: "Dans une vague sur l'eau, qu'est-ce qui avance réellement ?",
          choix: ["L'eau, d'un bout à l'autre", "L'énergie / le mouvement, pas l'eau elle-même", "Rien", "Le fond marin"],
          bonne: 1,
          explication: "Un bouchon monte et descend sur place : l'eau reste là, c'est la vague (l'énergie) qui voyage. Toute onde transporte de l'énergie, pas de la matière."
        },
        {
          q: "Pourquoi n'y a-t-il aucun son dans l'espace ?",
          choix: ["Il y fait trop froid", "Le son a besoin de matière pour se propager, et le vide n'en a pas", "Les ondes sonores gèlent", "Il y en a, mais très faible"],
          bonne: 1,
          explication: "Le son est une vibration de la matière, transmise de proche en proche. Sans air (ni eau, ni solide), rien ne porte la vibration : silence total."
        },
        {
          q: "Pourquoi voit-on l'éclair avant d'entendre le tonnerre ?",
          choix: ["L'éclair est émis avant", "La lumière va bien plus vite que le son", "Le tonnerre vient d'un autre nuage", "C'est une illusion"],
          bonne: 1,
          explication: "Lumière : 300 000 km/s ; son : ~340 m/s. La lumière arrive quasi instantanément, le son traîne. L'écart permet d'estimer la distance de l'orage."
        },
        {
          q: "Les ondes radio, la lumière visible et les rayons X sont…",
          choix: ["Trois choses sans rapport", "La même famille d'ondes électromagnétiques, à des fréquences différentes", "Des sons", "Des particules de matière"],
          bonne: 1,
          explication: "Une seule famille, classée par énergie. Basse énergie (radio) : inoffensive et traversante ; haute énergie (X, gamma) : ionisante."
        },
        {
          q: "Pourquoi une pomme paraît-elle rouge ?",
          choix: ["Elle produit de la lumière rouge", "Elle renvoie le rouge et absorbe les autres couleurs", "Elle est rouge à l'intérieur", "Nos yeux inventent le rouge"],
          bonne: 1,
          explication: "La lumière blanche contient tout ; la pomme absorbe le bleu et le vert et te renvoie le rouge. La couleur, c'est la lumière renvoyée."
        },
        {
          q: "Pourquoi un tee-shirt noir chauffe-t-il plus au soleil qu'un blanc ?",
          choix: ["Le noir attire le soleil", "Le noir absorbe presque toute la lumière (donc l'énergie), le blanc la renvoie", "Le blanc est plus fin", "Aucune différence réelle"],
          bonne: 1,
          explication: "Absorber la lumière, c'est absorber son énergie, qui devient chaleur. Le noir absorbe presque tout, le blanc renvoie presque tout."
        },
        {
          q: "La sirène d'une ambulance qui s'éloigne devient plus grave. C'est…",
          choix: ["Elle baisse le son exprès", "L'effet Doppler : les ondes s'étirent quand la source s'éloigne", "Le vent", "Une panne de sirène"],
          bonne: 1,
          explication: "En s'éloignant, la source étire ses ondes : fréquence perçue plus basse (plus grave). En approchant, elles se tassent (plus aigu). Le son émis, lui, ne change pas."
        },
        {
          q: "Comment sait-on que les galaxies lointaines s'éloignent de nous ?",
          choix: ["On les voit bouger à l'œil nu", "Leur lumière est décalée vers le rouge (effet Doppler)", "Elles disparaissent", "On ne le sait pas vraiment"],
          bonne: 1,
          explication: "Une source qui s'éloigne voit sa lumière étirée vers le rouge. Ce \"décalage vers le rouge\" des galaxies a révélé l'expansion de l'univers."
        },
        {
          q: "L'échelle des décibels est logarithmique. Passer de 70 à 80 dB, c'est…",
          choix: ["Un peu plus fort", "10 fois plus d'énergie sonore", "10 dB sans importance", "2 fois moins fort"],
          bonne: 1,
          explication: "Chaque +10 dB = ×10 en énergie sonore. C'est pourquoi le bruit fort devient vite dangereux : l'échelle cache d'énormes écarts."
        },
        {
          q: "Qu'est-ce qui distingue la lumière d'un laser de celle d'une ampoule ?",
          choix: ["Elle est plus chaude", "Elle est d'une seule couleur, ordonnée et concentrée en un fin faisceau", "Elle est invisible", "Elle ne voyage pas"],
          bonne: 1,
          explication: "Le laser produit une lumière cohérente (une couleur, ondes alignées, faisceau fin), d'où son usage en fibre optique, lecture de disques, chirurgie, mesures."
        },
        {
          q: "L'expérience des deux fentes de Young (1801) a prouvé que la lumière…",
          choix: ["N'existe pas", "Se comporte comme une onde (elle forme des interférences)", "Est uniquement faite de billes", "Va moins vite que le son"],
          bonne: 1,
          explication: "Les bandes claires/sombres sont la signature d'une onde qui interfère. La quantique montrera plus tard qu'elle est AUSSI faite de grains : la dualité."
        }
      ]
    },

    /* ============================ LE CERVEAU & L'ESPRIT ============================ */
    {
      id: "cerveau",
      nom: "Le Cerveau & l'esprit",
      emoji: "🧠",
      accent: "#d98cf0",
      tagline: "L'organe qui essaie de se comprendre lui-même.",
      decouvertes: [
        {
          titre: "La localisation des fonctions",
          annee: "1861",
          qui: "Paul Broca",
          resume: "En étudiant un patient ayant perdu la parole, Broca identifie une zone précise du cerveau responsable du langage — la première fonction mentale localisée.",
          pourquoi: "Le cerveau n'est pas une masse uniforme : il est spécialisé par régions. Fondation de la neurologie moderne."
        },
        {
          titre: "Le conditionnement",
          annee: "~1900",
          qui: "Ivan Pavlov",
          resume: "Pavlov fait sonner une cloche avant de nourrir des chiens ; bientôt, la cloche seule déclenche leur salivation. L'apprentissage par association est né.",
          pourquoi: "Explique une grande part de nos habitudes, peurs et automatismes : le cerveau relie ce qui arrive ensemble. Base du conditionnement, jusqu'aux réflexes des applis."
        },
        {
          titre: "Les biais cognitifs",
          annee: "années 1970",
          qui: "Daniel Kahneman & Amos Tversky",
          resume: "Ils montrent que l'esprit humain suit des raccourcis mentaux systématiques qui faussent nos jugements de façon prévisible.",
          pourquoi: "Nos erreurs de raisonnement ne sont pas aléatoires mais régulières, donc étudiables. Révolutionne la psychologie et l'économie. Prix Nobel 2002."
        },
        {
          titre: "La plasticité cérébrale",
          annee: "fin XXe siècle",
          qui: "Neurosciences (nombreux travaux)",
          resume: "Contre l'idée d'un cerveau figé à l'âge adulte, on découvre qu'il se remodèle en permanence : les connexions se renforcent ou s'effacent selon l'usage.",
          pourquoi: "On peut apprendre, changer une habitude et récupérer après une lésion à tout âge. Le cerveau est sculpté par ce qu'on en fait."
        },
        {
          titre: "Voir le cerveau en action (IRMf)",
          annee: "~1990",
          qui: "Seiji Ogawa et al.",
          resume: "L'IRM fonctionnelle permet de voir quelles régions du cerveau consomment plus d'énergie pendant qu'une personne pense, parle ou bouge.",
          pourquoi: "Pour la première fois, on observe le cerveau au travail sans l'ouvrir. Un outil central des neurosciences — à interpréter avec prudence, car \"une zone s'active\" ne dit pas tout."
        }
      ],
      notions: [
        {
          titre: "La perception est une construction",
          accroche: "Tu crois voir le monde \"tel qu'il est\". En réalité, ton cerveau t'en fabrique une version — et il prend des raccourcis.",
          blocs: [
            { t:"Les yeux ne \"filment\" pas la réalité : ils envoient des signaux partiels et bruités que le cerveau interprète, complète et corrige. Il bouche même en permanence un trou dans ta vision (l'angle mort, là où part le nerf optique) sans que tu le remarques. Les illusions d'optique ne sont pas des bugs : ce sont ces raccourcis pris en flagrant délit." },
            { t:"C'est vrai de tous les sens : le cerveau construit une expérience cohérente à partir d'informations incomplètes, en s'appuyant sur ses attentes. D'où le fait que deux personnes peuvent honnêtement \"voir\" ou \"entendre\" des choses différentes." }
          ],
          retenir: "Le cerveau ne reçoit pas la réalité, il la reconstruit à partir de signaux partiels, en comblant les trous avec ses attentes. Les illusions d'optique révèlent ces raccourcis. Percevoir est un acte actif, pas un enregistrement."
        },
        {
          titre: "Les deux vitesses de la pensée",
          accroche: "38 × 27, combien ? Et : 2 + 2 ? Tu viens d'utiliser deux modes de pensée radicalement différents.",
          blocs: [
            { t:"Le Système 1 est rapide, automatique, sans effort : il reconnaît un visage, lit \"2+2\", sent un danger. Le Système 2 est lent, coûteux, réfléchi : il calcule 38×27, pèse un argument, résiste à une tentation. Le premier tourne en permanence ; le second, un peu paresseux, ne s'active que si nécessaire." },
            { t:"Le Système 1 est génial pour le quotidien, mais se trompe sur ce qui est nouveau, abstrait ou statistique — et c'est là que naissent la plupart des biais. Savoir \"passer en Système 2\" sur les décisions importantes est une compétence en soi." }
          ],
          retenir: "Deux modes de pensée : le Système 1 (rapide, intuitif, automatique) et le Système 2 (lent, réfléchi, coûteux). Le 1 gère le quotidien mais génère les biais ; les décisions importantes méritent qu'on active le 2."
        },
        {
          titre: "Les biais cognitifs",
          accroche: "Ton cerveau prend des raccourcis pour aller vite. Souvent utiles — parfois ils te font tomber dans le même piège que tout le monde.",
          blocs: [
            { h:"Quelques classiques", t:"Le biais de confirmation : on remarque et on retient ce qui confirme ce qu'on croit déjà, et on ignore le reste. L'ancrage : le premier chiffre entendu (un prix de départ) déforme tout jugement suivant. La disponibilité : on surestime ce qui vient facilement à l'esprit (un crash d'avion marque plus que des milliers de trajets en voiture)." },
            { t:"Ces biais ne sont pas de la bêtise : ce sont des raccourcis efficaces la plupart du temps. Le problème, c'est qu'ils sont systématiques et invisibles de l'intérieur. On ne s'en corrige pas en \"faisant attention\" ; on s'en protège par des méthodes (chercher activement ce qui nous contredit, comparer des données plutôt que des impressions)." }
          ],
          retenir: "Les biais cognitifs sont des raccourcis mentaux systématiques (confirmation, ancrage, disponibilité…). Utiles souvent, trompeurs parfois, et invisibles de l'intérieur. On s'en protège par des méthodes, pas par la seule bonne volonté."
        },
        {
          titre: "La mémoire n'est pas un enregistreur",
          accroche: "Tu ne \"relis\" pas un souvenir comme une vidéo : tu le reconstruis à chaque fois — et tu le modifies au passage.",
          blocs: [
            { t:"Se souvenir, c'est reconstruire une scène à partir de fragments, en comblant les trous avec du plausible. Chaque rappel peut légèrement réécrire le souvenir. C'est pourquoi des faux souvenirs sincères existent, et pourquoi les témoignages oculaires sont faillibles." },
            { t:"Conséquence pratique pour apprendre : relire passivement donne l'illusion de savoir. Ce qui grave vraiment, c'est de se tester (récupérer l'information de mémoire) et d'espacer les révisions dans le temps. L'effort de rappel est précisément ce qui renforce la trace." }
          ],
          retenir: "La mémoire reconstruit, elle n'enregistre pas : d'où les faux souvenirs. Pour retenir, se tester (récupération active) et espacer les révisions bat de loin la relecture passive — l'effort de rappel est ce qui fixe le souvenir."
        },
        {
          titre: "La dopamine : l'anticipation, pas le plaisir",
          accroche: "On appelle la dopamine \"l'hormone du plaisir\". C'est faux — et cette erreur explique pourquoi les notifications sont si accrocheuses.",
          blocs: [
            { t:"La dopamine n'est pas le signal du plaisir, mais celui de l'ANTICIPATION d'une récompense : elle te pousse à chercher, à vouloir. Elle grimpe surtout quand la récompense est incertaine — c'est le moteur de la curiosité… et des machines à sous." },
            { t:"Les applis exploitent exactement ça : notifications imprévisibles, \"tirer pour rafraîchir\", likes qui arrivent au hasard. Chaque incertitude relance la dopamine et l'envie de vérifier. Comprendre ce mécanisme, c'est déjà reprendre un peu la main (couper les notifs, retirer l'aléa)." }
          ],
          retenir: "La dopamine signale l'anticipation d'une récompense (le \"vouloir\"), pas le plaisir lui-même — et elle s'emballe sur les récompenses incertaines. C'est le ressort des notifications et du scroll. Le savoir aide à reprendre le contrôle."
        },
        {
          titre: "La plasticité : le cerveau se sculpte",
          accroche: "Chaque chose que tu répètes creuse un chemin dans ton cerveau. Les habitudes, bonnes comme mauvaises, sont des sentiers de plus en plus faciles à emprunter.",
          blocs: [
            { t:"Le cerveau se remodèle toute la vie : les connexions souvent utilisées se renforcent, celles délaissées s'effacent (\"ce qui s'active ensemble se lie ensemble\"). Apprendre la guitare, une langue ou un geste, c'est littéralement re-câbler des circuits — d'où l'intérêt de la répétition régulière plutôt que du bachotage." },
            { t:"Bonne nouvelle : cette plasticité n'a pas d'âge limite, même si elle ralentit. On peut apprendre du neuf, défaire une habitude (en cessant de nourrir le sentier) et récupérer après une lésion. Le cerveau est un peu comme un muscle qu'on façonne par l'usage." }
          ],
          retenir: "Le cerveau se remodèle en continu : ce qu'on répète se renforce, ce qu'on délaisse s'efface. Les habitudes sont des sentiers neuronaux. On peut apprendre et changer à tout âge — par la répétition régulière, pas le bachotage."
        }
      ],
      quotidien: [
        {
          titre: "Écrans, notifications et dopamine",
          texte: "Les applications sont conçues pour capter ton attention via l'imprévisibilité (notifications au hasard, fils sans fin), qui relance sans cesse la dopamine. Quelques leviers efficaces : couper les notifications non essentielles, passer l'écran en noir et blanc, ranger les applis \"aspirantes\" hors de la première page, et poser le téléphone dans une autre pièce pour travailler. On ne lutte pas contre sa volonté, on réduit les déclencheurs."
        },
        {
          titre: "Mieux apprendre : se tester et espacer",
          texte: "Relire ses notes donne un faux sentiment de maîtrise. Deux méthodes prouvées font la vraie différence : se tester (fermer le cours et tenter de tout restituer) et espacer les révisions (revoir à J+1, J+3, J+7 plutôt que tout d'un coup). L'effort de se rappeler est exactement ce qui grave le souvenir. C'est tout le principe des cartes de révision."
        },
        {
          titre: "Le mythe du multitâche",
          texte: "Le cerveau ne fait pas vraiment deux tâches attentionnelles à la fois : il bascule très vite de l'une à l'autre, et chaque bascule a un coût (temps perdu, erreurs). Répondre à un message en travaillant fragmente l'attention et allonge le tout. Faire une seule chose à la fois, par blocs, est plus rapide et moins fatigant qu'il n'y paraît."
        }
      ],
      exos: [
        {
          q: "Qu'a révélé la découverte de Broca en 1861 ?",
          choix: ["Le cerveau est une masse uniforme", "Des fonctions précises (comme le langage) sont localisées dans des zones précises", "Le cerveau ne sert à rien", "La mémoire est dans le cœur"],
          bonne: 1,
          explication: "Une zone dédiée au langage : le cerveau est spécialisé par régions. Fondation de la neurologie moderne."
        },
        {
          q: "Un chien salive au son d'une cloche annonçant le repas. C'est…",
          choix: ["Un réflexe inné", "Un apprentissage par association (conditionnement de Pavlov)", "De la télépathie", "Une maladie"],
          bonne: 1,
          explication: "Le cerveau relie ce qui arrive ensemble (cloche + nourriture). Ce conditionnement explique beaucoup d'habitudes, de peurs et d'automatismes humains."
        },
        {
          q: "Ta perception visuelle du monde est…",
          choix: ["Une copie fidèle de la réalité", "Une reconstruction du cerveau à partir de signaux partiels", "Parfaite et sans trou", "Identique pour tous"],
          bonne: 1,
          explication: "Le cerveau interprète et complète des signaux incomplets (il masque même ton angle mort). Les illusions d'optique révèlent ces raccourcis."
        },
        {
          q: "Résister à une tentation ou calculer 38×27 mobilise surtout…",
          choix: ["Le Système 1 (rapide, automatique)", "Le Système 2 (lent, réfléchi, coûteux)", "Aucun des deux", "Le cœur"],
          bonne: 1,
          explication: "Le Système 2 gère l'effort et la réflexion ; le Système 1, rapide et automatique, gère l'intuitif (reconnaître un visage, 2+2)."
        },
        {
          q: "Le biais de confirmation, c'est la tendance à…",
          choix: ["Tout remettre en question", "Ne retenir que ce qui confirme ce qu'on croit déjà", "Changer d'avis sans cesse", "Oublier les chiffres"],
          bonne: 1,
          explication: "On remarque ce qui nous donne raison et on ignore le reste. Invisible de l'intérieur : on s'en protège en cherchant activement ce qui nous contredit."
        },
        {
          q: "Se souvenir d'un événement, c'est…",
          choix: ["Rejouer une vidéo exacte", "Reconstruire la scène (et parfois la modifier au passage)", "Impossible", "Lire un fichier figé"],
          bonne: 1,
          explication: "La mémoire reconstruit à partir de fragments, d'où les faux souvenirs sincères et la faillibilité des témoignages oculaires."
        },
        {
          q: "Pour vraiment retenir un cours, le plus efficace est de…",
          choix: ["Le relire plusieurs fois", "Se tester de mémoire et espacer les révisions", "Le surligner en couleurs", "L'écouter en dormant"],
          bonne: 1,
          explication: "La relecture donne une illusion de savoir. Se tester (récupération active) + espacer grave durablement : l'effort de rappel renforce la trace."
        },
        {
          q: "La dopamine est surtout le signal…",
          choix: ["Du plaisir ressenti", "De l'anticipation d'une récompense (le \"vouloir\")", "De la douleur", "Du sommeil"],
          bonne: 1,
          explication: "Elle pousse à chercher et à vouloir, et s'emballe sur les récompenses incertaines — d'où l'efficacité des notifications imprévisibles."
        },
        {
          q: "Peut-on encore re-câbler son cerveau à l'âge adulte ?",
          choix: ["Non, il est figé après l'enfance", "Oui : il se remodèle toute la vie selon l'usage (plasticité)", "Seulement après une lésion", "Seulement en dormant"],
          bonne: 1,
          explication: "La plasticité dure toute la vie (même ralentie) : ce qu'on répète se renforce. On peut apprendre, défaire une habitude, récupérer."
        },
        {
          q: "Faire deux tâches attentionnelles \"en même temps\", pour le cerveau, c'est…",
          choix: ["Naturel et gratuit", "En réalité basculer vite de l'une à l'autre, avec un coût à chaque fois", "Totalement impossible", "Plus rapide que se concentrer"],
          bonne: 1,
          explication: "Le cerveau alterne au lieu de vraiment paralléliser ; chaque bascule coûte du temps et des erreurs. Une chose à la fois est plus efficace."
        },
        {
          q: "Un premier prix affiché à 200 € fait paraître 120 € \"raisonnable\". C'est…",
          choix: ["Le biais d'ancrage", "Le hasard", "Une bonne affaire garantie", "Le biais de confirmation"],
          bonne: 0,
          explication: "L'ancrage : le premier chiffre rencontré déforme les jugements suivants. Très utilisé en négociation et en marketing."
        }
      ]
    }

  ],

  /* ================= MODE DÉFI — questions poussées, transversales ================= */
  // tags = domaines mobilisés (affichés comme thème). Pensées pour faire raisonner,
  // souvent en croisant deux notions.
  defis: [
    {
      q: "Deux ampoules prévues pour le secteur, 60 W et 100 W, sont branchées en SÉRIE. Laquelle brille le plus ?",
      choix: ["La 100 W", "La 60 W", "Les deux pareil", "Aucune ne s'allume"],
      bonne: 1,
      explication: "En série, le courant est le même partout. La 60 W a la plus grande résistance (moins de puissance à 230 V = plus de R). Or la puissance dissipée vaut R·I² : à courant égal, la plus résistante (60 W) chauffe le plus. Contre-intuitif !",
      tags: ["electricite"]
    },
    {
      q: "À puissance transportée constante, on double la tension d'une ligne électrique. Les pertes par effet Joule sont…",
      choix: ["Doublées", "Divisées par 2", "Divisées par 4", "Inchangées"],
      bonne: 2,
      explication: "Doubler U à puissance constante divise le courant I par 2. Les pertes valent R·I² : diviser I par 2 les divise par 4. D'où la très haute tension sur les lignes.",
      tags: ["electricite","energie"]
    },
    {
      q: "Une bouilloire de 2000 W chauffe 1 L en 3 min. Une bouilloire de 1000 W (même eau) mettra environ…",
      choix: ["1,5 min", "3 min", "6 min", "12 min"],
      bonne: 2,
      explication: "Il faut la même ÉNERGIE pour chauffer la même eau. Moitié de puissance = double de temps ≈ 6 min. (Énergie = puissance × temps.)",
      tags: ["energie","electricite"]
    },
    {
      q: "Un article est soldé à -20 %, puis -10 % supplémentaires en caisse. La réduction totale réelle est…",
      choix: ["-30 %", "-28 %", "-25 %", "-32 %"],
      bonne: 1,
      explication: "Les pourcentages se multiplient : 0,8 × 0,9 = 0,72, soit -28 %. On n'additionne pas les pourcentages.",
      tags: ["maths"]
    },
    {
      q: "Un placement perd 50 % une année. Quel gain l'année suivante pour revenir au point de départ ?",
      choix: ["+50 %", "+75 %", "+100 %", "+150 %"],
      bonne: 2,
      explication: "Après -50 %, il reste la moitié. Pour doubler et revenir au départ, il faut +100 %. Une baisse et une hausse de même pourcentage ne s'annulent pas.",
      tags: ["maths"]
    },
    {
      q: "Une bactérie se divise toutes les 20 min. En partant d'une seule, combien après 3 heures ?",
      choix: ["9", "180", "512", "1024"],
      bonne: 2,
      explication: "3 h = 9 périodes de 20 min, donc 9 doublements : 2⁹ = 512. La croissance exponentielle explose vite.",
      tags: ["vivant","maths"]
    },
    {
      q: "La lumière d'une galaxie est fortement décalée vers le rouge. On en déduit qu'elle…",
      choix: ["Se rapproche de nous", "S'éloigne rapidement de nous", "Est très chaude", "Est une étoile jeune"],
      bonne: 1,
      explication: "Décalage vers le rouge = ondes étirées = source qui s'éloigne (effet Doppler). Plus il est fort, plus elle s'éloigne vite : c'est la preuve de l'expansion de l'univers.",
      tags: ["astrophysique","ondes"]
    },
    {
      q: "Une étoile très massive a bien plus de carburant qu'une petite. Pourtant elle vit…",
      choix: ["Bien plus longtemps", "Bien moins longtemps", "Aussi longtemps", "Éternellement"],
      bonne: 1,
      explication: "Elle brûle son carburant énormément plus vite pour contrer sa gravité colossale : quelques millions d'années au lieu de milliards. Plus c'est gros, plus ça flambe.",
      tags: ["astrophysique"]
    },
    {
      q: "Proxima du Centaure est à ~4 années-lumière. Si elle explosait aujourd'hui, on le verrait…",
      choix: ["Instantanément", "Dans 4 ans", "Dans 4 mois", "Jamais"],
      bonne: 1,
      explication: "Sa lumière met 4 ans à nous parvenir. Voir loin, c'est voir le passé : on n'observerait l'explosion que 4 ans plus tard.",
      tags: ["astrophysique"]
    },
    {
      q: "La rouille dégage de la chaleur (réaction exothermique). Est-elle pour autant rapide ?",
      choix: ["Oui, exothermique = rapide", "Non : l'énergie libérée n'a rien à voir avec la vitesse", "Elle est endothermique", "Ce n'est pas une réaction"],
      bonne: 1,
      explication: "Énergie et vitesse sont indépendantes. La rouille est exothermique mais lente ; une explosion est exothermique et rapide. Un catalyseur agit sur la vitesse, pas sur le bilan d'énergie.",
      tags: ["chimie"]
    },
    {
      q: "Un catalyseur accélère une réaction. Change-t-il la quantité d'énergie qu'elle libère au total ?",
      choix: ["Oui, il l'augmente", "Oui, il la diminue", "Non : il change la vitesse, pas le bilan d'énergie", "Il l'annule"],
      bonne: 2,
      explication: "Le catalyseur offre un chemin plus rapide mais ressort intact : départ et arrivée inchangés, donc énergie libérée identique. Seule la vitesse change.",
      tags: ["chimie"]
    },
    {
      q: "Une enzyme accélère une réaction dans une cellule. Après la réaction, elle est…",
      choix: ["Détruite", "Intacte et réutilisable", "Transformée en déchet", "Divisée en deux"],
      bonne: 1,
      explication: "Une enzyme est un catalyseur biologique : elle accélère sans être consommée. C'est ce qui rend la chimie du vivant possible à 37 °C.",
      tags: ["vivant","chimie"]
    },
    {
      q: "Pourquoi refait-on le vaccin contre la grippe chaque année, mais pas celui contre la rougeole ?",
      choix: ["La grippe est plus grave", "Le virus de la grippe mute vite (évolution), pas celui de la rougeole", "Le vaccin s'évapore", "Par habitude commerciale"],
      bonne: 1,
      explication: "Le virus grippal évolue vite : les défenses apprises deviennent vite dépassées. La rougeole change peu, un vaccin protège durablement. L'évolution en action.",
      tags: ["vivant"]
    },
    {
      q: "Un test détecte une maladie rare avec 99 % de fiabilité et te déclare positif. Es-tu presque sûr d'être malade ?",
      choix: ["Oui, à 99 %", "Pas forcément : si la maladie est très rare, beaucoup de positifs sont faux", "Oui, à 100 %", "Non, jamais malade"],
      bonne: 1,
      explication: "Si la maladie touche 1 personne sur 10 000, les faux positifs (1 %) sont bien plus nombreux que les vrais malades. Un positif se lit avec la rareté de la maladie (raisonnement bayésien).",
      tags: ["maths","corps"]
    },
    {
      q: "Après un crash d'avion médiatisé, on surestime le danger de l'avion face à la voiture. Quel biais ?",
      choix: ["L'ancrage", "Le biais de disponibilité", "Le biais de confirmation", "L'effet Doppler"],
      bonne: 1,
      explication: "Le biais de disponibilité : on juge un risque à la facilité avec laquelle un exemple vient à l'esprit. Un crash marque ; des milliers de trajets en voiture non.",
      tags: ["cerveau"]
    },
    {
      q: "Un aliment 'double le risque' d'une maladie qui touche 1 personne sur 100 000. Faut-il paniquer ?",
      choix: ["Oui, +100 % c'est énorme", "Non : passer à 2 sur 100 000 reste minuscule", "Oui, on va tous l'attraper", "Impossible à dire"],
      bonne: 1,
      explication: "Doubler un risque infime donne un risque encore infime. Un pourcentage relatif n'a de sens qu'avec le risque absolu de départ — piège classique des titres.",
      tags: ["maths","cerveau"]
    },
    {
      q: "Le four à micro-ondes chauffe un plat humide mais peine sur un aliment très sec. Pourquoi ?",
      choix: ["Le sec réfléchit les ondes", "Les micro-ondes font surtout vibrer les molécules d'eau", "Le sec est trop froid", "Le four est en panne"],
      bonne: 1,
      explication: "Les micro-ondes excitent les molécules d'eau, qui chauffent par friction. Sans eau, peu de molécules à agiter, donc peu de chauffe. (Le métal, lui, réfléchit les ondes → arcs.)",
      tags: ["ondes","chimie"]
    },
    {
      q: "Pourquoi transpirer rafraîchit-il le corps ?",
      choix: ["La sueur est froide", "L'évaporation de l'eau absorbe de la chaleur sur la peau", "La sueur bloque le soleil", "Ça ne rafraîchit pas"],
      bonne: 1,
      explication: "Passer de liquide à vapeur demande de l'énergie, prélevée en chaleur sur la peau : refroidissement par évaporation. D'où l'inconfort quand l'air est très humide (l'eau s'évapore mal).",
      tags: ["corps","energie"]
    },
    {
      q: "Une rampe en métal et une en bois, même pièce. Le métal semble plus froid. En réalité…",
      choix: ["Il est plus froid", "Ils sont à la même température ; le métal évacue la chaleur plus vite", "Le bois est chauffé", "La perception ne trompe jamais"],
      bonne: 1,
      explication: "Même température ambiante. La peau ne mesure pas la température mais la vitesse de perte de chaleur : le métal, bon conducteur, l'aspire vite. Ta perception te trompe.",
      tags: ["energie","cerveau"]
    },
    {
      q: "Un fil supraconducteur a une résistance nulle. Que deviennent les pertes par effet Joule ?",
      choix: ["Elles doublent", "Elles deviennent nulles", "Elles restent les mêmes", "Le fil fond"],
      bonne: 1,
      explication: "Les pertes valent R·I². Si R = 0, aucune énergie n'est dissipée en chaleur : le courant circule sans perte. Tout l'intérêt (et la difficulté) des supraconducteurs.",
      tags: ["electricite","energie"]
    },
    {
      q: "Young montre que la lumière est une onde ; l'effet photoélectrique, qu'elle est faite de grains. La bonne conclusion ?",
      choix: ["L'une des deux est fausse", "La lumière a les deux aspects selon l'expérience (dualité)", "La lumière n'existe pas", "Le débat n'est pas tranché"],
      bonne: 1,
      explication: "Les deux expériences sont justes : c'est la dualité onde-particule. La lumière n'est ni tout à fait l'un ni l'autre — nos catégories classiques ne suffisent pas.",
      tags: ["physique","ondes"]
    },
    {
      q: "L'effet tunnel explique à la fois pourquoi le Soleil brille et pourquoi une clé USB fonctionne. Leur point commun ?",
      choix: ["La chaleur", "Une particule franchit une barrière qu'elle ne 'devrait' pas pouvoir passer", "Le magnétisme", "La gravité"],
      bonne: 1,
      explication: "Fusion solaire (noyaux qui se repoussent) et mémoire flash (électrons piégés) reposent tous deux sur des particules qui traversent une barrière d'énergie par effet tunnel.",
      tags: ["physique"]
    },
    {
      q: "Deux particules intriquées sont aux deux bouts de la galaxie. Peut-on s'en servir pour communiquer instantanément ?",
      choix: ["Oui", "Non : chaque mesure est aléatoire, aucune info ne dépasse la vitesse de la lumière", "Oui, mais lentement", "Seulement avec un laser"],
      bonne: 1,
      explication: "La corrélation est réelle et instantanée, mais comme les résultats sont aléatoires, on ne peut coder aucun message. Rien ne dépasse la vitesse de la lumière.",
      tags: ["physique"]
    },
    {
      q: "Une pile 'vide' n'a plus de tension. Que s'est-il passé chimiquement ?",
      choix: ["Les électrons se sont échappés", "Les réactifs de l'oxydoréduction sont épuisés", "Elle a trop chauffé", "Le métal a fondu"],
      bonne: 1,
      explication: "Une pile est une oxydoréduction canalisée dans un fil. Réactifs consommés = réaction terminée = plus de courant. Une pile ne 'contient' pas d'électricité, elle la produit.",
      tags: ["chimie","electricite"]
    },
    {
      q: "Une IA 'reconnaît' un chat sur une photo. En quoi diffère-t-elle d'un humain qui le reconnaît ?",
      choix: ["Aucune différence", "Elle détecte des motifs statistiques sans comprendre, d'où erreurs et biais", "Elle voit mieux", "Elle réfléchit comme nous"],
      bonne: 1,
      explication: "L'IA capte des régularités dans des millions d'exemples, sans concept de 'chat'. D'où des erreurs absurdes possibles et des biais hérités des données. L'humain, lui, comprend.",
      tags: ["numerique","cerveau"]
    },
    {
      q: "La sécurité du chiffrement d'Internet repose surtout sur le fait que…",
      choix: ["Les ordinateurs sont lents", "Multiplier deux grands nombres premiers est facile, mais retrouver ces facteurs est quasi impossible", "Personne ne connaît les maths", "Les données sont cachées"],
      bonne: 1,
      explication: "Cette asymétrie (facile dans un sens, quasi impossible dans l'autre) protège paiements et messages. Un ordinateur quantique menacerait justement cette difficulté.",
      tags: ["numerique","maths"]
    },
    {
      q: "Pourquoi se tester de mémoire fait-il mieux retenir que relire ses notes ?",
      choix: ["C'est plus rapide", "L'effort de rappel renforce la trace mémorielle", "La relecture efface la mémoire", "Aucune différence"],
      bonne: 1,
      explication: "Récupérer une info de mémoire consolide le souvenir, alors que relire donne surtout une illusion de savoir. C'est le principe des cartes de révision espacée.",
      tags: ["cerveau"]
    },
    {
      q: "Le 'trou dans la couche d'ozone' et le réchauffement climatique, c'est…",
      choix: ["Le même problème", "Deux problèmes distincts (UV d'un côté, effet de serre de l'autre)", "L'ozone qui cause le réchauffement", "Le CO₂ qui crée le trou d'ozone"],
      bonne: 1,
      explication: "Distincts : l'ozone protège des UV (abîmé par les CFC, en réparation) ; le réchauffement vient des gaz à effet de serre comme le CO₂. On les confond souvent.",
      tags: ["terre"]
    },
    {
      q: "Comment 'voit-on' l'intérieur de la Terre sans y descendre ?",
      choix: ["Avec des satellites", "Grâce aux ondes sismiques qui la traversent, comme une échographie", "En creusant jusqu'au noyau", "On ne le voit pas"],
      bonne: 1,
      explication: "Les ondes des séismes changent de vitesse selon les couches : en les analysant, on reconstitue la structure interne. Même principe qu'une échographie par ultrasons.",
      tags: ["terre","ondes"]
    },
    {
      q: "Les atomes de fer de ton sang ont été fabriqués…",
      choix: ["Sur Terre", "Au cœur d'étoiles, puis dispersés par leurs explosions", "Par le Soleil aujourd'hui", "Lors du Big Bang"],
      bonne: 1,
      explication: "Le Big Bang n'a produit presque que H et He. Les éléments lourds (carbone, oxygène, fer) sont forgés par la fusion dans les étoiles et libérés en supernova. Nous sommes de la matière recyclée d'étoiles.",
      tags: ["astrophysique","chimie"]
    },
    {
      q: "L'affirmation correcte sur l'effet de serre est :",
      choix: ["Il est entièrement néfaste", "Sans lui la Terre serait glaciale ; le problème est de l'AUGMENTER trop vite", "Il n'existe pas", "Il refroidit la Terre"],
      bonne: 1,
      explication: "L'effet de serre naturel nous maintient à +15 °C au lieu de -18 °C. C'est son renforcement rapide par nos émissions qui pose problème, pas son existence.",
      tags: ["terre","energie"]
    },
    {
      q: "Dans un film, un vaisseau explose avec un grand BOUM dans l'espace. Réaliste ?",
      choix: ["Oui", "Non : sans matière, le son ne se propage pas (vide = silence)", "Oui, mais assourdi", "Seulement près d'une planète"],
      bonne: 1,
      explication: "Le son a besoin d'un milieu matériel. Le vide spatial est silencieux. (La lumière de l'explosion, elle, nous parviendrait.)",
      tags: ["ondes"]
    },
    {
      q: "Répondre à des messages tout en rédigeant un rapport, pour le cerveau, c'est…",
      choix: ["Du vrai parallélisme efficace", "Des bascules rapides et coûteuses entre tâches", "Reposant", "Plus rapide que se concentrer"],
      bonne: 1,
      explication: "Le cerveau ne parallélise pas les tâches attentionnelles : il alterne, et chaque bascule coûte temps et erreurs. Une chose à la fois est plus rapide au total.",
      tags: ["cerveau"]
    },
    {
      q: "Pourquoi le courant du secteur est-il alternatif plutôt que continu ?",
      choix: ["Par choix arbitraire", "Un aimant qui tourne pousse les électrons en va-et-vient, et l'alternatif se transforme facilement en haute tension", "Parce que c'est moins cher", "Pour économiser les électrons"],
      bonne: 1,
      explication: "L'aimant tournant génère naturellement un va-et-vient (induction), et l'alternatif se transforme aisément pour le transport à haute tension. D'où sa victoire sur le continu.",
      tags: ["electricite"]
    },
    {
      q: "Le diamant (le plus dur) et le graphite (tendre) sont tous deux du carbone pur. La différence vient…",
      choix: ["D'atomes différents", "De l'arrangement des atomes", "De la couleur", "De l'âge"],
      bonne: 1,
      explication: "Mêmes atomes de carbone, agencement différent : réseau 3D très rigide (diamant) vs feuillets qui glissent (graphite). L'arrangement fait tout.",
      tags: ["chimie"]
    },
    {
      q: "Que se passe-t-il, pour la matière, au zéro absolu (-273,15 °C) ?",
      choix: ["L'eau bout", "L'agitation des atomes est minimale (on ne peut pas descendre plus bas)", "Les atomes accélèrent", "La gravité s'annule"],
      bonne: 1,
      explication: "La température mesure l'agitation des atomes. Au zéro absolu, elle est au minimum : c'est la température la plus basse possible, qu'on approche sans jamais l'atteindre.",
      tags: ["energie","physique"]
    },
    {
      q: "Sous une lumière purement rouge, une feuille verte apparaît…",
      choix: ["Verte", "Presque noire", "Rouge vif", "Blanche"],
      bonne: 1,
      explication: "Une feuille verte renvoie le vert et absorbe le reste. Éclairée seulement en rouge, il n'y a pas de vert à renvoyer : elle absorbe le rouge et paraît sombre. La couleur dépend de la lumière disponible.",
      tags: ["ondes"]
    },
    {
      q: "Un vendeur annonce d'abord 300 €, puis 'fait un geste' à 180 €. Pourquoi ça fonctionne ?",
      choix: ["180 € est objectivement bas", "Le biais d'ancrage : le premier prix sert de référence et fait paraître 180 raisonnable", "C'est une vraie affaire", "Le hasard"],
      bonne: 1,
      explication: "L'ancrage : le premier chiffre entendu déforme le jugement suivant. 180 € semble une affaire uniquement par comparaison avec l'ancre de 300 €.",
      tags: ["cerveau"]
    },
    {
      q: "Nos centrales utilisent la fission (casser l'uranium). Pourquoi pas la fusion, comme le Soleil ?",
      choix: ["La fusion ne libère pas d'énergie", "Elle exige des conditions extrêmes très difficiles à maîtriser sur Terre", "La fusion est interdite", "On l'utilise déjà partout"],
      bonne: 1,
      explication: "La fusion libère énormément d'énergie mais nécessite des températures et pressions dignes d'une étoile. La maîtriser durablement sur Terre reste un défi.",
      tags: ["physique","astrophysique"]
    },
    {
      q: "Sans corriger les effets de la relativité, ton GPS dériverait d'environ…",
      choix: ["Quelques cm/jour", "Quelques mètres/jour", "~10 km/jour", "Rien du tout"],
      bonne: 2,
      explication: "Les horloges des satellites avancent d'~38 µs/jour (vitesse + gravité). Non corrigé, cela décalerait la position d'environ 10 km par jour. La relativité est indispensable au quotidien.",
      tags: ["astrophysique","physique"]
    },
    {
      q: "Pourquoi les ordinateurs utilisent-ils le binaire (0/1) plutôt que nos dix chiffres ?",
      choix: ["Pour faire savant", "Un transistor n'a que deux états fiables (passant/bloqué), robustes au bruit", "C'est plus lent mais plus sûr", "Par tradition"],
      bonne: 1,
      explication: "Deux états nets sont impossibles à confondre, donc résistants aux parasites. Dix niveaux de tension seraient trop proches et brouillés. Le binaire est un choix physique.",
      tags: ["numerique","electronique"]
    },
    {
      q: "Tu envoies une photo par Internet et un câble se coupe en route. Que se passe-t-il souvent ?",
      choix: ["La photo est perdue", "Les paquets contournent par un autre chemin et se recomposent à l'arrivée", "Internet s'arrête", "La photo revient à l'envoyeur"],
      bonne: 1,
      explication: "L'info est découpée en paquets indépendants empruntant des chemins variables. Si l'un est coupé, les paquets passent ailleurs : c'est ce qui rend le réseau robuste.",
      tags: ["numerique"]
    },
    {
      q: "Un son passe de 60 à 90 décibels. L'énergie sonore est multipliée par…",
      choix: ["1,5", "30", "1000", "90"],
      bonne: 2,
      explication: "L'échelle des décibels est logarithmique : +10 dB = ×10 en énergie. +30 dB = ×10×10×10 = ×1000. D'où le danger rapide des sons forts.",
      tags: ["ondes","maths"]
    },
    {
      q: "Pourquoi, en général, n'attrape-t-on la varicelle qu'une seule fois ?",
      choix: ["Le virus disparaît de la Terre", "Le système immunitaire en garde la mémoire et riposte vite au retour", "On devient trop vieux", "C'est faux, on la rattrape souvent"],
      bonne: 1,
      explication: "L'immunité adaptative fabrique des armes sur mesure et les mémorise. Au prochain contact, riposte immédiate. C'est ce que déclenche un vaccin, sans la maladie.",
      tags: ["corps","vivant"]
    },
    {
      q: "Une étincelle à 1500 °C te touche sans te brûler, une eau à 60 °C peut t'ébouillanter. Pourquoi ?",
      choix: ["L'étincelle n'est pas chaude", "Température ≠ chaleur : l'étincelle a peu de matière, donc peu d'énergie à céder", "Ta peau est spéciale", "C'est faux"],
      bonne: 1,
      explication: "Température = agitation (élevée dans l'étincelle) ; chaleur = énergie transférée (minuscule car peu de matière). L'eau chaude, plus massive, cède bien plus d'énergie.",
      tags: ["energie"]
    },
    {
      q: "Deux personnes 'voient' des couleurs différentes sur une même photo (la fameuse robe). Cela montre que…",
      choix: ["L'une ment", "La perception est une construction du cerveau, pas un enregistrement fidèle", "L'écran est cassé", "Les couleurs n'existent pas"],
      bonne: 1,
      explication: "Le cerveau interprète des signaux ambigus selon ses hypothèses (ici sur l'éclairage). Deux cerveaux peuvent aboutir honnêtement à deux perceptions.",
      tags: ["cerveau","ondes"]
    },
    {
      q: "La sélection naturelle favorise avant tout…",
      choix: ["Les plus forts physiquement", "Ceux qui se reproduisent le mieux dans leur environnement", "Les plus intelligents", "Les plus gros"],
      bonne: 1,
      explication: "Pas 'le plus fort', mais le mieux adapté à SON milieu qui laisse le plus de descendants. Parfois c'est la discrétion, la coopération ou un petit gabarit qui l'emporte.",
      tags: ["vivant"]
    },
    {
      q: "À la roulette, le rouge sort 7 fois de suite. Parier sur le noir au prochain tour est…",
      choix: ["Plus malin, le noir est 'dû'", "Ni plus ni moins probable : chaque tour est indépendant", "Certainement gagnant", "Interdit"],
      bonne: 1,
      explication: "La roulette n'a pas de mémoire (illusion du joueur). Chaque tour repart à la même probabilité. La loi des grands nombres joue sur des millions de coups, pas sur le prochain.",
      tags: ["maths","cerveau"]
    },
    {
      q: "Ton médecin refuse un antibiotique pour ta grippe. A-t-il raison ?",
      choix: ["Non, ça aiderait", "Oui : la grippe est virale, l'antibiotique n'agit que sur les bactéries", "Non, c'est dangereux de refuser", "Oui, mais seulement en hiver"],
      bonne: 1,
      explication: "Un antibiotique cible la machinerie des bactéries ; un virus n'en a pas. Inutile contre la grippe, et en abuser favorise les résistances. Le médecin a raison.",
      tags: ["vivant","corps"]
    }
  ]
};
