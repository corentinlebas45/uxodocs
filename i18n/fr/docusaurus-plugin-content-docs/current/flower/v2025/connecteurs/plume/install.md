+++
date = "2001-03-28T13:20:01+02:00"
title = "Installation"
intro = "Le plugin Plume doit faire partie du même domaine HTTP qu'ARender."
+++

Deux types de packaging sont fournis : 

* WAR (à déployer dans le même serveur d'application que la GUI)
* JAR exécutable

# WAR 

Lorsque Plume est déployée en tant qu'application WEB dans un conteneur de servlet, il est nécessaire d'ajouter une propriété `plume.config.dir`, au niveau de la JVM. Cette propriété doit référencer le répertoire dans lequel est stocké le fichier de configuration `plume.properties`.

Le nom du fichier de configuration peut être changé en ajoutant la propriété `spring.config.name` avec comme valeur le nom du fichier (sans extension). 

# JAR exécutable 

La configuration de l’application est basée sur les mécanismes Spring Boot. 
Les propriétés permettant de configurer Plume et ses connecteurs peuvent être fournies de différentes manières : 

* Par une propriété de la JVM :

	```javascript
	java -D<name>=<value> -jar plume-<version>.jar
	```

	* Il est conseillé de forcer l'encodage afin de ne pas avoir de problèmes d'accents notamment dans les templates de mail et de signature en ajoutant le paramètre suivant :

		```javascript
		-Dfile.encoding=UTF-8
		```

* Par un fichier de propriété. Le nom de ce fichier (sans extension) doit être fourni comme propriété de la JVM `spring.config.name`. A l’exécution, ce fichier sera cherché par Spring dans les répertoires suivants : 
	* Le sous-répertoire `/config`  du répertoire courant (/ d’exécution)
	* Le répertoire courant
