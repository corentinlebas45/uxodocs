# **Welcome to uxopian-ai**

uxopian-ai is a standalone framework designed to streamline the integration of Large Language Models (LLMs) into third-party software. It provides a robust set of tools and a unified interface to interact with various AI providers, enabling developers and integrators to build powerful AI-driven features with ease.

This documentation will guide you through the installation, architecture, concepts, and configuration of the uxopian-ai service.

## **Getting Started**

Before you begin, ensure your environment meets the following requirements.

### **Deployment Options**

uxopian-ai is designed as a standalone service and can be deployed in two primary ways:

* **As a Java Application:** The service can be run directly, requiring a **Java 21** runtime environment.  
* **As a Docker Container:** This is the recommended method for a standardized and isolated deployment. You will need to use the official Docker image provided by Uxopian.

### **Requirements**

To run the uxopian-ai service, the following dependency is **mandatory**:

* **OpenSearch:** The framework requires a running instance of OpenSearch to store and manage entities like conversations and messages.  
  * **Required Version:** [2.12.0 or higher](https://hub.docker.com/r/opensearchproject/opensearch)

All other libraries are managed internally by the framework and do not require any separate installation.

*To continue, please proceed to the [Installation Guide](https://www.google.com/search?q=./getting_started/installation_guide.md).*
