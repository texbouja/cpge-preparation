var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "part-anaproba-2",
  "level": "1",
  "url": "part-anaproba-2.html",
  "type": "Chapitre",
  "number": "1",
  "title": "Mines 2020, MP, Maths 2",
  "body": " Mines 2020, MP, Maths 2     Les solutions ont été générées avec l'aide de DeepSeek-V3™, un modèle d'intelligence artificielle développé par DeepSeek. Elles seront clarifiées, voir corrigées pendant la séance dédiée.    Dans tout le texte, est un élément de . On note le -uplet dont toutes les coordonnées valent , c'est-à-dire le vecteur nul de .  On considère une variable aléatoire à valeurs dans , une suite de variables aléatoires mutuellement indépendantes suivant chacune la loi de et définies sur un même espace probabilisé. La suite de variables aléatoires est définie par et   La suite est une marche aléatoire de pas  , à valeurs dans .  On note la variable aléatoire à valeurs dans définie par   Autrement dit, est égal à si la marche aléatoire ne revient jamais en , au premier instant auquel cette marche aléatoire revient en sinon.  Pour , soit le cardinal du sous-ensemble   de . Le nombre est donc le nombre de points de visités par la marche aléatoire après pas.  Le but du problème est d'étudier asymptotiquement l'espérance de la variable aléatoire .  La partie D est indépendante des parties précédentes.     Préliminaires  Les cinq questions de cette partie sont indépendantes et utilisées dans les parties C et E.    Soit . En utilisant la factorisation , montrer que    La factorisation permet d'écrire :   En identifiant les coefficients de des deux côtés, on obtient :      Rappeler la formule de Stirling, puis déterminer un nombre réel tel que    La formule de Stirling donne :   En appliquant cette formule à , on obtient :   Ainsi, .     Si est un élément de , montrer, par exemple en utilisant une comparaison série-intégrale, que   Si est un élément de , montrer de même que    Pour , on utilise une comparaison série-intégrale. La fonction est décroissante, donc :   En calculant l'intégrale, on obtient :   On en déduit que :   Pour , on utilise une comparaison similaire :   Ainsi, on a :      Pour , on pose   Justifier, pour , la relation   Établir par ailleurs la relation   En déduire finalement un équivalent de lorsque tend vers .   On intègre par parties en posant et . On obtient :   Pour montrer que , on observe que est négligeable devant lorsque . Ainsi, l'intégrale est négligeable devant .  On en déduit que :      Pour , rappeler, sans donner de démonstration, le développement en série entière de sur . Justifier la formule :    Le développement en série entière de sur est :   Pour , on a :   En utilisant la formule des coefficients binomiaux généralisés, on obtient :   d'où :       Marches aléatoires, récurrence    Montrer que les séries entières définissant et ont un rayon de convergence supérieur ou égal à 1. Justifier alors que les fonctions et sont définies et de classe sur . Montrer que est définie et continue sur et que    Les séries entières définissant et sont de la forme avec . Par conséquent, leur rayon de convergence est au moins 1. Les fonctions et sont donc définies et de classe sur .  Pour , la série converge en car .     Si et sont des entiers naturels non nuls tels que , montrer que   En déduire que    L'événement signifie que la marche revient en pour la première fois à l'instant , puis revient à nouveau en à l'instant . Par indépendance des pas, on a :   En sommant sur , on obtient :      Montrer que   Déterminer la limite de lorsque , en discutant selon la valeur de .   En utilisant la relation de convolution des probabilités, on a :   En réorganisant les termes, on obtient :   Pour la limite de lorsque , on distingue deux cas :   Si , alors converge vers une valeur finie.  Si , alors diverge vers .      Soit une suite d'éléments de telle que la série entière ait un rayon de convergence 1 et que la série diverge. Montrer que    L'élément de étant fixé, on montrera qu'il existe tel que     La série diverge, donc pour tout , il existe un entier tel que . Pour , on a :   En choisissant suffisamment petit, on peut garantir que , ce qui montre que lorsque .     Montrer que la série est divergente si et seulement si .   Si , alors la marche revient presque sûrement en une infinité de fois, ce qui implique que diverge. Réciproquement, si diverge, alors la marche revient presque sûrement en , donc .     Pour , soit la variable de Bernoulli indicatrice de l'événement   Montrer que, pour :   En déduire que, pour :    L'événement correspond au fait que la marche visite un nouveau point à l'instant , ce qui équivaut à . Ainsi, .  En sommant sur , on obtient :      Conclure que    On pourra admettre et utiliser le théorème de Cesaro : si est une suite réelle convergeant vers le nombre réel , alors     Par le théorème de Cesaro, si , alors :   Ainsi, .      Les marches de Bernoulli sur    Pour , déterminer et justifier l'égalité :    Pour , la marche ne peut pas revenir à l'origine en un nombre impair de pas, donc .  Pour , on utilise le fait que la marche doit faire autant de pas à droite qu'à gauche. Le nombre de chemins possibles est , et chaque chemin a une probabilité . Ainsi :      Pour , donner une expression simple de . Exprimer en fonction de . Déterminer la loi de .   La fonction génératrice est donnée par :   Pour une marche de Bernoulli symétrique ( ), on a :   La probabilité que la marche ne revienne jamais à l'origine est :   La loi de est une loi géométrique modifiée, avec pour .     On suppose que . Donner un équivalent simple de lorsque tend vers . En déduire un équivalent simple de lorsque tend vers .   Pour , on a :   En utilisant la formule de Stirling, on obtient l'équivalent :   Pour , on utilise le résultat de la question 12 :       Un résultat asymptotique    Soient et deux entiers naturels tels que . Montrer que    Par définition, . Comme est décroissante, on a :   Pour la deuxième inégalité, on utilise la relation de convolution :      On suppose dans cette question qu'il existe une suite vérifiant pour assez grand et   Montrer que    En utilisant les hypothèses, on a :   Comme et , on en déduit que :      On suppose dans cette question qu'il existe tel que   En utilisant la question 17 pour une suite bien choisie, montrer que    Si , alors . En choisissant , on vérifie que :   Ainsi, d'après la question 17, on a :       La marche aléatoire simple sur    Soit . Montrer que    Cette égalité découle de la propriété de convolution des probabilités et de l'indépendance des pas de la marche aléatoire. En sommant sur tous les instants , on obtient :      Soit . Établir l'égalité    Pour une marche aléatoire simple sur , la probabilité de revenir à l'origine après pas est donnée par :   Ce résultat découle de la symétrie de la marche et de la formule des coefficients binomiaux.     Donner un équivalent simple de lorsque tend vers .   Pour une marche aléatoire simple sur , on a :   Ce résultat est un théorème classique dû à Erdős et Dvoretzky.     "
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
  "id": "part-anaproba-2-2-5-2",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-2",
  "type": "Exercice",
  "number": "1.6",
  "title": "",
  "body": " Montrer que les séries entières définissant et ont un rayon de convergence supérieur ou égal à 1. Justifier alors que les fonctions et sont définies et de classe sur . Montrer que est définie et continue sur et que    Les séries entières définissant et sont de la forme avec . Par conséquent, leur rayon de convergence est au moins 1. Les fonctions et sont donc définies et de classe sur .  Pour , la série converge en car .  "
},
{
  "id": "part-anaproba-2-2-5-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-3",
  "type": "Exercice",
  "number": "1.7",
  "title": "",
  "body": " Si et sont des entiers naturels non nuls tels que , montrer que   En déduire que    L'événement signifie que la marche revient en pour la première fois à l'instant , puis revient à nouveau en à l'instant . Par indépendance des pas, on a :   En sommant sur , on obtient :   "
},
{
  "id": "part-anaproba-2-2-5-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-4",
  "type": "Exercice",
  "number": "1.8",
  "title": "",
  "body": " Montrer que   Déterminer la limite de lorsque , en discutant selon la valeur de .   En utilisant la relation de convolution des probabilités, on a :   En réorganisant les termes, on obtient :   Pour la limite de lorsque , on distingue deux cas :   Si , alors converge vers une valeur finie.  Si , alors diverge vers .   "
},
{
  "id": "part-anaproba-2-2-5-5",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-5",
  "type": "Exercice",
  "number": "1.9",
  "title": "",
  "body": " Soit une suite d'éléments de telle que la série entière ait un rayon de convergence 1 et que la série diverge. Montrer que    L'élément de étant fixé, on montrera qu'il existe tel que     La série diverge, donc pour tout , il existe un entier tel que . Pour , on a :   En choisissant suffisamment petit, on peut garantir que , ce qui montre que lorsque .  "
},
{
  "id": "part-anaproba-2-2-5-6",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-6",
  "type": "Exercice",
  "number": "1.10",
  "title": "",
  "body": " Montrer que la série est divergente si et seulement si .   Si , alors la marche revient presque sûrement en une infinité de fois, ce qui implique que diverge. Réciproquement, si diverge, alors la marche revient presque sûrement en , donc .  "
},
{
  "id": "part-anaproba-2-2-5-7",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-7",
  "type": "Exercice",
  "number": "1.11",
  "title": "",
  "body": " Pour , soit la variable de Bernoulli indicatrice de l'événement   Montrer que, pour :   En déduire que, pour :    L'événement correspond au fait que la marche visite un nouveau point à l'instant , ce qui équivaut à . Ainsi, .  En sommant sur , on obtient :   "
},
{
  "id": "part-anaproba-2-2-5-8",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-5-8",
  "type": "Exercice",
  "number": "1.12",
  "title": "",
  "body": " Conclure que    On pourra admettre et utiliser le théorème de Cesaro : si est une suite réelle convergeant vers le nombre réel , alors     Par le théorème de Cesaro, si , alors :   Ainsi, .  "
},
{
  "id": "part-anaproba-2-2-6-2",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-2",
  "type": "Exercice",
  "number": "1.13",
  "title": "",
  "body": " Pour , déterminer et justifier l'égalité :    Pour , la marche ne peut pas revenir à l'origine en un nombre impair de pas, donc .  Pour , on utilise le fait que la marche doit faire autant de pas à droite qu'à gauche. Le nombre de chemins possibles est , et chaque chemin a une probabilité . Ainsi :   "
},
{
  "id": "part-anaproba-2-2-6-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-3",
  "type": "Exercice",
  "number": "1.14",
  "title": "",
  "body": " Pour , donner une expression simple de . Exprimer en fonction de . Déterminer la loi de .   La fonction génératrice est donnée par :   Pour une marche de Bernoulli symétrique ( ), on a :   La probabilité que la marche ne revienne jamais à l'origine est :   La loi de est une loi géométrique modifiée, avec pour .  "
},
{
  "id": "part-anaproba-2-2-6-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-6-4",
  "type": "Exercice",
  "number": "1.15",
  "title": "",
  "body": " On suppose que . Donner un équivalent simple de lorsque tend vers . En déduire un équivalent simple de lorsque tend vers .   Pour , on a :   En utilisant la formule de Stirling, on obtient l'équivalent :   Pour , on utilise le résultat de la question 12 :   "
},
{
  "id": "part-anaproba-2-2-7-2",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-2",
  "type": "Exercice",
  "number": "1.16",
  "title": "",
  "body": " Soient et deux entiers naturels tels que . Montrer que    Par définition, . Comme est décroissante, on a :   Pour la deuxième inégalité, on utilise la relation de convolution :   "
},
{
  "id": "part-anaproba-2-2-7-3",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-3",
  "type": "Exercice",
  "number": "1.17",
  "title": "",
  "body": " On suppose dans cette question qu'il existe une suite vérifiant pour assez grand et   Montrer que    En utilisant les hypothèses, on a :   Comme et , on en déduit que :   "
},
{
  "id": "part-anaproba-2-2-7-4",
  "level": "2",
  "url": "part-anaproba-2.html#part-anaproba-2-2-7-4",
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
