---
title: "Redact reasons"
weight: 
draft: false
icon: mdi-pencil-ruler-outline
## search related keywords
keywords: ["tutorial", "reasons", "redact" ]
related:
    - name : "Redact feature"
      rel: '/content/features/redact.en.md'
---

## Add reason
It is possible to add redact reasons. These reasons will be directly displayed on the redact.

Change the value to the values you want.

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


## Default value

You can add one or more default reasons with the following property. The default reason value (here '(b)(1)') corresponds to the value in the “symbolicName” property (see the above example).

If there are several default reasons, it should be comma-separated values (ex:(b)(1),(b)(2)).

{{< tag type="code" title="WEB-INF/classes/arender-server.properties">}}

```cfg
arender.server.annotations.default.redact.reason=(b)(1)
```


If this property has no value, by default the redact will have no reason.

{{< tag type="warning">}}

Your default value **must** be added to your customization file (in arender-custom-integration. xml). Otherwise, this value will not be taken into account.

