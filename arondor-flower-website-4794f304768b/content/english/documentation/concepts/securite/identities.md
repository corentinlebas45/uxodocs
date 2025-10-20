+++
date = "2018-03-20T13:20:01+02:00"
title = "Identities"
description = "Organise users accessing your application"
+++

# Principle

Within the FlowerDocs platform, an identity is a user, a group of users or a team. 
This concept identifies the users who use the platform so that: 

* data security is guaranteed according to the authenticated user
* users can collaborate
* FlowerDocs GUI 's configuration is adapted to users' needs


These identities are stored in a [corporate directory](broken-link.md) configured by scope or in the [internal users]’ repository (broken-link.md).



# Users


# Groups

This notion is generally used to apply specific permissions according to the groups to which a user belongs.

# Teams

This allows you to have user groupings distinct from those defined in the corporate directory. Teams are generally used in organisations where the hierarchy defined in the corporate directory differs from the hierarchy defined in the FlowerDocs platform.

Teams have a list of properties that can be used to configure FlowerDocs GUI.


# Roles

The FlowerDocs platform offers several native roles with specific permissions. A role can be assigned to a user by defining a team whose identifier is the role name.

|Name| Description|
|---|------------|
|`FUNCTIONAL_ADMIN`|Functional administrator *(data model)*|
|`SECURITY_ADMIN`|Security Administrator *(ACL, identities...)*|
|`ADMIN`|Scope administrator|
|`SYSTEM_ADMIN`|Platform administrator|