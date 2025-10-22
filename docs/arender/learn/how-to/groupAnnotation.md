---
title: "Groupe d'annotations"
description: ""
weight: 
draft: false
icon: mdi-pencil-box-multiple-outline
## search related keywords
keywords: ["tutorial", "annotation", "groupe"]
---

L'assignation d'un groupe à une annotation se fait avec l'utilisation de la propriété *Security* qui permet de stocker une valeur désignant l'appartenance à un groupe.

Par défaut, seulement deux valeurs sont utilisables :
- Privé
- Publique

La liste de valeur est configurable. Une propriété doit être activée afin de visualiser la liste déroulante en étant en mode d'édition d'annotation.

[shortcode]

```cfg
arender.server.annotations.text.security.support=true
```

[shortcode]

## Modification par configuration

La liste de groupe d'annotation est configurable.

Exemple de configuration du bean qui va peupler la liste de groupe d'annotation :

[shortcode]

```cfg
<bean id="availableSecurityLevels" class="java.util.ArrayList">
    <constructor-arg>
        <list>
            <bean
                class="com.arondor.viewer.annotation.common.SecurityLevel">
                <property name="symbolicName" value="group1" />
                <property name="localizedDisplayNames">
                    <map>
                        <entry key="fr" value="Groupe 1" />
                        <entry key="en" value="Group 1" />
                    </map>
                </property>
            </bean>
            <bean
                class="com.arondor.viewer.annotation.common.SecurityLevel">
                <property name="symbolicName" value="group2" />
                <property name="localizedDisplayNames">
                    <map>
                        <entry key="fr" value="Groupe 2" />
                        <entry key="en" value="Group 2" />
                    </map>
                </property>
            </bean>
            <bean
                class="com.arondor.viewer.annotation.common.SecurityLevel">
                <property name="symbolicName" value="group3" />
                <property name="localizedDisplayNames">
                    <map>
                        <entry key="fr" value="Groupe 3" />
                        <entry key="en" value="Group 3" />
                    </map>
                </property>
            </bean>
        </list>
    </constructor-arg>
</bean>
```

[shortcode]


Visuellement, une liste déroulante s'affiche dans le toppanel à l'édition d'une annotation.

![image]([shortcode])

## Modification par le connecteur

Dans la classe Java qui implémente l'interface *DocumentAccessor*, vous pouvez changer l'implémentation du setter pour l'*AnnotationAccessor* afin de définir une nouvelle liste de valeur pour les groupes d'annotation. 

Voici un exemple basique d'implémentation de la fonction *setAnnotationAccessor* qui va définir une nouvelle liste de valeur :

```java

@Override
@JsonIgnore
public void setAnnotationAccessor(AnnotationAccessor annotationAccessor) throws AnnotationsNotSupportedException
{
    this.annotationAccessor = annotationAccessor;

    List<SecurityLevel> list = new ArrayList<>();
    list.add(buildSecuriyLevel("group1", "Groupe 1", "Group 1"));
    list.add(buildSecuriyLevel("group2", "Groupe 2", "Group 2"));
    list.add(buildSecuriyLevel("group3", "Groupe 3", "Group 3"));
    annotationAccessor.getAnnotationCreationPolicy().setAnnotationsSupportSecurity(true);
    annotationAccessor.getAnnotationCreationPolicy().setAvailableSecurityLevels(list);
}

private SecurityLevel buildSecuriyLevel(String symbolicName, String fr, String en)
{
    SecurityLevel securityLevel = new SecurityLevel();
    securityLevel.setSymbolicName(symbolicName);
    securityLevel.setLocalizedDisplayNames(buildLocalizedDisplayNames(fr, en));
    return securityLevel;
}

private Map<String, String> buildLocalizedDisplayNames(String fr, String en)
{
    Map<String, String> map = new HashMap<>();
    map.put("fr", fr);
    map.put("en", en);
    return map;
}

```



## Garder la notion d'annotation privée

La notion d'annotation privée est compatible avec la notion de groupe d'annotation. Il faut garder la définition de *property name="symbolicName" value="private"*. La description des annotations privées est trouvable à la section *Annotation securities configuration* dans la page [Annotation]({{< relref "/learn/how-to/annotation.fr.md">}})

Exemple de configuration du bean qui va peupler la liste de groupe d'annotation avec le choix *Privé* :

[shortcode]

```cfg
<bean id="availableSecurityLevels" class="java.util.ArrayList">
    <constructor-arg>
        <list>
            <bean
                class="com.arondor.viewer.annotation.common.SecurityLevel">
                <property name="symbolicName" value="private" />
                <property name="localizedDisplayNames">
                    <map>
                        <entry key="fr" value="Privé" />
                        <entry key="en" value="Private" />
                    </map>
                </property>
            </bean>
            <bean
                class="com.arondor.viewer.annotation.common.SecurityLevel">
                <property name="symbolicName" value="group1" />
                <property name="localizedDisplayNames">
                    <map>
                        <entry key="fr" value="Groupe 1" />
                        <entry key="en" value="Group 1" />
                    </map>
                </property>
            </bean>
            <bean
                class="com.arondor.viewer.annotation.common.SecurityLevel">
                <property name="symbolicName" value="group2" />
                <property name="localizedDisplayNames">
                    <map>
                        <entry key="fr" value="Groupe 2" />
                        <entry key="en" value="Group 2" />
                    </map>
                </property>
            </bean>
            <bean
                class="com.arondor.viewer.annotation.common.SecurityLevel">
                <property name="symbolicName" value="group3" />
                <property name="localizedDisplayNames">
                    <map>
                        <entry key="fr" value="Groupe 3" />
                        <entry key="en" value="Group 3" />
                    </map>
                </property>
            </bean>
        </list>
    </constructor-arg>
</bean>
```

[shortcode]


![image]([shortcode])


## Comment utiliser la notion de groupe

Maintenant que les annotations ont une notion de groupe, il est possible, par exemple, de rendre non modifiable les annotations dans le groupe "privé".

Exemple dans l'implémentation de l'*AnnotationAccessor* qui va créer ou mettre à jour les annotations non modifiable si le groupe est "privé" : 
```java

@Override
public void create(List<Annotation> annotations) throws AnnotationsNotSupportedException, AnnotationCredentialsException, InvalidAnnotationFormatException, AnnotationNotAvailableException
{
    updateAnnotationSecurity(annotations);

    // Code custom + appel à la base de donnée pour stocker les annotations
}

@Override
public void update(List<Annotation> annotations) throws AnnotationsNotSupportedException, AnnotationNotAvailableException, AnnotationCredentialsException, InvalidAnnotationFormatException
{
    updateAnnotationSecurity(annotations);

    // Code custom + appel à la base de donnée pour mettre à jour les annotations
}

private void updateAnnotationSecurity(List<Annotation> annotations)
{
    for(Annotation annotation : annotations)
    {
        if("private".equals(annotation.getSecurity()))
        {
            annotation.getFlags().setLocked(true);
            annotation.getFlags().setReadonly(true);
        }
    }
}

```