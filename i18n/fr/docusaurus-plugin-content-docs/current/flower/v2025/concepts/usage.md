---
title: Cas d'application
---

:::info
Découvrez les concepts évoqués dans un cas d'application simple : la **Gestion de factures fournisseurs**  
:::


# Scénario
Une solution de gestion de factures fournisseurs gère de manière digitalisée le traitement des factures émises par des fournisseurs.

Pour compliquer notre cas d'application, ajoutons un peu de processus ! Les factures dont le montant est supérieur à 2500€ doivent être soumises à la validation d'un tiers.

Les factures peuvent être consultées par deux services de l'entreprise : 

* le service comptable : afin de traiter les factures, une liste de factures à traiter sera présentée à ses utilisateurs
* le service achat : afin de pouvoir négocier lors de futures commandes, ses utilisateurs pourront consulter l'ensemble des factures émises par un fournisseur donné

# Solution

## Gestion des documents

Ces factures possèdent un ensemble de caractéristiques communes : 

* Un émetteur
* La date d'émission
* Un numéro de pièce
* Un libellé
* Montant hors taxe
* Etc.


Dans cet exemple, nous optons pour des composants de catégorie *Document* étant donné qu'ils auront un contenu (image, PDF...).
Nous choisissons une classe de documents unique *FactureFournisseur* référençant les classes de tags : 

|Classe de tags|Type|Obligatoire|
|-------------|----|-----------|
|Emetteur|Chaîne de caractère|Oui|
|DateEmission|Date|Oui|
|NumeroPiece|Chaîne de caractère|Oui|
|MontantHT|Décimal|Oui|

*Le libellé de la facture sera utilisé pour remplir le nom du document*


## Traitement

Afin de notifier le service comptable de l'arrivée d'une facture à traiter, nous allons déclencher le traitement d'une tâche de traitement de facture à la création d'un document de classe *FactureFournisseur*. Nous définissons donc la classe de tâches *TraitementFacture* avec les caractéristiques suivantes :

### Les tags de l'étape de traitement

### La pièce jointe

Afin que le service comptable puisse traiter la facture en s'appuyant sur les informations (et le fichier) de la facture reçue, nous ajoutons une pièce jointe sur la classe de tâche : 

* catégorie : *Document*
* classe : *FactureFournisseur*
* obligatoire : *Oui*


### Les réponses

Les factures reçues sont toujours parfaites, nous ajoutons donc une seule réponse *Valider* offrant ainsi, au service comptable, seulement la possibilité de valider la facture reçue. 



## Consultation 


## Validation


:::info 
Ce type de conception peut être appliqué à *(tous)* vos cas d'usages autour de la gestion de documents électroniques.
:::