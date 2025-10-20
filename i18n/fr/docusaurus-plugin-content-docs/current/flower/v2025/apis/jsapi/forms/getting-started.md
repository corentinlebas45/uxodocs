---
title: Interactions avec les champs
---

:::info
Les formulaires sont la base des écrans présentés au sein de l'interface graphique. 
Cette section liste comment acquérir un objet de type ``formAPI`` permettant d'interagir avec un formulaire et les fonctions associées.
:::

# Les champs simples

__Note :__ Dans cette partie, la variable ``fieldName`` correspond, dans le cas d'un tag, à la valeur de son identifiant. 
S'il s'agit de la classe du composant, il faut utiliser ``Class``.


| Fonction                                 				  | Description                                                                    |
|---------------------------------------------------------|--------------------------------------------------------------------------------|
|hasField(String fieldName)                         	  | Permet de déterminer si le champ existe dans le formulaire                     |
|setObjectValue(String fieldName, Object fieldValue)      | Modifie la valeur d'un champ                                                   |
|getObjectValue(String fieldName)               	      | Récupère la valeur d'un champ                                                  |   
|suggest(String fieldName, LookupResult suggestions)      | Affiche une liste de suggestion sur un champ STRING                      	   |
|setDescription(String fieldName, String description)     | Modifie la valeur de la description d'un champ                                 |


__Quelques exemples :__ 

* Modification d'un tag ``EndDate`` de type ``TIMESTAMP`` :  
```javascript
// Définition de la valeur à partir d'un objet Date
formAPI.setObjectValue("EndDate",new Date(2016,11,04));
// Définition à partir d'un timestamp (nombre de millisecondes écoulées depuis le 01/01/1970)
formAPI.setObjectValue("EndDate", 0);
```
	
* Modification d'un tag ``Received`` de type ``BOOLEAN`` :  
```javascript
// Définition de la valeur à partir d'un booléen
formAPI.setObjectValue("Received",true);
```

* Modification de l'identifiant de la classe :  
```javascript
formAPI.setObjectValue("Class", "Document");
```

__Suggestion de valeurs__

Afin de suggérer à l'utilisateur des valeurs pour un champ, il est possible d'utiliser la fonction ``suggest(fieldName, suggestions)``.

Les ``suggestions`` à passer en paramètre sont composées d'un nom symbolique (``setValue(symbolicName)``) et d'un libellé (``setName(displayName)``).
Ainsi, si l'utilisateur sélectionne une des suggestions, le formulaire sera soumis avec le nom symbolique.


```javascript
function buildSuggestion(name, value){
	var suggestion = new LookupResult();
	suggestion.setName(name);
	suggestion.setValue(value);
	return suggestion;
}

var suggestions = new Array();	
suggestions[0] = buildSuggestion("name1", "value1");
suggestions[1] = buildSuggestion("name2", "value2");
formAPI.suggest("MailObject", suggestions);
```

# Les listes de choix


| Fonction                                   								 | Description                                                                 |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
|getAllowedValues(String fieldName)              			    			 | Récupère l'ensemble des valeurs autorisées pour un champ de type CHOICELIST |
|setAllowedValues(String fieldName, AllowedValueDefinition[] allowedValues)  | Modifie les valeurs autorisées pour un champ de type CHOICELIST			   |

```javascript
function buildAllowedValue(symbolicName, label) {
	var language = new Language("EN");

	var allowedValue = new AllowedValueDefinition();
	allowedValue.setSymbolicName(symbolicName);

	var displayNames = new I18NLabel()
	displayNames.setLabel(language, label);
	allowedValue.setDisplayNames(displayNames);
	return allowedValue;
}

var restrictedAllowedValues = new Array();
restrictedAllowedValues[0] = buildAllowedValue("symbolicName1", "firstLabel");
restrictedAllowedValues[1] = buildAllowedValue("symbolicName2", "secondLabel");

formAPI.setAllowedValues("BillType", restrictedAllowedValues);
```

# Etat des champs

Plusieurs fonctions permettent de changer l'état d'un champ au sein d'un formulaire. Elles s'utilisent avec les paramètres :

* ``fieldName`` correspondant à l'identifiant du champ 
* ``boolean`` correspondant à l'activation de l'état 

| Fonction                                   		| Description                                                                    |
|---------------------------------------------------|--------------------------------------------------------------------------------|
|setReadOnly(String fieldName, boolean isReadOnly)  | Définit si le champ est en lecture seule ou non                  		         |        
|getTagValidity(String fieldName)					| Récupère la validité d'un champ                                                |
|setValid(String fieldName, boolean valid)          | Modifie la validité d'un champ. Si le paramètre ``valid`` est <br> ``false`` alors la soumission du formulaire ne pourra pas être validée |
|setVisible(String fieldName, boolean isVisible)    | Définit si le champ est visible ou masqué                               		 |        


__Exemple :__ Changer la visibilité d'un champ d'un formulaire d'indexation

```javascript
formAPI.setVisible("BillType", false);
```

## Abonnement au changement de validité d'un formulaire 

Différentes fonctions permettent de s'abonner au changement de validité d'un formulaire en fonction du besoin : 
	
* Validité du formulaire complet, à savoir, les champs et le contenu :  

```javascript
formAPI.registerForValidity(function(isValid, invalidFields, invalidTypes){
	console.log("Component is valid=" + isValid + ", invalidFields=" + invalidFields + ", invalidTypes=" + invalidTypes);
})
```

* Validité partielle du formulaire : 

Cette fonction permet de s'abonner uniquement à la validité d'une partie du formulaire, soit les champs (``FIELDS``), soit le contenu (``CONTENT``). 
<br/>
Dans l'exemple suivant, on s'abonne uniquement au changement de validité des champs.

```javascript
formAPI.registerForPartialValidity("FIELDS", function(isValid, type, invalidFields){
	console.log("Component is valid=" + isValid + ", invalidFields=" + invalidFields + ", type=" + type);
})
```

<br/>

Les fonctions suivantes sont également à disposition pour connaître l'état du formulaire courant : 

| Fonction                      | Description                                                                                   |
|-------------------------------|-----------------------------------------------------------------------------------------------|
|getInvalidType(String type)	| Récupère la validité à partir du nom d'une partie de formulaire : ``FIELDS`` pour les champs invalides ou ``CONTENT`` pour le  contenu / pièces jointes invalides  |
|getInvalidTypes()              | Récupère les noms de parties invalides du formulaire                                          |        


# Lister les champs d'un formulaire

La fonction ``formAPI.getFields()`` sur un formulaire permet de récupérer la liste des identifiants des champs présents dans ce formulaire.


# Changement de valeur

Pour fournir à vos utilisateurs des formulaires interactifs, il est possible de s'abonner aux changements de valeur d'un champ afin de modifier son état ou modifier un autre champ. 

```javascript
  formAPI.registerForFieldChange("Montant", function(fieldName, fieldValue){
	// Utilisation de la nouvelle valeur d'un champ
  });
```