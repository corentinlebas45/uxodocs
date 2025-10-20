---
title: Aller plus ploin
description: 
---

:::info
Sans lien direct avec le module, cette section vous permet d'aller plus loin dans l'implémentation d'un client FlowerDocs.
:::

# Type de validation

L'annotation `@FlowerDocsClient(security = SecurityMode.TOKEN)` permet de sécuriser les requêtes reçues par l'application en exigeant un jeton utilisateur.
Par défaut, un jeton reçu est validé en interrogeant FlowerDocs Core mais ce comportement peut être changé grâce à la propriété `token.validation.type` qui accepte les valeurs : 

* `none` : aucune validation du jeton au niveau du client. Le jeton fourni doit être lisible mais sa signature n'est pas validée. Ce mode doit donc être utilisé avec précaution par exemple dans le cas où toutes les requêtes reçues par le client FlowerDocs sont transmises à FlowerDocs Core. Dans ce cas, le token sera validé directement par FlowerDocs Core lors de la réception des requêtes.
* `local` : la validation du jeton est réalisée par le client. Ce mode exige que le client dispose de la clé secrète (`secret.key`) utilisée pour vérifier les jetons.


# Sécurité personnalisée

Dans ce module, une filtre HTTP intercepte chaque requête reçue et initialise le contexte utilisateur à partir du jeton fourni.
Le mode de sécurité personnalisé (`SecurityMode.CUSTOM`) laisse la liberté aux développeurs d'implémenter leur propre mécanisme d'authentification.

<br/>
La configuration de sécurité ci-dessous permet par exemple d'implémenter sa gestion de la sécurité en définissant un filtre HTTP permettant d'intercepter les requêtes entrantes.


```java
package com.flower.samples;

import javax.servlet.Filter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.flower.docs.security.authentication.TokenAuthenticationFilter;

@Configuration
@Order(2)
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
    @Override
    public void configure(HttpSecurity http) throws Exception
    {
        // @formatter:off
        http
            .addFilterBefore(customFilter(), BasicAuthenticationFilter.class)
            .authorizeRequests().anyRequest().authenticated();
        // @formatter:on
    }

    @Bean
    Filter customFilter() throws Exception
    {
        // Return custom HTTP filter
    }
}
```