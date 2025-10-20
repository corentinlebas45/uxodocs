---
date: "2002-01-27T13:20:01+02:00"
title: "Operation context"
description: "Use the operation context of an operation"
---

# Principle

When an operation is executed, the context in which it was performed is provided as input, and its type differs according to the original action. The variable `context` contains an object inherited from Java API.
<br/>

# Action context definition 

Depending on the action to which the operation is subscribed, the operation context changes:
<br/>
-- ``CREATE``: Java API. 
<br/>
-- ``UPDATE``: Java API. 
<br/>
-- ``UPDATE_CONTENT``: Java API. 
<br/>
-- ``ANSWER``: Java API. 
<br/>
-- ``ASSIGN``: Java API. 
