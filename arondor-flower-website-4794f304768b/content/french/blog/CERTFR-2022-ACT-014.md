+++
date = "2022-04-06T00:17:03+02:00"
title = "Vulnérabilité dans Spring Framework"
categories = []
tags = ["security"]
banner = "img/features/security.svg"

+++

# Contexte

Plusieurs vulnérabilités critiques ont été découvertes dans la bibliothèque Spring Framework et son écosystème. Cette bibliothèque est très souvent utilisée dans les projets de développement d'application Java/J2EE ainsi que par les éditeurs de solutions logicielles sur étagère basées sur Java/J2EE.

Deux de ces vulnérabilités permettent à un attaquant de provoquer une exécution de code arbitraire à distance s'il a la capacité de soumettre une donnée à une application qui utilise la bibliothèque ([CERTFR-2022-AVI-297](https://www.cert.ssi.gouv.fr/avis/CERTFR-2022-AVI-297/) et [CERTFR-2022-ALE-002](https://www.cert.ssi.gouv.fr/alerte/CERTFR-2022-ALE-002/)). La dernière peut provoquer une atteinte à la confidentialité, l'intégrité et/ou un deni de service à distance ([CERTFR-2022-ALE-002](https://www.cert.ssi.gouv.fr/alerte/CERTFR-2022-ALE-002/)).

Des preuves de concept ont déjà été publiées. 

# Impacts sur FlowerDocs

## CERTFR-2022-AVI-287

Les applications FlowerDocs GUI, FlowerDocs Core n'utilisent pas la librairie de spring-cloud-function, elles ne sont donc pas vulnérables face à la vulnérabilité susmentionnée.

## CERTFR-2022-ALE-002

Les applications FlowerDocs GUI, FlowerDocs Core n'utilisent pas la librairie de spring-cloud-gateway, elles ne sont donc pas vulnérables face à la vulnérabilité susmentionnée.

## CERTFR-2022-AVI-297

Les applications FlowerDocs GUI, FlowerDocs Core n'utilisent pas la librairie spring-webflux mais embarque spring-webmvc. Cependant FlowerDocs GUI et FlowerDocs Core nécessitent un JDK 8 et non 9+ comme mentionné [ici](https://spring.io/blog/2022/03/31/spring-framework-rce-early-announcement#am-i-impacted) par l'éditeur pour l'exploitation de la vulnérabilité.  

Les applications FlowerDocs GUI, FlowerDocs Core ne sont donc pas vulnérables face à la vulnérabilité susmentionnée.
