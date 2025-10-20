---
title: A travers l'application FlowerDocs
---

# Mise en place

## Création du document contenant le logo

Pour notre exemple nous utiliserons un logo qui sera contenu au sein de l'application. Pour cela créez un document depuis l'application FlowerDocs et ajoutez en contenu du document le logo. 

:::warning
Vous conserverez pour la suite du tutoriel l'identifiant du document créé.
:::

## Ajout du logo personnalisé depuis l'administration FlowerDocs 

L'interface graphique est paramétrable depuis la console d'administration FlowerDocs. Ainsi ajoutez un fichier de configuration XML contenant le bean `appInfo` qui va nous permettre de surcharger plusieurs propriétés dont notre logo.



```xml

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/context  
       http://www.springframework.org/schema/context/spring-context.xsd"> 
    <bean id="appInfo" class="com.flower.docs.gui.client.layout.ApplicationInfo">
	</bean>
</beans>
```


<br/>
Pour récupérer votre logo, vous devez connaître l'emplacement de celui-ci. Pour l'exemple nous avons choisi de l'avoir en tant que document dans l'application. Ainsi nous pouvons utiliser les services REST FlowerDocs afin de le récupérer :  

```javascript
./rest/documents/{docId}/files/content?index=0
```
<br/>
Nous allons donc ajouter au sein de notre bean la propriété logoURL avec pour valeur l'emplacement vers le logo souhaité. 

```xml

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/context  
       http://www.springframework.org/schema/context/spring-context.xsd"> 
    <bean id="appInfo" class="com.flower.docs.gui.client.layout.ApplicationInfo">
    	<property name="logoURL" value="./rest/documents/{docId}/files/content?index=0" />
	</bean>
</beans>
```

:::warning
 Remplacez le {docId} par l'identifiant du document FlowerDocs contenant le logo
:::

:::info
	De la même manière vous pouvez modifiez d'autres propriétés de l'application à travers ce bean `ApplicationInfo` : 
	
* La description avec la propriété "description"
* L'environnement avec la propriété "environment"
* La version avec la propriété "version"
* Le style avec la propriété "styleSheet"
	
:::