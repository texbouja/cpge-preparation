var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "part-anaproba-2",
  "level": "1",
  "url": "part-anaproba-2.html",
  "type": "Sujet",
  "number": "1",
  "title": "Mines 2020, MP, Maths 2",
  "body": " Mines 2020, MP, Maths 2     Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek. Elles seront clarifiées, voir corrigées pendant la séance dédiée.    Dans tout le texte, est un élément de . On note le -uplet dont toutes les coordonnées valent , c'est-à-dire le vecteur nul de .  On considère une variable aléatoire à valeurs dans , une suite de variables aléatoires mutuellement indépendantes suivant chacune la loi de et définies sur un même espace probabilisé. La suite de variables aléatoires est définie par et   La suite est une marche aléatoire de pas  , à valeurs dans .  On note la variable aléatoire à valeurs dans définie par   Autrement dit, est égal à si la marche aléatoire ne revient jamais en , au premier instant auquel cette marche aléatoire revient en sinon.  Pour , soit le cardinal du sous-ensemble   de . Le nombre est donc le nombre de points de visités par la marche aléatoire après pas.  Le but du problème est d'étudier asymptotiquement l'espérance de la variable aléatoire .  La partie D est indépendante des parties précédentes.     Préliminaires  Les cinq questions de cette partie sont indépendantes et utilisées dans les parties C et E.    Soit . En utilisant la factorisation , montrer que    La factorisation permet d'écrire :   En identifiant les coefficients de des deux côtés, on obtient :      Rappeler la formule de Stirling, puis déterminer un nombre réel tel que    La formule de Stirling donne :   En appliquant cette formule à , on obtient :   Ainsi, .     Si est un élément de , montrer, par exemple en utilisant une comparaison série-intégrale, que   Si est un élément de , montrer de même que    Pour , on utilise une comparaison série-intégrale. La fonction est décroissante, donc :   En calculant l'intégrale, on obtient :   On en déduit que :   Pour , on utilise une comparaison similaire :   Ainsi, on a :      Pour , on pose   Justifier, pour , la relation   Établir par ailleurs la relation   En déduire finalement un équivalent de lorsque tend vers .   On intègre par parties en posant et . On obtient :   Pour montrer que , on observe que est négligeable devant lorsque . Ainsi, l'intégrale est négligeable devant .  On en déduit que :      Pour , rappeler, sans donner de démonstration, le développement en série entière de sur . Justifier la formule :    Le développement en série entière de sur est :   Pour , on a :   En utilisant la formule des coefficients binomiaux généralisés, on obtient :   d'où :       Marches aléatoires, récurrence    On considère les fonctions et définies par les formules      Montrer que les séries entières définissant et ont un rayon de convergence supérieur ou égal à 1. Justifier alors que les fonctions et sont définies et de classe sur . Montrer que est définie et continue sur et que    Les séries entières définissant et sont de la forme avec . Par conséquent, leur rayon de convergence est au moins 1. Les fonctions et sont donc définies et de classe sur .  Pour , la série converge en car .     Si et sont des entiers naturels non nuls tels que , montrer que   En déduire que    L'événement signifie que la marche revient en pour la première fois à l'instant , puis revient à nouveau en à l'instant . Par indépendance des pas, on a :   En sommant sur , on obtient :      Montrer que   Déterminer la limite de lorsque , en discutant selon la valeur de .   En utilisant la relation de convolution des probabilités, on a :   En réorganisant les termes, on obtient :   Pour la limite de lorsque , on distingue deux cas :   Si , alors converge vers une valeur finie.  Si , alors diverge vers .      Soit une suite d'éléments de telle que la série entière ait un rayon de convergence 1 et que la série diverge. Montrer que    L'élément de étant fixé, on montrera qu'il existe tel que     La série diverge, donc pour tout , il existe un entier tel que . Pour , on a :   En choisissant suffisamment petit, on peut garantir que , ce qui montre que lorsque .     Montrer que la série est divergente si et seulement si .   Si , alors la marche revient presque sûrement en une infinité de fois, ce qui implique que diverge. Réciproquement, si diverge, alors la marche revient presque sûrement en , donc .     Pour , soit la variable de Bernoulli indicatrice de l'événement   Montrer que, pour :   En déduire que, pour :    L'événement correspond au fait que la marche visite un nouveau point à l'instant , ce qui équivaut à . Ainsi, .  En sommant sur , on obtient :      Conclure que    On pourra admettre et utiliser le théorème de Cesaro : si est une suite réelle convergeant vers le nombre réel , alors     Par le théorème de Cesaro, si , alors :   Ainsi, .      Les marches de Bernoulli sur    Dans cette question, est égal à 1 et on note donc simplement . Par ailleurs, est un élément de , et la loi de est donnée par     Pour , déterminer et justifier l'égalité :    Pour , la marche ne peut pas revenir à l'origine en un nombre impair de pas, donc .  Pour , on utilise le fait que la marche doit faire autant de pas à droite qu'à gauche. Le nombre de chemins possibles est , et chaque chemin a une probabilité . Ainsi :      Pour , donner une expression simple de . Exprimer en fonction de . Déterminer la loi de .   La fonction génératrice est donnée par :   Pour une marche de Bernoulli symétrique ( ), on a :   La probabilité que la marche ne revienne jamais à l'origine est :   La loi de est une loi géométrique modifiée, avec pour .     On suppose que . Donner un équivalent simple de lorsque tend vers . En déduire un équivalent simple de lorsque tend vers .   Pour , on a :   En utilisant la formule de Stirling, on obtient l'équivalent :   Pour , on utilise le résultat de la question 12 :       Un résultat asymptotique   Soient et deux suites d'éléments de . On suppose que est décroissante et que   On pose, pour :      Soient et deux entiers naturels tels que . Montrer que    Par définition, . Comme est décroissante, on a :   Pour la deuxième inégalité, on utilise la relation de convolution :      On suppose dans cette question qu'il existe une suite vérifiant pour assez grand et   Montrer que    En utilisant les hypothèses, on a :   Comme et , on en déduit que :      On suppose dans cette question qu'il existe tel que   En utilisant la question 17 pour une suite bien choisie, montrer que    Si , alors . En choisissant , on vérifie que :   Ainsi, d'après la question 17, on a :       La marche aléatoire simple sur    Soit . Montrer que    Cette égalité découle de la propriété de convolution des probabilités et de l'indépendance des pas de la marche aléatoire. En sommant sur tous les instants , on obtient :      Soit . Établir l'égalité    Pour une marche aléatoire simple sur , la probabilité de revenir à l'origine après pas est donnée par :   Ce résultat découle de la symétrie de la marche et de la formule des coefficients binomiaux.     Donner un équivalent simple de lorsque tend vers .   Pour une marche aléatoire simple sur , on a :   Ce résultat est un théorème classique dû à Erdős et Dvoretzky.     "
},
{
  "id": "part-anaproba-2-2-2",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-2",
  "type": "Mise en garde",
  "number": "1",
  "title": "",
  "body": " Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek. Elles seront clarifiées, voir corrigées pendant la séance dédiée.  "
},
{
  "id": "part-anaproba-2-2-4-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-3",
  "type": "Exercice",
  "number": "1.1",
  "title": "",
  "body": " Soit . En utilisant la factorisation , montrer que    La factorisation permet d'écrire :   En identifiant les coefficients de des deux côtés, on obtient :   "
},
{
  "id": "part-anaproba-2-2-4-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-4",
  "type": "Exercice",
  "number": "1.2",
  "title": "",
  "body": " Rappeler la formule de Stirling, puis déterminer un nombre réel tel que    La formule de Stirling donne :   En appliquant cette formule à , on obtient :   Ainsi, .  "
},
{
  "id": "part-anaproba-2-2-4-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-5",
  "type": "Exercice",
  "number": "1.3",
  "title": "",
  "body": " Si est un élément de , montrer, par exemple en utilisant une comparaison série-intégrale, que   Si est un élément de , montrer de même que    Pour , on utilise une comparaison série-intégrale. La fonction est décroissante, donc :   En calculant l'intégrale, on obtient :   On en déduit que :   Pour , on utilise une comparaison similaire :   Ainsi, on a :   "
},
{
  "id": "part-anaproba-2-2-4-6",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-6",
  "type": "Exercice",
  "number": "1.4",
  "title": "",
  "body": " Pour , on pose   Justifier, pour , la relation   Établir par ailleurs la relation   En déduire finalement un équivalent de lorsque tend vers .   On intègre par parties en posant et . On obtient :   Pour montrer que , on observe que est négligeable devant lorsque . Ainsi, l'intégrale est négligeable devant .  On en déduit que :   "
},
{
  "id": "part-anaproba-2-2-4-7",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-7",
  "type": "Exercice",
  "number": "1.5",
  "title": "",
  "body": " Pour , rappeler, sans donner de démonstration, le développement en série entière de sur . Justifier la formule :    Le développement en série entière de sur est :   Pour , on a :   En utilisant la formule des coefficients binomiaux généralisés, on obtient :   d'où :   "
},
{
  "id": "part-anaproba-2-2-5-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-3",
  "type": "Exercice",
  "number": "1.6",
  "title": "",
  "body": " Montrer que les séries entières définissant et ont un rayon de convergence supérieur ou égal à 1. Justifier alors que les fonctions et sont définies et de classe sur . Montrer que est définie et continue sur et que    Les séries entières définissant et sont de la forme avec . Par conséquent, leur rayon de convergence est au moins 1. Les fonctions et sont donc définies et de classe sur .  Pour , la série converge en car .  "
},
{
  "id": "part-anaproba-2-2-5-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-4",
  "type": "Exercice",
  "number": "1.7",
  "title": "",
  "body": " Si et sont des entiers naturels non nuls tels que , montrer que   En déduire que    L'événement signifie que la marche revient en pour la première fois à l'instant , puis revient à nouveau en à l'instant . Par indépendance des pas, on a :   En sommant sur , on obtient :   "
},
{
  "id": "part-anaproba-2-2-5-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-5",
  "type": "Exercice",
  "number": "1.8",
  "title": "",
  "body": " Montrer que   Déterminer la limite de lorsque , en discutant selon la valeur de .   En utilisant la relation de convolution des probabilités, on a :   En réorganisant les termes, on obtient :   Pour la limite de lorsque , on distingue deux cas :   Si , alors converge vers une valeur finie.  Si , alors diverge vers .   "
},
{
  "id": "part-anaproba-2-2-5-6",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-6",
  "type": "Exercice",
  "number": "1.9",
  "title": "",
  "body": " Soit une suite d'éléments de telle que la série entière ait un rayon de convergence 1 et que la série diverge. Montrer que    L'élément de étant fixé, on montrera qu'il existe tel que     La série diverge, donc pour tout , il existe un entier tel que . Pour , on a :   En choisissant suffisamment petit, on peut garantir que , ce qui montre que lorsque .  "
},
{
  "id": "part-anaproba-2-2-5-7",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-7",
  "type": "Exercice",
  "number": "1.10",
  "title": "",
  "body": " Montrer que la série est divergente si et seulement si .   Si , alors la marche revient presque sûrement en une infinité de fois, ce qui implique que diverge. Réciproquement, si diverge, alors la marche revient presque sûrement en , donc .  "
},
{
  "id": "part-anaproba-2-2-5-8",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-8",
  "type": "Exercice",
  "number": "1.11",
  "title": "",
  "body": " Pour , soit la variable de Bernoulli indicatrice de l'événement   Montrer que, pour :   En déduire que, pour :    L'événement correspond au fait que la marche visite un nouveau point à l'instant , ce qui équivaut à . Ainsi, .  En sommant sur , on obtient :   "
},
{
  "id": "part-anaproba-2-2-5-9",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-9",
  "type": "Exercice",
  "number": "1.12",
  "title": "",
  "body": " Conclure que    On pourra admettre et utiliser le théorème de Cesaro : si est une suite réelle convergeant vers le nombre réel , alors     Par le théorème de Cesaro, si , alors :   Ainsi, .  "
},
{
  "id": "part-anaproba-2-2-6-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-3",
  "type": "Exercice",
  "number": "1.13",
  "title": "",
  "body": " Pour , déterminer et justifier l'égalité :    Pour , la marche ne peut pas revenir à l'origine en un nombre impair de pas, donc .  Pour , on utilise le fait que la marche doit faire autant de pas à droite qu'à gauche. Le nombre de chemins possibles est , et chaque chemin a une probabilité . Ainsi :   "
},
{
  "id": "part-anaproba-2-2-6-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-4",
  "type": "Exercice",
  "number": "1.14",
  "title": "",
  "body": " Pour , donner une expression simple de . Exprimer en fonction de . Déterminer la loi de .   La fonction génératrice est donnée par :   Pour une marche de Bernoulli symétrique ( ), on a :   La probabilité que la marche ne revienne jamais à l'origine est :   La loi de est une loi géométrique modifiée, avec pour .  "
},
{
  "id": "part-anaproba-2-2-6-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-5",
  "type": "Exercice",
  "number": "1.15",
  "title": "",
  "body": " On suppose que . Donner un équivalent simple de lorsque tend vers . En déduire un équivalent simple de lorsque tend vers .   Pour , on a :   En utilisant la formule de Stirling, on obtient l'équivalent :   Pour , on utilise le résultat de la question 12 :   "
},
{
  "id": "part-anaproba-2-2-7-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-3",
  "type": "Exercice",
  "number": "1.16",
  "title": "",
  "body": " Soient et deux entiers naturels tels que . Montrer que    Par définition, . Comme est décroissante, on a :   Pour la deuxième inégalité, on utilise la relation de convolution :   "
},
{
  "id": "part-anaproba-2-2-7-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-4",
  "type": "Exercice",
  "number": "1.17",
  "title": "",
  "body": " On suppose dans cette question qu'il existe une suite vérifiant pour assez grand et   Montrer que    En utilisant les hypothèses, on a :   Comme et , on en déduit que :   "
},
{
  "id": "part-anaproba-2-2-7-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-5",
  "type": "Exercice",
  "number": "1.18",
  "title": "",
  "body": " On suppose dans cette question qu'il existe tel que   En utilisant la question 17 pour une suite bien choisie, montrer que    Si , alors . En choisissant , on vérifie que :   Ainsi, d'après la question 17, on a :   "
},
{
  "id": "part-anaproba-2-2-8-2",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-8-2",
  "type": "Exercice",
  "number": "1.19",
  "title": "",
  "body": " Soit . Montrer que    Cette égalité découle de la propriété de convolution des probabilités et de l'indépendance des pas de la marche aléatoire. En sommant sur tous les instants , on obtient :   "
},
{
  "id": "part-anaproba-2-2-8-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-8-3",
  "type": "Exercice",
  "number": "1.20",
  "title": "",
  "body": " Soit . Établir l'égalité    Pour une marche aléatoire simple sur , la probabilité de revenir à l'origine après pas est donnée par :   Ce résultat découle de la symétrie de la marche et de la formule des coefficients binomiaux.  "
},
{
  "id": "part-anaproba-2-2-8-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-8-4",
  "type": "Exercice",
  "number": "1.21",
  "title": "",
  "body": " Donner un équivalent simple de lorsque tend vers .   Pour une marche aléatoire simple sur , on a :   Ce résultat est un théorème classique dû à Erdős et Dvoretzky.  "
},
{
  "id": "part-anaproba-3",
  "level": "1",
  "url": "part-anaproba-3.html",
  "type": "Sujet",
  "number": "2",
  "title": "Mines 2024, MP, Maths 1",
  "body": " Mines 2024, MP, Maths 1  Généralisation d’une intégrale de Dirichlet et application   Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek avec une exigence de fournir des solutions détaillées. Les réponses seront optimisées, voir corrigées durant la séance    Le but de ce sujet est de calculer l’intégrale de Dirichlet généralisée et d’utiliser ce calcul pour évaluer une espérance.    Calcul d’une intégrale   Dans cette partie, on fixe .     Montrer que pour tout , la fonction définie par est définie et intégrable sur .   Pour montrer que est définie et intégrable sur , on procède en deux étapes :    Définie sur : La fonction est définie pour tout car le dénominateur ne s'annule pas. En effet, pour et , on a (car est un nombre complexe de module et ne peut pas annuler le ).  Intégrable sur : Pour montrer l'intégrabilité, on étudie le comportement de aux bornes de l'intervalle :  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement supérieur à , ce qui garantit que est intégrable au voisinage de .  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement inférieur à , ce qui garantit que est intégrable au voisinage de .      Ainsi, est bien définie et intégrable sur .   La justification du fait que soit bien définie n'est pas très claire. Le reste est correct.  Si alors si et seulement si . Le nombre serait alors un réel négatif. Ce qui n'est possible que si , ce qui est exclu puisque .     Soit la fonction définie par Montrer que la fonction est de classe sur et que :   soit , montrer que pour tout et ,    Pour montrer que est de classe , on utilise le théorème de dérivation sous le signe intégral. On vérifie les hypothèses suivantes :  Continuité de l'intégrande : La fonction est continue en pour tout .  Dérivabilité par rapport à : La dérivée partielle de l'intégrande par rapport à est : Cette dérivée est continue en et en .  Domination : Pour tout avec , on a : Cela permet de majorer la dérivée partielle par une fonction intégrable en , ce qui justifie l'application du théorème de dérivation sous le signe intégral.    Ainsi, est de classe sur , et sa dérivée est donnée par :    Des imprécisions sur les propriétés à vérifier de la fonction . La domination est correcte mais manque de détails. Vu la générécité de ce genre de questions, en voilà une rédaction alternative :  Considérons la fonction   est de classe sur par opérations usuelles sur les fonctions de classe donc les fonctions partielles et sont continues pour tout et et sont continues pour tout . Par ailleurs     les intégrales sont convergentes d'après la question précédentes.   Soit comme suggéré par l'indication de l'énoncé . Fixons  La fonction est décroissante sur donc ce qui amène, par parité de la fonction  On en déduit que La fonction est continue et elle est intégrable sur car avec et .     Toutes les hypothèses sont réunies pour pouvoir appliquer la formule de Leibniz sur l'intervalle . Le réel étant quelconque dans on conclut que  La fonction est de classe sur et      Soit la fonction définie par Montrer que la fonction est de classe sur et que pour tout  où est la fonction définie par   Calculer et En déduire que la fonction est constante sur .     Classe de : La fonction est le produit de deux fonctions de classe :   est de classe car elle est exponentielle.  est de classe d'après la question précédente.  Ainsi, est de classe sur .  Calcul de : En dérivant , on obtient : En utilisant l'expression de trouvée à la question précédente, on a : En simplifiant, on obtient : où .  Calcul de et :   En , on a .  En , on a . Comme , on a , donc .    Constance de : On a montré que pour tout . Ainsi, est constante sur cet intervalle.      Montrer que pour tout       Expression de : On utilise la définition de et la relation trigonométrique . Ainsi : En développant, on obtient :   Expression intégrale : En utilisant l'expression de , on a : Cela découle d'une manipulation algébrique du dénominateur et de l'utilisation de la parité de la fonction.      En déduire que : où .     Changement de variable : On effectue le changement de variable . Ainsi, , et .  Transformation de l'intégrale : En substituant dans l'intégrale, on obtient :   Conclusion : On en déduit que :       Montrer, en utilisant le théorème de convergence dominée, que :      Application du théorème de convergence dominée : Lorsque , on a . Ainsi, l'intégrale devient :   Justification de la convergence : La fonction intégrée est dominée par , qui est intégrable sur . Par le théorème de convergence dominée, on peut intervertir limite et intégrale.      En déduire que      Évaluation de la limite : D'après la question précédente, on a :   Expression de : Comme est constante (d'après la question 3), on a :   Conclusion : En utilisant la définition de , on obtient :        Une expression (utile) de la fonction sinus   On rappelle que est un élément de fixé.    Montrer que      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Changement de variable dans la seconde intégrale : Dans la seconde intégrale, on effectue le changement de variable . Ainsi, et . Les bornes deviennent à , et on obtient :   Conclusion : En combinant les deux intégrales, on obtient :       Montrer que :      Développement en série géométrique : On utilise le développement en série géométrique de pour :   Intégration terme à terme : En multipliant par et en intégrant terme à terme, on obtient :   Calcul des intégrales : Chaque intégrale vaut :   Conclusion : Ainsi, on a :       Établir l’identité      Utilisation de la question 8 : D'après la question 8, on a :   Développement en série des deux termes : En utilisant le développement en série géométrique pour chaque terme, on obtient :    Conclusion : En additionnant les deux séries, on obtient l'identité souhaitée :       En déduire que l’on a      Utilisation de la question 7 : D'après la question 7, on a :   Expression de la série : En utilisant l'identité de la question 10, on peut écrire :   Simplification de la série : En regroupant les termes et en simplifiant, on obtient :       En déduire enfin que :      Substitution de : On pose , ce qui donne . En substituant dans l'identité de la question 11, on obtient :   Simplification : En multipliant par et en réarrangeant les termes, on obtient :        Calcul d'une intégrale de Dirichlet généralisée   Montrer que l’intégrale converge et que :      Convergence de l'intégrale : L'intégrale converge car :  En , le numérateur se comporte comme , donc l'intégrande est équivalente à , qui est intégrable.  En , l'intégrande est dominée par , qui est intégrable.    Transformation de l'intégrale : En intégrant par parties, on pose : Ainsi, et . L'intégration par parties donne :       Montrer que pour tout :      Changement de variable : On effectue le changement de variable . Ainsi, , et . Les bornes deviennent à .  Simplification de l'intégrande : En utilisant la périodicité de et , on a :  Ainsi, l'intégrale devient :   Transformation en intégrale sur : En utilisant la symétrie de la fonction cosinus et sinus, on peut réécrire l'intégrale sur :       En déduire que :      Sommation des intégrales : En sommant les intégrales sur chaque intervalle , on obtient :   Utilisation de la question 14 : En utilisant le résultat de la question 14, on peut réécrire chaque intégrale comme :   Conclusion : Ainsi, on a :       En déduire que :      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Utilisation de la question 15 : En utilisant le résultat de la question 15, on peut réécrire la seconde intégrale comme :   Simplification : En combinant les deux intégrales, on obtient :        Calcul de   Toutes les variables aléatoires sont définies sur un même espace probabilisé .  Soient des variables aléatoires indépendantes, de même loi donnée par : Pour tout , on note .    Déterminer, pour tout , et .     Espérance de : Comme les sont indépendantes et de même loi, on a : Or, , donc :   Variance de : La variance de est donnée par : Or, , donc :       Soient et deux variables aléatoires indépendantes prenant toutes deux un nombre fini de valeurs réelles. On suppose que et suivent la même loi.  Montrer que :      Indépendance de et : Comme et sont indépendantes, on a :   Linéarité de l'espérance : En utilisant la linéarité de l'espérance, on obtient :   Symétrie de et : Comme et suivent la même loi, on a . Ainsi, , et il reste :   Conclusion : Comme et sont indépendantes, on a : Ainsi, on obtient :       En déduire que pour tout , et pour tout :      Récurrence sur : On procède par récurrence sur .  Cas de base : Pour , on a , donc : Comme prend les valeurs avec probabilité , on a : Ainsi, la propriété est vraie pour .  Hérédité : Supposons que la propriété est vraie pour un certain , c'est-à-dire : On montre qu'elle est vraie pour . On a : Comme et sont indépendantes, on peut appliquer la question 20 : D'après l'hypothèse de récurrence et le cas de base, on a : Ainsi, la propriété est vraie pour .  Conclusion : Par récurrence, la propriété est vraie pour tout .      Soient tels que et . Montrer que : où pour réel non nul. En déduire que :      Preuve de : Si , alors . Si , alors .  Application à et : On a . Comme , on peut appliquer la formule précédente : En prenant l'espérance, on obtient : Comme est indépendante de et , on a :       Montrer que pour tout :      Cas : Si , alors , donc l'intégrale est nulle, ce qui correspond à .  Cas : On effectue le changement de variable , ce qui donne et . Ainsi, l'intégrale devient :   Calcul de l'intégrale : On sait que : Ainsi, on obtient :       En déduire que pour tout :      Expression de : On utilise la relation entre l'espérance de la valeur absolue et l'intégrale de la fonction caractéristique. Pour une variable aléatoire , on a : où est la fonction caractéristique de .  Application à : La fonction caractéristique de est donnée par : Ainsi, on a :       Conclure que :      Utilisation de la question 24 : D'après la question 24, on a :   Calcul de l'intégrale pour et : En utilisant les résultats des parties précédentes, on peut montrer que :    Conclusion : En combinant ces résultats, on obtient :        "
},
{
  "id": "part-anaproba-3-2-2",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-2",
  "type": "Mise en garde",
  "number": "2",
  "title": "",
  "body": " Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek avec une exigence de fournir des solutions détaillées. Les réponses seront optimisées, voir corrigées durant la séance  "
},
{
  "id": "part-anaproba-3-2-4-3",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-3",
  "type": "Exercice",
  "number": "2.1",
  "title": "",
  "body": " Montrer que pour tout , la fonction définie par est définie et intégrable sur .   Pour montrer que est définie et intégrable sur , on procède en deux étapes :    Définie sur : La fonction est définie pour tout car le dénominateur ne s'annule pas. En effet, pour et , on a (car est un nombre complexe de module et ne peut pas annuler le ).  Intégrable sur : Pour montrer l'intégrabilité, on étudie le comportement de aux bornes de l'intervalle :  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement supérieur à , ce qui garantit que est intégrable au voisinage de .  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement inférieur à , ce qui garantit que est intégrable au voisinage de .      Ainsi, est bien définie et intégrable sur .   La justification du fait que soit bien définie n'est pas très claire. Le reste est correct.  Si alors si et seulement si . Le nombre serait alors un réel négatif. Ce qui n'est possible que si , ce qui est exclu puisque .  "
},
{
  "id": "part-anaproba-3-2-4-4",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-4",
  "type": "Exercice",
  "number": "2.2",
  "title": "",
  "body": " Soit la fonction définie par Montrer que la fonction est de classe sur et que :   soit , montrer que pour tout et ,    Pour montrer que est de classe , on utilise le théorème de dérivation sous le signe intégral. On vérifie les hypothèses suivantes :  Continuité de l'intégrande : La fonction est continue en pour tout .  Dérivabilité par rapport à : La dérivée partielle de l'intégrande par rapport à est : Cette dérivée est continue en et en .  Domination : Pour tout avec , on a : Cela permet de majorer la dérivée partielle par une fonction intégrable en , ce qui justifie l'application du théorème de dérivation sous le signe intégral.    Ainsi, est de classe sur , et sa dérivée est donnée par :    Des imprécisions sur les propriétés à vérifier de la fonction . La domination est correcte mais manque de détails. Vu la générécité de ce genre de questions, en voilà une rédaction alternative :  Considérons la fonction   est de classe sur par opérations usuelles sur les fonctions de classe donc les fonctions partielles et sont continues pour tout et et sont continues pour tout . Par ailleurs     les intégrales sont convergentes d'après la question précédentes.   Soit comme suggéré par l'indication de l'énoncé . Fixons  La fonction est décroissante sur donc ce qui amène, par parité de la fonction  On en déduit que La fonction est continue et elle est intégrable sur car avec et .     Toutes les hypothèses sont réunies pour pouvoir appliquer la formule de Leibniz sur l'intervalle . Le réel étant quelconque dans on conclut que  La fonction est de classe sur et   "
},
{
  "id": "part-anaproba-3-2-4-5",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-5",
  "type": "Exercice",
  "number": "2.3",
  "title": "",
  "body": " Soit la fonction définie par Montrer que la fonction est de classe sur et que pour tout  où est la fonction définie par   Calculer et En déduire que la fonction est constante sur .     Classe de : La fonction est le produit de deux fonctions de classe :   est de classe car elle est exponentielle.  est de classe d'après la question précédente.  Ainsi, est de classe sur .  Calcul de : En dérivant , on obtient : En utilisant l'expression de trouvée à la question précédente, on a : En simplifiant, on obtient : où .  Calcul de et :   En , on a .  En , on a . Comme , on a , donc .    Constance de : On a montré que pour tout . Ainsi, est constante sur cet intervalle.    "
},
{
  "id": "part-anaproba-3-2-4-6",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-6",
  "type": "Exercice",
  "number": "2.4",
  "title": "",
  "body": " Montrer que pour tout       Expression de : On utilise la définition de et la relation trigonométrique . Ainsi : En développant, on obtient :   Expression intégrale : En utilisant l'expression de , on a : Cela découle d'une manipulation algébrique du dénominateur et de l'utilisation de la parité de la fonction.    "
},
{
  "id": "part-anaproba-3-2-4-7",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-7",
  "type": "Exercice",
  "number": "2.5",
  "title": "",
  "body": " En déduire que : où .     Changement de variable : On effectue le changement de variable . Ainsi, , et .  Transformation de l'intégrale : En substituant dans l'intégrale, on obtient :   Conclusion : On en déduit que :     "
},
{
  "id": "part-anaproba-3-2-4-8",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-8",
  "type": "Exercice",
  "number": "2.6",
  "title": "",
  "body": " Montrer, en utilisant le théorème de convergence dominée, que :      Application du théorème de convergence dominée : Lorsque , on a . Ainsi, l'intégrale devient :   Justification de la convergence : La fonction intégrée est dominée par , qui est intégrable sur . Par le théorème de convergence dominée, on peut intervertir limite et intégrale.    "
},
{
  "id": "part-anaproba-3-2-4-9",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-9",
  "type": "Exercice",
  "number": "2.7",
  "title": "",
  "body": " En déduire que      Évaluation de la limite : D'après la question précédente, on a :   Expression de : Comme est constante (d'après la question 3), on a :   Conclusion : En utilisant la définition de , on obtient :     "
},
{
  "id": "part-anaproba-3-2-5-3",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-3",
  "type": "Exercice",
  "number": "2.8",
  "title": "",
  "body": " Montrer que      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Changement de variable dans la seconde intégrale : Dans la seconde intégrale, on effectue le changement de variable . Ainsi, et . Les bornes deviennent à , et on obtient :   Conclusion : En combinant les deux intégrales, on obtient :     "
},
{
  "id": "part-anaproba-3-2-5-4",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-4",
  "type": "Exercice",
  "number": "2.9",
  "title": "",
  "body": " Montrer que :      Développement en série géométrique : On utilise le développement en série géométrique de pour :   Intégration terme à terme : En multipliant par et en intégrant terme à terme, on obtient :   Calcul des intégrales : Chaque intégrale vaut :   Conclusion : Ainsi, on a :     "
},
{
  "id": "part-anaproba-3-2-5-5",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-5",
  "type": "Exercice",
  "number": "2.10",
  "title": "",
  "body": " Établir l’identité      Utilisation de la question 8 : D'après la question 8, on a :   Développement en série des deux termes : En utilisant le développement en série géométrique pour chaque terme, on obtient :    Conclusion : En additionnant les deux séries, on obtient l'identité souhaitée :     "
},
{
  "id": "part-anaproba-3-2-5-6",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-6",
  "type": "Exercice",
  "number": "2.11",
  "title": "",
  "body": " En déduire que l’on a      Utilisation de la question 7 : D'après la question 7, on a :   Expression de la série : En utilisant l'identité de la question 10, on peut écrire :   Simplification de la série : En regroupant les termes et en simplifiant, on obtient :     "
},
{
  "id": "part-anaproba-3-2-5-7",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-7",
  "type": "Exercice",
  "number": "2.12",
  "title": "",
  "body": " En déduire enfin que :      Substitution de : On pose , ce qui donne . En substituant dans l'identité de la question 11, on obtient :   Simplification : En multipliant par et en réarrangeant les termes, on obtient :     "
},
{
  "id": "part-anaproba-3-2-6-2",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-2",
  "type": "Exercice",
  "number": "2.13",
  "title": "",
  "body": " Montrer que l’intégrale converge et que :      Convergence de l'intégrale : L'intégrale converge car :  En , le numérateur se comporte comme , donc l'intégrande est équivalente à , qui est intégrable.  En , l'intégrande est dominée par , qui est intégrable.    Transformation de l'intégrale : En intégrant par parties, on pose : Ainsi, et . L'intégration par parties donne :     "
},
{
  "id": "part-anaproba-3-2-6-3",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-3",
  "type": "Exercice",
  "number": "2.14",
  "title": "",
  "body": " Montrer que pour tout :      Changement de variable : On effectue le changement de variable . Ainsi, , et . Les bornes deviennent à .  Simplification de l'intégrande : En utilisant la périodicité de et , on a :  Ainsi, l'intégrale devient :   Transformation en intégrale sur : En utilisant la symétrie de la fonction cosinus et sinus, on peut réécrire l'intégrale sur :     "
},
{
  "id": "part-anaproba-3-2-6-4",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-4",
  "type": "Exercice",
  "number": "2.15",
  "title": "",
  "body": " En déduire que :      Sommation des intégrales : En sommant les intégrales sur chaque intervalle , on obtient :   Utilisation de la question 14 : En utilisant le résultat de la question 14, on peut réécrire chaque intégrale comme :   Conclusion : Ainsi, on a :     "
},
{
  "id": "part-anaproba-3-2-6-5",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-5",
  "type": "Exercice",
  "number": "2.16",
  "title": "",
  "body": " En déduire que :      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Utilisation de la question 15 : En utilisant le résultat de la question 15, on peut réécrire la seconde intégrale comme :   Simplification : En combinant les deux intégrales, on obtient :     "
},
{
  "id": "part-anaproba-3-2-7-3",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-7-3",
  "type": "Exercice",
  "number": "2.17",
  "title": "",
  "body": " Déterminer, pour tout , et .     Espérance de : Comme les sont indépendantes et de même loi, on a : Or, , donc :   Variance de : La variance de est donnée par : Or, , donc :     "
},
{
  "id": "part-anaproba-3-2-7-4",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-7-4",
  "type": "Exercice",
  "number": "2.18",
  "title": "",
  "body": " Soient et deux variables aléatoires indépendantes prenant toutes deux un nombre fini de valeurs réelles. On suppose que et suivent la même loi.  Montrer que :      Indépendance de et : Comme et sont indépendantes, on a :   Linéarité de l'espérance : En utilisant la linéarité de l'espérance, on obtient :   Symétrie de et : Comme et suivent la même loi, on a . Ainsi, , et il reste :   Conclusion : Comme et sont indépendantes, on a : Ainsi, on obtient :     "
},
{
  "id": "part-anaproba-3-2-7-5",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-7-5",
  "type": "Exercice",
  "number": "2.19",
  "title": "",
  "body": " En déduire que pour tout , et pour tout :      Récurrence sur : On procède par récurrence sur .  Cas de base : Pour , on a , donc : Comme prend les valeurs avec probabilité , on a : Ainsi, la propriété est vraie pour .  Hérédité : Supposons que la propriété est vraie pour un certain , c'est-à-dire : On montre qu'elle est vraie pour . On a : Comme et sont indépendantes, on peut appliquer la question 20 : D'après l'hypothèse de récurrence et le cas de base, on a : Ainsi, la propriété est vraie pour .  Conclusion : Par récurrence, la propriété est vraie pour tout .    "
},
{
  "id": "part-anaproba-3-2-7-6",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-7-6",
  "type": "Exercice",
  "number": "2.20",
  "title": "",
  "body": " Soient tels que et . Montrer que : où pour réel non nul. En déduire que :      Preuve de : Si , alors . Si , alors .  Application à et : On a . Comme , on peut appliquer la formule précédente : En prenant l'espérance, on obtient : Comme est indépendante de et , on a :     "
},
{
  "id": "part-anaproba-3-2-7-7",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-7-7",
  "type": "Exercice",
  "number": "2.21",
  "title": "",
  "body": " Montrer que pour tout :      Cas : Si , alors , donc l'intégrale est nulle, ce qui correspond à .  Cas : On effectue le changement de variable , ce qui donne et . Ainsi, l'intégrale devient :   Calcul de l'intégrale : On sait que : Ainsi, on obtient :     "
},
{
  "id": "part-anaproba-3-2-7-8",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-7-8",
  "type": "Exercice",
  "number": "2.22",
  "title": "",
  "body": " En déduire que pour tout :      Expression de : On utilise la relation entre l'espérance de la valeur absolue et l'intégrale de la fonction caractéristique. Pour une variable aléatoire , on a : où est la fonction caractéristique de .  Application à : La fonction caractéristique de est donnée par : Ainsi, on a :     "
},
{
  "id": "part-anaproba-3-2-7-9",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-7-9",
  "type": "Exercice",
  "number": "2.23",
  "title": "",
  "body": " Conclure que :      Utilisation de la question 24 : D'après la question 24, on a :   Calcul de l'intégrale pour et : En utilisant les résultats des parties précédentes, on peut montrer que :    Conclusion : En combinant ces résultats, on obtient :     "
},
{
  "id": "part-anaproba-4",
  "level": "1",
  "url": "part-anaproba-4.html",
  "type": "Sujet",
  "number": "3",
  "title": "XENS 2024, MP, Maths B",
  "body": " XENS 2024, MP, Maths B   Solutions périodiques d'équations différentielles linéaire   Notations  On note l'ensemble des entiers naturels, l'ensemble des entiers naturels non nuls, l'ensemble des entiers relatifs, l'ensemble des nombres réels et l'ensemble des nombres complexes. On note également l'ensemble des nombres complexes non nuls.  Si désigne un -espace vectoriel et si sont des éléments de , on note Vect le sous-espace vectoriel de engendré par les vecteurs .  Si est un entier et si désigne un -espace vectoriel de dimension finie, on note l'ensemble des fonctions de classe de dans .  Soit un -espace vectoriel normé de dimension finie. Si est un ouvert de et une fonction différentiable, pour tout on note la différentielle de en .  On rappelle que est alors un endomorphisme -linéaire de . Si est un endomorphisme -linéaire de , on note sa norme d'opérateur, c'est-à-dire   Pour et un nombre réel positif, on note la boule ouverte de centre et rayon et la boule fermée de centre et rayon .  On note Id l'application identité de dans .  Si et désignent deux entiers naturels non nuls, on note l'ensemble des matrices à lignes et colonnes à coefficients dans . Si , on note pour et GL l'ensemble des matrices inversibles de . On identifie également le -espace vectoriel avec le -espace vectoriel des vecteurs colonnes .  Si , on note exp  l'exponentielle de la matrice .    PREMIÈRE PARTIE   Soit une application continue, périodique de période . On considère l'équation différentielle      Justifier l'existence de deux solutions et dans à (1) telles que :   Justifier que vect est l'ensemble des solutions de (1) dans .   L'équation (1) est une équation différentielle linéaire scalaire homogène d'ordre 2. Elle est normalisée et la fonction est continue sur . Le théorème de Cauchy-Lipschitz implique alors l'existence et l'unicité de deux solutions et sur telles que :  Par ailleurs le wronksien de vérifie donc est un système foncamental de solution de l'équation homogène . C'est une base de l'ensemble des solutions de .  Montrer que :    L'équation du wronskien de (1) s'écrit ici   Le wronskien de et est donc une fonction constante. Puisque alors      Montrer que si est une solution de (1), alors la fonction l'est aussi. En déduire que pour tout :    Soit une solution sur de (1) et posons pour tout . On a pour tout ,   Grâce à la -périodicité de la fonction , on a donc   La fonction est donc une solution sur de l'équation (1).  Ensuite, puisque est une base de , il existe des scalaires tels que . En dérivant cette expression et appliquant et à 0 on obtient   soit et . Ainsi      Soit , et soit tel que . Montrer que les trois assertions suivantes sont équivalentes.  a. L'équation (1) possède une solution non nulle qui vérifie :   b. Le nombre complexe est solution de l'équation d'inconnue :   c. L'équation différentielle (1) possède une solution non nulle telle que :   où est une fonction -périodique.   Introduisons l'application linéaire :   Selon la question précédente, est bien à valeurs dans et elle vérifie   Sa matrice dans la base de est en outre :   et de ce fait son polynôme caractéristique est   (a) ⇔ (b) La propriété (a) équivaut à dire que est une valeur propre de . La propriété (b), que est une racine de . Les deux propriétés sont donc équivalentes.  (a) ⇔ (c) Considérons une solution non nulle quelconque de (1) et posons pour tout . La fonction est de classe comme produit de fonction de classe et pour tout on a les équivalences   est donc -périodique si seulement si vérifie la propriété (a). Ainsi :      Soient les racines complexes de l'équation d'inconnue :    Montrer que si et si est un nombre complexe tel que , alors pour toute solution de (1), il existe deux fonctions -périodiques et , ainsi que deux nombres complexes et tels que    Supposons que . Le polynôme caractéristique est donc scindé à racines simples et de ce fait est diagonalisable. En outre donc si on pose alors . Considérons ensuite une base de formée de vecteur propre respectivement associés à et à . Selon la question précédente, il existe des fonctions -périodiques et de classe telles que pour tout   étant une base de on a donc    Supposons que . Montrer que et que l'équation (1) admet une solution périodique dans .   Supposons que alors et donc . Soit un vecteur propre de associé à . Selon la question précédente il existe une fonction  -périodique et de classe telle que   Si : alors est -périodique.  Si : alors et donc est -périodique.  Dans tous les cas on a donc      DEUXIÈME PARTIE   Soit et soit un ouvert de contenant . Soit une application de classe sur telle que .     Soient un ouvert convexe de et une fonction de classe de dans . On suppose qu'il existe un réel tel que pour tout , .   Montrer que pour tous et dans , on a .   Soient deux éléments de . L'ouvert étant convexe, la fonction   est bien définie et elle est de classe par composition de fonctions de classe . En outre, on a par règle de différentiation d'une composée :   et donc   L'inégalité des accroissements finis appliquée à la fonction vectorielle entre 0 et 1 donne ensuite    Montrer qu'il existe un nombre réel tel que et    Soit un réel tel que . Considérons la fonction définie sur le convexe par   est de classe sur comme combinaison linéaire de fonctions de classe et on a   L'application est continue donc il existe un tel que   D'après la question précédente, on a donc   Soit   Et comme , on en déduit que   Quitte à remplacer par un rayon légèrement plus petit, on a démontré que    Montrer que pour tout , l'application linéaire est injective.   Soit . Par différentiabilité de en , il existe tel que pour tout vecteur vérifiant , on ait et   et donc   Puisque est dans la boule ouverte , en posant , on a . Si est un vecteur de tel que , alors et donc, d'après la question précédente,   Quitte à remplacer par , on peut ainsi écrire   Si maintenant est un vecteur non nul quelconque de , alors ceci implique que   et par linéarité de l'application ,   On en déduit que Ker et ainsi      Soit tel que .   Montrer que l'application   admet un minimum atteint en un point de .   En tant qu'application de classe , est continue. Par composition d'applications continues, est donc continue sur le compact . Elle y est donc bornée et atteint ses bornes. D'où l'existence de tel que   Supposons maintenant que est sur la sphère . On aura alors      ou encore et donc . On en déduit que soit est dans , soit il est sur la sphère mais dans ce cas atteint aussi son minimum en qui est dans . Dans tous les cas :    Montrer que .   Nous allons traiter le cas où la norme dérive d'un produit scalaire de .  Posons alors pour tout   est une application de classe sur avec pour tout :   est la composée de avec l'application de classe , , elle est donc de classe par composition d'application de classe et pour tout   Soit   admet un minimum local au point de l'ouvert donc sa différentielle est nulle en . Ce qui donne   Mais puisque est un automorphisme de , cela implique que le vecteur est orthogonal à et en particulier à lui-même. Il est donc nul.      On note et .   Justifier que et sont des ouverts de .   est la boule ouverte de centre et de rayon , c'est donc un ouvert de . Ensuite, est un ouvert relatif de comme image réciproque d'un ouvert de par une application continue. Comme est lui-même un ouvert de , alors est un ouvert de . Finalement, est un ouvert de puisque c'est l'intersection de deux ouverts de .    Montrer que   est une bijection continue de sur dont la réciproque est une fonction continue sur .   Soit . On a donc . Ainsi, l'application est bien définie de dans . Si maintenant est un élément de , alors et donc il existe, selon la question 6 (sol. 6), tel que . Puisque , on a en fait . Ce qui montre que est une application surjective.  Selon la propriété (??) on a   Ce qui montre que induit une injection sur . Comme , alors est injective. À ce stade, on a justifié que est une bijection de sur . Notons sa bijection réciproque. La propriété (??) s'écrit alors (en posant et )   Montrant que est lipschitzienne et de ce fait qu'elle est continue. Conclusions :      TROISIÈME PARTIE   Soit . On note l'ensemble des éléments de de la forme où est un polynôme. On note      Justifier que est un sous-groupe abélien de .   Justifier que est un sous-groupe abélien de .   est tout simplement le groupe des inversibles de l'anneau . Il est contenu dans donc il en est un sous-groupe. Son caractère abélien découle en outre du fait que est un anneau commutatif.   Montrer que .   De par sa définition, on a . Réciproquement, considérons un élément et soit tel que . Notons le pgcd de avec , le polynôme minimal de , et considérons tel que . Le polynôme est alors divisible par et donc . La matrice étant inversible, cela implique que et donc que divise , signifiant que ou encore que . Ainsi, est premier avec .  Soit alors, selon le théorème de Bezout, tels que . En appliquant à , on obtient . Donc et par suite . Alors .      Montrer que .   En tant que sous-espace vectoriel (de dimension finie) de , est un fermé de . Soit maintenant . La suite des sommes partielles de la série est une suite d'éléments de car celui-ci est une sous-algèbre de . Cette suite converge vers . Puisque est un fermé, alors . L'inverse de est aussi dans pour les mêmes raisons puisque .      Pour , on définit l'application    Montrer que l'application   est injective.   Notons l'application en question et considérons des éléments et de tels que . Alors :   L'identification des parties réelles dans cette égalité donne , celle des parties imaginaires donne ensuite (car ). D'où l'injectivité de .   Soient et deux éléments de . Montrer qu'il existe tel que    Apparemment pour tout quelque soit le choix du réel . Considérons le polynôme   est non nul car donc il admet un nombre fini de racines qu'on va noter . Posons ensuite   Par injectivité de l'application introduite dans la question précédente, l'ensemble des couples tels que   est fini. L'ensemble est donc fini. Soit . Alors, pour tout , n'est pas une racine de . En posant pour tout   on a donc   Cette observation s'étend aussi à puisque et . Pour tout , est donc un élément de , soit    En déduire que est connexe par arcs.   et étant des points quelconques de , l'application ainsi définie est continue et elle est à valeurs dans . C'est un chemin continu qui permet de joindre à dans . Alors :      Montrer qu'il existe un ouvert de contenant et un ouvert de contenant la matrice identité tels que la fonction exponentielle induit une bijection continue de sur dont la réciproque est une fonction continue sur .   Montrer qu'il existe un ouvert de contenant et un ouvert de contenant la matrice identité tels que la fonction exponentielle induit une bijection continue de sur dont la réciproque est une fonction continue sur .   Considérons pour toute la suite de cette partie le -espace vectoriel et l'application   est bien à valeur dans d'après la question 9 (sol. 9). Rappelons en outre que est aussi un anneau commutatif.  Fixons et soit quelconque. Puisque alors   Par ailleurs, en utilisant une norme d'algèbre de , par convergence absolue de la série exponentielle on a   Sachant qu'au voisinage de 0 on a alors   En constant que l'application est linéaire, la relation (6) signifie alors que différentiable en et que   Ensuite pour tout , l'application est continue par continuité de l'application exponentielle donc est de classe sur . Par ailleurs, la relation (7) implique en particulier que   Finalement, selon la question 7b (sol. 7b),    En déduire que est un ouvert de .   Soit . Puisque la matrice est inversible et que est stable par multiplication matricielle, l'application est un automorphisme de . L'espace étant de dimension finie, et sont continues. L'ensemble est donc un ouvert de comme image réciproque par de l'ouvert de . Puisque alors et donc est un voisinage de . Alors      Montrer que est un fermé de .   Rappelons que . Pour tout , est inversible et donc on a bien . Soit maintenant une suite convergente d'éléments de et notons sa limite. Rappelons que pour toute matrice on a   Considérons l'application   est continue par composition des applications continues et . Donc la suite converge vers . Soit   La suite est ainsi convergente. Par continuité de l'application , la suite est convergente. Si on note sa limite alors et ainsi   La matrice est ainsi inversible. La suite converge vers la matrice . Puisque est un voisinage de alors il existe un entier tel que   Puisque , il existe tel que . Par suite   Comme alors . Finalement :      QUATRIÈME PARTIE   Soient un nombre réel et un entier naturel. Soit   une application continue sur et -périodique. On considère le système différentiel   où est une fonction de dans , de classe sur .     Montrer qu'il existe et une solution non nulle de (2) tels que    Notons l'ensemble des solutions de (2) et considérons l'endomorphisme   est linéaire et elle est bien à valeurs dans puisque pour toute solution de (2), la fonction est une solution de (2). En outre, est bijectif de bijection réciproque l'application   Ainsi, toutes les valeurs propres de sont non nulles. Soient donc une valeur propre de et un vecteur propre qui lui est associé. Alors      Soit une base de . Pour , on note la matrice dont les colonnes sont . On dispose ainsi d'une application de dans .   Montrer que pour tout nombre réel , et .   La famille est un système fondamental de solutions de (2), donc pour tout , la famille est une base de . Ce qui signifie que les vecteurs colonnes de la matrice forment une base de . Elle est donc inversible. Par ailleurs, on a   Ce qui ne représente que l'identification colonne par colonne dans l'égalité    Montrer que la matrice est indépendante de .   Considérons l'application définie sur par   Rappelons que pour tout   où est le cofacteur du coefficient d'indice de . Les fonctions et sont des sommes de produits des applications composantes de l'application . Elles sont donc de classe . L'application est donc de classe car ses composantes sont de classe . En dérivant ensuite la relation   on déduit que   est ainsi une fonction de classe comme produit de fonctions de classe à valeurs dans une algèbre normée et on a pour tout     Donc est partout constante sur l'intervalle .    En déduire qu'il existe telle que :    Posons . D'après la question précédente, on a   La matrice est inversible comme produit de matrices inversibles donc par surjectivité de l'application exp, il existe telle que . On a alors    En déduire qu'il existe une application continue sur et -périodique telle que    Posons pour tout ,   est inversible car c'est le produit de deux matrices inversibles. Les applications et sont continues (cette dernière est même de classe , résultat de cours) donc est continue comme produit d'applications continues à valeurs dans une algèbre normée. Soit ensuite .      Ce qui montre que est -périodique.       On admet qu'il existe deux matrices et de telles que est diagonalisable, est nilpotente et   Il existe donc une matrice et une matrice diagonale telles que .   Pour , on note les colonnes de la matrice . Montrer que est une base de l'espace .   Notons les vecteurs colonnes de la matrice . On a alors pour tout   Si est un vecteur quelconque de , alors pour tout   Ce qui signifie que la fonction est une solution du système différentiel . Les fonctions sont donc des éléments de . Ensuite, puisque et sont inversibles, alors est inversible et donc est une base de pour tout . Alors est un système fondamental de solutions du système .    Soient les nombres complexes tels que . Pour tous , et , on note la colonne de la matrice . Montrer que pour tout , on a   et vérifier que les applications sont continues sur et -périodiques.   Comme , et est nilpotente, alors pour tout , on peut écrire   Soit maintenant . Par définition du vecteur , on a et donc . Alors   En posant pour tout , , on voit que :     En déduire que si les parties réelles des pour sont strictement négatives et si est une solution quelconque de (2), alors    On suppose que les parties réelles des scalaires sont strictement négatives. Sachant que toute solution de (2) est une combinaison linéaire des fonctions , il suffit de justifier que   Soit donc . Les fonctions sont continues périodiques sur donc elles sont bornées sur . Notons un majorant commun de tous les réels pour tout . L'expression de donnée en (14) aboutit alors à   Puisque , alors et donc .       Montrer que si a une valeur propre de la forme avec et , alors (2) a une solution -périodique non nulle.   Montrer que si a une valeur propre de la forme avec et , alors (2) a une solution -périodique non nulle.   On suppose que admet une valeur propre de la forme avec et . Soit un vecteur propre qui lui est associé. La fonction est une solution de (2) et on a pour tout :   Les applications et sont respectivement -périodique et -périodique donc    On suppose qu'il existe tel que (2) possède une solution -périodique non nulle. Montrer que possède une valeur propre qui est une racine de l'unité.   On suppose que (2) admet une solution non nulle -périodique. Selon (11), il existe un vecteur non nul tel que pour tout . On a alors, en utilisant l'écriture (10)   Puisque et sont -périodiques, on a pour tout   et donc   signalant que 1 est une valeur propre de la matrice . Puisque les valeurs propres de sont les nombres de la forme où décrit le spectre complexe de , on en déduit que :      Dans cette question, on suppose que (2) possède une solution -périodique avec . Montrer que pour tous et , on a    On suppose que (2) admet une solution qui est -périodique avec . On a alors la relation   découlant de l'égalité . Et puisque est -périodique, on a même   ou encore, en posant   est un sous-groupe de . Supposons qu'il existe tel que . Puisque et , il existerait tels que et . Ce qui impliquerait que , entrant en contradiction avec l'hypothèse faite sur . n'est donc pas un sous-groupe discret de et donc il est dense dans . Pour un réel fixé, l'application est continue sur et elle est partout nulle sur la partie dense . Elle est donc partout nulle sur . On conclut en posant que      On suppose dans cette question qu'il n'existe pas de sous-espace vectoriel , différent de et , tel que, pour tout , est stable par . Donner une condition nécessaire et suffisante sur et sur pour que (2) ait au moins une solution périodique non nulle.   On suppose qu'il n'existe aucun sous-espace vectoriel (SEV) non trivial de qui soit stable par tous les , et que (2) admet au moins une solution non nulle qui est -périodique. Supposons que . Il découle de la question précédente que   Posons pour tout   et ensuite   de telle sorte que pour tout vecteur on ait   Revenons à la relation (15) et dérivons-la par rapport à :   et en recourant encore à (15)   Par récurrence sur , on démontre selon la même idée que   contient donc tous les vecteurs . Puisque la fonction est non nulle, alors le SEV est non nul. Il est inclus strictement dans car sinon on aura . Ce qui signifierait que l'application est constante, contredisant ainsi l'hypothèse de départ de la question.  Soient maintenant . Pour tout et pour tout , on a   et donc . Le SEV non trivial est donc stable par tous les , amenant une contradiction.  Ainsi . Il existe alors des entiers premiers entre eux tels que . La solution est -périodique et donc -périodique. D'après la question 18b (sol. 18b), la matrice admet une valeur propre qui est une racine de l'unité.  Réciproquement, supposons que admet une telle valeur propre et notons-la avec . Les valeurs propres de sont les complexes de la forme où est une valeur propre de . Il existe donc une valeur propre de telle que et par suite   ou encore   Selon la question 18a (sol. 18a), (2) admet bien une solution -périodique non nulle. Conclusions :      Soit le système différentiel   où est une fonction continue sur et -périodique. On suppose que 1 n'est pas valeur propre de . Montrer que (3) possède une unique solution -périodique.   On a vu que les solutions de l'équation homogène de (3) sont les fonctions de la forme où est le vecteur colonne des coordonnées de dans un système fondamental de solutions de celle-ci. La méthode de la variation des constantes revient donc ici à poser en supposant que est une fonction de classe . Dans ce cas    Les primitives de la fonction peuvent être écrites sous la forme   où est un vecteur quelconque de . Les solutions de (3) sont donc les fonctions   avec quelconque dans .  Soit et considérons la fonction ci-dessus. Selon la question 16d (sol. 16d), où est une fonction continue -périodique de dans . On a donc   Pour tout , on aura   Sachant que et sont -périodiques, avec la translation de la variable , on a   étant inversible, on a ainsi   Puisque 1 n'est pas une valeur propre de , alors est une matrice inversible. est donc -périodique si et seulement si   D'où l'existence et l'unicité d'une solution -périodique de (3). Résumons :        Résoudre le système différentiel   et déterminer sa forme normale (voir la question 16d).   En posant , le système différentiel s'écrit matriciellement   où   La fonction est ici -périodique. La matrice se réduit dans de la façon suivante :   donc   Comme à l'usage, on pose . Le système (16) équivaut alors à   Les solutions de ce dernier système sont données par   donc les solutions du système (16) sont données par   Les fonctions et forment un système fondamental de solutions de (16). Le système en est un autre lorsqu'on pose    Sur la base du système fondamental , on forme en posant   L'écriture normale de est donc avec      "
},
{
  "id": "part-anaproba-4-2-3-3",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-3-3",
  "type": "Exercice",
  "number": "3.1",
  "title": "",
  "body": " Justifier l'existence de deux solutions et dans à (1) telles que :   Justifier que vect est l'ensemble des solutions de (1) dans .   L'équation (1) est une équation différentielle linéaire scalaire homogène d'ordre 2. Elle est normalisée et la fonction est continue sur . Le théorème de Cauchy-Lipschitz implique alors l'existence et l'unicité de deux solutions et sur telles que :  Par ailleurs le wronksien de vérifie donc est un système foncamental de solution de l'équation homogène . C'est une base de l'ensemble des solutions de .  Montrer que :    L'équation du wronskien de (1) s'écrit ici   Le wronskien de et est donc une fonction constante. Puisque alors   "
},
{
  "id": "part-anaproba-4-2-3-4",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-3-4",
  "type": "Exercice",
  "number": "3.2",
  "title": "",
  "body": " Montrer que si est une solution de (1), alors la fonction l'est aussi. En déduire que pour tout :    Soit une solution sur de (1) et posons pour tout . On a pour tout ,   Grâce à la -périodicité de la fonction , on a donc   La fonction est donc une solution sur de l'équation (1).  Ensuite, puisque est une base de , il existe des scalaires tels que . En dérivant cette expression et appliquant et à 0 on obtient   soit et . Ainsi   "
},
{
  "id": "part-anaproba-4-2-3-5",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-3-5",
  "type": "Exercice",
  "number": "3.3",
  "title": "",
  "body": " Soit , et soit tel que . Montrer que les trois assertions suivantes sont équivalentes.  a. L'équation (1) possède une solution non nulle qui vérifie :   b. Le nombre complexe est solution de l'équation d'inconnue :   c. L'équation différentielle (1) possède une solution non nulle telle que :   où est une fonction -périodique.   Introduisons l'application linéaire :   Selon la question précédente, est bien à valeurs dans et elle vérifie   Sa matrice dans la base de est en outre :   et de ce fait son polynôme caractéristique est   (a) ⇔ (b) La propriété (a) équivaut à dire que est une valeur propre de . La propriété (b), que est une racine de . Les deux propriétés sont donc équivalentes.  (a) ⇔ (c) Considérons une solution non nulle quelconque de (1) et posons pour tout . La fonction est de classe comme produit de fonction de classe et pour tout on a les équivalences   est donc -périodique si seulement si vérifie la propriété (a). Ainsi :   "
},
{
  "id": "part-anaproba-4-2-3-6",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-3-6",
  "type": "Exercice",
  "number": "3.4",
  "title": "",
  "body": " Soient les racines complexes de l'équation d'inconnue :    Montrer que si et si est un nombre complexe tel que , alors pour toute solution de (1), il existe deux fonctions -périodiques et , ainsi que deux nombres complexes et tels que    Supposons que . Le polynôme caractéristique est donc scindé à racines simples et de ce fait est diagonalisable. En outre donc si on pose alors . Considérons ensuite une base de formée de vecteur propre respectivement associés à et à . Selon la question précédente, il existe des fonctions -périodiques et de classe telles que pour tout   étant une base de on a donc    Supposons que . Montrer que et que l'équation (1) admet une solution périodique dans .   Supposons que alors et donc . Soit un vecteur propre de associé à . Selon la question précédente il existe une fonction  -périodique et de classe telle que   Si : alors est -périodique.  Si : alors et donc est -périodique.  Dans tous les cas on a donc   "
},
{
  "id": "part-anaproba-4-2-4-3",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-4-3",
  "type": "Exercice",
  "number": "3.5",
  "title": "",
  "body": " Soient un ouvert convexe de et une fonction de classe de dans . On suppose qu'il existe un réel tel que pour tout , .   Montrer que pour tous et dans , on a .   Soient deux éléments de . L'ouvert étant convexe, la fonction   est bien définie et elle est de classe par composition de fonctions de classe . En outre, on a par règle de différentiation d'une composée :   et donc   L'inégalité des accroissements finis appliquée à la fonction vectorielle entre 0 et 1 donne ensuite    Montrer qu'il existe un nombre réel tel que et    Soit un réel tel que . Considérons la fonction définie sur le convexe par   est de classe sur comme combinaison linéaire de fonctions de classe et on a   L'application est continue donc il existe un tel que   D'après la question précédente, on a donc   Soit   Et comme , on en déduit que   Quitte à remplacer par un rayon légèrement plus petit, on a démontré que    Montrer que pour tout , l'application linéaire est injective.   Soit . Par différentiabilité de en , il existe tel que pour tout vecteur vérifiant , on ait et   et donc   Puisque est dans la boule ouverte , en posant , on a . Si est un vecteur de tel que , alors et donc, d'après la question précédente,   Quitte à remplacer par , on peut ainsi écrire   Si maintenant est un vecteur non nul quelconque de , alors ceci implique que   et par linéarité de l'application ,   On en déduit que Ker et ainsi   "
},
{
  "id": "part-anaproba-4-2-4-4",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-4-4",
  "type": "Exercice",
  "number": "3.6",
  "title": "",
  "body": " Soit tel que .   Montrer que l'application   admet un minimum atteint en un point de .   En tant qu'application de classe , est continue. Par composition d'applications continues, est donc continue sur le compact . Elle y est donc bornée et atteint ses bornes. D'où l'existence de tel que   Supposons maintenant que est sur la sphère . On aura alors      ou encore et donc . On en déduit que soit est dans , soit il est sur la sphère mais dans ce cas atteint aussi son minimum en qui est dans . Dans tous les cas :    Montrer que .   Nous allons traiter le cas où la norme dérive d'un produit scalaire de .  Posons alors pour tout   est une application de classe sur avec pour tout :   est la composée de avec l'application de classe , , elle est donc de classe par composition d'application de classe et pour tout   Soit   admet un minimum local au point de l'ouvert donc sa différentielle est nulle en . Ce qui donne   Mais puisque est un automorphisme de , cela implique que le vecteur est orthogonal à et en particulier à lui-même. Il est donc nul.   "
},
{
  "id": "part-anaproba-4-2-4-5",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-4-5",
  "type": "Exercice",
  "number": "3.7",
  "title": "",
  "body": " On note et .   Justifier que et sont des ouverts de .   est la boule ouverte de centre et de rayon , c'est donc un ouvert de . Ensuite, est un ouvert relatif de comme image réciproque d'un ouvert de par une application continue. Comme est lui-même un ouvert de , alors est un ouvert de . Finalement, est un ouvert de puisque c'est l'intersection de deux ouverts de .    Montrer que   est une bijection continue de sur dont la réciproque est une fonction continue sur .   Soit . On a donc . Ainsi, l'application est bien définie de dans . Si maintenant est un élément de , alors et donc il existe, selon la question 6 (sol. 6), tel que . Puisque , on a en fait . Ce qui montre que est une application surjective.  Selon la propriété (??) on a   Ce qui montre que induit une injection sur . Comme , alors est injective. À ce stade, on a justifié que est une bijection de sur . Notons sa bijection réciproque. La propriété (??) s'écrit alors (en posant et )   Montrant que est lipschitzienne et de ce fait qu'elle est continue. Conclusions :   "
},
{
  "id": "part-anaproba-4-2-5-3",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-5-3",
  "type": "Exercice",
  "number": "3.8",
  "title": "",
  "body": " Justifier que est un sous-groupe abélien de .   Justifier que est un sous-groupe abélien de .   est tout simplement le groupe des inversibles de l'anneau . Il est contenu dans donc il en est un sous-groupe. Son caractère abélien découle en outre du fait que est un anneau commutatif.   Montrer que .   De par sa définition, on a . Réciproquement, considérons un élément et soit tel que . Notons le pgcd de avec , le polynôme minimal de , et considérons tel que . Le polynôme est alors divisible par et donc . La matrice étant inversible, cela implique que et donc que divise , signifiant que ou encore que . Ainsi, est premier avec .  Soit alors, selon le théorème de Bezout, tels que . En appliquant à , on obtient . Donc et par suite . Alors .   "
},
{
  "id": "part-anaproba-4-2-5-4",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-5-4",
  "type": "Exercice",
  "number": "3.9",
  "title": "",
  "body": " Montrer que .   En tant que sous-espace vectoriel (de dimension finie) de , est un fermé de . Soit maintenant . La suite des sommes partielles de la série est une suite d'éléments de car celui-ci est une sous-algèbre de . Cette suite converge vers . Puisque est un fermé, alors . L'inverse de est aussi dans pour les mêmes raisons puisque .   "
},
{
  "id": "part-anaproba-4-2-5-5",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-5-5",
  "type": "Exercice",
  "number": "3.10",
  "title": "",
  "body": " Pour , on définit l'application    Montrer que l'application   est injective.   Notons l'application en question et considérons des éléments et de tels que . Alors :   L'identification des parties réelles dans cette égalité donne , celle des parties imaginaires donne ensuite (car ). D'où l'injectivité de .   Soient et deux éléments de . Montrer qu'il existe tel que    Apparemment pour tout quelque soit le choix du réel . Considérons le polynôme   est non nul car donc il admet un nombre fini de racines qu'on va noter . Posons ensuite   Par injectivité de l'application introduite dans la question précédente, l'ensemble des couples tels que   est fini. L'ensemble est donc fini. Soit . Alors, pour tout , n'est pas une racine de . En posant pour tout   on a donc   Cette observation s'étend aussi à puisque et . Pour tout , est donc un élément de , soit    En déduire que est connexe par arcs.   et étant des points quelconques de , l'application ainsi définie est continue et elle est à valeurs dans . C'est un chemin continu qui permet de joindre à dans . Alors :   "
},
{
  "id": "part-anaproba-4-2-5-6",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-5-6",
  "type": "Exercice",
  "number": "3.11",
  "title": "",
  "body": " Montrer qu'il existe un ouvert de contenant et un ouvert de contenant la matrice identité tels que la fonction exponentielle induit une bijection continue de sur dont la réciproque est une fonction continue sur .   Montrer qu'il existe un ouvert de contenant et un ouvert de contenant la matrice identité tels que la fonction exponentielle induit une bijection continue de sur dont la réciproque est une fonction continue sur .   Considérons pour toute la suite de cette partie le -espace vectoriel et l'application   est bien à valeur dans d'après la question 9 (sol. 9). Rappelons en outre que est aussi un anneau commutatif.  Fixons et soit quelconque. Puisque alors   Par ailleurs, en utilisant une norme d'algèbre de , par convergence absolue de la série exponentielle on a   Sachant qu'au voisinage de 0 on a alors   En constant que l'application est linéaire, la relation (6) signifie alors que différentiable en et que   Ensuite pour tout , l'application est continue par continuité de l'application exponentielle donc est de classe sur . Par ailleurs, la relation (7) implique en particulier que   Finalement, selon la question 7b (sol. 7b),    En déduire que est un ouvert de .   Soit . Puisque la matrice est inversible et que est stable par multiplication matricielle, l'application est un automorphisme de . L'espace étant de dimension finie, et sont continues. L'ensemble est donc un ouvert de comme image réciproque par de l'ouvert de . Puisque alors et donc est un voisinage de . Alors   "
},
{
  "id": "part-anaproba-4-2-5-7",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-5-7",
  "type": "Exercice",
  "number": "3.12",
  "title": "",
  "body": " Montrer que est un fermé de .   Rappelons que . Pour tout , est inversible et donc on a bien . Soit maintenant une suite convergente d'éléments de et notons sa limite. Rappelons que pour toute matrice on a   Considérons l'application   est continue par composition des applications continues et . Donc la suite converge vers . Soit   La suite est ainsi convergente. Par continuité de l'application , la suite est convergente. Si on note sa limite alors et ainsi   La matrice est ainsi inversible. La suite converge vers la matrice . Puisque est un voisinage de alors il existe un entier tel que   Puisque , il existe tel que . Par suite   Comme alors . Finalement :   "
},
{
  "id": "part-anaproba-4-2-6-3",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-6-3",
  "type": "Exercice",
  "number": "3.13",
  "title": "",
  "body": " Montrer qu'il existe et une solution non nulle de (2) tels que    Notons l'ensemble des solutions de (2) et considérons l'endomorphisme   est linéaire et elle est bien à valeurs dans puisque pour toute solution de (2), la fonction est une solution de (2). En outre, est bijectif de bijection réciproque l'application   Ainsi, toutes les valeurs propres de sont non nulles. Soient donc une valeur propre de et un vecteur propre qui lui est associé. Alors   "
},
{
  "id": "part-anaproba-4-2-6-4",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-6-4",
  "type": "Exercice",
  "number": "3.14",
  "title": "",
  "body": " Soit une base de . Pour , on note la matrice dont les colonnes sont . On dispose ainsi d'une application de dans .   Montrer que pour tout nombre réel , et .   La famille est un système fondamental de solutions de (2), donc pour tout , la famille est une base de . Ce qui signifie que les vecteurs colonnes de la matrice forment une base de . Elle est donc inversible. Par ailleurs, on a   Ce qui ne représente que l'identification colonne par colonne dans l'égalité    Montrer que la matrice est indépendante de .   Considérons l'application définie sur par   Rappelons que pour tout   où est le cofacteur du coefficient d'indice de . Les fonctions et sont des sommes de produits des applications composantes de l'application . Elles sont donc de classe . L'application est donc de classe car ses composantes sont de classe . En dérivant ensuite la relation   on déduit que   est ainsi une fonction de classe comme produit de fonctions de classe à valeurs dans une algèbre normée et on a pour tout     Donc est partout constante sur l'intervalle .    En déduire qu'il existe telle que :    Posons . D'après la question précédente, on a   La matrice est inversible comme produit de matrices inversibles donc par surjectivité de l'application exp, il existe telle que . On a alors    En déduire qu'il existe une application continue sur et -périodique telle que    Posons pour tout ,   est inversible car c'est le produit de deux matrices inversibles. Les applications et sont continues (cette dernière est même de classe , résultat de cours) donc est continue comme produit d'applications continues à valeurs dans une algèbre normée. Soit ensuite .      Ce qui montre que est -périodique.    "
},
{
  "id": "part-anaproba-4-2-6-5",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-6-5",
  "type": "Exercice",
  "number": "3.15",
  "title": "",
  "body": " On admet qu'il existe deux matrices et de telles que est diagonalisable, est nilpotente et   Il existe donc une matrice et une matrice diagonale telles que .   Pour , on note les colonnes de la matrice . Montrer que est une base de l'espace .   Notons les vecteurs colonnes de la matrice . On a alors pour tout   Si est un vecteur quelconque de , alors pour tout   Ce qui signifie que la fonction est une solution du système différentiel . Les fonctions sont donc des éléments de . Ensuite, puisque et sont inversibles, alors est inversible et donc est une base de pour tout . Alors est un système fondamental de solutions du système .    Soient les nombres complexes tels que . Pour tous , et , on note la colonne de la matrice . Montrer que pour tout , on a   et vérifier que les applications sont continues sur et -périodiques.   Comme , et est nilpotente, alors pour tout , on peut écrire   Soit maintenant . Par définition du vecteur , on a et donc . Alors   En posant pour tout , , on voit que :     En déduire que si les parties réelles des pour sont strictement négatives et si est une solution quelconque de (2), alors    On suppose que les parties réelles des scalaires sont strictement négatives. Sachant que toute solution de (2) est une combinaison linéaire des fonctions , il suffit de justifier que   Soit donc . Les fonctions sont continues périodiques sur donc elles sont bornées sur . Notons un majorant commun de tous les réels pour tout . L'expression de donnée en (14) aboutit alors à   Puisque , alors et donc .    "
},
{
  "id": "part-anaproba-4-2-6-6",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-6-6",
  "type": "Exercice",
  "number": "3.16",
  "title": "",
  "body": " Montrer que si a une valeur propre de la forme avec et , alors (2) a une solution -périodique non nulle.   Montrer que si a une valeur propre de la forme avec et , alors (2) a une solution -périodique non nulle.   On suppose que admet une valeur propre de la forme avec et . Soit un vecteur propre qui lui est associé. La fonction est une solution de (2) et on a pour tout :   Les applications et sont respectivement -périodique et -périodique donc    On suppose qu'il existe tel que (2) possède une solution -périodique non nulle. Montrer que possède une valeur propre qui est une racine de l'unité.   On suppose que (2) admet une solution non nulle -périodique. Selon (11), il existe un vecteur non nul tel que pour tout . On a alors, en utilisant l'écriture (10)   Puisque et sont -périodiques, on a pour tout   et donc   signalant que 1 est une valeur propre de la matrice . Puisque les valeurs propres de sont les nombres de la forme où décrit le spectre complexe de , on en déduit que :   "
},
{
  "id": "part-anaproba-4-2-6-7",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-6-7",
  "type": "Exercice",
  "number": "3.17",
  "title": "",
  "body": " Dans cette question, on suppose que (2) possède une solution -périodique avec . Montrer que pour tous et , on a    On suppose que (2) admet une solution qui est -périodique avec . On a alors la relation   découlant de l'égalité . Et puisque est -périodique, on a même   ou encore, en posant   est un sous-groupe de . Supposons qu'il existe tel que . Puisque et , il existerait tels que et . Ce qui impliquerait que , entrant en contradiction avec l'hypothèse faite sur . n'est donc pas un sous-groupe discret de et donc il est dense dans . Pour un réel fixé, l'application est continue sur et elle est partout nulle sur la partie dense . Elle est donc partout nulle sur . On conclut en posant que   "
},
{
  "id": "part-anaproba-4-2-6-8",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-6-8",
  "type": "Exercice",
  "number": "3.18",
  "title": "",
  "body": " On suppose dans cette question qu'il n'existe pas de sous-espace vectoriel , différent de et , tel que, pour tout , est stable par . Donner une condition nécessaire et suffisante sur et sur pour que (2) ait au moins une solution périodique non nulle.   On suppose qu'il n'existe aucun sous-espace vectoriel (SEV) non trivial de qui soit stable par tous les , et que (2) admet au moins une solution non nulle qui est -périodique. Supposons que . Il découle de la question précédente que   Posons pour tout   et ensuite   de telle sorte que pour tout vecteur on ait   Revenons à la relation (15) et dérivons-la par rapport à :   et en recourant encore à (15)   Par récurrence sur , on démontre selon la même idée que   contient donc tous les vecteurs . Puisque la fonction est non nulle, alors le SEV est non nul. Il est inclus strictement dans car sinon on aura . Ce qui signifierait que l'application est constante, contredisant ainsi l'hypothèse de départ de la question.  Soient maintenant . Pour tout et pour tout , on a   et donc . Le SEV non trivial est donc stable par tous les , amenant une contradiction.  Ainsi . Il existe alors des entiers premiers entre eux tels que . La solution est -périodique et donc -périodique. D'après la question 18b (sol. 18b), la matrice admet une valeur propre qui est une racine de l'unité.  Réciproquement, supposons que admet une telle valeur propre et notons-la avec . Les valeurs propres de sont les complexes de la forme où est une valeur propre de . Il existe donc une valeur propre de telle que et par suite   ou encore   Selon la question 18a (sol. 18a), (2) admet bien une solution -périodique non nulle. Conclusions :   "
},
{
  "id": "part-anaproba-4-2-6-9",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-6-9",
  "type": "Exercice",
  "number": "3.19",
  "title": "",
  "body": " Soit le système différentiel   où est une fonction continue sur et -périodique. On suppose que 1 n'est pas valeur propre de . Montrer que (3) possède une unique solution -périodique.   On a vu que les solutions de l'équation homogène de (3) sont les fonctions de la forme où est le vecteur colonne des coordonnées de dans un système fondamental de solutions de celle-ci. La méthode de la variation des constantes revient donc ici à poser en supposant que est une fonction de classe . Dans ce cas    Les primitives de la fonction peuvent être écrites sous la forme   où est un vecteur quelconque de . Les solutions de (3) sont donc les fonctions   avec quelconque dans .  Soit et considérons la fonction ci-dessus. Selon la question 16d (sol. 16d), où est une fonction continue -périodique de dans . On a donc   Pour tout , on aura   Sachant que et sont -périodiques, avec la translation de la variable , on a   étant inversible, on a ainsi   Puisque 1 n'est pas une valeur propre de , alors est une matrice inversible. est donc -périodique si et seulement si   D'où l'existence et l'unicité d'une solution -périodique de (3). Résumons :     "
},
{
  "id": "part-anaproba-4-2-6-10",
  "level": "2",
  "url": "part-anaproba-4.html#part-anaproba-4-2-6-10",
  "type": "Exercice",
  "number": "3.20",
  "title": "",
  "body": " Résoudre le système différentiel   et déterminer sa forme normale (voir la question 16d).   En posant , le système différentiel s'écrit matriciellement   où   La fonction est ici -périodique. La matrice se réduit dans de la façon suivante :   donc   Comme à l'usage, on pose . Le système (16) équivaut alors à   Les solutions de ce dernier système sont données par   donc les solutions du système (16) sont données par   Les fonctions et forment un système fondamental de solutions de (16). Le système en est un autre lorsqu'on pose    Sur la base du système fondamental , on forme en posant   L'écriture normale de est donc avec   "
},
{
  "id": "part-anaproba-5",
  "level": "1",
  "url": "part-anaproba-5.html",
  "type": "Sujet",
  "number": "4",
  "title": "CENTRALE 2018, MP, Maths II",
  "body": " CENTRALE 2018, MP, Maths II   Fonctions harmoniques et principe du maximum   Ce problème étudie quelques propriétés des fonctions harmoniques ainsi que quelques exemples de telles fonctions (parties I et II). Dans la partie III, largement indépendante du reste du problème, on montre le principe du maximum faible pour le laplacien. Dans la partie IV, on établit un lien entre les fonctions harmoniques de deux variables et les fonctions développables en série entière, et on propose la résolution du problème de Dirichlet dans le disque unité de ℝ² dans la partie V.    Notations   Dans ce préambule et dans les parties I et III, désigne un entier strictement positif.  On munit ℝⁿ de sa structure euclidienne canonique et désigne la norme euclidienne.  Si est une partie de ℝⁿ, alors désigne son adhérence et sa frontière.  Pour et , on désigne par la boule ouverte de centre et de rayon pour la distance euclidienne. Autrement dit La boule fermée de centre et de rayon est alors .  L’opérateur différentiel (appelé laplacien) est défini pour toute fonction à valeurs réelles de classe sur un ouvert par   Une fonction de classe à valeurs réelles sur un ouvert de ℝⁿ est dite harmonique sur si L’ensemble des fonctions harmoniques sur est noté .     I Fonctions harmoniques : quelques propriétés   Soit un ouvert non vide de . On note l'espace vectoriel des fonctions de classe de dans .    Montrer que est un sous-espace vectoriel de .   On a . La fonction nulle est harmonique. Soient et , alors est de classe et , est linéaire, donc , alors . Ainsi, est un sous-espace vectoriel de .    Soit . Montrer que si est sur , alors toute dérivée partielle à tout ordre de appartient à .   On suppose que . Soit , posons . Par application du théorème de Schwartz et de la linéarité de l'opérateur dérivée partielle, on a : Donc .    On suppose dans cette question que est connexe par arcs. Déterminer l'ensemble des fonctions de telles que appartienne aussi à .   Soit , alors pour tout , . En dérivant une seconde fois, on obtient : Donc : car . Ainsi, , . Comme est de classe sur , elle est différentiable sur , et étant connexe par arcs, est constante sur .    Donner une fonction non constante appartenant à . Le produit de deux fonctions harmoniques est-il une fonction harmonique ?   L'application est harmonique, mais ne l'est pas. Ainsi, le produit de deux fonctions harmoniques sur n'est pas nécessairement harmonique sur .     II Exemples de fonctions harmoniques   II.A – Fonctions harmoniques à variables séparables   On cherche dans cette question à déterminer les fonctions harmoniques non nulles sur à variables séparables, c’est-à-dire les fonctions s’écrivant sous la forme .    Montrer qu’il existe une constante réelle telle que et soient solutions respectives des équations et    Soit , on a : Comme est harmonique, , donc : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.    Donner en fonction du signe de la forme des fonctions harmoniques à variables séparables.   Selon le signe de , les solutions sont :  Si , alors est de la forme .  Si , alors est de la forme :   Si , alors est de la forme :   où sont des constantes arbitraires.     II.B – Fonctions harmoniques radiales   Soit une fonction réelle de classe sur . On pose, pour tout ,     Justifier que est de classe sur .   L'application est de classe sur car ses composantes le sont. Comme , et que est de classe , alors est également de classe .    Pour tout , exprimer et en fonction des dérivées partielles de .   Pour , on pose . Alors : et     Exprimer également et en fonction des dérivées partielles premières et secondes de en .   Pour , on a : et     Montrer que appartient à si et seulement si, pour tout ,    En utilisant les expressions des dérivées partielles de obtenues précédemment, on a : où . Ainsi, est harmonique si et seulement si :     Déterminer les fonctions harmoniques radiales de , c’est-à-dire les fonctions appartenant à telles que soit indépendante de .   Si est radiale, alors est indépendante de . Ainsi, l’équation harmonique se réduit à : En posant , on obtient : Cette équation différentielle a pour solution : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les fonctions harmoniques radiales sont de la forme : où et sont des constantes.    Soient et quatre réels tels que . Déterminer une fonction de classe sur telle que    D’après la question précédente, les fonctions harmoniques radiales sont de la forme : où et sont des constantes. En utilisant les conditions aux limites, on obtient : En résolvant ce système, on trouve : Ainsi, la fonction est donnée par :      II.C – Fonctions harmoniques à variables polaires séparables   Dans cette sous-partie, on considère deux fonctions de classe , et , et on pose     Montrer que, si n’est pas identiquement nulle, alors est -périodique.   Pour tout , on a : Donc . Comme n'est pas identiquement nulle, il existe tel que , ce qui implique que pour tout . Ainsi, est -périodique.    Montrer que, si est harmonique et non identiquement nulle sur , alors il existe un réel tel que soit solution de l’équation différentielle et soit solution de l’équation différentielle    Par la question précédente, on a : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.    II.C.1 – Cas où   Quelles sont les solutions -périodiques de l’équation lorsque ?   Si , l’équation devient , dont les solutions sont de la forme . Pour que soit -périodique, il faut que . Ainsi, les solutions -périodiques sont les fonctions constantes .    Résoudre l’équation différentielle sur .   L’équation différentielle peut être réécrite sous la forme : En posant , on obtient : Cette équation est une équation différentielle linéaire du premier ordre, dont la solution est : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les solutions sont de la forme .    En déduire, dans le cas , les fonctions harmoniques à variables polaires séparables.   Dans le cas , les fonctions harmoniques à variables polaires séparables sont de la forme : où , et sont des constantes. Ainsi, les fonctions harmoniques sont de la forme : où et sont des constantes.     II.C.2 – Cas où   Donner une condition nécessaire et suffisante pour que l’équation admette des solutions -périodiques non nulles. Donner ces solutions.   Pour que l’équation admette des solutions -périodiques non nulles, il faut que . Dans ce cas, les solutions sont de la forme : où et sont des constantes.    Résoudre l’équation différentielle sur .   L’équation différentielle est une équation d’Euler. En posant , on obtient l’équation caractéristique : Les solutions sont donc : et où et sont des constantes.    Quelles sont les solutions se prolongeant par continuité en ?   Pour que se prolonge par continuité en , il faut que reste bornée lorsque . Dans le cas , la solution ne reste bornée que si . Ainsi, les solutions prolongeables en sont de la forme : Dans le cas , aucune solution ne reste bornée en .       III Principe du maximum faible   Soit un ouvert borné non vide de ( ) et de classe . Le but de cette partie est de montrer le théorème suivant, connu sous le nom de principe du maximum faible : où désigne la frontière de .    III.A – Cas où   Montrer que admet un maximum en un point .   Comme est un ouvert borné, est un fermé borné de , donc un compact. La fonction est continue sur , donc elle est bornée et atteint ses bornes. Ainsi, admet un maximum en un point .    On suppose de plus que est de classe sur et que, pour tout , . Montrer que et en déduire que , .   Supposons par l'absurde que . Comme admet un maximum en , toutes les dérivées partielles secondes de en doivent être négatives ou nulles. En particulier, , ce qui contredit l'hypothèse . Ainsi, .  Par conséquent, , , car atteint son maximum sur uniquement en des points de .     III.B – Cas général   Soit une fonction continue sur , de classe et harmonique sur . Pour tout , on pose . Montrer que est une fonction continue sur , de classe sur , et telle que , .   La fonction est continue sur car est continue et est continue. Elle est de classe sur car est de classe et est de classe .  De plus, pour tout , on a : car est harmonique et .    En déduire que , .   Par la question précédente, vérifie pour tout . D’après la partie III.A, on a : En faisant tendre , on obtient :     Soient et deux fonctions continues sur , de classe et harmoniques sur . Montrer que si les fonctions et sont égales sur , alors et sont égales sur .   Considérons la fonction . Alors est continue sur , de classe sur , et harmonique sur . De plus, sur .  Par le principe du maximum faible, on a : et Ainsi, pour tout , c’est-à-dire sur .      IV Fonctions harmoniques et fonctions développables en série entière   On dit qu’une fonction , définie sur et à valeurs complexes, se développe en série entière sur s’il existe une suite complexe telle que Dans toute cette partie, désigne une fonction se développant en série entière sur .    IV.A – Fonctions développables en série entière   Montrer que est de classe sur et que ses dérivées partielles se développent en série entière sur . Que peut-on en déduire pour la fonction ?   La fonction se développe en série entière sur , donc elle est analytique sur . Par conséquent, est de classe sur , et en particulier de classe .  Les dérivées partielles de sont données par : et Ces séries convergent également sur , donc les dérivées partielles se développent en série entière.  On en déduit que est de classe sur .    On note et les parties réelle et imaginaire de , de sorte que, quel que soit , Montrer que et sont des fonctions harmoniques sur .   La fonction est analytique, donc elle vérifie les équations de Cauchy-Riemann : En dérivant ces équations, on obtient : En additionnant ces deux équations, on trouve : De même, on montre que . Ainsi, et sont harmoniques sur .     IV.B – Propriétés des fonctions développables en série entière   On admet le résultat suivant : une fonction de dans se développe en série entière sur si et seulement si est de classe sur et pour tout ,     Montrer que si ne s’annule pas sur , alors se développe en série entière sur .   Si ne s’annule pas sur , alors est bien définie et de classe sur . De plus, comme est analytique, elle vérifie les équations de Cauchy-Riemann : En dérivant , on obtient : Ainsi, vérifie également les équations de Cauchy-Riemann et est donc développable en série entière sur .    Montrer que la fonction est harmonique sur .   On a : Comme et sont harmoniques, . De plus, les équations de Cauchy-Riemann donnent : Ainsi : Donc , et est harmonique sur .     IV.C – Fonctions harmoniques et leurs primitives   Soit une fonction de dans . On suppose que est harmonique. Montrer que la fonction définie sur par se développe en série entière sur .   La fonction est harmonique, donc elle est de classe sur . Ainsi, est de classe sur . De plus, comme est harmonique, on a : En dérivant , on obtient : et En utilisant le théorème de Schwarz et l’équation harmonique, on a : Ainsi, vérifie les équations de Cauchy-Riemann et est donc développable en série entière sur .    Montrer que si appartient à , alors il existe une fonction se développant en série entière sur telle que est la partie réelle de .   D’après la question précédente, la fonction définie par se développe en série entière sur . On peut donc écrire : En intégrant terme à terme, on obtient une fonction telle que : où est une constante. La partie réelle de est alors , car : et Ainsi, est la partie réelle de .     IV.D – Propriétés intégrales des fonctions harmoniques   Montrer que pour tout , on a    La fonction se développe en série entière sur , donc on peut écrire : En coordonnées polaires, on a : En intégrant sur , on obtient : Or, pour , , et pour , . Ainsi : Donc :     Montrer un résultat analogue pour les fonctions harmoniques.   Soit une fonction harmonique sur . D’après la question précédente, il existe une fonction se développant en série entière sur telle que est la partie réelle de . Ainsi, on a : car la partie réelle de l’intégrale est égale à l’intégrale de la partie réelle.    Montrer que , .   D’après la question précédente, on a : Comme , on a :     Montrer un résultat analogue pour les fonctions harmoniques.   Soit une fonction harmonique sur . D’après la question précédente, on a : car est la partie réelle d’une fonction développable en série entière.    Montrer que si admet un maximum en , alors est constante sur .   Si admet un maximum en , alors pour tout , on a : Ainsi, est constante sur . Comme est analytique, cela implique que est constante sur .    Montrer le théorème de d’Alembert-Gauss : tout polynôme complexe non constant admet au moins une racine.   Supposons par l’absurde qu’il existe un polynôme complexe non constant qui ne s’annule pas sur . Alors est une fonction entière (analytique sur tout ). Comme est non constant, lorsque , donc est bornée sur . Par le théorème de Liouville, est constante, ce qui implique que est constant, ce qui est une contradiction. Ainsi, admet au moins une racine.      V Résolution du problème de Dirichlet dans le disque unité de \\(\\mathbb{R}^2\\)   Soit une fonction de dans , continue et -périodique sur . On cherche à résoudre le problème de Dirichlet sur le disque unité ; autrement dit, il s’agit de déterminer, s’il y en a, la ou les fonctions définies et continues sur (disque fermé), de classe sur , et telles que     Pour tout nombre complexe tel que , on pose où Montrer que la fonction est développable en série entière pour et calculer son développement en série entière. En déduire que la fonction est une fonction harmonique sur .   Pour , on a : En regroupant les termes, on obtient : Ainsi, la fonction est développable en série entière pour .  En prenant la partie réelle, on a : La fonction est donc une combinaison linéaire de fonctions harmoniques (les parties réelles des monômes ), donc est harmonique sur .    Montrer que, pour tout nombre complexe tel que ,    D’après le développement en série entière de , on a : En intégrant sur , les termes s’annulent pour , car : Ainsi, il reste :     Soit . Montrer que, pour tout nombre complexe tel que ,    La fonction est -périodique, donc l’intégrale de sur un intervalle de longueur est indépendante de l’origine de l’intervalle. Ainsi : Donc :     Montrer que, pour tout et tous réels et ,    En utilisant l’expression de , on a : En multipliant le numérateur et le dénominateur par , on obtient : En utilisant l’identité , on trouve :     Montrer que, pour tout et tout réel ,    Pour , le noyau de Poisson se concentre autour de , où . Ainsi, pour loin de , devient très petit. En particulier, pour , on a : Donc l’intégrale sur cet intervalle tend vers 0.    En utilisant le théorème de Heine, montrer que, pour tout , il existe tel que, pour tout nombre réel et tout nombre complexe vérifiant ,    Par le théorème de Heine, est uniformément continue sur . Ainsi, pour tout , il existe tel que : En utilisant cette propriété, on peut écrire : Le premier terme est majoré par , et le second terme est majoré par : Ainsi, on obtient l’inégalité demandée.    Montrer l’existence et l’unicité de la solution au problème de Dirichlet étudié dans cette partie.   L’existence de la solution est garantie par la construction de la fonction , qui est harmonique sur et vérifie pour tout .  Pour l’unicité, supposons que et sont deux solutions du problème de Dirichlet. Alors est harmonique sur et nulle sur le bord . Par le principe du maximum, sur , donc .     "
},
{
  "id": "part-anaproba-5-2-4-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-4-3",
  "type": "Exercice",
  "number": "4.1",
  "title": "",
  "body": " Montrer que est un sous-espace vectoriel de .   On a . La fonction nulle est harmonique. Soient et , alors est de classe et , est linéaire, donc , alors . Ainsi, est un sous-espace vectoriel de .  "
},
{
  "id": "part-anaproba-5-2-4-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-4-4",
  "type": "Exercice",
  "number": "4.2",
  "title": "",
  "body": " Soit . Montrer que si est sur , alors toute dérivée partielle à tout ordre de appartient à .   On suppose que . Soit , posons . Par application du théorème de Schwartz et de la linéarité de l'opérateur dérivée partielle, on a : Donc .  "
},
{
  "id": "part-anaproba-5-2-4-5",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-4-5",
  "type": "Exercice",
  "number": "4.3",
  "title": "",
  "body": " On suppose dans cette question que est connexe par arcs. Déterminer l'ensemble des fonctions de telles que appartienne aussi à .   Soit , alors pour tout , . En dérivant une seconde fois, on obtient : Donc : car . Ainsi, , . Comme est de classe sur , elle est différentiable sur , et étant connexe par arcs, est constante sur .  "
},
{
  "id": "part-anaproba-5-2-4-6",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-4-6",
  "type": "Exercice",
  "number": "4.4",
  "title": "",
  "body": " Donner une fonction non constante appartenant à . Le produit de deux fonctions harmoniques est-il une fonction harmonique ?   L'application est harmonique, mais ne l'est pas. Ainsi, le produit de deux fonctions harmoniques sur n'est pas nécessairement harmonique sur .  "
},
{
  "id": "part-anaproba-5-2-5-2-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-2-3",
  "type": "Exercice",
  "number": "4.5",
  "title": "",
  "body": " Montrer qu’il existe une constante réelle telle que et soient solutions respectives des équations et    Soit , on a : Comme est harmonique, , donc : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.  "
},
{
  "id": "part-anaproba-5-2-5-2-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-2-4",
  "type": "Exercice",
  "number": "4.6",
  "title": "",
  "body": " Donner en fonction du signe de la forme des fonctions harmoniques à variables séparables.   Selon le signe de , les solutions sont :  Si , alors est de la forme .  Si , alors est de la forme :   Si , alors est de la forme :   où sont des constantes arbitraires.  "
},
{
  "id": "part-anaproba-5-2-5-3-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-3-3",
  "type": "Exercice",
  "number": "4.7",
  "title": "",
  "body": " Justifier que est de classe sur .   L'application est de classe sur car ses composantes le sont. Comme , et que est de classe , alors est également de classe .  "
},
{
  "id": "part-anaproba-5-2-5-3-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-3-4",
  "type": "Exercice",
  "number": "4.8",
  "title": "",
  "body": " Pour tout , exprimer et en fonction des dérivées partielles de .   Pour , on pose . Alors : et   "
},
{
  "id": "part-anaproba-5-2-5-3-5",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-3-5",
  "type": "Exercice",
  "number": "4.9",
  "title": "",
  "body": " Exprimer également et en fonction des dérivées partielles premières et secondes de en .   Pour , on a : et   "
},
{
  "id": "part-anaproba-5-2-5-3-6",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-3-6",
  "type": "Exercice",
  "number": "4.10",
  "title": "",
  "body": " Montrer que appartient à si et seulement si, pour tout ,    En utilisant les expressions des dérivées partielles de obtenues précédemment, on a : où . Ainsi, est harmonique si et seulement si :   "
},
{
  "id": "part-anaproba-5-2-5-3-7",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-3-7",
  "type": "Exercice",
  "number": "4.11",
  "title": "",
  "body": " Déterminer les fonctions harmoniques radiales de , c’est-à-dire les fonctions appartenant à telles que soit indépendante de .   Si est radiale, alors est indépendante de . Ainsi, l’équation harmonique se réduit à : En posant , on obtient : Cette équation différentielle a pour solution : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les fonctions harmoniques radiales sont de la forme : où et sont des constantes.  "
},
{
  "id": "part-anaproba-5-2-5-3-8",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-3-8",
  "type": "Exercice",
  "number": "4.12",
  "title": "",
  "body": " Soient et quatre réels tels que . Déterminer une fonction de classe sur telle que    D’après la question précédente, les fonctions harmoniques radiales sont de la forme : où et sont des constantes. En utilisant les conditions aux limites, on obtient : En résolvant ce système, on trouve : Ainsi, la fonction est donnée par :   "
},
{
  "id": "part-anaproba-5-2-5-4-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-4-3",
  "type": "Exercice",
  "number": "4.13",
  "title": "",
  "body": " Montrer que, si n’est pas identiquement nulle, alors est -périodique.   Pour tout , on a : Donc . Comme n'est pas identiquement nulle, il existe tel que , ce qui implique que pour tout . Ainsi, est -périodique.  "
},
{
  "id": "part-anaproba-5-2-5-4-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-4-4",
  "type": "Exercice",
  "number": "4.14",
  "title": "",
  "body": " Montrer que, si est harmonique et non identiquement nulle sur , alors il existe un réel tel que soit solution de l’équation différentielle et soit solution de l’équation différentielle    Par la question précédente, on a : En divisant par (qui est non nul car n'est pas identiquement nulle), on obtient : Cela implique qu'il existe une constante telle que : Ainsi, et sont solutions des équations différentielles données.  "
},
{
  "id": "part-anaproba-5-2-5-4-5-2",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-4-5-2",
  "type": "Exercice",
  "number": "4.15",
  "title": "",
  "body": " Quelles sont les solutions -périodiques de l’équation lorsque ?   Si , l’équation devient , dont les solutions sont de la forme . Pour que soit -périodique, il faut que . Ainsi, les solutions -périodiques sont les fonctions constantes .  "
},
{
  "id": "part-anaproba-5-2-5-4-5-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-4-5-3",
  "type": "Exercice",
  "number": "4.16",
  "title": "",
  "body": " Résoudre l’équation différentielle sur .   L’équation différentielle peut être réécrite sous la forme : En posant , on obtient : Cette équation est une équation différentielle linéaire du premier ordre, dont la solution est : où est une constante. En intégrant, on trouve : où est une autre constante. Ainsi, les solutions sont de la forme .  "
},
{
  "id": "part-anaproba-5-2-5-4-5-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-4-5-4",
  "type": "Exercice",
  "number": "4.17",
  "title": "",
  "body": " En déduire, dans le cas , les fonctions harmoniques à variables polaires séparables.   Dans le cas , les fonctions harmoniques à variables polaires séparables sont de la forme : où , et sont des constantes. Ainsi, les fonctions harmoniques sont de la forme : où et sont des constantes.  "
},
{
  "id": "part-anaproba-5-2-5-4-6-2",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-4-6-2",
  "type": "Exercice",
  "number": "4.18",
  "title": "",
  "body": " Donner une condition nécessaire et suffisante pour que l’équation admette des solutions -périodiques non nulles. Donner ces solutions.   Pour que l’équation admette des solutions -périodiques non nulles, il faut que . Dans ce cas, les solutions sont de la forme : où et sont des constantes.  "
},
{
  "id": "part-anaproba-5-2-5-4-6-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-4-6-3",
  "type": "Exercice",
  "number": "4.19",
  "title": "",
  "body": " Résoudre l’équation différentielle sur .   L’équation différentielle est une équation d’Euler. En posant , on obtient l’équation caractéristique : Les solutions sont donc : et où et sont des constantes.  "
},
{
  "id": "part-anaproba-5-2-5-4-6-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-5-4-6-4",
  "type": "Exercice",
  "number": "4.20",
  "title": "",
  "body": " Quelles sont les solutions se prolongeant par continuité en ?   Pour que se prolonge par continuité en , il faut que reste bornée lorsque . Dans le cas , la solution ne reste bornée que si . Ainsi, les solutions prolongeables en sont de la forme : Dans le cas , aucune solution ne reste bornée en .  "
},
{
  "id": "part-anaproba-5-2-6-3-2",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-6-3-2",
  "type": "Exercice",
  "number": "4.21",
  "title": "",
  "body": " Montrer que admet un maximum en un point .   Comme est un ouvert borné, est un fermé borné de , donc un compact. La fonction est continue sur , donc elle est bornée et atteint ses bornes. Ainsi, admet un maximum en un point .  "
},
{
  "id": "part-anaproba-5-2-6-3-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-6-3-3",
  "type": "Exercice",
  "number": "4.22",
  "title": "",
  "body": " On suppose de plus que est de classe sur et que, pour tout , . Montrer que et en déduire que , .   Supposons par l'absurde que . Comme admet un maximum en , toutes les dérivées partielles secondes de en doivent être négatives ou nulles. En particulier, , ce qui contredit l'hypothèse . Ainsi, .  Par conséquent, , , car atteint son maximum sur uniquement en des points de .  "
},
{
  "id": "part-anaproba-5-2-6-4-2",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-6-4-2",
  "type": "Exercice",
  "number": "4.23",
  "title": "",
  "body": " Soit une fonction continue sur , de classe et harmonique sur . Pour tout , on pose . Montrer que est une fonction continue sur , de classe sur , et telle que , .   La fonction est continue sur car est continue et est continue. Elle est de classe sur car est de classe et est de classe .  De plus, pour tout , on a : car est harmonique et .  "
},
{
  "id": "part-anaproba-5-2-6-4-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-6-4-3",
  "type": "Exercice",
  "number": "4.24",
  "title": "",
  "body": " En déduire que , .   Par la question précédente, vérifie pour tout . D’après la partie III.A, on a : En faisant tendre , on obtient :   "
},
{
  "id": "part-anaproba-5-2-6-4-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-6-4-4",
  "type": "Exercice",
  "number": "4.25",
  "title": "",
  "body": " Soient et deux fonctions continues sur , de classe et harmoniques sur . Montrer que si les fonctions et sont égales sur , alors et sont égales sur .   Considérons la fonction . Alors est continue sur , de classe sur , et harmonique sur . De plus, sur .  Par le principe du maximum faible, on a : et Ainsi, pour tout , c’est-à-dire sur .  "
},
{
  "id": "part-anaproba-5-2-7-3-2",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-3-2",
  "type": "Exercice",
  "number": "4.26",
  "title": "",
  "body": " Montrer que est de classe sur et que ses dérivées partielles se développent en série entière sur . Que peut-on en déduire pour la fonction ?   La fonction se développe en série entière sur , donc elle est analytique sur . Par conséquent, est de classe sur , et en particulier de classe .  Les dérivées partielles de sont données par : et Ces séries convergent également sur , donc les dérivées partielles se développent en série entière.  On en déduit que est de classe sur .  "
},
{
  "id": "part-anaproba-5-2-7-3-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-3-3",
  "type": "Exercice",
  "number": "4.27",
  "title": "",
  "body": " On note et les parties réelle et imaginaire de , de sorte que, quel que soit , Montrer que et sont des fonctions harmoniques sur .   La fonction est analytique, donc elle vérifie les équations de Cauchy-Riemann : En dérivant ces équations, on obtient : En additionnant ces deux équations, on trouve : De même, on montre que . Ainsi, et sont harmoniques sur .  "
},
{
  "id": "part-anaproba-5-2-7-4-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-4-3",
  "type": "Exercice",
  "number": "4.28",
  "title": "",
  "body": " Montrer que si ne s’annule pas sur , alors se développe en série entière sur .   Si ne s’annule pas sur , alors est bien définie et de classe sur . De plus, comme est analytique, elle vérifie les équations de Cauchy-Riemann : En dérivant , on obtient : Ainsi, vérifie également les équations de Cauchy-Riemann et est donc développable en série entière sur .  "
},
{
  "id": "part-anaproba-5-2-7-4-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-4-4",
  "type": "Exercice",
  "number": "4.29",
  "title": "",
  "body": " Montrer que la fonction est harmonique sur .   On a : Comme et sont harmoniques, . De plus, les équations de Cauchy-Riemann donnent : Ainsi : Donc , et est harmonique sur .  "
},
{
  "id": "part-anaproba-5-2-7-5-2",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-5-2",
  "type": "Exercice",
  "number": "4.30",
  "title": "",
  "body": " Soit une fonction de dans . On suppose que est harmonique. Montrer que la fonction définie sur par se développe en série entière sur .   La fonction est harmonique, donc elle est de classe sur . Ainsi, est de classe sur . De plus, comme est harmonique, on a : En dérivant , on obtient : et En utilisant le théorème de Schwarz et l’équation harmonique, on a : Ainsi, vérifie les équations de Cauchy-Riemann et est donc développable en série entière sur .  "
},
{
  "id": "part-anaproba-5-2-7-5-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-5-3",
  "type": "Exercice",
  "number": "4.31",
  "title": "",
  "body": " Montrer que si appartient à , alors il existe une fonction se développant en série entière sur telle que est la partie réelle de .   D’après la question précédente, la fonction définie par se développe en série entière sur . On peut donc écrire : En intégrant terme à terme, on obtient une fonction telle que : où est une constante. La partie réelle de est alors , car : et Ainsi, est la partie réelle de .  "
},
{
  "id": "part-anaproba-5-2-7-6-2",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-6-2",
  "type": "Exercice",
  "number": "4.32",
  "title": "",
  "body": " Montrer que pour tout , on a    La fonction se développe en série entière sur , donc on peut écrire : En coordonnées polaires, on a : En intégrant sur , on obtient : Or, pour , , et pour , . Ainsi : Donc :   "
},
{
  "id": "part-anaproba-5-2-7-6-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-6-3",
  "type": "Exercice",
  "number": "4.33",
  "title": "",
  "body": " Montrer un résultat analogue pour les fonctions harmoniques.   Soit une fonction harmonique sur . D’après la question précédente, il existe une fonction se développant en série entière sur telle que est la partie réelle de . Ainsi, on a : car la partie réelle de l’intégrale est égale à l’intégrale de la partie réelle.  "
},
{
  "id": "part-anaproba-5-2-7-6-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-6-4",
  "type": "Exercice",
  "number": "4.34",
  "title": "",
  "body": " Montrer que , .   D’après la question précédente, on a : Comme , on a :   "
},
{
  "id": "part-anaproba-5-2-7-6-5",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-6-5",
  "type": "Exercice",
  "number": "4.35",
  "title": "",
  "body": " Montrer un résultat analogue pour les fonctions harmoniques.   Soit une fonction harmonique sur . D’après la question précédente, on a : car est la partie réelle d’une fonction développable en série entière.  "
},
{
  "id": "part-anaproba-5-2-7-6-6",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-6-6",
  "type": "Exercice",
  "number": "4.36",
  "title": "",
  "body": " Montrer que si admet un maximum en , alors est constante sur .   Si admet un maximum en , alors pour tout , on a : Ainsi, est constante sur . Comme est analytique, cela implique que est constante sur .  "
},
{
  "id": "part-anaproba-5-2-7-6-7",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-7-6-7",
  "type": "Exercice",
  "number": "4.37",
  "title": "",
  "body": " Montrer le théorème de d’Alembert-Gauss : tout polynôme complexe non constant admet au moins une racine.   Supposons par l’absurde qu’il existe un polynôme complexe non constant qui ne s’annule pas sur . Alors est une fonction entière (analytique sur tout ). Comme est non constant, lorsque , donc est bornée sur . Par le théorème de Liouville, est constante, ce qui implique que est constant, ce qui est une contradiction. Ainsi, admet au moins une racine.  "
},
{
  "id": "part-anaproba-5-2-8-3",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-8-3",
  "type": "Exercice",
  "number": "4.38",
  "title": "",
  "body": " Pour tout nombre complexe tel que , on pose où Montrer que la fonction est développable en série entière pour et calculer son développement en série entière. En déduire que la fonction est une fonction harmonique sur .   Pour , on a : En regroupant les termes, on obtient : Ainsi, la fonction est développable en série entière pour .  En prenant la partie réelle, on a : La fonction est donc une combinaison linéaire de fonctions harmoniques (les parties réelles des monômes ), donc est harmonique sur .  "
},
{
  "id": "part-anaproba-5-2-8-4",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-8-4",
  "type": "Exercice",
  "number": "4.39",
  "title": "",
  "body": " Montrer que, pour tout nombre complexe tel que ,    D’après le développement en série entière de , on a : En intégrant sur , les termes s’annulent pour , car : Ainsi, il reste :   "
},
{
  "id": "part-anaproba-5-2-8-5",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-8-5",
  "type": "Exercice",
  "number": "4.40",
  "title": "",
  "body": " Soit . Montrer que, pour tout nombre complexe tel que ,    La fonction est -périodique, donc l’intégrale de sur un intervalle de longueur est indépendante de l’origine de l’intervalle. Ainsi : Donc :   "
},
{
  "id": "part-anaproba-5-2-8-6",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-8-6",
  "type": "Exercice",
  "number": "4.41",
  "title": "",
  "body": " Montrer que, pour tout et tous réels et ,    En utilisant l’expression de , on a : En multipliant le numérateur et le dénominateur par , on obtient : En utilisant l’identité , on trouve :   "
},
{
  "id": "part-anaproba-5-2-8-7",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-8-7",
  "type": "Exercice",
  "number": "4.42",
  "title": "",
  "body": " Montrer que, pour tout et tout réel ,    Pour , le noyau de Poisson se concentre autour de , où . Ainsi, pour loin de , devient très petit. En particulier, pour , on a : Donc l’intégrale sur cet intervalle tend vers 0.  "
},
{
  "id": "part-anaproba-5-2-8-8",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-8-8",
  "type": "Exercice",
  "number": "4.43",
  "title": "",
  "body": " En utilisant le théorème de Heine, montrer que, pour tout , il existe tel que, pour tout nombre réel et tout nombre complexe vérifiant ,    Par le théorème de Heine, est uniformément continue sur . Ainsi, pour tout , il existe tel que : En utilisant cette propriété, on peut écrire : Le premier terme est majoré par , et le second terme est majoré par : Ainsi, on obtient l’inégalité demandée.  "
},
{
  "id": "part-anaproba-5-2-8-9",
  "level": "2",
  "url": "part-anaproba-5.html#part-anaproba-5-2-8-9",
  "type": "Exercice",
  "number": "4.44",
  "title": "",
  "body": " Montrer l’existence et l’unicité de la solution au problème de Dirichlet étudié dans cette partie.   L’existence de la solution est garantie par la construction de la fonction , qui est harmonique sur et vérifie pour tout .  Pour l’unicité, supposons que et sont deux solutions du problème de Dirichlet. Alors est harmonique sur et nulle sur le bord . Par le principe du maximum, sur , donc .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
