var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "part-anaproba-2",
  "level": "1",
  "url": "part-anaproba-2.html",
  "type": "Sujet",
  "number": "1",
  "title": "Mines 2024, MP, Maths 1",
  "body": " Mines 2024, MP, Maths 1  Généralisation d’une intégrale de Dirichlet et application   Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek avec une exigence de fournir des solutions détaillées. Les réponses seront optimisées, voir corrigées durant la séance    Le but de ce sujet est de calculer l’intégrale de Dirichlet généralisée et d’utiliser ce calcul pour évaluer une espérance.    Calcul d’une intégrale   Dans cette partie, on fixe .     Montrer que pour tout , la fonction définie par est définie et intégrable sur .   Pour montrer que est définie et intégrable sur , on procède en deux étapes :    Définie sur : La fonction est définie pour tout car le dénominateur ne s'annule pas. En effet, pour et , on a (car est un nombre complexe de module et ne peut pas annuler le ).  Intégrable sur : Pour montrer l'intégrabilité, on étudie le comportement de aux bornes de l'intervalle :  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement supérieur à , ce qui garantit que est intégrable au voisinage de .  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement inférieur à , ce qui garantit que est intégrable au voisinage de .      Ainsi, est bien définie et intégrable sur .   Il y a manque de rigueur dans la solution proposée par l'IA.  Soit . La fonction ne s'annule pas sur donc est continue sur . En outre avec et . Donc par comparaison à des fonctions de Riemann, la fonction est intégrable sur   Si alors , est continue sur et sur et en posant  Alors se prolonge par continuité sur . Pour le reste elle est intégrable comme dans le cas      Soit la fonction définie par Montrer que la fonction est de classe sur et que :   soit , montrer que pour tout et ,    Pour montrer que est de classe , on utilise le théorème de dérivation sous le signe intégral. On vérifie les hypothèses suivantes :  Continuité de l'intégrande : La fonction est continue en pour tout .  Dérivabilité par rapport à : La dérivée partielle de l'intégrande par rapport à est : Cette dérivée est continue en et en .  Domination : Pour tout avec , on a : Cela permet de majorer la dérivée partielle par une fonction intégrable en , ce qui justifie l'application du théorème de dérivation sous le signe intégral.    Ainsi, est de classe sur , et sa dérivée est donnée par :    Considérons la fonction   est de classe sur et on a    La fonction est bien définie sur selon la question précédente   Soit comme suggéré par l'indication de l'énoncé . Fixons  La fonction est décroissante sur donc ce qui amène, par parité de la fonction  On en déduit que La fonction est continue et elle est intégrable sur car avec et .     Toutes les hypothèses sont réunies pour pouvoir appliquer la formule de Leibniz sur l'intervalle . Le réel étant quelconque dans on conclut que  La fonction est de classe sur et      Soit la fonction définie par Montrer que la fonction est de classe sur et que pour tout  où est la fonction définie par   Calculer et En déduire que la fonction est constante sur .     Classe de : La fonction est le produit de deux fonctions de classe :   est de classe car elle est exponentielle.  est de classe d'après la question précédente.  Ainsi, est de classe sur .  Calcul de : En dérivant , on obtient : En utilisant l'expression de trouvée à la question précédente, on a : En simplifiant, on obtient : où .  Calcul de et :   En , on a .  En , on a . Comme , on a , donc .    Constance de : On a montré que pour tout . Ainsi, est constante sur cet intervalle.      Montrer que pour tout       Expression de : On utilise la définition de et la relation trigonométrique . Ainsi : En développant, on obtient :   Expression intégrale : En utilisant l'expression de , on a : Cela découle d'une manipulation algébrique du dénominateur et de l'utilisation de la parité de la fonction.      En déduire que : où .     Changement de variable : On effectue le changement de variable . Ainsi, , et .  Transformation de l'intégrale : En substituant dans l'intégrale, on obtient :   Conclusion : On en déduit que :       Montrer, en utilisant le théorème de convergence dominée, que :      Application du théorème de convergence dominée : Lorsque , on a . Ainsi, l'intégrale devient :   Justification de la convergence : La fonction intégrée est dominée par , qui est intégrable sur . Par le théorème de convergence dominée, on peut intervertir limite et intégrale.      En déduire que      Évaluation de la limite : D'après la question précédente, on a :   Expression de : Comme est constante (d'après la question 3), on a :   Conclusion : En utilisant la définition de , on obtient :        Une expression (utile) de la fonction sinus   On rappelle que est un élément de fixé.    Montrer que      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Changement de variable dans la seconde intégrale : Dans la seconde intégrale, on effectue le changement de variable . Ainsi, et . Les bornes deviennent à , et on obtient :   Conclusion : En combinant les deux intégrales, on obtient :       Montrer que :      Développement en série géométrique : On utilise le développement en série géométrique de pour :   Intégration terme à terme : En multipliant par et en intégrant terme à terme, on obtient :   Calcul des intégrales : Chaque intégrale vaut :   Conclusion : Ainsi, on a :       Établir l’identité      Utilisation de la question 8 : D'après la question 8, on a :   Développement en série des deux termes : En utilisant le développement en série géométrique pour chaque terme, on obtient :    Conclusion : En additionnant les deux séries, on obtient l'identité souhaitée :       En déduire que l’on a      Utilisation de la question 7 : D'après la question 7, on a :   Expression de la série : En utilisant l'identité de la question 10, on peut écrire :   Simplification de la série : En regroupant les termes et en simplifiant, on obtient :       En déduire enfin que :      Substitution de : On pose , ce qui donne . En substituant dans l'identité de la question 11, on obtient :   Simplification : En multipliant par et en réarrangeant les termes, on obtient :        Calcul d'une intégrale de Dirichlet généralisée   Montrer que l’intégrale converge et que :      Convergence de l'intégrale : L'intégrale converge car :  En , le numérateur se comporte comme , donc l'intégrande est équivalente à , qui est intégrable.  En , l'intégrande est dominée par , qui est intégrable.    Transformation de l'intégrale : En intégrant par parties, on pose : Ainsi, et . L'intégration par parties donne :       Montrer que pour tout :      Changement de variable : On effectue le changement de variable . Ainsi, , et . Les bornes deviennent à .  Simplification de l'intégrande : En utilisant la périodicité de et , on a :  Ainsi, l'intégrale devient :   Transformation en intégrale sur : En utilisant la symétrie de la fonction cosinus et sinus, on peut réécrire l'intégrale sur :       En déduire que :      Sommation des intégrales : En sommant les intégrales sur chaque intervalle , on obtient :   Utilisation de la question 14 : En utilisant le résultat de la question 14, on peut réécrire chaque intégrale comme :   Conclusion : Ainsi, on a :       En déduire que :      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Utilisation de la question 15 : En utilisant le résultat de la question 15, on peut réécrire la seconde intégrale comme :   Simplification : En combinant les deux intégrales, on obtient :        Calcul de   Toutes les variables aléatoires sont définies sur un même espace probabilisé .  Soient des variables aléatoires indépendantes, de même loi donnée par : Pour tout , on note .    Déterminer, pour tout , et .     Espérance de : Comme les sont indépendantes et de même loi, on a : Or, , donc :   Variance de : La variance de est donnée par : Or, , donc :       Soient et deux variables aléatoires indépendantes prenant toutes deux un nombre fini de valeurs réelles. On suppose que et suivent la même loi.  Montrer que :      Indépendance de et : Comme et sont indépendantes, on a :   Linéarité de l'espérance : En utilisant la linéarité de l'espérance, on obtient :   Symétrie de et : Comme et suivent la même loi, on a . Ainsi, , et il reste :   Conclusion : Comme et sont indépendantes, on a : Ainsi, on obtient :       En déduire que pour tout , et pour tout :      Récurrence sur : On procède par récurrence sur .  Cas de base : Pour , on a , donc : Comme prend les valeurs avec probabilité , on a : Ainsi, la propriété est vraie pour .  Hérédité : Supposons que la propriété est vraie pour un certain , c'est-à-dire : On montre qu'elle est vraie pour . On a : Comme et sont indépendantes, on peut appliquer la question 20 : D'après l'hypothèse de récurrence et le cas de base, on a : Ainsi, la propriété est vraie pour .  Conclusion : Par récurrence, la propriété est vraie pour tout .      Soient tels que et . Montrer que : où pour réel non nul. En déduire que :      Preuve de : Si , alors . Si , alors .  Application à et : On a . Comme , on peut appliquer la formule précédente : En prenant l'espérance, on obtient : Comme est indépendante de et , on a :       Montrer que pour tout :      Cas : Si , alors , donc l'intégrale est nulle, ce qui correspond à .  Cas : On effectue le changement de variable , ce qui donne et . Ainsi, l'intégrale devient :   Calcul de l'intégrale : On sait que : Ainsi, on obtient :       En déduire que pour tout :      Expression de : On utilise la relation entre l'espérance de la valeur absolue et l'intégrale de la fonction caractéristique. Pour une variable aléatoire , on a : où est la fonction caractéristique de .  Application à : La fonction caractéristique de est donnée par : Ainsi, on a :       Conclure que :      Utilisation de la question 24 : D'après la question 24, on a :   Calcul de l'intégrale pour et : En utilisant les résultats des parties précédentes, on peut montrer que :    Conclusion : En combinant ces résultats, on obtient :        "
},
{
  "id": "part-anaproba-2-2-2",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-2",
  "type": "Mise en garde",
  "number": "1",
  "title": "",
  "body": " Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek avec une exigence de fournir des solutions détaillées. Les réponses seront optimisées, voir corrigées durant la séance  "
},
{
  "id": "part-anaproba-2-2-4-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-3",
  "type": "Exercice",
  "number": "1.1",
  "title": "",
  "body": " Montrer que pour tout , la fonction définie par est définie et intégrable sur .   Pour montrer que est définie et intégrable sur , on procède en deux étapes :    Définie sur : La fonction est définie pour tout car le dénominateur ne s'annule pas. En effet, pour et , on a (car est un nombre complexe de module et ne peut pas annuler le ).  Intégrable sur : Pour montrer l'intégrabilité, on étudie le comportement de aux bornes de l'intervalle :  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement supérieur à , ce qui garantit que est intégrable au voisinage de .  En : Lorsque , le terme dominant au dénominateur est , donc . Comme , l'exposant est strictement inférieur à , ce qui garantit que est intégrable au voisinage de .      Ainsi, est bien définie et intégrable sur .   Il y a manque de rigueur dans la solution proposée par l'IA.  Soit . La fonction ne s'annule pas sur donc est continue sur . En outre avec et . Donc par comparaison à des fonctions de Riemann, la fonction est intégrable sur   Si alors , est continue sur et sur et en posant  Alors se prolonge par continuité sur . Pour le reste elle est intégrable comme dans le cas   "
},
{
  "id": "part-anaproba-2-2-4-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-4",
  "type": "Exercice",
  "number": "1.2",
  "title": "",
  "body": " Soit la fonction définie par Montrer que la fonction est de classe sur et que :   soit , montrer que pour tout et ,    Pour montrer que est de classe , on utilise le théorème de dérivation sous le signe intégral. On vérifie les hypothèses suivantes :  Continuité de l'intégrande : La fonction est continue en pour tout .  Dérivabilité par rapport à : La dérivée partielle de l'intégrande par rapport à est : Cette dérivée est continue en et en .  Domination : Pour tout avec , on a : Cela permet de majorer la dérivée partielle par une fonction intégrable en , ce qui justifie l'application du théorème de dérivation sous le signe intégral.    Ainsi, est de classe sur , et sa dérivée est donnée par :    Considérons la fonction   est de classe sur et on a    La fonction est bien définie sur selon la question précédente   Soit comme suggéré par l'indication de l'énoncé . Fixons  La fonction est décroissante sur donc ce qui amène, par parité de la fonction  On en déduit que La fonction est continue et elle est intégrable sur car avec et .     Toutes les hypothèses sont réunies pour pouvoir appliquer la formule de Leibniz sur l'intervalle . Le réel étant quelconque dans on conclut que  La fonction est de classe sur et   "
},
{
  "id": "part-anaproba-2-2-4-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-5",
  "type": "Exercice",
  "number": "1.3",
  "title": "",
  "body": " Soit la fonction définie par Montrer que la fonction est de classe sur et que pour tout  où est la fonction définie par   Calculer et En déduire que la fonction est constante sur .     Classe de : La fonction est le produit de deux fonctions de classe :   est de classe car elle est exponentielle.  est de classe d'après la question précédente.  Ainsi, est de classe sur .  Calcul de : En dérivant , on obtient : En utilisant l'expression de trouvée à la question précédente, on a : En simplifiant, on obtient : où .  Calcul de et :   En , on a .  En , on a . Comme , on a , donc .    Constance de : On a montré que pour tout . Ainsi, est constante sur cet intervalle.    "
},
{
  "id": "part-anaproba-2-2-4-6",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-6",
  "type": "Exercice",
  "number": "1.4",
  "title": "",
  "body": " Montrer que pour tout       Expression de : On utilise la définition de et la relation trigonométrique . Ainsi : En développant, on obtient :   Expression intégrale : En utilisant l'expression de , on a : Cela découle d'une manipulation algébrique du dénominateur et de l'utilisation de la parité de la fonction.    "
},
{
  "id": "part-anaproba-2-2-4-7",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-7",
  "type": "Exercice",
  "number": "1.5",
  "title": "",
  "body": " En déduire que : où .     Changement de variable : On effectue le changement de variable . Ainsi, , et .  Transformation de l'intégrale : En substituant dans l'intégrale, on obtient :   Conclusion : On en déduit que :     "
},
{
  "id": "part-anaproba-2-2-4-8",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-8",
  "type": "Exercice",
  "number": "1.6",
  "title": "",
  "body": " Montrer, en utilisant le théorème de convergence dominée, que :      Application du théorème de convergence dominée : Lorsque , on a . Ainsi, l'intégrale devient :   Justification de la convergence : La fonction intégrée est dominée par , qui est intégrable sur . Par le théorème de convergence dominée, on peut intervertir limite et intégrale.    "
},
{
  "id": "part-anaproba-2-2-4-9",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-4-9",
  "type": "Exercice",
  "number": "1.7",
  "title": "",
  "body": " En déduire que      Évaluation de la limite : D'après la question précédente, on a :   Expression de : Comme est constante (d'après la question 3), on a :   Conclusion : En utilisant la définition de , on obtient :     "
},
{
  "id": "part-anaproba-2-2-5-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-3",
  "type": "Exercice",
  "number": "1.8",
  "title": "",
  "body": " Montrer que      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Changement de variable dans la seconde intégrale : Dans la seconde intégrale, on effectue le changement de variable . Ainsi, et . Les bornes deviennent à , et on obtient :   Conclusion : En combinant les deux intégrales, on obtient :     "
},
{
  "id": "part-anaproba-2-2-5-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-4",
  "type": "Exercice",
  "number": "1.9",
  "title": "",
  "body": " Montrer que :      Développement en série géométrique : On utilise le développement en série géométrique de pour :   Intégration terme à terme : En multipliant par et en intégrant terme à terme, on obtient :   Calcul des intégrales : Chaque intégrale vaut :   Conclusion : Ainsi, on a :     "
},
{
  "id": "part-anaproba-2-2-5-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-5",
  "type": "Exercice",
  "number": "1.10",
  "title": "",
  "body": " Établir l’identité      Utilisation de la question 8 : D'après la question 8, on a :   Développement en série des deux termes : En utilisant le développement en série géométrique pour chaque terme, on obtient :    Conclusion : En additionnant les deux séries, on obtient l'identité souhaitée :     "
},
{
  "id": "part-anaproba-2-2-5-6",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-6",
  "type": "Exercice",
  "number": "1.11",
  "title": "",
  "body": " En déduire que l’on a      Utilisation de la question 7 : D'après la question 7, on a :   Expression de la série : En utilisant l'identité de la question 10, on peut écrire :   Simplification de la série : En regroupant les termes et en simplifiant, on obtient :     "
},
{
  "id": "part-anaproba-2-2-5-7",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-7",
  "type": "Exercice",
  "number": "1.12",
  "title": "",
  "body": " En déduire enfin que :      Substitution de : On pose , ce qui donne . En substituant dans l'identité de la question 11, on obtient :   Simplification : En multipliant par et en réarrangeant les termes, on obtient :     "
},
{
  "id": "part-anaproba-2-2-6-2",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-2",
  "type": "Exercice",
  "number": "1.13",
  "title": "",
  "body": " Montrer que l’intégrale converge et que :      Convergence de l'intégrale : L'intégrale converge car :  En , le numérateur se comporte comme , donc l'intégrande est équivalente à , qui est intégrable.  En , l'intégrande est dominée par , qui est intégrable.    Transformation de l'intégrale : En intégrant par parties, on pose : Ainsi, et . L'intégration par parties donne :     "
},
{
  "id": "part-anaproba-2-2-6-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-3",
  "type": "Exercice",
  "number": "1.14",
  "title": "",
  "body": " Montrer que pour tout :      Changement de variable : On effectue le changement de variable . Ainsi, , et . Les bornes deviennent à .  Simplification de l'intégrande : En utilisant la périodicité de et , on a :  Ainsi, l'intégrale devient :   Transformation en intégrale sur : En utilisant la symétrie de la fonction cosinus et sinus, on peut réécrire l'intégrale sur :     "
},
{
  "id": "part-anaproba-2-2-6-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-4",
  "type": "Exercice",
  "number": "1.15",
  "title": "",
  "body": " En déduire que :      Sommation des intégrales : En sommant les intégrales sur chaque intervalle , on obtient :   Utilisation de la question 14 : En utilisant le résultat de la question 14, on peut réécrire chaque intégrale comme :   Conclusion : Ainsi, on a :     "
},
{
  "id": "part-anaproba-2-2-6-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-5",
  "type": "Exercice",
  "number": "1.16",
  "title": "",
  "body": " En déduire que :      Décomposition de l'intégrale : On décompose l'intégrale en deux parties :   Utilisation de la question 15 : En utilisant le résultat de la question 15, on peut réécrire la seconde intégrale comme :   Simplification : En combinant les deux intégrales, on obtient :     "
},
{
  "id": "part-anaproba-2-2-7-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-3",
  "type": "Exercice",
  "number": "1.17",
  "title": "",
  "body": " Déterminer, pour tout , et .     Espérance de : Comme les sont indépendantes et de même loi, on a : Or, , donc :   Variance de : La variance de est donnée par : Or, , donc :     "
},
{
  "id": "part-anaproba-2-2-7-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-4",
  "type": "Exercice",
  "number": "1.18",
  "title": "",
  "body": " Soient et deux variables aléatoires indépendantes prenant toutes deux un nombre fini de valeurs réelles. On suppose que et suivent la même loi.  Montrer que :      Indépendance de et : Comme et sont indépendantes, on a :   Linéarité de l'espérance : En utilisant la linéarité de l'espérance, on obtient :   Symétrie de et : Comme et suivent la même loi, on a . Ainsi, , et il reste :   Conclusion : Comme et sont indépendantes, on a : Ainsi, on obtient :     "
},
{
  "id": "part-anaproba-2-2-7-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-5",
  "type": "Exercice",
  "number": "1.19",
  "title": "",
  "body": " En déduire que pour tout , et pour tout :      Récurrence sur : On procède par récurrence sur .  Cas de base : Pour , on a , donc : Comme prend les valeurs avec probabilité , on a : Ainsi, la propriété est vraie pour .  Hérédité : Supposons que la propriété est vraie pour un certain , c'est-à-dire : On montre qu'elle est vraie pour . On a : Comme et sont indépendantes, on peut appliquer la question 20 : D'après l'hypothèse de récurrence et le cas de base, on a : Ainsi, la propriété est vraie pour .  Conclusion : Par récurrence, la propriété est vraie pour tout .    "
},
{
  "id": "part-anaproba-2-2-7-6",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-6",
  "type": "Exercice",
  "number": "1.20",
  "title": "",
  "body": " Soient tels que et . Montrer que : où pour réel non nul. En déduire que :      Preuve de : Si , alors . Si , alors .  Application à et : On a . Comme , on peut appliquer la formule précédente : En prenant l'espérance, on obtient : Comme est indépendante de et , on a :     "
},
{
  "id": "part-anaproba-2-2-7-7",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-7",
  "type": "Exercice",
  "number": "1.21",
  "title": "",
  "body": " Montrer que pour tout :      Cas : Si , alors , donc l'intégrale est nulle, ce qui correspond à .  Cas : On effectue le changement de variable , ce qui donne et . Ainsi, l'intégrale devient :   Calcul de l'intégrale : On sait que : Ainsi, on obtient :     "
},
{
  "id": "part-anaproba-2-2-7-8",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-8",
  "type": "Exercice",
  "number": "1.22",
  "title": "",
  "body": " En déduire que pour tout :      Expression de : On utilise la relation entre l'espérance de la valeur absolue et l'intégrale de la fonction caractéristique. Pour une variable aléatoire , on a : où est la fonction caractéristique de .  Application à : La fonction caractéristique de est donnée par : Ainsi, on a :     "
},
{
  "id": "part-anaproba-2-2-7-9",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-9",
  "type": "Exercice",
  "number": "1.23",
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
