+++
date = "2019-06-05T13:20:01+02:00"
title = "OpenID Connect"
description = "Un pour tous, tous pour un"
+++

# Concept

[OpenID Connect](https://openid.net/connect/) est un protocole permettant de déléguer l'authentification d'une application à une application tierce appelée _Identity Provider_ (IDP).
Basé sur le protocole OAuth 2 et son mécanisme de [code d'autorisation](https://tools.ietf.org/html/rfc6749#section-1.3.1), OpenId Connect est utilisé par FlowerDocs GUI afin de fournir à ses utilisateurs un mécanisme de **S**ingle **S**ign **O**n.

Depuis la page d'authentification, les utilisateurs s'authentifient en sélectionnant un des _Identity Providers_ affichés. 
Une fois authentifié au niveau de l'_Identity Provider_, l'utilisateur est redirigé vers une URL de redirection `redirect_uri` de FlowerDocs GUI avec un code d'autorisation généré par l'_Identity Provider_.

A partir de ce code d'autorisation, FlowerDocs GUI initialise la session HTTP utilisateur après avoir récupéré les `id_token` et `access_token` auprès de l'_Identity Provider_. Ensuite un jeton utilisateur propre à FlowerDocs est généré.


# Prérequis

**1.** La clé secrète de FlowerDocs Core doit être partagée avec FlowerDocs GUI pour pouvoir utiliser ce mécanisme. 
Le partage de la clé secrète est nécessaire afin que FlowerDocs GUI puisse initialiser la session utilisateur en générant un jeton utilisateur valide (propriété `token.key` dans le fichier _gui.properties_).

**2.** Autorisation de l'URL de retrait dans l'_Identity Provider_

# Configuration

La configuration d'un _Identity Provider_ OpenId Connect peut être réalisée à travers la console d'administration FlowerDocs. 
Cette configuration est stockée dans des documents techniques de classe `OAuthClientConfiguration`. Les différents paramètres à renseigner sont stockés dans des tags.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns5:DocumentClass category="DOCUMENT" active="false" technical="true" xmlns="http://flower.com/docs/domain/common" xmlns:ns2="http://flower.com/docs/domain/componentclass" xmlns:ns4="http://flower.com/docs/domain/tagclass" xmlns:ns3="http://flower.com/docs/domain/i18n" xmlns:ns6="http://flower.com/docs/domain/component" xmlns:ns20="http://flower.com/docs/domain/security" xmlns:ns5="http://flower.com/docs/domain/documentclass" xmlns:ns8="http://flower.com/docs/domain/search" xmlns:ns7="http://flower.com/docs/domain/acl" xmlns:ns13="http://flower.com/docs/domain/scope" xmlns:ns9="http://flower.com/docs/domain/file" xmlns:ns12="http://flower.com/docs/domain/reservation" xmlns:ns11="http://flower.com/docs/domain/task" xmlns:ns22="http://flower.com/docs/domain/folderclass" xmlns:ns10="http://flower.com/docs/domain/taskclass" xmlns:ns21="http://flower.com/docs/domain/virtualfolderclass" xmlns:ns17="http://flower.com/docs/domain/folder" xmlns:ns16="http://flower.com/docs/domain/document" xmlns:ns15="http://flower.com/docs/domain/report" xmlns:ns14="http://flower.com/docs/domain/workflow" xmlns:ns19="http://flower.com/docs/domain/fact" xmlns:ns18="http://flower.com/docs/domain/virtualFolder">
    <id>OAuthClientConfiguration</id>
    <ns2:data>
        <ACL>acl-admin</ACL>
    </ns2:data>
    <ns2:tagReferences tagName="ClientId" mandatory="true" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="ClientSecret" mandatory="true" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="AuthorizationGrantType" mandatory="false" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="RedirectUriTemplate" mandatory="true" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="Scope" mandatory="false" multivalued="true" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="AuthorizationUri" mandatory="true" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="TokenUri" mandatory="true" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="JwkSetUri" mandatory="false" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="UserInfoUri" mandatory="true" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="UserNameAttributeName" mandatory="true" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="MemberOfAttribute" mandatory="false" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="RegistrationId" mandatory="true" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="ClientName" mandatory="false" multivalued="false" technical="false" readonly="false" order="0" />
    <ns2:tagReferences tagName="Icon" mandatory="false" multivalued="false" technical="false" readonly="false" order="0" />
  	<ns2:tagReferences tagName="RegistrationOrder" mandatory="false" multivalued="false" technical="false" readonly="false" order="10">
        <ns4:descriptions language="EN">
            <ns3:value>Loading order</ns3:value>
        </ns4:descriptions>
        <ns4:descriptions language="FR">
            <ns3:value>Ordre de chargement</ns3:value>
        </ns4:descriptions>
        <ns4:pattern></ns4:pattern>
    </ns2:tagReferences>
	<ns2:displayNames language="EN">
		<ns3:value>oAuthClients configuration</ns3:value>
	</ns2:displayNames>
	<ns2:displayNames language="FR">
</ns5:DocumentClass>
```


## Compte d'accès

La plupart des _Identity Providers_ nécessitent une authentification pour pouvoir lancer le processus d'authentification.
Pour configurer le compte utilisé par FlowerDocs pour contacter l'_Identity Provider_, il est nécessaire de valoriser les tags : 

* `ClientId` : l'identifiant représentant l'application cliente (ou _Relying party_) : FlowerDocs GUI
* `ClientSecret` : le mot de passe associé à l'identifiant 

## Lien avec FlowerDocs
* `RedirectUriTemplate` : template utilisé pour la génération du paramètre `redirect_uri` (la valeur doit être définie à _{baseUrl}/login/oauth2/code/{registrationId}_) 
* `Scope` : les scopes OAuth 2.0 (à minima _openid_ et _email_)
* `UserNameAttributeName` : Nom de l'attribut à utiliser comme identifiant de l'utilisateur 
* `RegistrationId` : Identifiant unique du serveur d'autorisation
* `ClientName` : Libellé du client
* `Icon` : Icône Font Awesome à afficher sur la page de connexion
* `MemberOfAttribute` : Nom de l'attribut permettant de fournir des groupes



## Endpoints

Les différents endpoints requis par le protocole OpenId Connect doivent être configurés à l'aide des tags suivants : 

* `AuthorizationUri` : Endpoint d'autorisation de l'utilisateur
* `TokenUri` : Endpoint permettant de récupérer les jetons
* `JwkSetUri` :  Endpoint utilisé pour accéder à la clé publique (JWK) du serveur d'autorisations permettant de valider les informations reçues
* `UserInfoUri` : Endpoint exposant les attributs (ou _claims_) des utilisateurs


_Pour plus de détails, consultez les spécifications_ [OpenId Connect](https://openid.net/specs/openid-connect-core-1_0.html)


## Exemples

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns3:Document category="DOCUMENT" name="Google" xmlns="http://flower.com/docs/domain/common"
	xmlns:ns2="http://flower.com/docs/domain/component" xmlns:ns3="http://flower.com/docs/domain/document">
	<id>Google</id>
	<ns2:data>
		<ns2:classId>OAuthClientConfiguration</ns2:classId>
	</ns2:data>
	<ns2:Tags>
		<ns2:tags name="ClientId" readOnly="false">
			<ns2:value>***</ns2:value>
		</ns2:tags>
		<ns2:tags name="ClientSecret" readOnly="false">
			<ns2:value>***</ns2:value>
		</ns2:tags>
		<ns2:tags name="RedirectUriTemplate" readOnly="false">
			<ns2:value>{baseUrl}/login/oauth2/code/{registrationId}</ns2:value>
		</ns2:tags>
		<ns2:tags name="Scope" readOnly="false">
			<ns2:value>openid</ns2:value>
			<ns2:value>profile</ns2:value>
			<ns2:value>email</ns2:value>
			<ns2:value>address</ns2:value>
			<ns2:value>phone</ns2:value>
		</ns2:tags>
		<ns2:tags name="AuthorizationUri" readOnly="false">
			<ns2:value>https://accounts.google.com/o/oauth2/v2/auth</ns2:value>
		</ns2:tags>
		<ns2:tags name="TokenUri" readOnly="false">
			<ns2:value>https://www.googleapis.com/oauth2/v4/token</ns2:value>
		</ns2:tags>
		<ns2:tags name="JwkSetUri" readOnly="false">
			<ns2:value>https://www.googleapis.com/oauth2/v3/certs</ns2:value>
		</ns2:tags>
		<ns2:tags name="UserInfoUri" readOnly="false">
			<ns2:value>https://www.googleapis.com/oauth2/v3/userinfo</ns2:value>
		</ns2:tags>
		<ns2:tags name="UserNameAttributeName" readOnly="false">
			<ns2:value>sub</ns2:value>
		</ns2:tags>
		<ns2:tags name="RegistrationId" readOnly="false">
			<ns2:value>google</ns2:value>
		</ns2:tags>
		<ns2:tags name="ClientName" readOnly="false">
			<ns2:value>Google</ns2:value>
		</ns2:tags>
		<ns2:tags name="Icon" readOnly="false">
			<ns2:value>border-danger text-danger mdi mdi-google</ns2:value>
		</ns2:tags>
	</ns2:Tags>
</ns3:Document>
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns3:Document category="DOCUMENT" name="Microsoft" xmlns="http://flower.com/docs/domain/common"
	xmlns:ns2="http://flower.com/docs/domain/component" xmlns:ns3="http://flower.com/docs/domain/document">
	<id>Microsoft</id>
	<ns2:data>
		<ns2:classId>OAuthClientConfiguration</ns2:classId>
	</ns2:data>
	<ns2:Tags>
		<ns2:tags name="ClientId" readOnly="false">
			<ns2:value>***</ns2:value>
		</ns2:tags>
		<ns2:tags name="ClientSecret" readOnly="false">
			<ns2:value>***</ns2:value>
		</ns2:tags>
		<ns2:tags name="AuthorizationGrantType" readOnly="false">
			<ns2:value>{baseUrl}/login/oauth2/code/{registrationId}</ns2:value>
		</ns2:tags>
		<ns2:tags name="RedirectUriTemplate" readOnly="false">
			<ns2:value>{baseUrl}/login/oauth2/code/{registrationId}</ns2:value>
		</ns2:tags>
		<ns2:tags name="Scope" readOnly="false">
			<ns2:value>openid</ns2:value>
			<ns2:value>profile</ns2:value>
			<ns2:value>email</ns2:value>
		</ns2:tags>
		<ns2:tags name="AuthorizationUri" readOnly="false">
			<ns2:value>https://login.microsoftonline.com/common/oauth2/v2.0/authorize</ns2:value>
		</ns2:tags>
		<ns2:tags name="TokenUri" readOnly="false">
			<ns2:value>https://login.microsoftonline.com/common/oauth2/v2.0/token</ns2:value>
		</ns2:tags>
		<ns2:tags name="JwkSetUri" readOnly="false">
			<ns2:value>https://login.microsoftonline.com/common/discovery/v2.0/keys</ns2:value>
		</ns2:tags>
		<ns2:tags name="UserInfoUri" readOnly="false">
			<ns2:value>https://graph.microsoft.com/oidc/userinfo</ns2:value>
		</ns2:tags>
		<ns2:tags name="UserNameAttributeName" readOnly="false">
			<ns2:value>sub</ns2:value>
		</ns2:tags>
		<ns2:tags name="RegistrationId" readOnly="false">
			<ns2:value>microsoft</ns2:value>
		</ns2:tags>
		<ns2:tags name="ClientName" readOnly="false">
			<ns2:value>Microsoft</ns2:value>
		</ns2:tags>
		<ns2:tags name="Icon" readOnly="false">
			<ns2:value>border-info text-info mdi mdi-microsoft</ns2:value>
		</ns2:tags>
	</ns2:Tags>
</ns3:Document>


# Connexion automatique

Pour authentifier un utilisateur automatiquement à l'aide de ce mécanisme d'authentification, il est possible d'ajouter le paramètre `sso=auto` dans l'URL.

Avec ce paramètre, l'utilisateur, lorsqu'il accède à la page de connexion est automatiquement authentifié en utilisant OpenId Connect.


