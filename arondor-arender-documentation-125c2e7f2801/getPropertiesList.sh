#!/bin/bash

set -e

if [ -z $GIT_BRANCH ]; then
  GIT_BRANCH=$(git branch --show-current)
fi

_converterFolder_='maven/properties-to-doc'

_propetiesFile_='web-ui/hmi/hmi-war/src/main/resources/arender-default.properties'

_owner_='arondor'
_output_="${_converterFolder_}/target/default.properties"

_repository_='arendernext'
_resultFile_='content/guides/configurations/web-ui/properties/full-config'

_propertiesUrl_="https://api.bitbucket.org/2.0/repositories/${_owner_}/${_repository_}/src/${GIT_BRANCH}/${_propetiesFile_}"

getMavenProjectProperty() {
  mvn -f ${_converterFolder_}/pom.xml help:evaluate -Dexpression="project.$1" -q -DforceStdout
}

echo "Get version ..."
_version_=$(getMavenProjectProperty 'version')
echo "+ Version is ${_version_}"

echo "Get app name ..."
_appname_=$(getMavenProjectProperty 'artifactId')
echo "+ App name is \"${_appname_}\""

echo -e "\n-- Building converter --"
mvn -B -ntp -f "${_converterFolder_}/pom.xml" clean install

set +e
echo -e "\n-- Downloading file at: ${_propertiesUrl_} --"
curl -sSf -u ${GIT_USR}:${GIT_PSW} ${_propertiesUrl_} -o ${_output_}

if [ ! -s ${_output_} ];then
  _propertiesUrl_=$(echo ${_propertiesUrl_} | sed "s#/${GIT_BRANCH}/#/master/#")
  echo -e "\n-- Downloading file at: ${_propertiesUrl_} --"
  curl -sSf -u ${GIT_USR}:${GIT_PSW} ${_propertiesUrl_} -o ${_output_}
fi

set -e
if [ -s ${_output_} ];then
  echo -e "+ Download complete 👌\n"
  echo -e "\n-- Start file generation --"
  java -jar "${_converterFolder_}/target/${_appname_}-${_version_}.jar" -i "${_output_}" -f "HUGO" \
    -en "${_resultFile_}.en.md" \
    -fr "${_resultFile_}.fr.md"
  echo "+ Generation complete 👌"
else
  echo "Error: Cannot get file"
  exit 1
fi
