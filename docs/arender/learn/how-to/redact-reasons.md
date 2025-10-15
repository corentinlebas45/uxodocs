---
title: "Les raisons des biffures"
weight: 
draft: false
icon: mdi-pencil-ruler-outline
## search related keywords
keywords: ["tutorial", "raison", biffure ]
related:
    - name : "Fonctionnalité de biffage"
      rel: '/content/features/redact.fr.md'
---

### Ajouter une raison

Il est possible d'ajouter des raisons de biffage. Les valeurs du paramètre `symbolicName` seront affichées directement sur la biffure. 


{{< tag type="code" title="WEB-INF/classes/arender-custom-server-integration.xml">}}

```xml
    <bean id="availableRedactReasons" class="java.util.ArrayList">
		<constructor-arg>
			<list>
				<bean
					class="com.arondor.viewer.annotation.common.RedactReason">
					<property name="symbolicName" value="(b)(1)" />
					<property name="displayName">
						<map>
							<entry key="fr" value="Informations classées pour protéger la sécurité nationale." />
							<entry key="en" value="Information that is classified to protect national security." />
						</map>
					</property>
				</bean>
			</list>
		</constructor-arg>
	</bean>
```

[shortcode]

## Valeur par défaut 

Vous pouvez ajouter une ou plusieurs raisons par défaut grâce à la propriété suivante. La valeur par défaut (ici '(b)(1)') correspond à la valeur de la propriété avec le nom "symbolicName" (voir l'exemple ci-dessus).

Si plusieurs raisons sont ajoutées comme valeur par défaut elles seront séparées par des virgules (ex : (b)(1),(b)(2) ).

{{< tag type="code" title="WEB-INF/classes/arender-server.properties">}}

```cfg
arender.server.annotations.default.redact.reason=(b)(1)
```
[shortcode]

Si cette propriété n'a pas de valeur, par défaut la biffure ne possédera pas de raison.

{{< tag type="warning">}}

Votre valeur par défaut **doit** être ajoutée dans votre fichier de customisation (la configuration de arender-custom-integration.xml). Sinon, cette valeur ne sera pas prise en compte.

[shortcode]

