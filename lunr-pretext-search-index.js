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
  "body": " Mines 2024, MP, Maths 1  Généralisation d’une intégrale de Dirichlet et application   Le but de ce sujet est de calculer l’intégrale de Dirichlet généralisée et d’utiliser ce calcul pour évaluer une espérance.    Calcul d’une intégrale   Dans cette partie, on fixe .     Montrer que pour tout , la fonction définie par est définie et intégrable sur .   Pour montrer que est définie et intégrable sur , on procède en deux étapes :    Définie sur : La fonction est définie pour tout car le dénominateur ne s'annule pas. En effet, pour et , on a (car est un nombre complexe de module et ne peut pas annuler le ).  Intégrable sur : Pour montrer l'intégrabilité, on étudie le comportement de aux bornes de l'intervalle :  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement supérieur à , ce qui garantit que est intégrable au voisinage de .  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement inférieur à , ce qui garantit que est intégrable au voisinage de .      Ainsi, est bien définie et intégrable sur .     Soit la fonction définie par Montrer que la fonction est de classe sur et que :   soit , montrer que pour tout et ,    Pour montrer que est de classe , on utilise le théorème de dérivation sous le signe intégral. On vérifie les hypothèses suivantes :  Continuité de l'intégrande : La fonction est continue en pour tout .  Dérivabilité par rapport à : La dérivée partielle de l'intégrande par rapport à est : Cette dérivée est continue en et en .  Domination : Pour tout avec , on a : Cela permet de majorer la dérivée partielle par une fonction intégrable en , ce qui justifie l'application du théorème de dérivation sous le signe intégral.    Ainsi, est de classe sur , et sa dérivée est donnée par :      Soit la fonction définie par Montrer que la fonction est de classe sur et que pour tout  où est la fonction définie par   Calculer et En déduire que la fonction est constante sur .     Classe de : La fonction est le produit de deux fonctions de classe :   est de classe car elle est exponentielle.  est de classe d'après la question précédente.  Ainsi, est de classe sur .  Calcul de : En dérivant , on obtient : En utilisant l'expression de trouvée à la question précédente, on a : En simplifiant, on obtient : où .  Calcul de et :   En , on a .  En , on a . Comme , on a , donc .    Constance de : On a montré que pour tout . Ainsi, est constante sur cet intervalle.      Montrer que pour tout       Expression de : On utilise la définition de et la relation trigonométrique . Ainsi : En développant, on obtient :   Expression intégrale : En utilisant l'expression de , on a : Cela découle d'une manipulation algébrique du dénominateur et de l'utilisation de la parité de la fonction.      En déduire que : où .     Changement de variable : On effectue le changement de variable . Ainsi, , et .  Transformation de l'intégrale : En substituant dans l'intégrale, on obtient :   Conclusion : On en déduit que :       Montrer, en utilisant le théorème de convergence dominée, que :      Application du théorème de convergence dominée : Lorsque , on a . Ainsi, l'intégrale devient :   Justification de la convergence : La fonction intégrée est dominée par , qui est intégrable sur . Par le théorème de convergence dominée, on peut intervertir limite et intégrale.      En déduire que      Évaluation de la limite : D'après la question précédente, on a :   Expression de : Comme est constante (d'après la question 3), on a :   Conclusion : En utilisant la définition de , on obtient :        Une expression (utile) de la fonction sinus   On rappelle que est un élément de fixé.    Montrer que      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Changement de variable dans la seconde intégrale : Dans la seconde intégrale, on effectue le changement de variable . Ainsi, et . Les bornes deviennent à , et on obtient :   Conclusion : En combinant les deux intégrales, on obtient :       Montrer que :      Développement en série géométrique : On utilise le développement en série géométrique de pour :   Intégration terme à terme : En multipliant par et en intégrant terme à terme, on obtient :   Calcul des intégrales : Chaque intégrale vaut :   Conclusion : Ainsi, on a :       Établir l’identité      Utilisation de la question 8 : D'après la question 8, on a :   Développement en série des deux termes : En utilisant le développement en série géométrique pour chaque terme, on obtient :    Conclusion : En additionnant les deux séries, on obtient l'identité souhaitée :       En déduire que l’on a      Utilisation de la question 7 : D'après la question 7, on a :   Expression de la série : En utilisant l'identité de la question 10, on peut écrire :   Simplification de la série : En regroupant les termes et en simplifiant, on obtient :       En déduire enfin que :      Substitution de : On pose , ce qui donne . En substituant dans l'identité de la question 11, on obtient :   Simplification : En multipliant par et en réarrangeant les termes, on obtient :        Calcul d'une intégrale de Dirichlet généralisée   Montrer que l’intégrale converge et que :      Convergence de l'intégrale : L'intégrale converge car :  En , le numérateur se comporte comme , donc l'intégrande est équivalente à , qui est intégrable.  En , l'intégrande est dominée par , qui est intégrable.    Transformation de l'intégrale : En intégrant par parties, on pose : Ainsi, et . L'intégration par parties donne :       Montrer que pour tout :      Changement de variable : On effectue le changement de variable . Ainsi, , et . Les bornes deviennent à .  Simplification de l'intégrande : En utilisant la périodicité de et , on a :  Ainsi, l'intégrale devient :   Transformation en intégrale sur : En utilisant la symétrie de la fonction cosinus et sinus, on peut réécrire l'intégrale sur :       En déduire que :      Sommation des intégrales : En sommant les intégrales sur chaque intervalle , on obtient :   Utilisation de la question 14 : En utilisant le résultat de la question 14, on peut réécrire chaque intégrale comme :   Conclusion : Ainsi, on a :       En déduire que :      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Utilisation de la question 15 : En utilisant le résultat de la question 15, on peut réécrire la seconde intégrale comme :   Simplification : En combinant les deux intégrales, on obtient :        Calcul de   Toutes les variables aléatoires sont définies sur un même espace probabilisé .  Soient des variables aléatoires indépendantes, de même loi donnée par : Pour tout , on note .    Déterminer, pour tout , et .     Espérance de : Comme les sont indépendantes et de même loi, on a : Or, , donc :   Variance de : La variance de est donnée par : Or, , donc :       Soient et deux variables aléatoires indépendantes prenant toutes deux un nombre fini de valeurs réelles. On suppose que et suivent la même loi.  Montrer que :      Indépendance de et : Comme et sont indépendantes, on a :   Linéarité de l'espérance : En utilisant la linéarité de l'espérance, on obtient :   Symétrie de et : Comme et suivent la même loi, on a . Ainsi, , et il reste :   Conclusion : Comme et sont indépendantes, on a : Ainsi, on obtient :       En déduire que pour tout , et pour tout :      Récurrence sur : On procède par récurrence sur .  Cas de base : Pour , on a , donc : Comme prend les valeurs avec probabilité , on a : Ainsi, la propriété est vraie pour .  Hérédité : Supposons que la propriété est vraie pour un certain , c'est-à-dire : On montre qu'elle est vraie pour . On a : Comme et sont indépendantes, on peut appliquer la question 20 : D'après l'hypothèse de récurrence et le cas de base, on a : Ainsi, la propriété est vraie pour .  Conclusion : Par récurrence, la propriété est vraie pour tout .      Soient tels que et . Montrer que : où pour réel non nul. En déduire que :      Preuve de : Si , alors . Si , alors .  Application à et : On a . Comme , on peut appliquer la formule précédente : En prenant l'espérance, on obtient : Comme est indépendante de et , on a :       Montrer que pour tout :      Cas : Si , alors , donc l'intégrale est nulle, ce qui correspond à .  Cas : On effectue le changement de variable , ce qui donne et . Ainsi, l'intégrale devient :   Calcul de l'intégrale : On sait que : Ainsi, on obtient :       En déduire que pour tout :      Expression de : On utilise la relation entre l'espérance de la valeur absolue et l'intégrale de la fonction caractéristique. Pour une variable aléatoire , on a : où est la fonction caractéristique de .  Application à : La fonction caractéristique de est donnée par : Ainsi, on a :       Conclure que :      Utilisation de la question 24 : D'après la question 24, on a :   Calcul de l'intégrale pour et : En utilisant les résultats des parties précédentes, on peut montrer que :    Conclusion : En combinant ces résultats, on obtient :        "
},
{
  "id": "part-anaproba-3-2-3-3",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-3-3",
  "type": "Exercice",
  "number": "2.1",
  "title": "",
  "body": " Montrer que pour tout , la fonction définie par est définie et intégrable sur .   Pour montrer que est définie et intégrable sur , on procède en deux étapes :    Définie sur : La fonction est définie pour tout car le dénominateur ne s'annule pas. En effet, pour et , on a (car est un nombre complexe de module et ne peut pas annuler le ).  Intégrable sur : Pour montrer l'intégrabilité, on étudie le comportement de aux bornes de l'intervalle :  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement supérieur à , ce qui garantit que est intégrable au voisinage de .  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement inférieur à , ce qui garantit que est intégrable au voisinage de .      Ainsi, est bien définie et intégrable sur .  "
},
{
  "id": "part-anaproba-3-2-3-4",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-3-4",
  "type": "Exercice",
  "number": "2.2",
  "title": "",
  "body": " Soit la fonction définie par Montrer que la fonction est de classe sur et que :   soit , montrer que pour tout et ,    Pour montrer que est de classe , on utilise le théorème de dérivation sous le signe intégral. On vérifie les hypothèses suivantes :  Continuité de l'intégrande : La fonction est continue en pour tout .  Dérivabilité par rapport à : La dérivée partielle de l'intégrande par rapport à est : Cette dérivée est continue en et en .  Domination : Pour tout avec , on a : Cela permet de majorer la dérivée partielle par une fonction intégrable en , ce qui justifie l'application du théorème de dérivation sous le signe intégral.    Ainsi, est de classe sur , et sa dérivée est donnée par :   "
},
{
  "id": "part-anaproba-3-2-3-5",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-3-5",
  "type": "Exercice",
  "number": "2.3",
  "title": "",
  "body": " Soit la fonction définie par Montrer que la fonction est de classe sur et que pour tout  où est la fonction définie par   Calculer et En déduire que la fonction est constante sur .     Classe de : La fonction est le produit de deux fonctions de classe :   est de classe car elle est exponentielle.  est de classe d'après la question précédente.  Ainsi, est de classe sur .  Calcul de : En dérivant , on obtient : En utilisant l'expression de trouvée à la question précédente, on a : En simplifiant, on obtient : où .  Calcul de et :   En , on a .  En , on a . Comme , on a , donc .    Constance de : On a montré que pour tout . Ainsi, est constante sur cet intervalle.    "
},
{
  "id": "part-anaproba-3-2-3-6",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-3-6",
  "type": "Exercice",
  "number": "2.4",
  "title": "",
  "body": " Montrer que pour tout       Expression de : On utilise la définition de et la relation trigonométrique . Ainsi : En développant, on obtient :   Expression intégrale : En utilisant l'expression de , on a : Cela découle d'une manipulation algébrique du dénominateur et de l'utilisation de la parité de la fonction.    "
},
{
  "id": "part-anaproba-3-2-3-7",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-3-7",
  "type": "Exercice",
  "number": "2.5",
  "title": "",
  "body": " En déduire que : où .     Changement de variable : On effectue le changement de variable . Ainsi, , et .  Transformation de l'intégrale : En substituant dans l'intégrale, on obtient :   Conclusion : On en déduit que :     "
},
{
  "id": "part-anaproba-3-2-3-8",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-3-8",
  "type": "Exercice",
  "number": "2.6",
  "title": "",
  "body": " Montrer, en utilisant le théorème de convergence dominée, que :      Application du théorème de convergence dominée : Lorsque , on a . Ainsi, l'intégrale devient :   Justification de la convergence : La fonction intégrée est dominée par , qui est intégrable sur . Par le théorème de convergence dominée, on peut intervertir limite et intégrale.    "
},
{
  "id": "part-anaproba-3-2-3-9",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-3-9",
  "type": "Exercice",
  "number": "2.7",
  "title": "",
  "body": " En déduire que      Évaluation de la limite : D'après la question précédente, on a :   Expression de : Comme est constante (d'après la question 3), on a :   Conclusion : En utilisant la définition de , on obtient :     "
},
{
  "id": "part-anaproba-3-2-4-3",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-3",
  "type": "Exercice",
  "number": "2.8",
  "title": "",
  "body": " Montrer que      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Changement de variable dans la seconde intégrale : Dans la seconde intégrale, on effectue le changement de variable . Ainsi, et . Les bornes deviennent à , et on obtient :   Conclusion : En combinant les deux intégrales, on obtient :     "
},
{
  "id": "part-anaproba-3-2-4-4",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-4",
  "type": "Exercice",
  "number": "2.9",
  "title": "",
  "body": " Montrer que :      Développement en série géométrique : On utilise le développement en série géométrique de pour :   Intégration terme à terme : En multipliant par et en intégrant terme à terme, on obtient :   Calcul des intégrales : Chaque intégrale vaut :   Conclusion : Ainsi, on a :     "
},
{
  "id": "part-anaproba-3-2-4-5",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-5",
  "type": "Exercice",
  "number": "2.10",
  "title": "",
  "body": " Établir l’identité      Utilisation de la question 8 : D'après la question 8, on a :   Développement en série des deux termes : En utilisant le développement en série géométrique pour chaque terme, on obtient :    Conclusion : En additionnant les deux séries, on obtient l'identité souhaitée :     "
},
{
  "id": "part-anaproba-3-2-4-6",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-6",
  "type": "Exercice",
  "number": "2.11",
  "title": "",
  "body": " En déduire que l’on a      Utilisation de la question 7 : D'après la question 7, on a :   Expression de la série : En utilisant l'identité de la question 10, on peut écrire :   Simplification de la série : En regroupant les termes et en simplifiant, on obtient :     "
},
{
  "id": "part-anaproba-3-2-4-7",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-4-7",
  "type": "Exercice",
  "number": "2.12",
  "title": "",
  "body": " En déduire enfin que :      Substitution de : On pose , ce qui donne . En substituant dans l'identité de la question 11, on obtient :   Simplification : En multipliant par et en réarrangeant les termes, on obtient :     "
},
{
  "id": "part-anaproba-3-2-5-2",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-2",
  "type": "Exercice",
  "number": "2.13",
  "title": "",
  "body": " Montrer que l’intégrale converge et que :      Convergence de l'intégrale : L'intégrale converge car :  En , le numérateur se comporte comme , donc l'intégrande est équivalente à , qui est intégrable.  En , l'intégrande est dominée par , qui est intégrable.    Transformation de l'intégrale : En intégrant par parties, on pose : Ainsi, et . L'intégration par parties donne :     "
},
{
  "id": "part-anaproba-3-2-5-3",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-3",
  "type": "Exercice",
  "number": "2.14",
  "title": "",
  "body": " Montrer que pour tout :      Changement de variable : On effectue le changement de variable . Ainsi, , et . Les bornes deviennent à .  Simplification de l'intégrande : En utilisant la périodicité de et , on a :  Ainsi, l'intégrale devient :   Transformation en intégrale sur : En utilisant la symétrie de la fonction cosinus et sinus, on peut réécrire l'intégrale sur :     "
},
{
  "id": "part-anaproba-3-2-5-4",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-4",
  "type": "Exercice",
  "number": "2.15",
  "title": "",
  "body": " En déduire que :      Sommation des intégrales : En sommant les intégrales sur chaque intervalle , on obtient :   Utilisation de la question 14 : En utilisant le résultat de la question 14, on peut réécrire chaque intégrale comme :   Conclusion : Ainsi, on a :     "
},
{
  "id": "part-anaproba-3-2-5-5",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-5-5",
  "type": "Exercice",
  "number": "2.16",
  "title": "",
  "body": " En déduire que :      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Utilisation de la question 15 : En utilisant le résultat de la question 15, on peut réécrire la seconde intégrale comme :   Simplification : En combinant les deux intégrales, on obtient :     "
},
{
  "id": "part-anaproba-3-2-6-3",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-3",
  "type": "Exercice",
  "number": "2.17",
  "title": "",
  "body": " Déterminer, pour tout , et .     Espérance de : Comme les sont indépendantes et de même loi, on a : Or, , donc :   Variance de : La variance de est donnée par : Or, , donc :     "
},
{
  "id": "part-anaproba-3-2-6-4",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-4",
  "type": "Exercice",
  "number": "2.18",
  "title": "",
  "body": " Soient et deux variables aléatoires indépendantes prenant toutes deux un nombre fini de valeurs réelles. On suppose que et suivent la même loi.  Montrer que :      Indépendance de et : Comme et sont indépendantes, on a :   Linéarité de l'espérance : En utilisant la linéarité de l'espérance, on obtient :   Symétrie de et : Comme et suivent la même loi, on a . Ainsi, , et il reste :   Conclusion : Comme et sont indépendantes, on a : Ainsi, on obtient :     "
},
{
  "id": "part-anaproba-3-2-6-5",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-5",
  "type": "Exercice",
  "number": "2.19",
  "title": "",
  "body": " En déduire que pour tout , et pour tout :      Récurrence sur : On procède par récurrence sur .  Cas de base : Pour , on a , donc : Comme prend les valeurs avec probabilité , on a : Ainsi, la propriété est vraie pour .  Hérédité : Supposons que la propriété est vraie pour un certain , c'est-à-dire : On montre qu'elle est vraie pour . On a : Comme et sont indépendantes, on peut appliquer la question 20 : D'après l'hypothèse de récurrence et le cas de base, on a : Ainsi, la propriété est vraie pour .  Conclusion : Par récurrence, la propriété est vraie pour tout .    "
},
{
  "id": "part-anaproba-3-2-6-6",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-6",
  "type": "Exercice",
  "number": "2.20",
  "title": "",
  "body": " Soient tels que et . Montrer que : où pour réel non nul. En déduire que :      Preuve de : Si , alors . Si , alors .  Application à et : On a . Comme , on peut appliquer la formule précédente : En prenant l'espérance, on obtient : Comme est indépendante de et , on a :     "
},
{
  "id": "part-anaproba-3-2-6-7",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-7",
  "type": "Exercice",
  "number": "2.21",
  "title": "",
  "body": " Montrer que pour tout :      Cas : Si , alors , donc l'intégrale est nulle, ce qui correspond à .  Cas : On effectue le changement de variable , ce qui donne et . Ainsi, l'intégrale devient :   Calcul de l'intégrale : On sait que : Ainsi, on obtient :     "
},
{
  "id": "part-anaproba-3-2-6-8",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-8",
  "type": "Exercice",
  "number": "2.22",
  "title": "",
  "body": " En déduire que pour tout :      Expression de : On utilise la relation entre l'espérance de la valeur absolue et l'intégrale de la fonction caractéristique. Pour une variable aléatoire , on a : où est la fonction caractéristique de .  Application à : La fonction caractéristique de est donnée par : Ainsi, on a :     "
},
{
  "id": "part-anaproba-3-2-6-9",
  "level": "2",
  "url": "part-anaproba-3.html#part-anaproba-3-2-6-9",
  "type": "Exercice",
  "number": "2.23",
  "title": "",
  "body": " Conclure que :      Utilisation de la question 24 : D'après la question 24, on a :   Calcul de l'intégrale pour et : En utilisant les résultats des parties précédentes, on peut montrer que :    Conclusion : En combinant ces résultats, on obtient :     "
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
