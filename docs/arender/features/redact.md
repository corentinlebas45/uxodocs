---
title: Biffer
icon: mdi-marker
keyword: ["fonctionnalité", "biffer", "obfusquer"]
related:
    - name : "Règle de création d'annotation"
      rel: '/content/learn/how-to/annotation-creation-rule.fr.md'
    - name : "Les raisons des biffures"
      rel: '/content/learn/how-to/redact-reasons.fr.md'
---

## Activer les vraies biffures

Par défaut et pour l'optimisation des performances, ARender permet à tout utilisateur de sélectionner le texte derrière la rédaction.

Si vous avez besoin de désactiver ce comportement, vous devez utiliser les vraies biffures, c'est-à-dire configurer ARender pour qu'il ne récupére le texte que pour les utilisateurs autorisés. Pour cela il faut :

* Activer la récupération des biffures avant la génération d'image :

{{< tag type="code" title="~/configurations/arender-custom-server.properties">}}

```cfg
arender.server.process.annotations.rendition=true
```

[shortcode]

* Implémenter l'interface **AuthenticationServiceProvider**. Exemple disponible sur GitHub : [GitHub](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/src/main/java/com/arondor/arender/sample/connector/authentication/service/CustomAuthenticationServiceProvider.java)

## Comportement par défaut 

ARender offre la possibilité de cacher le contenu de n'importe quel type de document via la fonctionnalité de biffage.

Pour activer le panneau dédié au biffage, ajouter la propriété suivante. Par défaut, elle est désactivée. 

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
redactexplorer.enabled=true
```

[shortcode]


Ce panneau vous donnera accès aux différents boutons de biffage. 

Par défaut, quatre boutons de création classique de biffure sont mis à disposition. 

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
redactexplorer.redact=true
redactexplorer.redactZone=true
redactexplorer.redactPageContent=true
redactexplorer.redactFullPage=true
```

[shortcode]


Le premier permet de biffer du texte.
Le deuxième permet de biffer par rapport à une zone tracée.
Le troisième permet de biffer tout le contenu textuel de la page courante.
Le quatrième permet de biffer toute la page courante.

Deux boutons de création avancé de biffure sont mis à disposition.

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
redactexplorer.manualInput=true
redactexplorer.rules=true
redactexplorer.redact.with.reasons=true
```

[shortcode]

Le premier permet d'ouvrir le panneau de saisie manuelle. 
Le deuxième permet d'ouvrir le panneau des règles. 

Vous trouverez plus de détails sur le biffage avancé en dessous. 


Il est possible de sélectionner des raisons pour les appliquer sur les biffures.

Par défaut le bouton radio "Avec raison" est sélectionné. 
{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
# Si true, le radio bouton "Avec raison" est sélectionné 
redactexplorer.redact.with.reasons=true
```

[shortcode]

Les raisons sont définies dans les fichiers de configurations, il est possible de les modifier ainsi que les raisons par défaut comme expliqué dans [la documentation dédiée]({{< relref "/content/learn/how-to/redact-reasons.fr.md">}})


{{< tag type="warning">}}

Par défaut, seul l'utilisateur **admin** peut sauvegarder les biffures

Pour tester veuillez :
* Vous connecter à ARender en tant qu'admin :
    * Vider les Cookies ARender,
    * **Ou** Ouvrir ARender en navigation privée.
* Ouvrir ARender et ajouter la ligne suivante dans l'URL du navigateur : ?user=admin&redactexplorer.enabled=true

[shortcode]


## Biffage avancé

