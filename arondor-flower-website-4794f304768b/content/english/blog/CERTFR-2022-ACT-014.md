+++
date = "2022-04-06T00:17:03+02:00"
title = "Spring Framework vulnerability"
categories = []
banner = "img/features/security.svg"

+++

# Contexte

Several critical vulnerabilities have been discovered in the Spring Framework library and its ecosystem. This library is widely used in Java/J2EE application development projects, as well as in Java/J2EE-based off-the-shelf software solutions.

Two of these vulnerabilities allow an attacker to cause remote arbitrary code execution if he has the ability to submit data to an application using the ([CVE-2022-22965](https://www.cve.org/CVERecord?id=CVE-2022-22965) and [CVE-2022-22947](https://www.cve.org/CVERecord?id=CVE-2022-22947)). The latter can cause a breach of confidentiality, integrity and/or a remote denial of service ([CVE-2022-22947](https://www.cve.org/CVERecord?id=CVE-2022-22947)).

Proofs of concept have already been published. 

# Impacts on FlowerDocs

## CVE-2022-22963

FlowerDocs GUI and FlowerDocs Core applications do not use the spring-cloud-function library, so they are not vulnerable to the above vulnerability.

## CVE-2022-22947

FlowerDocs GUI and FlowerDocs Core applications do not use the spring-cloud-gateway library, and are therefore not vulnerable to the above-mentioned vulnerability.

## CVE-2022-22965

FlowerDocs GUI and FlowerDocs Core applications don't use the spring-webflux library, but embed spring-webmvc. However, FlowerDocs GUI and FlowerDocs Core require JDK 8 and not 9+ as mentioned. [here](https://spring.io/blog/2022/03/31/spring-framework-rce-early-announcement#am-i-impacted) by the editor to exploit the vulnerability.  

FlowerDocs GUI and FlowerDocs Core applications are therefore not vulnerable to the above vulnerability.
