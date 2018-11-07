/* Array.prototype.filter - Exercice 3

Ecrire une fonction keepStarks, qui prend en arguments un tableau de chaînes
(plus spécifiquement, des noms de personnages de Game of Thrones).

La fonction doit renvoyer un tableau ne contenant que les membres de la famille Stark.

Il y a plusieurs façons d'écrire cette fonction, et outre filter, tu auras probablement
besoin d'une de ces méthodes de String: endsWith ou split.

Exemple d'entrée:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

Sortie attendue:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']

 */

function keepStarks(names) {
  const result = names.filter(function(param){
    for(let i = 0; i < param.length; i++){
      if(param[i] == "S"){
        if(param[i + 1] == "t"){
          if(param[i + 2] == "a"){
            if(param[i + 3] == "r"){
              if(param[i + 4] == "k"){
                return param;
            }
          }
        }
      }
    }
  }
  }); return result
}

keepStarks([
  'Bran Stark',
  'Cersei Lannister',
  'Sandor Clegane',
  'Arya Stark',
  'Yara Greyjoy',
  'Sansa Stark'
])

// Ne pas modifier l'export
module.exports = keepStarks;
