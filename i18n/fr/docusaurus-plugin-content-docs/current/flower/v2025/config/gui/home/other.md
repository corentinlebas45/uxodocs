+++
date = "2018-03-28T13:20:01+02:00"
title = "Autre"
+++

# Lien avec un formulaire de recherche

Les widgets basés sur une recherche peuvent être couplés à un formulaire de recherche.
Ainsi en cliquant sur le titre du widget, l'utilisateur sera redirigé vers le formulaire de recherche défini avec les critères pré-remplis s'ils sont affichés ou autorisés.

Pour définir le formulaire de recherche à ouvrir, il est nécessaire de rajouter la propriété suivante au niveau du bean de recherche : 

```xml
<property name="id">
	<bean class="com.flower.docs.domain.common.Id">
		<property name="value" value="AgentSearch" />
	</bean>
</property>
```

