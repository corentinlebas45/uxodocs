+++
date = "2018-03-07T13:23:01+02:00"
title = "Numérique"
description = "Utilisez les tags numériques."
+++

Le modèle de données FlowerDocs offre la possibilité de définir trois types de tags numériques : 

* les entiers `INT`
* les nombres décimaux `FLOAT`
* les montants `CURRENCY`


# Entier

Ce type permet la saisie d'un nombre entier.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>NombreDocument</id>
    <ns2:type>INT</ns2:type>
</ns2:TagClass>
```

# Décimal

Ce type permet la saisie d'un nombre décimal.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>TauxResa</id>
    <ns2:type>FLOAT</ns2:type>
</ns2:TagClass>
```

# Montant

Ce type permet la saisie d'un nombre décimal avec uniquement 2 décimales stockées et affichées.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>MontantTTC</id>
    <ns2:type>CURRENCY</ns2:type>
</ns2:TagClass>
```