Le panneau de biffage avancé propose deux boutons, la saisie manuelle et les règles : 

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
redactexplorer.manualInput=true
redactexplorer.rules=true
redactexplorer.redact.with.reasons=true
```

[shortcode]



### La saisie manuelle 

La saisie manuelle permet de biffer un texte ou le pattern renseigné dans le champ de saisie. 

Il est possible de personnaliser l'application des biffures grâce au bouton dédié :
- Sélection de pages : permet de sélectionner le document courant entier, un intervalle de pages, plusieurs pages ou la page courante grâce à des boutons radio. 
Par défaut, l'option "Document entier" est sélectionnée.

Une fois la recherche lancée, vous pouvez voir un aperçu des résultats sur votre document. 
Si vous souhaitez affiner votre sélection, vous pouvez ouvrir le panneau des résultats : 
- Un panneau vertical s'ouvre et vous permet de visualiser tous les résultats
- Désélectionnez les résultats que vous ne voulez pas biffer
- Appliquez les biffures sélectionnées en cliquant sur le bouton "Appliquer".

### Les règles

L'option des règles permet de sélectionner une ou plusieurs règles et les appliquer. 
Ces règles sont définies dans les fichiers de configuration comme expliqué dans [la documentation dédiée]({{< relref "/content/learn/how-to/annotation-creation-rule.fr.md">}})

Une fois vos règles sélectionnées, lancez la recherche. Cela affichera un aperçu des résultats sur votre document. 
Si vous souhaitez affiner votre sélection, vous pouvez ouvrir le panneau des résultats : 
- Un panneau vertical s'ouvre et vous permet de visualiser tous les résultats
- Désélectionnez les résultats que vous ne voulez pas biffer
- Appliquez les biffures sélectionnées en cliquant sur le bouton "Appliquer".



## Les options avancées


### Ajouter des boutons personnalisés
 
Il est également possible d'ajouter vos propres boutons. Dans votre fichier *arender-custom-integration.xml* ajoutez les informations du bouton.

{{< tag type="code" title="configurations/arender-custom-integration.xml">}}

```xml
    <bean id="addRedact"
		class="com.arondor.viewer.client.toppanel.presenter.ActivableButtonPresenter">
             <constructor-arg value="addRedact" />
             <constructor-arg>
                 <ref bean="labels#addRedact" />
             </constructor-arg>
             <constructor-arg value="standardButton icon-square toppanelButton"/>
             <property name="enabled" value="true" />
             <property name="buttonGroup" value="topPanel" />
             <property name="inactiveButtonHandler">
                 <ref bean="quitAnnotationCreationAction" />
             </property>
             <property name="buttonHandler">
                 <ref bean="redactZoneCreationAction" />
             </property>		
    </bean>
```

[shortcode]

Ensuite, ajoutez l'id du bean de votre bouton dans la liste nommée "redactButtons". Si elle n'existe pas, créez la.

{{< tag type="code" title="configurations/arender-custom-integration.xml">}}

```xml
<bean id="redactExplorerView"
	class="com.arondor.viewer.client.documentnavigator.redact.RedactExplorerView"
	scope="prototype">
    <property name="redactButtons">
        <list>
        	<ref bean="addRedact" />
        </list>
    </property>
</bean>
```

[shortcode]

## Conversion des biffures V3/V4 en biffures V2023

Le modèle des biffures a évolué dans la version 2023 d'ARender. Pour faciliter la conversion, un nouvel annotation accessor, nommé RedactConverterAnnotationAccessor, est introduit, ce qui permet d'activer facilement la conversion à la volée.

### Utilisation via un bean

Le nouvel annotation accessor prend en paramètre le nom du bean d'un autre annotation accessor. Ce nom de bean peut être modifié de la manière suivante :

{{< tag type="code" title="configurations/arender-custom-server.properties">}}

```cfg
arender.server.wrapper.source.annotation.accessor=myCustomAnnotationAccessorBeanName
```

[shortcode]

myCustomAnnotationAccessorBeanName est l'annotation accessor qui sera ajouté dans l'annotation accessor qui effectue la conversion.

{{< tag type="warning">}}

L'annotation accessor doit avoir un constructeur avec la signature suivante :

```java
public CustomAnnotationAccessor(DocumentService documentService, DocumentAccessor documentAccessor)
```

[shortcode]



### Utilisation via du code Java

Si l'instanciation de votre *CustomAnnotationAccessor* est effectuée en utilisant du code Java, vous devrez modifier l'instanciation comme suit :

{{< tag type="code" title="Exemple de code">}}

```java
RedactConverterAnnotationAccessor myConverterAccessor = new RedactConverterAnnotationAccessor(new CustomAnnotationAccessor());
```

[shortcode]


Dans le cas où vous souhaitez arrêter la conversion à la volée, vous devrez utiliser la méthode suivante :


{{< tag type="code" title="Exemple de code">}}

```java
redactConverterAnnotationAccessor().setConvert(false);
```

[shortcode]

Ainsi que la propriété : 

{{< tag type="code" title="Exemple de code">}}

```cfg
arender.server.wrapper.source.convert=false
```

[shortcode]
