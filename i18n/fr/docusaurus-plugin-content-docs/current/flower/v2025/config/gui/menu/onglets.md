+++
date = "2001-03-01T13:20:01+02:00"
title = "Onglets"
+++

# Les différents types d'onglets

## Onglets basés sur une URL  

Pour permettre une meilleure intégration avec d'autres applications du système d'information, FlowerDocs permet d'ajouter des onglets à l'interface graphique basés sur une URL.

Pour ajouter un nouvel onglet de ce type, il suffit d'ajouter la propriété suivante au profil utilisateur concerné : ``tab.url=<libellé>(<URL>,<icône>)``

:::info
Configurez une icône et le nom de l'onglet en définissant une propriété telle que : `Visionneuse(https://arender.io,fa fa-map)`
:::


## Onglets basés sur un dossier  

FlowerDocs offre la possibilité de définir de nouveaux onglets basés sur des dossiers (physiques ou virtuels).

Le principe consiste en l'affichage d'un écran divisé en deux : 

*  une barre latérale : présente les différentes agrégations hiérarchiques (ex: documents par statut de validation) 
*  un contenu : présente les composants référencés sous forme de tableau triable (ex: les documents d'un statut donné)


Pour ajouter un nouvel onglet, il suffit d'ajouter la propriété suivante au profil utilisateur concerné : 

* ``tab.folder=<identifiant du dossier physique>``
* ``tab.virtualfolder=<identifiant du dossier virtuel>``

Le nom de l'onglet affiché dans l'IHM correspond au nom du dossier.

*La sécurité de ces onglets est assurée via l'ACL portée par le dossier.*


:::info
Configurez une icône et le nom de l'onglet internationalisé en définissant une propriété telle que : `MyTab(icon=fa fa-thermometer-2,fr=Dossier,en=Folder)`
:::

## Onglets basés sur une recherche  

Les onglets basés sur une recherche permettent de définir dynamiquement des onglets correspondant à un dossier physique ou virtuel.
Après avoir configuré une recherche pour une équipe d'utilisateurs, les utilisateurs voient les dossiers trouvés affichés en tant qu'onglet.

La recherche mentionnée doit être définie dans un document de classe `GUIConfiguration` puis associée à une équipe en ajoutant la propriété `tab.component.resolve=<nom de la recherche>`. 

[shortcode]
```xml
<bean id="agentFolderSearch" class="com.flower.docs.domain.search.Search">
  <property name="category">
    <value type="com.flower.docs.domain.component.Category">FOLDER</value>
  </property>
  <property name="request">
    <bean class="com.flower.docs.domain.search.SearchRequest">
      <property name="selectClause">
        <bean class="com.flower.docs.domain.search.SelectClause">
          <property name="fields">
            <list>
              <value>name</value>
            </list>
          </property>
        </bean>
      </property>
      <property name="filterClauses">
        <list>
          <bean class="com.flower.docs.domain.search.AndClause">
            <property name="criteria">
              <list>
                <bean class="com.flower.docs.domain.search.Criterion">
                  <property name="name" value="classid" />
                  <property name="type">
                    <value type="com.flower.docs.domain.search.Types">STRING</value>
                  </property>
                  <property name="operator">
                    <value type="com.flower.docs.domain.search.Operators">EQUALS_TO</value>
                  </property>
                  <property name="values">
                    <list>
                      <value>Folder</value>
                    </list>
                  </property>
                </bean>
              </list>
            </property>
          </bean>
        </list>
      </property>
      <property name="max" value="1" />
    </bean>
  </property>
</bean>
```
[shortcode]


# Ordre des onglets 

L'ordre de l'ensemble des onglets peut être redéfini pour chaque équipe. Pour définir l'ordre des onglets d'une équipe, il faut lui rajouter la propriété ``tabs.order``.
 
La valeur de cette propriété doit être définie sur le modèle suivant : ``${TabType1}(${TabName1});${TabType2}(${TabName2});`` où ``${TabType#}`` = type d'onglet et ``${TabName#}`` = nom de l'onglet

Le type d'onglet peut prendre les valeurs suivantes : 

| Valeur              | Description                                     |
|----------------------|-------------------------------------------------|
|NATIVE                | Onglet natif FlowerDocs                             |
|FOLDER                | Onglet basé sur un dossier                      |
|VIRTUALFOLDER         | Onglet basé sur un dossier virtuel              |
|URL                   | Onglet basé sur une URL                         |
|RESOLVED_COMPONENT    | Onglet(s) basé(s) sur une recherche             |


La valeur du nom d'un onglet dépend de son type : 

| Type                 | Nom                                                                |
|----------------------|--------------------------------------------------------------------|
|FOLDER                | Identifiant du dossier                                             |
|VIRTUALFOLDER         | Identifiant du dossier virtuel                                     |
|URL                   | URL de l'onglet défini dans la propriété tab.url                   |
|RESOLVED_COMPONENT    | Identifiant de la recherche définie dans la propriété tab.component.resolve|


Pour les onglets natifs le nom peut prendre les valeurs suivantes : 

| Valeur              | Description                                     |
|----------------------|-------------------------------------------------|
|ADMIN                 | Onglet d'administration                         |
|HOME                  | Onglet d'accueil                                |
|INSERT                | Onglet d'insertion                              |
|SEARCH                | Onglet de recherche                             |

*Attention : Tous les onglets à afficher doivent être préalablement définis.*

<br/>
**Exemple :** L'exemple suivant permet d'afficher les onglets dans l'ordre suivant Administration, Onglet URL "https://flowerdocs.com/documentation", Onglet dossier virtuel "root", Onglet dossier "Arondor-2020".

Les trois derniers onglets doivent être préalablement définis au niveau des propriétés `tab.url`, `tab.virtualfolder` et `tab.folder` :

``NATIVE(ADMIN);URL(https://flowerdocs.com/documentation);VIRTUALFOLDER(root);FOLDER(Arondor-2020);``
